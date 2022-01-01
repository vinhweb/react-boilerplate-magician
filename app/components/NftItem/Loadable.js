/**
 *
 * Asynchronously loads the component for NftItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
