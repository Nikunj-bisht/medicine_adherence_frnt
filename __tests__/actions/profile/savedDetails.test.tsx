import React from 'react';
import renderer from 'react-test-renderer';
import SavedDetails from '../../../src/screens/profile/savedDetails';

describe('Saved Details', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SavedDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});