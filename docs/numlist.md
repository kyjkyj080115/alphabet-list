# 영어

## 옵션
|옵션|속성|설명|제한|기본|
|---|---|---|---|---|
|min?|Number|최소값|0 이상|0|
|max?|Number|최대값|제한 없음|50|

## 테스트
### input
```js
const { numlist } = require("alphabet-list");
const option = {
  min: 0,
  max: 10,
};
console.log(numlist(option));
```
### output
```cmd
[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9,
    10
]
```
---
### input
```js
const { numlist } = require("alphabet-list");
const option = {
  min: 5,
  max: 20,
};
console.log(numlist(option));
```
### output
```cmd
[
    5, 6, 7, 8, 9,
    10, 11, 12, 13, 14,
    15, 16, 17, 18, 19,
    20
]
```