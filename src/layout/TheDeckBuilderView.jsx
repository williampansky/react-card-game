import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTES from 'config/routes.config';

import DeckBuilder from 'components/collection/DeckBuilderV2';
import Decks from 'components/collection/Decks';
import Header from 'features/header/Header';

export default function TheDeckBuilderView() {
  const decks = useSelector(s => s.decks);
  let { deckId } = useParams();
  const {
    DECKS,
    DECKS: { meta }
  } = ROUTES;

  return (
    <React.Fragment>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Header />

      <Switch>
        <Route path={`/decks/:deckId`} component={DeckBuilder} />
        <Route path={DECKS.path} component={Decks} />
      </Switch>
    </React.Fragment>
  );
}
