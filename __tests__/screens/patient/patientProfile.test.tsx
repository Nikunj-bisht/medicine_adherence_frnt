import React from 'react';
import renderer from 'react-test-renderer';
import ViewProfile from '../../../src/screens/patient/components/patientProfile';

jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));

jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
    useFocusEffect: jest.fn(),
  }));
  jest.mock('@react-navigation/native', () => ({
    //...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ goBack: jest.fn() }),
    useRoute: () => ({
      params: {
      medName:"medName",
      }
    }),
  }));

describe('Saved Details', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ViewProfile navigation={undefined}  />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});