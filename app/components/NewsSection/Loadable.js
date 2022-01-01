/**
 *
 * Asynchronously loads the component for NewsSection
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
