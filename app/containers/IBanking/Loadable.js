/**
 *
 * Asynchronously loads the component for IBanking
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
