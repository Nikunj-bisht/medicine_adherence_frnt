
import React from 'react';
import renderer from 'react-test-renderer';
import TodayPerformance from '../../../src/screens/adherence/components/todayPerformance';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     Name:"muskan",
     Description:"xyz",
    }
  }),
}));
jest.mock("react-native-sqlite-storage", () => ({
  default: jest.fn(),
}));

describe('Todays performnce ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TodayPerformance route={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});