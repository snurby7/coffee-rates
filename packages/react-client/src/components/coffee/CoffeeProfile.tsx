import { ICoffeeProfile } from 'cr-common';
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div``;
const ItalicizeText = styled.span`
  font-style: italic;
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
`;

const CoffeeProfile = (coffee: ICoffeeProfile) => {
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
      Placeholder could be a coffee colored to match the percentage of (rating / 5)
      <AdditionalInfoContainer>
        <div>
          <img src="https://via.placeholder.com/150" />
        </div>
        <div>
          <span>
            <ItalicizeText>Roaster</ItalicizeText> <strong>{coffee.roasterName}</strong>
          </span>
          <br />
          {coffee.region && (
            <span>
              <ItalicizeText>Region</ItalicizeText> <strong>{coffee.region}</strong>
            </span>
          )}
          {coffee.notes && (
            <button
              onClick={() => {
                // this is bad for performance
                window.alert(coffee.notes);
              }}
            >
              More Information
            </button>
          )}
        </div>
      </AdditionalInfoContainer>
    </ProfileContainer>
  );
};

export default CoffeeProfile;
