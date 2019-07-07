import React, { useState } from 'react';

import { IReachLinkProps } from '../../contracts';
import CreateAccount from './CreateAccount';
import Login from './Login';

const LoginPage = ({  }: IReachLinkProps) => {
  const [isNewAccount, setIsNewAccount] = useState(true);
  const toggleForm = () => setIsNewAccount(!isNewAccount);

  return (
    <>
      {isNewAccount && <CreateAccount />}
      {!isNewAccount && <Login />}
      <button onClick={toggleForm}>Toggle</button>
    </>
  );
};

export default LoginPage;
