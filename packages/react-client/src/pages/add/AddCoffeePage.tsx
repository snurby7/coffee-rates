import React from 'react';

import { AddCoffeeForm } from '../../components/coffee';
import { IReachLinkProps } from '../../contracts';

interface IAddCoffeePageProps extends IReachLinkProps {
  // TODO: this could eventually have the userID passed so it's found by the user
}

const AddCoffeePage: React.FC<IAddCoffeePageProps> = () => {
  // TODO: Ideally this will be a userId if https://github.com/snurby7/coffee-rates/issues/20 is ever done
  const mockUserId = 'mock-user-id';
  return (
    <main>
      <AddCoffeeForm userId={mockUserId} />
    </main>
  );
};

export default AddCoffeePage;
