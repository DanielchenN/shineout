/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/DatePicker/cn.md'
import en from 'doc/pages/components/DatePicker/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '01-base',
    title: locate(
      '基本用法 \n 最基本的用法',
      'Base \n The basic usage'
    ),
    component: require('doc/pages/components/DatePicker/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-01-base.js'),
  },
  {
    name: '02-format',
    title: locate(
      '格式化 \n 传入值可为 日期对象，时间戳，字符串，通过format 属性可以定义返回值的格式. <br /><br /> <b>注: 我们使用的格式化字符串(date-fns)和 moment 是不一致的, 如: <br /> <br /> moment: YYYY  => date-fns: yyyy <br /> moment: DD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; => date-fns: dd <br /> moment: hh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  => date-fns: HH  </b><br /><br /> 详细的请参照 <a href="#heading-3-Format">Format<a>',
      'Format \n The format attribute defines the format of the return value.  <br /><br /> <b>tip: The format string we used (date-fns) and moment.js are inconsistent, such as: <br /> <br /> moment: YYYY  => date-fns: yyyy <br /> moment: DD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; => date-fns: dd <br /> moment: hh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  => date-fns: HH  </b><br /><br /> Please refer to the details <a href="#heading-3-Format">Format<a>'
    ),
    component: require('doc/pages/components/DatePicker/example-02-format.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-02-format.js'),
  },
  {
    name: '03-size',
    title: locate(
      '尺寸 \n 内置了三种尺寸，small、default、large',
      'Size \n There are three built-in size: small、default、large.'
    ),
    component: require('doc/pages/components/DatePicker/example-03-size.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-03-size.js'),
  },
  {
    name: '04-day',
    title: locate(
      '选择天 \n 设置 type 为 date，选择 天',
      'Day Mode \n Set type to be date to select day.'
    ),
    component: require('doc/pages/components/DatePicker/example-04-day.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-04-day.js'),
  },
  {
    name: '05-week',
    title: locate(
      '选择星期 \n 设置 type 为 week，选择星期',
      'Week Mode \n Set type to be week to select week.'
    ),
    component: require('doc/pages/components/DatePicker/example-05-week.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-05-week.js'),
  },
  {
    name: '06-month',
    title: locate(
      '选择月 \n 设置 type 为 month，选择月',
      'Month Mode \n Set type to be month to select month.'
    ),
    component: require('doc/pages/components/DatePicker/example-06-month.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-06-month.js'),
  },
  {
    name: '07-time',
    title: locate(
      '选择时间 \n 设置 type 为 time，选择时间，根据 format 自动加载相应的选择列',
      'Time Mode \n Set type to be time to select time and automatically load the corresponding selection column according to the format property.'
    ),
    component: require('doc/pages/components/DatePicker/example-07-time.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-07-time.js'),
  },
  {
    name: '08-datetime',
    title: locate(
      '选择日期时间 \n 设置 type 为 datetime，选择日期 + 时间',
      'Datetime Mode \n Set type to be datetime to select date and time.'
    ),
    component: require('doc/pages/components/DatePicker/example-08-datetime.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-08-datetime.js'),
  },
  {
    name: '09-range-date',
    title: locate(
      '范围选择 \n 设置 range 属性可以选择范围，输入和返回的 value 为长度为 2 的数组',
      'Range \n Set the range property to select range, the input value and return value is an array of length 2.'
    ),
    component: require('doc/pages/components/DatePicker/example-09-range-date.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-09-range-date.js'),
  },
  {
    name: '10-disabled',
    title: locate(
      '禁用 \n disabled 为 true 时，禁用整个日期选择',
      'Disabled \n When the disabled is true, disable all the date selection.'
    ),
    component: require('doc/pages/components/DatePicker/example-10-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-10-disabled.js'),
  },
  {
    name: '11-disabled',
    title: locate(
      ' \n disabled 为函数时，禁用返回为true的选项',
      ' \n When the disabled is a function, disbale the option that the function to return true.'
    ),
    component: require('doc/pages/components/DatePicker/example-11-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-11-disabled.js'),
  },
  {
    name: '12-inputable',
    title: locate(
      '可输入 \n 设置 inputable 使日期可输入',
      'Inputable \n Set inputable to true, you can change the value by input'
    ),
    component: require('doc/pages/components/DatePicker/example-12-inputable.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-12-inputable.js'),
  },
  {
    name: '13-absolute',
    title: locate(
      '绝对定位 \n 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。（非必要情况下不建议）',
      'Absolute \n If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer. (not recommended if not necessary)'
    ),
    component: require('doc/pages/components/DatePicker/example-13-absolute.js').default,
    rawText: require('!raw-loader!doc/pages/components/DatePicker/example-13-absolute.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
