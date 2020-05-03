import React from 'react';
import styled from 'styled-components';
import DeckSlot from 'features/decks/DeckSlot';

export default function ComponentDeveloper() {
  return (
    <Wrapper>
      <div>
        <DeckSlot />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  & > div {
    width: 33.333%;
  }
`;
