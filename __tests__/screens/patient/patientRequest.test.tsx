import React from 'react';
import renderer from 'react-test-renderer';
import Patientrequest from '../../../src/screens/patient/components/patientRequest';

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
      .create(<Patientrequest />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
