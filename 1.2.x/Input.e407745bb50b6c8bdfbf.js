(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[26],{130:function(e,t,n){"use strict";var m=n(21),a=n(7),r=n(8),l=n(10),o=n(2),i=n(9),s=n(3),u=n(0),f=n.n(u),c=n(11),b=n.n(c),p=n(27),d=n(36),y=n(5);t.a=Object(d.b)(function(d,h){var e,t;return t=e=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(o.a)(n).call(this,e))).state={focus:e.autoFocus},t.handleBlur=t.handleBlur.bind(Object(s.a)(Object(s.a)(t))),t.handleFocus=t.handleFocus.bind(Object(s.a)(Object(s.a)(t))),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"handleBlur",value:function(e){this.setState({focus:!1});var t=this.props.onBlur;t&&t(e)}},{key:"handleFocus",value:function(e){this.setState({focus:!0});var t=this.props.onFocus;t&&t(e)}},{key:"renderHelp",value:function(e){var t=this.props,n=t.error,a=t.tip,r=t.popover,l=["tip",r||"bottom-left"];return n&&r?(l.push("error"),f.a.createElement("div",{className:y.n.apply(void 0,l)},n.message)):a&&e?f.a.createElement("div",{className:Object(y.n)([].concat(l))},a):null}},{key:"render",value:function(){var e=this.props,t=(e.className,e.border),n=e.size,a=(e.tip,e.popover),r=e.width,l=e.style,o=e.error,i=Object(m.a)(e,["className","border","size","tip","popover","width","style","error"]),s=this.state.focus,u=d.tag||"label",c=Object.assign({width:r},l),p=b()(Object(y.n)("_",s&&"focus",!0===i.disabled&&"disabled",d.isGroup&&"group",n,c.width&&"inline",!t&&"no-border",d.overflow&&"overflow-".concat(d.overflow),o&&"invalid",a&&o&&"focus"),Object(y.c)(d.isGroup&&"group"),"function"==typeof d.className?d.className(this.props):d.className,this.props.className);return f.a.createElement(u,{className:p,style:c},f.a.createElement(h,Object.assign({},i,{size:n,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(s))}}]),n}(p.a),e.defaultProps={border:!0,style:{}},t})},131:function(e,t,n){"use strict";var a=n(119);t.a=Object(a.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},135:function(e,t,n){"use strict";var a=n(36),r=n(128),l=n(130),o=n(140),i=n(141),s=n(21),u=n(7),c=n(8),p=n(10),d=n(2),h=n(9),m=n(3),f=n(0),b=n.n(f),y=n(142),v=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).handleChange=t.handleChange.bind(Object(m.a)(Object(m.a)(t))),t.handleKeyUp=t.handleKeyUp.bind(Object(m.a)(Object(m.a)(t))),t.handleBlur=t.handleBlur.bind(Object(m.a)(Object(m.a)(t))),t}return Object(h.a)(n,e),Object(c.a)(n,[{key:"invalidNumber",value:function(e){var t=this.props,n=t.digits;if("number"!==t.type)return!1;var a="^-?\\d*";return void 0===n?a+="\\.?\\d*":0<n&&(a+="\\.?\\d{0,".concat(n,"}")),a+="$",!(a=new RegExp(a)).test(e)}},{key:"handleChange",value:function(e){var t=e.target.value;this.invalidNumber(t)||this.props.onChange(t)}},{key:"handleKeyUp",value:function(e){var t=this.props,n=t.onKeyUp,a=t.onEnterPress;13===e.keyCode&&a&&a(e.target.value),n&&n(e)}},{key:"handleBlur",value:function(e){var t=e.target.value,n=this.props,a=n.forceChange,r=n.onBlur;r&&r(e),this.invalidNumber(t)||a&&a(t)}},{key:"render",value:function(){var e=this.props,t=e.type,n=(e.defaultValue,e.digits,e.className),a=e.htmlName,r=(e.forceChange,e.onEnterPress,Object(s.a)(e,["type","defaultValue","digits","className","htmlName","forceChange","onEnterPress"])),l=null==this.props.value?"":this.props.value;return b.a.createElement("input",Object.assign({},Object(y.a)(r),{className:n,name:r.name||a,type:"password"===t?t:"text",value:l,onChange:this.handleChange,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur}))}}]),n}(f.PureComponent);v.defaultProps={type:"text"};var g=v,O=n(125),j=n(5),w=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).handleBlur=t.handleBlur.bind(Object(m.a)(Object(m.a)(t))),t.handleChange=t.handleChange.bind(Object(m.a)(Object(m.a)(t))),t.handleAddClick=t.handleCalc.bind(Object(m.a)(Object(m.a)(t)),e.step),t.handleSubClick=t.handleCalc.bind(Object(m.a)(Object(m.a)(t)),-e.step),t.handleMouseUp=t.handleMouseUp.bind(Object(m.a)(Object(m.a)(t))),t.handleKeyDown=t.handleKeyDown.bind(Object(m.a)(Object(m.a)(t))),t.handleKeyUp=t.handleKeyUp.bind(Object(m.a)(Object(m.a)(t))),t}return Object(h.a)(n,e),Object(c.a)(n,[{key:"componentWillUnmount",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"handleChange",value:function(e,t){if(t){var n=this.props.step.toString(),a=n.lastIndexOf(".");0<=a&&(e=parseFloat(e.toFixed(n.length-a)));var r=this.props,l=r.min,o=r.max;void 0!==o&&o<e&&(e=o),void 0!==l&&e<l&&(e=l),e!==this.props.value&&this.props.onChange(e)}else new RegExp("^-?\\d*\\.?\\d*$").test(e)&&this.props.onChange(e)}},{key:"handleBlur",value:function(e){var t=parseFloat(e.target.value);isNaN(t)&&(t=0),this.handleChange(t,!0),this.props.onBlur(e)}},{key:"changeValue",value:function(e){if(!this.props.disabled){var t=parseFloat(this.props.value);isNaN(t)&&(t=0),this.handleChange(t+e,!0)}}},{key:"longPress",value:function(e){var t=this;this.hold&&setTimeout(function(){t.changeValue(e),t.longPress(e)},50)}},{key:"handleKeyDown",value:function(e){var t=this,n=this.props.step;if(this.hold=!0,38===e.keyCode||40===e.keyCode){e.preventDefault();var a=38===e.keyCode?n:-n;this.changeValue(a),this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut),this.keyPressTimeOut=setTimeout(function(){t.longPress(a)},600)}}},{key:"handleCalc",value:function(e){var t=this;this.hold=!0,this.changeValue(e),this.keyPressTimeOut=setTimeout(function(){t.longPress(e)},1e3)}},{key:"handleKeyUp",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"handleMouseUp",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"render",value:function(){var e=this.props,t=(e.onChange,Object(s.a)(e,["onChange"]));return[b.a.createElement(g,Object.assign({key:"input"},t,{className:Object(j.n)("number"),onChange:this.handleChange,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,type:"number"})),b.a.createElement("a",{key:"up",className:Object(j.n)("number-up"),href:"javascript:;",onMouseDown:this.handleAddClick,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp},O.a.AngleRight),b.a.createElement("a",{key:"down",className:Object(j.n)("number-down"),href:"javascript:;",onMouseDown:this.handleSubClick,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp},O.a.AngleRight)]}}]),n}(f.PureComponent);w.defaultProps={step:1};var I=w;var E=function(e){var t=e.children,n=(e.style,Object(s.a)(e,["children","style"]));return f.Children.toArray(t).map(function(e,t){return"string"==typeof e?b.a.createElement("span",{key:t},e):Object(f.cloneElement)(e,n)})},k=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).handleChange=t.handleChange.bind(Object(m.a)(Object(m.a)(t))),t}return Object(h.a)(n,e),Object(c.a)(n,[{key:"handleChange",value:function(e){var t=this.props,n=t.value,a=t.point,r=[];e.split("").forEach(function(e,t){r.push(e===a?n[t]:e)}),this.props.onChange(r.join(""))}},{key:"render",value:function(){var e=this.props,t=e.point,n=Object(s.a)(e,["point"]),a=Array.from({length:this.props.value.length},function(){return t}).join("");return b.a.createElement(g,Object.assign({},n,{type:"text",value:a,onChange:this.handleChange}))}}]),n}(f.PureComponent);k.defaultProps={value:"",point:"•"};var C=k,x=Object(a.a)(r.a,Object(l.a)({}),Object(o.a)(400),i.a)(g);x.Group=Object(l.a)({tag:"div",isGroup:!0})(E),x.Number=Object(a.a)(r.a,Object(l.a)({}))(I),x.Password=Object(a.a)(r.a,Object(l.a)({}))(C),x.displayName="ShineoutInput",x.Group.displayName="ShineoutInputGroup";t.a=x},140:function(e,t,n){"use strict";var r=n(21),l=n(7),o=n(8),i=n(10),s=n(2),u=n(9),c=n(3),p=n(0),d=n.n(p),a=n(36);t.a=Object(a.b)(function(e,a){var t,n;return n=t=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(i.a)(this,Object(s.a)(n).call(this,e))).state={value:e.value},t.handleChange=t.handleChange.bind(Object(c.a)(Object(c.a)(t))),t.forceChange=t.forceChange.bind(Object(c.a)(Object(c.a)(t))),t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"getValue",value:function(){return this.changeLocked?this.state.value:this.props.value}},{key:"handleChange",value:function(t){for(var n=this,e=arguments.length,a=new Array(1<e?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];var l,o=this.props.delay;0!==o?(this.setState({value:t}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){var e;n.changeLocked=!1,(e=n.props).onChange.apply(e,[t].concat(a))},o)):(l=this.props).onChange.apply(l,[t].concat(a))}},{key:"forceChange",value:function(e){var t;this.setState({value:e});for(var n=arguments.length,a=new Array(1<n?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];(t=this.props).onChange.apply(t,[e].concat(a)),this.changeLocked=!1}},{key:"render",value:function(){var e=this.props,t=(e.value,e.onChange,Object(r.a)(e,["value","onChange"]));return d.a.createElement(a,Object.assign({},t,{value:this.getValue(),onChange:this.handleChange,forceChange:this.forceChange}))}}]),n}(p.PureComponent),t.defaultProps={delay:e},n})},141:function(e,t,n){"use strict";var a=n(7),r=n(8),l=n(10),o=n(2),i=n(9),s=n(3),u=n(0),c=n.n(u);t.a=function(t){return function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(l.a)(this,Object(o.a)(n).call(this,e))).handleBlur=t.handleBlur.bind(Object(s.a)(Object(s.a)(t))),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"handleBlur",value:function(e){var t=this.props,n=t.value,a=t.trim,r=t.onBlur,l=t.onChange;if(a){var o=e.target.value.trim();n!==o&&l(o)}r&&r(e)}},{key:"render",value:function(){return c.a.createElement(t,Object.assign({},this.props,{onBlur:this.handleBlur}))}}]),n}(u.PureComponent)}},142:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(37),r=["delay","onDatumBind","rules","formDatum","forceChange","trim","beforeChange","validateHook","innerFormNamePath","fieldSetValidate","combineRules"];function l(e){return Object(a.a)(e,function(t){r.forEach(function(e){return delete t[e]})})}},759:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(123),o=n(129),i=n(25),s=n(760),u=n.n(s),c=n(761),p=n.n(c),d=Object(i.a)(u.a,p.a),h=[{name:"1-base",title:Object(i.a)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base \n Input usually needs to be used with other components, so the default width is 100% and the default display is block. \n If the style.width is set, the default display is inline-flex."),component:n(762).default,rawText:n(763)},{name:"2-size",title:Object(i.a)("大小 \n 提供了三种尺寸的输入框，small、default、large","Size \n There are three size of input, small, default, large."),component:n(764).default,rawText:n(765)},{name:"3-number",title:Object(i.a)("数字 \n type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数","Number \n When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property"),component:n(766).default,rawText:n(767)},{name:"4-number",title:Object(i.a)(" \n Input.Number 组件，可以通过鼠标和上下键辅助输入"," \n Input.Number component can be assisted by mouse and up and down keyboard."),component:n(768).default,rawText:n(769)},{name:"5-group",title:Object(i.a)("组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group \n The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color."),component:n(770).default,rawText:n(771)},{name:"6-tip",title:Object(i.a)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","Tip \n The tip set on input pops up when it is focused."),component:n(772).default,rawText:n(773)},{name:"7-validate",title:Object(i.a)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","Validate \n When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location. \n If the popover property is not set, no error message will pop up. \n If input is invalid, the message will not be hidden."),component:n(774).default,rawText:n(775)},{name:"8-disabled",title:Object(i.a)("禁用 \n 设置 disabled 属性禁用组件","Disabled \n Set the disabled property to disable the component."),component:n(776).default,rawText:n(777)},{name:"9-password",title:Object(i.a)("密码 \n Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。","Password \n Input.Password is a mock input of type 'password', used for disable Chrome autofill."),component:n(778).default,rawText:n(779)}];t.default=Object(l.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:d,examples:h}))})},760:function(e,t){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| onEnterPress | function(value) | | 回车键回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | | 提示信息 |\n| trim | bool | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| type | string | | 同原生 input 标签的 type |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n\n### Input.Number\n\n基本 API 和上表相同，特定的 API 如下：\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| max | number | 无 | 最大值 |\n| min | number | 无 | 最小值 |\n| step | number | 1 | 改变数字跨度，可为小数 |\n"},761:function(e,t){e.exports="# Input\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | Default value |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms.|\n| name | string | none | The name of Form which access data |\n| onChange | function(d) | | The callback function when the value is changing |\n| onEnterPress | function(value) | | The callback function for enter key |\n| placeholder | string | | Same as the native input tag |\n| popover | string | | The position where the text pop up, options: \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | options: \\['large', 'default', 'small'] |\n| style | object | - | Container element style |\n| tip | string \\| ReactElement | | Prompt information |\n| trim | bool | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| type | string | | Same as the type of the native input tag |\n| value | string \\| number | | The defaultValue and value can be set at the same time and defaultValue will be overridden by value<br />In the Form, the value will be taken over by the form and the value will lose efficacy. |\n\n### Input.Number\n\nThe basic API is the same as the above table, and the specific API is as follows:\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| max | number | - | The maximum value |\n| min | number | - | The minimum value|\n| step | number | 1 | Change the digital span. It can be decimal. |\n"},762:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135);t.default=function(){return r.a.createElement(l.a,{placeholder:"input something"})}},763:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n *    -- Input usually needs to be used with other components, so the default width is 100% and the default display is block.\n *    -- If the style.width is set, the default display is inline-flex.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input placeholder=\"input something\" />\n}\n"},764:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135),o={width:120,marginRight:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{size:"small",style:o,placeholder:"small size"}),r.a.createElement(l.a,{style:o,placeholder:"default size"}),r.a.createElement(l.a,{size:"large",style:o,placeholder:"large size"}))}},765:function(e,t){e.exports='/**\n * cn - 大小\n *    -- 提供了三种尺寸的输入框，small、default、large\n * en - Size\n *    -- There are three size of input, small, default, large.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginRight: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},766:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135),o={marginBottom:12};t.default=function(){return r.a.createElement("div",{style:{width:300}},r.a.createElement(l.a,{style:o,type:"number",placeholder:"digits undefined"}),r.a.createElement(l.a,{style:o,digits:0,type:"number",placeholder:"digits 0"}),r.a.createElement(l.a,{style:o,digits:1,type:"number",placeholder:"digits 1"}),r.a.createElement(l.a,{style:o,digits:2,type:"number",placeholder:"digits 2"}),r.a.createElement(l.a,{style:o,digits:3,type:"number",placeholder:"digits 3"}))}},767:function(e,t){e.exports='/**\n * cn - 数字\n *    -- type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数\n * en - Number\n *    -- When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" />\n      <Input style={style} digits={3} type="number" placeholder="digits 3" />\n    </div>\n  )\n}\n'},768:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135);t.default=function(){return r.a.createElement(l.a.Number,{width:120,min:23,max:100,digits:0})}},769:function(e,t){e.exports="/**\n * cn -\n *  . -- Input.Number 组件，可以通过鼠标和上下键辅助输入\n * en -\n *  . -- Input.Number component can be assisted by mouse and up and down keyboard.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Number width={120} min={23} max={100} digits={0} />\n}\n"},770:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135),o=n(48),i=n(131),s={width:300,marginBottom:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a.Group,{style:s},r.a.createElement(i.a,{name:"user"}),r.a.createElement(l.a,{placeholder:"first name"}),"-",r.a.createElement(l.a,{placeholder:"last name"})),r.a.createElement(l.a.Group,{style:s},r.a.createElement(l.a,{placeholder:"search text"}),r.a.createElement(i.a,{name:"search"})),r.a.createElement(l.a.Group,{style:s},r.a.createElement(l.a,{style:{flex:1},placeholder:"flex 1"}),r.a.createElement(l.a,{style:{flex:3},placeholder:"flex 3"})),r.a.createElement(l.a.Group,{style:s},r.a.createElement(l.a,{placeholder:"search text"}),r.a.createElement(o.a,{type:"primary"},"Search")),r.a.createElement(l.a.Group,{size:"small",style:s},r.a.createElement("b",null,r.a.createElement(i.a,{name:"envelope"})),r.a.createElement(l.a,{placeholder:"email"}),r.a.createElement("b",null,".com")))}},771:function(e,t){e.exports='/**\n * cn - 组合\n *  . -- Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n *  . -- The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color.\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <FontAwesome name="search" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b>\n          <FontAwesome name="envelope" />\n        </b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},772:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135),o=n(131),i={marginBottom:12};t.default=function(){return r.a.createElement("div",{style:{width:300}},r.a.createElement(l.a,{style:i,placeholder:"email",tip:"enter you email.",popover:"top-left"}),r.a.createElement(l.a.Group,{style:i,tip:"enter you email."},r.a.createElement(o.a,{name:"envelope"}),r.a.createElement(l.a,{placeholder:"email"})),r.a.createElement(l.a.Group,{style:i},r.a.createElement(o.a,{name:"envelope"}),r.a.createElement(l.a,{tip:"enter you email.",placeholder:"email"})))}},773:function(e,t){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - Tip\n *    -- The tip set on input pops up when it is focused.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},774:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135),o=[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}];t.default=function(){return r.a.createElement(l.a,{placeholder:"email",rules:o,tip:"Email, required",popover:"top-left",width:300})}},775:function(e,t){e.exports="/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - Validate\n *    -- When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location.\n *    -- If the popover property is not set, no error message will pop up.\n *    -- If input is invalid, the message will not be hidden.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nconst rules = [\n  { required: true, message: 'Please enter your email.' },\n  { type: 'email', message: 'Please enter a valid email.' },\n]\n\nexport default function() {\n  return <Input placeholder=\"email\" rules={rules} tip=\"Email, required\" popover=\"top-left\" width={300} />\n}\n"},776:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135),o={width:300,marginBottom:12};t.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a.Group,{disabled:!0,style:o},r.a.createElement(l.a,{placeholder:"first name"}),"-",r.a.createElement(l.a,{placeholder:"last name"})),r.a.createElement(l.a,{disabled:!0,style:o,placeholder:"disabled input"}))}},777:function(e,t){e.exports='/**\n * cn - 禁用\n *    -- 设置 disabled 属性禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},778:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(135);t.default=function(){return r.a.createElement(l.a.Password,{placeholder:"input password"})}},779:function(e,t){e.exports="/**\n * cn - 密码\n *    -- Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。\n * en - Password\n *    -- Input.Password is a mock input of type 'password', used for disable Chrome autofill.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Password placeholder=\"input password\" />\n}\n"}}]);