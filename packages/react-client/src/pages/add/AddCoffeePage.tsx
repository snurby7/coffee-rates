import React from 'react';

import AddCoffeeForm from '../../components/coffee/AddCoffeeForm';
import { IAuthenticationProps, IReachLinkProps } from '../../contracts';

interface IAddCoffeePageProps extends IReachLinkProps, IAuthenticationProps {}

const AddCoffeePage: React.FC<IAddCoffeePageProps> = (props: IAddCoffeePageProps) => {
  console.log(props.userId);
  return (
    <main>
      <AddCoffeeForm userId={props.userId} />
    </main>
  );
};

export default AddCoffeePage;
