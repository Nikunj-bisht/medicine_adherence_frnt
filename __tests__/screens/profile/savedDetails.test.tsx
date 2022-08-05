import React from 'react';
import renderer from 'react-test-renderer';
import SavedDetails from '../../../src/screens/profile/savedDetails';

jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));

jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
    //...jest.requireActual("@react-navigation/native"),
    useFocusEffect: jest.fn(),
  }));

describe('Saved Details', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< SavedDetails  />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
