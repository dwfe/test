import {traversEachWithEachAllJSDataTypes} from '../../index';

describe('eq.Matcher', () => {

  test('check(a, b)', () => {

    traversEachWithEachAllJSDataTypes((a, b) => {

      if (Object.is(a, b)) {
        expect(a).eq(b);
      } else {
        expect(a).not.eq(b);
      }

    });

  });

});
