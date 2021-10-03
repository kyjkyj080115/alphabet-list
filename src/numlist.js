"use stric";

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

module.exports.numlist = numlist