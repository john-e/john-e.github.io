(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.CA = factory());
})(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends$1(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$4 = function() {
        __assign$4 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$4.apply(this, arguments);
    };

    function __rest$2(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray$3(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var n,l$1,u$1,t$1,o$2,r$1,f$1,e$2={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function p$1(){return {current:null}}function d$1(n){return n.children}function _$1(n,l){this.props=n,this.context=l;}function k$2(n,l){if(null==l)return n.__?k$2(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$2(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$2)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$2(t):o,t.__h),z$1(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$2,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x$2(_,s,n):s=P$1(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k$2(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$2(i,h+1)),N$1(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$2(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x$2(i,l,u):P$1(u,i,i,t,i.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$2:I$1,o):n.removeEventListener(l,o?T$2:I$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I$1(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$2(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _$1(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$2).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$2(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N$1(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N$1(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$2,e$2,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z$1(f,u);}function q$2(n,l){S$1(n,l,q$2);}function B$1(l,u,i){var t,o,r,f=a$1({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y$1(l.type,f,t||l.key,o||l.ref,null)}function D$1(n,l){var u={__c:l="__cC"+f$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,_$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_$1.prototype.render=d$1,t$1=[],o$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$2.__r=0,f$1=0;

    var t,u,r,o$1=0,i=[],c=l$1.__b,f=l$1.__r,e$1=l$1.diffed,a=l$1.__c,v=l$1.unmount;function l(t,r){l$1.__h&&l$1.__h(u,t,o$1||r),o$1=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function m(n){return o$1=1,p(w$1,n)}function p(n,r,o){var i=l(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=l(t++,3);!l$1.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function d(r,o){var i=l(t++,4);!l$1.__s&&k$1(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function h(n){return o$1=5,_(function(){return {current:n}},[])}function s(n,t,u){o$1=6,d(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==u?u:u.concat(n));}function _(n,u){var r=l(t++,7);return k$1(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o$1=8,_(function(){return n},t)}function F$1(n){var r=u.context[n.__c],o=l(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T$1(t,u){l$1.useDebugValue&&l$1.useDebugValue(u?u(t):t);}function q$1(n){var r=l(t++,10),o=m();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n);}),[o[0],function(){o[1](void 0);}]}function x$1(){for(var t;t=i.shift();)if(t.__P)try{t.__H.__h.forEach(g$1),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g$1),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e$1&&e$1(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===l$1.requestAnimationFrame||((r=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x$1)),u=null;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g$1),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{g$1(n);}catch(n){u=n;}}),u&&l$1.__e(u,r.__v));};var b="function"==typeof requestAnimationFrame;function g$1(n){var t=u,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k$1(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

    function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,v$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new _$1).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t){var e=C({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:A$2(A$2(n).map(t))},k={map:N,forEach:N,count:function(n){return n?A$2(n).length:0},only:function(n){var t=A$2(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:A$2},A=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);A(n,t,e,r);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return v$1(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){S$1(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n);},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n);}}),S$1(v$1(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount();}function W(n,t){return v$1(I,{__v:n,i:t})}(M.prototype=new _$1).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var P="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,V=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,j="undefined"!=typeof document,z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function B(n,t,e){return null==t.__k&&(t.textContent=""),S$1(n,t),"function"==typeof e&&e(),n?n.__c:null}function $(n,t,e){return q$2(n,t),"function"==typeof e&&e(),n?n.__c:null}_$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];j&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&V.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J));}n.$$typeof=P,K&&K(n);};var Q=l$1.__r;l$1.__r=function(n){Q&&Q(n),G=n.__c;};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return v$1.bind(null,n)}function en(n){return !!n&&n.$$typeof===P}function rn(n){return en(n)?B$1.apply(null,arguments):n}function un(n){return !!n.__k&&(S$1(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},fn=function(n,t){return n(t)},cn=d$1;var ReactDOM = {useState:m,useReducer:p,useEffect:y,useLayoutEffect:d,useRef:h,useImperativeHandle:s,useMemo:_,useCallback:A$1,useContext:F$1,useDebugValue:T$1,version:"17.0.2",Children:k,render:B,hydrate:$,unmountComponentAtNode:un,createPortal:W,createElement:v$1,createContext:D$1,createFactory:tn,cloneElement:rn,createRef:p$1,Fragment:d$1,isValidElement:en,findDOMNode:on,Component:_$1,PureComponent:E,memo:g,forwardRef:x,flushSync:fn,unstable_batchedUpdates:ln,StrictMode:d$1,Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X};

    var compat_module = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': ReactDOM,
        version: nn,
        Children: k,
        render: B,
        hydrate: $,
        unmountComponentAtNode: un,
        createPortal: W,
        createFactory: tn,
        cloneElement: rn,
        isValidElement: en,
        findDOMNode: on,
        PureComponent: E,
        memo: g,
        forwardRef: x,
        flushSync: fn,
        unstable_batchedUpdates: ln,
        StrictMode: cn,
        Suspense: L,
        SuspenseList: M,
        lazy: F,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X,
        createElement: v$1,
        createContext: D$1,
        createRef: p$1,
        Fragment: d$1,
        Component: _$1,
        useState: m,
        useReducer: p,
        useEffect: y,
        useLayoutEffect: d,
        useRef: h,
        useImperativeHandle: s,
        useMemo: _,
        useCallback: A$1,
        useContext: F$1,
        useDebugValue: T$1,
        useErrorBoundary: q$1
    });

    /*! js-cookie v3.0.1 | MIT */
    /* eslint-disable no-var */
    function assign$4 (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          target[key] = source[key];
        }
      }
      return target
    }
    /* eslint-enable no-var */

    /* eslint-disable no-var */
    var defaultConverter = {
      read: function (value) {
        if (value[0] === '"') {
          value = value.slice(1, -1);
        }
        return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      },
      write: function (value) {
        return encodeURIComponent(value).replace(
          /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
          decodeURIComponent
        )
      }
    };
    /* eslint-enable no-var */

    /* eslint-disable no-var */

    function init$2 (converter, defaultAttributes) {
      function set (key, value, attributes) {
        if (typeof document === 'undefined') {
          return
        }

        attributes = assign$4({}, defaultAttributes, attributes);

        if (typeof attributes.expires === 'number') {
          attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
        }
        if (attributes.expires) {
          attributes.expires = attributes.expires.toUTCString();
        }

        key = encodeURIComponent(key)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape);

        var stringifiedAttributes = '';
        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue
          }

          stringifiedAttributes += '; ' + attributeName;

          if (attributes[attributeName] === true) {
            continue
          }

          // Considers RFC 6265 section 5.2:
          // ...
          // 3.  If the remaining unparsed-attributes contains a %x3B (";")
          //     character:
          // Consume the characters of the unparsed-attributes up to,
          // not including, the first %x3B (";") character.
          // ...
          stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }

        return (document.cookie =
          key + '=' + converter.write(value, key) + stringifiedAttributes)
      }

      function get (key) {
        if (typeof document === 'undefined' || (arguments.length && !key)) {
          return
        }

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var jar = {};
        for (var i = 0; i < cookies.length; i++) {
          var parts = cookies[i].split('=');
          var value = parts.slice(1).join('=');

          try {
            var foundKey = decodeURIComponent(parts[0]);
            jar[foundKey] = converter.read(value, foundKey);

            if (key === foundKey) {
              break
            }
          } catch (e) {}
        }

        return key ? jar[key] : jar
      }

      return Object.create(
        {
          set: set,
          get: get,
          remove: function (key, attributes) {
            set(
              key,
              '',
              assign$4({}, attributes, {
                expires: -1
              })
            );
          },
          withAttributes: function (attributes) {
            return init$2(this.converter, assign$4({}, this.attributes, attributes))
          },
          withConverter: function (converter) {
            return init$2(assign$4({}, this.converter, converter), this.attributes)
          }
        },
        {
          attributes: { value: Object.freeze(defaultAttributes) },
          converter: { value: Object.freeze(converter) }
        }
      )
    }

    var api = init$2(defaultConverter, { path: '/' });

    var version = "1.4.2";

    function _isPlaceholder(a) {
      return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
    }

    /**
     * Optimized internal one-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */

    function _curry1(fn) {
      return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
          return f1;
        } else {
          return fn.apply(this, arguments);
        }
      };
    }

    /**
     * Optimized internal two-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */

    function _curry2(fn) {
      return function f2(a, b) {
        switch (arguments.length) {
          case 0:
            return f2;

          case 1:
            return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
              return fn(a, _b);
            });

          default:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b);
            }) : fn(a, b);
        }
      };
    }

    /**
     * Optimized internal three-arity curry function.
     *
     * @private
     * @category Function
     * @param {Function} fn The function to curry.
     * @return {Function} The curried function.
     */

    function _curry3(fn) {
      return function f3(a, b, c) {
        switch (arguments.length) {
          case 0:
            return f3;

          case 1:
            return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            });

          case 2:
            return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
              return fn(_a, b, _c);
            }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            }) : _curry1(function (_c) {
              return fn(a, b, _c);
            });

          default:
            return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
              return fn(_a, _b, c);
            }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
              return fn(_a, b, _c);
            }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
              return fn(a, _b, _c);
            }) : _isPlaceholder(a) ? _curry1(function (_a) {
              return fn(_a, b, c);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
              return fn(a, _b, c);
            }) : _isPlaceholder(c) ? _curry1(function (_c) {
              return fn(a, b, _c);
            }) : fn(a, b, c);
        }
      };
    }

    function _has(prop, obj) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function _isObject(x) {
      return Object.prototype.toString.call(x) === '[object Object]';
    }

    /**
     * See if an object (i.e. `val`) is an instance of the supplied constructor. This
     * function will check up the inheritance chain, if any.
     * If `val` was created using `Object.create`, `R.is(Object, val) === true`.
     *
     * @func
     * @memberOf R
     * @since v0.3.0
     * @category Type
     * @sig (* -> {*}) -> a -> Boolean
     * @param {Object} ctor A constructor
     * @param {*} val The value to test
     * @return {Boolean}
     * @example
     *
     *      R.is(Object, {}); //=> true
     *      R.is(Number, 1); //=> true
     *      R.is(Object, 1); //=> false
     *      R.is(String, 's'); //=> true
     *      R.is(String, new String('')); //=> true
     *      R.is(Object, new String('')); //=> true
     *      R.is(Object, 's'); //=> false
     *      R.is(Number, {}); //=> false
     */

    var is =
    /*#__PURE__*/
    _curry2(function is(Ctor, val) {
      return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === 'Object' && typeof val === 'object');
    });

    var is$1 = is;

    /**
     * Creates a new object with the own properties of the two provided objects. If
     * a key exists in both objects, the provided function is applied to the key
     * and the values associated with the key in each object, with the result being
     * used as the value associated with the key in the returned object.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Object
     * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
     * @param {Function} fn
     * @param {Object} l
     * @param {Object} r
     * @return {Object}
     * @see R.mergeDeepWithKey, R.merge, R.mergeWith
     * @example
     *
     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
     *      R.mergeWithKey(concatValues,
     *                     { a: true, thing: 'foo', values: [10, 20] },
     *                     { b: true, thing: 'bar', values: [15, 35] });
     *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
     * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
     */

    var mergeWithKey =
    /*#__PURE__*/
    _curry3(function mergeWithKey(fn, l, r) {
      var result = {};
      var k;

      for (k in l) {
        if (_has(k, l)) {
          result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
        }
      }

      for (k in r) {
        if (_has(k, r) && !_has(k, result)) {
          result[k] = r[k];
        }
      }

      return result;
    });

    /**
     * Creates a new object with the own properties of the two provided objects.
     * If a key exists in both objects:
     * - and both associated values are also objects then the values will be
     *   recursively merged.
     * - otherwise the provided function is applied to the key and associated values
     *   using the resulting value as the new value associated with the key.
     * If a key only exists in one object, the value will be associated with the key
     * of the resulting object.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Object
     * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
     * @param {Function} fn
     * @param {Object} lObj
     * @param {Object} rObj
     * @return {Object}
     * @see R.mergeWithKey, R.mergeDeepWith
     * @example
     *
     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
     *      R.mergeDeepWithKey(concatValues,
     *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
     *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
     *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
     */

    var mergeDeepWithKey =
    /*#__PURE__*/
    _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
      return mergeWithKey(function (k, lVal, rVal) {
        if (_isObject(lVal) && _isObject(rVal)) {
          return mergeDeepWithKey(fn, lVal, rVal);
        } else {
          return fn(k, lVal, rVal);
        }
      }, lObj, rObj);
    });

    /**
     * Creates a new object with the own properties of the first object merged with
     * the own properties of the second object. If a key exists in both objects:
     * - and both values are objects, the two values will be recursively merged
     * - otherwise the value from the second object will be used.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Object
     * @sig {a} -> {a} -> {a}
     * @param {Object} lObj
     * @param {Object} rObj
     * @return {Object}
     * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
     * @example
     *
     *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
     *                       { age: 40, contact: { email: 'baa@example.com' }});
     *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
     */

    var mergeDeepRight =
    /*#__PURE__*/
    _curry2(function mergeDeepRight(lObj, rObj) {
      return mergeDeepWithKey(function (k, lVal, rVal) {
        return rVal;
      }, lObj, rObj);
    });

    var mergeDeepRight$1 = mergeDeepRight;

    /**
     * Returns a partial copy of an object containing only the keys specified. If
     * the key does not exist, the property is ignored.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig [k] -> {k: v} -> {k: v}
     * @param {Array} names an array of String property names to copy onto a new object
     * @param {Object} obj The object to copy from
     * @return {Object} A new object with only properties from `names` on it.
     * @see R.omit, R.props
     * @example
     *
     *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
     *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
     */

    var pick =
    /*#__PURE__*/
    _curry2(function pick(names, obj) {
      var result = {};
      var idx = 0;

      while (idx < names.length) {
        if (names[idx] in obj) {
          result[names[idx]] = obj[names[idx]];
        }

        idx += 1;
      }

      return result;
    });

    var pick$1 = pick;

    // Define what props.theme will look like
    var themeDefaults = {
        primaryColor: '#3B62B2',
        primaryTextColor: 'white',
    };
    /**
     * hex to rgb converter
     */
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result && result.length === 4 ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: 1,
        } : null;
    }
    /**
     * Rgb value to required overlay values converter
     */
    function overlay(bg, fg) {
        var rb = bg.r, gb = bg.g, bb = bg.b, ab = bg.a;
        var rf = fg.r, gf = fg.g, bf = fg.b, af = fg.a;
        var afDiff = (1 - af);
        var alpha = af + (ab * afDiff);
        var Cr = (rf * af + rb * ab * afDiff) / alpha;
        var Cg = (gf * af + gb * ab * afDiff) / alpha;
        var Cb = (bf * af + bb * ab * afDiff) / alpha;
        return "rgb(".concat(Cr, ",").concat(Cg, ",").concat(Cb, ")");
    }
    /**
     * function to get background color values depending upon primary color
     */
    var getThemeColors = function (color) {
        var hexColor = '';
        if (color.match('^#(?:[A-Fa-f0-9]{3}){1,2}$')) { // check if hex color
            hexColor = color;
        }
        else {
            hexColor = '#3B62B2'; // default color added
            console.warn('Color is required in Hex format falling back to default color');
        }
        var hexRgbColor = hexToRgb(hexColor);
        if (!hexRgbColor) {
            console.warn('Something is wrong with the color format provide falling back to default color variants');
            return [
                'rgb(215.8, 223.6, 239.6)',
                'rgb(176.6, 192.2, 224.2)',
                'rgb(137.4, 160.8, 208.8)',
                'rgb(47.2, 78.4, 142.4)',
            ];
        }
        var primaryBg200 = overlay(hexRgbColor, {
            r: 255, g: 255, b: 255, a: 0.8,
        });
        var primaryBg300 = overlay(hexRgbColor, {
            r: 255, g: 255, b: 255, a: 0.6,
        });
        var primaryBg400 = overlay(hexRgbColor, {
            r: 255, g: 255, b: 255, a: 0.4,
        });
        var primaryBg600 = overlay(hexRgbColor, {
            r: 0, g: 0, b: 0, a: 0.2,
        });
        return [primaryBg200, primaryBg300, primaryBg400, primaryBg600];
    };
    function theme(theming) {
        var styling = mergeDeepRight$1(themeDefaults, pick$1(Object.keys(themeDefaults), theming));
        var _a = getThemeColors(styling.primaryColor), primaryBg200 = _a[0], primaryBg300 = _a[1], primaryBg400 = _a[2], primaryBg600 = _a[3];
        return {
            '--ca-primary-color': styling.primaryColor,
            '--ca-primary-background-200': primaryBg200,
            '--ca-primary-background-300': primaryBg300,
            '--ca-primary-background-400': primaryBg400,
            '--ca-primary-background-600': primaryBg600,
            '--ca-primary-text-color': styling.primaryTextColor,
        };
    }

    var MAX_DEFAULT_DAYS = 999999;
    var OldFrequency;
    (function (OldFrequency) {
        OldFrequency["Once"] = "once";
        OldFrequency["Always"] = "always";
    })(OldFrequency || (OldFrequency = {}));
    var RatingType;
    (function (RatingType) {
        RatingType["Circle"] = "circle";
        RatingType["Star"] = "star";
        RatingType["Button"] = "button";
        RatingType["Emoji"] = "emoji";
    })(RatingType || (RatingType = {}));
    var defaults$1 = {
        type: 'pop-up',
        primaryColor: themeDefaults.primaryColor,
        primaryTextColor: themeDefaults.primaryTextColor,
        showPromotion: true,
        frequency: {
            closed: 1,
            answered: 1,
        },
        trigger: 'manual',
        questionnaireID: '',
        fetchUrl: '',
        submitUrl: '',
        ratingType: RatingType.Button,
        attributes: {},
    };
    function processFrequency(initOptions) {
        var _a, _b;
        var options = __assign$4({}, initOptions);
        if (options.frequency === OldFrequency.Once) {
            options.frequency = {
                answered: MAX_DEFAULT_DAYS,
                closed: MAX_DEFAULT_DAYS,
            };
        }
        else if (options.frequency === OldFrequency.Always) {
            options.frequency = {
                answered: 0,
                closed: 0,
            };
        }
        if (!options.frequency) {
            options.frequency = __assign$4({}, defaults$1.frequency);
        }
        if (options.frequency.answered === OldFrequency.Once) {
            options.frequency.answered = MAX_DEFAULT_DAYS;
        }
        if (options.frequency.closed === OldFrequency.Once) {
            options.frequency.closed = MAX_DEFAULT_DAYS;
        }
        if (Number.isNaN((_a = options.frequency) === null || _a === void 0 ? void 0 : _a.answered)) {
            options.frequency = __assign$4(__assign$4({}, options.frequency), { answered: defaults$1.frequency.answered });
        }
        if (Number.isNaN((_b = options.frequency) === null || _b === void 0 ? void 0 : _b.closed)) {
            options.frequency = __assign$4(__assign$4({}, options.frequency), { closed: defaults$1.frequency.closed });
        }
        if (options.frequency.answered > MAX_DEFAULT_DAYS) {
            options.frequency.answered = MAX_DEFAULT_DAYS;
        }
        if (options.frequency.closed > MAX_DEFAULT_DAYS) {
            options.frequency.closed = MAX_DEFAULT_DAYS;
        }
        return options;
    }
    function processTrigger(initOptions) {
        var options = __assign$4({}, initOptions);
        if (is$1(Number, options.trigger)) {
            options.trigger = "scroll:".concat(options.trigger);
        }
        if (!options.trigger) {
            options.trigger = 'manual';
        }
        return options;
    }
    var process = function (initOptions) {
        var options = processFrequency(initOptions);
        options = processTrigger(options);
        return mergeDeepRight$1(defaults$1, pick$1(Object.keys(defaults$1), options));
    };

    /**
     * Random hash id generator
     */
    var genID = function () { return Math.random().toString(36).substring(2, 9); };
    /**
     * Generate question names
     * @param number
     * @param prefix
     * @returns
     */
    function generateQuestionName(number, prefix) {
        if (prefix === void 0) { prefix = ''; }
        return "".concat(prefix, "question_").concat(number);
    }

    function getAugmentedNamespace(n) {
    	if (n.__esModule) return n;
    	var a = Object.defineProperty({}, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    var eventemitter3 = {exports: {}};

    (function (module) {

    var has = Object.prototype.hasOwnProperty
      , prefix = '~';

    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @private
     */
    function Events() {}

    //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //
    if (Object.create) {
      Events.prototype = Object.create(null);

      //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //
      if (!new Events().__proto__) prefix = false;
    }

    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @private
     */
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }

    /**
     * Add a listener for a given event.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} once Specify if the listener is a one-time listener.
     * @returns {EventEmitter}
     * @private
     */
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }

      var listener = new EE(fn, context || emitter, once)
        , evt = prefix ? prefix + event : event;

      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];

      return emitter;
    }

    /**
     * Clear event by name.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} evt The Event name.
     * @private
     */
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }

    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @public
     */
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }

    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @public
     */
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = []
        , events
        , name;

      if (this._eventsCount === 0) return names;

      for (name in (events = this._events)) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };

    /**
     * Return the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Array} The registered listeners.
     * @public
     */
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event
        , handlers = this._events[evt];

      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];

      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }

      return ee;
    };

    /**
     * Return the number of listeners listening to a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Number} The number of listeners.
     * @public
     */
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event
        , listeners = this._events[evt];

      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };

    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @public
     */
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return false;

      var listeners = this._events[evt]
        , len = arguments.length
        , args
        , i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1: return listeners.fn.call(listeners.context), true;
          case 2: return listeners.fn.call(listeners.context, a1), true;
          case 3: return listeners.fn.call(listeners.context, a1, a2), true;
          case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len -1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length
          , j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1: listeners[i].fn.call(listeners[i].context); break;
            case 2: listeners[i].fn.call(listeners[i].context, a1); break;
            case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
            case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
            default:
              if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
                args[j - 1] = arguments[j];
              }

              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };

    /**
     * Add a listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };

    /**
     * Add a one-time listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };

    /**
     * Remove the listeners of a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {*} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;

      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (
          listeners.fn === fn &&
          (!once || listeners.once) &&
          (!context || listeners.context === context)
        ) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (
            listeners[i].fn !== fn ||
            (once && !listeners[i].once) ||
            (context && listeners[i].context !== context)
          ) {
            events.push(listeners[i]);
          }
        }

        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }

      return this;
    };

    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {(String|Symbol)} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    };

    //
    // Alias methods names because people roll like that.
    //
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

    //
    // Expose the prefix.
    //
    EventEmitter.prefixed = prefix;

    //
    // Allow `EventEmitter` to be imported as module namespace.
    //
    EventEmitter.EventEmitter = EventEmitter;

    //
    // Expose the module.
    //
    {
      module.exports = EventEmitter;
    }
    }(eventemitter3));

    var EventEmitter = eventemitter3.exports;

    var emitter = new EventEmitter();

    var require$$0 = /*@__PURE__*/getAugmentedNamespace(compat_module);

    var shim = {exports: {}};

    var useSyncExternalStoreShim_development = {};

    /**
     * @license React
     * use-sync-external-store-shim.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      (function() {

    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
        'function'
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    }
              var React = require$$0;

    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function error(format) {
      {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        } // eslint-disable-next-line react-internal/safe-string-coercion


        var argsWithFormat = args.map(function (item) {
          return String(item);
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    function is(x, y) {
      return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
      ;
    }

    var objectIs = typeof Object.is === 'function' ? Object.is : is;

    // dispatch for CommonJS interop named imports.

    var useState = React.useState,
        useEffect = React.useEffect,
        useLayoutEffect = React.useLayoutEffect,
        useDebugValue = React.useDebugValue;
    var didWarnOld18Alpha = false;
    var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
    // because of a very particular set of implementation details and assumptions
    // -- change any one of them and it will break. The most important assumption
    // is that updates are always synchronous, because concurrent rendering is
    // only available in versions of React that also have a built-in
    // useSyncExternalStore API. And we only use this shim when the built-in API
    // does not exist.
    //
    // Do not assume that the clever hacks used by this hook also work in general.
    // The point of this shim is to replace the need for hacks by other libraries.

    function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
    // React do not expose a way to check if we're hydrating. So users of the shim
    // will need to track that themselves and return the correct value
    // from `getSnapshot`.
    getServerSnapshot) {
      {
        if (!didWarnOld18Alpha) {
          if (React.startTransition !== undefined) {
            didWarnOld18Alpha = true;

            error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
          }
        }
      } // Read the current snapshot from the store on every render. Again, this
      // breaks the rules of React, and only works here because of specific
      // implementation details, most importantly that updates are
      // always synchronous.


      var value = getSnapshot();

      {
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();

          if (!objectIs(value, cachedValue)) {
            error('The result of getSnapshot should be cached to avoid an infinite loop');

            didWarnUncachedGetSnapshot = true;
          }
        }
      } // Because updates are synchronous, we don't queue them. Instead we force a
      // re-render whenever the subscribed state changes by updating an some
      // arbitrary useState hook. Then, during render, we call getSnapshot to read
      // the current value.
      //
      // Because we don't actually use the state returned by the useState hook, we
      // can save a bit of memory by storing other stuff in that slot.
      //
      // To implement the early bailout, we need to track some things on a mutable
      // object. Usually, we would put that in a useRef hook, but we can stash it in
      // our useState hook instead.
      //
      // To force a re-render, we call forceUpdate({inst}). That works because the
      // new object always fails an equality check.


      var _useState = useState({
        inst: {
          value: value,
          getSnapshot: getSnapshot
        }
      }),
          inst = _useState[0].inst,
          forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
      // in the layout phase so we can access it during the tearing check that
      // happens on subscribe.


      useLayoutEffect(function () {
        inst.value = value;
        inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
        // commit phase if there was an interleaved mutation. In concurrent mode
        // this can happen all the time, but even in synchronous mode, an earlier
        // effect may have mutated the store.

        if (checkIfSnapshotChanged(inst)) {
          // Force a re-render.
          forceUpdate({
            inst: inst
          });
        }
      }, [subscribe, value, getSnapshot]);
      useEffect(function () {
        // Check for changes right before subscribing. Subsequent changes will be
        // detected in the subscription handler.
        if (checkIfSnapshotChanged(inst)) {
          // Force a re-render.
          forceUpdate({
            inst: inst
          });
        }

        var handleStoreChange = function () {
          // TODO: Because there is no cross-renderer API for batching updates, it's
          // up to the consumer of this library to wrap their subscription event
          // with unstable_batchedUpdates. Should we try to detect when this isn't
          // the case and print a warning in development?
          // The store changed. Check if the snapshot changed since the last time we
          // read from the store.
          if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({
              inst: inst
            });
          }
        }; // Subscribe to the store and return a clean-up function.


        return subscribe(handleStoreChange);
      }, [subscribe]);
      useDebugValue(value);
      return value;
    }

    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      var prevValue = inst.value;

      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(prevValue, nextValue);
      } catch (error) {
        return true;
      }
    }

    function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
      // Note: The shim does not use getServerSnapshot, because pre-18 versions of
      // React do not expose a way to check if we're hydrating. So users of the shim
      // will need to track that themselves and return the correct value
      // from `getSnapshot`.
      return getSnapshot();
    }

    var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

    var isServerEnvironment = !canUseDOM;

    var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
    var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

    useSyncExternalStoreShim_development.useSyncExternalStore = useSyncExternalStore$2;
              /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
        'function'
    ) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }
            
      })();
    }

    {
      shim.exports = useSyncExternalStoreShim_development;
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign$3 = function() {
        __assign$3 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$3.apply(this, arguments);
    };

    function __rest$1(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read$4(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spreadArray$2(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["Start"] = "xstate.start";
      ActionTypes["Stop"] = "xstate.stop";
      ActionTypes["Raise"] = "xstate.raise";
      ActionTypes["Send"] = "xstate.send";
      ActionTypes["Cancel"] = "xstate.cancel";
      ActionTypes["NullEvent"] = "";
      ActionTypes["Assign"] = "xstate.assign";
      ActionTypes["After"] = "xstate.after";
      ActionTypes["DoneState"] = "done.state";
      ActionTypes["DoneInvoke"] = "done.invoke";
      ActionTypes["Log"] = "xstate.log";
      ActionTypes["Init"] = "xstate.init";
      ActionTypes["Invoke"] = "xstate.invoke";
      ActionTypes["ErrorExecution"] = "error.execution";
      ActionTypes["ErrorCommunication"] = "error.communication";
      ActionTypes["ErrorPlatform"] = "error.platform";
      ActionTypes["ErrorCustom"] = "xstate.error";
      ActionTypes["Update"] = "xstate.update";
      ActionTypes["Pure"] = "xstate.pure";
      ActionTypes["Choose"] = "xstate.choose";
    })(ActionTypes || (ActionTypes = {}));

    var SpecialTargets;

    (function (SpecialTargets) {
      SpecialTargets["Parent"] = "#_parent";
      SpecialTargets["Internal"] = "#_internal";
    })(SpecialTargets || (SpecialTargets = {}));

    var start$1 = ActionTypes.Start;
    var stop$1 = ActionTypes.Stop;
    var raise$1 = ActionTypes.Raise;
    var send$1 = ActionTypes.Send;
    var cancel$1 = ActionTypes.Cancel;
    var nullEvent = ActionTypes.NullEvent;
    var assign$3 = ActionTypes.Assign;
    ActionTypes.After;
    ActionTypes.DoneState;
    var log = ActionTypes.Log;
    var init$1 = ActionTypes.Init;
    var invoke = ActionTypes.Invoke;
    ActionTypes.ErrorExecution;
    var errorPlatform = ActionTypes.ErrorPlatform;
    var error$1 = ActionTypes.ErrorCustom;
    var update = ActionTypes.Update;
    var choose = ActionTypes.Choose;
    var pure = ActionTypes.Pure;

    var STATE_DELIMITER = '.';
    var EMPTY_ACTIVITY_MAP = {};
    var DEFAULT_GUARD_TYPE = 'xstate.guard';
    var TARGETLESS_KEY = '';

    var IS_PRODUCTION = "development" === 'production';

    var _a$1;
    function matchesState(parentStateId, childStateId, delimiter) {
      if (delimiter === void 0) {
        delimiter = STATE_DELIMITER;
      }

      var parentStateValue = toStateValue(parentStateId, delimiter);
      var childStateValue = toStateValue(childStateId, delimiter);

      if (isString$1(childStateValue)) {
        if (isString$1(parentStateValue)) {
          return childStateValue === parentStateValue;
        } // Parent more specific than child


        return false;
      }

      if (isString$1(parentStateValue)) {
        return parentStateValue in childStateValue;
      }

      return Object.keys(parentStateValue).every(function (key) {
        if (!(key in childStateValue)) {
          return false;
        }

        return matchesState(parentStateValue[key], childStateValue[key]);
      });
    }
    function getEventType(event) {
      try {
        return isString$1(event) || typeof event === 'number' ? "".concat(event) : event.type;
      } catch (e) {
        throw new Error('Events must be strings or objects with a string event.type property.');
      }
    }
    function toStatePath(stateId, delimiter) {
      try {
        if (isArray(stateId)) {
          return stateId;
        }

        return stateId.toString().split(delimiter);
      } catch (e) {
        throw new Error("'".concat(stateId, "' is not a valid state path."));
      }
    }
    function isStateLike(state) {
      return typeof state === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
    }
    function toStateValue(stateValue, delimiter) {
      if (isStateLike(stateValue)) {
        return stateValue.value;
      }

      if (isArray(stateValue)) {
        return pathToStateValue(stateValue);
      }

      if (typeof stateValue !== 'string') {
        return stateValue;
      }

      var statePath = toStatePath(stateValue, delimiter);
      return pathToStateValue(statePath);
    }
    function pathToStateValue(statePath) {
      if (statePath.length === 1) {
        return statePath[0];
      }

      var value = {};
      var marker = value;

      for (var i = 0; i < statePath.length - 1; i++) {
        if (i === statePath.length - 2) {
          marker[statePath[i]] = statePath[i + 1];
        } else {
          marker[statePath[i]] = {};
          marker = marker[statePath[i]];
        }
      }

      return value;
    }
    function mapValues(collection, iteratee) {
      var result = {};
      var collectionKeys = Object.keys(collection);

      for (var i = 0; i < collectionKeys.length; i++) {
        var key = collectionKeys[i];
        result[key] = iteratee(collection[key], key, collection, i);
      }

      return result;
    }
    function mapFilterValues(collection, iteratee, predicate) {
      var e_1, _a;

      var result = {};

      try {
        for (var _b = __values(Object.keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var item = collection[key];

          if (!predicate(item)) {
            continue;
          }

          result[key] = iteratee(item, key, collection);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return result;
    }
    /**
     * Retrieves a value at the given path.
     * @param props The deep path to the prop of the desired value
     */

    var path = function (props) {
      return function (object) {
        var e_2, _a;

        var result = object;

        try {
          for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
            var prop = props_1_1.value;
            result = result[prop];
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        return result;
      };
    };
    /**
     * Retrieves a value at the given path via the nested accessor prop.
     * @param props The deep path to the prop of the desired value
     */

    function nestedPath(props, accessorProp) {
      return function (object) {
        var e_3, _a;

        var result = object;

        try {
          for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
            var prop = props_2_1.value;
            result = result[accessorProp][prop];
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
          } finally {
            if (e_3) throw e_3.error;
          }
        }

        return result;
      };
    }
    function toStatePaths(stateValue) {
      if (!stateValue) {
        return [[]];
      }

      if (isString$1(stateValue)) {
        return [[stateValue]];
      }

      var result = flatten(Object.keys(stateValue).map(function (key) {
        var subStateValue = stateValue[key];

        if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
          return [[key]];
        }

        return toStatePaths(stateValue[key]).map(function (subPath) {
          return [key].concat(subPath);
        });
      }));
      return result;
    }
    function flatten(array) {
      var _a;

      return (_a = []).concat.apply(_a, __spreadArray$2([], __read$4(array), false));
    }
    function toArrayStrict(value) {
      if (isArray(value)) {
        return value;
      }

      return [value];
    }
    function toArray(value) {
      if (value === undefined) {
        return [];
      }

      return toArrayStrict(value);
    }
    function mapContext(mapper, context, _event) {
      var e_5, _a;

      if (isFunction$1(mapper)) {
        return mapper(context, _event.data);
      }

      var result = {};

      try {
        for (var _b = __values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var subMapper = mapper[key];

          if (isFunction$1(subMapper)) {
            result[key] = subMapper(context, _event.data);
          } else {
            result[key] = subMapper;
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      return result;
    }
    function isBuiltInEvent(eventType) {
      return /^(done|error)\./.test(eventType);
    }
    function isPromiseLike(value) {
      if (value instanceof Promise) {
        return true;
      } // Check if shape matches the Promise/A+ specification for a "thenable".


      if (value !== null && (isFunction$1(value) || typeof value === 'object') && isFunction$1(value.then)) {
        return true;
      }

      return false;
    }
    function isBehavior(value) {
      return value !== null && typeof value === 'object' && 'transition' in value && typeof value.transition === 'function';
    }
    function partition(items, predicate) {
      var e_6, _a;

      var _b = __read$4([[], []], 2),
          truthy = _b[0],
          falsy = _b[1];

      try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
          var item = items_1_1.value;

          if (predicate(item)) {
            truthy.push(item);
          } else {
            falsy.push(item);
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        } finally {
          if (e_6) throw e_6.error;
        }
      }

      return [truthy, falsy];
    }
    function updateHistoryStates(hist, stateValue) {
      return mapValues(hist.states, function (subHist, key) {
        if (!subHist) {
          return undefined;
        }

        var subStateValue = (isString$1(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

        if (!subStateValue) {
          return undefined;
        }

        return {
          current: subStateValue,
          states: updateHistoryStates(subHist, subStateValue)
        };
      });
    }
    function updateHistoryValue(hist, stateValue) {
      return {
        current: stateValue,
        states: updateHistoryStates(hist, stateValue)
      };
    }
    function updateContext(context, _event, assignActions, state) {
      {
        warn(!!context, 'Attempting to update undefined context');
      }

      var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
        var e_7, _a;

        var assignment = assignAction.assignment;
        var meta = {
          state: state,
          action: assignAction,
          _event: _event
        };
        var partialUpdate = {};

        if (isFunction$1(assignment)) {
          partialUpdate = assignment(acc, _event.data, meta);
        } else {
          try {
            for (var _b = __values(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var key = _c.value;
              var propAssignment = assignment[key];
              partialUpdate[key] = isFunction$1(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_7) throw e_7.error;
            }
          }
        }

        return Object.assign({}, acc, partialUpdate);
      }, context) : context;
      return updatedContext;
    } // tslint:disable-next-line:no-empty

    var warn = function () {};

    {
      warn = function (condition, message) {
        var error = condition instanceof Error ? condition : undefined;

        if (!error && condition) {
          return;
        }

        if (console !== undefined) {
          var args = ["Warning: ".concat(message)];

          if (error) {
            args.push(error);
          } // tslint:disable-next-line:no-console


          console.warn.apply(console, args);
        }
      };
    }
    function isArray(value) {
      return Array.isArray(value);
    } // tslint:disable-next-line:ban-types

    function isFunction$1(value) {
      return typeof value === 'function';
    }
    function isString$1(value) {
      return typeof value === 'string';
    }
    function toGuard(condition, guardMap) {
      if (!condition) {
        return undefined;
      }

      if (isString$1(condition)) {
        return {
          type: DEFAULT_GUARD_TYPE,
          name: condition,
          predicate: guardMap ? guardMap[condition] : undefined
        };
      }

      if (isFunction$1(condition)) {
        return {
          type: DEFAULT_GUARD_TYPE,
          name: condition.name,
          predicate: condition
        };
      }

      return condition;
    }
    function isObservable(value) {
      try {
        return 'subscribe' in value && isFunction$1(value.subscribe);
      } catch (e) {
        return false;
      }
    }
    var symbolObservable = /*#__PURE__*/function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }(); // TODO: to be removed in v5, left it out just to minimize the scope of the change and maintain compatibility with older versions of integration paackages

    (_a$1 = {}, _a$1[symbolObservable] = function () {
      return this;
    }, _a$1[Symbol.observable] = function () {
      return this;
    }, _a$1);
    function isMachine(value) {
      return !!value && '__xstatenode' in value;
    }
    function isActor$1(value) {
      return !!value && typeof value.send === 'function';
    }
    function toEventObject(event, payload // id?: TEvent['type']
    ) {
      if (isString$1(event) || typeof event === 'number') {
        return __assign$3({
          type: event
        }, payload);
      }

      return event;
    }
    function toSCXMLEvent(event, scxmlEvent) {
      if (!isString$1(event) && '$$type' in event && event.$$type === 'scxml') {
        return event;
      }

      var eventObject = toEventObject(event);
      return __assign$3({
        name: eventObject.type,
        data: eventObject,
        $$type: 'scxml',
        type: 'external'
      }, scxmlEvent);
    }
    function toTransitionConfigArray(event, configLike) {
      var transitions = toArrayStrict(configLike).map(function (transitionLike) {
        if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
          return {
            target: transitionLike,
            event: event
          };
        }

        return __assign$3(__assign$3({}, transitionLike), {
          event: event
        });
      });
      return transitions;
    }
    function normalizeTarget(target) {
      if (target === undefined || target === TARGETLESS_KEY) {
        return undefined;
      }

      return toArray(target);
    }
    function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
      {
        var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : '';

        if (originalError === currentError) {
          // tslint:disable-next-line:no-console
          console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
        } else {
          var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : ''; // tslint:disable-next-line:no-console

          console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
        }
      }
    }
    function evaluateGuard(machine, guard, context, _event, state) {
      var guards = machine.options.guards;
      var guardMeta = {
        state: state,
        cond: guard,
        _event: _event
      }; // TODO: do not hardcode!

      if (guard.type === DEFAULT_GUARD_TYPE) {
        return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
      }

      var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];

      if (!condFn) {
        throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
      }

      return condFn(context, _event.data, guardMeta);
    }
    function toInvokeSource$1(src) {
      if (typeof src === 'string') {
        return {
          type: src
        };
      }

      return src;
    }
    function toObserver(nextHandler, errorHandler, completionHandler) {
      if (typeof nextHandler === 'object') {
        return nextHandler;
      }

      var noop = function () {
        return void 0;
      };

      return {
        next: nextHandler,
        error: errorHandler || noop,
        complete: completionHandler || noop
      };
    }
    function createInvokeId(stateNodeId, index) {
      return "".concat(stateNodeId, ":invocation[").concat(index, "]");
    }

    var initEvent = /*#__PURE__*/toSCXMLEvent({
      type: init$1
    });
    function getActionFunction(actionType, actionFunctionMap) {
      return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
    }
    function toActionObject(action, actionFunctionMap) {
      var actionObject;

      if (isString$1(action) || typeof action === 'number') {
        var exec = getActionFunction(action, actionFunctionMap);

        if (isFunction$1(exec)) {
          actionObject = {
            type: action,
            exec: exec
          };
        } else if (exec) {
          actionObject = exec;
        } else {
          actionObject = {
            type: action,
            exec: undefined
          };
        }
      } else if (isFunction$1(action)) {
        actionObject = {
          // Convert action to string if unnamed
          type: action.name || action.toString(),
          exec: action
        };
      } else {
        var exec = getActionFunction(action.type, actionFunctionMap);

        if (isFunction$1(exec)) {
          actionObject = __assign$3(__assign$3({}, action), {
            exec: exec
          });
        } else if (exec) {
          var actionType = exec.type || action.type;
          actionObject = __assign$3(__assign$3(__assign$3({}, exec), action), {
            type: actionType
          });
        } else {
          actionObject = action;
        }
      }

      return actionObject;
    }
    var toActionObjects = function (action, actionFunctionMap) {
      if (!action) {
        return [];
      }

      var actions = isArray(action) ? action : [action];
      return actions.map(function (subAction) {
        return toActionObject(subAction, actionFunctionMap);
      });
    };
    function toActivityDefinition(action) {
      var actionObject = toActionObject(action);
      return __assign$3(__assign$3({
        id: isString$1(action) ? action : actionObject.id
      }, actionObject), {
        type: actionObject.type
      });
    }
    /**
     * Raises an event. This places the event in the internal event queue, so that
     * the event is immediately consumed by the machine in the current step.
     *
     * @param eventType The event to raise.
     */

    function raise(event) {
      if (!isString$1(event)) {
        return send(event, {
          to: SpecialTargets.Internal
        });
      }

      return {
        type: raise$1,
        event: event
      };
    }
    function resolveRaise(action) {
      return {
        type: raise$1,
        _event: toSCXMLEvent(action.event)
      };
    }
    /**
     * Sends an event. This returns an action that will be read by an interpreter to
     * send the event in the next step, after the current step is finished executing.
     *
     * @param event The event to send.
     * @param options Options to pass into the send event:
     *  - `id` - The unique send event identifier (used with `cancel()`).
     *  - `delay` - The number of milliseconds to delay the sending of the event.
     *  - `to` - The target of this event (by default, the machine the event was sent from).
     */

    function send(event, options) {
      return {
        to: options ? options.to : undefined,
        type: send$1,
        event: isFunction$1(event) ? event : toEventObject(event),
        delay: options ? options.delay : undefined,
        id: options && options.id !== undefined ? options.id : isFunction$1(event) ? event.name : getEventType(event)
      };
    }
    function resolveSend(action, ctx, _event, delaysMap) {
      var meta = {
        _event: _event
      }; // TODO: helper function for resolving Expr

      var resolvedEvent = toSCXMLEvent(isFunction$1(action.event) ? action.event(ctx, _event.data, meta) : action.event);
      var resolvedDelay;

      if (isString$1(action.delay)) {
        var configDelay = delaysMap && delaysMap[action.delay];
        resolvedDelay = isFunction$1(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
      } else {
        resolvedDelay = isFunction$1(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
      }

      var resolvedTarget = isFunction$1(action.to) ? action.to(ctx, _event.data, meta) : action.to;
      return __assign$3(__assign$3({}, action), {
        to: resolvedTarget,
        _event: resolvedEvent,
        event: resolvedEvent.data,
        delay: resolvedDelay
      });
    }
    var resolveLog = function (action, ctx, _event) {
      return __assign$3(__assign$3({}, action), {
        value: isString$1(action.expr) ? action.expr : action.expr(ctx, _event.data, {
          _event: _event
        })
      });
    };
    /**
     * Cancels an in-flight `send(...)` action. A canceled sent action will not
     * be executed, nor will its event be sent, unless it has already been sent
     * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
     *
     * @param sendId The `id` of the `send(...)` action to cancel.
     */

    var cancel = function (sendId) {
      return {
        type: cancel$1,
        sendId: sendId
      };
    };
    /**
     * Starts an activity.
     *
     * @param activity The activity to start.
     */

    function start(activity) {
      var activityDef = toActivityDefinition(activity);
      return {
        type: ActionTypes.Start,
        activity: activityDef,
        exec: undefined
      };
    }
    /**
     * Stops an activity.
     *
     * @param actorRef The activity to stop.
     */

    function stop(actorRef) {
      var activity = isFunction$1(actorRef) ? actorRef : toActivityDefinition(actorRef);
      return {
        type: ActionTypes.Stop,
        activity: activity,
        exec: undefined
      };
    }
    function resolveStop(action, context, _event) {
      var actorRefOrString = isFunction$1(action.activity) ? action.activity(context, _event.data) : action.activity;
      var resolvedActorRef = typeof actorRefOrString === 'string' ? {
        id: actorRefOrString
      } : actorRefOrString;
      var actionObject = {
        type: ActionTypes.Stop,
        activity: resolvedActorRef
      };
      return actionObject;
    }
    /**
     * Updates the current context of the machine.
     *
     * @param assignment An object that represents the partial context to update.
     */

    var assign$2 = function (assignment) {
      return {
        type: assign$3,
        assignment: assignment
      };
    };
    /**
     * Returns an event type that represents an implicit event that
     * is sent after the specified `delay`.
     *
     * @param delayRef The delay in milliseconds
     * @param id The state node ID where this event is handled
     */

    function after(delayRef, id) {
      var idSuffix = id ? "#".concat(id) : '';
      return "".concat(ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
    }
    /**
     * Returns an event that represents that a final state node
     * has been reached in the parent state node.
     *
     * @param id The final state node's parent state node `id`
     * @param data The data to pass into the event
     */

    function done(id, data) {
      var type = "".concat(ActionTypes.DoneState, ".").concat(id);
      var eventObject = {
        type: type,
        data: data
      };

      eventObject.toString = function () {
        return type;
      };

      return eventObject;
    }
    /**
     * Returns an event that represents that an invoked service has terminated.
     *
     * An invoked service is terminated when it has reached a top-level final state node,
     * but not when it is canceled.
     *
     * @param id The final state node ID
     * @param data The data to pass into the event
     */

    function doneInvoke(id, data) {
      var type = "".concat(ActionTypes.DoneInvoke, ".").concat(id);
      var eventObject = {
        type: type,
        data: data
      };

      eventObject.toString = function () {
        return type;
      };

      return eventObject;
    }
    function error(id, data) {
      var type = "".concat(ActionTypes.ErrorPlatform, ".").concat(id);
      var eventObject = {
        type: type,
        data: data
      };

      eventObject.toString = function () {
        return type;
      };

      return eventObject;
    }
    function resolveActions(machine, currentState, currentContext, _event, actions, preserveActionOrder) {
      if (preserveActionOrder === void 0) {
        preserveActionOrder = false;
      }

      var _a = __read$4(preserveActionOrder ? [[], actions] : partition(actions, function (action) {
        return action.type === assign$3;
      }), 2),
          assignActions = _a[0],
          otherActions = _a[1];

      var updatedContext = assignActions.length ? updateContext(currentContext, _event, assignActions, currentState) : currentContext;
      var preservedContexts = preserveActionOrder ? [currentContext] : undefined;
      var resolvedActions = flatten(otherActions.map(function (actionObject) {
        var _a;

        switch (actionObject.type) {
          case raise$1:
            return resolveRaise(actionObject);

          case send$1:
            var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays); // TODO: fix ActionTypes.Init

            {
              // warn after resolving as we can create better contextual message here
              warn(!isString$1(actionObject.delay) || typeof sendAction.delay === 'number', // tslint:disable-next-line:max-line-length
              "No delay reference for delay expression '".concat(actionObject.delay, "' was found on machine '").concat(machine.id, "'"));
            }

            return sendAction;

          case log:
            return resolveLog(actionObject, updatedContext, _event);

          case choose:
            {
              var chooseAction = actionObject;
              var matchedActions = (_a = chooseAction.conds.find(function (condition) {
                var guard = toGuard(condition.cond, machine.options.guards);
                return !guard || evaluateGuard(machine, guard, updatedContext, _event, currentState);
              })) === null || _a === void 0 ? void 0 : _a.actions;

              if (!matchedActions) {
                return [];
              }

              var _b = __read$4(resolveActions(machine, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine.options.actions), preserveActionOrder), 2),
                  resolvedActionsFromChoose = _b[0],
                  resolvedContextFromChoose = _b[1];

              updatedContext = resolvedContextFromChoose;
              preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
              return resolvedActionsFromChoose;
            }

          case pure:
            {
              var matchedActions = actionObject.get(updatedContext, _event.data);

              if (!matchedActions) {
                return [];
              }

              var _c = __read$4(resolveActions(machine, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine.options.actions), preserveActionOrder), 2),
                  resolvedActionsFromPure = _c[0],
                  resolvedContext = _c[1];

              updatedContext = resolvedContext;
              preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
              return resolvedActionsFromPure;
            }

          case stop$1:
            {
              return resolveStop(actionObject, updatedContext, _event);
            }

          case assign$3:
            {
              updatedContext = updateContext(updatedContext, _event, [actionObject], currentState);
              preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
              break;
            }

          default:
            var resolvedActionObject = toActionObject(actionObject, machine.options.actions);
            var exec_1 = resolvedActionObject.exec;

            if (exec_1 && preservedContexts) {
              var contextIndex_1 = preservedContexts.length - 1;
              resolvedActionObject = __assign$3(__assign$3({}, resolvedActionObject), {
                exec: function (_ctx) {
                  var args = [];

                  for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                  }

                  exec_1.apply(void 0, __spreadArray$2([preservedContexts[contextIndex_1]], __read$4(args), false));
                }
              });
            }

            return resolvedActionObject;
        }
      }).filter(function (a) {
        return !!a;
      }));
      return [resolvedActions, updatedContext];
    }

    /**
     * Maintains a stack of the current service in scope.
     * This is used to provide the correct service to spawn().
     */
    var provide = function (service, fn) {
      var result = fn(service);
      return result;
    };

    function createNullActor(id) {
      var _a;

      return _a = {
        id: id,
        send: function () {
          return void 0;
        },
        subscribe: function () {
          return {
            unsubscribe: function () {
              return void 0;
            }
          };
        },
        getSnapshot: function () {
          return undefined;
        },
        toJSON: function () {
          return {
            id: id
          };
        }
      }, _a[symbolObservable] = function () {
        return this;
      }, _a;
    }
    /**
     * Creates a deferred actor that is able to be invoked given the provided
     * invocation information in its `.meta` value.
     *
     * @param invokeDefinition The meta information needed to invoke the actor.
     */

    function createInvocableActor(invokeDefinition, machine, context, _event) {
      var _a;

      var invokeSrc = toInvokeSource$1(invokeDefinition.src);
      var serviceCreator = (_a = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
      var resolvedData = invokeDefinition.data ? mapContext(invokeDefinition.data, context, _event) : undefined;
      var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id); // @ts-ignore

      tempActor.meta = invokeDefinition;
      return tempActor;
    }
    function createDeferredActor(entity, id, data) {
      var tempActor = createNullActor(id); // @ts-ignore

      tempActor.deferred = true;

      if (isMachine(entity)) {
        // "mute" the existing service scope so potential spawned actors within the `.initialState` stay deferred here
        var initialState_1 = tempActor.state = provide(undefined, function () {
          return (data ? entity.withContext(data) : entity).initialState;
        });

        tempActor.getSnapshot = function () {
          return initialState_1;
        };
      }

      return tempActor;
    }
    function isActor(item) {
      try {
        return typeof item.send === 'function';
      } catch (e) {
        return false;
      }
    }
    function isSpawnedActor(item) {
      return isActor(item) && 'id' in item;
    } // TODO: refactor the return type, this could be written in a better way but it's best to avoid unneccessary breaking changes now

    function toActorRef(actorRefLike) {
      var _a;

      return __assign$3((_a = {
        subscribe: function () {
          return {
            unsubscribe: function () {
              return void 0;
            }
          };
        },
        id: 'anonymous',
        getSnapshot: function () {
          return undefined;
        }
      }, _a[symbolObservable] = function () {
        return this;
      }, _a), actorRefLike);
    }

    var isLeafNode = function (stateNode) {
      return stateNode.type === 'atomic' || stateNode.type === 'final';
    };
    function getChildren(stateNode) {
      return Object.keys(stateNode.states).map(function (key) {
        return stateNode.states[key];
      }).filter(function (sn) {
        return sn.type !== 'history';
      });
    }
    function getAllStateNodes(stateNode) {
      var stateNodes = [stateNode];

      if (isLeafNode(stateNode)) {
        return stateNodes;
      }

      return stateNodes.concat(flatten(getChildren(stateNode).map(getAllStateNodes)));
    }
    function getConfiguration(prevStateNodes, stateNodes) {
      var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

      var prevConfiguration = new Set(prevStateNodes);
      var prevAdjList = getAdjList(prevConfiguration);
      var configuration = new Set(stateNodes);

      try {
        // add all ancestors
        for (var configuration_1 = __values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
          var s = configuration_1_1.value;
          var m = s.parent;

          while (m && !configuration.has(m)) {
            configuration.add(m);
            m = m.parent;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      var adjList = getAdjList(configuration);

      try {
        // add descendants
        for (var configuration_2 = __values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
          var s = configuration_2_1.value; // if previously active, add existing child nodes

          if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
            if (prevAdjList.get(s)) {
              prevAdjList.get(s).forEach(function (sn) {
                return configuration.add(sn);
              });
            } else {
              s.initialStateNodes.forEach(function (sn) {
                return configuration.add(sn);
              });
            }
          } else {
            if (s.type === 'parallel') {
              try {
                for (var _e = (e_3 = void 0, __values(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var child = _f.value;

                  if (!configuration.has(child)) {
                    configuration.add(child);

                    if (prevAdjList.get(child)) {
                      prevAdjList.get(child).forEach(function (sn) {
                        return configuration.add(sn);
                      });
                    } else {
                      child.initialStateNodes.forEach(function (sn) {
                        return configuration.add(sn);
                      });
                    }
                  }
                }
              } catch (e_3_1) {
                e_3 = {
                  error: e_3_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                } finally {
                  if (e_3) throw e_3.error;
                }
              }
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      try {
        // add all ancestors
        for (var configuration_3 = __values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
          var s = configuration_3_1.value;
          var m = s.parent;

          while (m && !configuration.has(m)) {
            configuration.add(m);
            m = m.parent;
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
        } finally {
          if (e_4) throw e_4.error;
        }
      }

      return configuration;
    }

    function getValueFromAdj(baseNode, adjList) {
      var childStateNodes = adjList.get(baseNode);

      if (!childStateNodes) {
        return {}; // todo: fix?
      }

      if (baseNode.type === 'compound') {
        var childStateNode = childStateNodes[0];

        if (childStateNode) {
          if (isLeafNode(childStateNode)) {
            return childStateNode.key;
          }
        } else {
          return {};
        }
      }

      var stateValue = {};
      childStateNodes.forEach(function (csn) {
        stateValue[csn.key] = getValueFromAdj(csn, adjList);
      });
      return stateValue;
    }

    function getAdjList(configuration) {
      var e_5, _a;

      var adjList = new Map();

      try {
        for (var configuration_4 = __values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
          var s = configuration_4_1.value;

          if (!adjList.has(s)) {
            adjList.set(s, []);
          }

          if (s.parent) {
            if (!adjList.has(s.parent)) {
              adjList.set(s.parent, []);
            }

            adjList.get(s.parent).push(s);
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      return adjList;
    }
    function getValue$1(rootNode, configuration) {
      var config = getConfiguration([rootNode], configuration);
      return getValueFromAdj(rootNode, getAdjList(config));
    }
    function has$3(iterable, item) {
      if (Array.isArray(iterable)) {
        return iterable.some(function (member) {
          return member === item;
        });
      }

      if (iterable instanceof Set) {
        return iterable.has(item);
      }

      return false; // TODO: fix
    }
    function nextEvents(configuration) {
      return __spreadArray$2([], __read$4(new Set(flatten(__spreadArray$2([], __read$4(configuration.map(function (sn) {
        return sn.ownEvents;
      })), false)))), false);
    }
    function isInFinalState(configuration, stateNode) {
      if (stateNode.type === 'compound') {
        return getChildren(stateNode).some(function (s) {
          return s.type === 'final' && has$3(configuration, s);
        });
      }

      if (stateNode.type === 'parallel') {
        return getChildren(stateNode).every(function (sn) {
          return isInFinalState(configuration, sn);
        });
      }

      return false;
    }
    function getMeta(configuration) {
      if (configuration === void 0) {
        configuration = [];
      }

      return configuration.reduce(function (acc, stateNode) {
        if (stateNode.meta !== undefined) {
          acc[stateNode.id] = stateNode.meta;
        }

        return acc;
      }, {});
    }
    function getTagsFromConfiguration(configuration) {
      return new Set(flatten(configuration.map(function (sn) {
        return sn.tags;
      })));
    }

    function stateValuesEqual(a, b) {
      if (a === b) {
        return true;
      }

      if (a === undefined || b === undefined) {
        return false;
      }

      if (isString$1(a) || isString$1(b)) {
        return a === b;
      }

      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);
      return aKeys.length === bKeys.length && aKeys.every(function (key) {
        return stateValuesEqual(a[key], b[key]);
      });
    }
    function isStateConfig(state) {
      if (typeof state !== 'object' || state === null) {
        return false;
      }

      return 'value' in state && '_event' in state;
    }
    function bindActionToState(action, state) {
      var exec = action.exec;

      var boundAction = __assign$3(__assign$3({}, action), {
        exec: exec !== undefined ? function () {
          return exec(state.context, state.event, {
            action: action,
            state: state,
            _event: state._event
          });
        } : undefined
      });

      return boundAction;
    }

    var State =
    /*#__PURE__*/

    /** @class */
    function () {
      /**
       * Creates a new State instance.
       * @param value The state value
       * @param context The extended state
       * @param historyValue The tree representing historical values of the state nodes
       * @param history The previous state
       * @param actions An array of action objects to execute as side-effects
       * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
       * @param meta
       * @param events Internal event queue. Should be empty with run-to-completion semantics.
       * @param configuration
       */
      function State(config) {
        var _this = this;

        var _a;

        this.actions = [];
        this.activities = EMPTY_ACTIVITY_MAP;
        this.meta = {};
        this.events = [];
        this.value = config.value;
        this.context = config.context;
        this._event = config._event;
        this._sessionid = config._sessionid;
        this.event = this._event.data;
        this.historyValue = config.historyValue;
        this.history = config.history;
        this.actions = config.actions || [];
        this.activities = config.activities || EMPTY_ACTIVITY_MAP;
        this.meta = getMeta(config.configuration);
        this.events = config.events || [];
        this.matches = this.matches.bind(this);
        this.toStrings = this.toStrings.bind(this);
        this.configuration = config.configuration;
        this.transitions = config.transitions;
        this.children = config.children;
        this.done = !!config.done;
        this.tags = (_a = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a !== void 0 ? _a : new Set();
        this.machine = config.machine;
        Object.defineProperty(this, 'nextEvents', {
          get: function () {
            return nextEvents(_this.configuration);
          }
        });
      }
      /**
       * Creates a new State instance for the given `stateValue` and `context`.
       * @param stateValue
       * @param context
       */


      State.from = function (stateValue, context) {
        if (stateValue instanceof State) {
          if (stateValue.context !== context) {
            return new State({
              value: stateValue.value,
              context: context,
              _event: stateValue._event,
              _sessionid: null,
              historyValue: stateValue.historyValue,
              history: stateValue.history,
              actions: [],
              activities: stateValue.activities,
              meta: {},
              events: [],
              configuration: [],
              transitions: [],
              children: {}
            });
          }

          return stateValue;
        }

        var _event = initEvent;
        return new State({
          value: stateValue,
          context: context,
          _event: _event,
          _sessionid: null,
          historyValue: undefined,
          history: undefined,
          actions: [],
          activities: undefined,
          meta: undefined,
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      };
      /**
       * Creates a new State instance for the given `config`.
       * @param config The state config
       */


      State.create = function (config) {
        return new State(config);
      };
      /**
       * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
       * @param stateValue
       * @param context
       */


      State.inert = function (stateValue, context) {
        if (stateValue instanceof State) {
          if (!stateValue.actions.length) {
            return stateValue;
          }

          var _event = initEvent;
          return new State({
            value: stateValue.value,
            context: context,
            _event: _event,
            _sessionid: null,
            historyValue: stateValue.historyValue,
            history: stateValue.history,
            activities: stateValue.activities,
            configuration: stateValue.configuration,
            transitions: [],
            children: {}
          });
        }

        return State.from(stateValue, context);
      };
      /**
       * Returns an array of all the string leaf state node paths.
       * @param stateValue
       * @param delimiter The character(s) that separate each subpath in the string state node path.
       */


      State.prototype.toStrings = function (stateValue, delimiter) {
        var _this = this;

        if (stateValue === void 0) {
          stateValue = this.value;
        }

        if (delimiter === void 0) {
          delimiter = '.';
        }

        if (isString$1(stateValue)) {
          return [stateValue];
        }

        var valueKeys = Object.keys(stateValue);
        return valueKeys.concat.apply(valueKeys, __spreadArray$2([], __read$4(valueKeys.map(function (key) {
          return _this.toStrings(stateValue[key], delimiter).map(function (s) {
            return key + delimiter + s;
          });
        })), false));
      };

      State.prototype.toJSON = function () {
        var _a = this;
            _a.configuration;
            _a.transitions;
            var tags = _a.tags;
            _a.machine;
            var jsonValues = __rest$1(_a, ["configuration", "transitions", "tags", "machine"]);

        return __assign$3(__assign$3({}, jsonValues), {
          tags: Array.from(tags)
        });
      };

      State.prototype.matches = function (parentStateValue) {
        return matchesState(parentStateValue, this.value);
      };
      /**
       * Whether the current state configuration has a state node with the specified `tag`.
       * @param tag
       */


      State.prototype.hasTag = function (tag) {
        return this.tags.has(tag);
      };
      /**
       * Determines whether sending the `event` will cause a non-forbidden transition
       * to be selected, even if the transitions have no actions nor
       * change the state value.
       *
       * @param event The event to test
       * @returns Whether the event will cause a transition
       */


      State.prototype.can = function (event) {
        var _a;

        var transitionData = (_a = this.machine) === null || _a === void 0 ? void 0 : _a.getTransitionData(this, event);
        return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
        transitionData.transitions.some(function (t) {
          return t.target !== undefined || t.actions.length;
        });
      };

      return State;
    }();

    var defaultOptions$1 = {
      deferEvents: false
    };

    var Scheduler =
    /*#__PURE__*/

    /** @class */
    function () {
      function Scheduler(options) {
        this.processingEvent = false;
        this.queue = [];
        this.initialized = false;
        this.options = __assign$3(__assign$3({}, defaultOptions$1), options);
      }

      Scheduler.prototype.initialize = function (callback) {
        this.initialized = true;

        if (callback) {
          if (!this.options.deferEvents) {
            this.schedule(callback);
            return;
          }

          this.process(callback);
        }

        this.flushEvents();
      };

      Scheduler.prototype.schedule = function (task) {
        if (!this.initialized || this.processingEvent) {
          this.queue.push(task);
          return;
        }

        if (this.queue.length !== 0) {
          throw new Error('Event queue should be empty when it is not processing events');
        }

        this.process(task);
        this.flushEvents();
      };

      Scheduler.prototype.clear = function () {
        this.queue = [];
      };

      Scheduler.prototype.flushEvents = function () {
        var nextCallback = this.queue.shift();

        while (nextCallback) {
          this.process(nextCallback);
          nextCallback = this.queue.shift();
        }
      };

      Scheduler.prototype.process = function (callback) {
        this.processingEvent = true;

        try {
          callback();
        } catch (e) {
          // there is no use to keep the future events
          // as the situation is not anymore the same
          this.clear();
          throw e;
        } finally {
          this.processingEvent = false;
        }
      };

      return Scheduler;
    }();

    var children = /*#__PURE__*/new Map();
    var sessionIdIndex = 0;
    var registry = {
      bookId: function () {
        return "x:".concat(sessionIdIndex++);
      },
      register: function (id, actor) {
        children.set(id, actor);
        return id;
      },
      get: function (id) {
        return children.get(id);
      },
      free: function (id) {
        children.delete(id);
      }
    };

    function getGlobal() {
      if (typeof globalThis !== 'undefined') {
        return globalThis;
      }

      if (typeof self !== 'undefined') {
        return self;
      }

      if (typeof window !== 'undefined') {
        return window;
      }

      if (typeof global !== 'undefined') {
        return global;
      }

      {
        console.warn('XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues');
      }
    }

    function getDevTools() {
      var global = getGlobal();

      if (global && '__xstate__' in global) {
        return global.__xstate__;
      }

      return undefined;
    }

    function registerService(service) {
      if (!getGlobal()) {
        return;
      }

      var devTools = getDevTools();

      if (devTools) {
        devTools.register(service);
      }
    }

    function spawnBehavior(behavior, options) {
      if (options === void 0) {
        options = {};
      }

      var state = behavior.initialState;
      var observers = new Set();
      var mailbox = [];
      var flushing = false;

      var flush = function () {
        if (flushing) {
          return;
        }

        flushing = true;

        while (mailbox.length > 0) {
          var event_1 = mailbox.shift();
          state = behavior.transition(state, event_1, actorCtx);
          observers.forEach(function (observer) {
            return observer.next(state);
          });
        }

        flushing = false;
      };

      var actor = toActorRef({
        id: options.id,
        send: function (event) {
          mailbox.push(event);
          flush();
        },
        getSnapshot: function () {
          return state;
        },
        subscribe: function (next, handleError, complete) {
          var observer = toObserver(next, handleError, complete);
          observers.add(observer);
          observer.next(state);
          return {
            unsubscribe: function () {
              observers.delete(observer);
            }
          };
        }
      });
      var actorCtx = {
        parent: options.parent,
        self: actor,
        id: options.id || 'anonymous',
        observers: observers
      };
      state = behavior.start ? behavior.start(actorCtx) : state;
      return actor;
    }

    var DEFAULT_SPAWN_OPTIONS = {
      sync: false,
      autoForward: false
    };
    var InterpreterStatus;

    (function (InterpreterStatus) {
      InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
      InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
      InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
    })(InterpreterStatus || (InterpreterStatus = {}));

    var Interpreter =
    /*#__PURE__*/

    /** @class */
    function () {
      /**
       * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
       *
       * @param machine The machine to be interpreted
       * @param options Interpreter options
       */
      function Interpreter(machine, options) {
        var _this = this;

        if (options === void 0) {
          options = Interpreter.defaultOptions;
        }

        this.machine = machine;
        this.delayedEventsMap = {};
        this.listeners = new Set();
        this.contextListeners = new Set();
        this.stopListeners = new Set();
        this.doneListeners = new Set();
        this.eventListeners = new Set();
        this.sendListeners = new Set();
        /**
         * Whether the service is started.
         */

        this.initialized = false;
        this.status = InterpreterStatus.NotStarted;
        this.children = new Map();
        this.forwardTo = new Set();
        /**
         * Alias for Interpreter.prototype.start
         */

        this.init = this.start;
        /**
         * Sends an event to the running interpreter to trigger a transition.
         *
         * An array of events (batched) can be sent as well, which will send all
         * batched events to the running interpreter. The listeners will be
         * notified only **once** when all events are processed.
         *
         * @param event The event(s) to send
         */

        this.send = function (event, payload) {
          if (isArray(event)) {
            _this.batch(event);

            return _this.state;
          }

          var _event = toSCXMLEvent(toEventObject(event, payload));

          if (_this.status === InterpreterStatus.Stopped) {
            // do nothing
            {
              warn(false, "Event \"".concat(_event.name, "\" was sent to stopped service \"").concat(_this.machine.id, "\". This service has already reached its final state, and will not transition.\nEvent: ").concat(JSON.stringify(_event.data)));
            }

            return _this.state;
          }

          if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
            throw new Error("Event \"".concat(_event.name, "\" was sent to uninitialized service \"").concat(_this.machine.id // tslint:disable-next-line:max-line-length
            , "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ").concat(JSON.stringify(_event.data)));
          }

          _this.scheduler.schedule(function () {
            // Forward copy of event to child actors
            _this.forward(_event);

            var nextState = _this.nextState(_event);

            _this.update(nextState, _event);
          });

          return _this._state; // TODO: deprecate (should return void)
          // tslint:disable-next-line:semicolon
        };

        this.sendTo = function (event, to) {
          var isParent = _this.parent && (to === SpecialTargets.Parent || _this.parent.id === to);
          var target = isParent ? _this.parent : isString$1(to) ? _this.children.get(to) || registry.get(to) : isActor$1(to) ? to : undefined;

          if (!target) {
            if (!isParent) {
              throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
            } // tslint:disable-next-line:no-console


            {
              warn(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event.type));
            }

            return;
          }

          if ('machine' in target) {
            // Send SCXML events to machines
            target.send(__assign$3(__assign$3({}, event), {
              name: event.name === error$1 ? "".concat(error(_this.id)) : event.name,
              origin: _this.sessionId
            }));
          } else {
            // Send normal events to other targets
            target.send(event.data);
          }
        };

        var resolvedOptions = __assign$3(__assign$3({}, Interpreter.defaultOptions), options);

        var clock = resolvedOptions.clock,
            logger = resolvedOptions.logger,
            parent = resolvedOptions.parent,
            id = resolvedOptions.id;
        var resolvedId = id !== undefined ? id : machine.id;
        this.id = resolvedId;
        this.logger = logger;
        this.clock = clock;
        this.parent = parent;
        this.options = resolvedOptions;
        this.scheduler = new Scheduler({
          deferEvents: this.options.deferEvents
        });
        this.sessionId = registry.bookId();
      }

      Object.defineProperty(Interpreter.prototype, "initialState", {
        get: function () {
          var _this = this;

          if (this._initialState) {
            return this._initialState;
          }

          return provide(this, function () {
            _this._initialState = _this.machine.initialState;
            return _this._initialState;
          });
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Interpreter.prototype, "state", {
        get: function () {
          {
            warn(this.status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
          }

          return this._state;
        },
        enumerable: false,
        configurable: true
      });
      /**
       * Executes the actions of the given state, with that state's `context` and `event`.
       *
       * @param state The state whose actions will be executed
       * @param actionsConfig The action implementations to use
       */

      Interpreter.prototype.execute = function (state, actionsConfig) {
        var e_1, _a;

        try {
          for (var _b = __values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
            var action = _c.value;
            this.exec(action, state, actionsConfig);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      };

      Interpreter.prototype.update = function (state, _event) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

        var _this = this; // Attach session ID to state


        state._sessionid = this.sessionId; // Update state

        this._state = state; // Execute actions

        if (this.options.execute) {
          this.execute(this.state);
        } // Update children


        this.children.forEach(function (child) {
          _this.state.children[child.id] = child;
        }); // Dev tools

        if (this.devTools) {
          this.devTools.send(_event.data, state);
        } // Execute listeners


        if (state.event) {
          try {
            for (var _e = __values(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
              var listener = _f.value;
              listener(state.event);
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }

        try {
          for (var _g = __values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
            var listener = _h.value;
            listener(state, state.event);
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
          } finally {
            if (e_3) throw e_3.error;
          }
        }

        try {
          for (var _j = __values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
            var contextListener = _k.value;
            contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
          } finally {
            if (e_4) throw e_4.error;
          }
        }

        var isDone = isInFinalState(state.configuration || [], this.machine);

        if (this.state.configuration && isDone) {
          // get final child state node
          var finalChildStateNode = state.configuration.find(function (sn) {
            return sn.type === 'final' && sn.parent === _this.machine;
          });
          var doneData = finalChildStateNode && finalChildStateNode.doneData ? mapContext(finalChildStateNode.doneData, state.context, _event) : undefined;

          try {
            for (var _l = __values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
              var listener = _m.value;
              listener(doneInvoke(this.id, doneData));
            }
          } catch (e_5_1) {
            e_5 = {
              error: e_5_1
            };
          } finally {
            try {
              if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
            } finally {
              if (e_5) throw e_5.error;
            }
          }

          this.stop();
        }
      };
      /*
       * Adds a listener that is notified whenever a state transition happens. The listener is called with
       * the next state and the event object that caused the state transition.
       *
       * @param listener The state listener
       */


      Interpreter.prototype.onTransition = function (listener) {
        this.listeners.add(listener); // Send current state to listener

        if (this.status === InterpreterStatus.Running) {
          listener(this.state, this.state.event);
        }

        return this;
      };

      Interpreter.prototype.subscribe = function (nextListenerOrObserver, _, // TODO: error listener
      completeListener) {
        var _this = this;

        if (!nextListenerOrObserver) {
          return {
            unsubscribe: function () {
              return void 0;
            }
          };
        }

        var listener;
        var resolvedCompleteListener = completeListener;

        if (typeof nextListenerOrObserver === 'function') {
          listener = nextListenerOrObserver;
        } else {
          listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
          resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
        }

        this.listeners.add(listener); // Send current state to listener

        if (this.status !== InterpreterStatus.NotStarted) {
          listener(this.state);
        }

        if (resolvedCompleteListener) {
          if (this.status === InterpreterStatus.Stopped) {
            resolvedCompleteListener();
          } else {
            this.onDone(resolvedCompleteListener);
          }
        }

        return {
          unsubscribe: function () {
            listener && _this.listeners.delete(listener);
            resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
          }
        };
      };
      /**
       * Adds an event listener that is notified whenever an event is sent to the running interpreter.
       * @param listener The event listener
       */


      Interpreter.prototype.onEvent = function (listener) {
        this.eventListeners.add(listener);
        return this;
      };
      /**
       * Adds an event listener that is notified whenever a `send` event occurs.
       * @param listener The event listener
       */


      Interpreter.prototype.onSend = function (listener) {
        this.sendListeners.add(listener);
        return this;
      };
      /**
       * Adds a context listener that is notified whenever the state context changes.
       * @param listener The context listener
       */


      Interpreter.prototype.onChange = function (listener) {
        this.contextListeners.add(listener);
        return this;
      };
      /**
       * Adds a listener that is notified when the machine is stopped.
       * @param listener The listener
       */


      Interpreter.prototype.onStop = function (listener) {
        this.stopListeners.add(listener);
        return this;
      };
      /**
       * Adds a state listener that is notified when the statechart has reached its final state.
       * @param listener The state listener
       */


      Interpreter.prototype.onDone = function (listener) {
        this.doneListeners.add(listener);
        return this;
      };
      /**
       * Removes a listener.
       * @param listener The listener to remove
       */


      Interpreter.prototype.off = function (listener) {
        this.listeners.delete(listener);
        this.eventListeners.delete(listener);
        this.sendListeners.delete(listener);
        this.stopListeners.delete(listener);
        this.doneListeners.delete(listener);
        this.contextListeners.delete(listener);
        return this;
      };
      /**
       * Starts the interpreter from the given state, or the initial state.
       * @param initialState The state to start the statechart from
       */


      Interpreter.prototype.start = function (initialState) {
        var _this = this;

        if (this.status === InterpreterStatus.Running) {
          // Do not restart the service if it is already started
          return this;
        } // yes, it's a hack but we need the related cache to be populated for some things to work (like delayed transitions)
        // this is usually called by `machine.getInitialState` but if we rehydrate from a state we might bypass this call
        // we also don't want to call this method here as it resolves the full initial state which might involve calling assign actions
        // and that could potentially lead to some unwanted side-effects (even such as creating some rogue actors)


        this.machine._init();

        registry.register(this.sessionId, this);
        this.initialized = true;
        this.status = InterpreterStatus.Running;
        var resolvedState = initialState === undefined ? this.initialState : provide(this, function () {
          return isStateConfig(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.from(initialState, _this.machine.context));
        });

        if (this.options.devTools) {
          this.attachDev();
        }

        this.scheduler.initialize(function () {
          _this.update(resolvedState, initEvent);
        });
        return this;
      };
      /**
       * Stops the interpreter and unsubscribe all listeners.
       *
       * This will also notify the `onStop` listeners.
       */


      Interpreter.prototype.stop = function () {
        var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

        var _this = this;

        try {
          for (var _f = __values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
            var listener = _g.value;
            this.listeners.delete(listener);
          }
        } catch (e_6_1) {
          e_6 = {
            error: e_6_1
          };
        } finally {
          try {
            if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
          } finally {
            if (e_6) throw e_6.error;
          }
        }

        try {
          for (var _h = __values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
            var listener = _j.value; // call listener, then remove

            listener();
            this.stopListeners.delete(listener);
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
          } finally {
            if (e_7) throw e_7.error;
          }
        }

        try {
          for (var _k = __values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
            var listener = _l.value;
            this.contextListeners.delete(listener);
          }
        } catch (e_8_1) {
          e_8 = {
            error: e_8_1
          };
        } finally {
          try {
            if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
          } finally {
            if (e_8) throw e_8.error;
          }
        }

        try {
          for (var _m = __values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
            var listener = _o.value;
            this.doneListeners.delete(listener);
          }
        } catch (e_9_1) {
          e_9 = {
            error: e_9_1
          };
        } finally {
          try {
            if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
          } finally {
            if (e_9) throw e_9.error;
          }
        }

        if (!this.initialized) {
          // Interpreter already stopped; do nothing
          return this;
        }

        __spreadArray$2([], __read$4(this.state.configuration), false).sort(function (a, b) {
          return b.order - a.order;
        }).forEach(function (stateNode) {
          var e_11, _a;

          try {
            for (var _b = __values(stateNode.definition.exit), _c = _b.next(); !_c.done; _c = _b.next()) {
              var action = _c.value;

              _this.exec(action, _this.state);
            }
          } catch (e_11_1) {
            e_11 = {
              error: e_11_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_11) throw e_11.error;
            }
          }
        }); // Stop all children


        this.children.forEach(function (child) {
          if (isFunction$1(child.stop)) {
            child.stop();
          }
        });
        this.children.clear();

        try {
          // Cancel all delayed events
          for (var _p = __values(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            this.clock.clearTimeout(this.delayedEventsMap[key]);
          }
        } catch (e_10_1) {
          e_10 = {
            error: e_10_1
          };
        } finally {
          try {
            if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
          } finally {
            if (e_10) throw e_10.error;
          }
        }

        this.scheduler.clear();
        this.scheduler = new Scheduler({
          deferEvents: this.options.deferEvents
        });
        this.initialized = false;
        this.status = InterpreterStatus.Stopped;
        this._initialState = undefined;
        registry.free(this.sessionId);
        return this;
      };

      Interpreter.prototype.batch = function (events) {
        var _this = this;

        if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) {
          // tslint:disable-next-line:no-console
          {
            warn(false, "".concat(events.length, " event(s) were sent to uninitialized service \"").concat(this.machine.id, "\" and are deferred. Make sure .start() is called for this service.\nEvent: ").concat(JSON.stringify(event)));
          }
        } else if (this.status !== InterpreterStatus.Running) {
          throw new Error( // tslint:disable-next-line:max-line-length
          "".concat(events.length, " event(s) were sent to uninitialized service \"").concat(this.machine.id, "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options."));
        }

        this.scheduler.schedule(function () {
          var e_12, _a;

          var nextState = _this.state;
          var batchChanged = false;
          var batchedActions = [];

          var _loop_1 = function (event_1) {
            var _event = toSCXMLEvent(event_1);

            _this.forward(_event);

            nextState = provide(_this, function () {
              return _this.machine.transition(nextState, _event);
            });
            batchedActions.push.apply(batchedActions, __spreadArray$2([], __read$4(nextState.actions.map(function (a) {
              return bindActionToState(a, nextState);
            })), false));
            batchChanged = batchChanged || !!nextState.changed;
          };

          try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
              var event_1 = events_1_1.value;

              _loop_1(event_1);
            }
          } catch (e_12_1) {
            e_12 = {
              error: e_12_1
            };
          } finally {
            try {
              if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            } finally {
              if (e_12) throw e_12.error;
            }
          }

          nextState.changed = batchChanged;
          nextState.actions = batchedActions;

          _this.update(nextState, toSCXMLEvent(events[events.length - 1]));
        });
      };
      /**
       * Returns a send function bound to this interpreter instance.
       *
       * @param event The event to be sent by the sender.
       */


      Interpreter.prototype.sender = function (event) {
        return this.send.bind(this, event);
      };
      /**
       * Returns the next state given the interpreter's current state and the event.
       *
       * This is a pure method that does _not_ update the interpreter's state.
       *
       * @param event The event to determine the next state
       */


      Interpreter.prototype.nextState = function (event) {
        var _this = this;

        var _event = toSCXMLEvent(event);

        if (_event.name.indexOf(errorPlatform) === 0 && !this.state.nextEvents.some(function (nextEvent) {
          return nextEvent.indexOf(errorPlatform) === 0;
        })) {
          throw _event.data.data;
        }

        var nextState = provide(this, function () {
          return _this.machine.transition(_this.state, _event);
        });
        return nextState;
      };

      Interpreter.prototype.forward = function (event) {
        var e_13, _a;

        try {
          for (var _b = __values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
            var id = _c.value;
            var child = this.children.get(id);

            if (!child) {
              throw new Error("Unable to forward event '".concat(event, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
            }

            child.send(event);
          }
        } catch (e_13_1) {
          e_13 = {
            error: e_13_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_13) throw e_13.error;
          }
        }
      };

      Interpreter.prototype.defer = function (sendAction) {
        var _this = this;

        this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
          if (sendAction.to) {
            _this.sendTo(sendAction._event, sendAction.to);
          } else {
            _this.send(sendAction._event);
          }
        }, sendAction.delay);
      };

      Interpreter.prototype.cancel = function (sendId) {
        this.clock.clearTimeout(this.delayedEventsMap[sendId]);
        delete this.delayedEventsMap[sendId];
      };

      Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
        if (actionFunctionMap === void 0) {
          actionFunctionMap = this.machine.options.actions;
        }

        var context = state.context,
            _event = state._event;
        var actionOrExec = action.exec || getActionFunction(action.type, actionFunctionMap);
        var exec = isFunction$1(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

        if (exec) {
          try {
            return exec(context, _event.data, {
              action: action,
              state: this.state,
              _event: _event
            });
          } catch (err) {
            if (this.parent) {
              this.parent.send({
                type: 'xstate.error',
                data: err
              });
            }

            throw err;
          }
        }

        switch (action.type) {
          case send$1:
            var sendAction = action;

            if (typeof sendAction.delay === 'number') {
              this.defer(sendAction);
              return;
            } else {
              if (sendAction.to) {
                this.sendTo(sendAction._event, sendAction.to);
              } else {
                this.send(sendAction._event);
              }
            }

            break;

          case cancel$1:
            this.cancel(action.sendId);
            break;

          case start$1:
            {
              if (this.status !== InterpreterStatus.Running) {
                return;
              }

              var activity = action.activity; // If the activity will be stopped right after it's started
              // (such as in transient states)
              // don't bother starting the activity.

              if (!this.state.activities[activity.id || activity.type]) {
                break;
              } // Invoked services


              if (activity.type === ActionTypes.Invoke) {
                var invokeSource = toInvokeSource$1(activity.src);
                var serviceCreator = this.machine.options.services ? this.machine.options.services[invokeSource.type] : undefined;
                var id = activity.id,
                    data = activity.data;

                {
                  warn(!('forward' in activity), // tslint:disable-next-line:max-line-length
                  "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
                }

                var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

                if (!serviceCreator) {
                  // tslint:disable-next-line:no-console
                  {
                    warn(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(this.machine.id, "'."));
                  }

                  return;
                }

                var resolvedData = data ? mapContext(data, context, _event) : undefined;

                if (typeof serviceCreator === 'string') {
                  // TODO: warn
                  return;
                }

                var source = isFunction$1(serviceCreator) ? serviceCreator(context, _event.data, {
                  data: resolvedData,
                  src: invokeSource,
                  meta: activity.meta
                }) : serviceCreator;

                if (!source) {
                  // TODO: warn?
                  return;
                }

                var options = void 0;

                if (isMachine(source)) {
                  source = resolvedData ? source.withContext(resolvedData) : source;
                  options = {
                    autoForward: autoForward
                  };
                }

                this.spawn(source, id, options);
              } else {
                this.spawnActivity(activity);
              }

              break;
            }

          case stop$1:
            {
              this.stopChild(action.activity.id);
              break;
            }

          case log:
            var label = action.label,
                value = action.value;

            if (label) {
              this.logger(label, value);
            } else {
              this.logger(value);
            }

            break;

          default:
            {
              warn(false, "No implementation found for action type '".concat(action.type, "'"));
            }

            break;
        }

        return undefined;
      };

      Interpreter.prototype.removeChild = function (childId) {
        var _a;

        this.children.delete(childId);
        this.forwardTo.delete(childId); // this.state might not exist at the time this is called,
        // such as when a child is added then removed while initializing the state

        (_a = this.state) === null || _a === void 0 ? true : delete _a.children[childId];
      };

      Interpreter.prototype.stopChild = function (childId) {
        var child = this.children.get(childId);

        if (!child) {
          return;
        }

        this.removeChild(childId);

        if (isFunction$1(child.stop)) {
          child.stop();
        }
      };

      Interpreter.prototype.spawn = function (entity, name, options) {
        if (isPromiseLike(entity)) {
          return this.spawnPromise(Promise.resolve(entity), name);
        } else if (isFunction$1(entity)) {
          return this.spawnCallback(entity, name);
        } else if (isSpawnedActor(entity)) {
          return this.spawnActor(entity, name);
        } else if (isObservable(entity)) {
          return this.spawnObservable(entity, name);
        } else if (isMachine(entity)) {
          return this.spawnMachine(entity, __assign$3(__assign$3({}, options), {
            id: name
          }));
        } else if (isBehavior(entity)) {
          return this.spawnBehavior(entity, name);
        } else {
          throw new Error("Unable to spawn entity \"".concat(name, "\" of type \"").concat(typeof entity, "\"."));
        }
      };

      Interpreter.prototype.spawnMachine = function (machine, options) {
        var _this = this;

        if (options === void 0) {
          options = {};
        }

        var childService = new Interpreter(machine, __assign$3(__assign$3({}, this.options), {
          parent: this,
          id: options.id || machine.id
        }));

        var resolvedOptions = __assign$3(__assign$3({}, DEFAULT_SPAWN_OPTIONS), options);

        if (resolvedOptions.sync) {
          childService.onTransition(function (state) {
            _this.send(update, {
              state: state,
              id: childService.id
            });
          });
        }

        var actor = childService;
        this.children.set(childService.id, actor);

        if (resolvedOptions.autoForward) {
          this.forwardTo.add(childService.id);
        }

        childService.onDone(function (doneEvent) {
          _this.removeChild(childService.id);

          _this.send(toSCXMLEvent(doneEvent, {
            origin: childService.id
          }));
        }).start();
        return actor;
      };

      Interpreter.prototype.spawnBehavior = function (behavior, id) {
        var actorRef = spawnBehavior(behavior, {
          id: id,
          parent: this
        });
        this.children.set(id, actorRef);
        return actorRef;
      };

      Interpreter.prototype.spawnPromise = function (promise, id) {
        var _a;

        var _this = this;

        var canceled = false;
        var resolvedData;
        promise.then(function (response) {
          if (!canceled) {
            resolvedData = response;

            _this.removeChild(id);

            _this.send(toSCXMLEvent(doneInvoke(id, response), {
              origin: id
            }));
          }
        }, function (errorData) {
          if (!canceled) {
            _this.removeChild(id);

            var errorEvent = error(id, errorData);

            try {
              // Send "error.platform.id" to this (parent).
              _this.send(toSCXMLEvent(errorEvent, {
                origin: id
              }));
            } catch (error) {
              reportUnhandledExceptionOnInvocation(errorData, error, id);

              if (_this.devTools) {
                _this.devTools.send(errorEvent, _this.state);
              }

              if (_this.machine.strict) {
                // it would be better to always stop the state machine if unhandled
                // exception/promise rejection happens but because we don't want to
                // break existing code so enforce it on strict mode only especially so
                // because documentation says that onError is optional
                _this.stop();
              }
            }
          }
        });
        var actor = (_a = {
          id: id,
          send: function () {
            return void 0;
          },
          subscribe: function (next, handleError, complete) {
            var observer = toObserver(next, handleError, complete);
            var unsubscribed = false;
            promise.then(function (response) {
              if (unsubscribed) {
                return;
              }

              observer.next(response);

              if (unsubscribed) {
                return;
              }

              observer.complete();
            }, function (err) {
              if (unsubscribed) {
                return;
              }

              observer.error(err);
            });
            return {
              unsubscribe: function () {
                return unsubscribed = true;
              }
            };
          },
          stop: function () {
            canceled = true;
          },
          toJSON: function () {
            return {
              id: id
            };
          },
          getSnapshot: function () {
            return resolvedData;
          }
        }, _a[symbolObservable] = function () {
          return this;
        }, _a);
        this.children.set(id, actor);
        return actor;
      };

      Interpreter.prototype.spawnCallback = function (callback, id) {
        var _a;

        var _this = this;

        var canceled = false;
        var receivers = new Set();
        var listeners = new Set();
        var emitted;

        var receive = function (e) {
          emitted = e;
          listeners.forEach(function (listener) {
            return listener(e);
          });

          if (canceled) {
            return;
          }

          _this.send(toSCXMLEvent(e, {
            origin: id
          }));
        };

        var callbackStop;

        try {
          callbackStop = callback(receive, function (newListener) {
            receivers.add(newListener);
          });
        } catch (err) {
          this.send(error(id, err));
        }

        if (isPromiseLike(callbackStop)) {
          // it turned out to be an async function, can't reliably check this before calling `callback`
          // because transpiled async functions are not recognizable
          return this.spawnPromise(callbackStop, id);
        }

        var actor = (_a = {
          id: id,
          send: function (event) {
            return receivers.forEach(function (receiver) {
              return receiver(event);
            });
          },
          subscribe: function (next) {
            var observer = toObserver(next);
            listeners.add(observer.next);
            return {
              unsubscribe: function () {
                listeners.delete(observer.next);
              }
            };
          },
          stop: function () {
            canceled = true;

            if (isFunction$1(callbackStop)) {
              callbackStop();
            }
          },
          toJSON: function () {
            return {
              id: id
            };
          },
          getSnapshot: function () {
            return emitted;
          }
        }, _a[symbolObservable] = function () {
          return this;
        }, _a);
        this.children.set(id, actor);
        return actor;
      };

      Interpreter.prototype.spawnObservable = function (source, id) {
        var _a;

        var _this = this;

        var emitted;
        var subscription = source.subscribe(function (value) {
          emitted = value;

          _this.send(toSCXMLEvent(value, {
            origin: id
          }));
        }, function (err) {
          _this.removeChild(id);

          _this.send(toSCXMLEvent(error(id, err), {
            origin: id
          }));
        }, function () {
          _this.removeChild(id);

          _this.send(toSCXMLEvent(doneInvoke(id), {
            origin: id
          }));
        });
        var actor = (_a = {
          id: id,
          send: function () {
            return void 0;
          },
          subscribe: function (next, handleError, complete) {
            return source.subscribe(next, handleError, complete);
          },
          stop: function () {
            return subscription.unsubscribe();
          },
          getSnapshot: function () {
            return emitted;
          },
          toJSON: function () {
            return {
              id: id
            };
          }
        }, _a[symbolObservable] = function () {
          return this;
        }, _a);
        this.children.set(id, actor);
        return actor;
      };

      Interpreter.prototype.spawnActor = function (actor, name) {
        this.children.set(name, actor);
        return actor;
      };

      Interpreter.prototype.spawnActivity = function (activity) {
        var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

        if (!implementation) {
          {
            warn(false, "No implementation found for activity '".concat(activity.type, "'"));
          } // tslint:disable-next-line:no-console


          return;
        } // Start implementation


        var dispose = implementation(this.state.context, activity);
        this.spawnEffect(activity.id, dispose);
      };

      Interpreter.prototype.spawnEffect = function (id, dispose) {
        var _a;

        this.children.set(id, (_a = {
          id: id,
          send: function () {
            return void 0;
          },
          subscribe: function () {
            return {
              unsubscribe: function () {
                return void 0;
              }
            };
          },
          stop: dispose || undefined,
          getSnapshot: function () {
            return undefined;
          },
          toJSON: function () {
            return {
              id: id
            };
          }
        }, _a[symbolObservable] = function () {
          return this;
        }, _a));
      };

      Interpreter.prototype.attachDev = function () {
        var global = getGlobal();

        if (this.options.devTools && global) {
          if (global.__REDUX_DEVTOOLS_EXTENSION__) {
            var devToolsOptions = typeof this.options.devTools === 'object' ? this.options.devTools : undefined;
            this.devTools = global.__REDUX_DEVTOOLS_EXTENSION__.connect(__assign$3(__assign$3({
              name: this.id,
              autoPause: true,
              stateSanitizer: function (state) {
                return {
                  value: state.value,
                  context: state.context,
                  actions: state.actions
                };
              }
            }, devToolsOptions), {
              features: __assign$3({
                jump: false,
                skip: false
              }, devToolsOptions ? devToolsOptions.features : undefined)
            }), this.machine);
            this.devTools.init(this.state);
          } // add XState-specific dev tooling hook


          registerService(this);
        }
      };

      Interpreter.prototype.toJSON = function () {
        return {
          id: this.id
        };
      };

      Interpreter.prototype[symbolObservable] = function () {
        return this;
      };

      Interpreter.prototype.getSnapshot = function () {
        if (this.status === InterpreterStatus.NotStarted) {
          return this.initialState;
        }

        return this._state;
      };
      /**
       * The default interpreter options:
       *
       * - `clock` uses the global `setTimeout` and `clearTimeout` functions
       * - `logger` uses the global `console.log()` method
       */


      Interpreter.defaultOptions = {
        execute: true,
        deferEvents: true,
        clock: {
          setTimeout: function (fn, ms) {
            return setTimeout(fn, ms);
          },
          clearTimeout: function (id) {
            return clearTimeout(id);
          }
        },
        logger: /*#__PURE__*/console.log.bind(console),
        devTools: false
      };
      Interpreter.interpret = interpret;
      return Interpreter;
    }();
    /**
     * Creates a new Interpreter instance for the given machine with the provided options, if any.
     *
     * @param machine The machine to interpret
     * @param options Interpreter options
     */

    function interpret(machine, options) {
      var interpreter = new Interpreter(machine, options);
      return interpreter;
    }

    function toInvokeSource(src) {
      if (typeof src === 'string') {
        var simpleSrc = {
          type: src
        };

        simpleSrc.toString = function () {
          return src;
        }; // v4 compat - TODO: remove in v5


        return simpleSrc;
      }

      return src;
    }
    function toInvokeDefinition(invokeConfig) {
      return __assign$3(__assign$3({
        type: invoke
      }, invokeConfig), {
        toJSON: function () {
          invokeConfig.onDone;
              invokeConfig.onError;
              var invokeDef = __rest$1(invokeConfig, ["onDone", "onError"]);

          return __assign$3(__assign$3({}, invokeDef), {
            type: invoke,
            src: toInvokeSource(invokeConfig.src)
          });
        }
      });
    }

    var NULL_EVENT = '';
    var STATE_IDENTIFIER = '#';
    var WILDCARD = '*';
    var EMPTY_OBJECT = {};

    var isStateId = function (str) {
      return str[0] === STATE_IDENTIFIER;
    };

    var createDefaultOptions = function () {
      return {
        actions: {},
        guards: {},
        services: {},
        activities: {},
        delays: {}
      };
    };

    var validateArrayifiedTransitions = function (stateNode, event, transitions) {
      var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
        return !('cond' in transition) && !('in' in transition) && (isString$1(transition.target) || isMachine(transition.target));
      });
      var eventText = event === NULL_EVENT ? 'the transient event' : "event '".concat(event, "'");
      warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
    };

    var StateNode =
    /*#__PURE__*/

    /** @class */
    function () {
      function StateNode(
      /**
       * The raw config used to create the machine.
       */
      config, options,
      /**
       * The initial extended state
       */
      _context, // TODO: this is unsafe, but we're removing it in v5 anyway
      _stateInfo) {
        var _this = this;

        if (_context === void 0) {
          _context = 'context' in config ? config.context : undefined;
        }

        var _a;

        this.config = config;
        this._context = _context;
        /**
         * The order this state node appears. Corresponds to the implicit SCXML document order.
         */

        this.order = -1;
        this.__xstatenode = true;
        this.__cache = {
          events: undefined,
          relativeValue: new Map(),
          initialStateValue: undefined,
          initialState: undefined,
          on: undefined,
          transitions: undefined,
          candidates: {},
          delayedTransitions: undefined
        };
        this.idMap = {};
        this.tags = [];
        this.options = Object.assign(createDefaultOptions(), options);
        this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
        this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || '(machine)';
        this.machine = this.parent ? this.parent.machine : this;
        this.path = this.parent ? this.parent.path.concat(this.key) : [];
        this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : STATE_DELIMITER);
        this.id = this.config.id || __spreadArray$2([this.machine.key], __read$4(this.path), false).join(this.delimiter);
        this.version = this.parent ? this.parent.version : this.config.version;
        this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object.keys(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');
        this.schema = this.parent ? this.machine.schema : (_a = this.config.schema) !== null && _a !== void 0 ? _a : {};
        this.description = this.config.description;

        {
          warn(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. ".concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
        }

        this.initial = this.config.initial;
        this.states = this.config.states ? mapValues(this.config.states, function (stateConfig, key) {
          var _a;

          var stateNode = new StateNode(stateConfig, {}, undefined, {
            parent: _this,
            key: key
          });
          Object.assign(_this.idMap, __assign$3((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
          return stateNode;
        }) : EMPTY_OBJECT; // Document order

        var order = 0;

        function dfs(stateNode) {
          var e_1, _a;

          stateNode.order = order++;

          try {
            for (var _b = __values(getChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              dfs(child);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }

        dfs(this); // History config

        this.history = this.config.history === true ? 'shallow' : this.config.history || false;
        this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
          var event = _a.event;
          return event === NULL_EVENT;
        }) : NULL_EVENT in this.config.on);
        this.strict = !!this.config.strict; // TODO: deprecate (entry)

        this.onEntry = toArray(this.config.entry || this.config.onEntry).map(function (action) {
          return toActionObject(action);
        }); // TODO: deprecate (exit)

        this.onExit = toArray(this.config.exit || this.config.onExit).map(function (action) {
          return toActionObject(action);
        });
        this.meta = this.config.meta;
        this.doneData = this.type === 'final' ? this.config.data : undefined;
        this.invoke = toArray(this.config.invoke).map(function (invokeConfig, i) {
          var _a, _b;

          if (isMachine(invokeConfig)) {
            var invokeId = createInvokeId(_this.id, i);
            _this.machine.options.services = __assign$3((_a = {}, _a[invokeId] = invokeConfig, _a), _this.machine.options.services);
            return toInvokeDefinition({
              src: invokeId,
              id: invokeId
            });
          } else if (isString$1(invokeConfig.src)) {
            var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
            return toInvokeDefinition(__assign$3(__assign$3({}, invokeConfig), {
              id: invokeId,
              src: invokeConfig.src
            }));
          } else if (isMachine(invokeConfig.src) || isFunction$1(invokeConfig.src)) {
            var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
            _this.machine.options.services = __assign$3((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
            return toInvokeDefinition(__assign$3(__assign$3({
              id: invokeId
            }, invokeConfig), {
              src: invokeId
            }));
          } else {
            var invokeSource = invokeConfig.src;
            return toInvokeDefinition(__assign$3(__assign$3({
              id: createInvokeId(_this.id, i)
            }, invokeConfig), {
              src: invokeSource
            }));
          }
        });
        this.activities = toArray(this.config.activities).concat(this.invoke).map(function (activity) {
          return toActivityDefinition(activity);
        });
        this.transition = this.transition.bind(this);
        this.tags = toArray(this.config.tags); // TODO: this is the real fix for initialization once
        // state node getters are deprecated
        // if (!this.parent) {
        //   this._init();
        // }
      }

      StateNode.prototype._init = function () {
        if (this.__cache.transitions) {
          return;
        }

        getAllStateNodes(this).forEach(function (stateNode) {
          return stateNode.on;
        });
      };
      /**
       * Clones this state machine with custom options and context.
       *
       * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
       * @param context Custom context (will override predefined context)
       */


      StateNode.prototype.withConfig = function (options, context) {
        var _a = this.options,
            actions = _a.actions,
            activities = _a.activities,
            guards = _a.guards,
            services = _a.services,
            delays = _a.delays;
        return new StateNode(this.config, {
          actions: __assign$3(__assign$3({}, actions), options.actions),
          activities: __assign$3(__assign$3({}, activities), options.activities),
          guards: __assign$3(__assign$3({}, guards), options.guards),
          services: __assign$3(__assign$3({}, services), options.services),
          delays: __assign$3(__assign$3({}, delays), options.delays)
        }, context !== null && context !== void 0 ? context : this.context);
      };
      /**
       * Clones this state machine with custom context.
       *
       * @param context Custom context (will override predefined context, not recursive)
       */


      StateNode.prototype.withContext = function (context) {
        return new StateNode(this.config, this.options, context);
      };

      Object.defineProperty(StateNode.prototype, "context", {
        get: function () {
          return isFunction$1(this._context) ? this._context() : this._context;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateNode.prototype, "definition", {
        /**
         * The well-structured state node definition.
         */
        get: function () {
          return {
            id: this.id,
            key: this.key,
            version: this.version,
            context: this.context,
            type: this.type,
            initial: this.initial,
            history: this.history,
            states: mapValues(this.states, function (state) {
              return state.definition;
            }),
            on: this.on,
            transitions: this.transitions,
            entry: this.onEntry,
            exit: this.onExit,
            activities: this.activities || [],
            meta: this.meta,
            order: this.order || -1,
            data: this.doneData,
            invoke: this.invoke,
            description: this.description,
            tags: this.tags
          };
        },
        enumerable: false,
        configurable: true
      });

      StateNode.prototype.toJSON = function () {
        return this.definition;
      };

      Object.defineProperty(StateNode.prototype, "on", {
        /**
         * The mapping of events to transitions.
         */
        get: function () {
          if (this.__cache.on) {
            return this.__cache.on;
          }

          var transitions = this.transitions;
          return this.__cache.on = transitions.reduce(function (map, transition) {
            map[transition.eventType] = map[transition.eventType] || [];
            map[transition.eventType].push(transition);
            return map;
          }, {});
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateNode.prototype, "after", {
        get: function () {
          return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateNode.prototype, "transitions", {
        /**
         * All the transitions that can be taken from this state node.
         */
        get: function () {
          return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
        },
        enumerable: false,
        configurable: true
      });

      StateNode.prototype.getCandidates = function (eventName) {
        if (this.__cache.candidates[eventName]) {
          return this.__cache.candidates[eventName];
        }

        var transient = eventName === NULL_EVENT;
        var candidates = this.transitions.filter(function (transition) {
          var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

          return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
        });
        this.__cache.candidates[eventName] = candidates;
        return candidates;
      };
      /**
       * All delayed transitions from the config.
       */


      StateNode.prototype.getDelayedTransitions = function () {
        var _this = this;

        var afterConfig = this.config.after;

        if (!afterConfig) {
          return [];
        }

        var mutateEntryExit = function (delay, i) {
          var delayRef = isFunction$1(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
          var eventType = after(delayRef, _this.id);

          _this.onEntry.push(send(eventType, {
            delay: delay
          }));

          _this.onExit.push(cancel(eventType));

          return eventType;
        };

        var delayedTransitions = isArray(afterConfig) ? afterConfig.map(function (transition, i) {
          var eventType = mutateEntryExit(transition.delay, i);
          return __assign$3(__assign$3({}, transition), {
            event: eventType
          });
        }) : flatten(Object.keys(afterConfig).map(function (delay, i) {
          var configTransition = afterConfig[delay];
          var resolvedTransition = isString$1(configTransition) ? {
            target: configTransition
          } : configTransition;
          var resolvedDelay = !isNaN(+delay) ? +delay : delay;
          var eventType = mutateEntryExit(resolvedDelay, i);
          return toArray(resolvedTransition).map(function (transition) {
            return __assign$3(__assign$3({}, transition), {
              event: eventType,
              delay: resolvedDelay
            });
          });
        }));
        return delayedTransitions.map(function (delayedTransition) {
          var delay = delayedTransition.delay;
          return __assign$3(__assign$3({}, _this.formatTransition(delayedTransition)), {
            delay: delay
          });
        });
      };
      /**
       * Returns the state nodes represented by the current state value.
       *
       * @param state The state value or State instance
       */


      StateNode.prototype.getStateNodes = function (state) {
        var _a;

        var _this = this;

        if (!state) {
          return [];
        }

        var stateValue = state instanceof State ? state.value : toStateValue(state, this.delimiter);

        if (isString$1(stateValue)) {
          var initialStateValue = this.getStateNode(stateValue).initial;
          return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this, this.states[stateValue]];
        }

        var subStateKeys = Object.keys(stateValue);
        var subStateNodes = [this];
        subStateNodes.push.apply(subStateNodes, __spreadArray$2([], __read$4(flatten(subStateKeys.map(function (subStateKey) {
          return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
        }))), false));
        return subStateNodes;
      };
      /**
       * Returns `true` if this state node explicitly handles the given event.
       *
       * @param event The event in question
       */


      StateNode.prototype.handles = function (event) {
        var eventType = getEventType(event);
        return this.events.includes(eventType);
      };
      /**
       * Resolves the given `state` to a new `State` instance relative to this machine.
       *
       * This ensures that `.events` and `.nextEvents` represent the correct values.
       *
       * @param state The state to resolve
       */


      StateNode.prototype.resolveState = function (state) {
        var stateFromConfig = state instanceof State ? state : State.create(state);
        var configuration = Array.from(getConfiguration([], this.getStateNodes(stateFromConfig.value)));
        return new State(__assign$3(__assign$3({}, stateFromConfig), {
          value: this.resolve(stateFromConfig.value),
          configuration: configuration,
          done: isInFinalState(configuration, this),
          tags: getTagsFromConfiguration(configuration),
          machine: this.machine
        }));
      };

      StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
        var stateNode = this.getStateNode(stateValue);
        var next = stateNode.next(state, _event);

        if (!next || !next.transitions.length) {
          return this.next(state, _event);
        }

        return next;
      };

      StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
        var subStateKeys = Object.keys(stateValue);
        var stateNode = this.getStateNode(subStateKeys[0]);

        var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

        if (!next || !next.transitions.length) {
          return this.next(state, _event);
        }

        return next;
      };

      StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
        var e_2, _a;

        var transitionMap = {};

        try {
          for (var _b = __values(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var subStateKey = _c.value;
            var subStateValue = stateValue[subStateKey];

            if (!subStateValue) {
              continue;
            }

            var subStateNode = this.getStateNode(subStateKey);

            var next = subStateNode._transition(subStateValue, state, _event);

            if (next) {
              transitionMap[subStateKey] = next;
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        var stateTransitions = Object.keys(transitionMap).map(function (key) {
          return transitionMap[key];
        });
        var enabledTransitions = flatten(stateTransitions.map(function (st) {
          return st.transitions;
        }));
        var willTransition = stateTransitions.some(function (st) {
          return st.transitions.length > 0;
        });

        if (!willTransition) {
          return this.next(state, _event);
        }

        var entryNodes = flatten(stateTransitions.map(function (t) {
          return t.entrySet;
        }));
        var configuration = flatten(Object.keys(transitionMap).map(function (key) {
          return transitionMap[key].configuration;
        }));
        return {
          transitions: enabledTransitions,
          entrySet: entryNodes,
          exitSet: flatten(stateTransitions.map(function (t) {
            return t.exitSet;
          })),
          configuration: configuration,
          source: state,
          actions: flatten(Object.keys(transitionMap).map(function (key) {
            return transitionMap[key].actions;
          }))
        };
      };

      StateNode.prototype._transition = function (stateValue, state, _event) {
        // leaf node
        if (isString$1(stateValue)) {
          return this.transitionLeafNode(stateValue, state, _event);
        } // hierarchical node


        if (Object.keys(stateValue).length === 1) {
          return this.transitionCompoundNode(stateValue, state, _event);
        } // orthogonal node


        return this.transitionParallelNode(stateValue, state, _event);
      };

      StateNode.prototype.getTransitionData = function (state, event) {
        return this._transition(state.value, state, toSCXMLEvent(event));
      };

      StateNode.prototype.next = function (state, _event) {
        var e_3, _a;

        var _this = this;

        var eventName = _event.name;
        var actions = [];
        var nextStateNodes = [];
        var selectedTransition;

        try {
          for (var _b = __values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var candidate = _c.value;
            var cond = candidate.cond,
                stateIn = candidate.in;
            var resolvedContext = state.context;
            var isInState = stateIn ? isString$1(stateIn) && isStateId(stateIn) ? // Check if in state by ID
            state.matches(toStateValue(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
            matchesState(toStateValue(stateIn, this.delimiter), path(this.path.slice(0, -2))(state.value)) : true;
            var guardPassed = false;

            try {
              guardPassed = !cond || evaluateGuard(this.machine, cond, resolvedContext, _event, state);
            } catch (err) {
              throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
            }

            if (guardPassed && isInState) {
              if (candidate.target !== undefined) {
                nextStateNodes = candidate.target;
              }

              actions.push.apply(actions, __spreadArray$2([], __read$4(candidate.actions), false));
              selectedTransition = candidate;
              break;
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }

        if (!selectedTransition) {
          return undefined;
        }

        if (!nextStateNodes.length) {
          return {
            transitions: [selectedTransition],
            entrySet: [],
            exitSet: [],
            configuration: state.value ? [this] : [],
            source: state,
            actions: actions
          };
        }

        var allNextStateNodes = flatten(nextStateNodes.map(function (stateNode) {
          return _this.getRelativeStateNodes(stateNode, state.historyValue);
        }));
        var isInternal = !!selectedTransition.internal;
        var reentryNodes = isInternal ? [] : flatten(allNextStateNodes.map(function (n) {
          return _this.nodesFromChild(n);
        }));
        return {
          transitions: [selectedTransition],
          entrySet: reentryNodes,
          exitSet: isInternal ? [] : [this],
          configuration: allNextStateNodes,
          source: state,
          actions: actions
        };
      };

      StateNode.prototype.nodesFromChild = function (childStateNode) {
        if (childStateNode.escapes(this)) {
          return [];
        }

        var nodes = [];
        var marker = childStateNode;

        while (marker && marker !== this) {
          nodes.push(marker);
          marker = marker.parent;
        }

        nodes.push(this); // inclusive

        return nodes;
      };
      /**
       * Whether the given state node "escapes" this state node. If the `stateNode` is equal to or the parent of
       * this state node, it does not escape.
       */


      StateNode.prototype.escapes = function (stateNode) {
        if (this === stateNode) {
          return false;
        }

        var parent = this.parent;

        while (parent) {
          if (parent === stateNode) {
            return false;
          }

          parent = parent.parent;
        }

        return true;
      };

      StateNode.prototype.getActions = function (transition, currentContext, _event, prevState) {
        var e_4, _a, e_5, _b;

        var prevConfig = getConfiguration([], prevState ? this.getStateNodes(prevState.value) : [this]);
        var resolvedConfig = transition.configuration.length ? getConfiguration(prevConfig, transition.configuration) : prevConfig;

        try {
          for (var resolvedConfig_1 = __values(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
            var sn = resolvedConfig_1_1.value;

            if (!has$3(prevConfig, sn)) {
              transition.entrySet.push(sn);
            }
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1.return)) _a.call(resolvedConfig_1);
          } finally {
            if (e_4) throw e_4.error;
          }
        }

        try {
          for (var prevConfig_1 = __values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
            var sn = prevConfig_1_1.value;

            if (!has$3(resolvedConfig, sn) || has$3(transition.exitSet, sn.parent)) {
              transition.exitSet.push(sn);
            }
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
          } finally {
            if (e_5) throw e_5.error;
          }
        }

        var doneEvents = flatten(transition.entrySet.map(function (sn) {
          var events = [];

          if (sn.type !== 'final') {
            return events;
          }

          var parent = sn.parent;

          if (!parent.parent) {
            return events;
          }

          events.push(done(sn.id, sn.doneData), // TODO: deprecate - final states should not emit done events for their own state.
          done(parent.id, sn.doneData ? mapContext(sn.doneData, currentContext, _event) : undefined));
          var grandparent = parent.parent;

          if (grandparent.type === 'parallel') {
            if (getChildren(grandparent).every(function (parentNode) {
              return isInFinalState(transition.configuration, parentNode);
            })) {
              events.push(done(grandparent.id));
            }
          }

          return events;
        }));
        transition.exitSet.sort(function (a, b) {
          return b.order - a.order;
        });
        transition.entrySet.sort(function (a, b) {
          return a.order - b.order;
        });
        var entryStates = new Set(transition.entrySet);
        var exitStates = new Set(transition.exitSet);

        var _c = __read$4([flatten(Array.from(entryStates).map(function (stateNode) {
          return __spreadArray$2(__spreadArray$2([], __read$4(stateNode.activities.map(function (activity) {
            return start(activity);
          })), false), __read$4(stateNode.onEntry), false);
        })).concat(doneEvents.map(raise)), flatten(Array.from(exitStates).map(function (stateNode) {
          return __spreadArray$2(__spreadArray$2([], __read$4(stateNode.onExit), false), __read$4(stateNode.activities.map(function (activity) {
            return stop(activity);
          })), false);
        }))], 2),
            entryActions = _c[0],
            exitActions = _c[1];

        var actions = toActionObjects(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
        return actions;
      };
      /**
       * Determines the next state given the current `state` and sent `event`.
       *
       * @param state The current State instance or state value
       * @param event The event that was sent at the current state
       * @param context The current context (extended state) of the current state
       */


      StateNode.prototype.transition = function (state, event, context) {
        if (state === void 0) {
          state = this.initialState;
        }

        var _event = toSCXMLEvent(event);

        var currentState;

        if (state instanceof State) {
          currentState = context === undefined ? state : this.resolveState(State.from(state, context));
        } else {
          var resolvedStateValue = isString$1(state) ? this.resolve(pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
          var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
          currentState = this.resolveState(State.from(resolvedStateValue, resolvedContext));
        }

        if (!IS_PRODUCTION && _event.name === WILDCARD) {
          throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
        }

        if (this.strict) {
          if (!this.events.includes(_event.name) && !isBuiltInEvent(_event.name)) {
            throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
          }
        }

        var stateTransition = this._transition(currentState.value, currentState, _event) || {
          transitions: [],
          configuration: [],
          entrySet: [],
          exitSet: [],
          source: currentState,
          actions: []
        };
        var prevConfig = getConfiguration([], this.getStateNodes(currentState.value));
        var resolvedConfig = stateTransition.configuration.length ? getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
        stateTransition.configuration = __spreadArray$2([], __read$4(resolvedConfig), false);
        return this.resolveTransition(stateTransition, currentState, currentState.context, _event);
      };

      StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent) {
        var _a;

        var currentActions = state.actions;
        state = this.transition(state, _event); // Save original event to state
        // TODO: this should be the raised event! Delete in V5 (breaking)

        state._event = originalEvent;
        state.event = originalEvent.data;

        (_a = state.actions).unshift.apply(_a, __spreadArray$2([], __read$4(currentActions), false));

        return state;
      };

      StateNode.prototype.resolveTransition = function (stateTransition, currentState, context, _event) {
        var e_6, _a;

        var _this = this;

        if (_event === void 0) {
          _event = initEvent;
        }

        var configuration = stateTransition.configuration; // Transition will "apply" if:
        // - this is the initial state (there is no current state)
        // - OR there are transitions

        var willTransition = !currentState || stateTransition.transitions.length > 0;
        var resolvedStateValue = willTransition ? getValue$1(this.machine, configuration) : undefined;
        var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
        var actions = this.getActions(stateTransition, context, _event, currentState);
        var activities = currentState ? __assign$3({}, currentState.activities) : {};

        try {
          for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
            var action = actions_1_1.value;

            if (action.type === start$1) {
              activities[action.activity.id || action.activity.type] = action;
            } else if (action.type === stop$1) {
              activities[action.activity.id || action.activity.type] = false;
            }
          }
        } catch (e_6_1) {
          e_6 = {
            error: e_6_1
          };
        } finally {
          try {
            if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
          } finally {
            if (e_6) throw e_6.error;
          }
        }

        var _b = __read$4(resolveActions(this, currentState, context, _event, actions, this.machine.config.preserveActionOrder), 2),
            resolvedActions = _b[0],
            updatedContext = _b[1];

        var _c = __read$4(partition(resolvedActions, function (action) {
          return action.type === raise$1 || action.type === send$1 && action.to === SpecialTargets.Internal;
        }), 2),
            raisedEvents = _c[0],
            nonRaisedActions = _c[1];

        var invokeActions = resolvedActions.filter(function (action) {
          var _a;

          return action.type === start$1 && ((_a = action.activity) === null || _a === void 0 ? void 0 : _a.type) === invoke;
        });
        var children = invokeActions.reduce(function (acc, action) {
          acc[action.activity.id] = createInvocableActor(action.activity, _this.machine, updatedContext, _event);
          return acc;
        }, currentState ? __assign$3({}, currentState.children) : {});
        var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
        var isDone = isInFinalState(resolvedConfiguration, this);
        var nextState = new State({
          value: resolvedStateValue || currentState.value,
          context: updatedContext,
          _event: _event,
          // Persist _sessionid between states
          _sessionid: currentState ? currentState._sessionid : null,
          historyValue: resolvedStateValue ? historyValue ? updateHistoryValue(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
          history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
          actions: resolvedStateValue ? nonRaisedActions : [],
          activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
          events: [],
          configuration: resolvedConfiguration,
          transitions: stateTransition.transitions,
          children: children,
          done: isDone,
          tags: getTagsFromConfiguration(resolvedConfiguration),
          machine: this
        });
        var didUpdateContext = context !== updatedContext;
        nextState.changed = _event.name === update || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks

        var history = nextState.history;

        if (history) {
          delete history.history;
        } // There are transient transitions if the machine is not in a final state
        // and if some of the state nodes have transient ("always") transitions.


        var isTransient = !isDone && (this._transient || configuration.some(function (stateNode) {
          return stateNode._transient;
        })); // If there are no enabled transitions, check if there are transient transitions.
        // If there are transient transitions, continue checking for more transitions
        // because an transient transition should be triggered even if there are no
        // enabled transitions.
        //
        // If we're already working on an transient transition (by checking
        // if the event is a NULL_EVENT), then stop to prevent an infinite loop.
        //
        // Otherwise, if there are no enabled nor transient transitions, we are done.

        if (!willTransition && (!isTransient || _event.name === NULL_EVENT)) {
          return nextState;
        }

        var maybeNextState = nextState;

        if (!isDone) {
          if (isTransient) {
            maybeNextState = this.resolveRaisedTransition(maybeNextState, {
              type: nullEvent
            }, _event);
          }

          while (raisedEvents.length) {
            var raisedEvent = raisedEvents.shift();
            maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
          }
        } // Detect if state changed


        var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !stateValuesEqual(maybeNextState.value, history.value) : undefined);
        maybeNextState.changed = changed; // Preserve original history after raised events

        maybeNextState.history = history;
        return maybeNextState;
      };
      /**
       * Returns the child state node from its relative `stateKey`, or throws.
       */


      StateNode.prototype.getStateNode = function (stateKey) {
        if (isStateId(stateKey)) {
          return this.machine.getStateNodeById(stateKey);
        }

        if (!this.states) {
          throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
        }

        var result = this.states[stateKey];

        if (!result) {
          throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
        }

        return result;
      };
      /**
       * Returns the state node with the given `stateId`, or throws.
       *
       * @param stateId The state ID. The prefix "#" is removed.
       */


      StateNode.prototype.getStateNodeById = function (stateId) {
        var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

        if (resolvedStateId === this.id) {
          return this;
        }

        var stateNode = this.machine.idMap[resolvedStateId];

        if (!stateNode) {
          throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
        }

        return stateNode;
      };
      /**
       * Returns the relative state node from the given `statePath`, or throws.
       *
       * @param statePath The string or string array relative path to the state node.
       */


      StateNode.prototype.getStateNodeByPath = function (statePath) {
        if (typeof statePath === 'string' && isStateId(statePath)) {
          try {
            return this.getStateNodeById(statePath.slice(1));
          } catch (e) {// try individual paths
            // throw e;
          }
        }

        var arrayStatePath = toStatePath(statePath, this.delimiter).slice();
        var currentStateNode = this;

        while (arrayStatePath.length) {
          var key = arrayStatePath.shift();

          if (!key.length) {
            break;
          }

          currentStateNode = currentStateNode.getStateNode(key);
        }

        return currentStateNode;
      };
      /**
       * Resolves a partial state value with its full representation in this machine.
       *
       * @param stateValue The partial state value to resolve.
       */


      StateNode.prototype.resolve = function (stateValue) {
        var _a;

        var _this = this;

        if (!stateValue) {
          return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
        }

        switch (this.type) {
          case 'parallel':
            return mapValues(this.initialStateValue, function (subStateValue, subStateKey) {
              return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
            });

          case 'compound':
            if (isString$1(stateValue)) {
              var subStateNode = this.getStateNode(stateValue);

              if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
                return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
              }

              return stateValue;
            }

            if (!Object.keys(stateValue).length) {
              return this.initialStateValue || {};
            }

            return mapValues(stateValue, function (subStateValue, subStateKey) {
              return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
            });

          default:
            return stateValue || EMPTY_OBJECT;
        }
      };

      StateNode.prototype.getResolvedPath = function (stateIdentifier) {
        if (isStateId(stateIdentifier)) {
          var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

          if (!stateNode) {
            throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
          }

          return stateNode.path;
        }

        return toStatePath(stateIdentifier, this.delimiter);
      };

      Object.defineProperty(StateNode.prototype, "initialStateValue", {
        get: function () {
          var _a;

          if (this.__cache.initialStateValue) {
            return this.__cache.initialStateValue;
          }

          var initialStateValue;

          if (this.type === 'parallel') {
            initialStateValue = mapFilterValues(this.states, function (state) {
              return state.initialStateValue || EMPTY_OBJECT;
            }, function (stateNode) {
              return !(stateNode.type === 'history');
            });
          } else if (this.initial !== undefined) {
            if (!this.states[this.initial]) {
              throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
            }

            initialStateValue = isLeafNode(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
          } else {
            // The finite state value of a machine without child states is just an empty object
            initialStateValue = {};
          }

          this.__cache.initialStateValue = initialStateValue;
          return this.__cache.initialStateValue;
        },
        enumerable: false,
        configurable: true
      });

      StateNode.prototype.getInitialState = function (stateValue, context) {
        this._init(); // TODO: this should be in the constructor (see note in constructor)


        var configuration = this.getStateNodes(stateValue);
        return this.resolveTransition({
          configuration: configuration,
          entrySet: configuration,
          exitSet: [],
          transitions: [],
          source: undefined,
          actions: []
        }, undefined, context !== null && context !== void 0 ? context : this.machine.context, undefined);
      };

      Object.defineProperty(StateNode.prototype, "initialState", {
        /**
         * The initial State instance, which includes all actions to be executed from
         * entering the initial state.
         */
        get: function () {
          var initialStateValue = this.initialStateValue;

          if (!initialStateValue) {
            throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
          }

          return this.getInitialState(initialStateValue);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateNode.prototype, "target", {
        /**
         * The target state value of the history state node, if it exists. This represents the
         * default state value to transition to if no history value exists yet.
         */
        get: function () {
          var target;

          if (this.type === 'history') {
            var historyConfig = this.config;

            if (isString$1(historyConfig.target)) {
              target = isStateId(historyConfig.target) ? pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
            } else {
              target = historyConfig.target;
            }
          }

          return target;
        },
        enumerable: false,
        configurable: true
      });
      /**
       * Returns the leaf nodes from a state path relative to this state node.
       *
       * @param relativeStateId The relative state path to retrieve the state nodes
       * @param history The previous state to retrieve history
       * @param resolve Whether state nodes should resolve to initial child state nodes
       */

      StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
        if (resolve === void 0) {
          resolve = true;
        }

        return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
      };

      Object.defineProperty(StateNode.prototype, "initialStateNodes", {
        get: function () {
          var _this = this;

          if (isLeafNode(this)) {
            return [this];
          } // Case when state node is compound but no initial state is defined


          if (this.type === 'compound' && !this.initial) {
            if (!IS_PRODUCTION) {
              warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
            }

            return [this];
          }

          var initialStateNodePaths = toStatePaths(this.initialStateValue);
          return flatten(initialStateNodePaths.map(function (initialPath) {
            return _this.getFromRelativePath(initialPath);
          }));
        },
        enumerable: false,
        configurable: true
      });
      /**
       * Retrieves state nodes from a relative path to this state node.
       *
       * @param relativePath The relative path from this state node
       * @param historyValue
       */

      StateNode.prototype.getFromRelativePath = function (relativePath) {
        if (!relativePath.length) {
          return [this];
        }

        var _a = __read$4(relativePath),
            stateKey = _a[0],
            childStatePath = _a.slice(1);

        if (!this.states) {
          throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
        }

        var childStateNode = this.getStateNode(stateKey);

        if (childStateNode.type === 'history') {
          return childStateNode.resolveHistory();
        }

        if (!this.states[stateKey]) {
          throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
        }

        return this.states[stateKey].getFromRelativePath(childStatePath);
      };

      StateNode.prototype.historyValue = function (relativeStateValue) {
        if (!Object.keys(this.states).length) {
          return undefined;
        }

        return {
          current: relativeStateValue || this.initialStateValue,
          states: mapFilterValues(this.states, function (stateNode, key) {
            if (!relativeStateValue) {
              return stateNode.historyValue();
            }

            var subStateValue = isString$1(relativeStateValue) ? undefined : relativeStateValue[key];
            return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
          }, function (stateNode) {
            return !stateNode.history;
          })
        };
      };
      /**
       * Resolves to the historical value(s) of the parent state node,
       * represented by state nodes.
       *
       * @param historyValue
       */


      StateNode.prototype.resolveHistory = function (historyValue) {
        var _this = this;

        if (this.type !== 'history') {
          return [this];
        }

        var parent = this.parent;

        if (!historyValue) {
          var historyTarget = this.target;
          return historyTarget ? flatten(toStatePaths(historyTarget).map(function (relativeChildPath) {
            return parent.getFromRelativePath(relativeChildPath);
          })) : parent.initialStateNodes;
        }

        var subHistoryValue = nestedPath(parent.path, 'states')(historyValue).current;

        if (isString$1(subHistoryValue)) {
          return [parent.getStateNode(subHistoryValue)];
        }

        return flatten(toStatePaths(subHistoryValue).map(function (subStatePath) {
          return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
        }));
      };

      Object.defineProperty(StateNode.prototype, "stateIds", {
        /**
         * All the state node IDs of this state node and its descendant state nodes.
         */
        get: function () {
          var _this = this;

          var childStateIds = flatten(Object.keys(this.states).map(function (stateKey) {
            return _this.states[stateKey].stateIds;
          }));
          return [this.id].concat(childStateIds);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateNode.prototype, "events", {
        /**
         * All the event types accepted by this state node and its descendants.
         */
        get: function () {
          var e_7, _a, e_8, _b;

          if (this.__cache.events) {
            return this.__cache.events;
          }

          var states = this.states;
          var events = new Set(this.ownEvents);

          if (states) {
            try {
              for (var _c = __values(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var stateId = _d.value;
                var state = states[stateId];

                if (state.states) {
                  try {
                    for (var _e = (e_8 = void 0, __values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                      var event_1 = _f.value;
                      events.add("".concat(event_1));
                    }
                  } catch (e_8_1) {
                    e_8 = {
                      error: e_8_1
                    };
                  } finally {
                    try {
                      if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    } finally {
                      if (e_8) throw e_8.error;
                    }
                  }
                }
              }
            } catch (e_7_1) {
              e_7 = {
                error: e_7_1
              };
            } finally {
              try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
              } finally {
                if (e_7) throw e_7.error;
              }
            }
          }

          return this.__cache.events = Array.from(events);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateNode.prototype, "ownEvents", {
        /**
         * All the events that have transitions directly from this state node.
         *
         * Excludes any inert events.
         */
        get: function () {
          var events = new Set(this.transitions.filter(function (transition) {
            return !(!transition.target && !transition.actions.length && transition.internal);
          }).map(function (transition) {
            return transition.eventType;
          }));
          return Array.from(events);
        },
        enumerable: false,
        configurable: true
      });

      StateNode.prototype.resolveTarget = function (_target) {
        var _this = this;

        if (_target === undefined) {
          // an undefined target signals that the state node should not transition from that state when receiving that event
          return undefined;
        }

        return _target.map(function (target) {
          if (!isString$1(target)) {
            return target;
          }

          var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
          // do not include machine key on target

          if (isInternalTarget && !_this.parent) {
            return _this.getStateNodeByPath(target.slice(1));
          }

          var resolvedTarget = isInternalTarget ? _this.key + target : target;

          if (_this.parent) {
            try {
              var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

              return targetStateNode;
            } catch (err) {
              throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
            }
          } else {
            return _this.getStateNodeByPath(resolvedTarget);
          }
        });
      };

      StateNode.prototype.formatTransition = function (transitionConfig) {
        var _this = this;

        var normalizedTarget = normalizeTarget(transitionConfig.target);
        var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
          return isString$1(_target) && _target[0] === _this.delimiter;
        }) : true;
        var guards = this.machine.options.guards;
        var target = this.resolveTarget(normalizedTarget);

        var transition = __assign$3(__assign$3({}, transitionConfig), {
          actions: toActionObjects(toArray(transitionConfig.actions)),
          cond: toGuard(transitionConfig.cond, guards),
          target: target,
          source: this,
          internal: internal,
          eventType: transitionConfig.event,
          toJSON: function () {
            return __assign$3(__assign$3({}, transition), {
              target: transition.target ? transition.target.map(function (t) {
                return "#".concat(t.id);
              }) : undefined,
              source: "#".concat(_this.id)
            });
          }
        });

        return transition;
      };

      StateNode.prototype.formatTransitions = function () {
        var e_9, _a;

        var _this = this;

        var onConfig;

        if (!this.config.on) {
          onConfig = [];
        } else if (Array.isArray(this.config.on)) {
          onConfig = this.config.on;
        } else {
          var _b = this.config.on,
              _c = WILDCARD,
              _d = _b[_c],
              wildcardConfigs = _d === void 0 ? [] : _d,
              strictTransitionConfigs_1 = __rest$1(_b, [typeof _c === "symbol" ? _c : _c + ""]);

          onConfig = flatten(Object.keys(strictTransitionConfigs_1).map(function (key) {
            if (!IS_PRODUCTION && key === NULL_EVENT) {
              warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + "Please check the `on` configuration for \"#".concat(_this.id, "\"."));
            }

            var transitionConfigArray = toTransitionConfigArray(key, strictTransitionConfigs_1[key]);

            if (!IS_PRODUCTION) {
              validateArrayifiedTransitions(_this, key, transitionConfigArray);
            }

            return transitionConfigArray;
          }).concat(toTransitionConfigArray(WILDCARD, wildcardConfigs)));
        }

        var eventlessConfig = this.config.always ? toTransitionConfigArray('', this.config.always) : [];
        var doneConfig = this.config.onDone ? toTransitionConfigArray(String(done(this.id)), this.config.onDone) : [];

        if (!IS_PRODUCTION) {
          warn(!(this.config.onDone && !this.parent), "Root nodes cannot have an \".onDone\" transition. Please check the config of \"".concat(this.id, "\"."));
        }

        var invokeConfig = flatten(this.invoke.map(function (invokeDef) {
          var settleTransitions = [];

          if (invokeDef.onDone) {
            settleTransitions.push.apply(settleTransitions, __spreadArray$2([], __read$4(toTransitionConfigArray(String(doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
          }

          if (invokeDef.onError) {
            settleTransitions.push.apply(settleTransitions, __spreadArray$2([], __read$4(toTransitionConfigArray(String(error(invokeDef.id)), invokeDef.onError)), false));
          }

          return settleTransitions;
        }));
        var delayedTransitions = this.after;
        var formattedTransitions = flatten(__spreadArray$2(__spreadArray$2(__spreadArray$2(__spreadArray$2([], __read$4(doneConfig), false), __read$4(invokeConfig), false), __read$4(onConfig), false), __read$4(eventlessConfig), false).map(function (transitionConfig) {
          return toArray(transitionConfig).map(function (transition) {
            return _this.formatTransition(transition);
          });
        }));

        try {
          for (var delayedTransitions_1 = __values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
            var delayedTransition = delayedTransitions_1_1.value;
            formattedTransitions.push(delayedTransition);
          }
        } catch (e_9_1) {
          e_9 = {
            error: e_9_1
          };
        } finally {
          try {
            if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
          } finally {
            if (e_9) throw e_9.error;
          }
        }

        return formattedTransitions;
      };

      return StateNode;
    }();

    function createMachine(config, options) {
      return new StateNode(config, options);
    }

    var assign$1 = assign$2;

    var index =  d ;

    function useConstant(fn) {
        var ref = h();
        if (!ref.current) {
            ref.current = { v: fn() };
        }
        return ref.current.v;
    }

    var __assign$2 = (undefined && undefined.__assign) || function () {
        __assign$2 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$2.apply(this, arguments);
    };
    var __rest = (undefined && undefined.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
    var __read$3 = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    function useIdleInterpreter(getMachine, options) {
        var machine = useConstant(function () {
            return typeof getMachine === 'function' ? getMachine() : getMachine;
        });
        if (typeof getMachine !== 'function') {
            var _a = __read$3(m(machine), 1), initialMachine = _a[0];
            if (getMachine !== initialMachine) {
                console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                    'Please make sure that you pass the same Machine as argument each time.');
            }
        }
        var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays; options.state; var interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "state"]);
        var service = useConstant(function () {
            var machineConfig = {
                context: context,
                guards: guards,
                actions: actions,
                activities: activities,
                services: services,
                delays: delays
            };
            var machineWithConfig = machine.withConfig(machineConfig, function () { return (__assign$2(__assign$2({}, machine.context), context)); });
            return interpret(machineWithConfig, interpreterOptions);
        });
        // Make sure options are kept updated when they change.
        // This mutation assignment is safe because the service instance is only used
        // in one place -- this hook's caller.
        index(function () {
            Object.assign(service.machine.options.actions, actions);
            Object.assign(service.machine.options.guards, guards);
            Object.assign(service.machine.options.activities, activities);
            Object.assign(service.machine.options.services, services);
            Object.assign(service.machine.options.delays, delays);
        }, [actions, guards, activities, services, delays]);
        return service;
    }
    function useInterpret(getMachine) {
        var _a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _a[_i - 1] = arguments[_i];
        }
        var _b = __read$3(_a, 2), _c = _b[0], options = _c === void 0 ? {} : _c, observerOrListener = _b[1];
        var service = useIdleInterpreter(getMachine, options);
        y(function () {
            if (!observerOrListener) {
                return;
            }
            var sub = service.subscribe(toObserver(observerOrListener));
            return function () {
                sub.unsubscribe();
            };
        }, [observerOrListener]);
        y(function () {
            var rehydratedState = options.state;
            service.start(rehydratedState ? State.create(rehydratedState) : undefined);
            return function () {
                service.stop();
                service.status = InterpreterStatus.NotStarted;
            };
        }, []);
        return service;
    }

    function isActorWithState(actorRef) {
        return 'state' in actorRef;
    }
    function isDeferredActor(actorRef) {
        return 'deferred' in actorRef;
    }
    function defaultGetSnapshot(actorRef) {
        return 'getSnapshot' in actorRef
            ? actorRef.getSnapshot()
            : isActorWithState(actorRef)
                ? actorRef.state
                : undefined;
    }
    function useActor(actorRef, getSnapshot) {
        if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
        var actorRefRef = h(actorRef);
        var deferredEventsRef = h([]);
        var subscribe = A$1(function (handleStoreChange) {
            var unsubscribe = actorRef.subscribe(handleStoreChange).unsubscribe;
            return unsubscribe;
        }, [actorRef]);
        var boundGetSnapshot = A$1(function () { return getSnapshot(actorRef); }, [
            actorRef,
            getSnapshot
        ]);
        var storeSnapshot = shim.exports.useSyncExternalStore(subscribe, boundGetSnapshot, boundGetSnapshot);
        var send = useConstant(function () { return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var event = args[0];
            if (args.length > 1) {
                console.warn("Unexpected payload: ".concat(JSON.stringify(args[1]), ". Only a single event object can be sent to actor send() functions."));
            }
            var currentActorRef = actorRefRef.current;
            // If the previous actor is a deferred actor,
            // queue the events so that they can be replayed
            // on the non-deferred actor.
            if (isDeferredActor(currentActorRef) && currentActorRef.deferred) {
                deferredEventsRef.current.push(event);
            }
            else {
                currentActorRef.send(event);
            }
        }; });
        index(function () {
            actorRefRef.current = actorRef;
            // Dequeue deferred events from the previous deferred actorRef
            while (deferredEventsRef.current.length > 0) {
                var deferredEvent = deferredEventsRef.current.shift();
                actorRef.send(deferredEvent);
            }
        }, [actorRef]);
        return [storeSnapshot, send];
    }

    var isCheckBoxInput = (element) => element.type === 'checkbox';

    var isDateObject = (value) => value instanceof Date;

    var isNullOrUndefined = (value) => value == null;

    const isObjectType = (value) => typeof value === 'object';
    var isObject = (value) => !isNullOrUndefined(value) &&
        !Array.isArray(value) &&
        isObjectType(value) &&
        !isDateObject(value);

    var getEventValue = (event) => isObject(event) && event.target
        ? isCheckBoxInput(event.target)
            ? event.target.checked
            : event.target.value
        : event;

    var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;

    var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));

    var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];

    var isUndefined = (val) => val === undefined;

    var get = (obj, path, defaultValue) => {
        if (!path || !isObject(obj)) {
            return defaultValue;
        }
        const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], obj);
        return isUndefined(result) || result === obj
            ? isUndefined(obj[path])
                ? defaultValue
                : obj[path]
            : result;
    };

    const EVENTS = {
        BLUR: 'blur',
        FOCUS_OUT: 'focusout',
        CHANGE: 'change',
    };
    const VALIDATION_MODE = {
        onBlur: 'onBlur',
        onChange: 'onChange',
        onSubmit: 'onSubmit',
        onTouched: 'onTouched',
        all: 'all',
    };
    const INPUT_VALIDATION_RULES = {
        max: 'max',
        min: 'min',
        maxLength: 'maxLength',
        minLength: 'minLength',
        pattern: 'pattern',
        required: 'required',
        validate: 'validate',
    };

    const HookFormContext = ReactDOM.createContext(null);
    /**
     * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
     *
     * @remarks
     * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
     *
     * @returns return all useForm methods
     *
     * @example
     * ```tsx
     * function App() {
     *   const methods = useForm();
     *   const onSubmit = data => console.log(data);
     *
     *   return (
     *     <FormProvider {...methods} >
     *       <form onSubmit={methods.handleSubmit(onSubmit)}>
     *         <NestedInput />
     *         <input type="submit" />
     *       </form>
     *     </FormProvider>
     *   );
     * }
     *
     *  function NestedInput() {
     *   const { register } = useFormContext(); // retrieve all hook methods
     *   return <input {...register("test")} />;
     * }
     * ```
     */
    const useFormContext = () => ReactDOM.useContext(HookFormContext);
    /**
     * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
     *
     * @remarks
     * [API](https://react-hook-form.com/api/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
     *
     * @param props - all useFrom methods
     *
     * @example
     * ```tsx
     * function App() {
     *   const methods = useForm();
     *   const onSubmit = data => console.log(data);
     *
     *   return (
     *     <FormProvider {...methods} >
     *       <form onSubmit={methods.handleSubmit(onSubmit)}>
     *         <NestedInput />
     *         <input type="submit" />
     *       </form>
     *     </FormProvider>
     *   );
     * }
     *
     *  function NestedInput() {
     *   const { register } = useFormContext(); // retrieve all hook methods
     *   return <input {...register("test")} />;
     * }
     * ```
     */
    const FormProvider = (props) => {
        const { children, ...data } = props;
        return (ReactDOM.createElement(HookFormContext.Provider, { value: data }, props.children));
    };

    var getProxyFormState = (formState, _proxyFormState, localProxyFormState, isRoot = true) => {
        const result = {};
        for (const key in formState) {
            Object.defineProperty(result, key, {
                get: () => {
                    const _key = key;
                    if (_proxyFormState[_key] !== VALIDATION_MODE.all) {
                        _proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                    }
                    localProxyFormState && (localProxyFormState[_key] = true);
                    return formState[_key];
                },
            });
        }
        return result;
    };

    var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

    var shouldRenderFormState = (formStateData, _proxyFormState, isRoot) => {
        const { name, ...formState } = formStateData;
        return (isEmptyObject(formState) ||
            Object.keys(formState).length >= Object.keys(_proxyFormState).length ||
            Object.keys(formState).find((key) => _proxyFormState[key] ===
                (!isRoot || VALIDATION_MODE.all)));
    };

    var convertToArrayPayload = (value) => (Array.isArray(value) ? value : [value]);

    function useSubscribe(props) {
        const _props = ReactDOM.useRef(props);
        _props.current = props;
        ReactDOM.useEffect(() => {
            const tearDown = (subscription) => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            };
            const subscription = !props.disabled &&
                _props.current.subject.subscribe({
                    next: _props.current.callback,
                });
            return () => tearDown(subscription);
        }, [props.disabled]);
    }

    var isString = (value) => typeof value === 'string';

    var generateWatchOutput = (names, _names, formValues, isGlobal) => {
        const isArray = Array.isArray(names);
        if (isString(names)) {
            isGlobal && _names.watch.add(names);
            return get(formValues, names);
        }
        if (isArray) {
            return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName),
                get(formValues, fieldName)));
        }
        isGlobal && (_names.watchAll = true);
        return formValues;
    };

    var isFunction = (value) => typeof value === 'function';

    var objectHasFunction = (data) => {
        for (const key in data) {
            if (isFunction(data[key])) {
                return true;
            }
        }
        return false;
    };

    var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
        ? {
            ...errors[name],
            types: {
                ...(errors[name] && errors[name].types ? errors[name].types : {}),
                [type]: message || true,
            },
        }
        : {};

    var isKey = (value) => /^\w*$/.test(value);

    var stringToPath = (input) => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));

    function set(object, path, value) {
        let index = -1;
        const tempPath = isKey(path) ? [path] : stringToPath(path);
        const length = tempPath.length;
        const lastIndex = length - 1;
        while (++index < length) {
            const key = tempPath[index];
            let newValue = value;
            if (index !== lastIndex) {
                const objValue = object[key];
                newValue =
                    isObject(objValue) || Array.isArray(objValue)
                        ? objValue
                        : !isNaN(+tempPath[index + 1])
                            ? []
                            : {};
            }
            object[key] = newValue;
            object = object[key];
        }
        return object;
    }

    const focusFieldBy = (fields, callback, fieldsNames) => {
        for (const key of fieldsNames || Object.keys(fields)) {
            const field = get(fields, key);
            if (field) {
                const { _f, ...currentField } = field;
                if (_f && callback(_f.name)) {
                    if (_f.ref.focus && isUndefined(_f.ref.focus())) {
                        break;
                    }
                    else if (_f.refs) {
                        _f.refs[0].focus();
                        break;
                    }
                }
                else if (isObject(currentField)) {
                    focusFieldBy(currentField, callback);
                }
            }
        }
    };

    var isWatched = (name, _names, isBlurEvent) => !isBlurEvent &&
        (_names.watchAll ||
            _names.watch.has(name) ||
            [..._names.watch].some((watchName) => name.startsWith(watchName) &&
                /^\.\w+/.test(name.slice(watchName.length))));

    function cloneObject(data) {
        let copy;
        const isArray = Array.isArray(data);
        if (data instanceof Date) {
            copy = new Date(data);
        }
        else if (data instanceof Set) {
            copy = new Set(data);
        }
        else if (isArray || isObject(data)) {
            copy = isArray ? [] : {};
            for (const key in data) {
                if (isFunction(data[key])) {
                    copy = data;
                    break;
                }
                copy[key] = cloneObject(data[key]);
            }
        }
        else {
            return data;
        }
        return copy;
    }

    function createSubject() {
        let _observers = [];
        const next = (value) => {
            for (const observer of _observers) {
                observer.next(value);
            }
        };
        const subscribe = (observer) => {
            _observers.push(observer);
            return {
                unsubscribe: () => {
                    _observers = _observers.filter((o) => o !== observer);
                },
            };
        };
        const unsubscribe = () => {
            _observers = [];
        };
        return {
            get observers() {
                return _observers;
            },
            next,
            subscribe,
            unsubscribe,
        };
    }

    var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

    function deepEqual(object1, object2) {
        if (isPrimitive(object1) || isPrimitive(object2)) {
            return object1 === object2;
        }
        if (isDateObject(object1) && isDateObject(object2)) {
            return object1.getTime() === object2.getTime();
        }
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!keys2.includes(key)) {
                return false;
            }
            if (key !== 'ref') {
                const val2 = object2[key];
                if ((isDateObject(val1) && isDateObject(val2)) ||
                    (isObject(val1) && isObject(val2)) ||
                    (Array.isArray(val1) && Array.isArray(val2))
                    ? !deepEqual(val1, val2)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
        return true;
    }

    var getValidationModes = (mode) => ({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched,
    });

    var isBoolean = (value) => typeof value === 'boolean';

    var isFileInput = (element) => element.type === 'file';

    var isHTMLElement = (value) => value instanceof HTMLElement;

    var isMultipleSelect = (element) => element.type === `select-multiple`;

    var isRadioInput = (element) => element.type === 'radio';

    var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

    var isWeb = typeof window !== 'undefined' &&
        typeof window.HTMLElement !== 'undefined' &&
        typeof document !== 'undefined';

    var live = (ref) => isHTMLElement(ref) && ref.isConnected;

    function baseGet(object, updatePath) {
        const length = updatePath.slice(0, -1).length;
        let index = 0;
        while (index < length) {
            object = isUndefined(object) ? index++ : object[updatePath[index++]];
        }
        return object;
    }
    function unset(object, path) {
        const updatePath = isKey(path) ? [path] : stringToPath(path);
        const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
        const key = updatePath[updatePath.length - 1];
        let previousObjRef;
        if (childObject) {
            delete childObject[key];
        }
        for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
            let index = -1;
            let objectRef;
            const currentPaths = updatePath.slice(0, -(k + 1));
            const currentPathsLength = currentPaths.length - 1;
            if (k > 0) {
                previousObjRef = object;
            }
            while (++index < currentPaths.length) {
                const item = currentPaths[index];
                objectRef = objectRef ? objectRef[item] : object[item];
                if (currentPathsLength === index &&
                    ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                        (Array.isArray(objectRef) &&
                            !objectRef.filter((data) => !isUndefined(data)).length))) {
                    previousObjRef ? delete previousObjRef[item] : delete object[item];
                }
                previousObjRef = objectRef;
            }
        }
        return object;
    }

    function markFieldsDirty(data, fields = {}) {
        const isParentNodeArray = Array.isArray(data);
        if (isObject(data) || isParentNodeArray) {
            for (const key in data) {
                if (Array.isArray(data[key]) ||
                    (isObject(data[key]) && !objectHasFunction(data[key]))) {
                    fields[key] = Array.isArray(data[key]) ? [] : {};
                    markFieldsDirty(data[key], fields[key]);
                }
                else if (!isNullOrUndefined(data[key])) {
                    fields[key] = true;
                }
            }
        }
        return fields;
    }
    function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
        const isParentNodeArray = Array.isArray(data);
        if (isObject(data) || isParentNodeArray) {
            for (const key in data) {
                if (Array.isArray(data[key]) ||
                    (isObject(data[key]) && !objectHasFunction(data[key]))) {
                    if (isUndefined(formValues) ||
                        isPrimitive(dirtyFieldsFromValues[key])) {
                        dirtyFieldsFromValues[key] = Array.isArray(data[key])
                            ? markFieldsDirty(data[key], [])
                            : { ...markFieldsDirty(data[key]) };
                    }
                    else {
                        getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
                    }
                }
                else {
                    dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
                }
            }
        }
        return dirtyFieldsFromValues;
    }
    var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));

    const defaultResult = {
        value: false,
        isValid: false,
    };
    const validResult = { value: true, isValid: true };
    var getCheckboxValue = (options) => {
        if (Array.isArray(options)) {
            if (options.length > 1) {
                const values = options
                    .filter((option) => option && option.checked && !option.disabled)
                    .map((option) => option.value);
                return { value: values, isValid: !!values.length };
            }
            return options[0].checked && !options[0].disabled
                ? // @ts-expect-error expected to work in the browser
                    options[0].attributes && !isUndefined(options[0].attributes.value)
                        ? isUndefined(options[0].value) || options[0].value === ''
                            ? validResult
                            : { value: options[0].value, isValid: true }
                        : validResult
                : defaultResult;
        }
        return defaultResult;
    };

    var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value)
        ? value
        : valueAsNumber
            ? value === ''
                ? NaN
                : +value
            : valueAsDate && isString(value)
                ? new Date(value)
                : setValueAs
                    ? setValueAs(value)
                    : value;

    const defaultReturn = {
        isValid: false,
        value: null,
    };
    var getRadioValue = (options) => Array.isArray(options)
        ? options.reduce((previous, option) => option && option.checked && !option.disabled
            ? {
                isValid: true,
                value: option.value,
            }
            : previous, defaultReturn)
        : defaultReturn;

    function getFieldValue(_f) {
        const ref = _f.ref;
        if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(_f.refs).value;
        }
        if (isMultipleSelect(ref)) {
            return [...ref.selectedOptions].map(({ value }) => value);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(_f.refs).value;
        }
        return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
    }

    var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
        const fields = {};
        for (const name of fieldsNames) {
            const field = get(_fields, name);
            field && set(fields, name, field._f);
        }
        return {
            criteriaMode,
            names: [...fieldsNames],
            fields,
            shouldUseNativeValidation,
        };
    };

    var isRegex = (value) => value instanceof RegExp;

    var getRuleValue = (rule) => isUndefined(rule)
        ? undefined
        : isRegex(rule)
            ? rule.source
            : isObject(rule)
                ? isRegex(rule.value)
                    ? rule.value.source
                    : rule.value
                : rule;

    var hasValidation = (options) => options.mount &&
        (options.required ||
            options.min ||
            options.max ||
            options.maxLength ||
            options.minLength ||
            options.pattern ||
            options.validate);

    function schemaErrorLookup(errors, _fields, name) {
        const error = get(errors, name);
        if (error || isKey(name)) {
            return {
                error,
                name,
            };
        }
        const names = name.split('.');
        while (names.length) {
            const fieldName = names.join('.');
            const field = get(_fields, fieldName);
            const foundError = get(errors, fieldName);
            if (field && !Array.isArray(field) && name !== fieldName) {
                return { name };
            }
            if (foundError && foundError.type) {
                return {
                    name: fieldName,
                    error: foundError,
                };
            }
            names.pop();
        }
        return {
            name,
        };
    }

    var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
        if (mode.isOnAll) {
            return false;
        }
        else if (!isSubmitted && mode.isOnTouch) {
            return !(isTouched || isBlurEvent);
        }
        else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
            return !isBlurEvent;
        }
        else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
            return isBlurEvent;
        }
        return true;
    };

    var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);

    var isMessage = (value) => isString(value) || ReactDOM.isValidElement(value);

    function getValidateError(result, ref, type = 'validate') {
        if (isMessage(result) ||
            (Array.isArray(result) && result.every(isMessage)) ||
            (isBoolean(result) && !result)) {
            return {
                type,
                message: isMessage(result) ? result : '',
                ref,
            };
        }
    }

    var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
        ? validationData
        : {
            value: validationData,
            message: '',
        };

    var validateField = async (field, inputValue, validateAllFieldCriteria, shouldUseNativeValidation) => {
        const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled, } = field._f;
        if (!mount || disabled) {
            return {};
        }
        const inputRef = refs ? refs[0] : ref;
        const setCustomValidity = (message) => {
            if (shouldUseNativeValidation && inputRef.reportValidity) {
                inputRef.setCustomValidity(isBoolean(message) ? '' : message || ' ');
                inputRef.reportValidity();
            }
        };
        const error = {};
        const isRadio = isRadioInput(ref);
        const isCheckBox = isCheckBoxInput(ref);
        const isRadioOrCheckbox = isRadio || isCheckBox;
        const isEmpty = ((valueAsNumber || isFileInput(ref)) && !ref.value) ||
            inputValue === '' ||
            (Array.isArray(inputValue) && !inputValue.length);
        const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
        const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
            const message = exceedMax ? maxLengthMessage : minLengthMessage;
            error[name] = {
                type: exceedMax ? maxType : minType,
                message,
                ref,
                ...appendErrorsCurry(exceedMax ? maxType : minType, message),
            };
        };
        if (required &&
            ((!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue))) ||
                (isBoolean(inputValue) && !inputValue) ||
                (isCheckBox && !getCheckboxValue(refs).isValid) ||
                (isRadio && !getRadioValue(refs).isValid))) {
            const { value, message } = isMessage(required)
                ? { value: !!required, message: required }
                : getValueAndMessage(required);
            if (value) {
                error[name] = {
                    type: INPUT_VALIDATION_RULES.required,
                    message,
                    ref: inputRef,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(message);
                    return error;
                }
            }
        }
        if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
            let exceedMax;
            let exceedMin;
            const maxOutput = getValueAndMessage(max);
            const minOutput = getValueAndMessage(min);
            if (!isNaN(inputValue)) {
                const valueNumber = ref.valueAsNumber || +inputValue;
                if (!isNullOrUndefined(maxOutput.value)) {
                    exceedMax = valueNumber > maxOutput.value;
                }
                if (!isNullOrUndefined(minOutput.value)) {
                    exceedMin = valueNumber < minOutput.value;
                }
            }
            else {
                const valueDate = ref.valueAsDate || new Date(inputValue);
                if (isString(maxOutput.value)) {
                    exceedMax = valueDate > new Date(maxOutput.value);
                }
                if (isString(minOutput.value)) {
                    exceedMin = valueDate < new Date(minOutput.value);
                }
            }
            if (exceedMax || exceedMin) {
                getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
                if (!validateAllFieldCriteria) {
                    setCustomValidity(error[name].message);
                    return error;
                }
            }
        }
        if ((maxLength || minLength) && !isEmpty && isString(inputValue)) {
            const maxLengthOutput = getValueAndMessage(maxLength);
            const minLengthOutput = getValueAndMessage(minLength);
            const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
                inputValue.length > maxLengthOutput.value;
            const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
                inputValue.length < minLengthOutput.value;
            if (exceedMax || exceedMin) {
                getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
                if (!validateAllFieldCriteria) {
                    setCustomValidity(error[name].message);
                    return error;
                }
            }
        }
        if (pattern && !isEmpty && isString(inputValue)) {
            const { value: patternValue, message } = getValueAndMessage(pattern);
            if (isRegex(patternValue) && !inputValue.match(patternValue)) {
                error[name] = {
                    type: INPUT_VALIDATION_RULES.pattern,
                    message,
                    ref,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message),
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(message);
                    return error;
                }
            }
        }
        if (validate) {
            if (isFunction(validate)) {
                const result = await validate(inputValue);
                const validateError = getValidateError(result, inputRef);
                if (validateError) {
                    error[name] = {
                        ...validateError,
                        ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message),
                    };
                    if (!validateAllFieldCriteria) {
                        setCustomValidity(validateError.message);
                        return error;
                    }
                }
            }
            else if (isObject(validate)) {
                let validationResult = {};
                for (const key in validate) {
                    if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                        break;
                    }
                    const validateError = getValidateError(await validate[key](inputValue), inputRef, key);
                    if (validateError) {
                        validationResult = {
                            ...validateError,
                            ...appendErrorsCurry(key, validateError.message),
                        };
                        setCustomValidity(validateError.message);
                        if (validateAllFieldCriteria) {
                            error[name] = validationResult;
                        }
                    }
                }
                if (!isEmptyObject(validationResult)) {
                    error[name] = {
                        ref: inputRef,
                        ...validationResult,
                    };
                    if (!validateAllFieldCriteria) {
                        return error;
                    }
                }
            }
        }
        setCustomValidity(true);
        return error;
    };

    const defaultOptions = {
        mode: VALIDATION_MODE.onSubmit,
        reValidateMode: VALIDATION_MODE.onChange,
        shouldFocusError: true,
    };
    function createFormControl(props = {}) {
        let _options = {
            ...defaultOptions,
            ...props,
        };
        let _formState = {
            isDirty: false,
            isValidating: false,
            dirtyFields: {},
            isSubmitted: false,
            submitCount: 0,
            touchedFields: {},
            isSubmitting: false,
            isSubmitSuccessful: false,
            isValid: false,
            errors: {},
        };
        let _fields = {};
        let _defaultValues = cloneObject(_options.defaultValues) || {};
        let _formValues = _options.shouldUnregister
            ? {}
            : cloneObject(_defaultValues);
        let _stateFlags = {
            action: false,
            mount: false,
            watch: false,
        };
        let _names = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
        };
        let delayErrorCallback;
        let timer = 0;
        let validateFields = {};
        const _proxyFormState = {
            isDirty: false,
            dirtyFields: false,
            touchedFields: false,
            isValidating: false,
            isValid: false,
            errors: false,
        };
        const _subjects = {
            watch: createSubject(),
            array: createSubject(),
            state: createSubject(),
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
        const debounce = (callback, wait) => (...args) => {
            clearTimeout(timer);
            timer = window.setTimeout(() => callback(...args), wait);
        };
        const _updateValid = async (shouldSkipRender) => {
            let isValid = false;
            if (_proxyFormState.isValid) {
                isValid = _options.resolver
                    ? isEmptyObject((await _executeSchema()).errors)
                    : await executeBuildInValidation(_fields, true);
                if (!shouldSkipRender && isValid !== _formState.isValid) {
                    _formState.isValid = isValid;
                    _subjects.state.next({
                        isValid,
                    });
                }
            }
            return isValid;
        };
        const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
            if (args && method) {
                _stateFlags.action = true;
                if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                    const fieldValues = method(get(_fields, name), args.argA, args.argB);
                    shouldSetValues && set(_fields, name, fieldValues);
                }
                if (_proxyFormState.errors &&
                    shouldUpdateFieldsAndState &&
                    Array.isArray(get(_formState.errors, name))) {
                    const errors = method(get(_formState.errors, name), args.argA, args.argB);
                    shouldSetValues && set(_formState.errors, name, errors);
                    unsetEmptyArray(_formState.errors, name);
                }
                if (_proxyFormState.touchedFields &&
                    shouldUpdateFieldsAndState &&
                    Array.isArray(get(_formState.touchedFields, name))) {
                    const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                    shouldSetValues && set(_formState.touchedFields, name, touchedFields);
                }
                if (_proxyFormState.dirtyFields) {
                    _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
                }
                _subjects.state.next({
                    isDirty: _getDirty(name, values),
                    dirtyFields: _formState.dirtyFields,
                    errors: _formState.errors,
                    isValid: _formState.isValid,
                });
            }
            else {
                set(_formValues, name, values);
            }
        };
        const updateErrors = (name, error) => (set(_formState.errors, name, error),
            _subjects.state.next({
                errors: _formState.errors,
            }));
        const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
            const field = get(_fields, name);
            if (field) {
                const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
                isUndefined(defaultValue) ||
                    (ref && ref.defaultChecked) ||
                    shouldSkipSetValueAs
                    ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f))
                    : setFieldValue(name, defaultValue);
                _stateFlags.mount && _updateValid();
            }
        };
        const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
            let isFieldDirty = false;
            const output = {
                name,
            };
            const isPreviousFieldTouched = get(_formState.touchedFields, name);
            if (_proxyFormState.isDirty) {
                const isPreviousFormDirty = _formState.isDirty;
                _formState.isDirty = output.isDirty = _getDirty();
                isFieldDirty = isPreviousFormDirty !== output.isDirty;
            }
            if (_proxyFormState.dirtyFields && (!isBlurEvent || shouldDirty)) {
                const isPreviousFieldDirty = get(_formState.dirtyFields, name);
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isCurrentFieldPristine
                    ? unset(_formState.dirtyFields, name)
                    : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                isFieldDirty =
                    isFieldDirty ||
                        isPreviousFieldDirty !== get(_formState.dirtyFields, name);
            }
            if (isBlurEvent && !isPreviousFieldTouched) {
                set(_formState.touchedFields, name, isBlurEvent);
                output.touchedFields = _formState.touchedFields;
                isFieldDirty =
                    isFieldDirty ||
                        (_proxyFormState.touchedFields &&
                            isPreviousFieldTouched !== isBlurEvent);
            }
            isFieldDirty && shouldRender && _subjects.state.next(output);
            return isFieldDirty ? output : {};
        };
        const shouldRenderByError = async (shouldSkipRender, name, isValid, error, fieldState) => {
            const previousFieldError = get(_formState.errors, name);
            const shouldUpdateValid = _proxyFormState.isValid && _formState.isValid !== isValid;
            if (props.delayError && error) {
                delayErrorCallback =
                    delayErrorCallback || debounce(updateErrors, props.delayError);
                delayErrorCallback(name, error);
            }
            else {
                clearTimeout(timer);
                error
                    ? set(_formState.errors, name, error)
                    : unset(_formState.errors, name);
            }
            if (((error ? !deepEqual(previousFieldError, error) : previousFieldError) ||
                !isEmptyObject(fieldState) ||
                shouldUpdateValid) &&
                !shouldSkipRender) {
                const updatedFormState = {
                    ...fieldState,
                    ...(shouldUpdateValid ? { isValid } : {}),
                    errors: _formState.errors,
                    name,
                };
                _formState = {
                    ..._formState,
                    ...updatedFormState,
                };
                _subjects.state.next(updatedFormState);
            }
            validateFields[name]--;
            if (_proxyFormState.isValidating &&
                !Object.values(validateFields).some((v) => v)) {
                _subjects.state.next({
                    isValidating: false,
                });
                validateFields = {};
            }
        };
        const _executeSchema = async (name) => _options.resolver
            ? await _options.resolver({ ..._formValues }, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation))
            : {};
        const executeSchemaAndUpdateState = async (names) => {
            const { errors } = await _executeSchema();
            if (names) {
                for (const name of names) {
                    const error = get(errors, name);
                    error
                        ? set(_formState.errors, name, error)
                        : unset(_formState.errors, name);
                }
            }
            else {
                _formState.errors = errors;
            }
            return errors;
        };
        const executeBuildInValidation = async (fields, shouldOnlyCheckValid, context = {
            valid: true,
        }) => {
            for (const name in fields) {
                const field = fields[name];
                if (field) {
                    const { _f: fieldReference, ...fieldValue } = field;
                    if (fieldReference) {
                        const fieldError = await validateField(field, get(_formValues, fieldReference.name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation);
                        if (fieldError[fieldReference.name]) {
                            context.valid = false;
                            if (shouldOnlyCheckValid) {
                                break;
                            }
                        }
                        if (!shouldOnlyCheckValid) {
                            fieldError[fieldReference.name]
                                ? set(_formState.errors, fieldReference.name, fieldError[fieldReference.name])
                                : unset(_formState.errors, fieldReference.name);
                        }
                    }
                    fieldValue &&
                        (await executeBuildInValidation(fieldValue, shouldOnlyCheckValid, context));
                }
            }
            return context.valid;
        };
        const _removeUnmounted = () => {
            for (const name of _names.unMount) {
                const field = get(_fields, name);
                field &&
                    (field._f.refs
                        ? field._f.refs.every((ref) => !live(ref))
                        : !live(field._f.ref)) &&
                    unregister(name);
            }
            _names.unMount = new Set();
        };
        const _getDirty = (name, data) => (name && data && set(_formValues, name, data),
            !deepEqual(getValues(), _defaultValues));
        const _getWatch = (names, defaultValue, isGlobal) => {
            const fieldValues = {
                ...(_stateFlags.mount
                    ? _formValues
                    : isUndefined(defaultValue)
                        ? _defaultValues
                        : isString(names)
                            ? { [names]: defaultValue }
                            : defaultValue),
            };
            return generateWatchOutput(names, _names, fieldValues, isGlobal);
        };
        const _getFieldArray = (name) => compact(get(_stateFlags.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
        const setFieldValue = (name, value, options = {}) => {
            const field = get(_fields, name);
            let fieldValue = value;
            if (field) {
                const fieldReference = field._f;
                if (fieldReference) {
                    !fieldReference.disabled &&
                        set(_formValues, name, getFieldValueAs(value, fieldReference));
                    fieldValue =
                        isWeb && isHTMLElement(fieldReference.ref) && isNullOrUndefined(value)
                            ? ''
                            : value;
                    if (isMultipleSelect(fieldReference.ref)) {
                        [...fieldReference.ref.options].forEach((selectRef) => (selectRef.selected = fieldValue.includes(selectRef.value)));
                    }
                    else if (fieldReference.refs) {
                        if (isCheckBoxInput(fieldReference.ref)) {
                            fieldReference.refs.length > 1
                                ? fieldReference.refs.forEach((checkboxRef) => !checkboxRef.disabled &&
                                    (checkboxRef.checked = Array.isArray(fieldValue)
                                        ? !!fieldValue.find((data) => data === checkboxRef.value)
                                        : fieldValue === checkboxRef.value))
                                : fieldReference.refs[0] &&
                                    (fieldReference.refs[0].checked = !!fieldValue);
                        }
                        else {
                            fieldReference.refs.forEach((radioRef) => (radioRef.checked = radioRef.value === fieldValue));
                        }
                    }
                    else if (isFileInput(fieldReference.ref)) {
                        fieldReference.ref.value = '';
                    }
                    else {
                        fieldReference.ref.value = fieldValue;
                        if (!fieldReference.ref.type) {
                            _subjects.watch.next({
                                name,
                            });
                        }
                    }
                }
            }
            (options.shouldDirty || options.shouldTouch) &&
                updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
            options.shouldValidate && trigger(name);
        };
        const setValues = (name, value, options) => {
            for (const fieldKey in value) {
                const fieldValue = value[fieldKey];
                const fieldName = `${name}.${fieldKey}`;
                const field = get(_fields, fieldName);
                (_names.array.has(name) ||
                    !isPrimitive(fieldValue) ||
                    (field && !field._f)) &&
                    !isDateObject(fieldValue)
                    ? setValues(fieldName, fieldValue, options)
                    : setFieldValue(fieldName, fieldValue, options);
            }
        };
        const setValue = (name, value, options = {}) => {
            const field = get(_fields, name);
            const isFieldArray = _names.array.has(name);
            const cloneValue = cloneObject(value);
            set(_formValues, name, cloneValue);
            if (isFieldArray) {
                _subjects.array.next({
                    name,
                    values: _formValues,
                });
                if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) &&
                    options.shouldDirty) {
                    _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
                    _subjects.state.next({
                        name,
                        dirtyFields: _formState.dirtyFields,
                        isDirty: _getDirty(name, cloneValue),
                    });
                }
            }
            else {
                field && !field._f && !isNullOrUndefined(cloneValue)
                    ? setValues(name, cloneValue, options)
                    : setFieldValue(name, cloneValue, options);
            }
            isWatched(name, _names) && _subjects.state.next({});
            _subjects.watch.next({
                name,
            });
        };
        const onChange = async (event) => {
            const target = event.target;
            let name = target.name;
            const field = get(_fields, name);
            if (field) {
                let error;
                let isValid;
                const fieldValue = target.type
                    ? getFieldValue(field._f)
                    : getEventValue(event);
                const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
                const shouldSkipValidation = (!hasValidation(field._f) &&
                    !_options.resolver &&
                    !get(_formState.errors, name) &&
                    !field._f.deps) ||
                    skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
                const watched = isWatched(name, _names, isBlurEvent);
                set(_formValues, name, fieldValue);
                if (isBlurEvent) {
                    field._f.onBlur && field._f.onBlur(event);
                }
                else if (field._f.onChange) {
                    field._f.onChange(event);
                }
                const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
                const shouldRender = !isEmptyObject(fieldState) || watched;
                !isBlurEvent &&
                    _subjects.watch.next({
                        name,
                        type: event.type,
                    });
                if (shouldSkipValidation) {
                    return (shouldRender &&
                        _subjects.state.next({ name, ...(watched ? {} : fieldState) }));
                }
                !isBlurEvent && watched && _subjects.state.next({});
                validateFields[name] = validateFields[name] ? +1 : 1;
                _subjects.state.next({
                    isValidating: true,
                });
                if (_options.resolver) {
                    const { errors } = await _executeSchema([name]);
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
                else {
                    error = (await validateField(field, get(_formValues, name), shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                    isValid = await _updateValid(true);
                }
                field._f.deps &&
                    trigger(field._f.deps);
                shouldRenderByError(false, name, isValid, error, fieldState);
            }
        };
        const trigger = async (name, options = {}) => {
            let isValid;
            let validationResult;
            const fieldNames = convertToArrayPayload(name);
            _subjects.state.next({
                isValidating: true,
            });
            if (_options.resolver) {
                const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
                isValid = isEmptyObject(errors);
                validationResult = name
                    ? !fieldNames.some((name) => get(errors, name))
                    : isValid;
            }
            else if (name) {
                validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
                    const field = get(_fields, fieldName);
                    return await executeBuildInValidation(field && field._f ? { [fieldName]: field } : field);
                }))).every(Boolean);
                !(!validationResult && !_formState.isValid) && _updateValid();
            }
            else {
                validationResult = isValid = await executeBuildInValidation(_fields);
            }
            _subjects.state.next({
                ...(!isString(name) ||
                    (_proxyFormState.isValid && isValid !== _formState.isValid)
                    ? {}
                    : { name }),
                ...(_options.resolver ? { isValid } : {}),
                errors: _formState.errors,
                isValidating: false,
            });
            options.shouldFocus &&
                !validationResult &&
                focusFieldBy(_fields, (key) => get(_formState.errors, key), name ? fieldNames : _names.mount);
            return validationResult;
        };
        const getValues = (fieldNames) => {
            const values = {
                ..._defaultValues,
                ...(_stateFlags.mount ? _formValues : {}),
            };
            return isUndefined(fieldNames)
                ? values
                : isString(fieldNames)
                    ? get(values, fieldNames)
                    : fieldNames.map((name) => get(values, name));
        };
        const getFieldState = (name, formState) => ({
            invalid: !!get((formState || _formState).errors, name),
            isDirty: !!get((formState || _formState).dirtyFields, name),
            isTouched: !!get((formState || _formState).touchedFields, name),
            error: get((formState || _formState).errors, name),
        });
        const clearErrors = (name) => {
            name
                ? convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName))
                : (_formState.errors = {});
            _subjects.state.next({
                errors: _formState.errors,
            });
        };
        const setError = (name, error, options) => {
            const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
            set(_formState.errors, name, {
                ...error,
                ref,
            });
            _subjects.state.next({
                name,
                errors: _formState.errors,
                isValid: false,
            });
            options && options.shouldFocus && ref && ref.focus && ref.focus();
        };
        const watch = (name, defaultValue) => isFunction(name)
            ? _subjects.watch.subscribe({
                next: (info) => name(_getWatch(undefined, defaultValue), info),
            })
            : _getWatch(name, defaultValue, true);
        const unregister = (name, options = {}) => {
            for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
                _names.mount.delete(fieldName);
                _names.array.delete(fieldName);
                if (get(_fields, fieldName)) {
                    if (!options.keepValue) {
                        unset(_fields, fieldName);
                        unset(_formValues, fieldName);
                    }
                    !options.keepError && unset(_formState.errors, fieldName);
                    !options.keepDirty && unset(_formState.dirtyFields, fieldName);
                    !options.keepTouched && unset(_formState.touchedFields, fieldName);
                    !_options.shouldUnregister &&
                        !options.keepDefaultValue &&
                        unset(_defaultValues, fieldName);
                }
            }
            _subjects.watch.next({});
            _subjects.state.next({
                ..._formState,
                ...(!options.keepDirty ? {} : { isDirty: _getDirty() }),
            });
            !options.keepIsValid && _updateValid();
        };
        const register = (name, options = {}) => {
            let field = get(_fields, name);
            const disabledIsDefined = isBoolean(options.disabled);
            set(_fields, name, {
                _f: {
                    ...(field && field._f ? field._f : { ref: { name } }),
                    name,
                    mount: true,
                    ...options,
                },
            });
            _names.mount.add(name);
            field
                ? disabledIsDefined &&
                    set(_formValues, name, options.disabled
                        ? undefined
                        : get(_formValues, name, getFieldValue(field._f)))
                : updateValidAndValue(name, true, options.value);
            return {
                ...(disabledIsDefined ? { disabled: options.disabled } : {}),
                ...(_options.shouldUseNativeValidation
                    ? {
                        required: !!options.required,
                        min: getRuleValue(options.min),
                        max: getRuleValue(options.max),
                        minLength: getRuleValue(options.minLength),
                        maxLength: getRuleValue(options.maxLength),
                        pattern: getRuleValue(options.pattern),
                    }
                    : {}),
                name,
                onChange,
                onBlur: onChange,
                ref: (ref) => {
                    if (ref) {
                        register(name, options);
                        field = get(_fields, name);
                        const fieldRef = isUndefined(ref.value)
                            ? ref.querySelectorAll
                                ? ref.querySelectorAll('input,select,textarea')[0] || ref
                                : ref
                            : ref;
                        const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                        const refs = field._f.refs || [];
                        if (radioOrCheckbox
                            ? refs.find((option) => option === fieldRef)
                            : fieldRef === field._f.ref) {
                            return;
                        }
                        set(_fields, name, {
                            _f: {
                                ...field._f,
                                ...(radioOrCheckbox
                                    ? {
                                        refs: [
                                            ...refs.filter(live),
                                            fieldRef,
                                            ...(!!Array.isArray(get(_defaultValues, name))
                                                ? [{}]
                                                : []),
                                        ],
                                        ref: { type: fieldRef.type, name },
                                    }
                                    : { ref: fieldRef }),
                            },
                        });
                        updateValidAndValue(name, false, undefined, fieldRef);
                    }
                    else {
                        field = get(_fields, name, {});
                        if (field._f) {
                            field._f.mount = false;
                        }
                        (_options.shouldUnregister || options.shouldUnregister) &&
                            !(isNameInFieldArray(_names.array, name) && _stateFlags.action) &&
                            _names.unMount.add(name);
                    }
                },
            };
        };
        const handleSubmit = (onValid, onInvalid) => async (e) => {
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let hasNoPromiseError = true;
            let fieldValues = cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true,
            });
            try {
                if (_options.resolver) {
                    const { errors, values } = await _executeSchema();
                    _formState.errors = errors;
                    fieldValues = values;
                }
                else {
                    await executeBuildInValidation(_fields);
                }
                if (isEmptyObject(_formState.errors) &&
                    Object.keys(_formState.errors).every((name) => get(fieldValues, name))) {
                    _subjects.state.next({
                        errors: {},
                        isSubmitting: true,
                    });
                    await onValid(fieldValues, e);
                }
                else {
                    if (onInvalid) {
                        await onInvalid({ ..._formState.errors }, e);
                    }
                    _options.shouldFocusError &&
                        focusFieldBy(_fields, (key) => get(_formState.errors, key), _names.mount);
                }
            }
            catch (err) {
                hasNoPromiseError = false;
                throw err;
            }
            finally {
                _formState.isSubmitted = true;
                _subjects.state.next({
                    isSubmitted: true,
                    isSubmitting: false,
                    isSubmitSuccessful: isEmptyObject(_formState.errors) && hasNoPromiseError,
                    submitCount: _formState.submitCount + 1,
                    errors: _formState.errors,
                });
            }
        };
        const resetField = (name, options = {}) => {
            if (get(_fields, name)) {
                if (isUndefined(options.defaultValue)) {
                    setValue(name, get(_defaultValues, name));
                }
                else {
                    setValue(name, options.defaultValue);
                    set(_defaultValues, name, options.defaultValue);
                }
                if (!options.keepTouched) {
                    unset(_formState.touchedFields, name);
                }
                if (!options.keepDirty) {
                    unset(_formState.dirtyFields, name);
                    _formState.isDirty = options.defaultValue
                        ? _getDirty(name, get(_defaultValues, name))
                        : _getDirty();
                }
                if (!options.keepError) {
                    unset(_formState.errors, name);
                    _proxyFormState.isValid && _updateValid();
                }
                _subjects.state.next({ ..._formState });
            }
        };
        const reset = (formValues, keepStateOptions = {}) => {
            const updatedValues = formValues || _defaultValues;
            const cloneUpdatedValues = cloneObject(updatedValues);
            const values = formValues && !isEmptyObject(formValues)
                ? cloneUpdatedValues
                : _defaultValues;
            if (!keepStateOptions.keepDefaultValues) {
                _defaultValues = updatedValues;
            }
            if (!keepStateOptions.keepValues) {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount) {
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs)
                                ? field._f.refs[0]
                                : field._f.ref;
                            try {
                                isHTMLElement(fieldReference) &&
                                    fieldReference.closest('form').reset();
                                break;
                            }
                            catch (_a) { }
                        }
                    }
                }
                _formValues = props.shouldUnregister
                    ? keepStateOptions.keepDefaultValues
                        ? cloneObject(_defaultValues)
                        : {}
                    : cloneUpdatedValues;
                _fields = {};
                _subjects.array.next({
                    values,
                });
                _subjects.watch.next({
                    values,
                });
            }
            _names = {
                mount: new Set(),
                unMount: new Set(),
                array: new Set(),
                watch: new Set(),
                watchAll: false,
                focus: '',
            };
            _stateFlags.mount =
                !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
            _stateFlags.watch = !!props.shouldUnregister;
            _subjects.state.next({
                submitCount: keepStateOptions.keepSubmitCount
                    ? _formState.submitCount
                    : 0,
                isDirty: keepStateOptions.keepDirty
                    ? _formState.isDirty
                    : keepStateOptions.keepDefaultValues
                        ? !deepEqual(formValues, _defaultValues)
                        : false,
                isSubmitted: keepStateOptions.keepIsSubmitted
                    ? _formState.isSubmitted
                    : false,
                dirtyFields: keepStateOptions.keepDirty
                    ? _formState.dirtyFields
                    : (keepStateOptions.keepDefaultValues && formValues
                        ? Object.entries(formValues).reduce((previous, [key, value]) => ({
                            ...previous,
                            [key]: value !== get(_defaultValues, key),
                        }), {})
                        : {}),
                touchedFields: keepStateOptions.keepTouched
                    ? _formState.touchedFields
                    : {},
                errors: keepStateOptions.keepErrors
                    ? _formState.errors
                    : {},
                isSubmitting: false,
                isSubmitSuccessful: false,
            });
        };
        const setFocus = (name, options = {}) => {
            const field = get(_fields, name)._f;
            const fieldRef = field.refs ? field.refs[0] : field.ref;
            options.shouldSelect ? fieldRef.select() : fieldRef.focus();
        };
        return {
            control: {
                register,
                unregister,
                getFieldState,
                _executeSchema,
                _getWatch,
                _getDirty,
                _updateValid,
                _removeUnmounted,
                _updateFieldArray,
                _getFieldArray,
                _subjects,
                _proxyFormState,
                get _fields() {
                    return _fields;
                },
                get _formValues() {
                    return _formValues;
                },
                get _stateFlags() {
                    return _stateFlags;
                },
                set _stateFlags(value) {
                    _stateFlags = value;
                },
                get _defaultValues() {
                    return _defaultValues;
                },
                get _names() {
                    return _names;
                },
                set _names(value) {
                    _names = value;
                },
                get _formState() {
                    return _formState;
                },
                set _formState(value) {
                    _formState = value;
                },
                get _options() {
                    return _options;
                },
                set _options(value) {
                    _options = {
                        ..._options,
                        ...value,
                    };
                },
            },
            trigger,
            register,
            handleSubmit,
            watch,
            setValue,
            getValues,
            reset,
            resetField,
            clearErrors,
            unregister,
            setError,
            setFocus,
            getFieldState,
        };
    }

    /**
     * Custom hook to mange the entire form.
     *
     * @remarks
     * [API](https://react-hook-form.com/api/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
     *
     * @param props - form configuration and validation parameters.
     *
     * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
     *
     * @example
     * ```tsx
     * function App() {
     *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
     *   const onSubmit = data => console.log(data);
     *
     *   console.log(watch("example"));
     *
     *   return (
     *     <form onSubmit={handleSubmit(onSubmit)}>
     *       <input defaultValue="test" {...register("example")} />
     *       <input {...register("exampleRequired", { required: true })} />
     *       {errors.exampleRequired && <span>This field is required</span>}
     *       <input type="submit" />
     *     </form>
     *   );
     * }
     * ```
     */
    function useForm(props = {}) {
        const _formControl = ReactDOM.useRef();
        const [formState, updateFormState] = ReactDOM.useState({
            isDirty: false,
            isValidating: false,
            dirtyFields: {},
            isSubmitted: false,
            submitCount: 0,
            touchedFields: {},
            isSubmitting: false,
            isSubmitSuccessful: false,
            isValid: false,
            errors: {},
        });
        if (_formControl.current) {
            _formControl.current.control._options = props;
        }
        else {
            _formControl.current = {
                ...createFormControl(props),
                formState,
            };
        }
        const control = _formControl.current.control;
        const callback = ReactDOM.useCallback((value) => {
            if (shouldRenderFormState(value, control._proxyFormState, true)) {
                control._formState = {
                    ...control._formState,
                    ...value,
                };
                updateFormState({ ...control._formState });
            }
        }, [control]);
        useSubscribe({
            subject: control._subjects.state,
            callback,
        });
        ReactDOM.useEffect(() => {
            if (!control._stateFlags.mount) {
                control._proxyFormState.isValid && control._updateValid();
                control._stateFlags.mount = true;
            }
            if (control._stateFlags.watch) {
                control._stateFlags.watch = false;
                control._subjects.state.next({});
            }
            control._removeUnmounted();
        });
        _formControl.current.formState = getProxyFormState(formState, control._proxyFormState);
        return _formControl.current;
    }

    var global$1 =
      (typeof globalThis !== 'undefined' && globalThis) ||
      (typeof self !== 'undefined' && self) ||
      (typeof global$1 !== 'undefined' && global$1);

    var support = {
      searchParams: 'URLSearchParams' in global$1,
      iterable: 'Symbol' in global$1 && 'iterator' in Symbol,
      blob:
        'FileReader' in global$1 &&
        'Blob' in global$1 &&
        (function() {
          try {
            new Blob();
            return true
          } catch (e) {
            return false
          }
        })(),
      formData: 'FormData' in global$1,
      arrayBuffer: 'ArrayBuffer' in global$1
    };

    function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    if (support.arrayBuffer) {
      var viewClasses = [
        '[object Int8Array]',
        '[object Uint8Array]',
        '[object Uint8ClampedArray]',
        '[object Int16Array]',
        '[object Uint16Array]',
        '[object Int32Array]',
        '[object Uint32Array]',
        '[object Float32Array]',
        '[object Float64Array]'
      ];

      var isArrayBufferView =
        ArrayBuffer.isView ||
        function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
        };
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
        throw new TypeError('Invalid character in header field name: "' + name + '"')
      }
      return name.toLowerCase()
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value}
        }
      };

      if (support.iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator
        };
      }

      return iterator
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function(value, name) {
          this.append(name, value);
        }, this);
      } else if (Array.isArray(headers)) {
        headers.forEach(function(header) {
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function(name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function(name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue + ', ' + value : value;
    };

    Headers.prototype['delete'] = function(name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function(name) {
      name = normalizeName(name);
      return this.has(name) ? this.map[name] : null
    };

    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name))
    };

    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = normalizeValue(value);
    };

    Headers.prototype.forEach = function(callback, thisArg) {
      for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
          callback.call(thisArg, this.map[name], name, this);
        }
      }
    };

    Headers.prototype.keys = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push(name);
      });
      return iteratorFor(items)
    };

    Headers.prototype.values = function() {
      var items = [];
      this.forEach(function(value) {
        items.push(value);
      });
      return iteratorFor(items)
    };

    Headers.prototype.entries = function() {
      var items = [];
      this.forEach(function(value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items)
    };

    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'))
      }
      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      })
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise
    }

    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars = new Array(view.length);

      for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
      }
      return chars.join('')
    }

    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0)
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer
      }
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function(body) {
        /*
          fetch-mock wraps the Response object in an ES6 Proxy to
          provide useful test harness features such as flush. However, on
          ES5 browsers without fetch or Proxy support pollyfills must be used;
          the proxy-pollyfill is unable to proxy an attribute unless it exists
          on the object before the Proxy is created. This change ensures
          Response.bodyUsed exists on the instance, while maintaining the
          semantic of setting Request.bodyUsed in the constructor before
          _initBody is called.
        */
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = body;
        if (!body) {
          this._bodyText = '';
        } else if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer);
          // IE 10-11 can't handle a DataView body.
          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          this._bodyText = body = Object.prototype.toString.call(body);
        }

        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };

      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected
          }

          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob)
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]))
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob')
          } else {
            return Promise.resolve(new Blob([this._bodyText]))
          }
        };

        this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            var isConsumed = consumed(this);
            if (isConsumed) {
              return isConsumed
            }
            if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
              return Promise.resolve(
                this._bodyArrayBuffer.buffer.slice(
                  this._bodyArrayBuffer.byteOffset,
                  this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                )
              )
            } else {
              return Promise.resolve(this._bodyArrayBuffer)
            }
          } else {
            return this.blob().then(readBlobAsArrayBuffer)
          }
        };
      }

      this.text = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      };

      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode)
        };
      }

      this.json = function() {
        return this.text().then(JSON.parse)
      };

      return this
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method
    }

    function Request(input, options) {
      if (!(this instanceof Request)) {
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
      }

      options = options || {};
      var body = options.body;

      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError('Already read')
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;
        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }

      this.credentials = options.credentials || this.credentials || 'same-origin';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.signal = options.signal || this.signal;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests')
      }
      this._initBody(body);

      if (this.method === 'GET' || this.method === 'HEAD') {
        if (options.cache === 'no-store' || options.cache === 'no-cache') {
          // Search for a '_' parameter in the query string
          var reParamSearch = /([?&])_=[^&]*/;
          if (reParamSearch.test(this.url)) {
            // If it already exists then set the value with the current time
            this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
          } else {
            // Otherwise add a new '_' parameter to the end with the current time
            var reQueryString = /\?/;
            this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
          }
        }
      }
    }

    Request.prototype.clone = function() {
      return new Request(this, {body: this._bodyInit})
    };

    function decode(body) {
      var form = new FormData();
      body
        .trim()
        .split('&')
        .forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
      return form
    }

    function parseHeaders(rawHeaders) {
      var headers = new Headers();
      // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
      // https://tools.ietf.org/html/rfc7230#section-3.2
      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
      // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
      // https://github.com/github/fetch/issues/748
      // https://github.com/zloirock/core-js/issues/751
      preProcessedHeaders
        .split('\r')
        .map(function(header) {
          return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
        })
        .forEach(function(line) {
          var parts = line.split(':');
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(':').trim();
            headers.append(key, value);
          }
        });
      return headers
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!(this instanceof Response)) {
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
      }
      if (!options) {
        options = {};
      }

      this.type = 'default';
      this.status = options.status === undefined ? 200 : options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
      this.headers = new Headers(options.headers);
      this.url = options.url || '';
      this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function() {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      })
    };

    Response.error = function() {
      var response = new Response(null, {status: 0, statusText: ''});
      response.type = 'error';
      return response
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function(url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code')
      }

      return new Response(null, {status: status, headers: {location: url}})
    };

    var DOMException = global$1.DOMException;
    try {
      new DOMException();
    } catch (err) {
      DOMException = function(message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
      };
      DOMException.prototype = Object.create(Error.prototype);
      DOMException.prototype.constructor = DOMException;
    }

    function fetch$1(input, init) {
      return new Promise(function(resolve, reject) {
        var request = new Request(input, init);

        if (request.signal && request.signal.aborted) {
          return reject(new DOMException('Aborted', 'AbortError'))
        }

        var xhr = new XMLHttpRequest();

        function abortXhr() {
          xhr.abort();
        }

        xhr.onload = function() {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
          };
          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          setTimeout(function() {
            resolve(new Response(body, options));
          }, 0);
        };

        xhr.onerror = function() {
          setTimeout(function() {
            reject(new TypeError('Network request failed'));
          }, 0);
        };

        xhr.ontimeout = function() {
          setTimeout(function() {
            reject(new TypeError('Network request failed'));
          }, 0);
        };

        xhr.onabort = function() {
          setTimeout(function() {
            reject(new DOMException('Aborted', 'AbortError'));
          }, 0);
        };

        function fixUrl(url) {
          try {
            return url === '' && global$1.location.href ? global$1.location.href : url
          } catch (e) {
            return url
          }
        }

        xhr.open(request.method, fixUrl(request.url), true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        } else if (request.credentials === 'omit') {
          xhr.withCredentials = false;
        }

        if ('responseType' in xhr) {
          if (support.blob) {
            xhr.responseType = 'blob';
          } else if (
            support.arrayBuffer &&
            request.headers.get('Content-Type') &&
            request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
          ) {
            xhr.responseType = 'arraybuffer';
          }
        }

        if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
          Object.getOwnPropertyNames(init.headers).forEach(function(name) {
            xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
          });
        } else {
          request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
        }

        if (request.signal) {
          request.signal.addEventListener('abort', abortXhr);

          xhr.onreadystatechange = function() {
            // DONE (success or failure)
            if (xhr.readyState === 4) {
              request.signal.removeEventListener('abort', abortXhr);
            }
          };
        }

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      })
    }

    fetch$1.polyfill = true;

    if (!global$1.fetch) {
      global$1.fetch = fetch$1;
      global$1.Headers = Headers;
      global$1.Request = Request;
      global$1.Response = Response;
    }

    var QuestionTypes;
    (function (QuestionTypes) {
        QuestionTypes["rating"] = "rating";
        QuestionTypes["text"] = "text";
        QuestionTypes["choice"] = "choice";
    })(QuestionTypes || (QuestionTypes = {}));

    function createSubmitPayload(questions, answers, attributes) {
        if (attributes === void 0) { attributes = {}; }
        var question_answers = {};
        questions.elements.forEach(function (question, i) {
            var realQuestion = question.question;
            var type = realQuestion.type;
            var id = "".concat(realQuestion.id);
            var questionName = generateQuestionName(i + 1);
            var answerData = answers[questionName];
            if (!answerData) {
                return;
            }
            var answerPayload = { sub_question_answers: {} };
            if (type === QuestionTypes.choice && answerData.answer) {
                answerPayload.choices = is$1(String, answerData.answer)
                    ? [answerData.answer]
                    : answerData.answer;
            }
            else if (answerData.answer) {
                answerPayload[type] = answerData.answer;
            }
            var hasSubQuestions = question.sub_element_conditions.length > 0
                && question.sub_element_conditions.reduce(function (a, c) { return c && a; }, true);
            // create sub question payload
            if (hasSubQuestions) {
                question.sub_element_conditions.forEach(function (subQuestionSet, j) {
                    var _a;
                    (_a = subQuestionSet.elements) === null || _a === void 0 ? void 0 : _a.forEach(function (_a, k) {
                        var subQuestion = _a.question;
                        var subQuestionName = generateQuestionName(j * 10 + k + 1, "".concat(questionName, "_sub"));
                        var subAnswerData = answers[subQuestionName];
                        var subQuestionType = subQuestion.type;
                        if (!subAnswerData) {
                            return;
                        }
                        var subAnswerPayload = {};
                        if (subQuestionType === QuestionTypes.choice && subAnswerData.answer) {
                            subAnswerPayload.choices = is$1(String, subAnswerData.answer)
                                ? [subAnswerData.answer]
                                : subAnswerData.answer;
                        }
                        else if (answerData.answer) {
                            subAnswerPayload[subQuestionType] = subAnswerData.answer;
                        }
                        answerPayload.sub_question_answers[subQuestion.id] = subAnswerPayload;
                    });
                });
            }
            question_answers[id] = answerPayload;
        });
        var hash = questions.hash, token = questions.token, version = questions.version;
        var payload = {
            question_answers: question_answers,
            hash: hash,
            token: token,
            version: version,
        };
        if (is$1(Object, attributes) && Object.keys(attributes).length > 0) {
            payload.attributes = attributes;
        }
        return payload;
    }
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
    function fetchQuestions(fetchUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(fetchUrl).then(checkStatus)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    function submitAnswers(submitUrl, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(submitUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(payload),
                        }).then(checkStatus)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }

    var atLeastOneValueMatches = function (context, event, condMeta) {
        var _a;
        var cond = condMeta.cond;
        var currentEvent = event;
        var _b = cond, values = _b.values, parent = _b.parent;
        var key = currentEvent.key;
        var isSubQuestion = key === null || key === void 0 ? void 0 : key.includes('subquestion_');
        var value = isSubQuestion ? (_a = context[parent]) === null || _a === void 0 ? void 0 : _a.answer : currentEvent.value;
        if (value && values && Array.isArray(values)) {
            if (Array.isArray(value)) {
                var answers_1 = new Set(value);
                return values.some(function (val) { return answers_1.has(val); });
            }
            return values.includes(value);
        }
        return false;
    };
    var contextValueNotEmpty = function (context, event, condMeta) {
        var _a, _b, _c, _d;
        var cond = condMeta.cond, state = condMeta.state;
        var _e = cond, subQuestion = _e.subQuestion, parent = _e.parent;
        var answer = (context[parent] || {}).answer;
        if (!subQuestion || !parent || !answer) {
            return false;
        }
        var conditionValues = (_d = (_c = (_b = (_a = state === null || state === void 0 ? void 0 : state.machine) === null || _a === void 0 ? void 0 : _a.states) === null || _b === void 0 ? void 0 : _b[subQuestion]) === null || _c === void 0 ? void 0 : _c.config) === null || _d === void 0 ? void 0 : _d.condition;
        if (!conditionValues) {
            return false;
        }
        var newEvent = { key: subQuestion, value: answer };
        var newCondMeta = __assign$4(__assign$4({}, condMeta), { cond: {
                parent: parent,
                values: conditionValues,
            } });
        return atLeastOneValueMatches(context, newEvent, newCondMeta);
    };

    function createState(questions, endState) {
        var context = {};
        var states = {};
        var lastQuestion = generateQuestionName(1);
        var lastSubQuestions = [];
        questions.forEach(function (question, i) {
            var realQuestion = question.question;
            var prevQuestionName = questions[i - 1] && generateQuestionName(i);
            var nextQuestionName = questions[i + 1] && generateQuestionName(i + 2);
            var questionName = generateQuestionName(i + 1);
            var hasSubQuestions = question.sub_element_conditions.length > 0
                && question.sub_element_conditions.reduce(function (a, c) { return c && a; }, true);
            var originalPath = {
                target: nextQuestionName || endState,
                actions: ['save'],
            };
            // set question in context
            context[questionName] = {
                id: "".concat(realQuestion.id),
                answer: null,
            };
            states[questionName] = {
                meta: question,
                on: {
                    NEXT: originalPath,
                },
            };
            if (prevQuestionName) {
                states[questionName].on.PREVIOUS = {
                    target: prevQuestionName,
                    actions: ['save'],
                };
                if (lastSubQuestions.length > 0) {
                    states[questionName].on.PREVIOUS = __spreadArray$3(__spreadArray$3([], lastSubQuestions.map(function (lastSubQuestion) { return ({
                        target: lastSubQuestion,
                        cond: { type: 'contextValueNotEmpty', subQuestion: lastSubQuestion, parent: lastQuestion },
                        actions: ['save'],
                    }); }), true), [
                        { target: prevQuestionName, actions: ['save'] },
                    ], false);
                    lastSubQuestions = [];
                }
            }
            if (hasSubQuestions) {
                var subQuestionEvents = question.sub_element_conditions.map(function (subQuestionSet, j) {
                    var _a;
                    var arr = [];
                    if (Array.isArray(subQuestionSet.elements)) {
                        subQuestionSet.elements.forEach(function (subQuestion, subQuestionIndex) {
                            var _a;
                            var nextSubQuestionName = generateQuestionName(j * 10 + subQuestionIndex + 1, "".concat(questionName, "_sub"));
                            lastSubQuestions.push(nextSubQuestionName);
                            var subQuestionId = (_a = subQuestion.question) === null || _a === void 0 ? void 0 : _a.id;
                            context[nextSubQuestionName] = {
                                id: "".concat(subQuestionId),
                                answer: null,
                            };
                            states[nextSubQuestionName] = {
                                meta: subQuestion,
                                condition: subQuestionSet.values,
                                on: {
                                    NEXT: originalPath,
                                    PREVIOUS: {
                                        target: questionName,
                                        actions: ['save'],
                                    },
                                },
                            };
                            arr.push({
                                target: nextSubQuestionName || endState,
                                cond: { type: 'atLeastOneValueMatches', values: subQuestionSet.values, parent: questionName },
                                actions: ['save'],
                            });
                        });
                    }
                    if (Array.isArray(states[questionName].on.NEXT) && states[questionName].on.NEXT.length) {
                        (_a = states[questionName].on.NEXT).push.apply(_a, arr);
                    }
                    else {
                        states[questionName].on.NEXT = __spreadArray$3([], arr, true);
                    }
                    return arr;
                });
                states[questionName].on.NEXT.push(originalPath);
                lastSubQuestions.reverse();
                subQuestionEvents.forEach(function (item) {
                    item.forEach(function (sqe) {
                        var index = states[questionName].on.NEXT
                            .findIndex(function (el) { return el.target === sqe.target; });
                        states[sqe.target].on.NEXT = states[questionName].on.NEXT
                            .slice(index + 1);
                        states[sqe.target].on.PREVIOUS = __spreadArray$3(__spreadArray$3([], lastSubQuestions.map(function (lastSubQuestion) {
                            var _a;
                            var subquestionNumber = ((_a = sqe === null || sqe === void 0 ? void 0 : sqe.target) === null || _a === void 0 ? void 0 : _a.split('subquestion_').length) !== 1 ? parseInt(sqe.target.split('subquestion_')[1], 10) : 1;
                            var currentSubquestionNumber = lastSubQuestion.split('subquestion_').length !== 1 ? parseInt(lastSubQuestion.split('subquestion_')[1], 10) : 0;
                            if (subquestionNumber > currentSubquestionNumber && sqe.target !== lastSubQuestion) {
                                return {
                                    target: lastSubQuestion,
                                    cond: { type: 'contextValueNotEmpty', subQuestion: lastSubQuestion, parent: questionName },
                                    actions: ['save'],
                                };
                            }
                            return undefined;
                        }), true), [
                            { target: questionName, actions: ['save'] },
                        ], false).filter(function (a) { return a !== undefined; });
                    });
                });
            }
            lastQuestion = questionName;
        });
        var contextKeys = Object.keys(context);
        // set last event to submit
        var lastQuestionName = contextKeys.slice().reverse().find(function (value) { return !value.includes('subquestion_'); }) || '';
        var lastQuestionState = states[lastQuestionName].on;
        var NEXT_EVENTS = lastQuestionState.NEXT, OTHERS = __rest$2(lastQuestionState, ["NEXT"]);
        var NEXT = NEXT_EVENTS;
        if (!Array.isArray(NEXT)) {
            NEXT = [NEXT];
        }
        var SUBMIT = NEXT.find(function (_a) {
            var target = _a.target;
            return target === endState;
        });
        var NEXT_SUBS = NEXT.filter(function (_a) {
            var target = _a.target;
            return target.includes('subquestion_');
        });
        states[lastQuestionName].on = __assign$4(__assign$4({}, OTHERS), { SUBMIT: [SUBMIT] });
        if (NEXT_SUBS && NEXT_SUBS.length > 0) {
            states[lastQuestionName].on = __assign$4(__assign$4({}, states[lastQuestionName].on), { NEXT: NEXT_SUBS });
        }
        // set next possible submit state for last sub questions
        contextKeys.forEach(function (questionName, i) {
            if (questionName === lastQuestionName || !questionName.startsWith(lastQuestionName)) {
                return;
            }
            var isLastQuestion = i === contextKeys.length - 1;
            var _a = states[questionName].on, NEXT_SQ = _a.NEXT, OTHERS_SQ = __rest$2(_a, ["NEXT"]);
            states[questionName].on = __assign$4(__assign$4({}, OTHERS_SQ), { SUBMIT: [SUBMIT] });
            var NEXT_EVENTS_SQ = NEXT_SQ.filter(function (_a) {
                var target = _a.target;
                return target.includes('subquestion_');
            });
            if (!isLastQuestion) {
                states[questionName].on = __assign$4(__assign$4({}, states[questionName].on), { NEXT: NEXT_EVENTS_SQ });
            }
        });
        return {
            context: context,
            states: states,
        };
    }
    function contextValueSetter(contextRef, event) {
        var _a;
        if (!('key' in event) || !event.key || !event.value) {
            return {};
        }
        var key = event.key, value = event.value;
        var contextValue = contextRef[key];
        return _a = {},
            _a[key] = __assign$4(__assign$4({}, contextValue), { answer: value }),
            _a;
    }
    function contextUnsaveSetter(contextRef, event) {
        var _a;
        if (!('key' in event) || !event.key) {
            return {};
        }
        var key = event.key;
        var contextValue = contextRef[key];
        return _a = {},
            _a[key] = __assign$4(__assign$4({}, contextValue), { answer: null }),
            _a;
    }
    function generate(id, questions) {
        var _a = createState(questions, 'submitting'), context = _a.context, states = _a.states;
        var lastQuestion = Object.keys(context).reverse().find(function (value) { return !value.includes('subquestion_'); }) || '';
        return createMachine({
            id: "ca_questionaire_".concat(id),
            initial: 'loading',
            context: context,
            states: __assign$4({ loading: {
                    on: {
                        NEXT: {
                            target: generateQuestionName(1),
                        },
                    },
                }, submitError: {
                    on: {
                        PREVIOUS: {
                            target: lastQuestion,
                        },
                        RETRY: {
                            target: 'submitting',
                        },
                    },
                }, submitting: {
                    on: {
                        DONE: {
                            target: 'submitted',
                        },
                        ERROR: {
                            target: 'submitError',
                        },
                    },
                }, submitted: {
                    type: 'final',
                } }, states),
        }, {
            guards: {
                atLeastOneValueMatches: atLeastOneValueMatches,
                contextValueNotEmpty: contextValueNotEmpty,
            },
            actions: {
                save: assign$1(contextValueSetter),
                unsave: assign$1(contextUnsaveSetter),
            },
        });
    }

    var AssetsContext = ReactDOM.createContext({});
    function useAssetFetcher() {
        var assets = F$1(AssetsContext);
        var grabAsset = A$1(function (key) { return ((key in assets) ? assets[key] : ''); }, [assets]);
        return grabAsset;
    }

    var SurveyStateContext = D$1({
        surveyService: {},
    });
    function useSurveyService() {
        var services = F$1(SurveyStateContext);
        return services.surveyService;
    }
    function SurveyStateProvider(_a) {
        var state = _a.state, children = _a.children;
        var surveyService = useInterpret(state);
        var value = _(function () { return ({ surveyService: surveyService }); }, [surveyService]);
        return (ReactDOM.createElement(SurveyStateContext.Provider, { value: value }, children));
    }

    var TranslationContext = ReactDOM.createContext({});
    function useTranslations() {
        var translations = F$1(TranslationContext);
        return function (key, params) {
            if (params === void 0) { params = {}; }
            var translationValue = ((key in translations) ? translations[key] : key);
            var translation = Object.entries(params).reduce(function (a, _a) {
                var type = _a[0], value = _a[1];
                return (a.replace("%".concat(type, "%"), value));
            }, translationValue);
            return translation;
        };
    }

    var SDKContext = ReactDOM.createContext({});
    function useSDKContext() {
        return F$1(SDKContext);
    }
    function SDKContextProvider(_a) {
        var children = _a.children, params = _a.params;
        var fetchUrl = params.fetchUrl;
        var _b = m(), questions = _b[0], setQuestions = _b[1];
        var _c = m(true), loading = _c[0], setLoading = _c[1];
        var _d = m({}), translationsData = _d[0], setTranslationsData = _d[1];
        var _e = m({}), assetsData = _e[0], setAssetsData = _e[1];
        var _f = m(), stateMachine = _f[0], setStateMachine = _f[1];
        y(function () {
            if (fetchUrl) {
                fetchQuestions(fetchUrl).then(function (questionsData) {
                    var elements = questionsData.elements, translations = questionsData.translations, assets = questionsData.assets;
                    var state = generate('some-hash', elements);
                    setQuestions(questionsData);
                    setStateMachine(state);
                    setLoading(false);
                    setTranslationsData(translations);
                    setAssetsData(assets);
                }).catch(function (err) {
                    emitter.emit('error', err);
                });
            }
        }, [fetchUrl]);
        var values = _(function () { return ({ params: params, questions: questions }); }, [params, questions]);
        return (ReactDOM.createElement(SDKContext.Provider, { value: values },
            ReactDOM.createElement(TranslationContext.Provider, { value: translationsData },
                ReactDOM.createElement(AssetsContext.Provider, { value: assetsData }, stateMachine
                    && (ReactDOM.createElement(SurveyStateProvider, { state: stateMachine }, !loading && children))))));
    }

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z$c = "@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap\");\n.app_question-modal__Ujvf6 {\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(88, 99, 112, 0.6);\n  z-index: 999999;\n  flex-flow: column nowrap;\n  justify-content: center;\n  -ms-flex-pack: center;\n  align-items: center;\n}\n\n.app_question-footer__pp4lS {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.app_centered__tlxCj {\n  text-align: center;\n}\n\n.app_success__OvDRI {\n  color: #586370;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n}";
    var appStyle = {"question-modal":"app_question-modal__Ujvf6","question-footer":"app_question-footer__pp4lS","centered":"app_centered__tlxCj","success":"app_success__OvDRI"};
    styleInject(css_248z$c);

    var css_248z$b = ".question_question-modal__80545 {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  background: #fff;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n}\n.question_question-modal__80545 .question_question-modal-container__mkj5V {\n  width: 760px;\n}\n.question_question-modal__80545[data-type=modal] {\n  max-width: 496px;\n  border-radius: 4px;\n  box-shadow: 0 8px 12px rgba(88, 99, 112, 0.16), 0 0 1px rgba(88, 99, 112, 0.32);\n}\n.question_question-modal__80545[data-type=modal] .question_question-modal-container__mkj5V {\n  width: 100%;\n}\n.question_question-modal__80545[data-type=modal] .question_question-modal-title__7XsGS {\n  border-radius: 4px 4px 0 0;\n}\n.question_question-modal__80545 .question_question-modal-title__7XsGS,\n.question_question-modal__80545 .question_question-modal-content__O9Gse,\n.question_question-modal__80545 .question_question-modal-action__VCPGB,\n.question_question-modal__80545 .question_question-modal-footer__EGpnf {\n  display: flex;\n  justify-content: center;\n}\n.question_question-modal__80545 .question_question-modal-title__7XsGS {\n  background: var(--ca-primary-color);\n  padding: 20px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 32px;\n  letter-spacing: -0.5px;\n  color: var(--ca-primary-text-color);\n  border-bottom: 2px solid #f1f2f4;\n}\n.question_question-modal__80545 .question_question-modal-content__O9Gse {\n  padding: 24px 20px;\n}\n.question_question-modal__80545 .question_question-modal-action__VCPGB:not(:empty) {\n  margin: 0 20px 24px;\n}\n.question_question-modal__80545 .question_question-modal-action__VCPGB:not(:empty) .question_question-modal-container__mkj5V {\n  display: flex;\n  gap: 16px;\n  justify-content: space-between;\n}\n.question_question-modal__80545 .question_question-modal-action__VCPGB:not(:empty) .question_question-modal-container__mkj5V > div {\n  display: flex;\n  gap: 16px;\n}\n.question_question-modal__80545 .question_question-modal-footer__EGpnf {\n  padding: 10px;\n  align-items: center;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n  color: #586370;\n}\n.question_question-modal__80545 .question_question-modal-footer__EGpnf svg {\n  margin-right: 8px;\n}\n.question_question-modal__80545 .question_question-modal-footer__EGpnf a {\n  color: #3b62b2;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 496px) {\n  .question_question-modal__80545[data-type=modal] {\n    width: calc(100% - 40px);\n  }\n}";
    var styles$b = {"question-modal":"question_question-modal__80545","question-modal-container":"question_question-modal-container__mkj5V","question-modal-title":"question_question-modal-title__7XsGS","question-modal-content":"question_question-modal-content__O9Gse","question-modal-action":"question_question-modal-action__VCPGB","question-modal-footer":"question_question-modal-footer__EGpnf"};
    styleInject(css_248z$b);

    var _path, _path2, _path3;

    function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

    var SvgLogo = function SvgLogo(props) {
      return /*#__PURE__*/v$1("svg", _extends$5({
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, props), _path || (_path = /*#__PURE__*/v$1("path", {
        fill: "#fff",
        d: "M4 4h32v32H4z"
      })), _path2 || (_path2 = /*#__PURE__*/v$1("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 0C4.477 0 0 4.477 0 10v20c0 5.523 4.477 10 10 10h20c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10H10Zm3.283 8.459a11.5 11.5 0 0 1 6.711.085A11.59 11.59 0 0 1 23.49 8C29.85 8 35.06 13.108 35 19.41c-.105 10.648-7.998 13.577-7.998 13.577-.21.075-.119-.18.018-.562.24-.667.617-1.72-.224-2.088a11.595 11.595 0 0 1-6.509.022 11.5 11.5 0 1 1-7.003-21.9ZM29.37 25.358a4.227 4.227 0 0 1-1.564 1.751 4.277 4.277 0 0 1-2.265.655 4.225 4.225 0 0 1-1.781-.39.496.496 0 0 1-.286-.273.486.486 0 0 1 .308-.653.497.497 0 0 1 .395.042c.427.198.894.3 1.366.299a3.279 3.279 0 0 0 1.736-.502c.52-.327.935-.792 1.199-1.343a.493.493 0 0 1 .646-.21.491.491 0 0 1 .244.629l.002-.005Z",
        fill: "#3B62B2"
      })), _path3 || (_path3 = /*#__PURE__*/v$1("path", {
        opacity: 0.5,
        d: "M19.994 8.544a11.495 11.495 0 0 0-5.2 3.41 11.378 11.378 0 0 0-2.336 4.266 11.315 11.315 0 0 0 1.389 9.386 11.458 11.458 0 0 0 3.473 3.42 11.55 11.55 0 0 0 2.966 1.333 11.5 11.5 0 1 1-.292-21.815Z",
        fill: "#3B62B2"
      })));
    };

    function Question(_a) {
        var title = _a.title, subTitle = _a.subTitle, actions = _a.actions, children = _a.children, showFooter = _a.showFooter, variant = _a.variant, poweredByText = _a.poweredByText, customerAllianceLink = _a.customerAllianceLink, otherProps = __rest$2(_a, ["title", "subTitle", "actions", "children", "showFooter", "variant", "poweredByText", "customerAllianceLink"]);
        return (ReactDOM.createElement("form", __assign$4({ className: styles$b['question-modal'], "data-type": variant }, otherProps),
            ReactDOM.createElement("div", { className: styles$b['question-modal-title'] },
                ReactDOM.createElement("div", { className: styles$b['question-modal-container'] },
                    title,
                    "\u00A0",
                    subTitle && ReactDOM.createElement("div", null, subTitle))),
            ReactDOM.createElement("div", { className: styles$b['question-modal-content'] },
                ReactDOM.createElement("div", { className: styles$b['question-modal-container'] }, children)),
            actions && (ReactDOM.createElement("div", { className: styles$b['question-modal-action'] },
                ReactDOM.createElement("div", { className: styles$b['question-modal-container'] }, actions))),
            showFooter && (ReactDOM.createElement("div", { className: styles$b['question-modal-footer'] },
                ReactDOM.createElement(SvgLogo, { width: 16, height: 16 }),
                ReactDOM.createElement("span", null,
                    poweredByText,
                    ' ',
                    ReactDOM.createElement("a", { href: customerAllianceLink, target: "_blank", rel: "noreferrer" }, "Customer Alliance"))))));
    }
    Question.defaultProps = {
        subTitle: null,
        actions: null,
        showFooter: true,
        poweredByText: 'Powered by',
        customerAllianceLink: 'https://www.customer-alliance.com/',
    };

    var css_248z$a = ".button_button__0aBVY {\n  padding: 6px 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  border-radius: 4px;\n  border: none;\n  background: #e2e5e9;\n  color: #2d3239;\n  cursor: pointer;\n  outline: 2px solid transparent;\n  transition: all 200ms ease-in-out;\n  position: relative;\n  z-index: 1;\n  overflow: auto;\n}\n.button_button__0aBVY:focus-visible:not(.button_loading__PhXpZ) {\n  outline: 2px solid var(--ca-primary-background-400);\n}\n.button_button__0aBVY:hover:not(.button_loading__PhXpZ), .button_button__0aBVY:active:not(.button_loading__PhXpZ) {\n  background: #f1f2f4;\n}\n.button_button__0aBVY:active:not(.button_loading__PhXpZ) {\n  color: var(--ca-primary-color);\n}\n.button_button__0aBVY.button_primary__ID994 {\n  background: var(--ca-primary-color);\n  color: var(--ca-primary-text-color);\n}\n.button_button__0aBVY.button_primary__ID994:not(.button_loading__PhXpZ)::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--ca-primary-background-400);\n  opacity: 0;\n  z-index: -1;\n  transition: all 200ms ease-in-out;\n}\n.button_button__0aBVY.button_primary__ID994:hover:not(.button_loading__PhXpZ) {\n  background: var(--ca-primary-background-400);\n}\n.button_button__0aBVY.button_primary__ID994:active:not(.button_loading__PhXpZ) {\n  background: var(--ca-primary-background-600);\n  color: var(--ca-primary-text-color);\n}\n.button_button__0aBVY.button_primary__ID994:focus:not(.button_loading__PhXpZ) {\n  outline: 2px solid var(--ca-primary-background-400);\n}\n.button_button__0aBVY.button_loading__PhXpZ {\n  opacity: 0.1;\n}\n.button_button__0aBVY:disabled, .button_button__0aBVY.button_primary__ID994:disabled {\n  background: #f1f2f4 !important;\n  color: #c6cbd2 !important;\n}";
    var styles$a = {"button":"button_button__0aBVY","loading":"button_loading__PhXpZ","primary":"button_primary__ID994"};
    styleInject(css_248z$a);

    function Button(_a) {
        var variant = _a.variant, children = _a.children, loader = _a.loader, otherProps = __rest$2(_a, ["variant", "children", "loader"]);
        var classes = "".concat(styles$a.button, " ").concat(styles$a[variant] || '', " ").concat(loader ? styles$a.loading : '');
        return (ReactDOM.createElement("button", __assign$4({ type: "button" }, otherProps, { className: classes }),
            !loader && children,
            loader));
    }
    Button.defaultProps = {
        variant: 'base',
        loader: null,
    };

    /* eslint-disable @typescript-eslint/no-unsafe-return */
    /**
     * Checks the current answer against all sub-questions set and return true is matches else false
     * @returns boolean
     */
    function useIsNextSubQuestion(formContext) {
        var _a, _b, _c, _d, _e;
        var context = useFormContext();
        var watch = (formContext || context).watch;
        var surveyService = useSurveyService();
        var current = useActor(surveyService)[0];
        var lastQuestionName = _(function () { return Object.keys(current.context)
            .reverse().find(function (value) { return !value.includes('subquestion_'); }); }, [current.context]);
        var questionName = current.value;
        var isSubQuestion = questionName.includes('subquestion_');
        var machineId = (_a = current === null || current === void 0 ? void 0 : current.machine) === null || _a === void 0 ? void 0 : _a.id;
        var metaId = "".concat(machineId, ".").concat(questionName);
        var meta = current.meta[metaId];
        var id = (_b = meta === null || meta === void 0 ? void 0 : meta.question) === null || _b === void 0 ? void 0 : _b.id;
        var questionId = (_c = meta === null || meta === void 0 ? void 0 : meta.question) === null || _c === void 0 ? void 0 : _c.id;
        var isLastQuestion = questionName.startsWith(lastQuestionName);
        if (!id || !isLastQuestion) {
            return false;
        }
        var currentAnswer = watch("".concat(id));
        // if use parent question to run validations
        if (isSubQuestion) {
            metaId = "".concat(machineId, ".").concat(lastQuestionName);
            meta = (_d = current.machine.idMap[metaId]) === null || _d === void 0 ? void 0 : _d.meta;
            id = (_e = meta === null || meta === void 0 ? void 0 : meta.question) === null || _e === void 0 ? void 0 : _e.id;
            currentAnswer = current.context[lastQuestionName].answer;
        }
        var subQuestions = ((meta === null || meta === void 0 ? void 0 : meta.sub_element_conditions) || []);
        // filter out current subquestion
        if (isSubQuestion) {
            var positionOfQuestion_1 = subQuestions.findIndex(function (_a) {
                var subQuestionElements = _a.elements;
                return subQuestionElements.some(function (_a) {
                    var subQuestionElementId = _a.question.id;
                    return subQuestionElementId === questionId;
                });
            });
            subQuestions = subQuestions.filter(function (_, i) { return !(i < positionOfQuestion_1); }).filter(function (subQuestion) {
                if (!subQuestion.values.length || !subQuestion.elements.length) {
                    return false;
                }
                var positionOfQuestionInElements = subQuestion.elements.findIndex(function (_a) {
                    var subQuestionElementId = _a.question.id;
                    return subQuestionElementId === questionId;
                });
                var subQuestionElements = subQuestion.elements
                    .filter(function (_, i) { return !(i < positionOfQuestionInElements); })
                    .filter(function (_a) {
                    var subQuestionElementId = _a.question.id;
                    return subQuestionElementId !== questionId;
                });
                if (subQuestionElements.length === 0) {
                    return false;
                }
                return true;
            });
            questionName = lastQuestionName;
        }
        return subQuestions.some(function (_a) {
            var _b;
            var values = _a.values;
            return atLeastOneValueMatches((_b = {},
                _b[questionName] = {
                    id: "".concat(id),
                    answer: currentAnswer,
                },
                _b), { value: currentAnswer }, {
                cond: {
                    values: values,
                    parent: questionName,
                },
            });
        });
    }
    /**
     * Checks the question has all answer linked to a sub-question and return true is matches else false
     * @returns boolean
     */
    function useAllOptionsWithSubquestion() {
        var _a, _b, _c, _d, _e;
        var surveyService = useSurveyService();
        var current = useActor(surveyService)[0];
        var machineId = (_a = current === null || current === void 0 ? void 0 : current.machine) === null || _a === void 0 ? void 0 : _a.id;
        var metaId = "".concat(machineId, ".").concat(current.value);
        var meta = current.meta[metaId];
        var question = meta === null || meta === void 0 ? void 0 : meta.question;
        var questionName = current.value;
        var isSubQuestion = questionName.includes('subquestion_');
        if (!isSubQuestion && (question === null || question === void 0 ? void 0 : question.type) === 'rating') {
            var ratingQuestion = question;
            var max = (_c = (_b = ratingQuestion === null || ratingQuestion === void 0 ? void 0 : ratingQuestion.rating_scale) === null || _b === void 0 ? void 0 : _b.max) === null || _c === void 0 ? void 0 : _c.value;
            var min_1 = (_e = (_d = ratingQuestion === null || ratingQuestion === void 0 ? void 0 : ratingQuestion.rating_scale) === null || _d === void 0 ? void 0 : _d.min) === null || _e === void 0 ? void 0 : _e.value;
            var options_1 = Array.from({ length: Number(max) + 1 - Number(min_1) }, function (_, i) { return String(Number(min_1) === 0 ? i : i + 1); });
            var subQuestions = ((meta === null || meta === void 0 ? void 0 : meta.sub_element_conditions) || []);
            subQuestions.every(function (el) {
                if (!options_1.length) {
                    return false;
                }
                el.values.every(function (val) {
                    if (options_1.length) {
                        var index = options_1.findIndex(function (item) { return item === val; });
                        if (index !== -1) {
                            options_1.splice(index, 1);
                        }
                        return true;
                    }
                    return false;
                });
                return true;
            });
            // if all the options are deleted then every answer has subquestion
            return !options_1.length;
        }
        return false;
    }
    function useCanSubmit(formContext) {
        var _a, _b;
        var surveyService = useSurveyService();
        var current = useActor(surveyService)[0];
        var isNextSubQuestion = useIsNextSubQuestion(formContext);
        var allOptionsWithSubquestion = useAllOptionsWithSubquestion();
        var machineId = (_a = current === null || current === void 0 ? void 0 : current.machine) === null || _a === void 0 ? void 0 : _a.id;
        var metaId = "".concat(machineId, ".").concat(current.value);
        var meta = current.meta[metaId];
        var question = meta === null || meta === void 0 ? void 0 : meta.question;
        var questionName = current.value;
        var required = ((_b = question === null || question === void 0 ? void 0 : question.validation) === null || _b === void 0 ? void 0 : _b.required) || false;
        var lastQuestionName = _(function () { return Object.keys(current.context)
            .reverse().find(function (value) { return !value.includes('subquestion_'); }); }, [current.context]);
        var isLastQuestion = questionName.startsWith(lastQuestionName);
        if (isNextSubQuestion && required) {
            return false;
        }
        if (isLastQuestion && required) {
            return !allOptionsWithSubquestion;
        }
        return !isNextSubQuestion && (current.nextEvents.includes('SUBMIT') || current.nextEvents.includes('RETRY'));
    }

    function Actions() {
        var params = useSDKContext().params;
        var register = useFormContext().register;
        var t = useTranslations();
        var isPersistent = (params === null || params === void 0 ? void 0 : params.type) === 'persistent-footer';
        var surveyService = useSurveyService();
        var current = useActor(surveyService)[0];
        var isSubmitting = current.value === 'submitting';
        var isSubmitted = current.value === 'submitted';
        var isSubmitError = current.value === 'submitError';
        var canSubmit = useCanSubmit();
        if (isSubmitting) {
            return null;
        }
        var isSubQuestion = is$1(String, current.value) && current.value.includes('subquestion_');
        var isFirstQuestion = is$1(String, current.value) && current.value.includes('question_1');
        var onClose = function () {
            emitter.emit(isPersistent && !isSubmitted ? 'hide' : 'close');
        };
        return (ReactDOM.createElement(ReactDOM.Fragment, null,
            (isSubQuestion || isSubmitError || isSubmitted || !isFirstQuestion) && ReactDOM.createElement("span", null),
            ((!isSubQuestion && !isSubmitError && isFirstQuestion) || isSubmitted) && (ReactDOM.createElement(Button, { onClick: onClose, variant: isSubmitted ? 'primary' : 'base' }, t('close'))),
            !isSubmitted && (ReactDOM.createElement("div", null,
                (isSubQuestion || isSubmitError || !isFirstQuestion) && ReactDOM.createElement(Button, __assign$4({ type: "submit" }, register('action'), { value: "back" }), t('back')),
                !isSubmitted && ReactDOM.createElement(Button, __assign$4({ type: "submit", variant: "primary" }, register('action'), { value: "next" }), t(canSubmit ? 'submit' : 'next'))))));
    }

    var ErrorBoundary = /** @class */ (function (_super) {
        __extends$1(ErrorBoundary, _super);
        function ErrorBoundary(props) {
            var _this = _super.call(this, props) || this;
            _this.state = { hasError: false };
            return _this;
        }
        ErrorBoundary.getDerivedStateFromError = function () {
            return { hasError: true };
        };
        ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
            console.error(error, errorInfo);
            emitter.emit('close');
        };
        ErrorBoundary.prototype.render = function () {
            var hasError = this.state.hasError;
            if (hasError) {
                return null;
            }
            var children = this.props.children;
            return children;
        };
        return ErrorBoundary;
    }(ReactDOM.Component));

    var __read$2 = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var styleToObject = function (input) {
        var attributes = input.split(/ ?; ?/);
        return attributes.reduce(function (acc, d) {
            var _a = __read$2(d.split(/ ?: ?/), 2), key = _a[0], value = _a[1];
            if (key && value) {
                acc[key.replace(/-(\w)/g, function (_$0, $1) { return $1.toUpperCase(); })] = Number.isNaN(Number(value))
                    ? value
                    : Number(value);
            }
            return acc;
        }, {});
    };
    /* istanbul ignore next */
    function randomString$1(length) {
        if (length === void 0) { length = 6; }
        var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var index = length; index > 0; --index) {
            result += characters[Math.round(Math.random() * (characters.length - 1))];
        }
        return result;
    }
    var noTextChildNodes = [
        'br',
        'col',
        'colgroup',
        'dl',
        'hr',
        'iframe',
        'img',
        'input',
        'link',
        'menuitem',
        'meta',
        'ol',
        'param',
        'select',
        'table',
        'tbody',
        'tfoot',
        'thead',
        'tr',
        'ul',
        'wbr',
    ];
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    // Taken from https://raw.githubusercontent.com/facebook/react/baff5cc2f69d30589a5dc65b089e47765437294b/packages/react-dom/src/shared/possibleStandardNames.js
    // tslint:disable:object-literal-sort-keys
    var possibleStandardNames = {
        // HTML
        'accept-charset': 'acceptCharset',
        acceptcharset: 'acceptCharset',
        accesskey: 'accessKey',
        allowfullscreen: 'allowFullScreen',
        autocapitalize: 'autoCapitalize',
        autocomplete: 'autoComplete',
        autocorrect: 'autoCorrect',
        autofocus: 'autoFocus',
        autoplay: 'autoPlay',
        autosave: 'autoSave',
        cellpadding: 'cellPadding',
        cellspacing: 'cellSpacing',
        charset: 'charSet',
        class: 'className',
        classid: 'classID',
        classname: 'className',
        colspan: 'colSpan',
        contenteditable: 'contentEditable',
        contextmenu: 'contextMenu',
        controlslist: 'controlsList',
        crossorigin: 'crossOrigin',
        dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
        datetime: 'dateTime',
        defaultchecked: 'defaultChecked',
        defaultvalue: 'defaultValue',
        enctype: 'encType',
        for: 'htmlFor',
        formmethod: 'formMethod',
        formaction: 'formAction',
        formenctype: 'formEncType',
        formnovalidate: 'formNoValidate',
        formtarget: 'formTarget',
        frameborder: 'frameBorder',
        hreflang: 'hrefLang',
        htmlfor: 'htmlFor',
        httpequiv: 'httpEquiv',
        'http-equiv': 'httpEquiv',
        icon: 'icon',
        innerhtml: 'innerHTML',
        inputmode: 'inputMode',
        itemid: 'itemID',
        itemprop: 'itemProp',
        itemref: 'itemRef',
        itemscope: 'itemScope',
        itemtype: 'itemType',
        keyparams: 'keyParams',
        keytype: 'keyType',
        marginwidth: 'marginWidth',
        marginheight: 'marginHeight',
        maxlength: 'maxLength',
        mediagroup: 'mediaGroup',
        minlength: 'minLength',
        nomodule: 'noModule',
        novalidate: 'noValidate',
        playsinline: 'playsInline',
        radiogroup: 'radioGroup',
        readonly: 'readOnly',
        referrerpolicy: 'referrerPolicy',
        rowspan: 'rowSpan',
        spellcheck: 'spellCheck',
        srcdoc: 'srcDoc',
        srclang: 'srcLang',
        srcset: 'srcSet',
        tabindex: 'tabIndex',
        typemustmatch: 'typeMustMatch',
        usemap: 'useMap',
        // SVG
        accentheight: 'accentHeight',
        'accent-height': 'accentHeight',
        alignmentbaseline: 'alignmentBaseline',
        'alignment-baseline': 'alignmentBaseline',
        allowreorder: 'allowReorder',
        arabicform: 'arabicForm',
        'arabic-form': 'arabicForm',
        attributename: 'attributeName',
        attributetype: 'attributeType',
        autoreverse: 'autoReverse',
        basefrequency: 'baseFrequency',
        baselineshift: 'baselineShift',
        'baseline-shift': 'baselineShift',
        baseprofile: 'baseProfile',
        calcmode: 'calcMode',
        capheight: 'capHeight',
        'cap-height': 'capHeight',
        clippath: 'clipPath',
        'clip-path': 'clipPath',
        clippathunits: 'clipPathUnits',
        cliprule: 'clipRule',
        'clip-rule': 'clipRule',
        colorinterpolation: 'colorInterpolation',
        'color-interpolation': 'colorInterpolation',
        colorinterpolationfilters: 'colorInterpolationFilters',
        'color-interpolation-filters': 'colorInterpolationFilters',
        colorprofile: 'colorProfile',
        'color-profile': 'colorProfile',
        colorrendering: 'colorRendering',
        'color-rendering': 'colorRendering',
        contentscripttype: 'contentScriptType',
        contentstyletype: 'contentStyleType',
        diffuseconstant: 'diffuseConstant',
        dominantbaseline: 'dominantBaseline',
        'dominant-baseline': 'dominantBaseline',
        edgemode: 'edgeMode',
        enablebackground: 'enableBackground',
        'enable-background': 'enableBackground',
        externalresourcesrequired: 'externalResourcesRequired',
        fillopacity: 'fillOpacity',
        'fill-opacity': 'fillOpacity',
        fillrule: 'fillRule',
        'fill-rule': 'fillRule',
        filterres: 'filterRes',
        filterunits: 'filterUnits',
        floodopacity: 'floodOpacity',
        'flood-opacity': 'floodOpacity',
        floodcolor: 'floodColor',
        'flood-color': 'floodColor',
        fontfamily: 'fontFamily',
        'font-family': 'fontFamily',
        fontsize: 'fontSize',
        'font-size': 'fontSize',
        fontsizeadjust: 'fontSizeAdjust',
        'font-size-adjust': 'fontSizeAdjust',
        fontstretch: 'fontStretch',
        'font-stretch': 'fontStretch',
        fontstyle: 'fontStyle',
        'font-style': 'fontStyle',
        fontvariant: 'fontVariant',
        'font-variant': 'fontVariant',
        fontweight: 'fontWeight',
        'font-weight': 'fontWeight',
        glyphname: 'glyphName',
        'glyph-name': 'glyphName',
        glyphorientationhorizontal: 'glyphOrientationHorizontal',
        'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
        glyphorientationvertical: 'glyphOrientationVertical',
        'glyph-orientation-vertical': 'glyphOrientationVertical',
        glyphref: 'glyphRef',
        gradienttransform: 'gradientTransform',
        gradientunits: 'gradientUnits',
        horizadvx: 'horizAdvX',
        'horiz-adv-x': 'horizAdvX',
        horizoriginx: 'horizOriginX',
        'horiz-origin-x': 'horizOriginX',
        imagerendering: 'imageRendering',
        'image-rendering': 'imageRendering',
        kernelmatrix: 'kernelMatrix',
        kernelunitlength: 'kernelUnitLength',
        keypoints: 'keyPoints',
        keysplines: 'keySplines',
        keytimes: 'keyTimes',
        lengthadjust: 'lengthAdjust',
        letterspacing: 'letterSpacing',
        'letter-spacing': 'letterSpacing',
        lightingcolor: 'lightingColor',
        'lighting-color': 'lightingColor',
        limitingconeangle: 'limitingConeAngle',
        markerend: 'markerEnd',
        'marker-end': 'markerEnd',
        markerheight: 'markerHeight',
        markermid: 'markerMid',
        'marker-mid': 'markerMid',
        markerstart: 'markerStart',
        'marker-start': 'markerStart',
        markerunits: 'markerUnits',
        markerwidth: 'markerWidth',
        maskcontentunits: 'maskContentUnits',
        maskunits: 'maskUnits',
        numoctaves: 'numOctaves',
        overlineposition: 'overlinePosition',
        'overline-position': 'overlinePosition',
        overlinethickness: 'overlineThickness',
        'overline-thickness': 'overlineThickness',
        paintorder: 'paintOrder',
        'paint-order': 'paintOrder',
        'panose-1': 'panose1',
        pathlength: 'pathLength',
        patterncontentunits: 'patternContentUnits',
        patterntransform: 'patternTransform',
        patternunits: 'patternUnits',
        pointerevents: 'pointerEvents',
        'pointer-events': 'pointerEvents',
        pointsatx: 'pointsAtX',
        pointsaty: 'pointsAtY',
        pointsatz: 'pointsAtZ',
        preservealpha: 'preserveAlpha',
        preserveaspectratio: 'preserveAspectRatio',
        primitiveunits: 'primitiveUnits',
        refx: 'refX',
        refy: 'refY',
        renderingintent: 'renderingIntent',
        'rendering-intent': 'renderingIntent',
        repeatcount: 'repeatCount',
        repeatdur: 'repeatDur',
        requiredextensions: 'requiredExtensions',
        requiredfeatures: 'requiredFeatures',
        shaperendering: 'shapeRendering',
        'shape-rendering': 'shapeRendering',
        specularconstant: 'specularConstant',
        specularexponent: 'specularExponent',
        spreadmethod: 'spreadMethod',
        startoffset: 'startOffset',
        stddeviation: 'stdDeviation',
        stitchtiles: 'stitchTiles',
        stopcolor: 'stopColor',
        'stop-color': 'stopColor',
        stopopacity: 'stopOpacity',
        'stop-opacity': 'stopOpacity',
        strikethroughposition: 'strikethroughPosition',
        'strikethrough-position': 'strikethroughPosition',
        strikethroughthickness: 'strikethroughThickness',
        'strikethrough-thickness': 'strikethroughThickness',
        strokedasharray: 'strokeDasharray',
        'stroke-dasharray': 'strokeDasharray',
        strokedashoffset: 'strokeDashoffset',
        'stroke-dashoffset': 'strokeDashoffset',
        strokelinecap: 'strokeLinecap',
        'stroke-linecap': 'strokeLinecap',
        strokelinejoin: 'strokeLinejoin',
        'stroke-linejoin': 'strokeLinejoin',
        strokemiterlimit: 'strokeMiterlimit',
        'stroke-miterlimit': 'strokeMiterlimit',
        strokewidth: 'strokeWidth',
        'stroke-width': 'strokeWidth',
        strokeopacity: 'strokeOpacity',
        'stroke-opacity': 'strokeOpacity',
        suppresscontenteditablewarning: 'suppressContentEditableWarning',
        suppresshydrationwarning: 'suppressHydrationWarning',
        surfacescale: 'surfaceScale',
        systemlanguage: 'systemLanguage',
        tablevalues: 'tableValues',
        targetx: 'targetX',
        targety: 'targetY',
        textanchor: 'textAnchor',
        'text-anchor': 'textAnchor',
        textdecoration: 'textDecoration',
        'text-decoration': 'textDecoration',
        textlength: 'textLength',
        textrendering: 'textRendering',
        'text-rendering': 'textRendering',
        underlineposition: 'underlinePosition',
        'underline-position': 'underlinePosition',
        underlinethickness: 'underlineThickness',
        'underline-thickness': 'underlineThickness',
        unicodebidi: 'unicodeBidi',
        'unicode-bidi': 'unicodeBidi',
        unicoderange: 'unicodeRange',
        'unicode-range': 'unicodeRange',
        unitsperem: 'unitsPerEm',
        'units-per-em': 'unitsPerEm',
        unselectable: 'unselectable',
        valphabetic: 'vAlphabetic',
        'v-alphabetic': 'vAlphabetic',
        vectoreffect: 'vectorEffect',
        'vector-effect': 'vectorEffect',
        vertadvy: 'vertAdvY',
        'vert-adv-y': 'vertAdvY',
        vertoriginx: 'vertOriginX',
        'vert-origin-x': 'vertOriginX',
        vertoriginy: 'vertOriginY',
        'vert-origin-y': 'vertOriginY',
        vhanging: 'vHanging',
        'v-hanging': 'vHanging',
        videographic: 'vIdeographic',
        'v-ideographic': 'vIdeographic',
        viewbox: 'viewBox',
        viewtarget: 'viewTarget',
        vmathematical: 'vMathematical',
        'v-mathematical': 'vMathematical',
        wordspacing: 'wordSpacing',
        'word-spacing': 'wordSpacing',
        writingmode: 'writingMode',
        'writing-mode': 'writingMode',
        xchannelselector: 'xChannelSelector',
        xheight: 'xHeight',
        'x-height': 'xHeight',
        xlinkactuate: 'xlinkActuate',
        'xlink:actuate': 'xlinkActuate',
        xlinkarcrole: 'xlinkArcrole',
        'xlink:arcrole': 'xlinkArcrole',
        xlinkhref: 'xlinkHref',
        'xlink:href': 'xlinkHref',
        xlinkrole: 'xlinkRole',
        'xlink:role': 'xlinkRole',
        xlinkshow: 'xlinkShow',
        'xlink:show': 'xlinkShow',
        xlinktitle: 'xlinkTitle',
        'xlink:title': 'xlinkTitle',
        xlinktype: 'xlinkType',
        'xlink:type': 'xlinkType',
        xmlbase: 'xmlBase',
        'xml:base': 'xmlBase',
        xmllang: 'xmlLang',
        'xml:lang': 'xmlLang',
        'xml:space': 'xmlSpace',
        xmlnsxlink: 'xmlnsXlink',
        'xmlns:xlink': 'xmlnsXlink',
        xmlspace: 'xmlSpace',
        ychannelselector: 'yChannelSelector',
        zoomandpan: 'zoomAndPan',
        // event handlers
        onblur: 'onBlur',
        onchange: 'onChange',
        onclick: 'onClick',
        oncontextmenu: 'onContextMenu',
        ondoubleclick: 'onDoubleClick',
        ondrag: 'onDrag',
        ondragend: 'onDragEnd',
        ondragenter: 'onDragEnter',
        ondragexit: 'onDragExit',
        ondragleave: 'onDragLeave',
        ondragover: 'onDragOver',
        ondragstart: 'onDragStart',
        ondrop: 'onDrop',
        onerror: 'onError',
        onfocus: 'onFocus',
        oninput: 'onInput',
        oninvalid: 'onInvalid',
        onkeydown: 'onKeyDown',
        onkeypress: 'onKeyPress',
        onkeyup: 'onKeyUp',
        onload: 'onLoad',
        onmousedown: 'onMouseDown',
        onmouseenter: 'onMouseEnter',
        onmouseleave: 'onMouseLeave',
        onmousemove: 'onMouseMove',
        onmouseout: 'onMouseOut',
        onmouseover: 'onMouseOver',
        onmouseup: 'onMouseUp',
        onscroll: 'onScroll',
        onsubmit: 'onSubmit',
        ontouchcancel: 'onTouchCancel',
        ontouchend: 'onTouchEnd',
        ontouchmove: 'onTouchMove',
        ontouchstart: 'onTouchStart',
        onwheel: 'onWheel',
    };

    var __assign$1 = (undefined && undefined.__assign) || function () {
        __assign$1 = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };
    var __read$1 = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spreadArray$1 = (undefined && undefined.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    function parseAttributes(node, reactKey) {
        var attributes = {
            key: reactKey,
        };
        /* istanbul ignore else */
        if (node instanceof Element) {
            var nodeClassNames = node.getAttribute('class');
            if (nodeClassNames) {
                attributes.className = nodeClassNames;
            }
            __spreadArray$1([], __read$1(node.attributes), false).forEach(function (d) {
                switch (d.name) {
                    // this is manually handled above, so break;
                    case 'class':
                        break;
                    case 'style':
                        attributes[d.name] = styleToObject(d.value);
                        break;
                    case 'allowfullscreen':
                    case 'allowpaymentrequest':
                    case 'async':
                    case 'autofocus':
                    case 'autoplay':
                    case 'checked':
                    case 'controls':
                    case 'default':
                    case 'defer':
                    case 'disabled':
                    case 'formnovalidate':
                    case 'hidden':
                    case 'ismap':
                    case 'itemscope':
                    case 'loop':
                    case 'multiple':
                    case 'muted':
                    case 'nomodule':
                    case 'novalidate':
                    case 'open':
                    case 'readonly':
                    case 'required':
                    case 'reversed':
                    case 'selected':
                    case 'typemustmatch':
                        attributes[possibleStandardNames[d.name] || d.name] = true;
                        break;
                    default:
                        attributes[possibleStandardNames[d.name] || d.name] = d.value;
                }
            });
        }
        return attributes;
    }
    function parseChildren(childNodeList, level, options) {
        var children = __spreadArray$1([], __read$1(childNodeList), false).map(function (node, index) {
            return convertFromNode(node, __assign$1(__assign$1({}, options), { index: index, level: level + 1 }));
        })
            .filter(Boolean);
        if (!children.length) {
            return null;
        }
        return children;
    }
    function parseName(nodeName) {
        if (/[a-z]+[A-Z]+[a-z]+/.test(nodeName)) {
            return nodeName;
        }
        return nodeName.toLowerCase();
    }
    function convertFromNode(input, options) {
        var _a;
        if (options === void 0) { options = {}; }
        if (!input || !(input instanceof Node)) {
            return null;
        }
        var _b = options.actions, actions = _b === void 0 ? [] : _b, _c = options.index, index = _c === void 0 ? 0 : _c, _d = options.level, level = _d === void 0 ? 0 : _d, randomKey = options.randomKey;
        var node = input;
        var key = "".concat(level, "-").concat(index);
        var result = [];
        if (randomKey && level === 0) {
            key = "".concat(randomString$1(), "-").concat(key);
        }
        /* istanbul ignore else */
        if (Array.isArray(actions)) {
            actions.forEach(function (action) {
                if (action.condition(node, key, level)) {
                    if (typeof action.pre === 'function') {
                        node = action.pre(node, key, level);
                        if (!(node instanceof Node)) {
                            node = input;
                            /* istanbul ignore else */
                            {
                                // eslint-disable-next-line no-console
                                console.warn('The `pre` method always must return a valid DomNode (instanceof Node) - your modification will be ignored (Hint: if you want to render a React-component, use the `post` method instead)');
                            }
                        }
                    }
                    if (typeof action.post === 'function') {
                        result.push(action.post(node, key, level));
                    }
                }
            });
        }
        if (result.length) {
            return result;
        }
        switch (node.nodeType) {
            case 1: {
                // regular dom-node
                return v$1(parseName(node.nodeName), parseAttributes(node, key), parseChildren(node.childNodes, level, options));
            }
            case 3: {
                // textnode
                var nodeText = ((_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.toString()) || '';
                /* istanbul ignore else */
                if (/^\s+$/.test(nodeText) && !/[\u00A0\u202F]/.test(nodeText)) {
                    return null;
                }
                /* istanbul ignore next */
                if (!node.parentNode) {
                    return nodeText;
                }
                var parentNodeName = node.parentNode.nodeName.toLowerCase();
                if (noTextChildNodes.includes(parentNodeName)) {
                    /* istanbul ignore else */
                    if (/\S/.test(nodeText)) {
                        // eslint-disable-next-line no-console
                        console.warn("A textNode is not allowed inside '".concat(parentNodeName, "'. Your text \"").concat(nodeText, "\" will be ignored"));
                    }
                    return null;
                }
                return nodeText;
            }
            case 8: {
                // html-comment
                return null;
            }
            /* istanbul ignore next */
            default: {
                return null;
            }
        }
    }
    function convertFromString(input, options) {
        if (options === void 0) { options = {}; }
        if (!input || typeof input !== 'string') {
            return null;
        }
        var _a = options.nodeOnly, nodeOnly = _a === void 0 ? false : _a, _b = options.selector, selector = _b === void 0 ? 'body > *' : _b, _c = options.type, type = _c === void 0 ? 'text/html' : _c;
        try {
            var parser = new DOMParser();
            var document_1 = parser.parseFromString(input, type);
            var node = document_1.querySelector(selector);
            if (!(node instanceof Node)) {
                throw new TypeError('Error parsing input');
            }
            if (nodeOnly) {
                return node;
            }
            return convertFromNode(node, options);
        }
        catch (error) {
            /* istanbul ignore else */
            {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        }
        return null;
    }
    function convert(input, options) {
        if (options === void 0) { options = {}; }
        if (typeof input === 'string') {
            return convertFromString(input, options);
        }
        if (input instanceof Node) {
            return convertFromNode(input, options);
        }
        return null;
    }

    var exenv = {exports: {}};

    /*!
      Copyright (c) 2015 Jed Watson.
      Based on code that is Copyright 2013-2015, Facebook, Inc.
      All rights reserved.
    */

    (function (module) {
    /* global define */

    (function () {

    	var canUseDOM = !!(
    		typeof window !== 'undefined' &&
    		window.document &&
    		window.document.createElement
    	);

    	var ExecutionEnvironment = {

    		canUseDOM: canUseDOM,

    		canUseWorkers: typeof Worker !== 'undefined',

    		canUseEventListeners:
    			canUseDOM && !!(window.addEventListener || window.attachEvent),

    		canUseViewport: canUseDOM && !!window.screen

    	};

    	if (module.exports) {
    		module.exports = ExecutionEnvironment;
    	} else {
    		window.ExecutionEnvironment = ExecutionEnvironment;
    	}

    }());
    }(exenv));

    var STATUS = {
        FAILED: 'failed',
        LOADED: 'loaded',
        LOADING: 'loading',
        PENDING: 'pending',
        READY: 'ready',
        UNSUPPORTED: 'unsupported',
    };
    function canUseDOM() {
        return exenv.exports.canUseDOM;
    }
    function isSupportedEnvironment() {
        return supportsInlineSVG() && typeof window !== 'undefined' && window !== null;
    }
    function supportsInlineSVG() {
        /* istanbul ignore next */
        if (!document) {
            return false;
        }
        var div = document.createElement('div');
        div.innerHTML = '<svg />';
        var svg = div.firstChild;
        return !!svg && svg.namespaceURI === 'http://www.w3.org/2000/svg';
    }
    function randomCharacter(character) {
        return character[Math.floor(Math.random() * character.length)];
    }
    function randomString(length) {
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        var numbers = '1234567890';
        var charset = "".concat(letters).concat(letters.toUpperCase()).concat(numbers);
        var R = '';
        for (var index = 0; index < length; index++) {
            R += randomCharacter(charset);
        }
        return R;
    }
    /**
     *  Remove properties from an object
     */
    function omit(input) {
        var filter = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            filter[_i - 1] = arguments[_i];
        }
        var output = {};
        for (var key in input) {
            /* istanbul ignore else */
            if ({}.hasOwnProperty.call(input, key)) {
                if (!filter.includes(key)) {
                    output[key] = input[key];
                }
            }
        }
        return output;
    }

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __assign = (undefined && undefined.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __read = (undefined && undefined.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    var cacheStore = Object.create(null);
    var InlineSVG = /** @class */ (function (_super) {
        __extends(InlineSVG, _super);
        function InlineSVG(props) {
            var _this = _super.call(this, props) || this;
            _this.isActive = false;
            _this.handleLoad = function (content) {
                /* istanbul ignore else */
                if (_this.isActive) {
                    _this.setState({
                        content: content,
                        status: STATUS.LOADED,
                    }, _this.getElement);
                }
            };
            _this.handleError = function (error) {
                var onError = _this.props.onError;
                var status = error.message === 'Browser does not support SVG' ? STATUS.UNSUPPORTED : STATUS.FAILED;
                /* istanbul ignore else */
                if (_this.isActive) {
                    _this.setState({ status: status }, function () {
                        /* istanbul ignore else */
                        if (typeof onError === 'function') {
                            onError(error);
                        }
                    });
                }
            };
            _this.request = function () {
                var _a = _this.props, cacheRequests = _a.cacheRequests, fetchOptions = _a.fetchOptions, src = _a.src;
                try {
                    if (cacheRequests) {
                        cacheStore[src] = { content: '', status: STATUS.LOADING };
                    }
                    return fetch(src, fetchOptions)
                        .then(function (response) {
                        var contentType = response.headers.get('content-type');
                        var _a = __read((contentType || '').split(/ ?; ?/), 1), fileType = _a[0];
                        if (response.status > 299) {
                            throw new Error('Not found');
                        }
                        if (!['image/svg+xml', 'text/plain'].some(function (d) { return fileType.includes(d); })) {
                            throw new Error("Content type isn't valid: ".concat(fileType));
                        }
                        return response.text();
                    })
                        .then(function (content) {
                        var currentSrc = _this.props.src;
                        // the current src don't match the previous one, skipping...
                        if (src !== currentSrc) {
                            if (cacheStore[src].status === STATUS.LOADING) {
                                delete cacheStore[src];
                            }
                            return;
                        }
                        _this.handleLoad(content);
                        /* istanbul ignore else */
                        if (cacheRequests) {
                            var cache = cacheStore[src];
                            /* istanbul ignore else */
                            if (cache) {
                                cache.content = content;
                                cache.status = STATUS.LOADED;
                            }
                        }
                    })
                        .catch(function (error) {
                        _this.handleError(error);
                        /* istanbul ignore else */
                        if (cacheRequests) {
                            var cache = cacheStore[src];
                            /* istanbul ignore else */
                            if (cache) {
                                delete cacheStore[src];
                            }
                        }
                    });
                }
                catch (error) {
                    return _this.handleError(new Error(error.message));
                }
            };
            _this.state = {
                content: '',
                element: null,
                hasCache: !!props.cacheRequests && !!cacheStore[props.src],
                status: STATUS.PENDING,
            };
            _this.hash = props.uniqueHash || randomString(8);
            return _this;
        }
        InlineSVG.prototype.componentDidMount = function () {
            this.isActive = true;
            if (!canUseDOM()) {
                return;
            }
            var status = this.state.status;
            var src = this.props.src;
            try {
                /* istanbul ignore else */
                if (status === STATUS.PENDING) {
                    /* istanbul ignore else */
                    if (!isSupportedEnvironment()) {
                        throw new Error('Browser does not support SVG');
                    }
                    /* istanbul ignore else */
                    if (!src) {
                        throw new Error('Missing src');
                    }
                    this.load();
                }
            }
            catch (error) {
                this.handleError(error);
            }
        };
        InlineSVG.prototype.componentDidUpdate = function (previousProps, previousState) {
            if (!canUseDOM()) {
                return;
            }
            var _a = this.state, hasCache = _a.hasCache, status = _a.status;
            var _b = this.props, onLoad = _b.onLoad, src = _b.src;
            if (previousState.status !== STATUS.READY && status === STATUS.READY) {
                /* istanbul ignore else */
                if (onLoad) {
                    onLoad(src, hasCache);
                }
            }
            if (previousProps.src !== src) {
                if (!src) {
                    this.handleError(new Error('Missing src'));
                    return;
                }
                this.load();
            }
        };
        InlineSVG.prototype.componentWillUnmount = function () {
            this.isActive = false;
        };
        InlineSVG.prototype.getNode = function () {
            var _a = this.props, description = _a.description, title = _a.title;
            try {
                var svgText = this.processSVG();
                var node = convert(svgText, { nodeOnly: true });
                if (!node || !(node instanceof SVGSVGElement)) {
                    throw new Error('Could not convert the src to a DOM Node');
                }
                var svg = this.updateSVGAttributes(node);
                if (description) {
                    var originalDesc = svg.querySelector('desc');
                    if (originalDesc && originalDesc.parentNode) {
                        originalDesc.parentNode.removeChild(originalDesc);
                    }
                    var descElement = document.createElement('desc');
                    descElement.innerHTML = description;
                    svg.prepend(descElement);
                }
                if (title) {
                    var originalTitle = svg.querySelector('title');
                    if (originalTitle && originalTitle.parentNode) {
                        originalTitle.parentNode.removeChild(originalTitle);
                    }
                    var titleElement = document.createElement('title');
                    titleElement.innerHTML = title;
                    svg.prepend(titleElement);
                }
                return svg;
            }
            catch (error) {
                return this.handleError(error);
            }
        };
        InlineSVG.prototype.getElement = function () {
            try {
                var node = this.getNode();
                var element = convert(node);
                if (!element || !en(element)) {
                    throw new Error('Could not convert the src to a React element');
                }
                this.setState({
                    element: element,
                    status: STATUS.READY,
                });
            }
            catch (error) {
                this.handleError(new Error(error.message));
            }
        };
        InlineSVG.prototype.load = function () {
            var _this = this;
            /* istanbul ignore else */
            if (this.isActive) {
                this.setState({
                    content: '',
                    element: null,
                    status: STATUS.LOADING,
                }, function () {
                    var _a = _this.props, cacheRequests = _a.cacheRequests, src = _a.src;
                    var cache = cacheRequests && cacheStore[src];
                    if (cache && cache.status === STATUS.LOADED) {
                        _this.handleLoad(cache.content);
                        return;
                    }
                    var dataURI = src.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);
                    var inlineSrc;
                    if (dataURI) {
                        inlineSrc = dataURI[1] ? window.atob(dataURI[2]) : decodeURIComponent(dataURI[2]);
                    }
                    else if (src.includes('<svg')) {
                        inlineSrc = src;
                    }
                    if (inlineSrc) {
                        _this.handleLoad(inlineSrc);
                        return;
                    }
                    _this.request();
                });
            }
        };
        InlineSVG.prototype.updateSVGAttributes = function (node) {
            var _this = this;
            var _a = this.props, _b = _a.baseURL, baseURL = _b === void 0 ? '' : _b, uniquifyIDs = _a.uniquifyIDs;
            var replaceableAttributes = ['id', 'href', 'xlink:href', 'xlink:role', 'xlink:arcrole'];
            var linkAttributes = ['href', 'xlink:href'];
            var isDataValue = function (name, value) {
                return linkAttributes.includes(name) && (value ? !value.includes('#') : false);
            };
            if (!uniquifyIDs) {
                return node;
            }
            __spreadArray([], __read(node.children), false).map(function (d) {
                if (d.attributes && d.attributes.length) {
                    var attributes_1 = Object.values(d.attributes).map(function (a) {
                        var attribute = a;
                        var match = a.value.match(/url\((.*?)\)/);
                        if (match && match[1]) {
                            attribute.value = a.value.replace(match[0], "url(".concat(baseURL).concat(match[1], "__").concat(_this.hash, ")"));
                        }
                        return attribute;
                    });
                    replaceableAttributes.forEach(function (r) {
                        var attribute = attributes_1.find(function (a) { return a.name === r; });
                        if (attribute && !isDataValue(r, attribute.value)) {
                            attribute.value = "".concat(attribute.value, "__").concat(_this.hash);
                        }
                    });
                }
                if (d.children.length) {
                    return _this.updateSVGAttributes(d);
                }
                return d;
            });
            return node;
        };
        InlineSVG.prototype.processSVG = function () {
            var content = this.state.content;
            var preProcessor = this.props.preProcessor;
            if (preProcessor) {
                return preProcessor(content);
            }
            return content;
        };
        InlineSVG.prototype.render = function () {
            var _a = this.state, element = _a.element, status = _a.status;
            var _b = this.props, _c = _b.children, children = _c === void 0 ? null : _c, innerRef = _b.innerRef, _d = _b.loader, loader = _d === void 0 ? null : _d;
            var elementProps = omit(this.props, 'baseURL', 'cacheRequests', 'children', 'description', 'fetchOptions', 'innerRef', 'loader', 'onError', 'onLoad', 'preProcessor', 'src', 'title', 'uniqueHash', 'uniquifyIDs');
            if (!canUseDOM()) {
                return loader;
            }
            if (element) {
                return rn(element, __assign({ ref: innerRef }, elementProps));
            }
            if ([STATUS.UNSUPPORTED, STATUS.FAILED].includes(status)) {
                return children;
            }
            return loader;
        };
        InlineSVG.defaultProps = {
            cacheRequests: true,
            uniquifyIDs: false,
        };
        return InlineSVG;
    }(E));
    var SVG = InlineSVG;

    var css_248z$9 = ".footer-toggle-button_footer-toggle-button__k6xDH {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: left;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 4px 4px 0 0;\n  background: var(--ca-primary-color);\n  color: var(--ca-primary-text-color);\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.25px;\n  position: fixed;\n  bottom: 0;\n  left: auto;\n  right: 20px;\n  border: none;\n  cursor: pointer;\n  max-width: calc(100% - 40px);\n}\n.footer-toggle-button_footer-toggle-button__k6xDH > svg {\n  display: flex;\n  flex-shrink: 0;\n}";
    var styles$9 = {"footer-toggle-button":"footer-toggle-button_footer-toggle-button__k6xDH"};
    styleInject(css_248z$9);

    function FooterToggleButton(_a) {
        var iconUrl = _a.iconUrl, children = _a.children, otherProps = __rest$2(_a, ["iconUrl", "children"]);
        return (ReactDOM.createElement("button", __assign$4({}, otherProps, { type: "button", className: styles$9['footer-toggle-button'] }),
            ReactDOM.createElement(SVG, { src: iconUrl, width: "16", height: "16" }),
            children));
    }

    var css_248z$8 = ".loader_loader__oOS7Q {\n  -webkit-animation: loader_loader-rotate__0enFq 800ms infinite cubic-bezier(0.2, 0.4, 0.4, 0.4) forwards;\n          animation: loader_loader-rotate__0enFq 800ms infinite cubic-bezier(0.2, 0.4, 0.4, 0.4) forwards;\n}\n\n@-webkit-keyframes loader_loader-rotate__0enFq {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loader_loader-rotate__0enFq {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}";
    var styles$8 = {"loader":"loader_loader__oOS7Q","loader-rotate":"loader_loader-rotate__0enFq"};
    styleInject(css_248z$8);

    function Loader(_a) {
        var size = _a.size, color = _a.color;
        var getAsset = useAssetFetcher();
        return (ReactDOM.createElement(SVG, { src: getAsset('icon_loading'), width: size, height: size, className: styles$8.loader, style: { color: color } }));
    }
    Loader.defaultProps = {
        size: 24,
        color: '#2D3239',
    };

    var EmojiMap = {
        '0:10': ["\uD83D\uDE21", "\uD83D\uDE24", "\u2639\uFE0F", "\uD83D\uDE41", "\uD83D\uDE15", "\uD83D\uDE10", "\uD83D\uDE42", "\uD83D\uDE03", "\uD83D\uDE01", "\uD83D\uDE0A", "\uD83D\uDE0D"],
        '1:10': ["\uD83D\uDE21", "\uD83D\uDE24", "\uD83D\uDE41", "\uD83D\uDE15", "\uD83D\uDE10", "\uD83D\uDE42", "\uD83D\uDE03", "\uD83D\uDE01", "\uD83D\uDE0A", "\uD83D\uDE0D"],
        '1:7': ["\uD83D\uDE21", "\uD83D\uDE24", "\uD83D\uDE41", "\uD83D\uDE10", "\uD83D\uDE03", "\uD83D\uDE0A", "\uD83D\uDE0D"],
        '1:6': ["\uD83D\uDE21", "\uD83D\uDE24", "\uD83D\uDE15", "\uD83D\uDE42", "\uD83D\uDE0A", "\uD83D\uDE0D"],
        '1:5': ["\uD83D\uDE21", "\uD83D\uDE24", "\uD83D\uDE10", "\uD83D\uDE0A", "\uD83D\uDE0D"],
    };

    var css_248z$7 = ".rating_rating-container__Tj2-D {\n  display: flex;\n  flex-direction: column;\n}\n.rating_rating-container__Tj2-D .rating_labels__nLkgq {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2d3239;\n  gap: 10px;\n}\n.rating_rating-container__Tj2-D .rating_labels__nLkgq span:nth-child(2) {\n  text-align: right;\n}\n\n.rating_rating__M-1m9 {\n  display: flex;\n  gap: 4px;\n}\n\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU {\n  width: 32px;\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio],\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span,\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span {\n  text-align: center;\n  line-height: 32px;\n  border-radius: 4px;\n  z-index: 0;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  color: #2d3239;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span::after {\n  content: \"\";\n  display: block;\n  box-sizing: border-box;\n  max-width: 100%;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  z-index: -1;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span:not(.rating_emoji__DRdop) {\n  background: #f6f7f9;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span:not(:empty):not(.rating_emoji__DRdop)::after {\n  border-color: #e2e5e9;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU .rating_emoji__DRdop {\n  font-family: serif;\n  font-size: 20px;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio] {\n  /* Remove most all native input styles */\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  /* For iOS < 15 */\n  background-color: transparent;\n  /* Not removed via appearance */\n  margin: 0;\n  outline: none;\n  z-index: 1;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:focus-visible + span::after {\n  border: 2px solid var(--ca-primary-background-400);\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:hover + span::after {\n  background: #e2e5e9;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:focus + span::after {\n  border: 2px solid var(--ca-primary-background-400);\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:checked ~ svg path {\n  fill: var(--ca-primary-background-300);\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:checked + span::after {\n  background: var(--ca-primary-background-300);\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:checked + span:not(:empty)::after {\n  border: 0;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span:empty,\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU span:empty::after {\n  background: transparent !important;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU .rating_rating-icon-default__29M74,\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU .rating_rating-icon-hover__ME6tu {\n  color: #9ba5b0;\n  z-index: 0;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU .rating_rating-icon-hover__ME6tu,\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:hover ~ .rating_rating-icon-default__29M74,\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:checked ~ .rating_rating-icon-default__29M74 {\n  display: none;\n}\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:hover ~ .rating_rating-icon-hover__ME6tu,\n.rating_rating__M-1m9 .rating_radiobutton__LV-CU input[type=radio]:checked ~ .rating_rating-icon-hover__ME6tu {\n  display: block;\n}";
    var styles$7 = {"rating-container":"rating_rating-container__Tj2-D","labels":"rating_labels__nLkgq","rating":"rating_rating__M-1m9","radiobutton":"rating_radiobutton__LV-CU","emoji":"rating_emoji__DRdop","rating-icon-default":"rating_rating-icon-default__29M74","rating-icon-hover":"rating_rating-icon-hover__ME6tu"};
    styleInject(css_248z$7);

    function Rating(_a) {
        var min = _a.minRating, max = _a.maxRating, minLabel = _a.minLabel, maxLabel = _a.maxLabel, icon = _a.icon, validation = _a.validation, name = _a.name, otherProps = __rest$2(_a, ["minRating", "maxRating", "minLabel", "maxLabel", "icon", "validation", "name"]);
        var values = _(function () { return new Array(max + 1 - min).fill(null)
            .map(function (_, idx) { return idx + min; }); }, [min, max]);
        var register = useFormContext().register;
        var params = useSDKContext().params;
        var ratingType = (params || {}).ratingType;
        var required = validation.required;
        var currentValue = otherProps.value;
        var showEmojiValue;
        if (ratingType === RatingType.Emoji && "".concat(min, ":").concat(max) in EmojiMap) {
            showEmojiValue = EmojiMap["".concat(min, ":").concat(max)];
        }
        return (ReactDOM.createElement("div", { className: styles$7['rating-container'] },
            ReactDOM.createElement("div", { className: styles$7.rating }, values.map(function (value, idx) {
                var props = {
                    'aria-label': "".concat(value),
                };
                if (idx === 0) {
                    props['aria-label'] = minLabel;
                }
                else if (idx === values.length - 1) {
                    props['aria-label'] = maxLabel;
                }
                var displayValue = value;
                if (icon) {
                    displayValue = undefined;
                }
                else if (showEmojiValue) {
                    displayValue = showEmojiValue[idx];
                }
                return (ReactDOM.createElement("div", { className: styles$7.radiobutton, key: "".concat(name, "_").concat(idx) },
                    ReactDOM.createElement("input", __assign$4({}, register(name, { required: required ? 'validation.choice.required' : false }), { type: "radio", value: value }, props, { defaultChecked: "".concat(value) === currentValue })),
                    ReactDOM.createElement("span", { className: showEmojiValue ? styles$7.emoji : '' }, displayValue),
                    icon && ReactDOM.createElement(SVG, { className: styles$7['rating-icon-default'], src: icon.default, width: "20", height: "20" }),
                    icon && ReactDOM.createElement(SVG, { className: styles$7['rating-icon-hover'], src: icon.hover, width: "20", height: "20" })));
            })),
            ReactDOM.createElement("div", { className: styles$7.labels },
                ReactDOM.createElement("span", null, minLabel),
                ReactDOM.createElement("span", null, maxLabel))));
    }
    Rating.defaultProps = {
        icon: null,
    };

    var css_248z$6 = ".inline-error_inline-error__s8GyB {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n  color: #d94d53;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 4px;\n  margin-top: 4px;\n}\n.inline-error_inline-error__s8GyB svg {\n  display: flex;\n  flex-shrink: 0;\n}";
    var styles$6 = {"inline-error":"inline-error_inline-error__s8GyB"};
    styleInject(css_248z$6);

    function InlineError(_a) {
        var children = _a.children;
        var getAsset = useAssetFetcher();
        return (ReactDOM.createElement("span", { className: styles$6['inline-error'] },
            ReactDOM.createElement(SVG, { src: getAsset('icon_error'), width: "16", height: "20" }),
            children));
    }

    function useIconSet(ratingType) {
        var grabAsset = useAssetFetcher();
        var icons = _(function () {
            switch (ratingType) {
                case RatingType.Circle:
                    return ({
                        default: grabAsset('icon_circle'),
                        hover: grabAsset('icon_circle_fill_svg'),
                    });
                case RatingType.Star:
                    return ({
                        default: grabAsset('icon_star'),
                        hover: grabAsset('icon_star_fill_svg'),
                    });
            }
            return undefined;
        }, [grabAsset, ratingType]);
        return icons;
    }
    function RatingQuestion(_a) {
        var question = _a.question, answer = _a.answer;
        var params = useSDKContext().params;
        var ratingType = (params || {}).ratingType;
        var id = question.id, rating_scale = question.rating_scale, validation = question.validation;
        var min = rating_scale.min, max = rating_scale.max;
        var name = "".concat(id);
        var _b = useFormContext(), setValue = _b.setValue, _c = _b.formState, errors = _c.errors, isValid = _c.isValid;
        var t = useTranslations();
        y(function () {
            setValue(name, answer);
        }, [answer, name, setValue]);
        var error = errors[name];
        var errorMessage = !isValid && error ? t(error.message) : '';
        var icon = useIconSet(ratingType);
        return (ReactDOM.createElement(ReactDOM.Fragment, null,
            ReactDOM.createElement(Rating, { name: name, icon: icon, validation: validation, minRating: parseInt(min.value, 10), maxRating: parseInt(max.value, 10), minLabel: min.label, maxLabel: max.label, value: answer }),
            errorMessage && ReactDOM.createElement(InlineError, null, errorMessage)));
    }

    var css_248z$5 = ".text_textarea__np1Mn {\n  background: #f6f7f9;\n  border: 1px solid #e2e5e9;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2d3239;\n  width: 100%;\n  height: 52px;\n  resize: none;\n  outline: none;\n}\n.text_textarea__np1Mn:focus {\n  outline: 2px solid #3b62b2;\n}\n.text_textarea__np1Mn:invalid, .text_textarea__np1Mn.text_error__TIwil {\n  outline: 2px solid #d94d53;\n}";
    var styles$5 = {"textarea":"text_textarea__np1Mn","error":"text_error__TIwil"};
    styleInject(css_248z$5);

    var Text = ReactDOM.forwardRef(function (_a, ref) {
        var error = _a.error, props = __rest$2(_a, ["error"]);
        return (ReactDOM.createElement("textarea", __assign$4({ ref: ref, autoComplete: "off" }, props, { className: "".concat(styles$5.textarea, " ").concat(error ? styles$5.error : '') })));
    });
    Text.displayName = 'Text';
    Text.defaultProps = {
        error: false,
    };

    function TextQuestion(_a) {
        var question = _a.question, answer = _a.answer;
        var t = useTranslations();
        var _b = useFormContext(), register = _b.register, setValue = _b.setValue, _c = _b.formState, errors = _c.errors, isValid = _c.isValid;
        var id = question.id, validation = question.validation;
        var min_characters = validation.min_characters, required = validation.required;
        var name = "".concat(id);
        var options = {
            required: required ? 'validation.text.required' : false,
            setValueAs: function (value) { return value.trim(); },
            onChange: function (e) {
                e.target.value = e.target.value.trimStart();
            },
            onBlur: function (e) {
                e.target.value = e.target.value.trim();
            },
        };
        if (min_characters) {
            options.minLength = {
                value: min_characters,
                message: 'validation.text.too_short',
            };
        }
        y(function () {
            setValue(name, answer !== null && answer !== void 0 ? answer : '');
        }, [id, answer, name, setValue]);
        var error = errors[name];
        var errorMessage = !isValid && error ? t(error.message, { min_characters: min_characters }) : '';
        return (ReactDOM.createElement(ReactDOM.Fragment, null,
            ReactDOM.createElement(Text, __assign$4({}, register(name, options), { defaultValue: answer, error: !isValid && !!errorMessage })),
            !isValid && errorMessage && ReactDOM.createElement(InlineError, null, errorMessage)));
    }

    var css_248z$4 = ".check-box_checkbox-container__4IN4s label {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2d3239;\n}\n\n.check-box_checkbox-container__4IN4s .check-box_checkbox__U4yWB {\n  position: relative;\n  width: 100%;\n  max-width: 16px;\n  height: 16px;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox__U4yWB .check-box_checkbox-input__tHSJ-,\n.check-box_checkbox-container__4IN4s .check-box_checkbox__U4yWB .check-box_checkbox-input-checker__VrN-1 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.check-box_checkbox-container__4IN4s {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 4px 0;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ- {\n  /* Remove most all native input styles */\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  /* For iOS < 15 */\n  background-color: var(--form-background);\n  /* Not removed via appearance */\n  margin: 0;\n  outline: 0 !important;\n  z-index: 1;\n}\n.check-box_checkbox-container__4IN4s.check-box_multi-option-hover__nvp9l .check-box_checkbox-input__tHSJ- ~ .check-box_checkbox-input-checker__VrN-1, .check-box_checkbox-container__4IN4s.check-box_multi-option-hover__nvp9l.check-box_checkbox-checked__HpSSN .check-box_checkbox-input-checker__VrN-1 {\n  background: var(--ca-primary-background-400);\n  border: 0;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input-checker__VrN-1 {\n  background: #f6f7f9;\n  border-radius: 4px;\n  z-index: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e2e5e9;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input-checkmark__enjw7 {\n  width: 8.62px;\n  height: 6px;\n  z-index: 0;\n  color: #fff;\n  display: none;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:active ~ .check-box_checkbox-input-checker__VrN-1 {\n  background: var(--ca-primary-background-600);\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:hover ~ .check-box_checkbox-input-checker__VrN-1 {\n  background: #e2e5e9;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:checked ~ .check-box_checkbox-input-checker__VrN-1, .check-box_checkbox-container__4IN4s.check-box_checkbox-checked__HpSSN .check-box_checkbox-input-checker__VrN-1 {\n  background: var(--ca-primary-color);\n  border: 1px solid var(--ca-primary-color);\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:hover:checked ~ .check-box_checkbox-input-checker__VrN-1, .check-box_checkbox-container__4IN4s.check-box_checkbox-checked__HpSSN:hover .check-box_checkbox-input-checker__VrN-1 {\n  background: var(--ca-primary-background-400);\n  border: 0;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:focus ~ .check-box_checkbox-input-checker__VrN-1 {\n  outline: 1px solid var(--ca-primary-background-400);\n  border: 1px solid var(--ca-primary-background-400);\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:checked ~ .check-box_checkbox-input-checker__VrN-1 .check-box_checkbox-input-checkmark__enjw7, .check-box_checkbox-container__4IN4s.check-box_checkbox-checked__HpSSN .check-box_checkbox-input-checker__VrN-1 .check-box_checkbox-input-checkmark__enjw7 {\n  display: block;\n}\n.check-box_checkbox-container__4IN4s.check-box_checkbox-checked__HpSSN .check-box_checkbox-input__tHSJ-:hover ~ .check-box_checkbox-input-checker__VrN-1 {\n  background: var(--ca-primary-background-400);\n  border-color: var(--ca-primary-background-400);\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:invalid ~ .check-box_checkbox-input-checker__VrN-1, .check-box_checkbox-container__4IN4s.check-box_checkbox-error__XnIwP .check-box_checkbox-input-checker__VrN-1 {\n  outline: 1px solid #d94d53 !important;\n  border: 1px solid #d94d53 !important;\n}\n.check-box_checkbox-container__4IN4s .check-box_checkbox-input__tHSJ-:disabled ~ .check-box_checkbox-input-checker__VrN-1 {\n  background: #f1f2f4 !important;\n  border-color: #f1f2f4 !important;\n}\n.check-box_checkbox-container__4IN4s.check-box_checkbox-checked__HpSSN .check-box_checkbox-input__tHSJ-:disabled ~ .check-box_checkbox-input-checker__VrN-1 .check-box_checkbox-input-checkmark__enjw7 {\n  color: #c6cbd2;\n}";
    var styles$4 = {"checkbox-container":"check-box_checkbox-container__4IN4s","checkbox":"check-box_checkbox__U4yWB","checkbox-input":"check-box_checkbox-input__tHSJ-","checkbox-input-checker":"check-box_checkbox-input-checker__VrN-1","multi-option-hover":"check-box_multi-option-hover__nvp9l","checkbox-checked":"check-box_checkbox-checked__HpSSN","checkbox-input-checkmark":"check-box_checkbox-input-checkmark__enjw7","checkbox-error":"check-box_checkbox-error__XnIwP"};
    styleInject(css_248z$4);

    function CheckMark(props) {
        return (ReactDOM.createElement("svg", __assign$4({ width: "10", height: "7" }, props, { viewBox: "0 0 10 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" }),
            ReactDOM.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.28033 0.59467C9.57322 0.887563 9.57322 1.36244 9.28033 1.65533L4.78033 6.15533C4.48744 6.44822 4.01256 6.44822 3.71967 6.15533L1.09467 3.53033C0.801777 3.23744 0.801777 2.76256 1.09467 2.46967C1.38756 2.17678 1.86244 2.17678 2.15533 2.46967L4.25 4.56434L8.21967 0.59467C8.51256 0.301777 8.98744 0.301777 9.28033 0.59467Z", fill: "currentColor" })));
    }
    var CheckBox = ReactDOM.forwardRef(function (_a, ref) {
        var label = _a.label, showLabel = _a.showLabel, checked = _a.checked, error = _a.error, props = __rest$2(_a, ["label", "showLabel", "checked", "error"]);
        var otherProps = {};
        var id = _(function () { return "checkbox-".concat(genID()); }, []);
        if (!showLabel && label) {
            otherProps['aria-label'] = label;
        }
        return (ReactDOM.createElement("div", { className: "".concat(styles$4['checkbox-container'], " ").concat(checked ? styles$4['checkbox-checked'] : '', " ").concat(error ? styles$4['checkbox-error'] : '', " ").concat(styles$4[props.hoverClassName]) },
            ReactDOM.createElement("div", { className: styles$4.checkbox },
                label && ReactDOM.createElement("input", __assign$4({ id: id, ref: ref, className: styles$4['checkbox-input'], type: "checkbox" }, props, otherProps)),
                ReactDOM.createElement("span", { className: styles$4['checkbox-input-checker'] },
                    ReactDOM.createElement(CheckMark, { className: styles$4['checkbox-input-checkmark'] }))),
            showLabel && label && ReactDOM.createElement("label", { htmlFor: id }, label)));
    });
    CheckBox.displayName = 'CheckBox';
    CheckBox.defaultProps = {
        showLabel: true,
        label: '',
        error: false,
        checked: false,
        hoverClassName: '',
    };

    var css_248z$3 = ".radio-box_checkbox-container__Kz9wW label {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2d3239;\n}\n\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox__N8pwa {\n  position: relative;\n  width: 16px;\n  height: 16px;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox__N8pwa .radio-box_checkbox-input__Ck-i6,\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox__N8pwa .radio-box_checkbox-input-checker__f9tdv {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.radio-box_checkbox-container__Kz9wW {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 4px 0;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6 {\n  /* Remove most all native input styles */\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  /* For iOS < 15 */\n  background-color: var(--form-background);\n  /* Not removed via appearance */\n  margin: 0;\n  outline: 0 !important;\n  z-index: 1;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input-checker__f9tdv {\n  background: #f6f7f9;\n  border-radius: 50%;\n  z-index: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #e2e5e9;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input-checkmark__jy1EX {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n  z-index: 0;\n  display: none;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:active ~ .radio-box_checkbox-input-checker__f9tdv {\n  background: var(--ca-primary-background-600);\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:hover ~ .radio-box_checkbox-input-checker__f9tdv {\n  background: #e2e5e9;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:checked ~ .radio-box_checkbox-input-checker__f9tdv, .radio-box_checkbox-container__Kz9wW.radio-box_checkbox-checked__6jVaY .radio-box_checkbox-input-checker__f9tdv {\n  background: var(--ca-primary-color);\n  border: 1px solid var(--ca-primary-color);\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:focus ~ .radio-box_checkbox-input-checker__f9tdv {\n  outline: 1px solid var(--ca-primary-background-400);\n  border: 1px solid var(--ca-primary-background-400);\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:checked ~ .radio-box_checkbox-input-checker__f9tdv .radio-box_checkbox-input-checkmark__jy1EX, .radio-box_checkbox-container__Kz9wW.radio-box_checkbox-checked__6jVaY .radio-box_checkbox-input-checker__f9tdv .radio-box_checkbox-input-checkmark__jy1EX {\n  display: block;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:hover:checked ~ .radio-box_checkbox-input-checker__f9tdv, .radio-box_checkbox-container__Kz9wW.radio-box_checkbox-checked__6jVaY:hover .radio-box_checkbox-input-checker__f9tdv {\n  background: var(--ca-primary-background-400);\n  border: 0;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:invalid ~ .radio-box_checkbox-input-checker__f9tdv, .radio-box_checkbox-container__Kz9wW.radio-box_checkbox-error__IKQaJ .radio-box_checkbox-input-checker__f9tdv {\n  outline: 1px solid #d94d53 !important;\n  border: 1px solid #d94d53 !important;\n}\n.radio-box_checkbox-container__Kz9wW .radio-box_checkbox-input__Ck-i6:disabled ~ .radio-box_checkbox-input-checker__f9tdv {\n  background: #f1f2f4 !important;\n  border-color: #f1f2f4 !important;\n}\n.radio-box_checkbox-container__Kz9wW.radio-box_checkbox-checked__6jVaY .radio-box_checkbox-input__Ck-i6:disabled ~ .radio-box_checkbox-input-checker__f9tdv .radio-box_checkbox-input-checkmark__jy1EX {\n  background: #c6cbd2;\n}";
    var styles$3 = {"checkbox-container":"radio-box_checkbox-container__Kz9wW","checkbox":"radio-box_checkbox__N8pwa","checkbox-input":"radio-box_checkbox-input__Ck-i6","checkbox-input-checker":"radio-box_checkbox-input-checker__f9tdv","checkbox-input-checkmark":"radio-box_checkbox-input-checkmark__jy1EX","checkbox-checked":"radio-box_checkbox-checked__6jVaY","checkbox-error":"radio-box_checkbox-error__IKQaJ"};
    styleInject(css_248z$3);

    var RadioBox = ReactDOM.forwardRef(function (_a, ref) {
        var label = _a.label, showLabel = _a.showLabel, checked = _a.checked, error = _a.error, props = __rest$2(_a, ["label", "showLabel", "checked", "error"]);
        var otherProps = {};
        var id = _(function () { return "checkbox-".concat(genID()); }, []);
        if (!showLabel && label) {
            otherProps['aria-label'] = label;
        }
        return (ReactDOM.createElement("div", { className: "".concat(styles$3['checkbox-container'], " ").concat(checked ? styles$3['checkbox-checked'] : '', " ").concat(error ? styles$3['checkbox-error'] : '') },
            ReactDOM.createElement("div", { className: styles$3.checkbox },
                label && ReactDOM.createElement("input", __assign$4({ id: id, ref: ref, className: styles$3['checkbox-input'], type: "radio" }, props, otherProps)),
                ReactDOM.createElement("span", { className: styles$3['checkbox-input-checker'] },
                    ReactDOM.createElement("span", { className: styles$3['checkbox-input-checkmark'] }))),
            showLabel && label && ReactDOM.createElement("label", { htmlFor: id }, label)));
    });
    RadioBox.displayName = 'RadioBox';
    RadioBox.defaultProps = {
        showLabel: true,
        label: '',
        error: false,
        checked: false,
    };

    function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

    function groupOptions(options) {
      const nextOptions = [];
      options.forEach((option, i) => {
        if ('groupId' in option) {
          const nextOption = _extends$4({}, option);

          const groupIndex = nextOptions.findIndex(el => 'groupId' in el && el.groupId === nextOption.groupId);
          nextOption.index = i;

          if (groupIndex > -1) {
            nextOptions[groupIndex].items.push(nextOption);
          } else {
            nextOptions.push({
              items: [nextOption],
              groupId: option.groupId,
              type: 'group',
              name: option.groupName
            });
          }
        } else {
          nextOptions.push(option);
        }
      });
      return nextOptions;
    }

    function valueToArray(value) {
      if (!value) {
        return [];
      }

      return !Array.isArray(value) ? [value] : [...value];
    }

    function isOption(option) {
      return option !== null && typeof option === 'object' && 'value' in option && 'name' in option;
    }

    function getOption(value, options) {
      if (isOption(value)) {
        return value;
      }

      let newValue = value;

      if (newValue === null && options.length) {
        let i = 0;
        let defaultOption = options[0];

        while (defaultOption && defaultOption.disabled) {
          if (options.length < i) {
            defaultOption = false;
          }

          i += 1;
          defaultOption = options[i];
        }

        if (defaultOption) {
          newValue = defaultOption.value;
        }
      } // eslint-disable-next-line eqeqeq


      return options.find(o => o.value == newValue);
    }

    function getOptions(value, oldValue, options, multiple) {
      if (!multiple) {
        const newOption = getOption(value, options);

        if (newOption) {
          return newOption;
        }

        return oldValue;
      }

      const oldOptions = valueToArray(oldValue);
      const newOptions = valueToArray(value).map(o => getOption(o, options)).filter(o => o !== null && o !== undefined);

      if (!oldOptions.length) {
        return newOptions;
      }

      if (!newOptions.length) {
        return oldOptions;
      }

      newOptions.forEach(newOption => {
        const optionIndex = oldOptions.findIndex(o => o.value == newOption.value);

        if (optionIndex >= 0) {
          oldOptions.splice(optionIndex, 1);
        } else {
          oldOptions.push(newOption);
        }
      });
      return oldOptions;
    }

    function getDisplayValue(value) {
      if (Array.isArray(value)) {
        return value.map(o => isOption(o) && o.name).join(', ');
      }

      return isOption(value) ? value.name : '';
    }

    function debounce(func, wait) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          timeout = null;
          func(...args);
        }, wait);
      };
    }

    function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

    function flattenOptions(options) {
      return options.map((option, i) => {
        if (option.type === 'group') {
          const id = `${option.name.replace(/\s+/g, '-').toLowerCase()}-${i}`;
          return option.items.map(item => _extends$3({}, item, {
            groupId: id,
            groupName: option.name
          }));
        }

        return _extends$3({}, option, {
          index: i
        });
      }).flat();
    }

    function useFetch(q, defaultOptions, {
      debounceTime,
      filterOptions,
      getOptions
    }) {
      const [fetching, setFetching] = m(false);
      const [options, setOptions] = m(() => flattenOptions(defaultOptions));
      const fetch = _(() => {
        const filter = filterOptions || (op => () => op);

        if (!getOptions) {
          return s => setOptions(flattenOptions(filter(defaultOptions)(s)));
        }

        return debounce(s => {
          const optionsReq = getOptions(s, defaultOptions);
          setFetching(true);
          Promise.resolve(optionsReq).then(newOptions => {
            setOptions(flattenOptions(filter(newOptions)(s)));
          }).finally(() => setFetching(false));
        }, debounceTime);
      }, [filterOptions, defaultOptions, getOptions, debounceTime]);
      y(() => setOptions(defaultOptions), [defaultOptions]);
      y(() => fetch(q), [fetch, q]);
      return {
        options,
        setOptions,
        fetching
      };
    }

    function getValue(option) {
      if (!option) {
        return null;
      }

      return isOption(option) ? option.value : null;
    }

    function getValues(options) {
      if (Array.isArray(options)) {
        return options.map(o => getValue(o)).filter(v => v !== null);
      }

      return getValue(options);
    }

    function highlightReducer(highlighted, {
      key,
      options
    }) {
      const max = options.length - 1;
      let newHighlighted = key === 'ArrowDown' ? highlighted + 1 : highlighted - 1;

      if (newHighlighted < 0) {
        newHighlighted = max;
      } else if (newHighlighted > max) {
        newHighlighted = 0;
      }

      const option = options[newHighlighted];

      if (option && option.disabled) {
        return highlightReducer(newHighlighted, {
          key,
          options
        });
      }

      return newHighlighted;
    }

    function useHighlight(defaultHighlighted, options, onSelect, ref) {
      const [highlighted, dispatchHighlighted] = p(highlightReducer, defaultHighlighted);
      const onKeyDown = A$1(e => {
        const {
          key
        } = e;

        if (['ArrowDown', 'ArrowUp'].includes(key)) {
          e.preventDefault();
          dispatchHighlighted({
            key,
            options
          });
        }
      }, [options]);
      const onKeyPress = A$1(e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const selected = options[highlighted];

          if (selected) {
            onSelect(selected.value);
          }
        }
      }, [options, highlighted, onSelect]);
      const onKeyUp = A$1(e => {
        if (e.key === 'Escape') {
          e.preventDefault();
          ref.current.blur();
        }
      }, [ref]);
      return [highlighted, {
        onKeyPress,
        onKeyDown,
        onKeyUp
      }];
    }

    function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
    function useSelect({
      value: defaultValue = null,
      options: defaultOptions = [],
      search: canSearch = false,
      multiple = false,
      disabled = false,
      closeOnSelect = true,
      getOptions: getOptionsFn = null,
      filterOptions = null,
      onChange = () => {},
      onFocus = () => {},
      onBlur = () => {},
      debounce = 0
    }) {
      const ref = h(null);
      const [value, setValue] = m(null);
      const [search, setSearch] = m('');
      const [focus, setFocus] = m(false);
      const {
        options,
        fetching
      } = useFetch(search, defaultOptions, {
        getOptions: getOptionsFn,
        filterOptions,
        debounceTime: debounce
      });
      const onSelect = A$1(newValue => {
        const newOption = getOptions(newValue, value, Array.isArray(value) ? [...value, ...options] : options, multiple);
        setValue(newOption);
        onChange(getValues(newOption), newOption);

        if (closeOnSelect) {
          ref.current.blur();
        }
      }, [closeOnSelect, multiple, onChange, value, options]);
      const [highlighted, keyboardEvents] = useHighlight(-1, options, onSelect, ref);
      const snapshot = _(() => ({
        options: groupOptions(options),
        option: value,
        displayValue: getDisplayValue(value),
        value: getValues(value),
        search,
        fetching,
        focus,
        highlighted,
        disabled
      }), [disabled, fetching, focus, highlighted, search, value, options]);
      const onMouseDown = A$1(e => {
        e.preventDefault();
        onSelect(e.currentTarget.value);
      }, [onSelect]);
      const onFocusCb = A$1(e => {
        setFocus(true);
        onFocus(e);
      }, [onFocus]);
      const onBlurCb = A$1(e => {
        setFocus(false);
        setSearch('');
        onBlur(e);
      }, [onBlur]);
      const valueProps = _(() => _extends$2({
        tabIndex: '0',
        readOnly: !canSearch
      }, keyboardEvents, {
        onFocus: onFocusCb,
        onBlur: onBlurCb,
        onChange: canSearch ? ({
          target
        }) => setSearch(target.value) : null,
        disabled,
        ref
      }), [canSearch, keyboardEvents, onFocusCb, onBlurCb, disabled]);
      const optionProps = _(() => ({
        tabIndex: '-1',
        onMouseDown
      }), [onMouseDown]);
      y(() => {
        setValue(getOptions(defaultValue, null, options, multiple));
      }, [defaultValue, multiple, options]);
      return [snapshot, valueProps, optionProps, setValue];
    }

    var propTypes = {exports: {}};

    var reactIs = {exports: {}};

    var reactIs_development = {};

    /** @license React v16.13.1
     * react-is.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */



    {
      (function() {

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    reactIs_development.AsyncMode = AsyncMode;
    reactIs_development.ConcurrentMode = ConcurrentMode;
    reactIs_development.ContextConsumer = ContextConsumer;
    reactIs_development.ContextProvider = ContextProvider;
    reactIs_development.Element = Element;
    reactIs_development.ForwardRef = ForwardRef;
    reactIs_development.Fragment = Fragment;
    reactIs_development.Lazy = Lazy;
    reactIs_development.Memo = Memo;
    reactIs_development.Portal = Portal;
    reactIs_development.Profiler = Profiler;
    reactIs_development.StrictMode = StrictMode;
    reactIs_development.Suspense = Suspense;
    reactIs_development.isAsyncMode = isAsyncMode;
    reactIs_development.isConcurrentMode = isConcurrentMode;
    reactIs_development.isContextConsumer = isContextConsumer;
    reactIs_development.isContextProvider = isContextProvider;
    reactIs_development.isElement = isElement;
    reactIs_development.isForwardRef = isForwardRef;
    reactIs_development.isFragment = isFragment;
    reactIs_development.isLazy = isLazy;
    reactIs_development.isMemo = isMemo;
    reactIs_development.isPortal = isPortal;
    reactIs_development.isProfiler = isProfiler;
    reactIs_development.isStrictMode = isStrictMode;
    reactIs_development.isSuspense = isSuspense;
    reactIs_development.isValidElementType = isValidElementType;
    reactIs_development.typeOf = typeOf;
      })();
    }

    {
      reactIs.exports = reactIs_development;
    }

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

    var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var printWarning$1 = function() {};

    {
      var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
      var has$1 = has$2;

      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) { /**/ }
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
      {
        for (var typeSpecName in typeSpecs) {
          if (has$1(typeSpecs, typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
                  'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning$1(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;

              var stack = getStack ? getStack() : '';

              printWarning$1(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes$1.resetWarningCache = function() {
      {
        loggedTypeFailures = {};
      }
    };

    var checkPropTypes_1 = checkPropTypes$1;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactIs$1 = reactIs.exports;
    var assign = objectAssign;

    var ReactPropTypesSecret = ReactPropTypesSecret_1;
    var has = has$2;
    var checkPropTypes = checkPropTypes_1;

    var printWarning = function() {};

    {
      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data: {};
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;

      function createChainableTypeChecker(validate) {
        {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;

          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);

            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
              {expectedType: expectedType}
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs$1.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          {
            if (arguments.length > 1) {
              printWarning(
                'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
              );
            } else {
              printWarning('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }

          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
          return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }

        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
          'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
        );
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== 'function') {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from props.
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== 'function') {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }

            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }

            return true;
          default:
            return false;
        }
      }

      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }

        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }

      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var ReactIs = reactIs.exports;

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    }

    var PropTypes = propTypes.exports;

    const option = PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    });
    const optionType = PropTypes.oneOfType([option, PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(option)
    })]);
    const valueType = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]);

    function classes(classNames) {
      return Object.entries(classNames).filter(([cls, display]) => cls && display).map(([cls]) => cls).join(' ');
    }

    var o=0;function e(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$1.vnode&&l$1.vnode(a),a}

    function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

    const Option = ({
      optionProps,
      highlighted,
      selected,
      option,
      cls,
      renderOption
    }) => {
      const props = _extends$1({}, optionProps, {
        value: option.value,
        disabled: option.disabled
      });

      const className = classes({
        [cls('option')]: true,
        [cls('is-selected')]: selected,
        [cls('is-highlighted')]: highlighted
      });
      return /*#__PURE__*/e("li", {
        className: cls('row'),
        role: "menuitem",
        "data-index": option.index,
        "data-value": escape(option.value),
        children: [renderOption && renderOption(props, option, {
          selected,
          highlighted
        }, className), !renderOption && /*#__PURE__*/e("button", _extends$1({
          type: "button",
          className: className
        }, props, {
          children: option.name
        }))]
      }, option.value);
    };

    Option.defaultProps = {
      renderOption: null
    };
    Option.propTypes = {
      option: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.bool,
        index: PropTypes.number
      }).isRequired,
      highlighted: PropTypes.bool.isRequired,
      selected: PropTypes.bool.isRequired,
      optionProps: PropTypes.shape({
        tabIndex: PropTypes.string.isRequired,
        onMouseDown: PropTypes.func.isRequired
      }).isRequired,
      cls: PropTypes.func.isRequired,
      renderOption: PropTypes.func
    } ;
    var Option$1 = /*#__PURE__*/g(Option);

    function isSelected(itemValue, selectedValue) {
      if (!selectedValue) {
        return false;
      }

      return Array.isArray(selectedValue) ? // eslint-disable-next-line eqeqeq
      selectedValue.findIndex(item => item.value == itemValue.value) >= 0 // eslint-disable-next-line eqeqeq
      : selectedValue.value == itemValue.value;
    }

    const OptionsList = ({
      options,
      optionProps,
      snapshot,
      renderOption,
      renderGroupHeader,
      cls
    }) => /*#__PURE__*/e("ul", {
      className: cls('options'),
      children: options.map(o => {
        if (o.type === 'group') {
          return /*#__PURE__*/e("li", {
            role: "none",
            className: cls('row'),
            children: /*#__PURE__*/e("div", {
              className: cls('group'),
              children: [/*#__PURE__*/e("div", {
                className: cls('group-header'),
                children: renderGroupHeader ? renderGroupHeader(o.name) : o.name
              }), /*#__PURE__*/e("ul", {
                className: cls('options'),
                children: /*#__PURE__*/e(OptionsList, {
                  optionProps: optionProps,
                  snapshot: snapshot,
                  options: o.items,
                  renderOption: renderOption,
                  renderGroupHeader: renderGroupHeader,
                  cls: cls
                })
              })]
            })
          }, o.groupId);
        }

        return /*#__PURE__*/e(Option$1, {
          selected: isSelected(o, snapshot.option),
          highlighted: snapshot.highlighted === o.index,
          option: o,
          optionProps: optionProps,
          cls: cls,
          renderOption: renderOption
        }, o.value);
      })
    });

    OptionsList.propTypes = {
      options: PropTypes.arrayOf(optionType).isRequired,
      optionProps: PropTypes.shape({}).isRequired,
      snapshot: PropTypes.shape({
        highlighted: PropTypes.number.isRequired,
        option: PropTypes.oneOfType([optionType, PropTypes.arrayOf(optionType)])
      }).isRequired,
      cls: PropTypes.func.isRequired,
      renderGroupHeader: PropTypes.func,
      renderOption: PropTypes.func
    } ;
    var OptionsList$1 = /*#__PURE__*/g(OptionsList);

    const Options = ({
      options,
      optionProps,
      snapshot,
      cls,
      renderGroupHeader,
      renderOption,
      emptyMessage
    }) => {
      const selectRef = h(null);
      const {
        value,
        highlighted
      } = snapshot;
      const renderEmptyMessage = A$1(() => {
        if (emptyMessage === null) {
          return null;
        }

        return /*#__PURE__*/e("li", {
          className: cls('not-found'),
          children: typeof emptyMessage === 'function' ? emptyMessage() : emptyMessage
        });
      }, [emptyMessage, cls]);
      y(() => {
        const {
          current
        } = selectRef;

        if (!current || highlighted < 0 && value === null) {
          return;
        }

        const val = Array.isArray(value) ? value[0] : value;
        const query = highlighted > -1 ? `[data-index="${highlighted}"]` : `[data-value="${escape(val)}"]`;
        const selected = current.querySelector(query);

        if (selected) {
          const rect = current.getBoundingClientRect();
          const selectedRect = selected.getBoundingClientRect();
          current.scrollTop = selected.offsetTop - rect.height / 2 + selectedRect.height / 2;
        }
      }, [value, highlighted, selectRef]);
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        e("div", {
          className: cls('select'),
          ref: selectRef,
          onMouseDown: e => e.preventDefault(),
          children: options.length ? /*#__PURE__*/e(OptionsList$1, {
            optionProps: optionProps,
            snapshot: snapshot,
            options: options,
            renderOption: renderOption,
            renderGroupHeader: renderGroupHeader,
            cls: cls
          }) : /*#__PURE__*/e("ul", {
            className: cls('options'),
            children: renderEmptyMessage()
          })
        })
      );
    };

    Options.defaultProps = {
      renderOption: null,
      renderGroupHeader: null,
      emptyMessage: null
    };
    Options.propTypes = {
      options: PropTypes.arrayOf(optionType).isRequired,
      optionProps: PropTypes.shape({
        tabIndex: PropTypes.string.isRequired,
        onMouseDown: PropTypes.func.isRequired
      }).isRequired,
      snapshot: PropTypes.shape({
        highlighted: PropTypes.number.isRequired,
        value: valueType
      }).isRequired,
      cls: PropTypes.func.isRequired,
      renderGroupHeader: PropTypes.func,
      renderOption: PropTypes.func,
      emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    } ;
    var Options$1 = /*#__PURE__*/g(Options);

    function useClassName(className) {
      return A$1(key => {
        if (typeof className === 'function') {
          return className(key);
        }

        if (key.indexOf('container') === 0) {
          return key.replace('container', className);
        }

        if (key.indexOf('is-') === 0 || key.indexOf('has-') === 0) {
          return key;
        }

        return `${className.split(' ')[0]}__${key}`;
      }, [className]);
    }

    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    const SelectSearch = /*#__PURE__*/x(({
      value: defaultValue,
      disabled,
      placeholder,
      multiple,
      search,
      autoFocus,
      autoComplete,
      options: defaultOptions,
      id,
      onChange,
      onFocus,
      onBlur,
      printOptions,
      closeOnSelect,
      className,
      renderValue,
      renderOption,
      renderGroupHeader,
      getOptions,
      filterOptions,
      debounce,
      emptyMessage
    }, ref) => {
      const cls = useClassName(className);
      const [snapshot, valueProps, optionProps] = useSelect({
        options: defaultOptions,
        value: defaultValue === null && (placeholder || multiple) ? '' : defaultValue,
        multiple,
        disabled,
        search,
        onChange,
        onFocus,
        onBlur,
        closeOnSelect: closeOnSelect && (!multiple || ['on-focus', 'always'].includes(printOptions)),
        getOptions,
        filterOptions,
        debounce
      });
      const wrapperClass = classes({
        [cls('container')]: true,
        [cls('is-disabled')]: disabled,
        [cls('is-loading')]: snapshot.fetching,
        [cls('has-focus')]: snapshot.focus
      });
      let shouldRenderOptions;

      switch (printOptions) {
        case 'never':
          shouldRenderOptions = false;
          break;

        case 'always':
          shouldRenderOptions = true;
          break;

        case 'on-focus':
          shouldRenderOptions = snapshot.focus;
          break;

        default:
          shouldRenderOptions = !disabled && (snapshot.focus || multiple);
          break;
      }

      const shouldRenderValue = !multiple || placeholder || search;

      const props = _extends({}, valueProps, {
        placeholder,
        autoFocus,
        autoComplete,
        value: snapshot.focus && search ? snapshot.search : snapshot.displayValue
      });

      return /*#__PURE__*/e("div", {
        ref: ref,
        className: wrapperClass,
        id: id,
        children: [shouldRenderValue && /*#__PURE__*/e("div", {
          className: cls('value'),
          children: [renderValue && renderValue(props, snapshot, cls('input')), !renderValue && /*#__PURE__*/e("input", _extends({}, props, {
            className: cls('input')
          }))]
        }), shouldRenderOptions && /*#__PURE__*/e(Options$1, {
          options: snapshot.options,
          optionProps: optionProps,
          snapshot: snapshot,
          cls: cls,
          emptyMessage: emptyMessage,
          renderOption: renderOption,
          renderGroupHeader: renderGroupHeader
        })]
      });
    });
    SelectSearch.defaultProps = {
      // Data
      getOptions: null,
      filterOptions: null,
      value: null,
      // Interaction
      multiple: false,
      search: false,
      disabled: false,
      printOptions: 'auto',
      closeOnSelect: true,
      debounce: 0,
      // Attributes
      placeholder: null,
      id: null,
      autoFocus: false,
      autoComplete: 'on',
      // Design
      className: 'select-search',
      // Renderers
      renderOption: undefined,
      renderGroupHeader: undefined,
      renderValue: undefined,
      emptyMessage: null,
      // Events
      onChange: () => {},
      onFocus: () => {},
      onBlur: () => {}
    };
    SelectSearch.propTypes = {
      // Data
      options: PropTypes.arrayOf(optionType).isRequired,
      getOptions: PropTypes.func,
      filterOptions: PropTypes.func,
      value: valueType,
      // Interaction
      multiple: PropTypes.bool,
      search: PropTypes.bool,
      disabled: PropTypes.bool,
      printOptions: PropTypes.oneOf(['auto', 'always', 'never', 'on-focus']),
      closeOnSelect: PropTypes.bool,
      debounce: PropTypes.number,
      // Attributes
      placeholder: PropTypes.string,
      id: PropTypes.string,
      autoComplete: PropTypes.string,
      autoFocus: PropTypes.bool,
      // Design
      className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      // Renderers
      renderOption: PropTypes.func,
      renderGroupHeader: PropTypes.func,
      renderValue: PropTypes.func,
      emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      // Events
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      onBlur: PropTypes.func
    } ;
    var SelectSearch$1 = /*#__PURE__*/g(SelectSearch);

    var css_248z$2 = ".select_container__2Qr4W {\n  position: relative;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.select_input-container__h2Hvo {\n  position: relative;\n}\n.select_input-container__h2Hvo .select_input__O4D79 {\n  background: #f6f7f9;\n  color: #2d3239;\n  border: 1px solid #e2e5e9;\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 6px;\n  padding-right: 30px;\n  outline: 0;\n  text-overflow: ellipsis;\n  display: block;\n  width: 100%;\n  cursor: default;\n}\n.select_input-container__h2Hvo .select_input__O4D79::-moz-placeholder {\n  color: #9ba5b0;\n}\n.select_input-container__h2Hvo .select_input__O4D79:-ms-input-placeholder {\n  color: #9ba5b0;\n}\n.select_input-container__h2Hvo .select_input__O4D79::placeholder {\n  color: #9ba5b0;\n}\n.select_input-container__h2Hvo .select_input__O4D79:focus-visible {\n  outline: 2px solid var(--ca-primary-color);\n}\n.select_input-container__h2Hvo .select_input__O4D79.select_error__XUsCr {\n  border: 2px solid #d94d53;\n}\n.select_input-container__h2Hvo .select_dropdown-icon__AxtlK {\n  position: absolute;\n  top: 6px;\n  right: 8px;\n  pointer-events: none;\n}\n\n.select_select__BR0DT {\n  position: absolute;\n  z-index: 2;\n  top: 34px;\n  right: 0;\n  left: 0;\n  overflow: auto;\n  max-height: 360px;\n  box-shadow: 0 1px 1px rgba(88, 99, 112, 0.24), 0 0 1px rgba(88, 99, 112, 0.32);\n  background: #fff;\n  border-radius: 4px;\n}\n\n.select_select__BR0DT.select_up__HXTS- {\n  top: auto;\n  bottom: 34px;\n  right: 0;\n  left: 0;\n}\n\n.select_select__BR0DT .select_options__eypbX {\n  list-style: none;\n  margin: 0;\n  padding: 4px 0;\n}\n\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s {\n  width: 100%;\n  text-align: left;\n  background: transparent;\n  color: #2d3239;\n  border: none;\n  padding: 6px 16px;\n  display: flex;\n  gap: 8px;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s.select_is-selected__43kvN {\n  background: var(--ca-primary-color);\n  color: #fff;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s.select_option-multiple__zsmez {\n  -webkit-text-decoration: dashed;\n          text-decoration: dashed;\n  color: #2d3239;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s.select_option-multiple__zsmez.select_is-selected__43kvN {\n  background: transparent;\n  color: inherit;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s.select_option-multiple__zsmez:hover {\n  background: #f1f2f4;\n  color: inherit;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s.select_option-multiple__zsmez:active {\n  background: var(--ca-primary-background-300);\n  color: inherit;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s:hover {\n  background: #f1f2f4;\n  color: inherit;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s:active {\n  background: var(--ca-primary-background-300);\n  color: inherit;\n}\n.select_select__BR0DT .select_options__eypbX .select_option__qKU2s:disabled, .select_select__BR0DT .select_options__eypbX .select_option__qKU2s.select_option-multiple__zsmez:disabled {\n  background: transparent;\n  color: grey;\n}\n\n.select_option-checkbox__fVLmA {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto 0;\n}\n.select_option-checkbox__fVLmA::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  content: \"\";\n  border-radius: 4px;\n}\n.select_option-checkbox__fVLmA svg {\n  width: 8.62px;\n  height: 6px;\n  z-index: 0;\n  display: none;\n}\n.select_option-checkbox__fVLmA.select_option-checkbox-selected__Xtkjw svg {\n  display: block;\n}";
    var styles$2 = {"container":"select_container__2Qr4W","input-container":"select_input-container__h2Hvo","input":"select_input__O4D79","error":"select_error__XUsCr","dropdown-icon":"select_dropdown-icon__AxtlK","select":"select_select__BR0DT","up":"select_up__HXTS-","options":"select_options__eypbX","option":"select_option__qKU2s","is-selected":"select_is-selected__43kvN","option-multiple":"select_option-multiple__zsmez","option-checkbox":"select_option-checkbox__fVLmA","option-checkbox-selected":"select_option-checkbox-selected__Xtkjw"};
    styleInject(css_248z$2);

    var SelectInput = ReactDOM.forwardRef(function (_a, ref) {
        var downdownIconUrl = _a.downdownIconUrl, className = _a.className; _a.name; var meta = _a.meta, multipleSelectedLabel = _a.multipleSelectedLabel, valueProps = __rest$2(_a, ["downdownIconUrl", "className", "name", "meta", "multipleSelectedLabel"]);
        var value = Array.isArray(meta === null || meta === void 0 ? void 0 : meta.value) && meta.value.length > 1 && multipleSelectedLabel
            ? multipleSelectedLabel
            : valueProps.value;
        return (ReactDOM.createElement("div", { className: styles$2['input-container'] },
            ReactDOM.createElement("input", __assign$4({}, valueProps, { value: value, className: "".concat(styles$2.input, " ").concat(className), ref: ref })),
            ReactDOM.createElement(SVG, { src: downdownIconUrl, width: "20", height: "20", className: styles$2['dropdown-icon'] })));
    });
    SelectInput.displayName = 'SelectInput';
    function SelectOption(_a) {
        var multiple = _a.multiple, option = _a.option, selected = _a.selected, className = _a.className, otherProps = __rest$2(_a, ["multiple", "option", "selected", "className"]);
        var name = option.name;
        var _b = m(false), hovering = _b[0], updateHoverState = _b[1];
        return (ReactDOM.createElement("button", __assign$4({}, otherProps, { className: "".concat(className, " ").concat(multiple ? styles$2['option-multiple'] : ''), type: "button", 
            // Required by onMouseOver eslint
            onFocus: function () { }, onMouseOver: function () {
                updateHoverState(true);
            }, onMouseLeave: function () {
                updateHoverState(false);
            } }),
            multiple && (ReactDOM.createElement("span", { className: "".concat(styles$2['option-checkbox'], " ").concat(selected ? styles$2['option-checkbox-selected'] : '') },
                ReactDOM.createElement(CheckBox, { checked: selected, hoverClassName: hovering ? 'multi-option-hover' : '' }))),
            ReactDOM.createElement("span", null, name)));
    }
    function Select(_a) {
        var downdownIconUrl = _a.downdownIconUrl, options = _a.options, multiple = _a.multiple, name = _a.name, direction = _a.direction, value = _a.value, multipleSelectedLabel = _a.multipleSelectedLabel, onChange = _a.onChange, error = _a.error, otherProps = __rest$2(_a, ["downdownIconUrl", "options", "multiple", "name", "direction", "value", "multipleSelectedLabel", "onChange", "error"]);
        return (ReactDOM.createElement(SelectSearch$1, __assign$4({ className: function (key) { return "".concat(styles$2[key], " ").concat(styles$2[direction], " ").concat(error ? styles$2.error : ''); }, options: options, printOptions: "on-focus", multiple: multiple, closeOnSelect: !multiple, onChange: onChange, value: value, renderOption: function (optionsProps, option, meta, className) { return (ReactDOM.createElement(SelectOption, __assign$4({}, optionsProps, meta, { multiple: !!multiple, className: className, option: option }))); }, renderValue: function (valueProps, meta, className) { return (ReactDOM.createElement(SelectInput, __assign$4({}, valueProps, { multipleSelectedLabel: multipleSelectedLabel, meta: meta, name: name, className: className, downdownIconUrl: downdownIconUrl }))); } }, otherProps)));
    }
    function defaultOnChange() { }
    Select.defaultProps = {
        placeholder: undefined,
        direction: 'down',
        multiple: false,
        onChange: defaultOnChange,
        value: null,
        error: false,
    };

    function containsValue(list, value) {
        return Array.isArray(list) ? list.includes(value) : false;
    }
    function CheckBoxList(_a) {
        var question = _a.question, answer = _a.answer;
        var id = question.id, choices = question.choices, validation = question.validation;
        var name = "".concat(id);
        var required = validation.required;
        var _b = useFormContext(), register = _b.register, _c = _b.formState, errors = _c.errors, isValid = _c.isValid;
        var error = errors[name];
        var hasError = !isValid && !!(error === null || error === void 0 ? void 0 : error.message);
        return (ReactDOM.createElement(ReactDOM.Fragment, null, choices.map(function (choice, key) { return (ReactDOM.createElement(CheckBox, __assign$4({}, register(name, { required: required ? 'validation.choice.required' : false }), { key: "".concat(name, "_").concat(key), name: name }, choice, { defaultChecked: containsValue(answer, choice.value), error: hasError }))); })));
    }
    function RadioBoxList(_a) {
        var question = _a.question, answer = _a.answer;
        var id = question.id, choices = question.choices, validation = question.validation;
        var name = "".concat(id);
        var required = validation.required;
        var _b = useFormContext(), register = _b.register, _c = _b.formState, errors = _c.errors, isValid = _c.isValid;
        var answersArray = is$1(String, answer) ? [answer] : answer;
        var error = errors[name];
        var hasError = !isValid && !!(error === null || error === void 0 ? void 0 : error.message);
        return (ReactDOM.createElement(ReactDOM.Fragment, null, choices.map(function (choice, key) { return (ReactDOM.createElement(RadioBox, __assign$4({}, register(name, { required: required ? 'validation.choice.required' : false }), { key: "".concat(name, "_").concat(key), name: name }, choice, { defaultChecked: containsValue(answersArray, choice.value), error: hasError }))); })));
    }
    function ChoiceQuestion(_a) {
        var question = _a.question, answer = _a.answer;
        var params = useSDKContext().params;
        var t = useTranslations();
        var isModalPopup = (params === null || params === void 0 ? void 0 : params.type) === 'pop-up';
        var id = question.id, choices = question.choices, options = question.options, validation = question.validation;
        var multiple = (options || {}).multiple;
        var name = "".concat(id);
        var required = validation.required;
        var isLessThanFour = choices.length <= 3;
        var getAsset = useAssetFetcher();
        var _b = useFormContext(), register = _b.register, setValue = _b.setValue, _c = _b.formState, errors = _c.errors, isValid = _c.isValid;
        var selectOptions = _(function () { return choices.map(function (_a) {
            var label = _a.label, value = _a.value;
            return ({
                name: label,
                value: value,
            });
        }); }, [choices]);
        if (!isLessThanFour) {
            register(name, { required: required ? 'validation.choice.required' : false });
        }
        y(function () {
            setTimeout(function () {
                if (answer) {
                    setValue(name, answer);
                }
            }, 0);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        var onChangeValue = A$1(function (data) {
            setValue(name, data);
        }, [name, setValue]);
        var error = errors[name];
        var errorMessage = !isValid && error ? t(error.message) : '';
        return (ReactDOM.createElement("div", null,
            isLessThanFour && multiple && ReactDOM.createElement(CheckBoxList, { question: question, answer: answer }),
            isLessThanFour && !multiple && ReactDOM.createElement(RadioBoxList, { question: question, answer: answer }),
            !isLessThanFour
                && (ReactDOM.createElement(Select, { onChange: onChangeValue, options: selectOptions, downdownIconUrl: getAsset('icon_caret_down'), name: name, direction: isModalPopup ? 'down' : 'up', placeholder: t('select'), multiple: multiple, value: answer, multipleSelectedLabel: t('multiple_selected'), error: !!errorMessage })),
            errorMessage && ReactDOM.createElement(InlineError, null, errorMessage)));
    }

    var _a;
    var questionsMapping = (_a = {},
        _a[QuestionTypes.rating] = RatingQuestion,
        _a[QuestionTypes.text] = TextQuestion,
        _a[QuestionTypes.choice] = ChoiceQuestion,
        _a);

    var css_248z$1 = ".tag_tag__TGtgc {\n  display: inline-block;\n  height: 20px;\n  background: #f1f2f4;\n  border-radius: 2px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n  color: #586370;\n  padding: 0 4px;\n}";
    var styles$1 = {"tag":"tag_tag__TGtgc"};
    styleInject(css_248z$1);

    function Tag(_a) {
        var children = _a.children;
        return (ReactDOM.createElement("span", { className: styles$1.tag }, children));
    }

    var css_248z = ".alert_alert__Ht1vj {\n  display: flex;\n  padding: 18px;\n  background: #f6d6d7;\n  border-radius: 4px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #586370;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 18px;\n}\n.alert_alert__Ht1vj .alert_alert-icon__rDOnY {\n  color: #d94d53;\n  display: flex;\n  flex-shrink: 0;\n}";
    var styles = {"alert":"alert_alert__Ht1vj","alert-icon":"alert_alert-icon__rDOnY"};
    styleInject(css_248z);

    function Alert(_a) {
        var icon = _a.icon, children = _a.children;
        return (ReactDOM.createElement("div", { className: styles.alert },
            icon && ReactDOM.createElement(SVG, { src: icon, className: styles['alert-icon'], width: "20", height: "20" }),
            ReactDOM.createElement("span", null, children)));
    }

    function CustomerAllianceApp() {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var t = useTranslations();
        var _k = useSDKContext(), params = _k.params, questions = _k.questions;
        var getAsset = useAssetFetcher();
        var _l = m(null), successResponse = _l[0], setSuccessResponse = _l[1];
        var _m = params || {}, questionnaireID = _m.questionnaireID, showPromotion = _m.showPromotion, submitUrl = _m.submitUrl, attributes = _m.attributes;
        var isModalPopup = (params === null || params === void 0 ? void 0 : params.type) === 'pop-up';
        var isPersistent = (params === null || params === void 0 ? void 0 : params.type) === 'persistent-footer';
        var variant = isModalPopup ? 'modal' : 'full-width';
        var _o = m(false), isPersistentOpen = _o[0], setIsPersistentOpen = _o[1];
        var methods = useForm({
            shouldUnregister: true,
        });
        var hideQuestionnaire = _(function () { return function () { return setIsPersistentOpen(false); }; }, [setIsPersistentOpen]);
        y(function () {
            emitter.addListener('hide', hideQuestionnaire);
            return function () {
                emitter.removeListener('hide', hideQuestionnaire);
            };
        }, [hideQuestionnaire]);
        var surveyService = useSurveyService();
        var send = surveyService.send;
        var current = useActor(surveyService)[0];
        var machineId = (_a = current === null || current === void 0 ? void 0 : current.machine) === null || _a === void 0 ? void 0 : _a.id;
        var isLoading = current.value === 'loading';
        var answer = (current.context[current.value] || {}).answer;
        var canSubmit = useCanSubmit(methods);
        var isSubmitting = current.value === 'submitting';
        var isSubmitError = current.value === 'submitError';
        var isSubmitted = current.value === 'submitted';
        y(function () {
            methods.reset();
        }, [current.value, methods]);
        // trigger submit once
        y(function () {
            if (isSubmitting && questions && submitUrl) {
                var payload = createSubmitPayload(questions, current.context, attributes);
                submitAnswers(submitUrl, payload).then(function (resp) {
                    setSuccessResponse(resp);
                    send({ type: 'DONE' });
                }).catch(function () {
                    send({ type: 'ERROR' });
                });
            }
        }, [current.context, isSubmitting, questions, send, submitUrl, attributes]);
        if (isLoading) {
            send({ type: 'NEXT' });
            return null;
        }
        var metaId = "".concat(machineId, ".").concat(current.value);
        var question = (_b = current.meta[metaId]) === null || _b === void 0 ? void 0 : _b.question;
        var id = (question || {}).id;
        var title = isSubmitted && successResponse ? successResponse.success_title : ((question === null || question === void 0 ? void 0 : question.label) || '');
        var required = ((_c = question === null || question === void 0 ? void 0 : question.validation) === null || _c === void 0 ? void 0 : _c.required) || false;
        var firstQuestionTitle = (_j = (_h = (_g = (_f = (_e = (_d = current === null || current === void 0 ? void 0 : current.machine) === null || _d === void 0 ? void 0 : _d.config) === null || _e === void 0 ? void 0 : _e.states) === null || _f === void 0 ? void 0 : _f.question_1) === null || _g === void 0 ? void 0 : _g.meta) === null || _h === void 0 ? void 0 : _h.question) === null || _j === void 0 ? void 0 : _j.label;
        if (isSubmitted && questionnaireID) {
            emitter.emit('submitted');
        }
        // When question is unsupported move to next
        if (!isSubmitted
            && !isSubmitting
            && !isSubmitError
            && !isLoading
            && !((question === null || question === void 0 ? void 0 : question.type) in questionsMapping)) {
            send({ type: canSubmit ? 'SUBMIT' : 'NEXT' });
            return null;
        }
        var QuestionComponent = questionsMapping[question === null || question === void 0 ? void 0 : question.type];
        var saveValue = function (data, action) {
            var name = "".concat(id);
            var value = data[name];
            var type = 'NEXT';
            if (isSubmitError) {
                type = 'RETRY';
            }
            else if (canSubmit) {
                type = 'SUBMIT';
            }
            if (action === 'back') {
                type = 'PREVIOUS';
            }
            send({
                type: type,
                key: current.value,
                value: value,
            });
        };
        var onSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var submitterValue, triggerSubmit, name_1;
            var _a;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        event.preventDefault();
                        submitterValue = (_c = (_b = event.nativeEvent) === null || _b === void 0 ? void 0 : _b.submitter) === null || _c === void 0 ? void 0 : _c.value;
                        triggerSubmit = methods.handleSubmit(function (e) { return saveValue(e, submitterValue); });
                        if (submitterValue === 'back') {
                            name_1 = "".concat(id);
                            saveValue((_a = {}, _a[name_1] = methods.getValues(name_1), _a), submitterValue);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, triggerSubmit(event)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        return (ReactDOM.createElement("div", { className: isModalPopup ? appStyle['question-modal'] : appStyle['question-footer'] },
            ReactDOM.createElement(FormProvider, __assign$4({}, methods),
                ReactDOM.createElement(Question, { title: title, subTitle: required && ReactDOM.createElement(Tag, null, t('required')), variant: variant, poweredByText: t('powered_by'), customerAllianceLink: t('website_url'), showFooter: showPromotion, actions: ReactDOM.createElement(Actions, null), onSubmit: onSubmit, style: { display: (!isPersistent || (isPersistent && isPersistentOpen)) ? 'flex' : 'none' } },
                    isSubmitError && ReactDOM.createElement(Alert, { icon: getAsset('icon_error') }, t('submission_error')),
                    isSubmitted && (ReactDOM.createElement("div", { className: appStyle.success }, successResponse === null || successResponse === void 0 ? void 0 : successResponse.success_description)),
                    !isSubmitted && !isSubmitted && !isSubmitting && !isSubmitError && (ReactDOM.createElement(QuestionComponent, { question: question, answer: answer })),
                    isSubmitting
                        && (ReactDOM.createElement("div", { className: appStyle.centered },
                            ReactDOM.createElement(Loader, { size: 48, color: "var(--ca-primary-color)" })))),
                isPersistent && !isPersistentOpen && (ReactDOM.createElement(FooterToggleButton, { iconUrl: getAsset('icon_caret_up_svg'), onClick: function () { return setIsPersistentOpen(true); } }, firstQuestionTitle)))));
    }
    function render(parent, params) {
        var theming = pick$1(Object.keys(themeDefaults), params);
        ReactDOM.render(ReactDOM.createElement(ReactDOM.StrictMode, null,
            ReactDOM.createElement(ErrorBoundary, null,
                ReactDOM.createElement(SDKContextProvider, { params: params },
                    ReactDOM.createElement("div", { style: theme(theming) },
                        ReactDOM.createElement(CustomerAllianceApp, null))))), parent);
    }

    var revision = "6f37f3c" ;
    var randomID = "CA-questionnaire-".concat(genID());
    var defaults;
    var params;
    var navigator = window.navigator;
    var language = navigator.userLanguage || navigator.language;
    var hasAnswered = false;
    function setDefaults(options) {
        defaults = process(options);
    }
    function fillValues(url, options) {
        if (!url) {
            return '';
        }
        return url
            .replace('{questionnaireID}', (options === null || options === void 0 ? void 0 : options.questionnaireID) || '')
            .replace('{locale}', language);
    }
    var setClosedOrAnswered = function (expiryDays) {
        api.set("CA_".concat(params === null || params === void 0 ? void 0 : params.questionnaireID), JSON.stringify({ frequency: params.frequency, hasAnswered: hasAnswered }), { expires: expiryDays });
    };
    var hasClosedOrAnswered = function () { return !!api.get("CA_".concat(params.questionnaireID)); };
    var removeCookies = function () {
        hasAnswered = false;
        api.remove("CA_".concat(params === null || params === void 0 ? void 0 : params.questionnaireID));
    };
    var checkForParamsMatch = function () {
        var _a, _b;
        var oldCookiesFreqStr = api.get("CA_".concat(params.questionnaireID));
        if (!oldCookiesFreqStr) {
            return false;
        }
        if (oldCookiesFreqStr === 'done') {
            // To support old users whose cookies might be set to done
            return false;
        }
        var oldCookies = JSON.parse(oldCookiesFreqStr);
        var oldCookiesFreq = oldCookies.frequency;
        return !((oldCookies.hasAnswered && ((_a = params.frequency) === null || _a === void 0 ? void 0 : _a.answered) !== (oldCookiesFreq === null || oldCookiesFreq === void 0 ? void 0 : oldCookiesFreq.answered))
            || (!oldCookies.hasAnswered && ((_b = params.frequency) === null || _b === void 0 ? void 0 : _b.closed) !== (oldCookiesFreq === null || oldCookiesFreq === void 0 ? void 0 : oldCookiesFreq.closed)));
    };
    function init(options) {
        options.fetchUrl; options.submitUrl; var otherOptions = __rest$2(options, ["fetchUrl", "submitUrl"]);
        if (!defaults) {
            setDefaults({});
        }
        var fetchUrl = defaults.fetchUrl, submitUrl = defaults.submitUrl;
        params = process(__assign$4(__assign$4(__assign$4({}, params), otherOptions), { fetchUrl: fillValues(fetchUrl, options), submitUrl: fillValues(submitUrl, options) }));
        if (!checkForParamsMatch()) {
            removeCookies();
        }
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        setupTrigger(params.trigger);
    }
    function open(questionnaireID) {
        if (questionnaireID === void 0) { questionnaireID = null; }
        if (document.getElementById(randomID)) {
            return;
        }
        var elemDiv = document.createElement('div');
        elemDiv.classList.add('customer-alliance');
        elemDiv.setAttribute('id', randomID);
        document.body.appendChild(elemDiv);
        if (questionnaireID) {
            init({ questionnaireID: questionnaireID });
        }
        if (hasClosedOrAnswered()) {
            return;
        }
        render(elemDiv, params);
    }
    function remove() {
        var elem = document.getElementById(randomID);
        if (elem) {
            ReactDOM.unmountComponentAtNode(elem);
            elem.remove();
        }
    }
    function handleScrollTrigger(scrollAmount) {
        if (Number.isNaN(scrollAmount)) {
            console.info('CA-SDK: Invalid scroll trigger');
            return;
        }
        function handleScrollEvent() {
            if (window.scrollY >= scrollAmount) {
                open();
                document.removeEventListener('scroll', handleScrollEvent);
            }
        }
        document.addEventListener('scroll', handleScrollEvent);
    }
    function handleDelayTrigger(delayTime) {
        if (Number.isNaN(delayTime)) {
            console.info('CA-SDK: Invalid delay trigger');
            return;
        }
        setTimeout(function () {
            open();
        }, delayTime * 1000);
    }
    function handlePageLeaveTrigger() {
        function handlePageLeave() {
            open();
            document.documentElement.removeEventListener('mouseleave', handlePageLeave);
        }
        document.documentElement.addEventListener('mouseleave', handlePageLeave);
    }
    function handleOnLoadTrigger() {
        if (document.readyState !== 'loading') {
            open();
        }
        else {
            document.addEventListener('DOMContentLoaded', function () {
                open();
            });
        }
    }
    function setupTrigger(triggerParam) {
        var _a = triggerParam.split(':'), trigger = _a[0], extraOption = _a[1];
        switch (trigger) {
            case 'onLoad':
                handleOnLoadTrigger();
                break;
            case 'onPageLeave':
                handlePageLeaveTrigger();
                break;
            case 'scroll':
                handleScrollTrigger(Number(extraOption));
                break;
            case 'delay':
                handleDelayTrigger(Number(extraOption));
                break;
        }
    }
    // set default event listeners
    emitter.on('error', function (error) {
        console.error('CA-SDK ', error);
        remove();
    });
    emitter.on('submitted', function () {
        hasAnswered = true;
        if (params.frequency.answered) {
            setClosedOrAnswered(params.frequency.answered);
        }
    });
    emitter.on('close', function () {
        if (!hasAnswered && params.frequency.closed) {
            setClosedOrAnswered(params.frequency.closed);
        }
        remove();
    });
    var SDK = {
        setDefaults: setDefaults,
        init: init,
        open: open,
        remove: remove,
        version: "".concat(version, " (").concat(revision, ")"),
    };

    return SDK;

}));
