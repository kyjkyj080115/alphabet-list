# 영어

## 옵션
|옵션|속성|속성|설명|기본|
|---|---|---|---|---|
|small?|True|False|소문자|False|
|big?|True|False|대문자|False|

## 테스트
### input
```js
const { enlist } = require("alphabet-list");
const option = {
  small: true,
  big: true,
};
console.log(enlist(option));
```
### output
```sh
[
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z'
]
```
---
### input
```js
const { enlist } = require("alphabet-list");
const option = {
  small: true,
  big: false,
};
console.log(enlist(option));
```
### output
```sh
[
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]
```
---
### input
```js
const { enlist } = require("alphabet-list");
const option = {
  small: false,
  big: true,
};
console.log(enlist(option));
```
### output
```sh
[
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V','W', 'X',
  'Y', 'Z'
]
```