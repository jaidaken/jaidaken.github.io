import{a as t,j as e,m as s,L as r,B as o}from"./index.0e817360.js";const i="/assets/code.b80e6da5.webp";function c(a){return t("div",{className:"card-container",children:[t("div",{className:"card-text",children:[e("h2",{className:"card-title",children:a.title}),e("p",{className:"card-desc",children:a.desc})]}),e("div",{className:"card-img-div",children:e("img",{className:"card-img",src:a.img,alt:"Project preview image"})}),t("div",{className:"card-btn",children:[e("button",{className:"btn btn-primary",children:e("a",{href:a.demo,target:"_blank",children:"Demo"})}),e("button",{className:"btn",children:e("a",{href:a.source,target:"_blank",children:"Source"})})]})]})}function n(){document.documentElement.scrollTo({top:0,behavior:"smooth"})}function l(){return e(s.section,{id:"projects",className:"projects",initial:{y:"100%",opacity:0},animate:{y:"0%",opacity:1},transition:{ease:"backInOut",duration:1.4},exit:{y:"-100%"},children:t("div",{className:"project-container",children:[e("h2",{className:"project-title",children:"Projects"}),t("div",{className:"cards",children:[e(c,{img:i,title:"Vacation Log",desc:"A Full-stack app with Auth0 and database to track your vacations and visited destinations!",demo:"https://trip-logger-jh.herokuapp.com",source:"https://github.com/jaidaken/trip-logger"}),e(c,{img:i,title:"Responsive News",desc:"Practice for responsive pages",demo:"https://jaidaken.github.io/responsive-news-starter/",source:"https://github.com/jaidaken/responsive-news-starter"}),e(c,{img:i,title:"Portfolio",desc:"You're on it!",demo:"/",source:"https://github.com/jaidaken/jaidaken.github.io"}),e(c,{img:i,title:"Typescript Calculator",desc:"A functional calculator built with React and Typescript",demo:"https://merry-gingersnap-27b3bb.netlify.app/",source:"https://github.com/jaidaken/type-calc"})]}),e(s.div,{className:"next",initial:{opacity:0},animate:{opacity:[0,1]},transition:{ease:"easeInOut",duration:1,delay:2},children:t(r,{to:"/contact",onClick:n,children:[" ",e(o,{})," "]})})]})})}export{l as default};
