"use stric";

function enlist(option) {
  if (typeof option !== "object")
    throw new TypeError("Option type must be object");
  if (
    (option.small !== undefined && typeof option.small !== "boolean") ||
    (option.big !== undefined && typeof option.big !== "boolean")
  )
    throw new TypeError(`option of small and big's type must be undefined or boolean`);
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

module.exports.enlist = enlist;
