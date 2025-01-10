"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[367],{93329:function(z,y,s){s.r(y),s.d(y,{default:function(){return Je}});var H=s(48305),j=s.n(H),L=s(49530),Z=s(94161),r=s(29065),u=s(75271),e=s(52676),F=function(t){var n=(0,r.tx)(),a=(0,r.WF)(),l=a.themeConfig;return(0,e.jsx)("div",{className:"dumi-default-content","data-no-sidebar":!n||void 0,"data-no-footer":l.footer===!1||void 0,children:t.children})},K=F,U=function(){var t,n=(0,r.eL)(),a=n.frontmatter;return!((t=a.features)===null||t===void 0)&&t.length?(0,e.jsx)("div",{className:"dumi-default-features","data-cols":[3,2].find(function(l){return a.features.length%l===0})||3,children:a.features.map(function(l){var o=l.title,i=l.description,h=l.emoji,c=l.link,m;return c&&(m=/^(\w+:)\/\/|^(mailto|tel):/.test(c)?(0,e.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:o}):(0,e.jsx)(r.rU,{to:c,children:o})),(0,e.jsxs)("div",{className:"dumi-default-features-item",children:[h&&(0,e.jsx)("i",{children:h}),o&&(0,e.jsx)("h3",{children:m||o}),i&&(0,e.jsx)("p",{dangerouslySetInnerHTML:{__html:i}})]},o)})}):null},Y=U,B=s(50708),X=s(97973),w=s(66180),P=s(43816),G=s(64652),b=function(){var t=(0,r.WF)(),n=t.themeConfig.prefersColor.default,a=(0,r.OI)(),l=j()(a,3),o=l[1],i=o===void 0?n:o,h=l[2],c=(0,u.useState)(i==="dark"),m=j()(c,2),f=m[0],x=m[1],p=function(A,v){var S,N;x(v==null?void 0:v.checked);var M=v!=null&&v.checked?"dark":"light";h(M),(S=document.querySelector("html"))===null||S===void 0||S.setAttribute("data-color-mode",M),(N=document.querySelector("html"))===null||N===void 0||N.setAttribute("data-theme","default"),g()};(0,u.useEffect)(function(){x(i==="dark"),g()},[i]);var g=function(){var A,v=(A=document.getElementsByClassName("dumi-default-logo"))===null||A===void 0?void 0:A[0];v&&(v.innerHTML=i==="dark"?'<img src="https://gw.alicdn.com/imgextra/i1/O1CN01LwDOxt1XDDBlZPZEd_!!6000000002889-2-tps-361-96.png">':'<img src="https://gw.alicdn.com/imgextra/i4/O1CN01XWp8e31QbIi5YgLUw_!!6000000001994-2-tps-362-96.png">')};return(0,e.jsx)("span",{className:"dumi-default-color-switch",children:(0,e.jsx)(G.Z,{checkedChildren:(0,e.jsx)(w.default,{}),unCheckedChildren:(0,e.jsx)(P.default,{}),checked:f,onChange:p,size:"large"})})},Q=b,q=function(){return(0,e.jsx)(e.Fragment,{})},$=q,D=s(52333);function I(d){var t=d.pathname,n=d.current,a=d.target,l="base"in n?t.replace(n.base.replace(/\/$/,""),"")||"/":t.replace(new RegExp("".concat(n.suffix,"$")),"");return"base"in a?"".concat(a.base.replace(/\/$/,"")).concat(l).replace(/([^/])\/$/,"$1"):"".concat(l).concat(a.suffix)}var le=function(t){var n=t.locale,a=t.current,l=(0,r.TH)(),o=l.pathname,i=(0,u.useState)(function(){return I({pathname:o,current:a,target:n})}),h=j()(i,2),c=h[0],m=h[1];return(0,u.useEffect)(function(){m(I({pathname:o,current:a,target:n}))},[o,a.id,n.id]),(0,e.jsx)(r.rU,{className:"dumi-default-lang-switch",to:c,children:n.name})},oe=function(){var t=(0,r.WF)(),n=t.locales,a=(0,r.YB)(),l=a.locale,o=(0,r.bU)();return n.length<=1?null:n.length>2?(0,e.jsxs)("div",{className:"dumi-default-lang-select",children:[(0,e.jsx)("select",{defaultValue:l,onChange:function(h){r.m8.push(I({pathname:r.m8.location.pathname,current:o,target:n.find(function(c){var m=c.id;return m===h.target.value})}))},children:n.map(function(i){return(0,e.jsx)("option",{value:i.id,children:i.name},i.id)})}),(0,e.jsx)(D.r,{})]}):(0,e.jsx)(le,{locale:n.find(function(i){var h=i.id;return h!==l}),current:o})},ae=oe,ne=function(){var t=(0,r.WF)(),n=t.themeConfig,a=(0,r.bU)();return(0,e.jsxs)(r.rU,{className:"dumi-default-logo",to:"base"in a?a.base:"/",children:[n.logo!==!1&&(0,e.jsx)("img",{src:n.logo||"data:image/png;base64,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",alt:n.name}),n.name]})},re=ne,ie=s(26068),T=s.n(ie),_=function(){return(0,e.jsx)(e.Fragment,{})},se=_,ce=function(t){var n=t.data,a=(0,r.TH)(),l=a.pathname,o=(0,u.useState)(function(){var g;return(g=n.children)===null||g===void 0?void 0:g.some(function(C){var A=C.activePath||C.link;return A&&l.startsWith(A)})}),i=j()(o,2),h=i[0],c=i[1],m=n.children&&(0,e.jsx)("button",{className:"dumi-default-navbar-collapse-btn",type:"button",onClick:function(C){C.stopPropagation(),c(function(A){return!A})},"data-collapsed":h||void 0,children:(0,e.jsx)(D.r,{})}),f=n.children&&(0,e.jsx)("ul",{className:"dumi-default-navbar-dropdown","data-collapsed":h||void 0,children:(0,e.jsx)(ee,{data:n.children})}),x=n.activePath||n.link,p=x&&l.startsWith(x)?{className:"active"}:{};return n.link?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.rU,T()(T()({to:n.link},p),{},{children:n.title})),m,f]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",T()(T()({onClick:function(C){C.stopPropagation(),c(function(A){return!A})}},p),{},{children:n.title})),m,f]})},ee=function(t){var n=t.data;return(0,e.jsx)(e.Fragment,{children:n.map(function(a){return(0,e.jsx)("li",{children:a.link&&/^(\w+:)\/\/|^(mailto|tel):/.test(a.link)?(0,e.jsx)("a",{href:a.link,target:"_blank",rel:"noreferrer",children:a.title}):(0,e.jsx)(ce,{data:a})},a.activePath||a.link||a.title)})})},J=function(){var t=(0,r.OK)();return(0,e.jsxs)("ul",{className:"dumi-default-navbar",children:[(0,e.jsx)(ee,{data:t}),(0,e.jsx)(se,{})]})},ue=J,de=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 16",children:(0,e.jsx)("path",{d:"M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z"})})},he=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 16",children:(0,e.jsx)("path",{d:"M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z"})})},te="dumi:rtl",V=function(){var t=(0,u.useState)(!1),n=j()(t,2),a=n[0],l=n[1],o=(0,r.WF)(),i=o.themeConfig;return(0,u.useEffect)(function(){localStorage.getItem(te)&&(l(!0),document.documentElement.setAttribute("data-direction","rtl"))},[]),i.rtl?(0,e.jsx)("button",{type:"button",className:"dumi-default-rtl-switch",onClick:function(){a?(document.documentElement.removeAttribute("data-direction"),localStorage.removeItem(te)):(document.documentElement.setAttribute("data-direction","rtl"),localStorage.setItem(te,"1")),l(!a)},"data-dumi-tooltip":a?"RTL":"LTR","data-dumi-tooltip-bottom":!0,children:a?(0,e.jsx)(de,{}):(0,e.jsx)(he,{})}):null},R=V,ve=s(76332),Se=s(6644),ge=s(89236),be=s(52463),Ne=function(){return(0,e.jsxs)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),(0,e.jsx)("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),(0,e.jsx)("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"})]})},ke=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"})})},Ee=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"})})},ye=function(){return(0,e.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,e.jsx)("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"})})},Me={title:Ne,page:ke,content:Ee,demo:ye},xe=function(t){return(0,e.jsx)(e.Fragment,{children:t.texts.map(function(n,a){return(0,e.jsx)(u.Fragment,{children:n.highlighted?(0,e.jsx)("mark",{children:n.text}):n.text},a)})})},we=function(t){var n=(0,u.useCallback)(function(){var h=0,c=[];return t.forEach(function(m){m.title&&c.push({type:"title",value:{title:m.title}}),m.hints.forEach(function(f){c.push({type:"hint",activeIndex:h++,value:f})})}),[c,h]},[t]),a=(0,u.useState)(n),l=j()(a,2),o=l[0],i=l[1];return(0,u.useEffect)(function(){i(n)},[t]),o},Ie=function(t){var n=we(t.data),a=j()(n,2),l=a[0],o=a[1],i=(0,u.useState)(-1),h=j()(i,2),c=h[0],m=h[1];return(0,u.useEffect)(function(){var f=function(p){if(p.key==="ArrowDown")m((c+1)%o);else if(p.key==="ArrowUp")m((c+o-1)%o);else if(p.key==="Enter"&&c>=0){var g,C=l.find(function(A){return A.type==="hint"&&A.activeIndex===c}).value;r.m8.push(C.link),(g=t.onItemSelect)===null||g===void 0||g.call(t,C),document.activeElement.blur()}["Escape","Enter"].includes(p.key)&&m(-1)};return document.addEventListener("keydown",f),function(){return document.removeEventListener("keydown",f)}}),(0,e.jsx)("div",{className:"dumi-default-search-result",onMouseEnter:function(){return m(-1)},onMouseDownCapture:function(x){return x.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()},children:t.data.length||t.loading?(0,e.jsx)("dl",{children:l.map(function(f,x){return f.type==="title"?(0,e.jsx)("dt",{children:f.value.title},String(x)):(0,e.jsx)("dd",{children:(0,e.jsxs)(r.rU,{to:f.value.link,"data-active":c===f.activeIndex||void 0,onClick:function(){var g;return(g=t.onItemSelect)===null||g===void 0?void 0:g.call(t,f.value)},children:[u.createElement(Me[f.value.type]),(0,e.jsx)("h4",{children:(0,e.jsx)(xe,{texts:f.value.highlightTitleTexts})}),(0,e.jsx)("p",{children:(0,e.jsx)(xe,{texts:f.value.highlightTexts})})]})},String(x))})}):(0,e.jsxs)("div",{className:"dumi-default-search-empty",children:[(0,e.jsx)(be.r,{}),(0,e.jsx)(r._H,{id:"search.not.found"})]})})},je=Ie,Ce=(0,u.forwardRef)(function(d,t){var n=(0,r.YB)(),a=(0,u.useRef)(!1),l=(0,u.useRef)(null);return(0,u.useImperativeHandle)(t,function(){return l.current}),(0,e.jsx)("input",{className:"dumi-default-search-bar-input",onCompositionStart:function(){return a.current=!0},onCompositionEnd:function(i){a.current=!1,d.onChange(i.currentTarget.value)},onFocus:d.onFocus,onBlur:d.onBlur,onKeyDown:function(i){["ArrowDown","ArrowUp"].includes(i.key)&&i.preventDefault(),i.key==="Escape"&&!a.current&&i.currentTarget.blur()},onChange:function(i){var h=i.target.value;setTimeout(function(){a.current||d.onChange(h)},1)},placeholder:n.formatMessage({id:"header.search.placeholder"}),ref:l})}),He=function(t){return(0,u.useEffect)(function(){if(t.visible)document.body.style.overflow="hidden";else{var n;document.body.style.overflow="",(n=t.onClose)===null||n===void 0||n.call(t)}},[t.visible]),t.visible?(0,e.jsxs)("div",{className:"dumi-default-search-modal",children:[(0,e.jsx)("div",{className:"dumi-default-search-modal-mask",onClick:t.onMaskClick}),(0,e.jsx)("div",{className:"dumi-default-search-modal-content",children:t.children})]}):null},fe,pe=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(fe=navigator)===null||fe===void 0?void 0:fe.platform:""),Be=function(t){return["TEXTAREA","INPUT"].includes(t.tagName)||t.contentEditable==="true"},Oe=function(){var t=(0,u.useState)(!1),n=j()(t,2),a=n[0],l=n[1],o=(0,u.useRef)(null),i=(0,u.useRef)(null),h=(0,u.useState)("\u2318"),c=j()(h,2),m=c[0],f=c[1],x=(0,r.OO)(),p=x.keywords,g=x.setKeywords,C=x.result,A=x.loading,v=(0,u.useState)(!1),S=j()(v,2),N=S[0],M=S[1];return(0,u.useEffect)(function(){pe||f("Ctrl");var E=function(k){if(((pe?k.metaKey:k.ctrlKey)&&k.key==="k"||k.key==="/"&&!Be(k.target))&&(k.preventDefault(),o.current)){var O=o.current.getBoundingClientRect(),me=O.top,ze=O.bottom,Xe=O.left,Ge=O.right,qe=me>=0&&Xe>=0&&ze<=window.innerHeight&&Ge<=window.innerWidth;qe?o.current.focus():(g(""),M(!0),setTimeout(function(){var Ae;(Ae=i.current)===null||Ae===void 0||Ae.focus()}))}k.key==="Escape"&&(k.preventDefault(),M(!1))};return document.addEventListener("keydown",E),function(){return document.removeEventListener("keydown",E)}},[]),(0,e.jsxs)("div",{className:"dumi-default-search-bar",children:[(0,e.jsx)(ge.default,{className:"dumi-default-search-bar-svg"}),(0,e.jsx)(Ce,{onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(W){return g(W)},ref:o}),p.trim()&&a&&(C.length||!A)&&!N&&(0,e.jsx)("div",{className:"dumi-default-search-popover",children:(0,e.jsx)("section",{children:(0,e.jsx)(je,{data:C,loading:A})})}),(0,e.jsxs)(He,{visible:N,onMaskClick:function(){M(!1)},onClose:function(){return g("")},children:[(0,e.jsxs)("div",{style:{position:"relative"},children:[(0,e.jsx)(ge.default,{className:"dumi-default-search-bar-svg"}),(0,e.jsx)(Ce,{onFocus:function(){return l(!0)},onBlur:function(){setTimeout(function(){l(!1)},1)},onChange:function(W){return g(W)},ref:i})]}),(0,e.jsx)(je,{data:C,loading:A,onItemSelect:function(){M(!1)}}),(0,e.jsx)("footer",{children:(0,e.jsxs)("ul",{className:"dumi-default-search-modal-commands",children:[(0,e.jsxs)("li",{className:"dumi-default-search-modal-commands-arrow",children:[(0,e.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:(0,e.jsx)(Se.r,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})}),(0,e.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:(0,e.jsx)(ve.r,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})}),(0,e.jsx)("span",{className:"dumi-default-search-modal-commands-text",children:"to navigate"})]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("span",{className:"dumi-default-search-modal-shortcut",children:"esc"}),(0,e.jsx)("span",{className:"dumi-default-search-modal-commands-text",children:"to close"})]})]})})]})]})},Le=Oe,Fe=function(){var t=(0,r.eL)(),n=t.frontmatter,a=(0,u.useState)(!1),l=j()(a,2),o=l[0],i=l[1],h=(0,r.WF)(),c=h.themeConfig,m=(0,u.useMemo)(function(){return c.socialLinks?Object.keys(c.socialLinks).slice(0,5).map(function(f){return{icon:f,link:c.socialLinks[f]}}):[]},[c.socialLinks]);return(0,e.jsx)("div",{className:"dumi-default-header","data-static":!!n.hero||void 0,"data-mobile-active":o||void 0,onClick:function(){return i(!1)},children:(0,e.jsxs)("div",{className:"dumi-default-header-content",children:[(0,e.jsx)("section",{className:"dumi-default-header-left",children:(0,e.jsx)(re,{})}),(0,e.jsxs)("section",{className:"dumi-default-header-right",children:[(0,e.jsx)(Le,{}),(0,e.jsx)(ue,{}),(0,e.jsx)(ae,{}),(0,e.jsx)(R,{}),c.prefersColor.switch&&(0,e.jsx)(Q,{}),(0,e.jsx)($,{})]}),(0,e.jsx)("button",{type:"button",className:"dumi-default-header-menu-btn",onClick:function(x){x.stopPropagation(),i(function(p){return!p})},children:o?(0,e.jsx)(B.r,{}):(0,e.jsx)(X.r,{})})]})})},Te=Fe,Re=function(t){return(0,e.jsx)("h1",{className:"dumi-default-hero-title",children:(0,e.jsx)("span",{children:t.children})})},We=Re,Ue=function(){var t,n=(0,r.eL)(),a=n.frontmatter;return"hero"in a?(0,e.jsxs)("div",{className:"dumi-default-hero",children:[a.hero.title&&(0,e.jsx)(We,{children:a.hero.title}),a.hero.description&&(0,e.jsx)("p",{dangerouslySetInnerHTML:{__html:a.hero.description}}),!!(!((t=a.hero.actions)===null||t===void 0)&&t.length)&&(0,e.jsx)("div",{className:"dumi-default-hero-actions",children:a.hero.actions.map(function(l){var o=l.text,i=l.link;return/^(\w+:)\/\/|^(mailto|tel):/.test(i)?(0,e.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:o},o):(0,e.jsx)(r.rU,{to:i,children:o},o)})})]}):null},Pe=Ue,De=function(){var t=(0,r.TH)(),n=t.pathname,a=(0,r.eL)(),l=(0,r.tx)();return l?(0,e.jsx)("div",{className:"dumi-default-sidebar",children:l.map(function(o,i){return(0,e.jsxs)("dl",{className:"dumi-default-sidebar-group",children:[o.title&&(0,e.jsx)("dt",{children:o.title}),o.children.map(function(h){var c=h.title.split(" ");return(0,e.jsx)("dd",{children:(0,e.jsxs)(r.OL,{to:h.link,title:h.title,end:!0,children:[c[0]," ",(0,e.jsx)("span",{className:"dumi-default-sidebar-group-cn",children:c[1]})]})},h.link)})]},String(i))})}):null},Ve=De,Ze=s(71802),Ke=function(){var t=(0,r.TH)(),n=t.pathname,a=t.search,l=t.hash,o=(0,r.eL)(),i=(0,r.zh)(),h=(0,r.WF)(),c=h.loading,m=(0,u.useRef)(0),f=(0,u.useState)([]),x=j()(f,2),p=x[0],g=x[1],C=u.useMemo(function(){var A=o.toc;return i&&(A=i.toc),A.filter(function(v){var S=v.depth;return S>1&&S<4})},[o,i]);return(0,u.useEffect)(function(){if(!c){var A=C.map(function(v){var S=v.id;return{current:document.getElementById(S)}});g(A)}},[n,a,c]),p.length?(0,e.jsx)(Ze.i,{sectionRefs:p,children:function(v){var S=v.currentElementIndexInViewport;return S>-1&&(m.current=S),(0,e.jsx)("ul",{className:"dumi-default-toc",children:C.filter(function(N){var M=N.depth;return M>1&&M<4}).map(function(N,M){var E="".concat(a,"#").concat(encodeURIComponent(N.id)),W=S>-1?S:m.current;return(0,e.jsx)("li",{"data-depth":N.depth,children:(0,e.jsx)(r.rU,T()(T()({to:E,onClickCapture:function(){decodeURIComponent(l).slice(1)===N.id&&r.m8.replace(a)},title:N.title},W===M?{className:"active"}:{}),{},{children:N.title}))},N.id)})})}}):null},Ye=Ke,Qe=function(){var t=(0,r.YB)(),n=(0,r.pC)(),a=(0,r.tx)(),l=(0,r.TH)(),o=l.hash,i=l.pathname,h=(0,r.WF)(),c=h.loading,m=h.hostname,f=h.themeConfig,x=(0,u.useState)(!1),p=j()(x,2),g=p[0],C=p[1],A=(0,r.eL)(),v=A.frontmatter,S=(0,r.OI)(),N=j()(S,1),M=N[0];v.toc="content";var E=v.sidebar!==!1&&(a==null?void 0:a.length)>0,W=v.title==="bifrostui"&&v.filename==="docs/index.md";return(0,u.useEffect)(function(){var k=o.replace("#","");k&&setTimeout(function(){var O=document.getElementById(decodeURIComponent(k));O&&(0,Z.Z)(O.offsetTop-80,{maxDuration:300})},1)},[c,o]),(0,e.jsxs)("div",{className:"dumi-default-doc-layout","data-mobile-sidebar-active":g||void 0,onClick:function(){return C(!1)},children:[(0,e.jsxs)(r.ql,{children:[(0,e.jsx)("html",{lang:t.locale.replace(/-.+$/,""),"data-color-mode":M,"data-theme":"default"}),v.title&&(0,e.jsx)("title",{children:v.title}),v.title&&(0,e.jsx)("meta",{property:"og:title",content:v.title}),v.description&&(0,e.jsx)("meta",{name:"description",content:v.description}),v.description&&(0,e.jsx)("meta",{property:"og:description",content:v.description}),v.keywords&&(0,e.jsx)("meta",{name:"keywords",content:v.keywords.join(",")}),v.keywords&&v.keywords.map(function(k){return(0,e.jsx)("meta",{property:"article:tag",content:k},k)}),m&&(0,e.jsx)("link",{rel:"canonical",href:m+i})]}),(0,e.jsx)(Te,{}),(0,e.jsx)(Pe,{}),(0,e.jsx)(Y,{}),E&&(0,e.jsx)("div",{className:"dumi-default-doc-layout-mobile-bar",children:(0,e.jsxs)("button",{type:"button",className:"dumi-default-sidebar-btn",onClick:function(O){O.stopPropagation(),C(function(me){return!me})},children:[(0,e.jsx)(L.r,{}),t.formatMessage({id:"layout.sidebar.btn"})]})}),(0,e.jsxs)("main",{className:"dumi-default-doc-layout-content",children:[(0,e.jsx)("div",{className:"left",children:E&&(0,e.jsx)(Ve,{})}),(0,e.jsx)("div",{className:"right",children:(0,e.jsxs)("div",{className:"top",children:[(0,e.jsx)("div",{className:"main",children:(0,e.jsx)(K,{children:n})}),!W&&(0,e.jsx)("div",{className:"side",children:v.toc==="content"&&(0,e.jsx)("div",{className:"dumi-default-doc-layout-toc-wrapper",children:(0,e.jsx)(Ye,{})})})]})})]})]})},Je=Qe},64652:function(z,y,s){s.d(y,{Z:function(){return G}});var H=s(26068),j=s.n(H),L=s(82092),Z=s.n(L),r=s(48305),u=s.n(r),e=s(67825),F=s.n(e),K=s(66219),U=s(45924),Y=s(75271),B=s(52676),X=["className","checked","defaultChecked","inputProps","inputRef","name","checkedChildren","unCheckedChildren","disabled","size","color","onChange"],w="bui-switch",P=(0,Y.forwardRef)(function(b,Q){var q=b.className,$=b.checked,D=b.defaultChecked,I=b.inputProps,le=b.inputRef,oe=b.name,ae=b.checkedChildren,ne=b.unCheckedChildren,re=b.disabled,ie=b.size,T=b.color,_=b.onChange,se=F()(b,X),ce=(0,K.Z)({value:$,defaultValue:!!D}),ee=u()(ce,2),J=ee[0],ue=ee[1],de=function(V,R){ue(V,R),_==null||_(V,{checked:R})},he=function(V){var R,ve=!J;de(V,ve),I==null||(R=I.onChange)===null||R===void 0||R.call(I,V)};return(0,B.jsxs)("div",j()(j()({ref:Q,className:(0,U.default)("".concat(w),"".concat(w,"-").concat(ie),"".concat(w,"-").concat(T),Z()(Z()({},"".concat(w,"-checked"),J),"".concat(w,"-disabled"),re),q)},se),{},{children:[(0,B.jsx)("input",j()(j()({ref:le,type:"checkbox",name:oe,checked:J,disabled:re},I),{},{onChange:he,className:(0,U.default)("".concat(w,"-input"),I==null?void 0:I.className)})),(ae||ne)&&(0,B.jsx)("span",{className:"".concat(w,"-inner"),children:J?ae:ne})]}))});P.displayName="BuiSwitch",P.defaultProps={disabled:!1,size:"medium",color:"primary"};var G=P},66180:function(z,y,s){s.r(y);var H=s(7639);y.default=(0,H.default)('<path d="M55 10c.8 0 1.6 0 2.4.1C51 16.4 47 25.2 47 35c0 19.3 15.7 35 35 35 1.4 0 2.8-.1 4.2-.2C79.3 79.6 67.9 86 55 86c-21 0-38-17-38-38s17-38 38-38z"/>',"MoonOutlinedIcon")},89236:function(z,y,s){s.r(y);var H=s(7639);y.default=(0,H.default)('<path d="M46.3 8c21.2 0 38.3 17.1 38.3 38.3 0 9.7-3.6 18.5-9.5 25.2l12.1 12.1c1 1 1 2.6 0 3.6s-2.6 1-3.6 0l-12-12.1C64.8 81 56 84.6 46.3 84.6 25.1 84.6 8 67.5 8 46.3S25.1 8 46.3 8zm0 6C28.5 14 14 28.5 14 46.3s14.4 32.3 32.3 32.3 32.3-14.4 32.3-32.3S64.1 14 46.3 14z"/>',"SearchOutlinedIcon")},43816:function(z,y,s){s.r(y);var H=s(7639);y.default=(0,H.default)('<path d="m75.3 70.6 1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.2 3-1.2 4.2 0zm-49.9 0c1.2 1.2 1.2 3.1 0 4.2l-1.8 1.8c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.2-1.2 3.1-1.2 4.2 0zM47.8 20c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zm0 6c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22-9.9-22-22-22zM24 19.2l1.8 1.8c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0l-1.8-1.8c-1.2-1.2-1.2-3.1 0-4.2 1.1-1.1 3-1.1 4.2 0zm52.8 0c1.2 1.2 1.2 3.1 0 4.2L75 25.2c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l1.8-1.8c1.1-1.1 3-1.1 4.2 0zM48.2 5c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3V8c0-1.7 1.4-3 3-3zM91 47.8c0 1.7-1.3 3-3 3h-5c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zm-75 0c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3s1.3-3 3-3h5c1.7 0 3 1.3 3 3zM48.2 80c1.7 0 3 1.3 3 3v5c0 1.7-1.3 3-3 3s-3-1.3-3-3v-5c0-1.7 1.4-3 3-3z"/>',"SunOutlinedIcon")},66219:function(z,y,s){s.d(y,{Z:function(){return Z}});var H=s(48305),j=s.n(H),L=s(75271);function Z(r){var u=r.value,e=r.defaultValue,F=r.onChange,K=r.config,U=K===void 0?{}:K,Y=U.state,B=U.name,X=(0,L.useState)(e),w=j()(X,2),P=w[0],G=w[1],b=(0,L.useRef)(e),Q=u!==void 0;(0,L.useEffect)(function(){!Q&&JSON.stringify(e)!==JSON.stringify(b.current)&&Y&&B&&console.error(["BUI: A component is changing the default ".concat(Y," state of an uncontrolled ").concat(B," after being initialized. ")+"To suppress this warning opt to use a controlled ".concat(B,".")].join(`
`))},[e]);var q=(0,L.useCallback)(function($,D){G(D),F==null||F($,{value:D})},[F]);return[Q?u:P,q]}}}]);
