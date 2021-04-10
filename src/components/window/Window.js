import React from 'react'
import WindowBody from './WindowBody'
import WindowHead from './WindowHead'

export default function Window(props){
  return<>
    <WindowHead title={props.title} Icon={props.Icon}/>
    <WindowBody>
      {props.children}
    </WindowBody>
  </>  
}