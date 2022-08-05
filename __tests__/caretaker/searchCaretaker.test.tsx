import React from 'react';
import renderer from 'react-test-renderer';
import Searchcaretaker from '../../src/screens/caretaker/components/searchCaretaker';

jest.mock("@react-native-async-storage/async-storage", () => ({
    default: jest.fn(),
  }));

  jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
  }));

describe('Search Caretaker', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Searchcaretaker navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});