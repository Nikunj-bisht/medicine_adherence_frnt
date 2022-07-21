import React from 'react';
import renderer from 'react-test-renderer';
import Loginscreen from './loginScreen';

describe('Login Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Loginscreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});