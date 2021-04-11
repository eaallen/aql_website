import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from "../../contexts/firebase/Firebase";
import { AUTH } from '../../private/routes';

export default function PrivateRoute({ children, ...rest }) {
  const {user}=React.useContext(FirebaseContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AUTH,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}