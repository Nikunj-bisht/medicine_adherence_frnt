import React from 'react';
import renderer from 'react-test-renderer';
import Addmedicine from './addMedicine';

jest.mock("@react-navigation/native", () => ({
    // ...jest.requireActual("@react-navigation/native"),
    useFocusEffect: jest.fn(),
  }));

describe('Add Medicine Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< Addmedicine navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});