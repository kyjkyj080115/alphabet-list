"use stric";

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

module.exports.kolist = kolist