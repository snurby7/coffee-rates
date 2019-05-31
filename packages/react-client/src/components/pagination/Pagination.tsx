import React from 'react';
import styled from 'styled-components';

/**
 * TODO: https://github.com/snurby7/coffee-rates/issues/48
 * Stylize Pagination Component and Ellipsis.
 */

interface IButtonProps {
  isCurrentIndex: boolean;
}

const PagedButton = styled.button<IButtonProps>`
  color: ${(props) => (props.isCurrentIndex ? 'red' : 'black')};
`;

interface IPaginationProps {
  currentPage: number;
  pageSize: number;
  itemCount: number;
  /**
   * @description This will be the number to set the new page too.
   */
  onButtonClick: (pageNumber: number) => void;
}
const Pagination = (props: IPaginationProps) => {
  const { currentPage, pageSize, itemCount, onButtonClick } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  const getDisplayButtons = (): Element[] => {
    const buttons: any[] = [];
    for (let page = 0; page < pageCount; page++) {
      buttons.push(
        <PagedButton
          isCurrentIndex={page === currentPage}
          key={page}
          onClick={() => onButtonClick(page)}
        >
          {page + 1}
        </PagedButton>,
      );
    }
    return buttons;
  };

  return <span>{getDisplayButtons().map((button) => button)}</span>;
};
export default Pagination;
