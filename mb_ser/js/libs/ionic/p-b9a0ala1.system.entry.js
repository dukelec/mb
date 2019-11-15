var __awaiter=this&&this.__awaiter||function(e,t,r,o){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(o.next(e))}catch(t){i(t)}}function a(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):n(e.value).then(s,a)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,n,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,n&&(i=s[0]&2?n["return"]:s[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;if(n=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;n=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(a){s=[6,a];n=0}finally{o=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f740a4ee.system.js","./p-950f5a68.system.js","./p-43ab7c15.system.js","./p-44125ed7.system.js","./p-2fa93388.system.js","./p-2f5ab327.system.js","./p-61d1f5a5.system.js","./p-4ad78df7.system.js","./p-4b2e2785.system.js"],(function(e){"use strict";var t,r,o,n,i,s,a,l,p,c,u,f,v,d,h,m;return{setters:[function(e){t=e.r;r=e.d;o=e.c;n=e.h;i=e.H;s=e.e},function(){},function(){},function(e){a=e.c},function(){},function(e){l=e.B;p=e.d;c=e.e;u=e.f;f=e.g},function(e){v=e.g},function(e){d=e.a;h=e.d},function(e){m=e.d}],execute:function(){var y=function(e,t){var r="top";var o="left";var n=e.querySelector(".popover-content");var i=n.getBoundingClientRect();var s=i.width;var l=i.height;var p=e.ownerDocument.defaultView.innerWidth;var c=e.ownerDocument.defaultView.innerHeight;var u=t&&t.target&&t.target.getBoundingClientRect();var f=u!=null&&"top"in u?u.top:c/2-l/2;var v=u!=null&&"left"in u?u.left:p/2;var d=u&&u.width||0;var h=u&&u.height||0;var m=e.querySelector(".popover-arrow");var y=m.getBoundingClientRect();var g=y.width;var w=y.height;if(u==null){m.style.display="none"}var D={top:f+h,left:v+d/2-g/2};var E={top:f+h+(w-1),left:v+d/2-s/2};var P=false;var x=false;if(E.left<b+25){P=true;E.left=b}else if(s+b+E.left+25>p){x=true;E.left=p-s-b;o="right"}if(f+h+l>c&&f-l>0){D.top=f-(w+1);E.top=f-l-(w-1);e.className=e.className+" popover-bottom";r="bottom"}else if(f+h+l>c){n.style.bottom=b+"%"}m.style.top=D.top+"px";m.style.left=D.left+"px";n.style.top=E.top+"px";n.style.left=E.left+"px";if(P){n.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"}if(x){n.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"}n.style.transformOrigin=r+" "+o;var _=a();var S=a();var k=a();S.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08);k.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);return _.addElement(e).easing("ease").duration(100).addAnimation([S,k])};var b=5;var g=function(e){var t=a();var r=a();var o=a();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(500).addAnimation([r,o])};var w=function(e,t){var r=12;var o=e.ownerDocument;var n=o.dir==="rtl";var i="top";var s=n?"right":"left";var l=e.querySelector(".popover-content");var p=l.getBoundingClientRect();var c=p.width;var u=p.height;var f=o.defaultView.innerWidth;var v=o.defaultView.innerHeight;var d=t&&t.target&&t.target.getBoundingClientRect();var h=d!=null&&"bottom"in d?d.bottom:v/2-u/2;var m=d!=null&&"left"in d?n?d.left-c+d.width:d.left:f/2-c/2;var y=d&&d.height||0;var b={top:h,left:m};if(b.left<r){b.left=r;s="left"}else if(c+r+b.left>f){b.left=f-c-r;s="right"}if(h+y+u>v&&h-u>0){b.top=h-u-y;e.className=e.className+" popover-bottom";i="bottom"}else if(h+y+u>v){l.style.bottom=r+"px"}var g=a();var w=a();var D=a();var E=a();var P=a();w.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32);D.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1);E.addElement(l).beforeStyles({top:b.top+"px",left:b.left+"px","transform-origin":i+" "+s}).fromTo("transform","scale(0.001)","scale(1)");P.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1);return g.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([w,D,E,P])};var D=function(e){var t=a();var r=a();var o=a();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0);o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0);return t.addElement(e).easing("ease").duration(500).addAnimation([r,o])};var E=e("ion_popover",function(){function e(e){var n=this;t(this,e);this.presented=false;this.mode=r(this);this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.translucent=false;this.animated=true;this.onDismiss=function(e){e.stopPropagation();e.preventDefault();n.dismiss()};this.onBackdropTap=function(){n.dismiss(undefined,l)};this.onLifecycle=function(e){var t=n.usersElement;var r=P[e.type];if(t&&r){var o=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(o)}};p(this.el);this.didPresent=o(this,"ionPopoverDidPresent",7);this.willPresent=o(this,"ionPopoverWillPresent",7);this.willDismiss=o(this,"ionPopoverWillDismiss",7);this.didDismiss=o(this,"ionPopoverDidDismiss",7)}e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;return __generator(this,(function(o){switch(o.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".popover-content");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});r=this;return[4,d(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:r.usersElement=o.sent();return[4,m(this.usersElement)];case 2:o.sent();return[2,c(this,"popoverEnter",y,w,this.event)]}}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(o){switch(o.label){case 0:return[4,u(this,e,t,"popoverLeave",g,D,this.event)];case 1:r=o.sent();if(!r)return[3,3];return[4,h(this.delegate,this.usersElement)];case 2:o.sent();o.label=3;case 3:return[2,r]}}))}))};e.prototype.onDidDismiss=function(){return f(this.el,"ionPopoverDidDismiss")};e.prototype.onWillDismiss=function(){return f(this.el,"ionPopoverWillDismiss")};e.prototype.render=function(){var e;var t=r(this);var o=this.onLifecycle;return n(i,{"aria-modal":"true","no-router":true,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},v(this.cssClass)),(e={},e[t]=true,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},n("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),n("div",{class:"popover-wrapper"},n("div",{class:"popover-arrow"}),n("div",{class:"popover-content"})))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}"},enumerable:true,configurable:true});return e}());var P={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}}));