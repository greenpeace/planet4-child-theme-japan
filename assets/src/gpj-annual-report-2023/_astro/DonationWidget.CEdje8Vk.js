import{j as e}from"./jsx-runtime.K1e75nIr.js";import{r as l}from"./index.NEDEFKed.js";const g=({as:r,content:p,...n})=>{const j=Array.isArray(p)?p:Array.of(p),t=r||"div";return r==="p"?j.map((s,a)=>e.jsx(t,{...n,children:s},a)):e.jsx(t,{...n,children:j.map((s,a)=>e.jsxs(l.Fragment,{children:[s,a!==j.length-1&&e.jsx("br",{})]},a))})},d=r=>{const[p,n]=l.useState(0),j=t=>()=>{n(t)};return e.jsxs("div",{className:"gpj-overflow-hidden gpj-bg-white gpj-rounded-md",children:[e.jsx("ul",{className:"gpj-flex gpj-bg-gray-200 gpj-border-b-0",children:r.content.DONATION_WIDGET.map((t,s)=>e.jsx("li",{className:`${p===s?"gpj-bg-white":""} gpj-flex gpj-items-center gpj-justify-center gpj-px-2 gpj-py-2 gpj-font-bold gpj-leading-tight gpj-text-center gpj-text-gray-500 gpj-bg-transparent gpj-cursor-default focus:gpj-outline-none xs:gpj-px-4`,onClick:j(s),children:e.jsx(g,{as:"span",content:t.TAB})},s))}),r.content.DONATION_WIDGET.map((t,s)=>e.jsx("div",{children:s===p&&e.jsx("div",{className:"gpj-m-0 gpj-text-gray-600",children:e.jsxs("div",{className:"gpj-p-4 sm:gpj-p-8",children:[t.TITLE&&e.jsx(g,{as:"h2",className:"gpj-text-xl gpj-font-bold",content:t.TITLE}),e.jsx(g,{as:"p",className:"gpj-mb-5",content:t.DESCRIPTION}),e.jsx("a",{href:t.LINK_HREF,target:"_blank",rel:"noreferrer",children:e.jsx("button",{type:"button",className:"gpj-w-full gpj-px-4 gpj-py-2 gpj-mb-5 gpj-text-white gpj-bg-[#f36b35] gpj-rounded-full",children:t.BUTTON})})]})})},s))]})};export{d as default};
