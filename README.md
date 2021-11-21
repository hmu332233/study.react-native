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

```
m: 메뉴얼
r: refresh
d: 개발 콘솔창 열림
```

- 폰으로 실행 중이라면 폰을 흔들면 메뉴가 보임
- expo cli를 통해 빌드를 하면 expo 서버에서 앱을 빌드를 해줌

## expo 문제점
- 앱 설정에 관해서 많은 설정을 할 수 없음
  - 근본적인 infrastructure에는 접근을 할 수 없음
  - package.json에 eject 커맨드를 이용해서 해결 가능
- 무겁다. 기본적으로 포함되는 파일크기가 큼
- create react native app을 사용하는 것을 권장

## 참고

- 문서: https://reactnative.dev/
- 과거에는 react native에서 제공하는 컴포넌트가 많았지만 모든 컴포넌트를 지원하는게 어렵다고 판단하고 react native components와 api 규모를 줄임
- 그래서 서드파티 라이브러리들이 중요해짐
- 서드파티 패키지, api: https://reactnative.directory/
- expo 팀에서도 자체적으로 package와 api를 만들게됨. -> expo SDK: https://docs.expo.dev/versions/latest/
- android, ios, web 외에도 windows, macos, vr 등등 여러 native 앱들을 개발할 수 있음

## 문서 용어
- components: 화면에 랜더링할 항목
- api: js 코드, 운영체제와 소통하기 위한 함수들
  