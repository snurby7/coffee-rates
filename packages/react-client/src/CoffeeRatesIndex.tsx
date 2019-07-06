import { Router } from '@reach/router';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { AddCoffeePage, LoginPage, StagingArea } from './pages';
import { CoffeeTheme } from './theme';

export default class CoffeeRatesIndex extends Component {
  render() {
    return (
      <ThemeProvider theme={CoffeeTheme}>
        <Router>
          {/* TODO: Ideally this will be a login page if https://github.com/snurby7/coffee-rates/issues/20 is ever done  */}
          <AddCoffeePage path="/" />
          <LoginPage path="/login" />
          <StagingArea path="/staging" />
        </Router>
      </ThemeProvider>
    );
  }
}
