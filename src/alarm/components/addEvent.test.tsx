import React from 'react';
import renderer from 'react-test-renderer';
import Addevent from './addEvents'

describe('Add events', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< Addevent/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});