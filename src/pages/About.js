import { Container, Link, Typography } from '@material-ui/core';
import React from 'react'

const links = {
  is542: 'https://catalog.byu.edu/business/information-systems/web-development',
  git: 'https://github.com/eaallen/aql_website',
}

export default function About() {
  return <Container component="main" maxWidth="md">
    <Typography variant='h1'>Hello.</Typography>
    <Typography paragraph>
      This React App is currently a prototype I have built for my <Link href={links.is542}>
        IS 542 class. </Link>
        While there is a payment processing area in this app, it is yet to be set up
        so your card will not be charged. No sales will happen while using this website.
      </Typography>
    <Typography paragraph>
      The purpose of this project is to demonstrate my skill with JavaScript
      development. While this website functions simply, the code behind it is
      quite extensive and will be very useful for scaling up should I choose to
      do so. Check out my <Link href={links.git}> GitHub repository </Link> to see this code for yourself.
    </Typography>

    <Typography paragraph>
      I hope you enjoy my project, to authenticate yourself: <br/>
      <strong>email:</strong> testuser@test.com <br/>
      <strong>password:</strong> testme <br/>
      To get started, check out the store first. 

    </Typography>
    
    <Typography paragraph>
      The Following list is the technology stack I used and learned:
    </Typography>
    <Container maxWidth="md">
    <ul>
      <li>JavaScript</li>
      <ul>
        <li>Leveraged OOP for data representation </li>
        <li>Promise API</li>
        <li>Asynchronous Programing </li>
        <li>Creating utility classes that I actually used more than once</li>
        <li>Handling user state globally</li>
      </ul>

      <li>React.js</li>
      <ul>
        <li>State management with React Context</li>
        <li>useEffect Hook</li>
        <li>
          This was my first time being almost solely dependent on React
          functional instead of class components. It was quite the learning
          experience and I can now say I fully support functional React.
        </li>
      </ul>
      <li>Material UI</li>
      <ul>
        <li>Css in JavaScript</li>
        <li>Animations</li>
        <li>Global Theme with ReactContext</li>
        <li>Any general Material UI Components used in this App</li>
        <li>useMediaQuery</li>
      </ul>

      <li>React Router</li>
      <ul>
        <li>Sub Switches</li>
        <li>Private Routes</li>
        <li>Redirects </li>
      </ul>

      <li>Firebase Auth</li>
      <ul>
        <li>Email / Password</li>
        <li>Sign in with Google</li>
        <li>User event listener</li>
      </ul>
      <li>Firebase Firestore (database)</li>
      <ul>
        <li>Leveraged sub collections </li>
        <li>Designed data for scalability</li>
      </ul>
      <li>Firebase Hosting</li>
      <ul>
        <li>This is being hosted by Firebase!</li>
      </ul>
    </ul>
    </Container>
  </Container>

}