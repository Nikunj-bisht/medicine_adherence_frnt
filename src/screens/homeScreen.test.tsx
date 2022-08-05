import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './homeScreen';

jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));

jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
// jest.mock("/@react-navigation/core/lib/commonjs/useFocusEffect", () => ({
//   default: jest.fn(),
// }));
// jest.mock("react-native-sqlite-storage", () => ({
//   default: jest.fn(),
// }));

describe('Home Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< HomeScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});