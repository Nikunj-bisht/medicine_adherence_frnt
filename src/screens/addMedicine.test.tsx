import React from 'react';
import renderer from 'react-test-renderer';
import Addmedicine from './addMedicine';

describe('Add medicine screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addmedicine navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});