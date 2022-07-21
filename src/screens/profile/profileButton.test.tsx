import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
 
import Profile from './profile';
 
afterEach(cleanup);
 
describe('Profile', () => {
  
  it('should find the button via testId', () => {
    const testIdName = 'savebutton';
 
    const {getByTestId} = render(<Profile navigation={undefined}/>);
 
    const foundButton = getByTestId(testIdName);
 
    expect(foundButton).toBeTruthy();
  });
});