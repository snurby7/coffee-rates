import { ICoffeeProfile } from '@cr/common';
import React from 'react';
import styled from 'styled-components';

import { CoffeeApi } from '../../../api/CoffeeApi';
import editIcon from '../../../resources/svg/edit-icon.svg';
import openIcon from '../../../resources/svg/open-icon.svg';

const ProfileContainer = styled.div``;
const ItalicizeText = styled.span`
  font-style: italic;
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
`;

const ClickableImage = styled.img`
  cursor: pointer;
`;

const CoffeeProfile = (coffee: ICoffeeProfile) => {
  const onClickEditCoffee = async () => {
    // pass this to a dialog of some sort, but for now a PoC
    const result = await CoffeeApi.editCoffee(coffee);
    console.log(result);
  };

  return (
    <ProfileContainer>
      {coffee.url && (
        <a href={coffee.url} target="_blank">
          <h2>{coffee.coffeeName}</h2>
        </a>
      )}
      {!coffee.url && <h2>{coffee.coffeeName}</h2>}
      {/*
          @createIssue Coffee Cup Rating Viewer
          @body Out of score from 1 - 100 fill in an coffee cup so the more full, the better
        */}
      Placeholder could be a coffee colored to match the percentage of (rating /
      5)
      <AdditionalInfoContainer>
        <div>
          <img src="https://via.placeholder.com/150" />
        </div>
        <div>
          <span>
            <ItalicizeText>Roaster</ItalicizeText>{' '}
            <strong>{coffee.roasterName}</strong>
          </span>
          <br />
          {coffee.region && (
            <span>
              <ItalicizeText>Region</ItalicizeText>{' '}
              <strong>{coffee.region}</strong>
            </span>
          )}
          {coffee.notes && <ClickableImage src={openIcon} />}
          {/* Will need to make sure the userId matches the userId on the coffee */}
          <ClickableImage src={editIcon} onClick={onClickEditCoffee} />
        </div>
      </AdditionalInfoContainer>
    </ProfileContainer>
  );
};

export default CoffeeProfile;
