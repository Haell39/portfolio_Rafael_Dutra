import{c as m,u as L,r as n,P as v,j as t,F as X,m as j}from"./index-CNrE7zhF.js";import{P as Y}from"./PremiumImage-CXePEVFL.js";/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=m("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=m("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=m("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),B=20;function U(){const{language:p,t:s}=L(),[c,h]=n.useState(0),d=n.useRef(null),[x,C]=n.useState(1100),f=x<768,R=f?.82:.264;n.useEffect(()=>{const e=()=>{d.current&&C(d.current.offsetWidth)};e();const r=new ResizeObserver(e);return d.current&&r.observe(d.current),()=>r.disconnect()},[]);const o=v.length,b=x*R,u=n.useCallback(()=>h(e=>(e-1+o)%o),[o]),g=n.useCallback(()=>h(e=>(e+1)%o),[o]),k=n.useRef({startX:0}),z=n.useCallback(e=>{k.current.startX=e.touches[0].clientX},[]),T=n.useCallback(e=>{const r=e.changedTouches[0].clientX-k.current.startX;Math.abs(r)>50&&(r<0?g():u())},[g,u]),E=e=>{let r=e-c;for(;r>Math.floor(o/2);)r-=o;for(;r<-Math.floor(o/2);)r+=o;return r},w=n.useRef(c),S=e=>{let r=e-w.current;for(;r>Math.floor(o/2);)r-=o;for(;r<-Math.floor(o/2);)r+=o;return r};n.useEffect(()=>{w.current=c});const M=(x-b)/2;return t.jsxs("section",{id:"projects",style:{padding:"var(--space-24) 0",background:"var(--bg-secondary)",overflow:"hidden"},children:[t.jsx("style",{children:`
          .project-title {
            font-size: var(--text-lg);
            line-height: 1.3;
            margin: 0;
            font-weight: 600;
            background: linear-gradient(90deg, var(--text-primary) 0%, #10b981 40%, #34d399 50%, var(--text-primary) 60%, var(--text-primary) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 300% 100%;
            animation: title-shimmer 4s ease-in-out infinite;
          }

          @keyframes title-shimmer {
            0% { background-position: 100% 50%; }
            50% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .carousel-arrow {
            position: absolute;
            top: 50%;
            z-index: 10;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            color: white;
            border: 1px solid rgba(16, 185, 129, 0.3);
            background: rgba(16, 185, 129, 0.12);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow:
              0 0 20px rgba(16, 185, 129, 0.15),
              0 4px 12px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
          }

          .carousel-arrow:hover {
            background: rgba(16, 185, 129, 0.35);
            border-color: rgba(16, 185, 129, 0.6);
            box-shadow:
              0 0 32px rgba(16, 185, 129, 0.35),
              0 8px 24px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
            transform: translateY(-50%) scale(1.12);
          }

          .carousel-arrow:active {
            transform: translateY(-50%) scale(0.95);
            background: rgba(16, 185, 129, 0.5);
          }

          .carousel-arrow:focus-visible {
            outline: none;
            box-shadow:
              0 0 0 3px rgba(16, 185, 129, 0.4),
              0 0 32px rgba(16, 185, 129, 0.35);
          }

          .carousel-arrow--left {
            left: clamp(12px, 4%, 48px);
            transform: translateY(-50%);
          }

          .carousel-arrow--right {
            right: clamp(12px, 4%, 48px);
            transform: translateY(-50%);
          }

          @media (max-width: 768px) {
            .carousel-arrow {
              width: 36px;
              height: 36px;
            }
            .carousel-arrow--left {
              left: 6px;
            }
            .carousel-arrow--right {
              right: 6px;
            }
          }

          /* Subtle pulse animation to draw attention */
          @keyframes arrow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(16,185,129,0.15), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08); }
            50% { box-shadow: 0 0 28px rgba(16,185,129,0.25), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08); }
          }

          .carousel-arrow {
            animation: arrow-pulse 3s ease-in-out infinite;
          }

          .carousel-arrow:hover {
            animation: none;
          }

          .live-button-animated {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px 12px;
            border-radius: 999px; /* Pill shape for elegance */
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-decoration: none;
            color: white; /* Consistently white on the strong colored background */
            /* Strong reddish purple to bright fuchsia/rose */
            background: linear-gradient(90deg, #be185d 0%, #c026d3 50%, #be185d 100%);
            background-size: 200% auto;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            animation: button-shimmer 3s linear infinite;
            box-shadow: 0 4px 12px rgba(190, 24, 93, 0.3);
          }

          .live-button-animated:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(192, 38, 211, 0.5);
            color: white;
          }

          @keyframes button-shimmer {
            0% { background-position: 200% center; }
            100% { background-position: 0% center; }
          }
        `}),t.jsx("div",{style:{maxWidth:"var(--container-width)",margin:"0 auto",padding:"0 var(--space-4)"},children:t.jsx(X,{children:t.jsx("h2",{style:{fontSize:"var(--text-2xl)",marginBottom:"var(--space-12)"},children:s("projects.title")})})}),t.jsxs("div",{ref:d,onTouchStart:z,onTouchEnd:T,style:{position:"relative",width:"100%",overflow:"hidden",height:b*(9/16)+(f?240:210)},children:[v.map((e,r)=>{const l=E(r),W=S(r),i=l===0,P=Math.abs(l)===1,y=f?Math.abs(l)<=1:Math.abs(l)<=2,_=Math.abs(l-W)>2,I=M+l*(b+B),O={x:{type:"tween",duration:.5,ease:[.32,.72,0,1]},opacity:{duration:.4,ease:"easeInOut"},scale:{duration:.4,ease:"easeInOut"}},A={duration:0};return t.jsxs(j.div,{className:i?"metallic-hover":"",animate:{x:I,opacity:i?1:P?.5:0,scale:i?1:.92},transition:_?A:O,onClick:()=>{i?window.open(e.link,"_blank","noopener,noreferrer"):l<0?u():g()},style:{position:"absolute",top:0,left:0,width:b,borderRadius:"var(--radius-xl)",overflow:"hidden",cursor:"pointer",background:"var(--bg-card)",border:`1px solid ${i?"var(--border-highlight)":"var(--border-subtle)"}`,display:y?"flex":"none",flexDirection:"column",pointerEvents:y?"auto":"none",userSelect:"none",filter:i?"brightness(1)":"brightness(0.6) saturate(0.7)",boxShadow:i?"0 20px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)":"none",transition:"box-shadow 0.4s ease, border-color 0.4s ease, filter 0.4s ease"},children:[t.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16 / 9",background:"var(--bg-card-hover)",overflow:"hidden"},children:[t.jsx(Y,{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),t.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 50%, var(--bg-card) 100%)",pointerEvents:"none"}}),i&&t.jsx(j.a,{href:e.link,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.2},onClick:a=>a.stopPropagation(),style:{position:"absolute",top:"var(--space-3)",right:"var(--space-3)",background:"rgba(0,0,0,0.6)",borderRadius:"50%",padding:"6px",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,color:"white",cursor:"pointer",textDecoration:"none"},whileHover:{scale:1.1,background:"rgba(16,185,129,0.7)"},children:t.jsx(F,{size:16})})]}),t.jsxs("div",{style:{padding:"var(--space-4) var(--space-5)",display:"flex",flexDirection:"column",gap:"var(--space-1)",flex:1},children:[t.jsx("h3",{className:"project-title",children:p==="pt"?e.title:p==="es"&&e.titleEs||e.titleEn}),t.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-1)",marginBottom:"var(--space-1)"},children:[t.jsx("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",onClick:a=>a.stopPropagation(),style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"6px 12px",borderRadius:"999px",border:"1px solid var(--border-subtle)",background:"rgba(255, 255, 255, 0.03)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:"var(--text-primary)",fontSize:"0.75rem",fontWeight:500,letterSpacing:"0.05em",textDecoration:"none",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},onMouseEnter:a=>{a.currentTarget.style.background="var(--bg-card-hover)",a.currentTarget.style.transform="translateY(-2px)",a.currentTarget.style.borderColor="var(--border-highlight)"},onMouseLeave:a=>{a.currentTarget.style.background="rgba(255, 255, 255, 0.03)",a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.borderColor="var(--border-subtle)"},children:s("projects.cta_code")}),e.linkLive?t.jsx("a",{href:e.linkLive,target:"_blank",rel:"noopener noreferrer",onClick:a=>a.stopPropagation(),className:"live-button-animated",children:s("projects.cta_live")}):t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"6px 12px",borderRadius:"999px",border:"1px solid var(--border-subtle)",background:"var(--bg-card)",color:"var(--text-tertiary)",fontSize:"0.75rem",fontWeight:500,letterSpacing:"0.05em",cursor:"not-allowed",opacity:.7},onClick:a=>a.stopPropagation(),children:s("projects.cta_soon")})]}),t.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"var(--text-sm)",lineHeight:1.5,margin:0,flex:1,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:p==="pt"?e.description:p==="es"&&e.descriptionEs||e.descriptionEn}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-1)",marginTop:"4px"},children:e.tags.map(a=>t.jsx("span",{className:"chromatic-tag",style:{fontSize:"0.65rem",padding:"2px 8px",borderRadius:"var(--radius-full)"},children:a},a))})]})]},r)}),t.jsx("button",{onClick:u,className:"carousel-arrow carousel-arrow--left","aria-label":s("projects.prev_aria"),children:t.jsx(N,{size:24,strokeWidth:2.5})}),t.jsx("button",{onClick:g,className:"carousel-arrow carousel-arrow--right","aria-label":s("projects.next_aria"),children:t.jsx(D,{size:24,strokeWidth:2.5})})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"var(--space-2)",marginTop:"var(--space-6)"},children:v.map((e,r)=>t.jsx("button",{onClick:()=>h(r),"aria-label":`${s("projects.goto_aria")} ${r+1}`,style:{width:r===c?28:8,height:8,borderRadius:"var(--radius-full)",background:r===c?"var(--accent-hover)":"var(--border-highlight)",border:"none",cursor:"pointer",padding:0,transition:"width 0.3s ease, background 0.3s ease"}},r))})]})}export{U as default};
