# ✨ Section 2. Project Setup ✨

## Section 2.0 Setting 

yarn global add create-react-app : react버전 업데이트  

npx create-react-app nomflix : react app 생성  

yarn add prop-types : prop-types를 추가해줍니다.   

.env : 기본적으로 src 파일은  파일경로 설정을 해줍니다.  

## Section 2.1 : React Router Part One

react router Dom만 사용할 예정입니다.  

yarn add react-router-dom : 패키지 설치  

Fragments는 네가 원하는만큼 컴포넌트를 return할 수 있게 해줍니다.  

route는 하나의 child만 가지고 있습니다.  

Ex) ```http://localhost:3000/#/tv``` 와 같이 #를 가지고 있는 router를 Hash Router라고 부릅니다.  

## Section 2.2 : React Router Part Two

Hash Router는 앱을 쓰고 있는 느낌을 주고 Browser Router는 실제 브라우져처럼 보여줍니다.  

Browser Router는 HTML history API라는 걸 사용합니다.  

Hash Router는 네 페이지의 Hash를 사용합니다.  

Composition은 두개 이상의 Route를 동시에 랜더링하는 방식입니다.  

Redirect는 from에 해당되는 문구를 받았을때, to로 다시 Redirect를 시켜주는 방식입니다.  

Switch는 하나의 Router에 하나의 return값을 받을 수 있도록 만들어줍니다.  

exact는 해당 path에만 적용이 되도록 하는 설정값입니다.  
