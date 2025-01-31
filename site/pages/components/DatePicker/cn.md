# DatePicker *日期选择*

####   <br />*请注意date-fns的 format 字符串 与 Moment.js 的区别: [区别](https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md)

<example />

## API

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | 无 | 扩展className |
| clearable | bool | true | 是否可清空 |
| defaultValue | string \| number \| Date \| array | 无 | 默认值。如果 defaultValue 和 format 类型不一致，会执行一次 format，并触发 onChange 事件返回 format 后的值 |
| disabled | bool \| function | false | 如果 disabled 为 true，禁用全部选项，如果 disabled 为函数，根据函数反回结果禁用选项 |
| format | string | | 不同type对应的默认值<br />'date': 'yyyy-MM-dd'<br />'time': 'HH:mm:ss'<br />'week': 'yyyy WW'<br />'month': 'yyyy-MM'<br />'datetime': 'yyyy-MM-dd HH:mm:ss' |
| formatResult | string | props.format | 对选中时间进行格式化 |
| onChange | function(d) | | 值改变回调函数 |
| placeholder | string \| array | 无 | 占位文字<br />range 属性不为空时，为长度为2的数组 |
| range | bool \| number | 无 | 范围跨度，单位 **秒**，<br />为 true 时表示不限制选择范围。 |
| style | object | 无 | 最外层扩展样式 |
| type | string | 'date' | 可选值为 \['date', 'time', 'datetime', 'month', 'week'] |
| value | string \| number \| Date \| array | 无 | 值。为 string 时，需要和 format 属性匹配。<br />range 属性为 true 时，值为长度为2的数组 |
| defaultTime | string | 无 | 选择日期时默认的时间, 格式为: 'HH:mm:ss' |
| absolute | bool | false | 为 true 时，选项弹出层在 DOM 中独立 render |
| zIndex | number | 1000 | 选择面板 z-index 值 |


### Format

我们使用的格式化字符串(date-fns)和 moment.js 是不一致的, 如:<br />
moment: YYYY  => date-fns: yyyy <br />
moment: DD&nbsp;&nbsp;&nbsp;&nbsp; => date-fns: dd <br />
moment: hh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  => date-fns: HH<br />
常用的 format 格式如下，更多见 [format](https://date-fns.org/v2.0.0-alpha.20/docs/format)

| 格式 | 说明 | 示例 |
| --- | --- | --- |
|	M	| 月 | 1, 2, ..., 12 |
| MM | 月（补0）| 01, 02, ..., 12 |
| Q | 季度 | 1, 2, 3, 4 |
| d | 日 |	1, 2, ..., 31
| dd | 日（补0） |	01, 02, ..., 31 |
| W | 周 | 1, 2, ..., 53 |
| WW | 周（补0）| 01, 02, ..., 53 |
| yy | 年 | 00, 01, ..., 99 |
| yyyy | 完整年 | 1900, 1901, ..., 2099 |
| a | AM/PM | AM, PM |
| H | 小时 | 0, 1, ... 23 |
| HH | 小时（补0） | 00, 01, ... 23 |
| h | 小时（12小时制） | 1, 2, ..., 12 |
| hh | 小时（12小时制，补0） | 01, 02, ..., 12 |
| m | 分钟 | 0, 1, ..., 59 |
| mm | 分钟（补0） | 00, 01, ..., 59 |
| s | 秒 | 0, 1, ..., 59 |
| ss | 秒（补0） | 00, 01, ..., 59 |
| SSS | 毫秒 | 000, 001, ..., 999 |
| Z | 时区 | -01:00, +00:00, ... +12:00 |
| t | 时间戳（秒） |	512969520 |
| T | 时间戳（毫秒） | 512969520900 |
