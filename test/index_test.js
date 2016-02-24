'use strict';

/**
 * Module dependencies.
 */

const esc = require('../src');

/**
 * Teste `url-escape-tag`.
 */

describe('url-escape-tag', () => {
  it('should escape template literal substitutions', () => {
    const foo = '../foo';
    const bar = '+bar';
    const biz = '=biz';

    esc`/${foo}?${bar}=${biz}`.should.equal('/..%2Ffoo?%2Bbar=%3Dbiz');
  });
});
