import {MatcherState, SyncExpectationResult} from 'expect/build/types';
import {expect} from '@jest/globals';
import {noop} from '../noop';

declare global {
  namespace jest {
    interface AsymmetricMatchers {
      eq(expected: any): void;
    }

    interface Matchers<R> {
      eq(expected: any): R;
    }
  }
}

/**
 * Usage:
 *   expect(a).not.eq(b); // AsymmetricMatcher
 *   expect(x).eq(z);
 */
export const eqMatcher = function (this: MatcherState, received: any, expected: any): SyncExpectationResult {
  if (this.isNot) {
    expect(received).not.toBe(expected);
  } else {
    expect(received).toBe(expected);
  }
  // This point is reached when the above assertion was successful.
  // The test should therefore always pass, that means it needs to be
  // `true` when used normally, and `false` when `.not` was used.
  return {pass: !this.isNot, message: noop};
}

expect.extend({
  eq: eqMatcher
});

