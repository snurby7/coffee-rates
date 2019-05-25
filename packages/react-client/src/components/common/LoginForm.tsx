import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import { WindowUtility } from '../../util';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 24rem;
  align-items: center;
  border: 1px black solid;
  border-radius: 8px;
  padding: 12px;
`;

const StyledLabel = styled.label`
  margin: 0.5rem;
`;

const StyledInput = styled.input`
  margin-left: 1rem;
  border-style: ridge;
`;

const StyledInputButton = styled.input`
  border-radius: 4px;
  border-style: outset;
`;

export interface ILogin {
  userId: string;
  userName: string;
  password: string;
}

type LoginFormProps = {
  onAuthentication: (userId: string) => void;
};

const LoginForm = ({ onAuthentication }: LoginFormProps) => {
  const defaultLogin: ILogin = {
    userId: '',
    userName: '',
    password: '',
  };
  const [login, setLogin] = useState(defaultLogin);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO: Implement authentication
    const mockLogin = (login: ILogin) => Promise.resolve('mock-user-id');
    mockLogin(login).then(
      result => {
        WindowUtility.showAlert('Login Successful!');
        setLogin({ ...defaultLogin, userId: result });
        onAuthentication(result);
      },
      error => {
        console.log(error);
      }
    );
  };
  // Show a login successfull message on success
  return (
    <StyledForm onSubmit={handleLogin}>
      <StyledLabel>
        User Name
        <StyledInput
          required
          value={login.userName}
          onChange={event => setLogin({ ...login, userName: event.target.value })}
        />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          required
          type="password"
          value={login.password}
          onChange={event => setLogin({ ...login, password: event.target.value })}
        />
      </StyledLabel>
      <StyledInputButton type="submit" value="Login" />
    </StyledForm>
  );
};

export default LoginForm;
