import {MatcherState, SyncExpectationResult} from 'expect/build/types';
import {expect} from '@jest/globals';
import {noop} from '../noop';

declare global {
  namespace jest {
    interface Matchers<R> {
      'True': () => R;
    }
  }
}

/**
 * Usage:
 *   expect(value).True();
 */
export const trueMatcher = function (this: MatcherState, received: any): SyncExpectationResult {
  if (this.isNot) {
    throw new Error('instead of "not.True()" use ".False()"');
  } else {
    expect(received).toBe(true);
  }
  return {pass: true, message: noop};
}

expect.extend({
  'True': trueMatcher
});
