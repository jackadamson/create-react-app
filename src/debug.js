/* eslint-disable no-console */
import * as R from 'ramda';

/*
Has all the same methods as `console` except replaced with no-ops in production build
 */

const debug = R.mapObjIndexed(
  (f) => (process.env.NODE_ENV === 'development' ? f : () => {}),
  console,
);

export default debug;
