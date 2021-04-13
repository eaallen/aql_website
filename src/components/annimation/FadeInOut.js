import { Fade } from '@material-ui/core'
import React from 'react'

export default function FadeInOut(props) {
  // const wrapper = React.createRef()
  return <Fade in={props.in} disableStrictModeCompat={true}>
    <div>
      {props.children}
    </div>
  </Fade>
}