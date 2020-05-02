import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import ROUTES from 'config/routes.config';

// route views
// import TheCardCollectionView from 'layout/TheCardCollectionView';
// import TheDeckBuilderView from './TheDeckBuilderView';

export default function Homepage() {
  const {
    HOME: { meta }
  } = ROUTES;

  return (
    <React.Fragment>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div style={{ marginTop: 80 }}>Homepage</div>
    </React.Fragment>
  );
}
