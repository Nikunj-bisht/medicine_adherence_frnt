import React from 'react';
import renderer from 'react-test-renderer';
import Login from './googleOauth';

describe('Google Auth', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});