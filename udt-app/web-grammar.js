// copyright: Copyright (c) 2023 Lowell D. Thomas, all rights reserved<br>
//   license: BSD-2-Clause (https://opensource.org/licenses/BSD-2-Clause)<br>
//
// Generated by apg-js, Version 4.3.0 [apg-js](https://github.com/ldthomas/apg-js)
const Grammar = function grammar(){
  // ```
  // SUMMARY
  //      rules = 6
  //       udts = 1
  //    opcodes = 16
  //        ---   ABNF original opcodes
  //        ALT = 0
  //        CAT = 2
  //        REP = 1
  //        RNM = 6
  //        TLS = 3
  //        TBS = 0
  //        TRG = 3
  //        ---   SABNF superset opcodes
  //        UDT = 1
  //        AND = 0
  //        NOT = 0
  // characters = [40 - 57] + user defined
  // ```

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'phone-number', lower: 'phone-number', index: 0, isBkr: false};
  this.rules[1] = {name: 'area-code', lower: 'area-code', index: 1, isBkr: false};
  this.rules[2] = {name: 'subscriber', lower: 'subscriber', index: 2, isBkr: false};
  this.rules[3] = {name: 'gt-2', lower: 'gt-2', index: 3, isBkr: false};
  this.rules[4] = {name: 'not-9', lower: 'not-9', index: 4, isBkr: false};
  this.rules[5] = {name: 'digit', lower: 'digit', index: 5, isBkr: false};

  /* UDTS */
  this.udts = [];
  this.udts[0] = {name: 'u_office', lower: 'u_office', index: 0, empty: false, isBkr: false};

  /* OPCODES */
  /* phone-number */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 2, children: [1,2,3,4,5,6]};// CAT
  this.rules[0].opcodes[1] = {type: 7, string: [40]};// TLS
  this.rules[0].opcodes[2] = {type: 4, index: 1};// RNM(area-code)
  this.rules[0].opcodes[3] = {type: 7, string: [41]};// TLS
  this.rules[0].opcodes[4] = {type: 11, empty: false, index: 0};// UDT(u_office)
  this.rules[0].opcodes[5] = {type: 7, string: [45]};// TLS
  this.rules[0].opcodes[6] = {type: 4, index: 2};// RNM(subscriber)

  /* area-code */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[1].opcodes[1] = {type: 4, index: 3};// RNM(gt-2)
  this.rules[1].opcodes[2] = {type: 4, index: 4};// RNM(not-9)
  this.rules[1].opcodes[3] = {type: 4, index: 5};// RNM(digit)

  /* subscriber */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 3, min: 4, max: 4};// REP
  this.rules[2].opcodes[1] = {type: 4, index: 5};// RNM(digit)

  /* gt-2 */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 5, min: 50, max: 57};// TRG

  /* not-9 */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 5, min: 48, max: 56};// TRG

  /* digit */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 5, min: 48, max: 57};// TRG

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function toString(){
    let str = "";
    str += ";\n";
    str += "; Ref: Wikipedia, North American Numbering Plan\n";
    str += ";\n";
    str += "phone-number = \"(\" area-code \")\" u_office \"-\" subscriber\n";
    str += "area-code = gt-2 not-9 digit\n";
    str += "subscriber = 4digit\n";
    str += "gt-2 = %d50-57\n";
    str += "not-9 = %d48-56\n";
    str += "digit = %d48-57\n";
    return str;
  }
}
