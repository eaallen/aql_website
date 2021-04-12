import { Typography } from '@material-ui/core'
import React from 'react'

export default function ErrorItem({ error }) {
  return <>
    {error ? <Typography style={{color:'red'}} >{error}</Typography> : <></>}
  </>
}