# :collision: Section 0. React는 무엇인가 :collision:

React는 프론트엔드 라이브러리입니다.
다양한 유저인터페이스와 인터렉션을 제공하기 위해서 필요하다.
높은 유지보수성을 유지하기 위해서입니다!

React, Angular, Vue등등 많은 프론트엔드 라이브러리가 존재합니다.
Angular : 다양한 기능을 내장되어 있습니다. typescript가 기본입니다.
React : 컴포넌트를 기본으로 하고 있습니다. 1가지 문제를 해결하는데 많은 해결방법이 있습니다.
Vue : 초심자가 사용하기 쉽습니다.

서로 추구하는 방향이 다릅니다.

React의 추구방향
우리는 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 리액트를 만들었습니다.

옛날에는 mvc, mvvm, mvw 등이 있습니다.
공통점 : Model이 있다. 양방향으로 변화(Mutation)가 일어납니다.

만약 Model에서 어느 부분이 바뀌었다면 그 부분을 virtual DOM에 그립니다.
virtual DOM과 Real DOM을 비교해서 바뀐 부분을 찾아서 view를 PAtch해줍니다. 

한 부분만 업데이트하게되면 그 데이터에 맞는 규칙과 바뀐 데이터를 계속해서 추가하고 기억해야 하기 때문에 프론트엔드 라이브러리인 React가 상용화됩니다.

React에서만 virtual DOM를 쓰나?
Vue, Marko 등등도 쓴다.
근데 왜 React를 많이 사용하나요?
어마어마한 생태계! 마치 jQuery가 상용화되는 때와 비슷하다.
사용하는 곳이 많습니다. Ex) Airbnb, BBC, 등등
한번 사용하게 되면 좋아진다.

* 참고 문서: https://velopert.com/3613
