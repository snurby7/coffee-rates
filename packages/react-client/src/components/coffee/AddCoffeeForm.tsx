import { ICoffeeProfile } from 'cr-common';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

import { CoffeeApi } from '../../api/CoffeeApi';
import { WindowUtility } from '../../util';
import CoffeeStars from './CoffeeStars';


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

const StyledCoffeeStarSpan = styled.span`
  display: flex;
  flex-direction: row;
`;

type AddCoffeeFormProps = {
  userId: string;
};

const AddCoffeeForm = ({ userId }: AddCoffeeFormProps) => {
  const defaultCoffee: ICoffeeProfile = {
    userId,
    roasterName: '',
    coffeeName: '',
    region: '',
    url: '',
    purchaseDate: '',
    notes: '',
    rating: 0,
  };
  const [coffee, setCoffee] = useState(defaultCoffee);

  const handleCoffeeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    CoffeeApi.addCoffee(coffee).then(
      () => {
        WindowUtility.showAlert('Save Successful!');
        setCoffee(defaultCoffee);
      },
      error => {
        console.log(error);
      }
    );
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
        <StyledCoffeeStarSpan>
          Rating <br />
          <CoffeeStars
            value={coffee.rating}
            onChange={(rating: number) => setCoffee({ ...coffee, rating })}
          />
        </StyledCoffeeStarSpan>
      </StyledLabel>
      <StyledLabel>
        Notes
        <StyledTextArea
          value={coffee.notes}
          onChange={event => setCoffee({ ...coffee, notes: event.target.value })}
        />
      </StyledLabel>
      <StyledInputButton type="submit" value="Submit" />
    </StyledForm>
  );
};

export default AddCoffeeForm;
