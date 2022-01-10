
import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Signin = (props) =>
{
  return(
    <div className='signin'>
      <h3>Login</h3>
      <input></input>
      <input></input>
      <button>Sign in</button>
      <span>Forgot your password?</span>
      <span>Create an account</span>
      <span>Sign in as a demo user</span>
    </div>
  );
}

export default Signin;
