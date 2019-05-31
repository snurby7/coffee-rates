import { ICoffeeProfile } from '@cr/common';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { CoffeeApi } from '../../api/CoffeeApi';
import { Pagination } from '../pagination';
import CoffeeProfile from './CoffeeProfile';

const CoffeeProfilesList = styled.div``;
const CoffeeProfileItemWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  max-width: 20rem;
  border: 1px solid black;
  border-radius: 3px;
`;

type PagedCoffeeState = {
  currentPage: number;
  coffees: ICoffeeProfile[];
  totalCoffees: number;
};

const PagedCoffee = () => {
  const [pagedCoffeeState, setPagedCoffeeState] = useState({
    coffees: [] as ICoffeeProfile[],
    totalCoffees: 0,
    currentPage: 0,
  } as PagedCoffeeState);
  const pageSize = 2;

  const updateCoffeeList = (pageNumber: number): void => {
    CoffeeApi.pageCoffeeList({
      pageStart: pageNumber,
      maxPageSize: pageSize,
    }).then((data) => {
      const pagedResponse = data.response;
      setPagedCoffeeState({
        currentPage: pageNumber,
        coffees: pagedResponse.data,
        totalCoffees: pagedResponse.totalResults,
      });
    });
  };

  useEffect(() => {
    updateCoffeeList(pagedCoffeeState.currentPage);
  }, []);

  const { coffees, currentPage, totalCoffees } = pagedCoffeeState;
  return (
    <CoffeeProfilesList>
      {coffees.map((coffee) => (
        <CoffeeProfileItemWrapper key={coffee._id}>
          <CoffeeProfile {...coffee} />
        </CoffeeProfileItemWrapper>
      ))}
      {totalCoffees / pageSize !== 0 && (
        <Pagination
          currentPage={currentPage}
          itemCount={totalCoffees}
          pageSize={pageSize}
          onButtonClick={updateCoffeeList}
        />
      )}
    </CoffeeProfilesList>
  );
};

export default PagedCoffee;
