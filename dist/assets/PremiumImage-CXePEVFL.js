import{r as s,j as e,A as c,m as o}from"./index-CNrE7zhF.js";function l({src:i,alt:r,...d}){const[t,a]=s.useState(!1);return s.useEffect(()=>{const n=new Image;n.src=i,n.complete&&a(!0)},[i]),e.jsxs("div",{style:{position:"relative",overflow:"hidden",width:"100%",height:"100%",backgroundColor:"var(--bg-card-hover)"},children:[e.jsx(c,{children:!t&&e.jsx(o.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite linear"}})}),e.jsx(o.img,{src:i,alt:r,onLoad:()=>a(!0),initial:{opacity:0,scale:1.1},animate:{opacity:t?1:0,scale:t?1:1.1},transition:{opacity:{duration:.5,ease:"easeOut"},scale:{duration:.7,ease:"easeOut"}},...d}),e.jsx("style",{children:`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `})]})}export{l as P};
