import React, { FormEvent, useState } from 'react';

import { ICoffeeProfile, IReachLinkProps } from '../../contracts';

interface IAddCoffeePageProps extends IReachLinkProps {
  // TODO: this could eventually have the userID passed so it's found by the user
}

const AddCoffeePage: React.FC<IAddCoffeePageProps> = () => {
  const [coffee, setCoffee] = useState({} as ICoffeeProfile);
  const coffeeScores: number[] = [1, 2, 3, 4, 5];

  const handleCoffeeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const placeHolder = () =>  Promise.resolve('this is just a placeholder for the API');

    const result = await placeHolder();
    console.log(result);
   };

  return (
    <form onSubmit={handleCoffeeSubmit}>
      <label>
        Purchase Date:
        <input
          value={coffee.purchaseDate}
          onChange={event => setCoffee({ ...coffee, purchaseDate: event.target.value })}
        />
      </label>
      <label>
        Roaster Name:
        <input
          value={coffee.roasterName}
          onChange={event => setCoffee({ ...coffee, roasterName: event.target.value })}
        />
      </label>
      <label>
        Region:
        <input
          value={coffee.region}
          onChange={event => setCoffee({ ...coffee, region: event.target.value })}
        />
      </label>
      <label>
        Website:
        <input
          value={coffee.url}
          onChange={event => setCoffee({ ...coffee, url: event.target.value })}
        />
      </label>
      <label>
        Rating:
        <select
          value={coffee.rating}
          onChange={event => setCoffee({ ...coffee, rating: parseInt(event.target.value, 10) })}
        >
          {coffeeScores.map(score => (
            <option key={score} value={score}>{score}</option>
          ))}
        </select>
      </label>
      <label>
        Notes:
        <textarea
          value={coffee.notes}
          onChange={event => setCoffee({ ...coffee, notes: event.target.value })}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default AddCoffeePage;
