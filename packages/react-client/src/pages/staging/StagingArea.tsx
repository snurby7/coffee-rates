import React from 'react';

import { PagedCoffee } from '../../components';
import { IReachLinkProps } from '../../contracts';

const StagingArea = ({  }: IReachLinkProps) => {
  return (
    <main>
      <PagedCoffee />
    </main>
  );
};
export default StagingArea;
