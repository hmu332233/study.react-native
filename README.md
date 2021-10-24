# study.react-native

## 동작 원리
1. native: 이벤트 발생시 감지 및 수집
2. bridge: 위 정보 serialize
3. js: serialize된 데이터를 받아서 이벤트에 대한 처리
4. js: native method를 호출하거나 ui 업데이트 처리(를 native로 전달)
5. bridge: 응답 serialize
6. native: command 처리 및 ui 업데이트


js는 os를 대상으로 메세지를 주고 받기 위해 사용하는 레이어일뿐 

react native <-> bridge <-> platform api

## expo

```js
$ expo login
```