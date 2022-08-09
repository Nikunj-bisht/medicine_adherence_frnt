import React from 'react';
import renderer from 'react-test-renderer';
import rootsaga from '../../src/redux/sagas/rootSaga';

describe('Caretaker Request', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<rootsaga/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});