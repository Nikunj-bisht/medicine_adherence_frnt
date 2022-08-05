import React from 'react';
import renderer from 'react-test-renderer';
import Mypatient from '../../../src/screens/patient/components/myPatients';

jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));

jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
    useFocusEffect: jest.fn(),
  }));

describe('Saved Details', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< Mypatient navigation={undefined}  />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});