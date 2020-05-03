import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTES from 'config/routes.config';

// route views
import DeckBuilder from 'components/collection/DeckBuilderV2';
import Decks from 'components/collection/Decks';

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

      <Switch>
        <Route path={DECKS.path} component={Decks} />
        <Route path={`/decks/:deckId`} component={DeckBuilder} />
      </Switch>
    </React.Fragment>
  );
}
