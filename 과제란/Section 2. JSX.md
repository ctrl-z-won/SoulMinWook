# :collision: Section 2. JSX :collision:

### JSX 기본 문법

1. 괄호는 꼭 닫아주어야 한다.
2. 2개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸야 한다.
   ->Fragment를 사용하면 불필요한 엘리먼트를 없에줄 수 있다.
3. 변수를 받아서 (const name = 'Hello';) 출력을 하고 싶으면 {name}와 같이 중괄호를 통해서 이용한다.

EX)
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'Hello';
    return (
      <div>
        <h1>안녕하세요 리액트</h1>
        hello {name}
      </div>
    );
  }
}

export default App;

3.1 JSX 안에 사용되는 변수 형태
   1. var : 더 이상 사용하지 않는 편이 좋습니다.
   2. const : 한번 선언 후 고정적인 값
   3. let : 유동적인 값

4. 조건부 렌더링은 이와 값이 사용된다.

4.1 1 + 1 == 2 ? '맞다' : '틀리다' 
    -> 삼항 연산자를 사용한다.
4.2 name === 'Hello' && <div>Hello</div>
    -> 조건문을 만든다.
4.3 (function(){
        if(value === 1) return <div>1이다!</div>
        if(value === 2) return <div>2이다!</div>
        if(value === 3) return <div>3이다!</div>
        return <div>없다</div>
    })()
    -> 함수를 만든다.
4.4 (() => {
        if (value === 1) return <div>1이다!</div>;
        if (value === 2) return <div>2이다!</div>;
        if (value === 3) return <div>3이다!</div>;
        return <div>없다</div>;
    })()
    -> 화살표 함수를 사용한다.
EX)
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'Hello';
    const value = 3;
    return (
      <div>
        {
        (() => {
          if (value === 1) return <div>1이다!</div>;
          if (value === 2) return <div>2이다!</div>;
          if (value === 3) return <div>3이다!</div>;
          return <div>없다</div>;
        })()
        }
      </div>
    );
  }
}

export default App;

### style 작성 

0. style을 작성시, 카밀체를 활용할 수 있도록 합니다. 
Ex) background-color => backgroundColor

1. const style로 직접 구현합니다.
Ex)
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontsize: '36px'
    };
    return (
      <div style = {style}>
        안녕하세요
      </div>
    );
  }
}

export default App;

2. className을 만들어서 style을 적용시킵니다.

Ex)
App.css파일을 만들어서 
.App{
  background: black;
  color: aqua;
  font-size:36px;
  padding: 1rem;
  font-weight: 600;
}
위와 같은 코드를 작성하고 

App.js파일에는 

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        안녕하세요
      </div>
    );
  }
}

export default App;
위와 같은 코드를 작성한다.

2.1 주석은 이와 같이 사용할 수 있도록 합니다.

1. {/*주석은 이렇게 달아 줄 수 있도록 합니다.*/} 와 같은 부호 입력해줍니다.
2. <h1 /* 컴포넌트 안에도 남길 수 있다 */></h1> 와 같이 컴포넌트 안에도 만들 수 있습니다.

Ex)
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         {/*주석은 이렇게 달아 줄 수 있도록 합니다.*/}
        <h1 /* 컴포넌트 안에도 남길 수 있다 */>리엑트</h1>
      </div>
    );
  }
}

export default App;
