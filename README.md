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

## 참고

- 문서: https://reactnative.dev/
- 과거에는 react native에서 제공하는 컴포넌트가 많았지만 모든 컴포넌트를 지원하는게 어렵다고 판단하고 react native components와 api 규모를 줄임
- 그래서 서드파티 라이브러리들이 중요해짐
- 서드파티 패키지, api: https://reactnative.directory/
- expo 팀에서도 자체적으로 package와 api를 만들게됨. -> expo SDK: https://docs.expo.dev/versions/latest/


## 문서 용어
- components: 화면에 랜더링할 항목
- api: js 코드, 운영체제와 소통하기 위한 함수들

  