(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[10],{192:function(e,t,n){"use strict";var m=n(20),d=n(0),p=n.n(d),f=n(230),y=n(36),b=n(14);t.a=function(s){return function(e){var t=Object(d.useState)(""),n=Object(m.a)(t,2),a=n[0],r=n[1],o=Object(d.useState)([]),l=Object(m.a)(o,1)[0],u=e.location.hash,c=Object(d.useCallback)(function(e){e.forEach(function(e){l.push(e)})},[]),i=Object(d.useCallback)(function(){if(u){var e=document.querySelector(u);e&&setTimeout(function(){e.scrollIntoView()},50)}},[u]);Object(d.useEffect)(function(){i();var e=function(){var n=document.documentElement.scrollTop,e=l.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),r(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return p.a.createElement("div",{className:Object(b.f)("_")},p.a.createElement(s,{onHeadingSetted:c}),!e.noNav&&p.a.createElement(f.a,{className:Object(b.f)("sticky"),top:50},p.a.createElement("div",{className:Object(b.f)("nav")},l.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return p.a.createElement("a",{key:t,className:Object(b.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===y.a.location.search.indexOf("?example="))y.a.push("".concat(y.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var D=n(0),L=n.n(D),s=n(30),G=n(20),a=n(233),m=n.n(a),d=n(31),p=n(50),R=n(14),f=n(11),r=n(12),l=n.n(r),o=n(234),u=n.n(o),T=(n(235),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,r=e.value,o=Object(D.useRef)(null);return Object(D.useEffect)(function(){var e=o.current;u.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),L.a.createElement("pre",{ref:o,className:l()(n||"lang-jsx",Object(R.a)("pre"))},L.a.createElement("code",null,r))}),P=n(217),c=n(45),i=n(7),y=n(8),b=n(10),g=n(2),B=n(9),h=n(34),E=n(205),N=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(b.a)(this,Object(g.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(B.a)(n,e),Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(E.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(E.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:L.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(h.b),C=n(59),A=n(36),I=L.a.createElement("div",{className:Object(R.a)("placeholder")},L.a.createElement(c.a,null));function v(e){var t=e.component,n=e.id,a=e.name,r=e.rawText,o=e.title,l=Object(D.useRef)(null),u=Object(D.useState)(!1),c=Object(G.a)(u,2),i=c[0],s=c[1],m=Object(D.useState)(Object(D.createElement)(t)),d=Object(G.a)(m,1)[0],p=Object(D.useState)(),f=Object(G.a)(p,2),y=f[0],b=f[1],g=Object(D.useState)(),B=Object(G.a)(g,1)[0],h=function e(t,n,a){l.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(D.useEffect)(function(){if(l.current)if(i)l.current.style.height="".concat(y,"px");else{var e=y%15;0<e&&h(e,1,B),h((y-e)/15,15,B)}},[i]);var E=function(e){s(!i),B=e},v=function(e){return L.a.createElement("a",{href:"javascript:;",className:Object(R.a)("toggle"),onClick:E.bind(null,e)},L.a.createElement(C.a,{name:i?"code-close":"code"}))},O=r.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=A.a.location.search,x="?example=";if(0===j.indexOf(x)&&(j=j.replace(x,""),a.indexOf(j)<0))return null;var z=o.split("\n"),S=Object(P.a)(z),k=S[0],w=S.slice(1);return k&&(k=k.trim()),L.a.createElement(D.Fragment,null,k&&L.a.createElement("h3",{key:"0",id:n},k),L.a.createElement(N,{placeholder:I},L.a.createElement("div",{className:Object(R.a)("_",i&&"showcode")},L.a.createElement("div",{className:Object(R.a)("body")},d),0<o.length&&L.a.createElement("div",{className:Object(R.a)("desc")},w.map(function(e,t){return L.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),v(!1)),L.a.createElement("div",{ref:l,className:Object(R.a)("code")},L.a.createElement(T,{onHighLight:function(e){b(e)},onClose:E,value:O}),v(!0)))))}v.defaultProps={rawText:""};var O=function(e){var t=e.children,n=Object(D.useState)(!1),a=Object(G.a)(n,2),r=a[0],o=a[1],l=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),u=r?"pre":"div";return L.a.createElement("div",{onClick:function(){o(!r)},className:Object(R.e)("console")},L.a.createElement(u,null,l))};O.defaultProps={children:[]};var j=O;function x(e){var t=e.children,n=Object(s.a)(t[1].props.children);try{n.sort(function(e,t){return e.props.children[0].props.children[0].localeCompare(t.props.children[0].props.children[0])})}catch(e){console.log("sort fail...")}return L.a.createElement("div",{style:{overflow:"auto"}},L.a.createElement("table",{className:"doc-api-table"},t[0],L.a.cloneElement(t[1],{children:n})))}x.defaultProps={};var z=x,S=/^<code name="([\w|-]+)" /,k=/^<example name="([\w|-]+)"/;function w(e){var t=e.onHeadingSetted,o=e.codes,l=e.examples,n=e.source,a=Object(D.useState)([]),r=Object(G.a)(a,1)[0],u=Object(D.useState)({}),c=Object(G.a)(u,1)[0];Object(D.useEffect)(function(){t&&t(r)},[]);var i=function(e){r.push(e)};return r=[],L.a.createElement(m.a,{className:Object(R.e)("_"),source:n,renderers:{code:T,heading:function(e){var t,n,a=e.level,r=e.children,o="".concat(a,"-").concat(r[0]),l="h".concat(a);if("object"==typeof r[0])return L.a.createElement(l,null,r);if(!c[o]){var u="heading-".concat((t=a,n=r[0],4===t?Object(p.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||i({id:u,level:a,children:r}),c[o]=L.a.createElement(l,{id:u},r)}return c[o]},html:function(e){if("<example />"===e.value)return function(){if(c.examples)return c.examples;if(!l)return L.a.createElement("div",null);var e=Object(f.b)("示例","Example"),t="heading-example-h";return i({id:t,level:2,children:[e]}),c.examples=[L.a.createElement("h2",{key:"h",id:t},e)].concat(Object(s.a)(l.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),r=Object(G.a)(a,1)[0];return i({id:n,level:3,children:[r]}),L.a.createElement(v,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),c.examples}();var t=e.value.match(k);if(t)return function(t){var e="example-".concat(t);if(!c[e]){var n=(l||[]).find(function(e){return e.name===t});c[e]=n?L.a.createElement(v,n):null}return c[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return L.a.createElement("br",null);var n,a,r=e.value.match(S);return r?(n=r[1],(a=o[n])?[L.a.createElement(T,{key:"cb",value:a.text})].concat(Object(s.a)(a.log.map(function(e,t){return L.a.createElement(j,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:z,link:function(e){var t=0===e.href.indexOf("http")?"_blank":void 0;return t?L.a.createElement("a",{href:e.href,target:t},e.children):L.a.createElement(d.a,{to:e.href,target:t},e.children)}}})}w.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var W=n(60),F=n(192);n.d(t,"a",function(){return q});var H,_=((H=function(e){var t=Object(D.useState)(e.source),n=Object(G.a)(t,2),a=n[0],r=n[1];return Object(D.useEffect)(function(){e.loader&&e.loader().then(function(e){r(e.default)})},[]),a?L.a.createElement(w,Object.assign({},e,{source:a})):L.a.createElement(W.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(D.memo)(H));t.b=_;function q(t,n){return Object(F.a)(function(e){return L.a.createElement(_,Object.assign({},e,{noNav:n,loader:t}))})}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return m});var a=n(216),r=n(50),o=n(44),l={},u=null,c=!1,i=o.b.height;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>i){var n=Object(r.b)();return l[n]=e,n}return e.render(),null}function m(e){e&&delete l[e]}document.addEventListener("scroll",function(){u&&clearTimeout(u),u=setTimeout(function(){c||(c=!0,Object.keys(l).forEach(function(e){var t=l[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>i||(delete l[e],a())}),c=!1),u=null},80)},a.a)},465:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(192),l=n(198),u=n(11),c=n(466),i=n.n(c),s=n(467),m=n.n(s),d=Object(u.b)(i.a,m.a),p=[{name:"1-base",title:Object(u.b)("基本用法 \n Button 内置了几种常用的样式，通过 type 来使用","Base \n Button has several built-in styles, used by type."),component:n(468).default,rawText:n(469)},{name:"2-outline",title:Object(u.b)("透明背景 \n 添加 outline 属性可以设置为透明背景，type 不能为 default 和 link。","Outline \n Adding outline property can set background to transparent. Outline type can not be default and link."),component:n(470).default,rawText:n(471)},{name:"3-disabled",title:Object(u.b)("不可用 \n 添加 disabled 属性可以禁用按钮。","Disabled \n Adding disabled property can disable the button."),component:n(472).default,rawText:n(473)},{name:"4-size",title:Object(u.b)("大小 \n 一共有三种尺寸，['small', 'default', 'large']，默认为 'default'","Size \n There are three sizes, ['small', 'default', 'large'], default value is 'default'."),component:n(474).default,rawText:n(475)},{name:"5-loading",title:Object(u.b)("加载中 \n 设定 loading 属性，可以让按钮变成加载中状态","Loading \n Set loading property can add a loading indicator to button."),component:n(476).default,rawText:n(477)},{name:"6-href",title:Object(u.b)("链接 \n 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性","Link \n Set the href attribute, the button will be rendered as <a> tag and you can also set the target property."),component:n(478).default,rawText:n(479)},{name:"7-icon",title:Object(u.b)("图标 \n 需要图标可以在内容中自行加入","Icon \n If you need a icon, you can add it to the content by yourself."),component:n(480).default,rawText:n(481)},{name:"8-group",title:Object(u.b)("组合 \n 一组 Button 可以用 Button.Group 容器中，按钮样式通过 Button.Gorup 的 size, type, outline 属性设置","Group \n A series of buttons can group by Button.Group, set styles by Button.Group's size, type, and outline property."),component:n(482).default,rawText:n(483)}];t.default=Object(o.a)(function(e){return r.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},466:function(e,t){e.exports="# Button *按钮*\n\n<example />\n\n## API\n\n### Button\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string \\| ReactElement | 必填 |  |\n| className | string | 无 | 扩展className |\n| disabled | bool | false | 禁用 |\n| href | string | 无 | 如果设置了 href 属性，将会用 &lt;a> 代替 &lt;button> |\n| outline | boolean | false | outline 为 true 时，显示透明背景的按钮 |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 'default' | 可选值 \\['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'link'] |\n\n### Button.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | \\[Button] | 必填 | 由 Button 组成的 array |\n| size | string | 无 | 同 Button；如果 Button 和 Group 同时设置 size，以 Group 为准 |\n| outline | boolean | 无 | 同 Button；如果 Button 未设置，使用此值 |\n| type | string | 无 | 同 Button；如果 Button 和 Group 同时设置 type，以 Group 为准 |"},467:function(e,t){e.exports="# Button\n\n<example />\n\n## API\n\n### Button\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | string \\| ReactElement | required |  |\n| className | string | - | extend className |\n| disabled | bool | false | Specifies the button should be disabled |\n| href | string | - | If the href attribute is set, &lt;a> will be used instead of &lt;button>. |\n| outline | boolean | false | When outline is true, the background is transparent. |\n| size | string | 'default' | optional value \\['large', 'default', 'small'] |\n| style | object | - | Container element style |\n| type | string | 'default' | optional value \\['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'link'] |\n\n### Button.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | \\[Button] | required | array of Button |\n| size | string | - | same as Button |\n| outline | boolean | - | same as Button |\n| type | string | - | same as Button |"},468:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,"Default"),r.a.createElement(o.a,{type:"primary"},"Primary"),r.a.createElement(o.a,{type:"secondary"},"Secondary"),r.a.createElement(o.a,{type:"success"},"Success"),r.a.createElement(o.a,{type:"warning"},"Warning"),r.a.createElement(o.a,{type:"danger"},"Danger"),r.a.createElement(o.a,{type:"link"},"Link"))}},469:function(e,t){e.exports='/**\n * cn - 基本用法\n *    -- Button 内置了几种常用的样式，通过 type 来使用\n * en - Base\n *    -- Button has several built-in styles, used by type.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button>Default</Button>\n      <Button type="primary">Primary</Button>\n      <Button type="secondary">Secondary</Button>\n      <Button type="success">Success</Button>\n      <Button type="warning">Warning</Button>\n      <Button type="danger">Danger</Button>\n      <Button type="link">Link</Button>\n    </div>\n  )\n}\n'},470:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{outline:!0,type:"primary"},"Primary"),r.a.createElement(o.a,{outline:!0,type:"secondary"},"Secondary"),r.a.createElement(o.a,{outline:!0,type:"success"},"Success"),r.a.createElement(o.a,{outline:!0,type:"warning"},"Warning"),r.a.createElement(o.a,{outline:!0,type:"danger"},"Danger"))}},471:function(e,t){e.exports='/**\n * cn - 透明背景\n *    -- 添加 outline 属性可以设置为透明背景，type 不能为 default 和 link。\n * en - Outline\n *    -- Adding outline property can set background to transparent. Outline type can not be default and link.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button outline type="primary">\n        Primary\n      </Button>\n      <Button outline type="secondary">\n        Secondary\n      </Button>\n      <Button outline type="success">\n        Success\n      </Button>\n      <Button outline type="warning">\n        Warning\n      </Button>\n      <Button outline type="danger">\n        Danger\n      </Button>\n    </div>\n  )\n}\n'},472:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{disabled:!0},"Default"),r.a.createElement(o.a,{disabled:!0,type:"primary"},"Primary"),r.a.createElement(o.a,{disabled:!0,type:"secondary"},"Secondary"),r.a.createElement(o.a,{disabled:!0,type:"success"},"Success"),r.a.createElement(o.a,{disabled:!0,type:"warning"},"Warning"),r.a.createElement(o.a,{disabled:!0,type:"danger"},"Danger"),r.a.createElement(o.a,{disabled:!0,type:"link"},"Link"))}},473:function(e,t){e.exports='/**\n * cn - 不可用\n *    -- 添加 disabled 属性可以禁用按钮。\n * en - Disabled\n *    -- Adding disabled property can disable the button.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button disabled>Default</Button>\n      <Button disabled type="primary">\n        Primary\n      </Button>\n      <Button disabled type="secondary">\n        Secondary\n      </Button>\n      <Button disabled type="success">\n        Success\n      </Button>\n      <Button disabled type="warning">\n        Warning\n      </Button>\n      <Button disabled type="danger">\n        Danger\n      </Button>\n      <Button disabled type="link">\n        Link\n      </Button>\n    </div>\n  )\n}\n'},474:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(o.a,{size:"small"},"Default"),r.a.createElement(o.a,{size:"small",type:"primary"},"Primary"),r.a.createElement(o.a,{size:"small",type:"secondary"},"Secondary"),r.a.createElement(o.a,{size:"small",type:"success"},"Success"),r.a.createElement(o.a,{size:"small",type:"warning"},"Warning"),r.a.createElement(o.a,{size:"small",type:"danger"},"Danger"),r.a.createElement(o.a,{size:"small",type:"link"},"Link")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,null,"Default"),r.a.createElement(o.a,{type:"primary"},"Primary"),r.a.createElement(o.a,{type:"secondary"},"Secondary"),r.a.createElement(o.a,{type:"success"},"Success"),r.a.createElement(o.a,{type:"warning"},"Warning"),r.a.createElement(o.a,{type:"danger"},"Danger"),r.a.createElement(o.a,{type:"link"},"Link")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(o.a,{size:"large"},"Default"),r.a.createElement(o.a,{size:"large",type:"primary"},"Primary"),r.a.createElement(o.a,{size:"large",type:"secondary"},"Secondary"),r.a.createElement(o.a,{size:"large",type:"success"},"Success"),r.a.createElement(o.a,{size:"large",type:"warning"},"Warning"),r.a.createElement(o.a,{size:"large",type:"danger"},"Danger"),r.a.createElement(o.a,{size:"large",type:"link"},"Link")))}},475:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 一共有三种尺寸，[\'small\', \'default\', \'large\']，默认为 \'default\'\n * en - Size\n *    -- There are three sizes, [\'small\', \'default\', \'large\'], default value is \'default\'.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <div>\n        <Button size="small">Default</Button>\n        <Button size="small" type="primary">\n          Primary\n        </Button>\n        <Button size="small" type="secondary">\n          Secondary\n        </Button>\n        <Button size="small" type="success">\n          Success\n        </Button>\n        <Button size="small" type="warning">\n          Warning\n        </Button>\n        <Button size="small" type="danger">\n          Danger\n        </Button>\n        <Button size="small" type="link">\n          Link\n        </Button>\n      </div>\n      <br />\n      <div>\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary">Secondary</Button>\n        <Button type="success">Success</Button>\n        <Button type="warning">Warning</Button>\n        <Button type="danger">Danger</Button>\n        <Button type="link">Link</Button>\n      </div>\n      <br />\n      <div>\n        <Button size="large">Default</Button>\n        <Button size="large" type="primary">\n          Primary\n        </Button>\n        <Button size="large" type="secondary">\n          Secondary\n        </Button>\n        <Button size="large" type="success">\n          Success\n        </Button>\n        <Button size="large" type="warning">\n          Warning\n        </Button>\n        <Button size="large" type="danger">\n          Danger\n        </Button>\n        <Button size="large" type="link">\n          Link\n        </Button>\n      </div>\n    </div>\n  )\n}\n'},476:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{loading:!0,size:"small",type:"primary"},"Small"),r.a.createElement(o.a,{loading:!0,type:"primary"},"Default"),r.a.createElement(o.a,{loading:!0,size:"large",type:"primary"},"Large"))}},477:function(e,t){e.exports='/**\n * cn - 加载中\n *    -- 设定 loading 属性，可以让按钮变成加载中状态\n * en - Loading\n *    -- Set loading property can add a loading indicator to button.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Button loading size="small" type="primary">\n        Small\n      </Button>\n      <Button loading type="primary">\n        Default\n      </Button>\n      <Button loading size="large" type="primary">\n        Large\n      </Button>\n    </div>\n  )\n}\n'},478:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62);t.default=function(){return r.a.createElement(o.a,{href:"#home",target:"_blank",type:"primary"},"Home")}},479:function(e,t){e.exports='/**\n * cn - 链接\n *    -- 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性\n * en - Link\n *    -- Set the href attribute, the button will be rendered as <a> tag and you can also set the target property.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\n\nexport default function() {\n  return (\n    <Button href="#home" target="_blank" type="primary">\n      Home\n    </Button>\n  )\n}\n'},480:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62),l=n(54);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{size:"small",type:"primary"},r.a.createElement(l.a,{name:"home"})," Small"),r.a.createElement(o.a,{type:"primary"},"Default ",r.a.createElement(l.a,{name:"home"})),r.a.createElement(o.a,{size:"large",type:"primary"},r.a.createElement(l.a,{name:"home"})," Large"))}},481:function(e,t){e.exports='/**\n * cn - 图标\n *    -- 需要图标可以在内容中自行加入\n * en - Icon\n *    -- If you need a icon, you can add it to the content by yourself.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function() {\n  return (\n    <div>\n      <Button size="small" type="primary">\n        <FontAwesome name="home" /> Small\n      </Button>\n      <Button type="primary">\n        Default <FontAwesome name="home" />\n      </Button>\n      <Button size="large" type="primary">\n        <FontAwesome name="home" /> Large\n      </Button>\n    </div>\n  )\n}\n'},482:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62),l=n(54);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a.Group,null,r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")),r.a.createElement("br",null),r.a.createElement(o.a.Group,{outline:!0,type:"primary"},r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")),r.a.createElement("br",null),r.a.createElement(o.a.Group,{type:"primary"},r.a.createElement(o.a,null,r.a.createElement(l.a,{name:"angle-left"}),"  Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right  ",r.a.createElement(l.a,{name:"angle-right"}))),r.a.createElement("br",null),r.a.createElement(o.a.Group,{size:"large"},r.a.createElement(o.a,null,"Left"),r.a.createElement(o.a,null,"Center"),r.a.createElement(o.a,null,"Right")))}},483:function(e,t){e.exports='/**\n * cn - 组合\n *    -- 一组 Button 可以用 Button.Group 容器中，按钮样式通过 Button.Gorup 的 size, type, outline 属性设置\n * en - Group\n *    -- A series of buttons can group by Button.Group, set styles by Button.Group\'s size, type, and outline property.\n */\nimport React from \'react\'\nimport { Button } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nexport default function() {\n  return (\n    <div>\n      <Button.Group>\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group outline type="primary">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group type="primary">\n        <Button>\n          <FontAwesome name="angle-left" />\n          &nbsp; Left\n        </Button>\n        <Button>Center</Button>\n        <Button>\n          Right &nbsp;\n          <FontAwesome name="angle-right" />\n        </Button>\n      </Button.Group>\n\n      <br />\n\n      <Button.Group size="large">\n        <Button>Left</Button>\n        <Button>Center</Button>\n        <Button>Right</Button>\n      </Button.Group>\n    </div>\n  )\n}\n'}}]);