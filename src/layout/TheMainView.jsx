import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from 'config/routes.config';

// route views
import Homepage from 'components/site/Homepage';
import LocalStorageHandler from 'components/global/LocalStorageHandler';
import ComponentDeveloper from 'components/global/ComponentDeveloper';
import TheCardCollectionView from 'layout/TheCardCollectionView';
import TheDeckBuilderView from 'layout/TheDeckBuilderView';

export default function TheMainView() {
  const { HOME, ABOUT, NEWS, STORE, ACCOUNT, COLLECTION, DECKS, PLAY } = ROUTES;

  return (
    <React.Fragment>
      <Switch>
        <Route path={`/dev`} component={ComponentDeveloper} />
        <Route path={DECKS.path} component={TheDeckBuilderView} />
        <Route path={COLLECTION.path} component={TheCardCollectionView} />
        <Route path={HOME.path} component={Homepage} />
      </Switch>
      <LocalStorageHandler />
    </React.Fragment>
  );
}
