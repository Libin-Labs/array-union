import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('unions two arrays', () => {
  assert.deepEqual(api.arrayUnion([1, 2], [2, 3]), [1, 2, 3]);
});
test('preserves first-seen order', () => {
  assert.deepEqual(api.arrayUnion([3, 1], [2, 3]), [3, 1, 2]);
});
test('supports no arrays', () => {
  assert.deepEqual(api.arrayUnion(), []);
});
test('supports empty arrays', () => {
  assert.deepEqual(api.arrayUnion([], []), []);
});
test('deduplicates NaN', () => {
  assert.equal(api.arrayUnion([NaN], [NaN]).length, 1);
});
test('rejects non-array argument', () => {
  assert.throws(() => api.arrayUnion([1], 2), TypeError);
});
