import {Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export default function WindowHead(props) {
  const css = useStyles()
  const icon = props.Icon  || <></>
  return <div className={css.paper}>
    {icon}
    <Typography component="h1" variant="h5">
      {props.title}
    </Typography>
  </div>
}