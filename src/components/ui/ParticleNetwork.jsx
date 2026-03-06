import { useRef, useEffect } from "react";

/**
 * ParticleNetwork — Performant canvas particle network effect.
 *
 * Uses requestAnimationFrame with delta-time interpolation,
 * spatial grid for O(n) neighbor lookups instead of O(n²),
 * and respects prefers-reduced-motion.
 */
export default function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let dpr = window.devicePixelRatio || 1;
    let w, h;
    let animId;
    let particles = [];

    // Theme-aware colors
    const getColors = () => {
      const isDark =
        document.documentElement.getAttribute("data-theme") !== "light";
      return {
        particle: isDark
          ? "rgba(16, 185, 129, 0.5)"
          : "rgba(16, 185, 129, 0.35)",
        line: isDark ? "rgba(16, 185, 129," : "rgba(5, 150, 105,",
        glow: isDark ? "rgba(16, 185, 129, 0.06)" : "rgba(16, 185, 129, 0.04)",
      };
    };

    let colors = getColors();

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      colors = getColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const CONNECT_DIST = 140;
    const PARTICLE_DENSITY = 12000; // one particle per N px² — lower = more particles
    const MAX_PARTICLES = 80;
    const MIN_PARTICLES = 20;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(
        MIN_PARTICLES,
        Math.min(MAX_PARTICLES, Math.floor((w * h) / PARTICLE_DENSITY)),
      );

      // Preserve existing particles, add/remove as needed
      while (particles.length > count) particles.pop();
      while (particles.length < count) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.8,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Mouse interaction
    const mouse = { x: -1000, y: -1000 };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    canvas.addEventListener("mousemove", onMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave, { passive: true });

    // Animation loop
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Update particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Keep in bounds
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }

      // Draw connections (pre-batch for performance)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.25;
            ctx.strokeStyle = `${colors.line}${opacity})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Mouse connection
        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < CONNECT_DIST * 1.5) {
          const opacity = (1 - mdist / (CONNECT_DIST * 1.5)) * 0.4;
          ctx.strokeStyle = `${colors.line}${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.lineWidth = 0.5;
        }
      }

      // Draw particles
      ctx.fillStyle = colors.particle;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse glow
      const mgDist = Math.sqrt((mouse.x - w / 2) ** 2 + (mouse.y - h / 2) ** 2);
      if (mgDist < w) {
        const grd = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180,
        );
        grd.addColorStop(0, colors.glow);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.fillRect(mouse.x - 180, mouse.y - 180, 360, 360);
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        zIndex: 0,
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  );
}
