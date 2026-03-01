import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
function Logo(props) {
  const {text='TurtleX', text2='Digital'} = props

  return <Link className="logo" to=''>
   
    <img src='https://i.imgur.com/QQ8FTjR.png' alt=""/>
    <span>
      <strong>{text}</strong>
      <span>{text2}</span>
    </span>
  </Link>
}
export default Logo