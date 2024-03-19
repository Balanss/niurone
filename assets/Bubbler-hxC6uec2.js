import{Bubble as D}from"./index-o-K0zJgJ.js";import{a5 as _,a4 as E,K as S,an as m,L as B,W as j,aa as q,F as T,ao as H,ap as P,aq as w,ac as O,ah as L,am as W}from"./index--Vg4_ed0.js";import{E as F}from"./ExternalInteractorBase-St1QSTOy.js";import{C as A,R as I}from"./Ranges-t47r0Hej.js";import"./OptionsColor-2_HoCCga.js";function R(y,i,e,n){if(i>=e){const o=y+(i-e)*n;return _(o,y,i)}else if(i<e){const o=y-(e-i)*n;return _(o,i,y)}}const v="bubble",g=0,K=0,G=2,k=1,x=1,J=0,N=0,C=.5,z=1;class $ extends F{constructor(i){super(i),this._clickBubble=()=>{var b;const e=this.container,n=e.actualOptions,o=e.interactivity.mouse.clickPosition,s=n.interactivity.modes.bubble;if(!s||!o)return;e.bubble||(e.bubble={});const t=e.retina.bubbleModeDistance;if(!t||t<g)return;const a=e.particles.quadTree.queryCircle(o,t,l=>this.isEnabled(l)),{bubble:u}=e;for(const l of a){if(!u.clicking)continue;l.bubble.inRange=!u.durationEnd;const c=l.getPosition(),f=E(c,o),d=(new Date().getTime()-(e.interactivity.mouse.clickTime??K))/S;d>s.duration&&(u.durationEnd=!0),d>s.duration*G&&(u.clicking=!1,u.durationEnd=!1);const p={bubbleObj:{optValue:e.retina.bubbleModeSize,value:l.bubble.radius},particlesObj:{optValue:m(l.options.size.value)*e.retina.pixelRatio,value:l.size.value},type:"size"};this._process(l,f,d,p);const r={bubbleObj:{optValue:s.opacity,value:l.bubble.opacity},particlesObj:{optValue:m(l.options.opacity.value),value:((b=l.opacity)==null?void 0:b.value)??k},type:"opacity"};this._process(l,f,d,r),!u.durationEnd&&f<=t?this._hoverBubbleColor(l,f):delete l.bubble.color}},this._hoverBubble=()=>{const e=this.container,n=e.interactivity.mouse.position,o=e.retina.bubbleModeDistance;if(!o||o<g||!n)return;const s=e.particles.quadTree.queryCircle(n,o,t=>this.isEnabled(t));for(const t of s){t.bubble.inRange=!0;const a=t.getPosition(),u=E(a,n),b=x-u/o;u<=o?b>=N&&e.interactivity.status===B&&(this._hoverBubbleSize(t,b),this._hoverBubbleOpacity(t,b),this._hoverBubbleColor(t,b)):this.reset(t),e.interactivity.status===j&&this.reset(t)}},this._hoverBubbleColor=(e,n,o)=>{const s=this.container.actualOptions,t=o??s.interactivity.modes.bubble;if(t){if(!e.bubble.finalColor){const a=t.color;if(!a)return;const u=q(a);e.bubble.finalColor=T(u)}if(e.bubble.finalColor)if(t.mix){e.bubble.color=void 0;const a=e.getFillColor();e.bubble.color=a?H(P(a,e.bubble.finalColor,x-n,n)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}},this._hoverBubbleOpacity=(e,n,o)=>{var c,f;const s=this.container,t=s.actualOptions,a=(o==null?void 0:o.opacity)??((c=t.interactivity.modes.bubble)==null?void 0:c.opacity);if(!a)return;const u=e.options.opacity.value,b=((f=e.opacity)==null?void 0:f.value)??k,l=R(b,a,m(u),n);l!==void 0&&(e.bubble.opacity=l)},this._hoverBubbleSize=(e,n,o)=>{const s=this.container,t=o!=null&&o.size?o.size*s.retina.pixelRatio:s.retina.bubbleModeSize;if(t===void 0)return;const a=m(e.options.size.value)*s.retina.pixelRatio,u=e.size.value,b=R(u,t,a,n);b!==void 0&&(e.bubble.radius=b)},this._process=(e,n,o,s)=>{const t=this.container,a=s.bubbleObj.optValue,u=t.actualOptions,b=u.interactivity.modes.bubble;if(!b||a===void 0)return;const l=b.duration,c=t.retina.bubbleModeDistance,f=s.particlesObj.optValue,d=s.bubbleObj.value,p=s.particlesObj.value??J,r=s.type;if(!(!c||c<g||a===f))if(t.bubble||(t.bubble={}),t.bubble.durationEnd)d&&(r==="size"&&delete e.bubble.radius,r==="opacity"&&delete e.bubble.opacity);else if(n<=c){if((d??p)!==a){const h=p-o*(p-a)/l;r==="size"&&(e.bubble.radius=h),r==="opacity"&&(e.bubble.opacity=h)}}else r==="size"&&delete e.bubble.radius,r==="opacity"&&delete e.bubble.opacity},this._singleSelectorHover=(e,n,o)=>{const s=this.container,t=document.querySelectorAll(n),a=s.actualOptions.interactivity.modes.bubble;!a||!t.length||t.forEach(u=>{const b=u,l=s.retina.pixelRatio,c={x:(b.offsetLeft+b.offsetWidth*C)*l,y:(b.offsetTop+b.offsetHeight*C)*l},f=b.offsetWidth*C*l,d=o.type==="circle"?new A(c.x,c.y,f):new I(b.offsetLeft*l,b.offsetTop*l,b.offsetWidth*l,b.offsetHeight*l),p=s.particles.quadTree.query(d,r=>this.isEnabled(r));for(const r of p){if(!d.contains(r.getPosition()))continue;r.bubble.inRange=!0;const M=a.divs,h=w(M,b);(!r.bubble.div||r.bubble.div!==b)&&(this.clear(r,e,!0),r.bubble.div=b),this._hoverBubbleSize(r,z,h),this._hoverBubbleOpacity(r,z,h),this._hoverBubbleColor(r,z,h)}})},i.bubble||(i.bubble={}),this.handleClickMode=e=>{e===v&&(i.bubble||(i.bubble={}),i.bubble.clicking=!0)}}clear(i,e,n){i.bubble.inRange&&!n||(delete i.bubble.div,delete i.bubble.opacity,delete i.bubble.radius,delete i.bubble.color)}init(){const i=this.container,e=i.actualOptions.interactivity.modes.bubble;e&&(i.retina.bubbleModeDistance=e.distance*i.retina.pixelRatio,e.size!==void 0&&(i.retina.bubbleModeSize=e.size*i.retina.pixelRatio))}interact(i){const e=this.container.actualOptions,n=e.interactivity.events,o=n.onHover,s=n.onClick,t=o.enable,a=o.mode,u=s.enable,b=s.mode,l=n.onDiv;t&&O(v,a)?this._hoverBubble():u&&O(v,b)?this._clickBubble():L(v,l,(c,f)=>this._singleSelectorHover(i,c,f))}isEnabled(i){const e=this.container,n=e.actualOptions,o=e.interactivity.mouse,s=((i==null?void 0:i.interactivity)??n.interactivity).events,{onClick:t,onDiv:a,onHover:u}=s,b=W(v,a);return b||u.enable&&o.position||t.enable&&o.clickPosition?O(v,u.mode)||O(v,t.mode)||b:!1}loadModeOptions(i,...e){i.bubble||(i.bubble=new D);for(const n of e)i.bubble.load(n==null?void 0:n.bubble)}reset(i){i.bubble.inRange=!1}}export{$ as Bubbler};
