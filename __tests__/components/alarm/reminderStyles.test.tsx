import React from 'react';
import renderer from 'react-test-renderer';
import Styles from '../../../src/alarm/alarmStyles/reminderStyles';

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));
// jest.mock("@react-native-async-storage/async-storage", () => ({
//     default: jest.fn(),
//   }));

describe('Caretaker Request', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Styles/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});