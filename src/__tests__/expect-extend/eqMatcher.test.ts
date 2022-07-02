import {traversEachWithEachAllJSDataTypes} from '../../index';

describe('eq.Matcher', () => {

  test('.isEqual(a, b)', () => {

    traversEachWithEachAllJSDataTypes((a, b) => {

      if (Object.is(a, b)) {
        expect(a).eq(b);
      } else {
        expect(a).not.eq(b);
      }

    });

  });

});
