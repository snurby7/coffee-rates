import React from 'react';

const CoffeeIcon = (event: any) => {
  const handleClick = (e: any) => {
    event.onValueChange(event.index);
    e.preventDefault();
  };

  return (
    <span onClick={handleClick}>
      <svg
        style={{
          fill: event.index <= event.value ? '#4e342e' : '#bdbdbd',
        }}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path fill='none' d='M0 0h24v24H0V0z' />
        <path d='M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z' />
      </svg>
    </span>
  );
};

export default CoffeeIcon;
