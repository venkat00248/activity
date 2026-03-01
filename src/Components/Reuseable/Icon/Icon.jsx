import React from 'react'
import './Icon.css'
import './Socialicon.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Icon(props) {
  const {icon, clickEvent} = props

  return (
    <i className={icon +' icon'} onClick={()=>clickEvent && clickEvent()}></i>
  )
}
export default Icon