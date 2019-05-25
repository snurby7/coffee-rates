import { navigate, Router } from '@reach/router';
import * as React from 'react';
import { Component } from 'react';

import { AddCoffeePage, LoginPage } from './pages';

export default class CoffeeRatesIndex extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      userId: '',
    };
  }

  userHasAuthenticated = (userId: string) => {
    this.setState({ userId });
    navigate('/');
  };

  render() {
    return (
      <Router>
        {/* TODO: Ideally this will be a login page if https://github.com/snurby7/coffee-rates/issues/20 is ever done  */}
        <AddCoffeePage path="/" userId={this.state.userId} />
        <LoginPage path="/login" onAuthentication={this.userHasAuthenticated} />
      </Router>
    );
  }
}
