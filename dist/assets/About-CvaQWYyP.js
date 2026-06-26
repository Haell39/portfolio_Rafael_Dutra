import{c as a,u as l,j as e,F as d}from"./index-C6qC8r0T.js";import{D as y}from"./database-DCoc2I-Y.js";import{T as x}from"./terminal-ymJUMwQ7.js";/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=a("ChartNoAxesColumnIncreasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=a("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=a("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),g=[{name:"SQL",icon:y},{name:"Excel",icon:n},{name:"Power BI",icon:n},{name:"Power Query",icon:m},{name:"KPIs de Negócio",icon:s},{name:"Python",icon:x},{name:"Pandas",icon:p},{name:"ETL",icon:s},{name:"Git & GitHub",icon:h}];function k(){const{t:r}=l();return e.jsx("section",{id:"about",style:{padding:"var(--space-24) var(--space-4)"},children:e.jsx("div",{style:{maxWidth:"var(--container-width)",margin:"0 auto"},children:e.jsx(d,{children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"var(--space-12)",alignItems:"start"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"var(--space-8)"},children:[e.jsx("span",{style:{color:"var(--accent-primary)",fontSize:"var(--text-sm)",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",display:"block",marginBottom:"var(--space-4)"},children:r("about.kicker")}),e.jsx("h2",{style:{fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:800,letterSpacing:"-0.03em",lineHeight:1.1,color:"var(--text-primary)",marginBottom:"var(--space-2)"},children:r("about.title")}),e.jsx("h3",{style:{fontSize:"clamp(1.25rem, 3vw, 1.75rem)",fontWeight:600,lineHeight:1.2,background:"linear-gradient(to right, var(--accent-primary), var(--accent-secondary))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:r("about.subtitle_highlight")})]}),e.jsxs("div",{style:{color:"var(--text-secondary)",fontSize:"var(--text-lg)",lineHeight:1.8,display:"flex",flexDirection:"column",gap:"var(--space-4)"},children:[e.jsx("p",{children:r("about.p1")}),e.jsx("p",{children:r("about.p2")}),e.jsx("p",{children:r("about.p3")})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"var(--text-xl)",marginBottom:"var(--space-8)",color:"var(--text-primary)",display:"flex",alignItems:"center",gap:"var(--space-4)"},children:r("about.stack_title")}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-3)"},children:g.map((i,o)=>{const c=i.icon;return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3) var(--space-6)",background:"var(--bg-card)",borderRadius:"12px",border:"1px solid var(--border-subtle)",color:"var(--text-secondary)",transition:"all 0.3s ease",cursor:"default"},onMouseEnter:t=>{t.currentTarget.style.color="var(--text-primary)",t.currentTarget.style.borderColor="var(--border-highlight)",t.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:t=>{t.currentTarget.style.color="var(--text-secondary)",t.currentTarget.style.borderColor="var(--border-subtle)",t.currentTarget.style.transform="translateY(0)"},children:[e.jsx(c,{size:20}),e.jsx("span",{style:{fontWeight:600,fontSize:"var(--text-sm)"},children:i.name})]},o)})})]})]})})})})}export{k as default};
