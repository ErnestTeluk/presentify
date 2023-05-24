"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{2153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var i=n(2263),a=n(6829),r=n(9037),o=n(7294),l=n(9960);const c=a.Z.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`,d=a.Z.section`
  max-width: 1152px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 1230px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    flex-flow: column-reverse;
    max-width: 100%;
  }
`,s=a.Z.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-flow: column;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  @media screen and (max-width: 574px) {
    width: 100%;
    padding: 0 15px;
  }
`,m=a.Z.h1`
  font-size: 58px;
  margin-bottom: 0;
  ${e=>{let{color:t}=e;return t&&`color: ${t};`}};

  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 48px;
  }

  @media screen and (max-width: 868px) {
    font-size: 38px;
  }
`,p=a.Z.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
    justify-content: center;
    flex-wrap: wrap;
  }
`,x=(0,a.Z)(l.Z)`
  padding: 15px;
  border-radius: 50px;
  background-color: var(--ifm-link-color);
  color: white;
  text-decoration: var(--ifm-link-decoration);
  transition: background-color var(--ifm-transition-fast)
    var(--ifm-transition-timing-default);

  &:hover {
    color: white;
    background-color: var(--ifm-color-primary-darkest);
    text-decoration: none;
  }
`,f=()=>o.createElement(d,null,o.createElement(s,null,o.createElement(m,{color:"#6c5ce7"},"Presentify"),o.createElement(m,null,"Presentation decks using MDX in React"),o.createElement(p,null,o.createElement(x,{to:"/docs/getting-started/installation"},"Getting Started"),o.createElement(x,{to:"/docs/getting-started/why-presentify"},"Why Presentify?"),o.createElement(x,{to:"https://github.com/ErnestTeluk/presentify"},"View on Github"))),o.createElement(s,null,o.createElement(c,{src:"/presentify/img/logo2.svg",alt:"presentify logo"}))),h=a.Z.main`
  display: flex;
  justify-content: center;
`;function u(){const{siteConfig:e}=(0,i.Z)();return o.createElement(r.Z,{title:`${e.title} by ${e.organizationName}`,description:e.tagline},o.createElement(h,null,o.createElement(f,null)))}}}]);