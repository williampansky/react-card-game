import React from 'react';
import { Switch, Route } from 'react-router-dom';

// route views
import CardCollection from 'components/collection/CardCollection';

export default function TheCardCollectionView() {
  return (
    <React.Fragment>
      <Switch>
        <Route path={`/`} component={CardCollection} />
      </Switch>
    </React.Fragment>
  );
}
