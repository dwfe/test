import {Throw} from '../../index';

describe('true.Matcher', () => {

  test('.True()', () => {
    expect(true).True();
    expect(!!1).True();
    expect(Boolean('some')).True();
    expect(1 && true).True();
  });

  test('.not.True throw err', () => {
    Throw(
      () => expect(true).not.True(),
      'instead of "not.True()" use ".False()"'
    );
  })

});
