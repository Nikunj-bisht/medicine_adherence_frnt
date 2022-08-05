import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../../../src/screens/profile/profile';

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
// jest.mock("/@react-navigation/core/lib/commonjs/useFocusEffect", () => ({
//   default: jest.fn(),
// }));
// jest.mock("react-native-sqlite-storage", () => ({
//   default: jest.fn(),
// }));

describe('Profile Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< Profile navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

