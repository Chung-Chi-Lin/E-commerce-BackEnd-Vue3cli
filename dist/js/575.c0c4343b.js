(self["webpackChunkfinal"]=self["webpackChunkfinal"]||[]).push([[575],{8803:function(t,e,s){
/*!
  * Bootstrap toast.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,a){t.exports=a(s(1437),s(4130),s(1884),s(9069))})(0,(function(t,e,s,a){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},i=n(e),o=n(s),r="toast",l="bs.toast",c=`.${l}`,u=`mouseover${c}`,h=`mouseout${c}`,d=`focusin${c}`,m=`focusout${c}`,_=`hide${c}`,f=`hidden${c}`,g=`show${c}`,p=`shown${c}`,v="fade",b="hide",k="show",w="showing",y={animation:"boolean",autohide:"boolean",delay:"number"},$={animation:!0,autohide:!0,delay:5e3};class T extends o.default{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return $}static get DefaultType(){return y}static get NAME(){return r}show(){const e=i.default.trigger(this._element,g);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(v);const s=()=>{this._element.classList.remove(w),i.default.trigger(this._element,p),this._maybeScheduleHide()};this._element.classList.remove(b),t.reflow(this._element),this._element.classList.add(k,w),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=i.default.trigger(this._element,_);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(b),this._element.classList.remove(w,k),i.default.trigger(this._element,f)};this._element.classList.add(w),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(k),super.dispose()}isShown(){return this._element.classList.contains(k)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){i.default.on(this._element,u,(t=>this._onInteraction(t,!0))),i.default.on(this._element,h,(t=>this._onInteraction(t,!1))),i.default.on(this._element,d,(t=>this._onInteraction(t,!0))),i.default.on(this._element,m,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=T.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return a.enableDismissTrigger(T),t.defineJQueryPlugin(T),T}))},1575:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return K}});var a=s(3396);const n={class:"container-fluid mt-3 position-relative"};function i(t,e,s,i,o,r){const l=(0,a.up)("Navbar"),c=(0,a.up)("ToastMessages"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a._)("div",n,[(0,a.Wm)(c),(0,a.Wm)(u)])],64)}s(7658);var o=s(6674);const r={class:"toast-container position-absolute pe-3 top-0 end-0"};function l(t,e,s,n,i,o){const l=(0,a.up)("Toast");return(0,a.wg)(),(0,a.iD)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.messages,((t,e)=>((0,a.wg)(),(0,a.j4)(l,{key:e,msg:t},null,8,["msg"])))),128))])}var c=s(7139);const u={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},h={class:"toast-header"},d={class:"me-auto"},m=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),_={key:0,class:"toast-body"};function f(t,e,s,n,i,o){return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",h,[(0,a._)("span",{class:(0,c.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",d,(0,c.zw)(s.msg.title),1),m]),s.msg.content?((0,a.wg)(),(0,a.iD)("div",_,(0,c.zw)(s.msg.content),1)):(0,a.kq)("",!0)],512)}var g=s(8803),p=s.n(g),v={name:"ToastComponent",props:["msg"],mounted(){const t=this.$refs.toast,e=new(p())(t,{delay:6e3});e.show()}},b=s(89);const k=(0,b.Z)(v,[["render",f]]);var w=k,y={components:{Toast:w},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:a}=t;this.messages.push({style:e,title:s,content:a})}))}};const $=(0,b.Z)(y,[["render",l]]);var T=$,I=s(9242);const L={class:"navbar navbar-expand-lg navbar-dark bg-dark"},M={class:"container-fluid"},C=(0,a._)("a",{class:"navbar-brand",href:"#"},"範例作品",-1),D=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),x={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},N={class:"navbar-nav"};function S(t,e,s,n,i,o){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",L,[(0,a._)("div",M,[C,D,(0,a._)("div",x,[(0,a._)("div",N,[(0,a.Wm)(r,{to:"/dashboard/products",class:"nav-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("產品")])),_:1}),(0,a.Wm)(r,{to:"/dashboard/orders",class:"nav-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("訂單")])),_:1}),(0,a.Wm)(r,{to:"/dashboard/coupons",class:"nav-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("優惠券")])),_:1}),(0,a._)("a",{href:"#",onClick:e[0]||(e[0]=(0,I.iM)(((...t)=>o.logout&&o.logout(...t)),["prevent"])),class:"nav-link"},"登出")])])])])}var W={methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.$http.post(t,this.user).then((t=>{t.data.success&&this.$router.push("/login")}))}}};const A=(0,b.Z)(W,[["render",S]]);var H=A,Z={components:{Navbar:H,ToastMessages:T},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e,this.user).then((t=>{t.data.success||this.$router.push("/login")}))},provide(){return{emitter:o.Z}}};const j=(0,b.Z)(Z,[["render",i]]);var K=j}}]);
//# sourceMappingURL=575.c0c4343b.js.map