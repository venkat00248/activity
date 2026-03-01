import { Button } from '@material-ui/core'
import React from 'react'
import Icon from './Icon'

function Rippleicon(props) {
  const {icon, clickEvent, size} = props
  return <Button 
          onClick={()=>clickEvent && clickEvent()}
          style={{width: 'initial', padding: '0', borderRadius: '50%', height: 'initial', minWidth: 'initial'}}
          color='default'
          
           >
        <Icon icon={icon+ ' fillcontainer'}/>
  </Button>
}
export default Rippleicon