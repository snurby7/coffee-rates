import { ICoffeeProfile } from 'cr-common';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { CoffeeApi } from '../../api/CoffeeApi';
import CoffeeProfile from './CoffeeProfile';

const CoffeeProfilesList = styled.div``;
const CoffeeProfileItemWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  max-width: 20rem;
  border: 1px solid black;
  border-radius: 3px;
`;

const PagedCoffee = () => {
  const [coffeeList, setCoffeeList] = useState([] as ICoffeeProfile[]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [totalCoffees, setTotalCoffees] = useState(0);

  useEffect(() => {
    CoffeeApi.pageCoffeeList({
      pageStart: 0,
      maxPageSize: 10,
    }).then(data => {
      const pagedResponse = data.response;
      setTotalCoffees(pagedResponse.totalResults);
      setCoffeeList(pagedResponse.data);
    });
  }, []);

  return (
    <CoffeeProfilesList>
      {coffeeList.map(coffee => (
        <CoffeeProfileItemWrapper>
          <CoffeeProfile {...coffee} />
        </CoffeeProfileItemWrapper>
      ))}
    </CoffeeProfilesList>
  );
};

export default PagedCoffee;
