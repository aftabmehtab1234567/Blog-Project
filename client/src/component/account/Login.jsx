import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { userSignup, userLogin } from '../../services/api';
import { DataContext } from '../../Context/Dataprovider';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.6);
`;

const Image = styled('img')({
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0',
});

const Loginbutton = styled(Button)`
  && {
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
  }
`;

const Signupbutton = styled(Button)`
  && {
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
  }
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > div,
  & > ${Loginbutton},
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const loginInitialValue = {
  username: '',
  password: '',
};

const signupInitialValue = {
  name: '',
  username: '',
  password: '',
};

const Login = () => {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();
  const [account, toggleAccount] = useState('login');
  const [loginData, setLoginData] = useState(loginInitialValue);
  const [signupData, setSignupData] = useState(signupInitialValue);
  const [error, setError] = useState('');

  const toggleSignup = () => {
    toggleAccount(account === 'login' ? 'signup' : 'login');
  };

  const onValueChange = (e, type) => {
    const updatedData = type === 'login' ? { ...loginData } : { ...signupData };
    updatedData[e.target.name] = e.target.value;

    if (type === 'login') {
      setLoginData(updatedData);
    } else {
      setSignupData(updatedData);
    }
  };

  const signupUser = async () => {
    try {
      let response = await userSignup(signupData);
      console.log(response);
      // Update state or perform other actions on a successful API call
      // Example: setSignupInitialValue() or navigate to another page
    } catch (error) {
      console.error('Error in signup:', error);
      // Handle error
    }
  };
  const Login = ({ isUserAuthenticated }) => {
  const loginUser = async () => {
    try {
      let response = await userLogin(loginData);
      console.log('Response:', response);

      if (response) {
        sessionStorage.setItem('accessToken', `Bearer ${response.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.refreshToken}`);
        setAccount({ username: response.username, name: response.name });
        navigate('/');
      } else {
        setError('Something went wrong');
      }
    } catch (error) {
      console.error('Error in login:', error);
      setError('Something went wrong');
    }
  }
};
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="Logo" />
        {account === 'login' ? (
          <Wrapper>
            <TextField label="Login" onChange={(e) => onValueChange(e, 'login')} variant="standard" name="username" />
            <TextField label="Password" type="password" onChange={(e) => onValueChange(e, 'login')} variant="standard" name="password" />
            <Loginbutton variant="contained" onClick={() => loginUser()}>
              Login
            </Loginbutton>
            <Text style={{ textAlign: 'center' }}>or</Text>
            <Signupbutton onClick={toggleSignup}>Create an account</Signupbutton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField label="Name" onChange={(e) => onValueChange(e, 'signup')} name="name" variant="standard" />
            <TextField label="Username" onChange={(e) => onValueChange(e, 'signup')} name="username" variant="standard" />
            <TextField label="Password" onChange={(e) => onValueChange(e, 'signup')} name="password" type="password" variant="standard" />
            {error && <Error>{error}</Error>}
            <Signupbutton onClick={() => signupUser()}>Signup</Signupbutton>
            <Text style={{ textAlign: 'center' }}>or</Text>
            <Loginbutton variant="contained" onClick={toggleSignup}>
              Already have an account
            </Loginbutton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
