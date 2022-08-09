import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from './reminder'

describe('Add events', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< Reminder navigation={undefined} route={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});