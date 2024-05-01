// copyright: Copyright (c) 2024 Lowell D. Thomas, all rights reserved<br>
//   license: BSD-2-Clause (https://opensource.org/licenses/BSD-2-Clause)<br>
//
// Generated by apg-js, Version 4.4.0 [apg-js](https://github.com/ldthomas/apg-js)
const UriGrammar = function grammar(){
  // ```
  // SUMMARY
  //      rules = 36
  //       udts = 0
  //    opcodes = 217
  //        ---   ABNF original opcodes
  //        ALT = 14
  //        CAT = 30
  //        REP = 30
  //        RNM = 59
  //        TLS = 17
  //        TBS = 37
  //        TRG = 27
  //        ---   SABNF superset opcodes
  //        UDT = 0
  //        AND = 0
  //        NOT = 3
  // characters = [10 - 126]
  // ```
  /* OBJECT IDENTIFIER (for internal parser use) */
  this.grammarObject = 'grammarObject';

  /* RULES */
  this.rules = [];
  this.rules[0] = {name: 'URI', lower: 'uri', index: 0, isBkr: false};
  this.rules[1] = {name: 'hier-part', lower: 'hier-part', index: 1, isBkr: false};
  this.rules[2] = {name: 'scheme', lower: 'scheme', index: 2, isBkr: false};
  this.rules[3] = {name: 'authority', lower: 'authority', index: 3, isBkr: false};
  this.rules[4] = {name: 'path-abempty', lower: 'path-abempty', index: 4, isBkr: false};
  this.rules[5] = {name: 'path-absolute', lower: 'path-absolute', index: 5, isBkr: false};
  this.rules[6] = {name: 'path-rootless', lower: 'path-rootless', index: 6, isBkr: false};
  this.rules[7] = {name: 'path-empty', lower: 'path-empty', index: 7, isBkr: false};
  this.rules[8] = {name: 'userinfo-at', lower: 'userinfo-at', index: 8, isBkr: false};
  this.rules[9] = {name: 'userinfo', lower: 'userinfo', index: 9, isBkr: false};
  this.rules[10] = {name: 'host', lower: 'host', index: 10, isBkr: false};
  this.rules[11] = {name: 'IP-literal', lower: 'ip-literal', index: 11, isBkr: false};
  this.rules[12] = {name: 'IPvFuture', lower: 'ipvfuture', index: 12, isBkr: false};
  this.rules[13] = {name: 'IPv6address', lower: 'ipv6address', index: 13, isBkr: false};
  this.rules[14] = {name: 'nodcolon', lower: 'nodcolon', index: 14, isBkr: false};
  this.rules[15] = {name: 'dcolon', lower: 'dcolon', index: 15, isBkr: false};
  this.rules[16] = {name: 'h16', lower: 'h16', index: 16, isBkr: false};
  this.rules[17] = {name: 'h16c', lower: 'h16c', index: 17, isBkr: false};
  this.rules[18] = {name: 'h16n', lower: 'h16n', index: 18, isBkr: false};
  this.rules[19] = {name: 'h16cn', lower: 'h16cn', index: 19, isBkr: false};
  this.rules[20] = {name: 'IPv4address', lower: 'ipv4address', index: 20, isBkr: false};
  this.rules[21] = {name: 'dec-octet', lower: 'dec-octet', index: 21, isBkr: false};
  this.rules[22] = {name: 'dec-digit', lower: 'dec-digit', index: 22, isBkr: false};
  this.rules[23] = {name: 'reg-name', lower: 'reg-name', index: 23, isBkr: false};
  this.rules[24] = {name: 'reg-name-char', lower: 'reg-name-char', index: 24, isBkr: false};
  this.rules[25] = {name: 'port', lower: 'port', index: 25, isBkr: false};
  this.rules[26] = {name: 'query', lower: 'query', index: 26, isBkr: false};
  this.rules[27] = {name: 'fragment', lower: 'fragment', index: 27, isBkr: false};
  this.rules[28] = {name: 'segment', lower: 'segment', index: 28, isBkr: false};
  this.rules[29] = {name: 'segment-nz', lower: 'segment-nz', index: 29, isBkr: false};
  this.rules[30] = {name: 'pchar', lower: 'pchar', index: 30, isBkr: false};
  this.rules[31] = {name: 'pct-encoded', lower: 'pct-encoded', index: 31, isBkr: false};
  this.rules[32] = {name: 'ALPHA', lower: 'alpha', index: 32, isBkr: false};
  this.rules[33] = {name: 'LF', lower: 'lf', index: 33, isBkr: false};
  this.rules[34] = {name: 'DIGIT', lower: 'digit', index: 34, isBkr: false};
  this.rules[35] = {name: 'HEXDIG', lower: 'hexdig', index: 35, isBkr: false};

  /* UDTS */
  this.udts = [];

  /* OPCODES */
  /* URI */
  this.rules[0].opcodes = [];
  this.rules[0].opcodes[0] = {type: 2, children: [1,2,3,4,8]};// CAT
  this.rules[0].opcodes[1] = {type: 4, index: 2};// RNM(scheme)
  this.rules[0].opcodes[2] = {type: 7, string: [58]};// TLS
  this.rules[0].opcodes[3] = {type: 4, index: 1};// RNM(hier-part)
  this.rules[0].opcodes[4] = {type: 3, min: 0, max: 1};// REP
  this.rules[0].opcodes[5] = {type: 2, children: [6,7]};// CAT
  this.rules[0].opcodes[6] = {type: 7, string: [63]};// TLS
  this.rules[0].opcodes[7] = {type: 4, index: 26};// RNM(query)
  this.rules[0].opcodes[8] = {type: 3, min: 0, max: 1};// REP
  this.rules[0].opcodes[9] = {type: 2, children: [10,11]};// CAT
  this.rules[0].opcodes[10] = {type: 7, string: [35]};// TLS
  this.rules[0].opcodes[11] = {type: 4, index: 27};// RNM(fragment)

  /* hier-part */
  this.rules[1].opcodes = [];
  this.rules[1].opcodes[0] = {type: 1, children: [1,5,6,7]};// ALT
  this.rules[1].opcodes[1] = {type: 2, children: [2,3,4]};// CAT
  this.rules[1].opcodes[2] = {type: 7, string: [47,47]};// TLS
  this.rules[1].opcodes[3] = {type: 4, index: 3};// RNM(authority)
  this.rules[1].opcodes[4] = {type: 4, index: 4};// RNM(path-abempty)
  this.rules[1].opcodes[5] = {type: 4, index: 5};// RNM(path-absolute)
  this.rules[1].opcodes[6] = {type: 4, index: 6};// RNM(path-rootless)
  this.rules[1].opcodes[7] = {type: 4, index: 7};// RNM(path-empty)

  /* scheme */
  this.rules[2].opcodes = [];
  this.rules[2].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[2].opcodes[1] = {type: 4, index: 32};// RNM(ALPHA)
  this.rules[2].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[2].opcodes[3] = {type: 1, children: [4,5,6,7]};// ALT
  this.rules[2].opcodes[4] = {type: 4, index: 32};// RNM(ALPHA)
  this.rules[2].opcodes[5] = {type: 4, index: 34};// RNM(DIGIT)
  this.rules[2].opcodes[6] = {type: 6, string: [43]};// TBS
  this.rules[2].opcodes[7] = {type: 5, min: 45, max: 46};// TRG

  /* authority */
  this.rules[3].opcodes = [];
  this.rules[3].opcodes[0] = {type: 2, children: [1,3,4]};// CAT
  this.rules[3].opcodes[1] = {type: 3, min: 0, max: 1};// REP
  this.rules[3].opcodes[2] = {type: 4, index: 8};// RNM(userinfo-at)
  this.rules[3].opcodes[3] = {type: 4, index: 10};// RNM(host)
  this.rules[3].opcodes[4] = {type: 3, min: 0, max: 1};// REP
  this.rules[3].opcodes[5] = {type: 2, children: [6,7]};// CAT
  this.rules[3].opcodes[6] = {type: 7, string: [58]};// TLS
  this.rules[3].opcodes[7] = {type: 4, index: 25};// RNM(port)

  /* path-abempty */
  this.rules[4].opcodes = [];
  this.rules[4].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[4].opcodes[1] = {type: 2, children: [2,3]};// CAT
  this.rules[4].opcodes[2] = {type: 7, string: [47]};// TLS
  this.rules[4].opcodes[3] = {type: 4, index: 28};// RNM(segment)

  /* path-absolute */
  this.rules[5].opcodes = [];
  this.rules[5].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[5].opcodes[1] = {type: 7, string: [47]};// TLS
  this.rules[5].opcodes[2] = {type: 3, min: 0, max: 1};// REP
  this.rules[5].opcodes[3] = {type: 2, children: [4,5]};// CAT
  this.rules[5].opcodes[4] = {type: 4, index: 29};// RNM(segment-nz)
  this.rules[5].opcodes[5] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[5].opcodes[6] = {type: 2, children: [7,8]};// CAT
  this.rules[5].opcodes[7] = {type: 7, string: [47]};// TLS
  this.rules[5].opcodes[8] = {type: 4, index: 28};// RNM(segment)

  /* path-rootless */
  this.rules[6].opcodes = [];
  this.rules[6].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[6].opcodes[1] = {type: 4, index: 29};// RNM(segment-nz)
  this.rules[6].opcodes[2] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[6].opcodes[3] = {type: 2, children: [4,5]};// CAT
  this.rules[6].opcodes[4] = {type: 7, string: [47]};// TLS
  this.rules[6].opcodes[5] = {type: 4, index: 28};// RNM(segment)

  /* path-empty */
  this.rules[7].opcodes = [];
  this.rules[7].opcodes[0] = {type: 7, string: []};// TLS

  /* userinfo-at */
  this.rules[8].opcodes = [];
  this.rules[8].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[8].opcodes[1] = {type: 4, index: 9};// RNM(userinfo)
  this.rules[8].opcodes[2] = {type: 6, string: [64]};// TBS

  /* userinfo */
  this.rules[9].opcodes = [];
  this.rules[9].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[9].opcodes[1] = {type: 1, children: [2,3,4,5,6,7,8,9,10,11,12]};// ALT
  this.rules[9].opcodes[2] = {type: 5, min: 97, max: 122};// TRG
  this.rules[9].opcodes[3] = {type: 5, min: 65, max: 90};// TRG
  this.rules[9].opcodes[4] = {type: 5, min: 48, max: 57};// TRG
  this.rules[9].opcodes[5] = {type: 4, index: 31};// RNM(pct-encoded)
  this.rules[9].opcodes[6] = {type: 6, string: [33]};// TBS
  this.rules[9].opcodes[7] = {type: 6, string: [36]};// TBS
  this.rules[9].opcodes[8] = {type: 5, min: 38, max: 46};// TRG
  this.rules[9].opcodes[9] = {type: 5, min: 58, max: 59};// TRG
  this.rules[9].opcodes[10] = {type: 6, string: [61]};// TBS
  this.rules[9].opcodes[11] = {type: 6, string: [95]};// TBS
  this.rules[9].opcodes[12] = {type: 6, string: [126]};// TBS

  /* host */
  this.rules[10].opcodes = [];
  this.rules[10].opcodes[0] = {type: 1, children: [1,2,6]};// ALT
  this.rules[10].opcodes[1] = {type: 4, index: 11};// RNM(IP-literal)
  this.rules[10].opcodes[2] = {type: 2, children: [3,4]};// CAT
  this.rules[10].opcodes[3] = {type: 4, index: 20};// RNM(IPv4address)
  this.rules[10].opcodes[4] = {type: 13};// NOT
  this.rules[10].opcodes[5] = {type: 4, index: 24};// RNM(reg-name-char)
  this.rules[10].opcodes[6] = {type: 4, index: 23};// RNM(reg-name)

  /* IP-literal */
  this.rules[11].opcodes = [];
  this.rules[11].opcodes[0] = {type: 2, children: [1,2,5]};// CAT
  this.rules[11].opcodes[1] = {type: 7, string: [91]};// TLS
  this.rules[11].opcodes[2] = {type: 1, children: [3,4]};// ALT
  this.rules[11].opcodes[3] = {type: 4, index: 13};// RNM(IPv6address)
  this.rules[11].opcodes[4] = {type: 4, index: 12};// RNM(IPvFuture)
  this.rules[11].opcodes[5] = {type: 7, string: [93]};// TLS

  /* IPvFuture */
  this.rules[12].opcodes = [];
  this.rules[12].opcodes[0] = {type: 2, children: [1,2,4,5]};// CAT
  this.rules[12].opcodes[1] = {type: 7, string: [118]};// TLS
  this.rules[12].opcodes[2] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[12].opcodes[3] = {type: 4, index: 35};// RNM(HEXDIG)
  this.rules[12].opcodes[4] = {type: 7, string: [46]};// TLS
  this.rules[12].opcodes[5] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[12].opcodes[6] = {type: 1, children: [7,8,9,10,11,12,13,14,15,16]};// ALT
  this.rules[12].opcodes[7] = {type: 5, min: 97, max: 122};// TRG
  this.rules[12].opcodes[8] = {type: 5, min: 65, max: 90};// TRG
  this.rules[12].opcodes[9] = {type: 5, min: 48, max: 57};// TRG
  this.rules[12].opcodes[10] = {type: 6, string: [33]};// TBS
  this.rules[12].opcodes[11] = {type: 6, string: [36]};// TBS
  this.rules[12].opcodes[12] = {type: 5, min: 38, max: 46};// TRG
  this.rules[12].opcodes[13] = {type: 5, min: 58, max: 59};// TRG
  this.rules[12].opcodes[14] = {type: 6, string: [61]};// TBS
  this.rules[12].opcodes[15] = {type: 6, string: [95]};// TBS
  this.rules[12].opcodes[16] = {type: 6, string: [126]};// TBS

  /* IPv6address */
  this.rules[13].opcodes = [];
  this.rules[13].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[13].opcodes[1] = {type: 4, index: 14};// RNM(nodcolon)
  this.rules[13].opcodes[2] = {type: 4, index: 15};// RNM(dcolon)

  /* nodcolon */
  this.rules[14].opcodes = [];
  this.rules[14].opcodes[0] = {type: 2, children: [1,5]};// CAT
  this.rules[14].opcodes[1] = {type: 2, children: [2,3]};// CAT
  this.rules[14].opcodes[2] = {type: 4, index: 18};// RNM(h16n)
  this.rules[14].opcodes[3] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[14].opcodes[4] = {type: 4, index: 19};// RNM(h16cn)
  this.rules[14].opcodes[5] = {type: 3, min: 0, max: 1};// REP
  this.rules[14].opcodes[6] = {type: 2, children: [7,8]};// CAT
  this.rules[14].opcodes[7] = {type: 6, string: [58]};// TBS
  this.rules[14].opcodes[8] = {type: 4, index: 20};// RNM(IPv4address)

  /* dcolon */
  this.rules[15].opcodes = [];
  this.rules[15].opcodes[0] = {type: 2, children: [1,6,7]};// CAT
  this.rules[15].opcodes[1] = {type: 3, min: 0, max: 1};// REP
  this.rules[15].opcodes[2] = {type: 2, children: [3,4]};// CAT
  this.rules[15].opcodes[3] = {type: 4, index: 16};// RNM(h16)
  this.rules[15].opcodes[4] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[15].opcodes[5] = {type: 4, index: 17};// RNM(h16c)
  this.rules[15].opcodes[6] = {type: 6, string: [58,58]};// TBS
  this.rules[15].opcodes[7] = {type: 1, children: [8,17]};// ALT
  this.rules[15].opcodes[8] = {type: 2, children: [9,13]};// CAT
  this.rules[15].opcodes[9] = {type: 2, children: [10,11]};// CAT
  this.rules[15].opcodes[10] = {type: 4, index: 18};// RNM(h16n)
  this.rules[15].opcodes[11] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[15].opcodes[12] = {type: 4, index: 19};// RNM(h16cn)
  this.rules[15].opcodes[13] = {type: 3, min: 0, max: 1};// REP
  this.rules[15].opcodes[14] = {type: 2, children: [15,16]};// CAT
  this.rules[15].opcodes[15] = {type: 6, string: [58]};// TBS
  this.rules[15].opcodes[16] = {type: 4, index: 20};// RNM(IPv4address)
  this.rules[15].opcodes[17] = {type: 3, min: 0, max: 1};// REP
  this.rules[15].opcodes[18] = {type: 4, index: 20};// RNM(IPv4address)

  /* h16 */
  this.rules[16].opcodes = [];
  this.rules[16].opcodes[0] = {type: 3, min: 1, max: 4};// REP
  this.rules[16].opcodes[1] = {type: 4, index: 35};// RNM(HEXDIG)

  /* h16c */
  this.rules[17].opcodes = [];
  this.rules[17].opcodes[0] = {type: 2, children: [1,2]};// CAT
  this.rules[17].opcodes[1] = {type: 6, string: [58]};// TBS
  this.rules[17].opcodes[2] = {type: 3, min: 1, max: 4};// REP
  this.rules[17].opcodes[3] = {type: 4, index: 35};// RNM(HEXDIG)

  /* h16n */
  this.rules[18].opcodes = [];
  this.rules[18].opcodes[0] = {type: 2, children: [1,3]};// CAT
  this.rules[18].opcodes[1] = {type: 3, min: 1, max: 4};// REP
  this.rules[18].opcodes[2] = {type: 4, index: 35};// RNM(HEXDIG)
  this.rules[18].opcodes[3] = {type: 13};// NOT
  this.rules[18].opcodes[4] = {type: 6, string: [46]};// TBS

  /* h16cn */
  this.rules[19].opcodes = [];
  this.rules[19].opcodes[0] = {type: 2, children: [1,2,4]};// CAT
  this.rules[19].opcodes[1] = {type: 6, string: [58]};// TBS
  this.rules[19].opcodes[2] = {type: 3, min: 1, max: 4};// REP
  this.rules[19].opcodes[3] = {type: 4, index: 35};// RNM(HEXDIG)
  this.rules[19].opcodes[4] = {type: 13};// NOT
  this.rules[19].opcodes[5] = {type: 6, string: [46]};// TBS

  /* IPv4address */
  this.rules[20].opcodes = [];
  this.rules[20].opcodes[0] = {type: 2, children: [1,2,3,4,5,6,7]};// CAT
  this.rules[20].opcodes[1] = {type: 4, index: 21};// RNM(dec-octet)
  this.rules[20].opcodes[2] = {type: 7, string: [46]};// TLS
  this.rules[20].opcodes[3] = {type: 4, index: 21};// RNM(dec-octet)
  this.rules[20].opcodes[4] = {type: 7, string: [46]};// TLS
  this.rules[20].opcodes[5] = {type: 4, index: 21};// RNM(dec-octet)
  this.rules[20].opcodes[6] = {type: 7, string: [46]};// TLS
  this.rules[20].opcodes[7] = {type: 4, index: 21};// RNM(dec-octet)

  /* dec-octet */
  this.rules[21].opcodes = [];
  this.rules[21].opcodes[0] = {type: 3, min: 0, max: 3};// REP
  this.rules[21].opcodes[1] = {type: 4, index: 22};// RNM(dec-digit)

  /* dec-digit */
  this.rules[22].opcodes = [];
  this.rules[22].opcodes[0] = {type: 5, min: 48, max: 57};// TRG

  /* reg-name */
  this.rules[23].opcodes = [];
  this.rules[23].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[23].opcodes[1] = {type: 4, index: 24};// RNM(reg-name-char)

  /* reg-name-char */
  this.rules[24].opcodes = [];
  this.rules[24].opcodes[0] = {type: 1, children: [1,2,3,4,5,6,7,8,9,10,11]};// ALT
  this.rules[24].opcodes[1] = {type: 5, min: 97, max: 122};// TRG
  this.rules[24].opcodes[2] = {type: 5, min: 65, max: 90};// TRG
  this.rules[24].opcodes[3] = {type: 5, min: 48, max: 57};// TRG
  this.rules[24].opcodes[4] = {type: 4, index: 31};// RNM(pct-encoded)
  this.rules[24].opcodes[5] = {type: 6, string: [33]};// TBS
  this.rules[24].opcodes[6] = {type: 6, string: [36]};// TBS
  this.rules[24].opcodes[7] = {type: 5, min: 38, max: 46};// TRG
  this.rules[24].opcodes[8] = {type: 6, string: [59]};// TBS
  this.rules[24].opcodes[9] = {type: 6, string: [61]};// TBS
  this.rules[24].opcodes[10] = {type: 6, string: [95]};// TBS
  this.rules[24].opcodes[11] = {type: 6, string: [126]};// TBS

  /* port */
  this.rules[25].opcodes = [];
  this.rules[25].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[25].opcodes[1] = {type: 4, index: 34};// RNM(DIGIT)

  /* query */
  this.rules[26].opcodes = [];
  this.rules[26].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[26].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[26].opcodes[2] = {type: 4, index: 30};// RNM(pchar)
  this.rules[26].opcodes[3] = {type: 6, string: [47]};// TBS
  this.rules[26].opcodes[4] = {type: 6, string: [63]};// TBS

  /* fragment */
  this.rules[27].opcodes = [];
  this.rules[27].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[27].opcodes[1] = {type: 1, children: [2,3,4]};// ALT
  this.rules[27].opcodes[2] = {type: 4, index: 30};// RNM(pchar)
  this.rules[27].opcodes[3] = {type: 6, string: [47]};// TBS
  this.rules[27].opcodes[4] = {type: 6, string: [63]};// TBS

  /* segment */
  this.rules[28].opcodes = [];
  this.rules[28].opcodes[0] = {type: 3, min: 0, max: Infinity};// REP
  this.rules[28].opcodes[1] = {type: 4, index: 30};// RNM(pchar)

  /* segment-nz */
  this.rules[29].opcodes = [];
  this.rules[29].opcodes[0] = {type: 3, min: 1, max: Infinity};// REP
  this.rules[29].opcodes[1] = {type: 4, index: 30};// RNM(pchar)

  /* pchar */
  this.rules[30].opcodes = [];
  this.rules[30].opcodes[0] = {type: 1, children: [1,2,3,4,5,6,7,8,9,10,11,12]};// ALT
  this.rules[30].opcodes[1] = {type: 5, min: 97, max: 122};// TRG
  this.rules[30].opcodes[2] = {type: 5, min: 65, max: 90};// TRG
  this.rules[30].opcodes[3] = {type: 5, min: 48, max: 57};// TRG
  this.rules[30].opcodes[4] = {type: 4, index: 31};// RNM(pct-encoded)
  this.rules[30].opcodes[5] = {type: 6, string: [33]};// TBS
  this.rules[30].opcodes[6] = {type: 6, string: [36]};// TBS
  this.rules[30].opcodes[7] = {type: 5, min: 38, max: 46};// TRG
  this.rules[30].opcodes[8] = {type: 5, min: 58, max: 59};// TRG
  this.rules[30].opcodes[9] = {type: 6, string: [61]};// TBS
  this.rules[30].opcodes[10] = {type: 6, string: [64]};// TBS
  this.rules[30].opcodes[11] = {type: 6, string: [95]};// TBS
  this.rules[30].opcodes[12] = {type: 6, string: [126]};// TBS

  /* pct-encoded */
  this.rules[31].opcodes = [];
  this.rules[31].opcodes[0] = {type: 2, children: [1,2,3]};// CAT
  this.rules[31].opcodes[1] = {type: 6, string: [37]};// TBS
  this.rules[31].opcodes[2] = {type: 4, index: 35};// RNM(HEXDIG)
  this.rules[31].opcodes[3] = {type: 4, index: 35};// RNM(HEXDIG)

  /* ALPHA */
  this.rules[32].opcodes = [];
  this.rules[32].opcodes[0] = {type: 1, children: [1,2]};// ALT
  this.rules[32].opcodes[1] = {type: 5, min: 65, max: 90};// TRG
  this.rules[32].opcodes[2] = {type: 5, min: 97, max: 122};// TRG

  /* LF */
  this.rules[33].opcodes = [];
  this.rules[33].opcodes[0] = {type: 6, string: [10]};// TBS

  /* DIGIT */
  this.rules[34].opcodes = [];
  this.rules[34].opcodes[0] = {type: 5, min: 48, max: 57};// TRG

  /* HEXDIG */
  this.rules[35].opcodes = [];
  this.rules[35].opcodes[0] = {type: 1, children: [1,2,3]};// ALT
  this.rules[35].opcodes[1] = {type: 5, min: 48, max: 57};// TRG
  this.rules[35].opcodes[2] = {type: 5, min: 65, max: 70};// TRG
  this.rules[35].opcodes[3] = {type: 5, min: 97, max: 102};// TRG

  // The `toString()` function will display the original grammar file(s) that produced these opcodes.
  this.toString = function toString(){
    let str = "";
    str += "; LDT 10/21/3023 \n";
    str += "; modified in several significant ways\n";
    str += "; 1) Literal strings are replaced with numbers and ranges (%d32 & %d32-126, etc.) when possible.\n";
    str += ";    TRB and especially TRG operators are much more efficient than TLS operators.\n";
    str += "; 2) RFC 3986 IPv6address does not work because of APG's \"first-success disambiguation\" and \"greedy\" repetitions.\n";
    str += ";    IPv6address redefined and validations moved to callback functions (semantic vs syntactic validation)\n";
    str += ";    Redefinition requires negative look-ahead operators, https://en.wikipedia.org/wiki/Syntactic_predicate\n";
    str += ";    That is SABNF instead of simple ABNF.\n";
    str += "; 3) RFC 3986 IPv4address fails because of \"first-success disambiguation\".\n";
    str += ";    This could be fixed with rearrangement of the alternative terms. However, it would still not\n";
    str += ";    accept zero-padded (leading zeros) decimal octets.\n";
    str += ";    Therefore, IPv4address is also done with callback functions and semantic validation.\n";
    str += "; 4) The negative look-ahead operator is also needed in the definition of host to\n";
    str += ";    prevent failure with a reg-name that begins with an IPv4 address.\n";
    str += "; 5) NOTE: host = 1.1.1.256 is a valid host name even though it is an invalid IPv4address.\n";
    str += ";          The IPv4address alternative fails but the reg-name alternative succeeds.\n";
    str += "\n";
    str += "\n";
    str += "; ------------------------------------------------------------------------------\n";
    str += "; RFC 3986\n";
    str += "\n";
    str += "URI           = scheme \":\" hier-part [ \"?\" query ] [ \"#\" fragment ]\n";
    str += "hier-part     = \"//\" authority path-abempty\n";
    str += "              / path-absolute\n";
    str += "              / path-rootless\n";
    str += "              / path-empty\n";
    str += "scheme        = ALPHA *( ALPHA / DIGIT / %d43 / %d45-46 )\n";
    str += "authority     = [ userinfo-at ] host [ \":\" port ]\n";
    str += "path-abempty  = *( \"/\" segment )\n";
    str += "path-absolute = \"/\" [ segment-nz *( \"/\" segment ) ]\n";
    str += "path-rootless = segment-nz *( \"/\" segment )\n";
    str += "path-empty    = \"\"\n";
    str += "userinfo-at   = userinfo %d64\n";
    str += "                ; userinfo redefined to include the \"@\" so that it will fail without it\n";
    str += "                ; otherwise userinfo can match host and then the parser will backtrack\n";
    str += "                ; incorrectly keeping the captured userinfo phrase\n";
    str += "userinfo      = *(%d97-122 / %d65-90 / %d48-57 / pct-encoded / %d33 / %d36 / %d38-46 / %d58-59 / %d61 / %d95 / %d126)\n";
    str += "host          = IP-literal / (IPv4address !reg-name-char) / reg-name\n";
    str += "                ; negative look-ahead required to prevent IPv4address from being recognized as first part of reg-name\n";
    str += "                ; same fix as https://github.com/garycourt/uri-js/issues/4\n";
    str += "IP-literal    = \"[\" ( IPv6address / IPvFuture  ) \"]\"\n";
    str += "IPvFuture     = \"v\" 1*HEXDIG \".\" 1*( %d97-122 / %d65-90 / %d48-57 / %d33 / %d36 /%d38-46 / %d58-59 /%d61 /%d95 / %d126 )\n";
    str += "IPv6address   = nodcolon / dcolon\n";
    str += "nodcolon      = (h16n *h16cn) [%d58 IPv4address]\n";
    str += "dcolon        = [h16 *h16c] %d58.58 (((h16n *h16cn) [%d58 IPv4address]) / [IPv4address])\n";
    str += "h16           = 1*4HEXDIG\n";
    str += "h16c          = %d58 1*4HEXDIG\n";
    str += "h16n          = 1*4HEXDIG !%d46\n";
    str += "h16cn         = %d58 1*4HEXDIG !%d46\n";
    str += "IPv4address   = dec-octet \".\" dec-octet \".\" dec-octet \".\" dec-octet\n";
    str += "; Here we will will use callback functions to evaluate and validate the (possibly zero-padded) dec-octet.\n";
    str += "dec-octet     =  *3dec-digit\n";
    str += "dec-digit     = %d48-57\n";
    str += "reg-name      = *reg-name-char\n";
    str += "reg-name-char = %d97-122 / %d65-90 / %d48-57 / pct-encoded / %d33 / %d36 / %d38-46 / %d59 / %d61 /%d95 / %d126\n";
    str += "port          = *DIGIT\n";
    str += "query         = *(pchar / %d47 / %d63)\n";
    str += "fragment      = *(pchar / %d47 / %d63)\n";
    str += "\n";
    str += "segment       = *pchar\n";
    str += "segment-nz    = 1*pchar\n";
    str += "pchar         = (%d97-122 / %d65-90 / %d48-57 / pct-encoded / %d33 / %d36 / %d38-46 /%d58-59 / %d61 / %d64 / %d95 / %d126)\n";
    str += "pct-encoded   = %d37 HEXDIG HEXDIG\n";
    str += "\n";
    str += "; no longer needed - expanded for all usage for fewer branches in the parse there\n";
    str += "; and more efficient use of the TBS & TRG operators in place of TLS and rule names\n";
    str += "; does not work with APG probably because of \"first-success disambiguation\" and greedy repetitions.\n";
    str += "; will replace with semantic checking of valid number of h16s\n";
    str += ";IPv6address   =                            6( h16 \":\" ) ls32\n";
    str += ";              /                       \"::\" 5( h16 \":\" ) ls32\n";
    str += ";              / [               h16 ] \"::\" 4( h16 \":\" ) ls32\n";
    str += ";              / [ *1( h16 \":\" ) h16 ] \"::\" 3( h16 \":\" ) ls32\n";
    str += ";              / [ *2( h16 \":\" ) h16 ] \"::\" 2( h16 \":\" ) ls32\n";
    str += ";              / [ *3( h16 \":\" ) h16 ] \"::\"    h16 \":\"   ls32\n";
    str += ";              / [ *4( h16 \":\" ) h16 ] \"::\"              ls32\n";
    str += ";              / [ *5( h16 \":\" ) h16 ] \"::\"              h16\n";
    str += ";              / [ *6( h16 \":\" ) h16 ] \"::\"\n";
    str += ";ls32          = ( h16 \":\" h16 ) / IPv4address\n";
    str += "; dec-octet does not work because of \"first-success disambiguation\".\n";
    str += "; Must have the longest (3-digit) numbers first.\n";
    str += "; Even so, this form does not accept leading zeros.\n";
    str += "; There does not seem to be a clear standard for this (https://en.wikipedia.org/wiki/Dot-decimal_notation)\n";
    str += "; however and early RFC 790 did show leading-zero padding of the three digits.\n";
    str += ";dec-octet     = DIGIT                 ; 0-9\n";
    str += ";                 / %x31-39 DIGIT         ; 10-99\n";
    str += ";                 / \"1\" 2DIGIT            ; 100-199\n";
    str += ";                 / \"2\" %x30-34 DIGIT     ; 200-249\n";
    str += ";                 / \"25\" %x30-35          ; 250-255\n";
    str += ";statement = 1*( reserved / unreserved / \" \" )\n";
    str += ";scheme        = ALPHA *( ALPHA / DIGIT / \"+\" / \"-\" / \".\" )\n";
    str += ";authority     = [ userinfo \"@\" ] host [ \":\" port ]\n";
    str += ";userinfo      = *( unreserved / pct-encoded / sub-delims / \":\" )\n";
    str += ";query         = *( pchar / \"/\" / \"?\" )\n";
    str += ";fragment      = *( pchar / \"/\" / \"?\" )\n";
    str += ";IPvFuture     = \"v\" 1*HEXDIG \".\" 1*( unreserved / sub-delims / \":\" )\n";
    str += ";reg-name      = *( unreserved / pct-encoded / sub-delims )\n";
    str += ";pct-encoded   = \"%\" HEXDIG HEXDIG\n";
    str += ";pchar         = unreserved / pct-encoded / sub-delims / \":\" / \"@\"\n";
    str += ";path-empty    = 0pchar; deprecated - empty literal string, \"\", is more efficient \n";
    str += ";unreserved    = ALPHA / DIGIT / \"-\" / \".\" / \"_\" / \"~\"\n";
    str += ";reserved      = gen-delims / sub-delims\n";
    str += ";gen-delims    = \":\" / \"/\" / \"?\" / \"#\" / \"[\" / \"]\" / \"@\"\n";
    str += ";sub-delims    = \"!\" / \"$\" / \"&\" / \"'\" / \"(\" / \")\"\n";
    str += ";              / \"*\" / \"+\" / \",\" / \";\" / \"=\"\n";
    str += ";HEXDIG         =  DIGIT / \"A\" / \"B\" / \"C\" / \"D\" / \"E\" / \"F\"\n";
    str += "\n";
    str += "; ------------------------------------------------------------------------------\n";
    str += "; RFC 5234\n";
    str += "\n";
    str += "ALPHA          =  %x41-5A / %x61-7A   ; A-Z / a-z\n";
    str += "LF             =  %x0A\n";
    str += "                  ; linefeed\n";
    str += "DIGIT          =  %x30-39\n";
    str += "                  ; 0-9\n";
    str += "HEXDIG         = %d48-57 / %d65-70 / %d97-102\n";
    str += "\n";
    return str;
  }
}
