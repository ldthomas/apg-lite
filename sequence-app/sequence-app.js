import { default as Grammar } from './node-grammar.js';
import { Parser, utilities as utils, identifiers as id } from '../lib/parser.js';

const grammar = new Grammar();
const parser = new Parser();
let input;
let result;
let str;
let beg;
parser.callbacks.a = (sys, chars, phraseIndex, data) => {
  if (sys.state === id.MATCH) {
    let str = utils.charsToString(chars, phraseIndex, sys.phraseLength);
    console.log(`rule a: ${str}`);
  }
};
parser.callbacks.b = (sys, chars, phraseIndex, data) => {
  if (sys.state === id.MATCH) {
    let str = utils.charsToString(chars, phraseIndex, sys.phraseLength);
    console.log(`rule b: ${str}`);
  }
};
parser.callbacks.c = (sys, chars, phraseIndex, data) => {
  if (sys.state === id.MATCH) {
    str = utils.charsToString(chars, phraseIndex, sys.phraseLength);
    console.log(`rule c: ${str}`);
  }
};

// parse the full string
input = utils.stringToChars('((()())){{{{}{}{}}}}[]');
result = parser.parse(grammar, 's', input, {});
console.log('parse full string from start rule');
console.dir(result);

// parse  a b c sequentially
console.log('\n\nparse a b c sequentially');
beg = 0;
result = parser.parse(grammar, 'a', input, {}, beg);
if (result.state != id.MATCH) {
  console.log('parse a failed');
  console.log(JSON.stringify(result));
  process.exit(1);
}
str = utils.charsToString(input, beg, result.matched);
console.log('a string');
console.log(str);
console.log(JSON.stringify(result));
console.log();
beg += result.matched;
result = parser.parse(grammar, 'b', input, {}, beg);
if (result.state != id.MATCH) {
  console.log('parse b failed');
  console.log(JSON.stringify(result));
  process.exit(1);
}
str = utils.charsToString(input, beg, result.matched);
console.log('b string');
console.log(str);
console.log(JSON.stringify(result));
console.log();
beg += result.matched;
result = parser.parse(grammar, 'c', input, {}, beg);
if (result.state != id.MATCH) {
  console.log('parse c failed');
  console.log(JSON.stringify(result));
  process.exit(1);
}
str = utils.charsToString(input, beg, result.matched);
console.log('c string');
console.log(str);
console.log(JSON.stringify(result));
