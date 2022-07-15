import { logger } from 'react-native-logs';
import axios from './axios';
const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};
var log = logger.createLogger(defaultConfig);
async function fetchpatientdetail(payload) {
  log.info('payload', payload);
  const response = await axios.get(`/api/v1/user?userId=${payload}`);
  log.info(response + ' Saga ');
  return response.data;
}

export default fetchpatientdetail;