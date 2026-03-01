import React from 'react'
import './Button.css'
import Button from '@material-ui/core/Button';

function AppButton(props) {
  const {
    icon, clickEvent, 
    text} = props

    return (
      <Button
      type='submit'
       className='button'
       onClick={()=>clickEvent && clickEvent()}>
        <span>{text}</span>
        <i className={icon}></i>
      </Button>
    )
}
export default AppButton