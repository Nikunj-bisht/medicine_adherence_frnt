import React from 'react';
import renderer from 'react-test-renderer';
import Allreminderdata from '../../../src/components/adherence/allreminderdata';

jest.mock("@react-native-async-storage/async-storage", () => ({
    default: jest.fn(),
  }));

  jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
  }));

describe('Search Caretaker', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Allreminderdata navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});