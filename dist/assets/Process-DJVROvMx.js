import{u as a,j as e,F as s}from"./index-CNrE7zhF.js";function n(){const{t,language:o}=a(),i=[0,1,2,3];return e.jsxs("section",{id:"process",style:{padding:"var(--space-24) var(--space-4)",background:"var(--bg-primary)",position:"relative",overflow:"hidden"},children:[e.jsxs("div",{style:{maxWidth:"var(--container-width)",margin:"0 auto"},children:[e.jsx(s,{children:e.jsxs("div",{style:{textAlign:"center",marginBottom:"7rem"},children:[e.jsx("span",{style:{color:"var(--accent-primary)",fontSize:"var(--text-sm)",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",display:"block",marginBottom:"var(--space-4)"},children:t("process.kicker")}),e.jsx("h2",{style:{fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,color:"var(--text-primary)",marginBottom:"var(--space-4)"},children:t("process.title")}),e.jsx("p",{style:{fontSize:"var(--text-lg)",color:"var(--text-secondary)",maxWidth:"600px",margin:"0 auto",lineHeight:1.6},children:t("process.subtitle")})]})}),e.jsxs("div",{className:"process-container",children:[e.jsx("div",{className:"process-line"}),i.map(r=>e.jsx(s,{delay:r*.15,children:e.jsxs("div",{className:"process-step",children:[e.jsx("div",{className:"process-circle",children:t(`process.items.${r}.step`)}),e.jsxs("div",{className:"process-content",children:[e.jsx("h3",{style:{fontSize:"var(--text-xl)",fontWeight:700,color:"var(--text-primary)",marginBottom:"var(--space-2)"},children:t(`process.items.${r}.title`)}),e.jsx("p",{style:{color:"var(--text-secondary)",lineHeight:1.6,fontSize:"0.95rem"},children:t(`process.items.${r}.desc`)})]})]})},r))]})]}),e.jsx("style",{children:`
        .process-container {
          display: flex;
          position: relative;
          justify-content: space-between;
          gap: var(--space-8);
        }
        
        .process-line {
          position: absolute;
          top: 32px; /* Center of the 64px circle */
          left: 0;
          right: 0;
          height: 2px;
          background: var(--border-subtle);
          z-index: 0;
        }

        .process-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .process-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-highlight);
          display: flex;
          align-items: center;
          justifyContent: center;
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--accent-primary);
          margin-bottom: var(--space-6);
          transition: all 0.3s ease;
          box-shadow: 0 0 0 4px var(--bg-primary); /* Masks the line behind it */
          /* Text alignment fallback since flex might not center perfectly without justify content in CSS block */
          justify-content: center;
        }

        .process-step:hover .process-circle {
          border-color: var(--accent-primary);
          background: var(--accent-primary);
          color: var(--bg-primary);
          box-shadow: 0 0 20px var(--accent-primary);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .process-container {
            flex-direction: column;
            gap: var(--space-12);
          }
          
          .process-line {
            top: 0;
            bottom: 0;
            left: 32px; /* Center of the vertically aligned circles */
            width: 2px;
            height: auto;
          }

          .process-step {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }

          .process-circle {
            margin-bottom: 0;
            margin-right: var(--space-6);
            flex-shrink: 0;
          }
        }
      `})]})}export{n as default};
