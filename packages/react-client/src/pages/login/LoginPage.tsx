import React from 'react';

import { LoginForm } from '../../components/common';
import { IReachLinkProps } from '../../contracts';

interface ILoginPageProps extends IReachLinkProps {
  onAuthentication: (userId: string) => void;
}

const LoginPage: React.FC<ILoginPageProps> = (props: ILoginPageProps) => {
  return (
    <main>
      <LoginForm onAuthentication={props.onAuthentication} />
    </main>
  );
};

export default LoginPage;
