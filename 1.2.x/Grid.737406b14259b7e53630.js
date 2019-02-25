(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[22],{1175:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(123),o=n(129),s=n(25),c=n(1176),f=n.n(c),d=n(1177),l=n.n(d),u=Object(s.a)(f.a,l.a),h=[{name:"01-base",title:Object(s.a)("任意等分 \n Grid 的栅格体系是动态生成，可以实现任意等份","Arbitrary \n Grid system is dynamic generated and can be any number."),component:n(1178).default,rawText:n(1179)},{name:"02-offset",title:Object(s.a)("偏移 \n offset 属性可以设置偏移，取值方式和宽度相同","Offset \n The offset property set the offset in the same way as the width."),component:n(1180).default,rawText:n(1181)},{name:"03-nested",title:Object(s.a)("嵌套 \n 嵌套的栅格","Nested \n Nested grids"),component:n(1182).default,rawText:n(1183)},{name:"04-gutter",title:Object(s.a)("间距 \n 通过 gutter 属性设置栅格间距","Gutter \n Set grid spacing through the gutter property."),component:n(1184).default,rawText:n(1185)}];t.default=Object(a.a)(function(e){return i.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:u,examples:h}))})},1176:function(e,t){e.exports="# Grid *栅格*\n\n动态栅格体系，用于某些不适合使用 flex 的地方\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| gutter | number | 无 | 栅格之间间距 |\n| offset | number | 0 | 左偏移百分比，0 <= offset < 1 |\n| style | object | 无 | 最外层扩展样式 |\n| width | number | 1 | 宽度百分比，0 < number <= 1 |\n"},1177:function(e,t){e.exports="# Grid\n\n<example />\n\n# API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| gutter | number | none | Spacing between grids |\n| offset | number | 0 | Left offset percentage, 0 <= offset < 1 |\n| style | object | - | Container element style |\n| width | number | 1 | Percentage of width, 0 < number <= 1 |"},1178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var r=n(7),i=n(8),a=n(10),o=n(2),s=n(9),c=n(0),f=n.n(c),d=n(1261),l=n(1258),u=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(a.a)(this,Object(o.a)(n).call(this,e))).handleCountChange=function(e){t.setState({count:e})},t.state={count:5},t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var n=this.state.count;return f.a.createElement("div",null,f.a.createElement(d.a,{formatValue:!1,scale:[1,2,3,5,8,13,21,34,55],step:0,value:n,onChange:this.handleCountChange}),f.a.createElement("div",{style:{height:20}}),Array.from({length:n}).map(function(e,t){return f.a.createElement("div",{key:t,style:{background:"#f2f2f2",marginBottom:4,lineHeight:"30px"}},f.a.createElement(l.a,{width:(t+1)/n,style:{color:"#fff",paddingLeft:8,background:"#3399ff"}},t+1,"/",n))}))}}]),n}(c.Component)},1179:function(e,t){e.exports="/**\n * cn - 任意等分\n *    -- Grid 的栅格体系是动态生成，可以实现任意等份\n * en - Arbitrary\n *    -- Grid system is dynamic generated and can be any number.\n */\nimport React, { Component } from 'react'\nimport { Grid, Slider } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 5 }\n  }\n\n  handleCountChange = count => {\n    this.setState({ count })\n  }\n\n  render() {\n    const { count } = this.state\n\n    return (\n      <div>\n        <Slider\n          formatValue={false}\n          scale={[1, 2, 3, 5, 8, 13, 21, 34, 55]}\n          step={0}\n          value={count}\n          onChange={this.handleCountChange}\n        />\n\n        <div style={{ height: 20 }} />\n\n        {Array.from({ length: count }).map((n, i) => (\n          <div key={i} style={{ background: '#f2f2f2', marginBottom: 4, lineHeight: '30px' }}>\n            <Grid width={(i + 1) / count} style={{ color: '#fff', paddingLeft: 8, background: '#3399ff' }}>\n              {i + 1}/{count}\n            </Grid>\n          </div>\n        ))}\n      </div>\n    )\n  }\n}\n"},1180:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1258),o={color:"#fff",lineHeight:"60px",textAlign:"center",background:"#3399ff"};t.default=function(){return i.a.createElement("div",{style:{background:"#f2f2f2"}},i.a.createElement(a.a,{width:1/3,offset:1/3,style:o},"With 1/3, Offset 1/3"))}},1181:function(e,t){e.exports="/**\n * cn - 偏移\n *    -- offset 属性可以设置偏移，取值方式和宽度相同\n * en - Offset\n *    -- The offset property set the offset in the same way as the width.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '60px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid width={1 / 3} offset={1 / 3} style={style}>\n        With 1/3, Offset 1/3\n      </Grid>\n    </div>\n  )\n}\n"},1182:function(e,t,n){"use strict";n.r(t);var r=n(13),i=n(0),a=n.n(i),o=n(1258),s={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};t.default=function(){return a.a.createElement(o.a,{style:{textAlign:"center"}},a.a.createElement(o.a,{width:.5,style:s},"1/2"),a.a.createElement(o.a,{width:.5,style:{lineHeight:"30px"}},a.a.createElement("div",null,"1/2"),a.a.createElement("div",null,a.a.createElement(o.a,{style:s,width:1/3},"1/3"),a.a.createElement(o.a,{style:Object(r.a)({},s,{background:"#f5f5f5",color:"#333"}),width:1/3},"1/3"),a.a.createElement(o.a,{style:s,width:1/3},"1/3"))))}},1183:function(e,t){e.exports="/**\n * cn - 嵌套\n *    -- 嵌套的栅格\n * en - Nested\n *    -- Nested grids\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <Grid style={{ textAlign: 'center' }}>\n      <Grid width={1 / 2} style={style}>\n        1/2\n      </Grid>\n\n      <Grid width={1 / 2} style={{ lineHeight: '30px' }}>\n        <div>1/2</div>\n        <div>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={{ ...style, background: '#f5f5f5', color: '#333' }} width={1 / 3}>\n            1/3\n          </Grid>\n          <Grid style={style} width={1 / 3}>\n            1/3\n          </Grid>\n        </div>\n      </Grid>\n    </Grid>\n  )\n}\n"},1184:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1258),o={color:"#fff",lineHeight:"30px",textAlign:"center",background:"#3399ff"};t.default=function(){return i.a.createElement("div",{style:{background:"#f2f2f2"}},i.a.createElement(a.a,{gutter:8},Array.from({length:8}).map(function(e,t){return t+1}).map(function(e){return i.a.createElement(a.a,{key:e,width:1/8},i.a.createElement("div",{style:o},"1/8"))})))}},1185:function(e,t){e.exports="/**\n * cn - 间距\n *    -- 通过 gutter 属性设置栅格间距\n * en - Gutter\n *    -- Set grid spacing through the gutter property.\n */\nimport React from 'react'\nimport { Grid } from 'shineout'\n\nconst style = {\n  color: '#fff',\n  lineHeight: '30px',\n  textAlign: 'center',\n  background: '#3399ff',\n}\n\nexport default function() {\n  return (\n    <div style={{ background: '#f2f2f2' }}>\n      <Grid gutter={8}>\n        {Array.from({ length: 8 })\n          .map((_, i) => i + 1)\n          .map(i => (\n            <Grid key={i} width={1 / 8}>\n              <div style={style}>1/8</div>\n            </Grid>\n          ))}\n      </Grid>\n    </div>\n  )\n}\n"},1258:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var p=n(13),m=n(21),r=n(7),i=n(8),a=n(10),o=n(2),s=n(9),g=n(0),y=n.n(g),c=n(11),b=n.n(c),v=n(150),f=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=void 0===t?1:t,r=e.offset,i=e.responsive,a=e.stretch,o=e.children,s=e.gutter,c=Object(m.a)(e,["width","offset","responsive","stretch","children","gutter"]),f=0,d=0;g.Children.toArray(o).forEach(function(e){e.type&&e.type.isGrid&&(e.props.width?d+=e.props.width:f+=1)});var l=0<f?(1-d)/f:0,u=b()(this.props.className,Object(v.a)({width:n,offset:r,responsive:i})),h=Object.assign({},this.props.style);return s&&0<s&&(h.width="auto",h.display="block",h.marginLeft="".concat(0-s/2,"px"),h.marginRight="".concat(0-s/2,"px")),y.a.createElement("div",Object.assign({},c,{style:h,className:u}),g.Children.toArray(o).map(function(e){if(e.type&&e.type.isGrid){var t={style:Object.assign({},e.props.style)};return e.props.width||(t.width=l),a&&(t.style=Object(p.a)({},t.style,{minHeight:"100%",height:"100%"})),s&&0<s&&(t.style=Object(p.a)({},t.style,{paddingLeft:s/2,paddingRight:s/2})),Object(g.cloneElement)(e,t)}return e}))}}]),t}(g.PureComponent);f.isGrid=!0,f.displayName="ShineoutGrid"}}]);