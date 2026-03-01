import React from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import './Textarrow.css'

function Textarrow(props) {
  const {text='Read More', icon='fad fa-long-arrow-right', link} = props


  return <Link to={link+'#top'} className="readmore">
    <span>{text}</span>
    <i className={icon}></i>
  </Link>
}
export default Textarrow