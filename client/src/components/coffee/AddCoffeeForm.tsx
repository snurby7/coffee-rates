import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import { CoffeeApi } from '../../api/CoffeeApi';
import { ICoffeeProfile } from '../../contracts';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 24rem;
  align-items: center;
  border: 1px black solid;
  border-radius: 8px;
  padding: 12px;
`;

const StyledLabel = styled.label`
  margin: 0.5rem;
`;

const StyledInput = styled.input`
  margin-left: 1rem;
  border-style: ridge;
`;

const StyledTextArea = styled.textarea`
  margin-left: 1rem;
  border-style: ridge;
`;

const StyledInputButton = styled.input`
  border-radius: 4px;
  border-style: outset;
`;

type AddCoffeeFormProps = {
  userId: string;
};

const AddCoffeeForm = ({ userId }: AddCoffeeFormProps) => {
  const [coffee, setCoffee] = useState({ userId } as ICoffeeProfile);
  const coffeeScores: number[] = [1, 2, 3, 4, 5];

  const handleCoffeeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CoffeeApi.addCoffee(coffee)
      .then(() => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
  };
  // Show a save successfull message on success
  return (
    <StyledForm onSubmit={handleCoffeeSubmit}>
      <StyledLabel>
        Roaster Name
        <StyledInput
          required
          value={coffee.roasterName}
          onChange={event => setCoffee({ ...coffee, roasterName: event.target.value })}
        />
      </StyledLabel>
      <StyledLabel>
        Coffee Name
        <StyledInput
          required
          value={coffee.coffeeName}
          onChange={event => setCoffee({ ...coffee, coffeeName: event.target.value })}
        />
      </StyledLabel>
      <StyledLabel>
        Region
        <StyledInput
          value={coffee.region}
          onChange={event => setCoffee({ ...coffee, region: event.target.value })}
        />
      </StyledLabel>
      <StyledLabel>
        Website
        <StyledInput
          value={coffee.url}
          onChange={event => setCoffee({ ...coffee, url: event.target.value })}
        />
      </StyledLabel>
      <StyledLabel>
        Purchase Date
        <StyledInput
          value={coffee.purchaseDate}
          onChange={event => setCoffee({ ...coffee, purchaseDate: event.target.value })}
        />
      </StyledLabel>
      <StyledLabel>
        Rating
        {/*
            @todo Replace Select options with CoffeeStars
            @body Updat the below select to use the coffee star component built in #25
          */}
        <select
          value={coffee.rating}
          onChange={event => setCoffee({ ...coffee, rating: parseInt(event.target.value, 10) })}
        >
          {coffeeScores.map(score => (
            <option key={score} value={score}>
              {score}
            </option>
          ))}
        </select>
      </StyledLabel>
      <StyledLabel>
        Notes
        <StyledTextArea
          value={coffee.notes}
          onChange={event => setCoffee({ ...coffee, notes: event.target.value })}
        />
      </StyledLabel>
      <StyledInputButton type='submit' value='Submit' />
    </StyledForm>
  );
};

export default AddCoffeeForm;
