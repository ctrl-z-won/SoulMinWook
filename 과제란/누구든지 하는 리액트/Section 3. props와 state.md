# :collision: Section 3. props와 state :collision:

## Props와 state

### Props : 
* 부모가 자식한테 주는 값이고 컴포넌트를 랜더링할 때, 특정값을 설정해주는 방식으로 값을 넘겨주게 됩니다. 자식 입장에서 볼 때, 부모는 읽기 전용입니다.
```<Child value="values" />``` 에서 value가 props가 됩니다. 
Ex)
MyName.js 파일에서 
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

App.js 파일에서 
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
이와 같이 작성하면 

안녕하세요! 리액트입니다. 라고 결과값이 출력됩니다.

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

그러면 App.js 파일이
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
위와 같이 작성이 되었을 경우

안녕하세요! 기본이름입니다. 라고 결과값이 출력됩니다.

* 함수형 컴포넌트로 작성이 가능합니다.
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
* state는 내부에서 변경할 수 있습니다. 변경할 때는 언제나 setState함수를 사용합니다. 값이 변경될 때마다 rerendering이 일어납니다. 컴포넌트 안에만 존재한다면 언제든지 값이 변경가능합니다.

Ex)
App.js 파일에서
```
import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return <Counter />;
  }
}

export default App;

```
이와 같이 작성하고 

Counter.js 파일에서 
```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () =>{
    this.setState({
      number: this.state.number + 1
    })
  }

  handleDecrease = () =>{
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick = {this.handleIncrease}>+</button>
        <button onClick = {this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```
이와 같이 작성하면 버튼을 이용해 number를 조정할 수 있습니다. 

여기서 중요하게 볼 점은
#### = () =>를 사용하지 않으면 setState를 읽을 수 없습니다.

만약 = () =>를 사용하지 않는다면,
```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };

  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

이러한 형식으로 this가 어떤 함수의 this인지 설정해주어야 합니다.