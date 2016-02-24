'use strict';

/**
 * Module dependencies.
 */

const esc = require('querystring').escape;

/**
 * Export `url-escape-tag`.
 */

module.exports = function escape(pieces) {
  const length = arguments.length;
  const substitutions = Array(length > 1 ? length - 1 : 0);
  let result = pieces[0];

  for (let key = 1; key < length; key++) {
    substitutions[key - 1] = arguments[key];
  }

  for (let i = 0; i < substitutions.length; i++) {
    result += esc(substitutions[i]) + pieces[i + 1];
  }

  return result;
};
