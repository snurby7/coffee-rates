import { ICoffeeProfile } from 'cr-common';
import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import { CoffeeApi } from '../../api/CoffeeApi';
import { WindowUtility } from '../../util';
import AddCoffeeForm from './AddCoffeeForm';

describe('AddCoffeeForm', () => {
  afterEach(cleanup);

  it('should click the Submit button and hit the CoffeeApi', () => {
    let spyCoffeeProfile: ICoffeeProfile = {} as ICoffeeProfile;
    jest.spyOn(CoffeeApi, 'addCoffee').mockImplementation((coffeeProfile: ICoffeeProfile) => {
      spyCoffeeProfile = coffeeProfile;
      return Promise.resolve({});
    });
    jest.spyOn(WindowUtility, 'showAlert').mockImplementation(message => message);
    const { getByText } = render(<AddCoffeeForm userId={'test-user-id'} />);

    expect(getByText(/Submit/i)).toBeTruthy();
    fireEvent.click(getByText(/Submit/i));

    expect(getByText(/Submit/i)).toBeTruthy();
    expect(spyCoffeeProfile.userId).toBe('test-user-id');
  });
});
