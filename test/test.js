const {enlist, numlist, kolist} = require(".."),
  option1 = {
    small: true,
    big: true
  },
  option2 = {
    min: 0,
    max: 10
  },
  option3 = {
    consonant: true,
    vowel: true,
    double: true
  };

console.log(enlist(option1));

/*
[
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z'
]
*/

console.log(numlist(option2));

/*
[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
    10
]
*/

console.log(kolist(option3));

/*
[
  'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ',
  'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ',
  'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ',
  'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ',
  'ㅐ', 'ㅔ', 'ㅒ', 'ㅖ', 'ㅘ', 'ㅙ',
  'ㅝ', 'ㅞ', 'ㅢ', 'ㄲ', 'ㄸ', 'ㅃ',
  'ㅆ', 'ㅉ'
]
*/