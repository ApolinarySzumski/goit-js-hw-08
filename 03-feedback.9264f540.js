function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var i,o,r,u,a,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,a=setTimeout(h,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function h(){var e=p();if(S(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,r-(e-c)):n}(e))}function w(e){return a=void 0,v&&i?b(e):(i=o=void 0,u)}function T(){var e=p(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(h,t),b(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=g(t)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},T.flush=function(){return void 0===a?u:w(p())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),j=document.querySelector('[type="email"]'),S=document.querySelector('[name="message"]'),h=document.querySelector('[type="submit"]'),w={email:"",message:""},T=e(t)((()=>{w.email=j.value,w.message=S.value,localStorage.setItem("feedback-form-state",JSON.stringify(w)),localStorage.getItem("feedback-form-state")}),500);b.addEventListener("input",T),h.addEventListener("click",(()=>{console.log(w)})),b.addEventListener("submit",(()=>{localStorage.clear()}));
//# sourceMappingURL=03-feedback.9264f540.js.map