import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


const SignIn = () => {

  return (
    <Authenticator>
    {({ signOut, user }) => (
        <main>
          <p>Welcome. You are currently signed in as {user.attributes.email}</p>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
};
  
export default SignIn;