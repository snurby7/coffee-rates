import React, { useState } from 'react';

import CoffeeIcon from './CoffeeIcon';

interface CoffeeStarsProps {
  value: number;
  onChange: (newValue: number) => void;
}

const CoffeeStars = (event: CoffeeStarsProps) => {
  const coffeeScores: number[] = [1, 2, 3, 4, 5];
  const [value, setValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const handleNewValue = (newValue: number) => {
    setValue(newValue);
    event.onChange(newValue);
  };

  const handleIconHover = (newhoverValue: number) => {
    setHoverValue(newhoverValue);
  };

  return (
    <div>
      {coffeeScores.map((score: number) => (
        <CoffeeIcon
          key={score}
          index={score}
          value={value}
          onValueChange={() => handleNewValue(score)}
          hoverValue={hoverValue}
          onHoverValueChange={handleIconHover}
        />
      ))}
    </div>
  );
};

export default CoffeeStars;
