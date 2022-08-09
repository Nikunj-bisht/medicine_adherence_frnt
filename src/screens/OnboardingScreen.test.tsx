import React from 'react';
import renderer from 'react-test-renderer';
import OnboardingScreen from './OnboardingScreen';

// jest.mock('@react-navigation', () => ({
// }))
describe('Home Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< OnboardingScreen navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});