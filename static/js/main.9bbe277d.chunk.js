(this["webpackJsonpjackson-cai-resume"]=this["webpackJsonpjackson-cai-resume"]||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(16),n=s.n(a),i=(s(24),s(5)),r=s(6),l=s(8),o=s(7),j=s(13),d=s(17),h=s.n(d),b=(s(27),s(18)),m=s(9),u=s.n(m),O=s(1),p=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"cobweb",bg:!0,color:"#ff0000"}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e]})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[t,"."]})}),Object(O.jsx)("hr",{})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),x=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsxs)("ul",{className:"copyright",children:[Object(O.jsx)("li",{children:"\xa9 Copyright 2022 Jackson Cai"}),Object(O.jsxs)("li",{children:["Design by"," ",Object(O.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),f=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=(this.props.data.phone,this.props.data.email),a=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:t,alt:"Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About me"}),Object(O.jsx)("p",{children:s}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsx)("span",{children:e}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:"mailto:j-cai@outlook.com",children:c})})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:a,className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),s}(c.Component),v=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description})]},e.company)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:t})]})})]})}}]),s}(c.Component),N=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.email,t=this.props.data.contactmessage;return Object(O.jsx)("section",{id:"contact",children:Object(O.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch."})})}),Object(O.jsxs)("div",{className:"ten columns",children:[Object(O.jsx)("p",{className:"lead",children:t}),Object(O.jsx)("p",{className:"lead",children:Object(O.jsx)("a",{href:"mailto:j-cai@outlook.com",children:e})})]})]})})})}}]),s}(c.Component),w=s(19),g=s.n(w),y=0,k=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(O.jsx)("div",{className:"columns portfolio-item",children:Object(O.jsxs)("div",{className:"item-wrap",children:[Object(O.jsx)(g.a,{alt:e.title,src:t}),Object(O.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},y++)}));return Object(O.jsx)("section",{id:"portfolio",children:Object(O.jsx)(u.a,{left:!0,duration:1e3,distance:"40px",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"twelve columns collapsed",children:[Object(O.jsx)("h1",{children:"Check Out Some of My Works."}),Object(O.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),C=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.resume}),Object(O.jsx)(k,{data:this.state.resumeData.portfolio}),Object(O.jsx)(N,{data:this.state.resumeData.main}),Object(O.jsx)(x,{data:this.state.resumeData.main})]})}}]),s}(c.Component),D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(C,{}),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.9bbe277d.chunk.js.map