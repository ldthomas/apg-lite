#!/bin/bash
name=ast
g=$name-app/grammar.txt
n=$name-app/node-grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$n --lite
name=basic
g=$name-app/grammar.txt
n=$name-app/node-grammar
w=$name-app/web-grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$n --lite
node_modules/apg-js/bin/apg.sh --in=$g --out=$w --name=Grammar
name=cool
g=$name-app/grammar.txt
n=$name-app/node-grammar
w=$name-app/web-grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$n --lite
node_modules/apg-js/bin/apg.sh --in=$g --out=$w --name=Grammar
name=trace
g=$name-app/grammar.txt
n=$name-app/node-grammar
w=$name-app/web-grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$n --lite
node_modules/apg-js/bin/apg.sh --in=$g --out=$w --name=Grammar
name=udt
g=$name-app/grammar.txt
n=$name-app/node-grammar
w=$name-app/web-grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$n --lite
node_modules/apg-js/bin/apg.sh --in=$g --out=$w --name=Grammar
name=uri
g=$name-app/grammar.txt
w=$name-app/grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$w --name=UriGrammar
name=lookahead
g=$name-app/negative-grammar.txt
w=$name-app/negative-grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$w --lite
g=$name-app/positive-grammar.txt
w=$name-app/positive-grammar
node_modules/apg-js/bin/apg.sh --in=$g --out=$w --lite

