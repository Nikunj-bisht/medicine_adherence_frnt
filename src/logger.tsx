import { logger } from "react-native-logs";
const log = logger.createLogger();
function loggerInfo(data) {
  log.info(data);
}
function loggerError(data) {
  log.error(data);
}

const Logger = {
  loggerError,
  loggerInfo,
};
export default Logger;











