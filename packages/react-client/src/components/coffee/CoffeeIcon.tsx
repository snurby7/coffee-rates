import React, { SyntheticEvent, useState } from 'react';

type CoffeeIconProps = {
  index: number;
  value: number;
  hoverValue: number;
  onValueChange: (newValue: number) => void;
  onHoverValueChange: (newHoverValue: number) => void;
}

const CoffeeIcon = (event: CoffeeIconProps) => {
  const [hover, setHover] = useState(false);
  const selectedColor = '#4e342e';
  const notSelectedColor = '#bdbdbd';
  const hoverColor = '#1565c0';
  let fillColor: string;

  if (hover) {
    fillColor = hoverColor;
  } else {
    fillColor = event.index < event.hoverValue ? hoverColor : notSelectedColor;
  }
  if (event.hoverValue === 0) {
    fillColor = event.index <= event.value ? selectedColor : notSelectedColor;
  }

  const toggleHover = () => {
    setHover(!hover);
    event.onHoverValueChange(!hover ? event.index : 0);
  }

  const handleClick = (e: SyntheticEvent) => {
    event.onValueChange(event.index);
    event.onHoverValueChange(0);
    e.preventDefault();
  };

  return (
    <span onClick={handleClick}>
      <svg
        style={{ fill: fillColor }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        x="0px" y="0px"
        viewBox="0 0 512.002 512.002">
          <g>
		<path d="M331.837,213.914l2.108-14.63c1.004-6.967-4.4-13.206-11.44-13.206H92.612c-7.039,0-12.443,6.239-11.44,13.206
			l42.173,292.681c1.225,11.396,10.844,20.036,22.306,20.036h123.814c11.462,0,21.081-8.639,22.306-20.036l10.269-71.268h25.468
			c57.038,0,103.441-46.402,103.441-103.44C430.95,261.67,386.874,216.191,331.837,213.914z M327.508,386.025h-20.472
			l19.818-137.535h0.654c37.919,0,68.768,30.848,68.768,68.767C396.277,355.176,365.428,386.025,327.508,386.025z"/>
	</g>
<g>
	<g>
		<path d="M176.271,124.84c-3.097-10.53-0.94-19.036,6.791-26.766c32.065-32.064,14.991-73.747,1.483-91.307
			c-5.837-7.59-16.723-9.009-24.311-3.171c-7.589,5.839-9.009,16.723-3.171,24.311c0.053,0.07,5.506,7.436,8.202,17.144
			c4.245,15.283-1.802,23.588-6.72,28.505c-32.406,32.407-14.864,72.296-1.06,88.86c3.429,4.116,8.36,6.238,13.327,6.238
			c3.912,0,7.849-1.318,11.089-4.019c7.355-6.13,8.349-17.061,2.22-24.416C184.071,140.158,178.82,133.506,176.271,124.84z"/>
	</g>
</g>
<g>
	<g>
		<path d="M267.906,124.84c-3.096-10.53-0.938-19.036,6.791-26.766c32.065-32.064,14.991-73.747,1.483-91.307
			c-5.837-7.59-16.721-9.009-24.311-3.171c-7.589,5.839-9.009,16.723-3.171,24.311c0.053,0.07,5.506,7.436,8.202,17.144
			c4.245,15.283-1.802,23.588-6.72,28.505c-32.405,32.407-14.863,72.296-1.06,88.86c3.429,4.116,8.36,6.238,13.327,6.238
			c3.912,0,7.849-1.318,11.089-4.019c7.355-6.13,8.349-17.061,2.22-24.416C275.706,140.158,270.455,133.506,267.906,124.84z"/>
	</g>
</g>
      </svg>
    </span>
  );
};

export default CoffeeIcon;
