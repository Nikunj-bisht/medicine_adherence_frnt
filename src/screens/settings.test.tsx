import React from 'react';
import renderer from 'react-test-renderer';
import Settings from './settings';

describe('Home Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< Settings navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});