import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from '../../src/alarm/components/reminder';

jest.mock("react-native-gesture-handler", () => ({
  default: jest.fn(),
}));

describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Reminder navigation={undefined} route={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});