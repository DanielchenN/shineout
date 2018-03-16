import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getGrid } from '../Grid/utils'
import { getProps, defaultProps } from '../utils/proptypes'
import { formClass } from '../styles'

class Item extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  renderHelp() {
    const { tip } = this.props
    if (!tip) return null
    return <div className={formClass('tip')}>{tip}</div>
  }

  render() {
    const {
      children, grid, label, labelWidth, required,
    } = this.props

    const className = classnames(
      getGrid(grid),
      formClass('item', required && 'required'),
      this.props.className,
    )

    return (
      <div className={className}>
        <div style={{ width: labelWidth }} className={formClass('label')}>
          {label}
        </div>
        <div className={formClass('control')}>
          {children}
          {this.renderHelp()}
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  ...getProps('children', 'grid'),
  className: PropTypes.string,
  label: PropTypes.string,
  labelWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  required: PropTypes.bool,
  tip: PropTypes.any,
}

Item.defaultProps = {
  ...defaultProps,
}

export default Item
