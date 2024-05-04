#!/bin/bash
p=uri-app/web-uri-parser.js
out=uri-app/web-uri-min-parser.js
terser $p --compress --mangle -o $out
p=lib/web-parser.js
b=basic
g=$b-app/web-grammar.js
a=$b-app/web-app.js
out=$b-app/web-min.js
terser $p $g $a --compress --mangle -o $out
b=cool
g=$b-app/web-grammar.js
a=$b-app/web-app.js
out=$b-app/web-min.js
terser $p $g $a --compress --mangle -o $out
b=trace
g=$b-app/web-grammar.js
a=$b-app/web-app.js
out=$b-app/web-min.js
terser $p $g $a --compress --mangle -o $out
b=udt
g=$b-app/web-grammar.js
a=$b-app/web-app.js
out=$b-app/web-min.js
terser $p $g $a --compress --mangle -o $out
