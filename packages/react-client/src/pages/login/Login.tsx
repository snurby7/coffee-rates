import { ILoginRequest } from '@cr/common';
import React, { FormEvent, useReducer } from 'react';
import styled from 'styled-components';

import { CoffeeApi } from '../../api/CoffeeApi';

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

const LoginForm = ({  }: any) => {
  const defaultLogin = {} as ILoginRequest;

  const [loginRequest, setLoginRequest] = useReducer(
    (state: ILoginRequest, newState) => ({
      ...state,
      ...newState,
    }),
    defaultLogin,
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setLoginRequest({ [name]: value });
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await CoffeeApi.login(loginRequest).catch((error) => {
      // do something with the error
    });
  };

  // Show a login successfull message on success
  return (
    <StyledForm onSubmit={handleLogin}>
      <StyledLabel>
        User Name
        <StyledInput
          required={true}
          value={loginRequest.username}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          required={true}
          type="password"
          value={loginRequest.password}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledInputButton type="submit" value="Login" />
    </StyledForm>
  );
};

export default LoginForm;
