import React from 'react'
import PropTypes from 'prop-types'
import * as Icons from './elements'

const Icon = ({ name, size, ...props }) => {
  const CurrentIcon = Icons[name]
  return <CurrentIcon {...props} width={size} height={size} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string
}

Icon.defaultProps = {
  size: '20px'
}

export default Icon
