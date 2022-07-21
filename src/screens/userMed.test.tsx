import React from 'react';
import renderer from 'react-test-renderer';
import UserMed from './userMed';

describe('User Med Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< UserMed navigation={undefined} route={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});