'use strict';

var alphabet = {};

alphabet.base85 = {};
alphabet.base85.enc = {
    0:  '0',
    1:  '1',
    2:  '2',
    3:  '3',
    4:  '4',
    5:  '5',
    6:  '6',
    7:  '7',
    8:  '8',
    9:  '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
    16: 'G',
    17: 'H',
    18: 'I',
    19: 'J',
    20: 'K',
    21: 'L',
    22: 'M',
    23: 'N',
    24: 'O',
    25: 'P',
    26: 'Q',
    27: 'R',
    28: 'S',
    29: 'T',
    30: 'U',
    31: 'V',
    32: 'W',
    33: 'X',
    34: 'Y',
    35: 'Z',
    36: 'a',
    37: 'b',
    38: 'c',
    39: 'd',
    40: 'e',
    41: 'f',
    42: 'g',
    43: 'h',
    44: 'i',
    45: 'j',
    46: 'k',
    47: 'l',
    48: 'm',
    49: 'n',
    50: 'o',
    51: 'p',
    52: 'q',
    53: 'r',
    54: 's',
    55: 't',
    56: 'u',
    57: 'v',
    58: 'w',
    59: 'x',
    60: 'y',
    61: 'z',
    62: '!',
    63: '#',
    64: '$',
    65: '%',
    66: '&',
    67: '(',
    68: ')',
    69: '*',
    70: '+',
    71: '-',
    72: ';',
    73: '<',
    74: '=',
    75: '>',
    76: '?',
    77: '@',
    78: '^',
    79: '_',
    80: '`',
    81: '{',
    82: '|',
    83: '}',
    84: '~'
}
alphabet.base85.dec = {};
for(let i = 0;i<85; i++){
    let value = alphabet.base85.enc[i];
    alphabet.base85.dec[value.charCodeAt()] = i;
}


var NUM_MAXVALUE = Math.pow(2, 32) - 1;
var QUAD85 = 85 * 85 * 85 * 85;
var TRIO85 = 85 * 85 * 85;
var DUO85  = 85 * 85;
var SING85 = 85;
var IGNORE_CHARS = [
    0x09, /* horizontal tab */
    0x0a, /* line feed, new line */
    0x0b, /* vertical tab */
    0x0c, /* form feed, new page */
    0x0d, /* carriage return */
    0x20  /* space */
  ];
module.exports = {
    encode : function(content) {

        var buffer = Buffer.from(content, 'utf8');
        var enctable = alphabet.base85.enc;
        var padding = (buffer.length % 4 === 0) ? 0 : 4 - buffer.length % 4;
        
        var result = '';
        for (var i = 0; i < buffer.length; i += 4) {
    
            /* 32 bit number of the current 4 bytes (padded with 0 as necessary) */
            var num = ((buffer[i] << 24) >>> 0) + // Shift right to force unsigned number
                (((i + 1 > buffer.length ? 0 : buffer[i + 1]) << 16) >>> 0) +
                (((i + 2 > buffer.length ? 0 : buffer[i + 2]) <<  8) >>> 0) +
                (((i + 3 > buffer.length ? 0 : buffer[i + 3]) <<  0) >>> 0);
        
            /* Create 5 characters from '!' to 'u' alphabet */
            var block = [];
            for (var j = 0; j < 5; ++j) {
                block.unshift(enctable[num % 85]);
                num = Math.floor(num / 85);
            }
        
            block = block.join('');
            /* And append them to the result */
            result += block;
        }
        
        return result.substring(0, result.length - padding);
    },
  
    decode : function(content) {
        var buffer = Buffer.from(content, 'utf8');
        var dectable = alphabet.base85.dec;

        var dataLength = buffer.length;
      
        var padding = (dataLength % 5 === 0) ? 0 : 5 - dataLength % 5;
      
        var bufferStart = 0;
        var bufferEnd   = bufferStart + dataLength;
      
        var result = Buffer.alloc(4 * Math.ceil((bufferEnd - bufferStart) / 5));
      
        var nextValidByte = function(index) {
          if (index < bufferEnd) {
            while (-1 !== IGNORE_CHARS.indexOf(buffer[index])) {
              padding = (padding + 1) % 5;
              index++; // skip newline character
            }
          }
          return index;
        };
      
        var writeIndex = 0;
        for (var i = bufferStart; i < bufferEnd;) {
          var num = 0;
          var starti = i;
      
          i = nextValidByte(i);
          num = (dectable[buffer[i]]) * QUAD85;
      
          i = nextValidByte(i + 1);
          num += (i >= bufferEnd ? 84 : dectable[buffer[i]]) * TRIO85;
      
          i = nextValidByte(i + 1);
          num += (i >= bufferEnd ? 84 : dectable[buffer[i]]) * DUO85;
      
          i = nextValidByte(i + 1);
          num += (i >= bufferEnd ? 84 : dectable[buffer[i]]) * SING85;
      
          i = nextValidByte(i + 1);
          num += (i >= bufferEnd ? 84 : dectable[buffer[i]]);
      
          i = nextValidByte(i + 1);
      
          if (num > NUM_MAXVALUE || num < 0) {
            /* Bogus data */
            return false;
          }
      
          result.writeUInt32BE(num, writeIndex);
          writeIndex += 4;
        }
      
        return result.slice(0, writeIndex - padding);
    }
  };