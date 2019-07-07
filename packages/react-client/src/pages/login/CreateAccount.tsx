import { ICreateAccountRequest, ILoginRequest } from '@cr/common';
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

const CreateAccount = ({  }: any) => {
  const newAccountRequest = {} as ICreateAccountRequest;

  const [accountRequest, setAccountRequest] = useReducer(
    (state: ILoginRequest, newState) => ({
      ...state,
      ...newState,
    }),
    newAccountRequest,
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAccountRequest({ [name]: value });
  };

  const handleNewAccount = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await CoffeeApi.createAccount(accountRequest).catch(
      (error) => {
        // do something with the error
      },
    );
  };

  return (
    <StyledForm onSubmit={handleNewAccount}>
      <StyledLabel>
        E-mail
        <StyledInput
          required={true}
          value={accountRequest.email}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        User Name
        <StyledInput
          required={true}
          value={accountRequest.username}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput
          required={true}
          type="password"
          value={accountRequest.password}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledInputButton type="submit" value="Create Account" />
    </StyledForm>
  );
};

export default CreateAccount;
