import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Global } from '@emotion/core';

import { AppWrapper, global } from '../css/main';
import Navigation from './Navigation';

const App = ({ route }) => (
  <AppWrapper>
    <Global
      styles={global}
    />
    <Navigation />
    <Switch>
      {renderRoutes(route.routes)}
    </Switch>
  </AppWrapper>
);

export default App;
