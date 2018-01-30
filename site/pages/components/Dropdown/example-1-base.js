/**
 * cn - 基础
 * en - Base
 */
import React, { Fragment } from 'react'
import { Dropdown } from 'shineout'

export default function () {
  const menu = [
    <a href="#/" key={1}>Home</a>,
    <a href="http://google.com" target="_blank" key={2}>Google</a>,
    <hr key={3} />,
    <a key={4}>Link 3</a>,
  ]

  return (
    <Fragment>
      <Dropdown placeholder="Default">
        {menu}
      </Dropdown>

      <Dropdown placeholder="Link" type="link">
        {menu}
      </Dropdown>

      <Dropdown placeholder="Primary" type="primary">
        {menu}
      </Dropdown>

      <Dropdown placeholder="Outline" outline type="primary">
        {menu}
      </Dropdown>

      <Dropdown placeholder="Small" size="small">
        {menu}
      </Dropdown>
    </Fragment>
  )
}
