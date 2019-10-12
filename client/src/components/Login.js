import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({});

  const handleInput = e => {
    setCredentials({...credentials,
                    [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => console.log('RES FROM LOGIN: ', res))
      .catch(err => console.log('ERROR: ', err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
             name='username'
             placeholder='Username'
             onChange={handleInput}/>
      <input type='password'
             name='password'
             placeholder='Password'
             onChange={handleInput}/>
      <button type='submit'>submit</button>
    </form>
  );
};

export default Login;
