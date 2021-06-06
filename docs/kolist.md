# 한글

## 옵션
|옵션|속성|속성|설명|기본|
|---|---|---|---|---|
|consonant?|True|False|자음|False|
|vowel?|True|False|모음|False|
|double?|True|False|쌍자음|False|

## 테스트
### input
```js
const { kolist } = require("alphabet-list");
const option = {
  consonant: true,
  vowel: true,
  double: true,
};
console.log(kolist(option));
```
### output
```sh
[
  'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ',
  'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ',
  'ㅍ', 'ㅎ', 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ',
  'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ',
  'ㅐ', 'ㅔ', 'ㅒ', 'ㅖ', 'ㅘ', 'ㅙ',
  'ㅝ', 'ㅞ', 'ㅢ', 'ㄲ', 'ㄸ', 'ㅃ',
  'ㅆ', 'ㅉ'
]
```
---
### input
```js
const { kolist } = require("alphabet-list");
const option = {
  consonant: true,
  vowel: false,
  double: true,
};
console.log(kolist(option));
```
### output
```sh
[
  'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ',
  'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ',
  'ㅍ', 'ㅎ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 
  'ㅉ'
]
```
---
### input
```js
const { kolist } = require("alphabet-list");
const option = {
  consonant: true,
  vowel: false,
  double: false,
};
console.log(kolist(option));
```
### output
```sh
[
  'ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ',
  'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ',
  'ㅍ', 'ㅎ'
]
```
---
### input
```js
const { kolist } = require("alphabet-list");
const option = {
  consonant: false,
  vowel: true,
  double: true,
};
console.log(kolist(option));
```
### output
```sh
[
  'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ',
  'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ', 'ㅐ', 'ㅔ',
  'ㅒ', 'ㅖ', 'ㅘ', 'ㅙ','ㅝ', 'ㅞ',
  'ㅢ', 'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ'
]
```
---
### input
```js
const { kolist } = require("alphabet-list");
const option = {
  consonant: false,
  vowel: true,
  double: false,
};
console.log(kolist(option));
```
### output
```sh
[
  'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ',
  'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ', 'ㅐ', 'ㅔ',
  'ㅒ', 'ㅖ', 'ㅘ', 'ㅙ', 'ㅝ', 'ㅞ',
  'ㅢ'
]
```
---
### input
```js
const { kolist } = require("alphabet-list");
const option = {
  consonant: false,
  vowel: false,
  double: true,
};
console.log(kolist(option));
```
### output
```sh
[
  'ㄲ', 'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ'
]
```