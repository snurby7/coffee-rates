import React, { useState } from 'react';

import CoffeeIcon from './CoffeeIcon';

const coffeeScores: number[] = [1, 2, 3, 4, 5];

const CoffeeStars = (event: any) => {
  const [value, setValue] = useState(0);

  const handleNewValue = (newValue: number) => {
    setValue(newValue);
    event.onChange(newValue);
  };

  return (
    <div>
      {coffeeScores.map((score: number) => (
        <CoffeeIcon key={score} index={score} value={value} onValueChange={handleNewValue} />
      ))}
    </div>
  );
};

export default CoffeeStars;
