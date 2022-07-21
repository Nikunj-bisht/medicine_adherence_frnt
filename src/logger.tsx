import { logger } from "react-native-logs";
const log = logger.createLogger();
function loggerInfo(data) {
  log.info(data);
}
function loggerDebug(data) {
  log.debug(data);
}
function loggerError(data) {
  log.error(data);
}
function loggerWarn(data) {
  log.warn(data);
}
const Logger = {
  loggerDebug,
  loggerError,
  loggerInfo,
  loggerWarn,
};
export default Logger;











