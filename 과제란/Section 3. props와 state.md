# :collision: Section 3. props와 state :collision:

## Props와 state

### Props : 
* 부모가 자식한테 주는 값이고 컴포넌트를 랜더링할 때, 특정값을 설정해주는 방식으로 값을 넘겨주게 됩니다.
```<Child value="values" />``` 에서 value가 props가 됩니다. 
Ex)
MyName.js 파일을 
```
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}

export default MyName;
```
이와 같이 작성하고 

App.js 파일에는 
```
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    const name = 'Hello';
    return <MyName name = "리액트" />;
  }
}

export default App;
```
이와 같이 작성하면 됩니다.

result : 안녕하세요! 리액트입니다. 라고 출력됩니다.

```
class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  }
  render() {
    return (
      <div>
        안녕하세요! <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}
```
위와 같이 static defaultProps를 이용해 기본값을 설정할 수도 있습니다.

```
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! <b>{this.props.name}</b>입니다.
      </div>
    );
  }
}

MyName.defaultProps = {
  name: '기본이름'
}

export default MyName;
```

이러한 방식으로 MyName.defaultProps을 이용해 기본값을 설정해줄 수도 있습니다.

그러면 
```
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    const name = 'Hello';
    return <MyName />;
  }
}

export default App;
```
위 코드에서는 
결과값으로 
result : 안녕하세요! 기본이름입니다. 라고 출력됩니다.

* 함수형 컴포넌트로도 작성이 가능하다.
```
import React from 'react';

const MyName = ({ name }) => {
  return (
     <div>
       안녕하세요. {name}입니다.
     </div>
  );
};

MyName.defaultProps = {
  name: '기본이름'
};
export default MyName;
```
const MyName = ({ name }) => { : 이 방식은 비구조화 할당이라고 합니다.

함수형 컴포넌트는 조금 더 빠르고 메모리 할당을 조금 적게 합니다.

### State :
* state는 내부에서 변경할 수 있습니다. 변경할 때는 언제나 setState함수를 사용합니다.

