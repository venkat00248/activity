import React, { useContext, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './Columns.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ContextApp } from '../../../ContextAPI';
import { addNotification } from '../../Appfunctions';

function Columns (props) {
  const {column} = props
  const {notifisystem} = useContext(ContextApp)
  const [expanded, setExpanded] = useState(false)
  function determineLink(link){
    if(column.copy) {
      const parameters = {
        msg: 'Copied to clipboard!',
        icon: 'fad fa-copy',
        notifisystem
      }
      return (
      <CopyToClipboard text={link.text} onCopy={()=>addNotification(parameters)}>
          <a href={link.link}  target={!link.notblank&&'__blank'} className='linkcont'>
          <i className={link.icon}></i>
          <span>{link.text}</span>
          </a>
      </CopyToClipboard>
      )
    }
    if(column.blank) {
      return (
        <a href={link.link}  target={!link.notblank&&'__blank'} className='linkcont'>
          <i className={link.icon}></i>
          <span>{link.text}</span>
        </a>
      )
    }
    return (
      <HashLink smooth to={link.link+'#top'}>
        <i className={link.icon}></i>
        <p className='linkcont'>{column.linktitle?link.title:link.text}</p>
     </HashLink>
    )
  }
  return <div className="col">
      <div className='expandtitle' onClick={()=>setExpanded(!expanded)}>
      <h3>{column.title}</h3>      
      {!column.logo&&<i className={`fal fa-arrow-${expanded?'right transformed':'right'}`}></i>}
      </div>
      <div className={expanded?"expand expanded":'expand'}>
      <div className='columnlinks' > {column.links?.map(link=>{
       return determineLink(link)
           })}
       </div> 
      </div>
 </div>
}

export default Columns