const alphabet_list = require("..");

let option = {
  small: true,
  big: true
}
const enlist = alphabet_list.enlist(option)
console.log(enlist);
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
option = {
  min: 0,
  max: 10
}
const numlist = alphabet_list.numlist(option)
console.log(numlist);

/*
[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
    10
]
*/
option = {
  consonant: true,
  double: true,
  vowel:true
}
const kolist = alphabet_list.kolist(option)
console.log(kolist);

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

console.log(alphabet_list.version)
// 'now version'