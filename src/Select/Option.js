import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { selectClass } from '../styles'
import { isObject } from '../utils/is'

class Option extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleEnter = this.handleHover.bind(this)
  }

  handleClick() {
    const { data, onClick, isActive, index, disabled } = this.props

    if (this.locked || disabled) return
    this.locked = true

    onClick(!isActive, data, index)

    setTimeout(() => {
      this.locked = false
    }, 200)
  }

  handleHover() {
    this.props.onHover(this.props.index)
  }

  render() {
    const { data, isActive, index, renderItem, isHover, disabled } = this.props
    const className = classnames(
      selectClass('option', isActive && 'active', isHover && 'hover', disabled && 'disabled'),
      `option-${index}`
    )

    const result = renderItem(data, index)
    const title = typeof result === 'string' ? result : ''

    if (isObject(data) && result === data) {
      console.warn('renderItem is essential when data element is Object')
    }

    return (
      <a tabIndex={-1} onClick={this.handleClick} onMouseEnter={this.handleEnter} className={className} title={title}>
        {result}
      </a>
    )
  }
}

Option.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  index: PropTypes.number,
  isActive: PropTypes.bool,
  isHover: PropTypes.bool,
  onClick: PropTypes.func,
  onHover: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
}

export default Option
