"use stric";

function enlist(option) {
  if (typeof option !== "object")
    throw new TypeError("Option type must be object");
  if (typeof option.small !== "boolean" || typeof option.big !== "boolean")
    throw new TypeError(`option of small and big's type must be boolean`);
  let list = [];
  switch (option.small) {
    case true:
      list.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      break;
    case false:
      break;
    case undefined:
      break;
    default:
      throw new Error('Option list must be only "small" and "big"');
  }
  switch (option.big) {
    case true:
      list.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      break;
    case false:
      break;
    case undefined:
      break;
    default:
      throw new Error('Option list must be only "small" and "big"');
  }
  return list;
}

function numlist(option) {
  if (typeof option !== "object")
    throw new TypeError("Option type must be object");
  if (typeof option.min !== "number" || typeof option.max !== "number")
    throw new TypeError(`option of small and big's type must be boolean`);
  if (option.min < 0) throw new Error(`min number must be more than "0"`);
  let list = [];
  if (option?.min == undefined) option.min = 0;
  if (option?.max == undefined) option.max = 50;
  for (var i = option.min; i < option.max + 1; i++) {
    list.push(i);
  }
  return list;
}

function kolist(option) {
  if (typeof option !== "object")
    throw new TypeError("Option type must be object");
  if (
    typeof option.consonant !== "boolean" ||
    typeof option.vowel !== "boolean" ||
    typeof option.double !== "boolean"
  )
    throw new TypeError(`option of small and big's type must be boolean`);
  let list = [];
  switch (option.consonant) {
    case true:
      list.push("ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ");
      break;
    case false:
      break;
    case undefined:
      break;
    default:
      throw new Error('Option list must be only "consonant", "vowel" and "double"');
  }
  switch (option.vowel) {
    case true:
      list.push("ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ", "ㅐ", "ㅔ", "ㅒ", "ㅖ", "ㅘ", "ㅙ", "ㅝ", "ㅞ", "ㅢ");
      break;
    case false:
      break;
    case undefined:
      break;
    default:
      throw new Error('Option list must be only "consonant", "vowel" and "double"');
  }
  switch (option.double) {
    case true:
      list.push("ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ");
      break;
    case false:
      break;
    case undefined:
      break;
    default:
      throw new Error('Option list must be only "consonant", "vowel" and "double"');
  }
  return list;
}

const {version} = require('./package.json')

module.exports.enlist = enlist;
module.exports.numlist = numlist;
module.exports.kolist = kolist;
module.exports.version = version