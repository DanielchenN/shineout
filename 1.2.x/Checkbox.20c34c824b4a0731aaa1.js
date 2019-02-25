(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[13],{130:function(e,n,t){"use strict";var b=t(21),a=t(7),o=t(8),r=t(10),c=t(2),i=t(9),l=t(3),u=t(0),m=t.n(u),d=t(11),f=t.n(d),s=t(27),h=t(36),v=t(5);n.a=Object(h.b)(function(h,p){var e,n;return n=e=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={focus:e.autoFocus},n.handleBlur=n.handleBlur.bind(Object(l.a)(Object(l.a)(n))),n.handleFocus=n.handleFocus.bind(Object(l.a)(Object(l.a)(n))),n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"handleBlur",value:function(e){this.setState({focus:!1});var n=this.props.onBlur;n&&n(e)}},{key:"handleFocus",value:function(e){this.setState({focus:!0});var n=this.props.onFocus;n&&n(e)}},{key:"renderHelp",value:function(e){var n=this.props,t=n.error,a=n.tip,o=n.popover,r=["tip",o||"bottom-left"];return t&&o?(r.push("error"),m.a.createElement("div",{className:v.n.apply(void 0,r)},t.message)):a&&e?m.a.createElement("div",{className:Object(v.n)([].concat(r))},a):null}},{key:"render",value:function(){var e=this.props,n=(e.className,e.border),t=e.size,a=(e.tip,e.popover),o=e.width,r=e.style,c=e.error,i=Object(b.a)(e,["className","border","size","tip","popover","width","style","error"]),l=this.state.focus,u=h.tag||"label",d=Object.assign({width:o},r),s=f()(Object(v.n)("_",l&&"focus",!0===i.disabled&&"disabled",h.isGroup&&"group",t,d.width&&"inline",!n&&"no-border",h.overflow&&"overflow-".concat(h.overflow),c&&"invalid",a&&c&&"focus"),Object(v.c)(h.isGroup&&"group"),"function"==typeof h.className?h.className(this.props):h.className,this.props.className);return m.a.createElement(u,{className:s,style:d},m.a.createElement(p,Object.assign({},i,{size:t,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(l))}}]),t}(s.a),e.defaultProps={border:!0,style:{}},n})},134:function(e,n,t){"use strict";var a=t(138);n.a=Object(a.a)("checkbox")},135:function(e,n,t){"use strict";var a=t(36),o=t(128),r=t(130),c=t(140),i=t(141),l=t(21),u=t(7),d=t(8),s=t(10),h=t(2),p=t(9),b=t(3),m=t(0),f=t.n(m),v=t(142),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(b.a)(Object(b.a)(n))),n.handleKeyUp=n.handleKeyUp.bind(Object(b.a)(Object(b.a)(n))),n.handleBlur=n.handleBlur.bind(Object(b.a)(Object(b.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"invalidNumber",value:function(e){var n=this.props,t=n.digits;if("number"!==n.type)return!1;var a="^-?\\d*";return void 0===t?a+="\\.?\\d*":0<t&&(a+="\\.?\\d{0,".concat(t,"}")),a+="$",!(a=new RegExp(a)).test(e)}},{key:"handleChange",value:function(e){var n=e.target.value;this.invalidNumber(n)||this.props.onChange(n)}},{key:"handleKeyUp",value:function(e){var n=this.props,t=n.onKeyUp,a=n.onEnterPress;13===e.keyCode&&a&&a(e.target.value),t&&t(e)}},{key:"handleBlur",value:function(e){var n=e.target.value,t=this.props,a=t.forceChange,o=t.onBlur;o&&o(e),this.invalidNumber(n)||a&&a(n)}},{key:"render",value:function(){var e=this.props,n=e.type,t=(e.defaultValue,e.digits,e.className),a=e.htmlName,o=(e.forceChange,e.onEnterPress,Object(l.a)(e,["type","defaultValue","digits","className","htmlName","forceChange","onEnterPress"])),r=null==this.props.value?"":this.props.value;return f.a.createElement("input",Object.assign({},Object(v.a)(o),{className:t,name:o.name||a,type:"password"===n?n:"text",value:r,onChange:this.handleChange,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur}))}}]),t}(m.PureComponent);k.defaultProps={type:"text"};var y=k,g=t(125),C=t(5),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleBlur=n.handleBlur.bind(Object(b.a)(Object(b.a)(n))),n.handleChange=n.handleChange.bind(Object(b.a)(Object(b.a)(n))),n.handleAddClick=n.handleCalc.bind(Object(b.a)(Object(b.a)(n)),e.step),n.handleSubClick=n.handleCalc.bind(Object(b.a)(Object(b.a)(n)),-e.step),n.handleMouseUp=n.handleMouseUp.bind(Object(b.a)(Object(b.a)(n))),n.handleKeyDown=n.handleKeyDown.bind(Object(b.a)(Object(b.a)(n))),n.handleKeyUp=n.handleKeyUp.bind(Object(b.a)(Object(b.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"handleChange",value:function(e,n){if(n){var t=this.props.step.toString(),a=t.lastIndexOf(".");0<=a&&(e=parseFloat(e.toFixed(t.length-a)));var o=this.props,r=o.min,c=o.max;void 0!==c&&c<e&&(e=c),void 0!==r&&e<r&&(e=r),e!==this.props.value&&this.props.onChange(e)}else new RegExp("^-?\\d*\\.?\\d*$").test(e)&&this.props.onChange(e)}},{key:"handleBlur",value:function(e){var n=parseFloat(e.target.value);isNaN(n)&&(n=0),this.handleChange(n,!0),this.props.onBlur(e)}},{key:"changeValue",value:function(e){if(!this.props.disabled){var n=parseFloat(this.props.value);isNaN(n)&&(n=0),this.handleChange(n+e,!0)}}},{key:"longPress",value:function(e){var n=this;this.hold&&setTimeout(function(){n.changeValue(e),n.longPress(e)},50)}},{key:"handleKeyDown",value:function(e){var n=this,t=this.props.step;if(this.hold=!0,38===e.keyCode||40===e.keyCode){e.preventDefault();var a=38===e.keyCode?t:-t;this.changeValue(a),this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut),this.keyPressTimeOut=setTimeout(function(){n.longPress(a)},600)}}},{key:"handleCalc",value:function(e){var n=this;this.hold=!0,this.changeValue(e),this.keyPressTimeOut=setTimeout(function(){n.longPress(e)},1e3)}},{key:"handleKeyUp",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"handleMouseUp",value:function(){this.hold=!1,this.keyPressTimeOut&&clearTimeout(this.keyPressTimeOut)}},{key:"render",value:function(){var e=this.props,n=(e.onChange,Object(l.a)(e,["onChange"]));return[f.a.createElement(y,Object.assign({key:"input"},n,{className:Object(C.n)("number"),onChange:this.handleChange,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur,type:"number"})),f.a.createElement("a",{key:"up",className:Object(C.n)("number-up"),href:"javascript:;",onMouseDown:this.handleAddClick,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp},g.a.AngleRight),f.a.createElement("a",{key:"down",className:Object(C.n)("number-down"),href:"javascript:;",onMouseDown:this.handleSubClick,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseUp},g.a.AngleRight)]}}]),t}(m.PureComponent);O.defaultProps={step:1};var j=O;var x=function(e){var n=e.children,t=(e.style,Object(l.a)(e,["children","style"]));return m.Children.toArray(n).map(function(e,n){return"string"==typeof e?f.a.createElement("span",{key:n},e):Object(m.cloneElement)(e,t)})},w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(b.a)(Object(b.a)(n))),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var n=this.props,t=n.value,a=n.point,o=[];e.split("").forEach(function(e,n){o.push(e===a?t[n]:e)}),this.props.onChange(o.join(""))}},{key:"render",value:function(){var e=this.props,n=e.point,t=Object(l.a)(e,["point"]),a=Array.from({length:this.props.value.length},function(){return n}).join("");return f.a.createElement(y,Object.assign({},t,{type:"text",value:a,onChange:this.handleChange}))}}]),t}(m.PureComponent);w.defaultProps={value:"",point:"•"};var E=w,V=Object(a.a)(o.a,Object(r.a)({}),Object(c.a)(400),i.a)(y);V.Group=Object(r.a)({tag:"div",isGroup:!0})(x),V.Number=Object(a.a)(o.a,Object(r.a)({}))(j),V.Password=Object(a.a)(o.a,Object(r.a)({}))(E),V.displayName="ShineoutInput",V.Group.displayName="ShineoutInputGroup";n.a=V},138:function(e,n,t){"use strict";var a=t(13),o=t(7),r=t(8),c=t(10),i=t(2),u=t(9),d=t(3),l=t(0),s=t.n(l),h=t(11),p=t.n(h),b=t(27),m=t(15),f=t(35),v=t(135),k=t(5);n.a=function(l){var e=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={checked:e.checked},n.id="cb_".concat(Object(f.b)()),n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.handleInputChange=n.handleInputChange.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.checked,a=n.inputable,o=n.value,r=n.htmlValue;e.value!==o&&void 0===t&&this.setState({checked:a?!!o:o===r})}},{key:"getChecked",value:function(){var e=this.props,n=e.checked,t=e.value,a=e.htmlValue;return"function"==typeof n?n(a):void 0!==n?n:void 0===this.state.checked?t===a:this.state.checked}},{key:"getProp",value:function(e){return void 0!==this.props[e]?this.props[e]:this.state[e]}},{key:"handleChange",value:function(e){var n=this.props,t=n.onChange,a=n.onRawChange,o=n.index,r=n.inputable,c=e.target.checked;this.setState({checked:c});var i=r?this.props.value:this.props.htmlValue;a&&a(i,c),i=c?i:void 0,t&&t(i,c,o)}},{key:"handleInputChange",value:function(e){var n=this.props,t=n.onChange,a=n.index,o=0<e.length;t&&t(e,o,a)}},{key:"render",value:function(){var e=this.props,n=e.disabled,t=e.style,a=e.children,o=e.inputable,r=this.getChecked(),c=p()(Object(k.g)("_",n&&"disabled",!0===r&&"checked","indeterminate"===r&&"indeterminate"),this.props.className),i="string"==typeof this.props.value?this.props.value:"";return s.a.createElement("label",{className:c,style:t,htmlFor:this.id},s.a.createElement("input",{id:this.id,disabled:n,type:l,onChange:this.handleChange,checked:r}),s.a.createElement("i",{className:Object(k.g)("indicator",l)}),a&&s.a.createElement("span",null,a),o&&r&&s.a.createElement(v.a,{className:Object(k.g)("text"),onChange:this.handleInputChange,value:i}))}}]),t}(b.b);return e.defaultProps=Object(a.a)({},m.a,{htmlValue:!0}),e}},140:function(e,n,t){"use strict";var o=t(21),r=t(7),c=t(8),i=t(10),l=t(2),u=t(9),d=t(3),s=t(0),h=t.n(s),a=t(36);n.a=Object(a.b)(function(e,a){var n,t;return t=n=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={value:e.value},n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.forceChange=n.forceChange.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getValue",value:function(){return this.changeLocked?this.state.value:this.props.value}},{key:"handleChange",value:function(n){for(var t=this,e=arguments.length,a=new Array(1<e?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];var r,c=this.props.delay;0!==c?(this.setState({value:n}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){var e;t.changeLocked=!1,(e=t.props).onChange.apply(e,[n].concat(a))},c)):(r=this.props).onChange.apply(r,[n].concat(a))}},{key:"forceChange",value:function(e){var n;this.setState({value:e});for(var t=arguments.length,a=new Array(1<t?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];(n=this.props).onChange.apply(n,[e].concat(a)),this.changeLocked=!1}},{key:"render",value:function(){var e=this.props,n=(e.value,e.onChange,Object(o.a)(e,["value","onChange"]));return h.a.createElement(a,Object.assign({},n,{value:this.getValue(),onChange:this.handleChange,forceChange:this.forceChange}))}}]),t}(s.PureComponent),n.defaultProps={delay:e},t})},141:function(e,n,t){"use strict";var a=t(7),o=t(8),r=t(10),c=t(2),i=t(9),l=t(3),u=t(0),d=t.n(u);n.a=function(n){return function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleBlur=n.handleBlur.bind(Object(l.a)(Object(l.a)(n))),n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"handleBlur",value:function(e){var n=this.props,t=n.value,a=n.trim,o=n.onBlur,r=n.onChange;if(a){var c=e.target.value.trim();t!==c&&r(c)}o&&o(e)}},{key:"render",value:function(){return d.a.createElement(n,Object.assign({},this.props,{onBlur:this.handleBlur}))}}]),t}(u.PureComponent)}},142:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t(37),o=["delay","onDatumBind","rules","formDatum","forceChange","trim","beforeChange","validateHook","innerFormNamePath","fieldSetValidate","combineRules"];function r(e){return Object(a.a)(e,function(n){o.forEach(function(e){return delete n[e]})})}},152:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return l});var a=t(0),o=t.n(a),r=t(38),c=t.n(r)()(),i=c.Provider,l=function(t){return function(n){return o.a.createElement(c.Consumer,null,function(e){return o.a.createElement(t,Object.assign({},n,e))})}}},220:function(e,n,t){"use strict";var a=t(128),o=t(36),l=t(134),r=t(133),c=t(7),i=t(8),u=t(10),d=t(2),s=t(19),h=t(9),p=t(3),b=t(0),m=t.n(b),f=t(11),v=t.n(f),k=t(27),y=t(35),g=t(122),C=t(152),O=t(5),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n.handleUpdate=n.handleUpdate.bind(Object(p.a)(Object(p.a)(n))),n.handleRawChange=n.handleRawChange.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Object(s.a)(Object(d.a)(t.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(g.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(s.a)(Object(d.a)(t.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(g.a,this.handleUpdate)}},{key:"getContent",value:function(e){var n=this.props.renderItem;return"string"==typeof n?e[n]:"function"==typeof n?n(e):""}},{key:"handleUpdate",value:function(){this.forceUpdate()}},{key:"handleClick",value:function(e,n,t){var a=this.props,o=a.data,r=a.datum;n?r.add(o[t]):r.remove(o[t])}},{key:"handleRawChange",value:function(e,n){var t=this.props.datum;n?t.add(e):t.remove(e)}},{key:"render",value:function(){var t=this,e=this.props,n=e.block,a=e.data,o=e.datum,r=e.keygen,c=e.children,i=v()(Object(O.g)("group",n&&"block"),this.props.className);return void 0===a?m.a.createElement("div",{className:i},m.a.createElement(C.a,{value:{onRawChange:this.handleRawChange,checked:o.check.bind(o)}},c)):m.a.createElement("div",{className:i},a.map(function(e,n){return m.a.createElement(l.a,{checked:o.check(e),disabled:o.disabled(e),key:Object(y.a)(e,r,n),htmlValue:n,index:n,onChange:t.handleClick},t.getContent(e))}),c)}}]),t}(k.b);j.defaultProps={renderItem:function(e){return e}};var x=j,w=Object(o.a)(a.a,C.b)(l.a);w.Group=Object(o.a)(a.a,r.a.hoc({bindProps:["disabled","format","prediction"]}))(x),w.Checkbox=l.a,w.displayName="ShineoutCheckbox",w.Group.displayName="ShineoutCheckboxGroup";n.a=w},486:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(123),c=t(129),i=t(25),l=t(487),u=t.n(l),d=t(488),s=t.n(d),h=Object(i.a)(u.a,s.a),p=[{name:"01-base",title:Object(i.a)("基本用法 \n 基本的 Checkbox","Base \n Basic Checkbox"),component:t(489).default,rawText:t(490)},{name:"02-checked",title:Object(i.a)("状态 \n checked 有三个值，选中(true)、未选中(false)、半选中('indeterminate')。checked 设置时为受控组件（此示例没有处理 onChange 事件）。","Checked \n The checked has three values: true(checked), false(not checked), 'indeterminate'(half-checked)."),component:t(491).default,rawText:t(492)},{name:"03-value",title:Object(i.a)("选中值 \n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue。未选中状态都是返回 undefined。","Value \n When the htmlValue is set, the checkbox return the htmlValue (checked) and undefined (not checked); \n When the htmlValue is not set, the checkbox selected return true (checked) and undefined (not checked);"),component:t(493).default,rawText:t(494)},{name:"04-rawgroup",title:Object(i.a)("一组复选框 \n 一组复选框可以放在 Checkbox.Group 中","Group \n A series of checkboxes group by Checkbox.Group."),component:t(495).default,rawText:t(496)},{name:"05-group",title:Object(i.a)(" \n 可以直接通过数据来渲染一组 Checkbox"," \n Render a group of checkboxes from data."),component:t(497).default,rawText:t(498)},{name:"06-format",title:Object(i.a)("复杂数据 \n 复杂的数据可以使用 format 处理 value","Complex data \n Complex data can use format to process value."),component:t(499).default,rawText:t(500)},{name:"07-datum",title:Object(i.a)(" \n 当 format 不能满足需求时，可以使用 Datum.List 进行处理",' \n When the format does not satisfied your requirements, you can use <a href="#/components/Datum.List">Data.List</a> istead.'),component:t(501).default,rawText:t(502)},{name:"08-block",title:Object(i.a)("垂直布局 \n 默认是水平布局，设置 block 属性可以改为垂直布局","Block \n The default is horizontal layout, and setting the block property can change it to be vertical layout."),component:t(503).default,rawText:t(504)},{name:"09-disabled",title:Object(i.a)("禁用 \n 设置 Checkbox.Group 的 disabled 为 true，禁用全部选项","Disabled \n Set the disabled property of Checkbox.Group to true, disable all the checkboxes."),component:t(505).default,rawText:t(506)},{name:"10-disabled",title:Object(i.a)(" \n disabled 为函数时，根据函数结果实现有条件禁用"," \n When the disabled is a function, disbale the option that the function to return true."),component:t(507).default,rawText:t(508)},{name:"11-input",title:Object(i.a)("带输入 \n 设置 inputable 属性可以显示输入框，返回值为输入框内容","Inputable \n Set the inputable property to true can show the input box and the return value is the value of the input box."),component:t(509).default,rawText:t(510)}];n.default=Object(r.a)(function(e){return o.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:h,examples:p}))})},487:function(e,n){e.exports="# Checkbox *复选框*\n\nCheckbox 可以单独使用。一组Checkbox使用时，使用一个Array类型的属性 data 来控制选项。\n\n<example />\n\n## API\n\n### Checkbox\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | 无 | checked 传入时为受控组件 |\n| disabled | bool | false | 是否禁用 |\n| htmlValue | any | true | 选中时返回值 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value,checked) | 无 | 选中时，value 为 htmlValue，checked 为 true<br />未选中时，value 为 undefined，checked 为 false |\n| value | any | 无 | 如果 checked 未设置，checked 状态为 value === htmlValue |\n\n### Checkbox.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| data | array | 必填 | 数据项 |\n| datum | object | 无 | 如果 format 和 prediction 属性无法满足需求，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置来处理数据。 |\n| defaultValue | array | | 初始值 |\n| disabled | bool \\| function | false | 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项 |\n| format | string \\| function | d => d | 格式化 value<br />默认值，返回原始数据<br />为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]<br /> 为函数时，以函数返回结果作为 value |\n| name | string | 无 | Form 存取数据的名称 |\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| value | array | | 在Form中，value会被表单接管，value无效 |"},488:function(e,n){e.exports="# Checkbox\n\n<example />\n\n## API\n\n### Checkbox\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | - | if not set, use (value === htmlValue). |\n| disabled | bool | false | disable checkbox |\n| htmlValue | any | true | Specifies the result |\n| name | string | - | The name of the Form which access data |\n| onChange | function(value,checked) | - | When selected, value is htmlValue and checked is true.<br />When not selected, value is undefined and checked is false. |\n| value | any | - |  |\n\n### Checkbox.Group\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| data | array | required | The data item |\n| datum | object | - | If the format and prediction does not satisfied your requirements, you can pass in a [Datum.List](#/components/Datum.List) object or the Datum.List configuration to process data. |\n| defaultValue | array | [] | Initial value |\n| disabled | bool \\| function | false | When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true. |\n| format | string \\| function | d => d | Format value<br />The defaule value is return the original data.<br />When it is a string, the value is fetched from the original data as a key equivalent to (d) => d\\[format]<br />When it is a function, use its return value. |\n| name | string | - | The name of the Form which access data |\n| keygen | string \\| function(obj):string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n| onChange | function(value) | - | value is datum.getValue() |\n| prediction | function | (val, d) => val===format(d) | By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function needs to be used to determine whether match |\n| renderItem | string \\| function(d) | required | When it is a string, return d\\[string]<br />When it is a function, return the result of the function. |\n| value | array | - | In the Form, the value will be taken over by the form and the value will lose efficacy. |"},489:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220);n.default=function(){return o.a.createElement(r.a,null,"Checkbox")}},490:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基本的 Checkbox\n * en - Base\n *    -- Basic Checkbox\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function() {\n  return <Checkbox>Checkbox</Checkbox>\n}\n"},491:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220);n.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a,{checked:!1},"not checked"),o.a.createElement(r.a,{checked:!0},"checked"),o.a.createElement(r.a,{checked:"indeterminate"},"indeterminate"))}},492:function(e,n){e.exports="/**\n * cn - 状态\n *    -- checked 有三个值，选中(true)、未选中(false)、半选中('indeterminate')。checked 设置时为受控组件（此示例没有处理 onChange 事件）。\n * en - Checked\n *    -- The checked has three values: true(checked), false(not checked), 'indeterminate'(half-checked).\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Checkbox checked={false}>not checked</Checkbox>\n      <Checkbox checked>checked</Checkbox>\n      <Checkbox checked=\"indeterminate\">indeterminate</Checkbox>\n    </div>\n  )\n}\n"},493:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220);n.default=function(){return o.a.createElement(r.a,{htmlValue:"ok",value:"ok"},'value is "ok"')}},494:function(e,n){e.exports="/**\n * cn - 选中值\n *    -- 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue。未选中状态都是返回 undefined。\n * en - Value\n *    -- When the htmlValue is set, the checkbox return the htmlValue (checked) and undefined (not checked);\n *    -- When the htmlValue is not set, the checkbox selected return true (checked) and undefined (not checked);\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function() {\n  return (\n    <Checkbox htmlValue=\"ok\" value=\"ok\">\n      {'value is \"ok\"'}\n    </Checkbox>\n  )\n}\n"},495:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return o.a.createElement(r.a.Group,{keygen:"id",defaultValue:[3,5]},c.map(function(e){return o.a.createElement(r.a,{key:e.id,htmlValue:e.id},e.color)}))}},496:function(e,n){e.exports="/**\n * cn - 一组复选框\n *    -- 一组复选框可以放在 Checkbox.Group 中\n * en - Group\n *    -- A series of checkboxes group by Checkbox.Group.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function() {\n  return (\n    <Checkbox.Group keygen=\"id\" defaultValue={[3, 5]}>\n      {data.map(d => (\n        <Checkbox key={d.id} htmlValue={d.id}>\n          {d.color}\n        </Checkbox>\n      ))}\n    </Checkbox.Group>\n  )\n}\n"},497:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220),c=["red","orange","yellow","green","cyan","blue","violet"];function i(e){var n={borderBottom:"solid 1px ".concat(e),paddingBottom:2};return o.a.createElement("span",{style:n},e)}n.default=function(){return o.a.createElement(r.a.Group,{keygen:function(e){return e},data:c,defaultValue:["blue","cyan"],renderItem:i})}},498:function(e,n){e.exports="/**\n * cn -\n *    -- 可以直接通过数据来渲染一组 Checkbox\n * en -\n *    -- Render a group of checkboxes from data.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nfunction renderItem(color) {\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\n  return <span style={style}>{color}</span>\n}\n\nexport default function() {\n  return <Checkbox.Group keygen={c => c} data={data} defaultValue={['blue', 'cyan']} renderItem={renderItem} />\n}\n"},499:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var c=t(7),a=t(8),i=t(10),l=t(2),o=t(9),r=t(0),u=t.n(r),d=t(220),s=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}],h=function(e){function r(){var e,n;Object(c.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(r)).call.apply(e,[this].concat(a)))).renderItem=function(e){var n={borderBottom:"solid 1px ".concat(e.color),paddingBottom:2};return u.a.createElement("span",{style:n},e.color)},n}return Object(o.a)(r,e),Object(a.a)(r,[{key:"render",value:function(){return u.a.createElement(d.a.Group,{keygen:"id",data:s,format:"color",defaultValue:["blue","cyan"],renderItem:this.renderItem})}}]),r}(r.Component)},500:function(e,n){e.exports="/**\n * cn - 复杂数据\n *    -- 复杂的数据可以使用 format 处理 value\n * en - Complex data\n *    -- Complex data can use format to process value.\n */\nimport React, { Component } from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default class extends Component {\n  renderItem = d => {\n    const style = { borderBottom: `solid 1px ${d.color}`, paddingBottom: 2 }\n    return <span style={style}>{d.color}</span>\n  }\n\n  render() {\n    return (\n      <Checkbox.Group\n        keygen=\"id\"\n        data={data}\n        format=\"color\"\n        defaultValue={['blue', 'cyan']}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},501:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var a=t(7),o=t(8),r=t(10),c=t(2),i=t(9),l=t(0),u=t.n(l),d=t(133),s=t(220),h=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}],p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).renderItem=function(e){var n={borderBottom:"solid 1px ".concat(e.color),paddingBottom:2};return u.a.createElement("span",{style:n},e.color)},n.datum=new d.a.List({prediction:function(e,n){return e===n.color},format:function(e){return e.color}}),n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement(s.a.Group,{keygen:"id",data:h,datum:this.datum,defaultValue:["blue","cyan"],renderItem:this.renderItem})}}]),t}(l.Component)},502:function(e,n){e.exports="/**\n * cn -\n *    -- 当 format 不能满足需求时，可以使用 Datum.List 进行处理\n * en -\n *    -- When the format does not satisfied your requirements, you can use <a href=\"#/components/Datum.List\">Data.List</a> istead.\n */\nimport React, { Component } from 'react'\nimport { Checkbox, Datum } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.datum = new Datum.List({\n      prediction: (v, d) => v === d.color,\n      format: v => v.color,\n    })\n  }\n\n  renderItem = d => {\n    const style = { borderBottom: `solid 1px ${d.color}`, paddingBottom: 2 }\n    return <span style={style}>{d.color}</span>\n  }\n\n  render() {\n    return (\n      <Checkbox.Group\n        keygen=\"id\"\n        data={data}\n        datum={this.datum}\n        defaultValue={['blue', 'cyan']}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},503:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return o.a.createElement(r.a.Group,{keygen:"id",block:!0,data:c,datum:{format:"color"},defaultValue:["blue","cyan"],renderItem:"color"})}},504:function(e,n){e.exports="/**\n * cn - 垂直布局\n *    -- 默认是水平布局，设置 block 属性可以改为垂直布局\n * en - Block\n *    -- The default is horizontal layout, and setting the block property can change it to be vertical layout.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function() {\n  return (\n    <Checkbox.Group\n      keygen=\"id\"\n      block\n      data={data}\n      datum={{ format: 'color' }}\n      defaultValue={['blue', 'cyan']}\n      renderItem=\"color\"\n    />\n  )\n}\n"},505:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a.Group,{disabled:!0,keygen:!0,data:c,defaultValue:["blue","cyan"],renderItem:function(e){return e}}),o.a.createElement("br",null),o.a.createElement(r.a,{disabled:!0,checked:!1},"not checked"),o.a.createElement(r.a,{disabled:!0,checked:!0},"checked"),o.a.createElement(r.a,{disabled:!0,checked:"indeterminate"},"indeterminate"))}},506:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- 设置 Checkbox.Group 的 disabled 为 true，禁用全部选项\n * en - Disabled\n *    -- Set the disabled property of Checkbox.Group to true, disable all the checkboxes.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <div>\n      <Checkbox.Group disabled keygen data={data} defaultValue={['blue', 'cyan']} renderItem={d => d} />\n      <br />\n      <Checkbox disabled checked={false}>\n        not checked\n      </Checkbox>\n      <Checkbox disabled checked>\n        checked\n      </Checkbox>\n      <Checkbox disabled checked=\"indeterminate\">\n        indeterminate\n      </Checkbox>\n    </div>\n  )\n}\n"},507:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return o.a.createElement("div",null,o.a.createElement(r.a.Group,{data:c,disabled:function(e){return"yellow"===e},keygen:!0,value:["blue"],renderItem:function(e){return e}}))}},508:function(e,n){e.exports="/**\n * cn -\n *    -- disabled 为函数时，根据函数结果实现有条件禁用\n * en -\n *    -- When the disabled is a function, disbale the option that the function to return true.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function() {\n  return (\n    <div>\n      <Checkbox.Group data={data} disabled={d => d === 'yellow'} keygen value={['blue']} renderItem={d => d} />\n    </div>\n  )\n}\n"},509:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(220);n.default=function(){return o.a.createElement(r.a,{inputable:!0},"more...")}},510:function(e,n){e.exports="/**\n * cn - 带输入\n *    -- 设置 inputable 属性可以显示输入框，返回值为输入框内容\n * en - Inputable\n *    -- Set the inputable property to true can show the input box and the return value is the value of the input box.\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function() {\n  return <Checkbox inputable>more...</Checkbox>\n}\n"}}]);