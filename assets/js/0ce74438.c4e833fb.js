"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6342],{4434:(e,t,n)=>{n.r(t),n.d(t,{StyledMain:()=>L,default:()=>z});var r=n(1262),o=n(6829),i=n(2949),a=n(5944),s=n(9422),l=n(7929),c=n(7294),d=n(9746);const u=o.Z.section`
  width: 50%;

  @media screen and (max-width: 1250px) {
    width: 100%;
  }

  > div {
    width: 100%;
    height: 100%;
  }

  pre {
    font-family: monospace !important;
    font-size: initial !important;
    background-color: transparent !important;
  }
`;var h=n(7357);const m=o.Z.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,p=e=>{let{children:t}=e;const n=(0,l.r1)(),{options:r}=n||{},{theme:o,useFiraCode:i}=r||{},a="dark"===o?"dark":"default",s=i?"Fira Code, monospace":"monospace";return h.Z.initialize({startOnLoad:!0,theme:a,fontFamily:s,securityLevel:"loose"}),(0,c.useEffect)((()=>{h.Z.contentLoaded()}),[]),c.createElement(m,{className:"mermaid","data-testid":"mermaid","data-theme":a,"data-font":s},t)},w=e=>{let{editorValue:t}=e;const{colorMode:n}=(0,i.I)(),{default:r}=(0,s.R)(t,{...a,Fragment:c.Fragment,remarkPlugins:[d.Z]}),o=r({components:{...l.wx,Mermaid:p}});return c.createElement(u,null,c.createElement(l.Pz,{options:{useFiraCode:!0,theme:n}},o.props.children))};var f=n(9037),E=n(3764);const x=o.Z.section`
  width: 50%;

  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`,g=(0,c.createContext)(null),C=e=>{let{children:t}=e;const[n,r]=(0,c.useState)(!1),o={hasError:n,setHasError:r,resetError:()=>r(!1)};return c.createElement(g.Provider,{value:o},t)},v=e=>{let{editorValue:t,setEditorValue:n}=e;const{resetError:r}=(0,c.useContext)(g),[o,a]=c.useState(window.innerWidth),{colorMode:s}=(0,i.I)();return(0,c.useEffect)((()=>{const e=()=>a(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)})),c.createElement(x,null,c.createElement(E.ZP,{height:o<1250?"50vh":"90vh",width:"100%",defaultLanguage:"Markdown",value:t,theme:"dark"===s?"vs-dark":"light",onChange:e=>{n(e),r()}}))},k=o.Z.section`
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 1250px) {
    width: 100%;
    height: 50vh;
  }
`,b=o.Z.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #d63031;
  text-align: center;
  margin-bottom: 20px;
`,y=o.Z.p`
  font-size: 20px;
  font-weight: 700;
  color: #d63031;
  text-align: center;
  margin-bottom: 20px;
`;class Z extends c.Component{constructor(e){super(e),this.state={error:""}}componentDidCatch(e){const{setHasError:t}=this.context;t(!0),this.setState({error:e.message})}static contextType=g;render(){const{hasError:e}=this.context;return e?c.createElement(k,null,c.createElement(b,null,"Error in mdx syntax:"),c.createElement(y,null,this.state.error),c.createElement("p",null,"The status automatically refreshes if you change something in the editor")):this.props.children}}const L=o.Z.main`
  display: flex;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;function z(){const[e,t]=c.useState('# Welcome to presentify\n\nclick arrows to move between slides\n\n---\n\n# useState Example\n```jsx showLineNumbers highlightLines="1,2,5-6"\nfunction Counter({initialCount}) {\n  const [count, setCount] = useState(initialCount);\n  return (\n    <>\n      counter: {count}\n      <button onClick={() => setCount(initialCount)}>reset</button>\n      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>\n      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>\n    </>\n  );\n}\n```');return c.createElement(f.Z,{title:"Check how it works"},c.createElement(r.Z,null,(()=>c.createElement(C,null,c.createElement(L,null,c.createElement(v,{editorValue:e,setEditorValue:t}),c.createElement(Z,null,c.createElement(w,{editorValue:e})))))))}}}]);