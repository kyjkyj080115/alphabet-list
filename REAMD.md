# alphabet-list

## 영어, 숫자, 한글을 옵션에 따라, 자유롭게
---
### 모든 응답은 Array 입니다.
---
### 영어 

|옵션|속성|속성|기본|
|------|---|---|---|
|small?|True|False|False|
|big?|True|False|False|

## test
```js
const { enlist } = require("alphabet-list");

const option = {
  small: true,
  big: true,
};
console.log(enlist(option));
```

## output
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
### 숫자

|옵션|속성|제한|기본|
|------|---|---|---|
|min?|Number|0이상|0|
|max?|Number|제한 없음|50|
## test
```js
const { numlist } = require("alphabet-list");

const option = {
  min: 0,
  max: 10,
};
console.log(numlist(option));
```

## output
```cmd
[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
    10
]
```
### 한글

|옵션|속성|속성|기본|
|------|---|---|---|
|consonant?|True|False|False|
|vowel?|True|False|False|
|double?|True|False|False|
## test
```js
const { kolist } = require("alphabet-list");

const option = {
  consonant: true,
  vowel: true,
  double: true,
};
console.log(kolist(option));
```

## output
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
# [자세히 알아보기](/docs)