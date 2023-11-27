// copyright: Copyright (c) 2023 Lowell D. Thomas, all rights reserved<br>
//   license: BSD-2-Clause (https://opensource.org/licenses/BSD-2-Clause)<br>
//
// Generated by apg-js, Version 4.3.0 [apg-js](https://github.com/ldthomas/apg-js)
export default function grammar(){
  // ```
  // SUMMARY
  //      rules = 7
  //       udts = 0
  //    opcodes = 22
  //        ---   ABNF original opcodes
  //        ALT = 1
  //        CAT = 4
  //        REP = 2
  //        RNM = 8
  //        TLS = 0
  //        TBS = 5
  //        TRG = 2
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 0
  // characters = [10 - 128526]
  // ```

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'start', lower: 'start', index: 0, isBkr: false};
  this.rules[1] = {name: 'statement', lower: 'statement', index: 1, isBkr: false};
  this.rules[2] = {name: 'statement1', lower: 'statement1', index: 2, isBkr: false};
  this.rules[3] = {name: 'statement2', lower: 'statement2', index: 3, isBkr: false};
  this.rules[4] = {name: 'grin', lower: 'grin', index: 4, isBkr: false};
  this.rules[5] = {name: 'cool', lower: 'cool', index: 5, isBkr: false};
  this.rules[6] = {name: 'LF', lower: 'lf', index: 6, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* start */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 2, children: [1,2,3,4]};// CAT
  this.rules[0].opcodes[1] = {type: 4, index: 2};// RNM(statement1)
  this.rules[0].opcodes[2] = {type: 4, index: 6};// RNM(LF)
  this.rules[0].opcodes[3] = {type: 4, index: 3};// RNM(statement2)
  this.rules[0].opcodes[4] = {type: 3, min: 0, max: 1};// REP
  this.rules[0].opcodes[5] = {type: 4, index: 6};// RNM(LF)

  /* statement */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[1].opcodes[1] = {type: 5, min: 33, max: 126};// TRG
  this.rules[1].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[1].opcodes[3] = {type: 5, min: 32, max: 126};// TRG

  /* statement1 */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[2].opcodes[1] = {type: 4, index: 1};// RNM(statement)
  this.rules[2].opcodes[2] = {type: 4, index: 4};// RNM(grin)

  /* statement2 */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[3].opcodes[1] = {type: 4, index: 1};// RNM(statement)
  this.rules[3].opcodes[2] = {type: 4, index: 5};// RNM(cool)

  /* grin */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 6, string: [128513]};// TBS

  /* cool */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 6, string: [128526]};// TBS

  /* LF */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[6].opcodes[1] = {type: 6, string: [10]};// TBS
  this.rules[6].opcodes[2] = {type: 6, string: [13,10]};// TBS
  this.rules[6].opcodes[3] = {type: 6, string: [13]};// TBS

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function toString(){
    let str = "";
    str += ";\n";
    str += "; ABNF with emoticons\n";
    str += ";\n";
    str += "start      = statement1 LF statement2 [LF]\n";
    str += "statement  = %d33-126 *%d32-126\n";
    str += "statement1 = statement grin\n";
    str += "statement2 = statement cool\n";
    str += "grin       = %d128513 ; grinning face\n";
    str += "cool       = %d128526 ; cool shades, sunglasses\n";
    str += "LF         = %d10 / %d13.10 / %d13\n";
    return str;
  }
}
