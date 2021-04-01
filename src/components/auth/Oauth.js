import React from 'react'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import {FirebaseContext} from '../../contexts/firebase/Firebase'


function GoogleAuthBtn() {
    const firebaseCtx = React.useContext(FirebaseContext)
    return <Button onClick={() => firebaseCtx.googleAuth()}>Auth with google</Button>
}

export default function Oauth(){
    return<Grid container spacing={2}>
        <Grid item xs={6}> <GoogleAuthBtn/> </Grid>
    </Grid>
}



export{GoogleAuthBtn}
