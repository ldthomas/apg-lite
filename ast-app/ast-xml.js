import { Parser, Ast, utilities as utils, identifiers as id } from '../lib/parser.js';
import { default as Grammar } from './ast-xml-grammar.js';

const description = `
Demonstration of transforming the Abstract Syntax Tree (AST) 
to an XML representation.

Some characters are not valid XML characters and the special characters
&<>"' are converted to their respective XML entities.
`;

const THIS_FILENAME = 'ast-app/ast-xml.js';
/* the AST callback functions */
// function semFile(state, chars, phraseIndex, phraseCount, data) {
const cb = (state, chars, phraseIndex, phraseCount, data) => {
  // place holder just to put the phrase on the AST
};

console.log(description);

/* make a parser from the grammar object */
const grammar = new Grammar();
const parser = new Parser(grammar);

/* attach the AST to th eparser */
parser.ast = new Ast();

/* attach the callback functions to the AST */
parser.ast.callbacks.entities = cb;
parser.ast.callbacks.xml = cb;
parser.ast.callbacks['non-xml'] = cb;

let input = '';
input += 'smileys';
input += ' \u{1F61C}\u{1F60E}\u{1F913}';
input += ' entities &<>"\'';
input += ' baddies \x00\x1F\uFFFF';
const result = parser.parse(grammar, 'text', input);
if (!result.success) {
  console.log('parse failed');
  process.exit(1);
}

console.log('\nTRANSLATE THE AST TO XML');
console.log(parser.ast.toXml());
