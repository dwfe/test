import {Throw} from '../../index';

describe('false.Matcher', () => {

  test('.False()', () => {
    expect(false).False();
    expect(!1).False();
    expect(Boolean('')).False();
    expect(1 && false).False();
  });

  test('.not.False throw err', () => {
    Throw(
      () => expect(true).not.False(),
      'instead of "not.False()" use ".True()"'
    );
  })

});
