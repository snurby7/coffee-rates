import { ICoffeeProfile } from '@cr/common';
import React, { FormEvent, useReducer } from 'react';
import styled, { keyframes } from 'styled-components';

import { CoffeeApi } from '../../../api/CoffeeApi';
import CoffeeStars from '../CoffeeStars';

const fadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1; }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 24rem;
  align-items: center;
  border: 1px black solid;
  border-radius: 8px;
  padding: 12px;
  animation: ${fadeIn} 1s linear;
`;

const StyledLabel = styled.label`
  margin: 0.5rem;
`;

const StyledInput = styled.input`
  margin-left: 1rem;
  border-style: ridge;
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  margin-left: 1rem;
  border-style: ridge;
`;

const StyledInputButton = styled.input`
  border-radius: 4px;
  border-style: outset;
`;

const StyledCoffeeStarSpan = styled.span`
  display: flex;
  flex-direction: row;
`;

interface AddCoffeeFormProps {
  userId: string;
}

const AddCoffeeForm = ({ userId }: AddCoffeeFormProps) => {
  const defaultCoffee = {} as ICoffeeProfile;

  const [coffee, setCoffee] = useReducer(
    (state: ICoffeeProfile, newState) => ({
      ...state,
      ...newState,
    }),
    {
      coffeeName: '',
      notes: '',
      purchaseDate: '',
      rating: 0,
      region: '',
      roasterName: '',
      url: '',
      userId,
    },
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setCoffee({ [name]: value });
  };

  const handleCoffeeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await CoffeeApi.addCoffee(coffee).catch((error) => {
      // handle the error
    });
    if (result) {
      setCoffee(defaultCoffee);
    }
  };

  const updateCoffeeStarRating = (rating: number) =>
    setCoffee({ ...coffee, rating });

  return (
    <StyledForm onSubmit={handleCoffeeSubmit}>
      <StyledLabel>
        Roaster Name
        <StyledInput
          required={true}
          value={coffee.roasterName}
          name="roasterName"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Coffee Name
        <StyledInput
          required={true}
          value={coffee.coffeeName}
          name="coffeeName"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Region
        <StyledInput
          value={coffee.region}
          name="region"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Website
        <StyledInput value={coffee.url} name="url" onChange={handleChange} />
      </StyledLabel>
      <StyledLabel>
        Purchase Date
        <StyledInput
          value={coffee.purchaseDate}
          name="purchaseDate"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        <StyledCoffeeStarSpan>
          Rating <br />
          <CoffeeStars
            value={coffee.rating}
            onChange={updateCoffeeStarRating}
          />
        </StyledCoffeeStarSpan>
      </StyledLabel>
      <StyledLabel>
        Notes
        <StyledTextArea
          value={coffee.notes}
          name="notes"
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledInputButton type="submit" value="Submit" />
    </StyledForm>
  );
};

export default AddCoffeeForm;
