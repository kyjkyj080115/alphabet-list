"use stric";

function numlist(option) {
  if (typeof option !== "object")
    throw new TypeError("Option type must be object");
  if (
    (option.min !== undefined && typeof option.min !== "number") ||
    (option.max !== undefined && typeof option.max !== "number")
  )
    throw new TypeError(`option of min and big's type must be number`);
  let list = [];
  if (option?.min == undefined) option.min = 0;
  if (option?.max == undefined) option.max = 50;
  for (var i = option.min; i < option.max + 1; i++) {
    list.push(i);
  }
  return list;
}

module.exports.numlist = numlist;
