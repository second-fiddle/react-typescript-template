import admin from 'firebase-admin';
import { forEach } from 'lodash';
import isDevelopment from './utils/env';

admin.initializeApp();

const functionMap = {};
const devFunctionMap = {
  colonies: './services/symphony/functions/develop/colonies',
};

const loadFunctions = (fnMap: typeof functionMap) => {
  forEach(fnMap, (path, functionName) => {
    if (
      !process.env.FUNCTION_TARGET ||
      process.env.FUNCTION_TARGET === functionName
    ) {
      module.exports[functionName] = require(path); // eslint-disable-line
    }
  });
};
const fnMap = isDevelopment()
  ? { ...functionMap, ...devFunctionMap }
  : functionMap;
loadFunctions(fnMap);
