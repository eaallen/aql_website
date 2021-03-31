import React from "react";
import FirebaseContext from './contexts'
import { Button, Container } from '@material-ui/core';

function App() {
  const firebaseCtx = React.useContext(FirebaseContext)

  return (
    <Container>
      <div className="App">
      </div>
      <Button onClick={()=>firebaseCtx.googleAuth()}>sign in with google</Button>
    </Container>
  );
}

export default App;
