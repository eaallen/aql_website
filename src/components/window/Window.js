import { Box, Container } from '@material-ui/core'
import React from 'react'
import WindowBody from './WindowBody'
import WindowHead from './WindowHead'

export default function Window(props) {
  return <Container maxWidth={props.maxWidth}>
    <WindowHead title={props.title} Icon={props.Icon} />
    <Box p={2}>
      <WindowBody>
        {props.children}
      </WindowBody>
    </Box>
  </Container>
}