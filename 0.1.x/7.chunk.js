webpackJsonp([7],{174:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=(n(1),n(179));var c=n(11),a=n(10),s=n(175),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dismiss:0},n.bindRef=n.bindRef.bind(n),n.dismiss=n.dismiss.bind(n),n.handleClose=n.handleClose.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),u(t,[{key:"componentWillReceiveProps",value:function(e){this.props.dismiss!==e.dismiss&&e.dismiss&&this.handleClose()}},{key:"bindRef",value:function(e){this.element=e}},{key:"dismiss",value:function(){var e=this.props.onClose;this.setState({dismiss:2}),"function"==typeof e&&e()}},{key:"handleClose",value:function(){var e=this;if(!(this.state.dismiss>0)){var t=this.props.duration;t>0?this.setState({dismiss:1},function(){setTimeout(e.dismiss,t)}):this.dismiss()}}},{key:"renderIcon",value:function(){var e,t=this.props.icon,n=this.props,r=n.type,i=n.iconSize;if("boolean"==typeof t&&(t=s.a[(e=r,e&&e[0].toUpperCase()+e.slice(1))]),!t)return null;var c=i>0?{width:i,height:i}:void 0;return o.a.createElement("div",{className:Object(a.a)("icon"),style:c},t)}},{key:"render",value:function(){var e=this.state.dismiss;if(2===e)return null;var t=this.props,n=t.children,r=t.className,c=t.type,u=t.iconSize,l=t.onClose,f=this.renderIcon(),p=this.props.style,y=Object(a.a)("_",c,1===e&&"dismissed",l&&"with-close",f&&"with-icon");return r&&(y+=" "+r),f&&u>0&&(p=Object(i.a)(p,function(e){e.paddingLeft=u+25})),o.a.createElement("div",{ref:this.bindRef,className:y,style:p},l&&o.a.createElement("a",{href:"javascript:;",className:Object(a.a)("close"),onClick:this.handleClose},s.a.Close),f,n)}}]),t}();l.defaultProps=Object.assign({},c.a,{duration:216,iconSize:0,type:"warning"});t.a=l},175:function(e,t,n){"use strict";var r=n(0),o=n.n(r);function i(e){return o.a.createElement("svg",{viewBox:"0 0 1024 1024"},e.map(function(e,t){return o.a.createElement("path",{key:t,d:e})}))}var c=["M512 0C232 0 5 226.64 4.97250989 506.66666667s226.99620754 507.02749011 507.02749011 507.02749011 507.02749011-226.99620754 507.02749011-507.02749011S792.03128257-0.36082344 512-0.36082344zM701.01984777 685.92623566c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0l-96.51268267-96.51268267-96.51268266 96.51268267c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632L439.01339246 506.66666667l-96.53803365-96.51268267c-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632 22.86694019-22.84158802 59.9052983-22.84158802 82.74688632 0l96.51268267 96.51268267 96.51268266-96.51268267c22.86694019-22.84158802 59.9052983-22.86694019 82.74688633 0 22.84158802 22.86694019 22.84158802 59.9052983 0 82.74688632L604.48181413 506.66666667l96.53803364 96.51268267C723.86143696 626.04628952 723.88678795 663.08464763 701.01984777 685.92623566z"];t.a={AngleLeft:i(["M304.905 561.68c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.123l-402.521 402.521c-8.992 8.993-20.776 13.488-32.562 13.488z","M707.426 964.201c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.522c-17.984-17.983-17.984-47.139 0-65.122 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.983 17.984 47.139 0 65.122-8.991 8.992-20.776 13.488-32.561 13.488z"]),AngleRight:i(["M728.76 561.68c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.521c-17.984-17.984-17.984-47.14 0-65.123 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.984 17.984 47.14 0 65.122-8.991 8.993-20.776 13.488-32.561 13.488z","M326.238 964.202c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.122l-402.521 402.522c-8.992 8.992-20.776 13.488-32.562 13.488z"]),AngleDoubleLeft:i(["M219.5 511.3l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L86.5 463.5c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z","M601.5 511.5l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L468.5 463.7c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z"]),AngleDoubleRight:i(["M802.5 511.3L465.8 174.6c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L556.9 937.7c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z","M420.5 511.5L83.8 174.8c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L174.9 937.9c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z"]),Close:i(["M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z"]),Danger:i(c),Error:i(c),Info:i(["M512 1024c282.771 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM432 256c0-44.183 35.817-80 80-80s80 35.817 80 80v31.999c0 44.183-35.817 80-80 80s-80-35.817-80-80v-31.999zM431.999 512c0-44.183 35.817-80 80-80s80 35.817 80 80v256c0 44.183-35.817 80-80 80s-80-35.817-80-80v-256z"]),Success:i(["M874 150C674.09-50 349.91-50 150 150s-200 524.09 0 724 524.09 200 724 0 200-524.09 0-724zM760.57 440.57l-256 256a80 80 0 0 1-113.14 0l-128-128a80 80 0 0 1 113.14-113.14L448 526.86l199.43-199.43a80 80 0 0 1 113.14 113.14z"]),Warning:i(["M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m80 768a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0v32z m0-256a80 80 0 0 1-160 0V256a80 80 0 0 1 160 0v256z"])}},179:function(e,t,n){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return void 0===e?"undefined":n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":n(e)},o="undefined"!=typeof Symbol?Symbol("immer-proxy-state"):"__$immer_state",i="An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.";var c=!(void 0!==e&&"production"===Object({SO_PREFIX:"",CSS_MODULE:!1}).NODE_ENV||"verifyMinified"!==function(){}.name),a="undefined"!=typeof Proxy;function s(e){return!!e&&!!e[o]}function u(e){if(!e)return!1;if("object"!==(void 0===e?"undefined":r(e)))return!1;if(Array.isArray(e))return!0;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return c&&Object.freeze(e),e}function f(e){return Array.isArray(e)?e.slice():void 0===e.__proto__?Object.assign(Object.create(null),e):Object.assign({},e)}function p(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(n,e[n]);else for(var r in e)t(r,e[r])}function y(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e){if(s(e)){var t=e[o];return!0===t.modified?!0===t.finalized?t.copy:(t.finalized=!0,n=a?t.copy:t.copy=f(e),r=t.base,p(n,function(e,t){t!==r[e]&&(n[e]=d(t))}),l(n)):t.base}var n,r;return function e(t){if(!u(t))return;if(Object.isFrozen(t))return;p(t,function(n,r){s(r)?t[n]=d(r):e(r)});l(t)}(e),e}function m(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}var b=null,h={get:function(e,t){if(t===o)return e;if(e.modified){var n=e.copy[t];return n===e.base[t]&&u(n)?e.copy[t]=w(e,n):n}if(y(e.proxies,t))return e.proxies[t];var r=e.base[t];return!s(r)&&u(r)?e.proxies[t]=w(e,r):r},has:function(e,t){return t in g(e)},ownKeys:function(e){return Reflect.ownKeys(g(e))},set:function(e,t,n){if(!e.modified){if(t in e.base&&m(e.base[t],n)||y(e.proxies,t)&&e.proxies[t]===n)return!0;O(e)}return e.copy[t]=n,!0},deleteProperty:function(e,t){return O(e),delete e.copy[t],!0},getOwnPropertyDescriptor:function(e,t){var n=e.modified?e.copy:y(e.proxies,t)?e.proxies:e.base,r=Reflect.getOwnPropertyDescriptor(n,t);!r||Array.isArray(n)&&"length"===t||(r.configurable=!0);return r},defineProperty:function(){throw new Error("Immer does currently not support defining properties on draft objects")},setPrototypeOf:function(){throw new Error("Don't even try this...")}},v={};function g(e){return!0===e.modified?e.copy:e.base}function O(e){e.modified||(e.modified=!0,e.copy=f(e.base),Object.assign(e.copy,e.proxies),e.parent&&O(e.parent))}function w(e,t){var n={modified:!1,finalized:!1,parent:e,base:t,copy:void 0,proxies:{}},r=Array.isArray(t)?Proxy.revocable([n],v):Proxy.revocable(n,h);return b.push(r),r.proxy}p(h,function(e,t){v[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});var S={},j=null;function k(e){return e.hasCopy?e.copy:e.base}function x(e){e.modified||(e.modified=!0,e.parent&&x(e.parent))}function E(e){e.hasCopy||(e.hasCopy=!0,e.copy=f(e.base))}function _(e,t){var n=f(t);p(t,function(e){var t;Object.defineProperty(n,""+e,S[t=""+e]||(S[t]={configurable:!0,enumerable:!0,get:function(){return function(e,t){P(e);var n=k(e)[t];return!e.finalizing&&n===e.base[t]&&u(n)?(E(e),e.copy[t]=_(e,n)):n}(this[o],t)},set:function(e){!function(e,t,n){if(P(e),!e.modified){if(m(k(e)[t],n))return;x(e),E(e)}e.copy[t]=n}(this[o],t,e)}}))});var r,i,c,a={modified:!1,hasCopy:!1,parent:e,base:t,proxy:n,copy:void 0,finished:!1,finalizing:!1,finalized:!1};return r=n,i=o,c=a,Object.defineProperty(r,i,{value:c,enumerable:!1,writable:!0}),j.push(a),n}function P(e){if(!0===e.finished)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process?")}function z(e,t){var n=j;j=[];try{var c=_(void 0,e),a=t.call(c,c);p(j,function(e,t){t.finalizing=!0}),function(){for(var e=j.length-1;e>=0;e--){var t=j[e];!1===t.modified&&(Array.isArray(t.base)?(c=t).proxy.length!==c.base.length&&x(t):(n=t,o=Object.keys(n.base),i=Object.keys(n.proxy),function(e,t){if(m(e,t))return!0;if("object"!==(void 0===e?"undefined":r(e))||null===e||"object"!==(void 0===t?"undefined":r(t))||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var i=0;i<n.length;i++)if(!hasOwnProperty.call(t,n[i])||!m(e[n[i]],t[n[i]]))return!1;return!0}(o,i)||x(t)))}var n,o,i,c}();var s=d(c);if(void 0!==a&&a!==c){if(c[o].modified)throw new Error(i);s=a}return p(j,function(e,t){t.finished=!0}),s}finally{j=n}}t.a=function e(t,n){if(1===arguments.length){var c=t;if("function"!=typeof c)throw new Error("if produce is called with 1 argument, the first argument should be a function");return function(){var t=arguments;return e(t[0],function(e){return t[0]=e,c.apply(e,t)})}}if(2!==arguments.length)throw new Error("produce expects 1 or 2 arguments, got "+arguments.length);if("function"!=typeof n)throw new Error("the second argument to produce should be a function");if("object"!==(void 0===t?"undefined":r(t))||null===t)return n(t);if(!u(t))throw new Error("the first argument to an immer producer should be a primitive, plain object or array, got "+(void 0===t?"undefined":r(t))+': "'+t+'"');return a?function(e,t){var n=b;b=[];try{var r=w(void 0,e),c=t.call(r,r),a=d(r);if(void 0!==c&&c!==r){if(r[o].modified)throw new Error(i);a=c}return p(b,function(e,t){return t.revoke()}),a}finally{b=n}}(t,n):z(t,n)}}).call(t,n(29))},297:function(e,t){e.exports="# Sticky *附着*\n\n类似于 position: sticky，在屏幕滚动时，保持元素在屏幕可见区域内。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| bottom | number | 无 | 距离底部多少偏移量触发 |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 扩展样式。\b触发浮动后的默认zIndex为900，修改style的zIndex来改变。 |\n| target | string \\| HTMLElement | 无 | 附着的目标，默认为document.body。可以传入HTMLElement或者css selector，target 必须为 Sticky 组件的祖先节点 |\n| top | number | 无 | 距离顶部多少偏移量触发 |"},298:function(e,t){e.exports="# Sticky\n\n## API\n\n\n<example />"},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),o=n(174),i=n(0),c=n.n(i);t.default=function(){return c.a.createElement(r.a,{top:20},c.a.createElement(o.a,{onClose:!0},c.a.createElement("h3",null,"Some content."),"Sticky 20px to top."))}},300:function(e,t){e.exports="/**\n * cn - 附着在顶部 20px\n * en - Sticky 20px to top\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function () {\n  return (\n    <Sticky top={20}>\n      <Alert onClose>\n        <h3>Some content.</h3>\n        Sticky 20px to top.\n      </Alert>\n    </Sticky>\n  )\n}\n"},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),o=n(174),i=n(0),c=n.n(i),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),a(t,[{key:"componentDidMount",value:function(){this.element.scrollTop=400}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"sticky_element",ref:function(t){e.element=t},style:{position:"relative",height:400,overflow:"auto"}},c.a.createElement("div",{style:{height:1600,background:"#f2f2f2"}},c.a.createElement("div",{style:{height:600}},"Some text."),c.a.createElement(r.a,{top:0,bottom:0,target:"#sticky_element"},c.a.createElement(o.a,{style:{marginBottom:0},type:"info"},"Sticky to element"))))}}]),t}();t.default=s},302:function(e,t){e.exports="/**\n * cn - 附着在元素内\n * en - Sticky to element\n */\nimport React, { PureComponent } from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default class extends PureComponent {\n  componentDidMount() {\n    this.element.scrollTop = 400\n  }\n\n  render() {\n    return (\n      <div\n        id=\"sticky_element\"\n        ref={(el) => { this.element = el }}\n        style={{ position: 'relative', height: 400, overflow: 'auto' }}\n      >\n        <div style={{ height: 1600, background: '#f2f2f2' }}>\n          <div style={{ height: 600 }}>Some text.</div>\n          <Sticky top={0} bottom={0} target=\"#sticky_element\">\n            <Alert style={{ marginBottom: 0 }} type=\"info\">\n              Sticky to element\n            </Alert>\n          </Sticky>\n        </div>\n      </div>\n    )\n  }\n}\n"},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(47),o=n(174),i=n(0),c=n.n(i);t.default=function(){return c.a.createElement(r.a,{bottom:0},c.a.createElement(o.a,{style:{marginBottom:0},onClose:!0},"Sticky at bottom."))}},304:function(e,t){e.exports="/**\n * cn - 附着在底部\n * en - Sticky to bottom\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function () {\n  return (\n    <Sticky bottom={0}>\n      <Alert style={{ marginBottom: 0 }} onClose>\n        Sticky at bottom.\n      </Alert>\n    </Sticky>\n  )\n}\n"},313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),i=n(28),c=n(27),a=n(16),s=n(297),u=n.n(s),l=n(298),f=n.n(l),p=Object(a.a)(u.a,f.a),y=[{title:Object(a.a)("附着在顶部 20px","Sticky 20px to top"),component:n(299).default,rawText:n(300)},{title:Object(a.a)("附着在元素内","Sticky to element"),component:n(301).default,rawText:n(302)},{title:Object(a.a)("附着在底部","Sticky to bottom"),component:n(303).default,rawText:n(304)}];t.default=Object(i.a)(function(e){return o.a.createElement(c.b,Object.assign({},e,{source:p,examples:y}))})}});