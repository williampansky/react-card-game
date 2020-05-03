import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import ROUTES from 'config/routes.config';

// route views
import CardCollection from 'components/collection/CardCollection';

export default function TheCardCollectionView() {
  const {
    COLLECTION: { meta }
  } = ROUTES;

  return (
    <React.Fragment>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Switch>
        <Route path={`/`} component={CardCollection} />
      </Switch>
    </React.Fragment>
  );
}
