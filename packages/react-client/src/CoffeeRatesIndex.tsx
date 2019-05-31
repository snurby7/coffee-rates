import { Router } from '@reach/router';
import React, { Component } from 'react';

import { AddCoffeePage, LoginPage, StagingArea } from './pages';

export default class CoffeeRatesIndex extends Component {
  render() {
    return (
      <Router>
        {/* TODO: Ideally this will be a login page if https://github.com/snurby7/coffee-rates/issues/20 is ever done  */}
        <AddCoffeePage path='/' />
        <LoginPage path='/login' />
        <StagingArea path='/staging' />
      </Router>
    );
  }
}
