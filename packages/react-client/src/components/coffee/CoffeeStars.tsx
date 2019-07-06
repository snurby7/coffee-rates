import React, { useState } from 'react';

import CoffeeIcon from './CoffeeIcon';

interface CoffeeStarsProps {
  value: number;
  onChange: (newValue: number) => void;
}

type IconWrapperProp = {
  rating: number;
  value: number;
  hoverValue: number;
  onClick: (newValue: number) => void;
  handleIconHover: (hoverValue: number) => void;
};

const IconWrapper = ({
  rating,
  value,
  onClick,
  hoverValue,
  handleIconHover,
}: IconWrapperProp) => {
  const onIconClick = () => onClick(rating);

  return (
    <CoffeeIcon
      key={rating}
      starRating={rating}
      value={value}
      onClick={onIconClick}
      hoverValue={hoverValue}
      onHover={handleIconHover}
    />
  );
};

const CoffeeStars = ({ onChange }: CoffeeStarsProps) => {
  const coffeeRatings: number[] = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState<number>(0);
  const [hoveredIconValue, setHoveredIconValue] = useState<number>(0);

  const onClick = (newValue: number) => {
    setRating(newValue);
    onChange(newValue);
  };

  const handleIconHover = (newhoverValue: number) => {
    setHoveredIconValue(newhoverValue);
  };

  return (
    <>
      {coffeeRatings.map((score: number) => (
        <IconWrapper
          key={score}
          rating={score}
          value={rating}
          onClick={onClick}
          hoverValue={hoveredIconValue}
          handleIconHover={handleIconHover}
        />
      ))}
    </>
  );
};

export default CoffeeStars;
