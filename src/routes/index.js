import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Services from '../pages/Services';
import Products from '../pages/Products';
import SignUp from '../pages/SignUp';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/services" component={Services} />
      <Route path="/products" component={Products} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
}

export default Routes;
