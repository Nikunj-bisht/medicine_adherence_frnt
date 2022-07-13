import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';

describe('Home Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
