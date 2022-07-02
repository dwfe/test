import {MatcherState, SyncExpectationResult} from 'expect/build/types'
import {expect} from '@jest/globals'
import {noop} from '../noop'

declare global {
  namespace jest {
    interface Matchers<R> {
      'False': () => R;
    }
  }
}

/**
 * Usage:
 *   expect(value).False();
 */
export const falseMatcher = function (this: MatcherState, received: any): SyncExpectationResult {
  if (this.isNot) {
    throw new Error('instead of "not.False()" use ".True()"');
  } else {
    expect(received).toBe(false);
  }
  return {pass: true, message: noop};
}

expect.extend({
  'False': falseMatcher
});
