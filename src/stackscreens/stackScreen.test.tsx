import React from 'react';
import renderer from 'react-test-renderer';
import Stackscreen from './stackScreen';

jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));
jest.mock("react-native", () => ({
    default: jest.fn(),
  }));
  jest.mock("@react-navigation/stack", () => ({
    default: jest.fn(),
  }));
  jest.mock("react-native-progress-circle", () => ({
    default: jest.fn(),
  }));
  jest.mock("@react-native-picker/picker/dist/commonjs", () => ({
    default: jest.fn(),
  }));
  jest.mock("react-native-elements/dist/config", () => ({
    default: jest.fn(),
  }));
  jest.mock("react-native-size-matters", () => ({
    default: jest.fn(),
  }));
  jest.mock("react-native-elements/dist", () => ({
    default: jest.fn(),
  }));
jest.mock("react-native-svg/lib/commonjs", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-progress", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-gesture-handler", () => ({
      default: jest.fn(),
    }));
jest.mock("rn-fetch-blob", () => ({
        default: jest.fn(),
      }));
jest.mock("lottie-react-native/lib", () => ({
    default: jest.fn(),
}))
jest.mock("react-native-paper/lib/commonjs", () => ({
    default: jest.fn(),
}))
jest.mock("react-native-paper/lib/commonjs", () => ({
    default: jest.fn(),
}))
jest.mock("react-native-animatable", () => ({
    default: jest.fn(),
}))
jest.mock("@fortawesome/react-native-fontawesome", () => ({
    default: jest.fn(),
}))
describe('Stack Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< Stackscreen  />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});