import React from 'react'
import Icon from './Icon'

function Iconbox(props) {
  const {icon} = props
  return <div className="iconbox">
    <Icon icon={icon}/>
  </div>
}
export default Iconbox