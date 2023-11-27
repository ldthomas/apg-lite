import { Parser, Trace, identifiers as id, utilities as utils } from '../lib/parser.js';
import { default as Grammar } from './anbncn-lite.js';

// set up the parser
const obj = new Grammar();
const parser = new Parser();
parser.trace = new Trace();

test('test for AND and NOT operators', () => {
  const result = parser.parse(obj, 'S', 'aaabbbccc');
  expect(result.success).toBe(true);
  const str = parser.trace.displayTrace();
  expect(/\|E\|\[AND\]''/.test(str)).toBe(true);
  expect(/\|E\|\[NOT\]''/.test(str)).toBe(true);
});
