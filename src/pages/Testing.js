import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import '../App.css'
import FadeInOut from '../components/annimation/FadeInOut';
export default function ClippedDrawer() {
  const [_in, setIn] = React.useState(true)
  return <>
    <FadeInOut in={_in}>
      <div>
        <FullDescription test='rrr'/>
      </div>
    </FadeInOut>
    <Button onClick={() => setIn(!_in)}>test</Button>
  </>

}

function FullDescription (props) {
  return(
  <Grid container>
    <Grid item xs={12} md={8}>
      <Typography variant="h2">
        {props.test}
			</Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
        summary
			</Typography>
      <br />
      <Typography varient='body1'>
        This add-in allows the user to specify a query in SQL and execute it against a demonstration database,
        provided for instructional purposes. With configuration, users can execute SQL queries against instances
        of MS SQL Server that are accessible from the web. Users can also execute queries against public data,
        or their personal, private data, stored in data.world. While airtable.com does not allow SQL queries, you
        can give a table name and specify a record restriction formula to limit which records from the table are
        returned.
				 <br /> <br />
				 	While this addin can be used to query the demo database with no account required, having acccount at
				 	<a href='https://data.world'> https://data.world</a> or <a href='https://airtable.com'>https://airtable.com</a> will
					provide additional functionality. Each of these services provide a free-tier account that will all you to get started
					at no cost.
			</Typography>
    </Grid>
    <Grid />
  </Grid>
)}
