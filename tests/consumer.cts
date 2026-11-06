import * as api from '@lp-labs/array-union';
import { arrayUnion } from '@lp-labs/array-union';
console.log(arrayUnion([1, 2], [2, 3]));
// @ts-expect-error invalid argument must be rejected by declarations
api.arrayUnion('items');
