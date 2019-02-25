(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[39],{1186:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=n(123),r=n(129),a=n(25),c=n(1187),l=n.n(c),m=n(1188),u=n.n(m),f=Object(a.a)(l.a,u.a),d=[{name:"1-top",title:Object(a.a)("基本 \n 附着在顶部 20px","Basic \n Sticky 20px to top"),component:n(1189).default,rawText:n(1190)},{name:"2-element",title:Object(a.a)("指定元素 \n 附着在元素内","Element \n Sticky to element"),component:n(1191).default,rawText:n(1192)},{name:"3-bottom",title:Object(a.a)("位置 \n 附着在底部","Position \n Sticky to bottom"),component:n(1193).default,rawText:n(1194)}];e.default=Object(s.a)(function(t){return i.a.createElement(r.b,Object.assign({},t,{codes:void 0,source:f,examples:d}))})},1187:function(t,e){t.exports="# Sticky *附着*\n\n类似于 position: sticky，在屏幕滚动时，保持元素在屏幕可见区域内。\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| bottom | number | 无 | 距离底部多少偏移量触发 |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 扩展样式。\b触发浮动后的默认zIndex为900，修改style的zIndex来改变。 |\n| target | string \\| HTMLElement | 无 | 附着的目标，默认为document.body。可以传入HTMLElement或者css selector，target 必须为 Sticky 组件的祖先节点 |\n| top | number | 无 | 距离顶部多少偏移量触发 |"},1188:function(t,e){t.exports="# Sticky\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| bottom | number | - | Offsets from the bottom. |\n| className | string | - | Extend className |\n| style | object | - | Extend style. \bThe default z-Index after triggering the float is 900, and you can modify the z-Index of the style to change. |\n| target | string \\| HTMLElement | none | Attached target. the default is the document.body. You can pass in an HTMLElement or css selector, and the target must be an ancestor node of the Sticky component. |\n| top | number | none | Offsets from the top. |"},1189:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=n(160),r=n(169);e.default=function(){return i.a.createElement(s.a,{top:20},i.a.createElement(r.a,{onClose:!0},i.a.createElement("h3",null,"Some content."),"Sticky 20px to top."))}},1190:function(t,e){t.exports="/**\n * cn - 基本\n *    -- 附着在顶部 20px\n * en - Basic\n *    -- Sticky 20px to top\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function() {\n  return (\n    <Sticky top={20}>\n      <Alert onClose>\n        <h3>Some content.</h3>\n        Sticky 20px to top.\n      </Alert>\n    </Sticky>\n  )\n}\n"},1191:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return f});var o=n(7),i=n(8),s=n(10),r=n(2),a=n(9),c=n(0),l=n.n(c),m=n(160),u=n(169),f=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(a.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.element.scrollTop=400}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"sticky_element",ref:function(t){e.element=t},style:{position:"relative",height:400,overflow:"auto"}},l.a.createElement("div",{style:{height:1600,background:"#f2f2f2"}},l.a.createElement("div",{style:{height:600}},"Some text."),l.a.createElement(m.a,{top:0,bottom:0,target:"#sticky_element"},l.a.createElement(u.a,{style:{marginBottom:0},type:"info"},"Sticky to element"))))}}]),e}(c.PureComponent)},1192:function(t,e){t.exports="/**\n * cn - 指定元素\n *    -- 附着在元素内\n * en - Element\n *    -- Sticky to element\n */\nimport React, { PureComponent } from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default class extends PureComponent {\n  componentDidMount() {\n    this.element.scrollTop = 400\n  }\n\n  render() {\n    return (\n      <div\n        id=\"sticky_element\"\n        ref={el => {\n          this.element = el\n        }}\n        style={{ position: 'relative', height: 400, overflow: 'auto' }}\n      >\n        <div style={{ height: 1600, background: '#f2f2f2' }}>\n          <div style={{ height: 600 }}>Some text.</div>\n          <Sticky top={0} bottom={0} target=\"#sticky_element\">\n            <Alert style={{ marginBottom: 0 }} type=\"info\">\n              Sticky to element\n            </Alert>\n          </Sticky>\n        </div>\n      </div>\n    )\n  }\n}\n"},1193:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),s=n(160),r=n(169);e.default=function(){return i.a.createElement(s.a,{bottom:0},i.a.createElement(r.a,{style:{marginBottom:0},onClose:!0},"Sticky at bottom."))}},1194:function(t,e){t.exports="/**\n * cn - 位置\n *    -- 附着在底部\n * en - Position\n *    -- Sticky to bottom\n */\nimport React from 'react'\nimport { Alert, Sticky } from 'shineout'\n\nexport default function() {\n  return (\n    <Sticky bottom={0}>\n      <Alert style={{ marginBottom: 0 }} onClose>\n        Sticky at bottom.\n      </Alert>\n    </Sticky>\n  )\n}\n"},127:function(t,e,n){"use strict";function o(t){return"string"!=typeof t&&console.error(new Error("str should be a string")),t&&t[0].toUpperCase()+t.slice(1)}function i(t,n){if("string"==typeof t)return t.indexOf("{")<0?t:t.replace(/\\?\{([^{}]+)\}/g,function(t,e){return"\\"===t.charAt(0)?t.slice(1):null===n[e]||void 0===n[e]?"":n[e]});if("function"!=typeof t)return"";var e=t(n);return e===n&&"object"==typeof e&&(e=Object.assign({},n)),e}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},169:function(t,e,n){"use strict";var o=n(13),i=n(7),s=n(8),r=n(10),a=n(2),c=n(9),l=n(3),m=n(0),u=n.n(m),f=n(27),d=n(127),p=n(15),h=n(5),y=n(125),b=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(r.a)(this,Object(a.a)(n).call(this,t))).state={dismiss:0},e.bindRef=e.bindRef.bind(Object(l.a)(Object(l.a)(e))),e.dismiss=e.dismiss.bind(Object(l.a)(Object(l.a)(e))),e.handleClose=e.handleClose.bind(Object(l.a)(Object(l.a)(e))),e}return Object(c.a)(n,t),Object(s.a)(n,[{key:"componentDidUpdate",value:function(t){this.props.dismiss!==t.dismiss&&this.props.dismiss&&this.handleClose()}},{key:"bindRef",value:function(t){this.element=t}},{key:"dismiss",value:function(){var t=this.props.onClose;this.setState({dismiss:2}),"function"==typeof t&&t()}},{key:"handleClose",value:function(){var t=this;if(!(0<this.state.dismiss)){var e=this.props.duration;0<e?this.setState({dismiss:1},function(){setTimeout(t.dismiss,e)}):this.dismiss()}}},{key:"renderIcon",value:function(){var t=this.props.icon,e=this.props,n=e.type,o=e.iconSize;if("boolean"==typeof t&&(t=y.a[Object(d.a)(n)]),!t)return null;var i={width:o,height:o,marginRight:o/2};return u.a.createElement("div",{className:Object(h.a)("icon"),style:i},t)}},{key:"render",value:function(){var t=this.state.dismiss;if(2===t)return null;var e=this.props,n=e.children,o=e.className,i=e.type,s=e.onClose,r=this.renderIcon(),a=this.props.style,c=Object(h.a)("_",i,1===t&&"dismissed",s&&"with-close",r&&"with-icon");return o&&(c+=" ".concat(o)),u.a.createElement("div",{ref:this.bindRef,className:c,style:a},s&&u.a.createElement("a",{href:"javascript:;",className:Object(h.a)("close"),onClick:this.handleClose},y.a.Close),r,u.a.createElement("div",{className:Object(h.a)("content")},n))}}]),n}(f.b);b.defaultProps=Object(o.a)({},p.a,{duration:216,iconSize:14,type:"warning"}),b.displayName="ShineoutAlert",e.a=b}}]);