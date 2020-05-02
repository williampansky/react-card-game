import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import ROUTES from 'config/routes.config';

// route views
import LocalStorageHandler from 'components/global/LocalStorageHandler';
import Homepage from 'components/site/Homepage';
import Header from 'features/header/Header';
import TheCardCollectionView from 'layout/TheCardCollectionView';
// import TheDeckBuilderView from './TheDeckBuilderView';

export default function TheMainView() {
  const { HOME, ABOUT, NEWS, STORE, ACCOUNT, COLLECTION, DECKS, PLAY } = ROUTES;

  return (
    <React.Fragment>
      <Header />

      <Switch>
        {/* <Route path={`/decks`} component={TheDeckBuilderView} /> */}
        <Route path={COLLECTION.path} component={TheCardCollectionView} />
        <Route path={HOME.path} component={Homepage} />
      </Switch>

      <LocalStorageHandler />
    </React.Fragment>
  );
}
