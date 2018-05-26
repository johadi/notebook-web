// This file is only used for production
import fse from 'fs-extra';
import colors from 'colors';

import logger from '../server/helpers/logger';

const source = './client/src/build';
const target = './dist';
fse.copy(source, target)
  .then(() => logger.info('index.html written to /dist'.green))
  .catch(err => logger.error(err));
