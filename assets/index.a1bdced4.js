(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function P(){}function se(e){return e()}function ne(){return Object.create(null)}function F(e){e.forEach(se)}function oe(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let T;function ce(e,t){return T||(T=document.createElement("a")),T.href=t,e===T.href}function ae(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function w(){return S(" ")}function A(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return e===""?null:+e}function de(e){return Array.from(e.childNodes)}function H(e,t){t=""+t,e.data!==t&&(e.data=t)}function C(e,t){e.value=t==null?"":t}function re(e,t,n){for(let r=0;r<e.options.length;r+=1){const l=e.options[r];if(l.__value===t){l.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function he(e){const t=e.querySelector(":checked");return t&&t.__value}let z;function O(e){z=e}function pe(){if(!z)throw new Error("Function called outside component initialization");return z}function me(e){pe().$$.on_mount.push(e)}const k=[],Z=[];let N=[];const J=[],_e=Promise.resolve();let ee=!1;function ge(){ee||(ee=!0,_e.then(ue))}function V(e){N.push(e)}function be(e){J.push(e)}const R=new Set;let L=0;function ue(){if(L!==0)return;const e=z;do{try{for(;L<k.length;){const t=k[L];L++,O(t),ye(t.$$)}}catch(t){throw k.length=0,L=0,t}for(O(null),k.length=0,L=0;Z.length;)Z.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];R.has(n)||(R.add(n),n())}N.length=0}while(k.length);for(;J.length;)J.pop()();ee=!1,R.clear(),O(e)}function ye(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function ve(e){const t=[],n=[];N.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),N=t}const B=new Set;let we;function M(e,t){e&&e.i&&(B.delete(e),e.i(t))}function U(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),we.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function $e(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function X(e){e&&e.c()}function D(e,t,n,r){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),r||V(()=>{const i=e.$$.on_mount.map(se).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...i):F(i),e.$$.on_mount=[]}),s.forEach(V)}function K(e,t){const n=e.$$;n.fragment!==null&&(ve(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(e,t){e.$$.dirty[0]===-1&&(k.push(e),ge(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,l,s,i,p=[-1]){const a=z;O(e);const u=e.$$={fragment:null,ctx:[],props:s,update:P,not_equal:l,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ne(),dirty:p,skip_bound:!1,root:t.target||a.$$.root};i&&i(u.root);let c=!1;if(u.ctx=n?n(e,t.props||{},(f,m,...g)=>{const b=g.length?g[0]:m;return u.ctx&&l(u.ctx[f],u.ctx[f]=b)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](b),c&&xe(e,f)),m}):[],u.update(),c=!0,F(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const f=de(t.target);u.fragment&&u.fragment.l(f),f.forEach(q)}else u.fragment&&u.fragment.c();t.intro&&M(e.$$.fragment),D(e,t.target,t.anchor,t.customElement),ue()}O(a)}class G{$destroy(){K(this,1),this.$destroy=P}$on(t,n){if(!oe(n))return P;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class Ie extends G{constructor(t){super(),Y(this,t,null,null,W,{})}}function le(e,t,n){const r=e.slice();return r[3]=t[n],r}function ie(e){let t,n,r=e[3].name+"",l,s,i,p,a,u,c,f,m,g=e[3].buyPrice+"",b,_,o,v,x=e[3].sellPrice+"",I,te;return{c(){t=y("div"),n=y("div"),l=S(r),s=w(),i=y("img"),u=w(),c=y("div"),f=y("span"),m=S("Buy: "),b=S(g),_=w(),o=y("span"),v=S("Sell: "),I=S(x),te=w(),h(n,"class","text-[#eaeaea] text-lg h-12 flex items-center justify-center overflow-hidden mb-3"),ce(i.src,p="https://placehold.co/160x160")||h(i,"src",p),h(i,"alt",a=e[3].name),h(i,"class","w-full h-auto max-w-[160px] mx-auto"),h(f,"class","text-[#8ba0a4] text-sm mr-2"),h(o,"class","text-[#8ba0a4] text-sm"),h(t,"class","bg-[#183e4b] p-4 text-center rounded-md transform transition-transform hover:scale-105")},m($,E){j($,t,E),d(t,n),d(n,l),d(t,s),d(t,i),d(t,u),d(t,c),d(c,f),d(f,m),d(f,b),d(c,_),d(c,o),d(o,v),d(o,I),d(t,te)},p($,E){E&1&&r!==(r=$[3].name+"")&&H(l,r),E&1&&a!==(a=$[3].name)&&h(i,"alt",a),E&1&&g!==(g=$[3].buyPrice+"")&&H(b,g),E&1&&x!==(x=$[3].sellPrice+"")&&H(I,x)},d($){$&&q(t)}}}function Pe(e){let t,n=e[0],r=[];for(let l=0;l<n.length;l+=1)r[l]=ie(le(e,n,l));return{c(){t=y("div");for(let l=0;l<r.length;l+=1)r[l].c();h(t,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4")},m(l,s){j(l,t,s);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(t,null)},p(l,[s]){if(s&1){n=l[0];let i;for(i=0;i<n.length;i+=1){const p=le(l,n,i);r[i]?r[i].p(p,s):(r[i]=ie(p),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},i:P,o:P,d(l){l&&q(t),fe(r,l)}}}function Ee(e,t,n){let{items:r}=t,{search:l=""}=t,s=[];return e.$$set=i=>{"items"in i&&n(1,r=i.items),"search"in i&&n(2,l=i.search)},e.$$.update=()=>{e.$$.dirty&6&&n(0,s=r.filter(i=>i.name.toLowerCase().includes(l.toLowerCase())))},[s,r,l]}class Ce extends G{constructor(t){super(),Y(this,t,Ee,Pe,W,{items:1,search:2})}}function Le(e){let t,n,r,l,s,i,p,a,u,c,f,m,g,b;return{c(){t=y("div"),n=y("input"),r=w(),l=y("input"),s=w(),i=y("input"),p=w(),a=y("select"),u=y("option"),u.textContent="1",c=y("option"),c.textContent="10",f=w(),m=y("button"),m.textContent="Add Item",h(n,"type","text"),h(n,"placeholder","Item"),h(n,"class","p-2 border rounded border-8ba0a4"),h(l,"type","number"),h(l,"placeholder","Sell Price"),h(l,"class","p-2 border rounded border-8ba0a4"),h(i,"type","number"),h(i,"placeholder","Buy Price"),h(i,"class","p-2 border rounded border-8ba0a4"),u.__value="1",u.value=u.__value,c.__value="10",c.value=c.__value,h(a,"class","p-2 border rounded border-8ba0a4"),e[3]===void 0&&V(()=>e[10].call(a)),h(m,"class","bg-1b4552 text-white p-2 rounded hover:bg-183e4b"),h(t,"class","flex flex-col mb-4 space-y-4")},m(_,o){j(_,t,o),d(t,n),C(n,e[0]),d(t,r),d(t,l),C(l,e[1]),d(t,s),d(t,i),C(i,e[2]),d(t,p),d(t,a),d(a,u),d(a,c),re(a,e[3],!0),d(t,f),d(t,m),g||(b=[A(n,"input",e[7]),A(l,"input",e[8]),A(i,"input",e[9]),A(a,"change",e[10]),A(m,"click",e[4])],g=!0)},p(_,[o]){o&1&&n.value!==_[0]&&C(n,_[0]),o&2&&Q(l.value)!==_[1]&&C(l,_[1]),o&4&&Q(i.value)!==_[2]&&C(i,_[2]),o&8&&re(a,_[3])},i:P,o:P,d(_){_&&q(t),g=!1,F(b)}}}function Se(e,t,n){let{addItem:r}=t,{search:l}=t,s="",i=null,p=null,a="1";function u(){r({name:s,sellPrice:i,quantity:a,buyPrice:p}),n(0,s=""),n(1,i=null),n(2,p=null)}function c(){s=this.value,n(0,s)}function f(){i=Q(this.value),n(1,i)}function m(){p=Q(this.value),n(2,p)}function g(){a=he(this),n(3,a)}return e.$$set=b=>{"addItem"in b&&n(6,r=b.addItem),"search"in b&&n(5,l=b.search)},e.$$.update=()=>{e.$$.dirty&1&&n(5,l=s)},[s,i,p,a,u,l,r,c,f,m,g]}class Ae extends G{constructor(t){super(),Y(this,t,Se,Le,W,{addItem:6,search:5})}}function ke(e){let t,n,r,l,s,i,p,a,u,c,f,m,g;t=new Ie({});function b(o){e[4](o)}let _={addItem:e[2]};return e[1]!==void 0&&(_.search=e[1]),s=new Ae({props:_}),Z.push(()=>$e(s,"search",b)),c=new Ce({props:{items:e[0],search:e[1]}}),{c(){X(t.$$.fragment),n=w(),r=y("div"),l=y("div"),X(s.$$.fragment),p=w(),a=y("button"),a.textContent="Dump",u=w(),X(c.$$.fragment),h(a,"class","mb-4 w-full bg-d74a49 text-white p-2 rounded hover:bg-d74a49"),h(l,"class","w-full bg-eaeaea p-6 rounded-lg shadow-md"),h(r,"class","flex flex-col items-center h-full min-h-screen p-8 bg-183e4b")},m(o,v){D(t,o,v),j(o,n,v),j(o,r,v),d(r,l),D(s,l,null),d(l,p),d(l,a),d(l,u),D(c,l,null),f=!0,m||(g=A(a,"click",e[3]),m=!0)},p(o,[v]){const x={};!i&&v&2&&(i=!0,x.search=o[1],be(()=>i=!1)),s.$set(x);const I={};v&1&&(I.items=o[0]),v&2&&(I.search=o[1]),c.$set(I)},i(o){f||(M(t.$$.fragment,o),M(s.$$.fragment,o),M(c.$$.fragment,o),f=!0)},o(o){U(t.$$.fragment,o),U(s.$$.fragment,o),U(c.$$.fragment,o),f=!1},d(o){K(t,o),o&&q(n),o&&q(r),K(s),K(c),m=!1,g()}}}function Ne(e,t,n){let r=[];const l=[];async function s(){const m=(await(await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTQ7tQz6gqyRWbc15gzLKZyFjVyNAkmmlLE4mGzlpyK6SY1piANAci7CaVcYlxmse8hcMzHo1W6QUDi/pub?output=csv")).text()).split(`
`).slice(1);console.log(m),n(0,r=m.map(g=>{const[b,_,o,v]=g.split(",");return{name:b,sellPrice:_,quantity:o,buyPrice:v}}))}let i="";function p(c){n(0,r=[...r,c]),l.push(c)}function a(){const c=l.map(f=>`${f.name}	${f.sellPrice}	${f.quantity}	${f.buyPrice}`).join(`
`);navigator.clipboard.writeText(c).then(()=>alert("Data copied to clipboard!"),f=>alert("Failed to copy data!"))}me(()=>s());function u(c){i=c,n(1,i)}return[r,i,p,a,u]}class qe extends G{constructor(t){super(),Y(this,t,Ne,ke,W,{})}}new qe({target:document.getElementById("app")});