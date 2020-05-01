# :collision: Section 4. LifeCycle API :collision:
#### LifeCycle : 생명주기

1. 나타날 때 -> Mounting 
constructor : component가 생성될 때 만들어진다. 생성자->state 초기설정
getDerivedStateFromProps : 초기 설정을 props로 동기화시켜준다. props값을 state와  동기화시켜준다.
render : tag정의 
componentDidMount : 해당 돔에다가 특정 시점에서 작업을 요청해준다.

2. 업데이트될 때 -> Updating 
shouldComponentUpdate : Component가 업데이트할지 말지 결정해주는 함수입니다. Ex)virtual DOM에 그리는 것을 최적화시켜줄 수 있다. 
getSnapshotDeforeUpdate : 실제 브라우저에 적용되기 직전 값을 확인할 수 있습니다. Ex) 스크롤의 위치, 해당 창의 크기 같은 값들을 가지고 올 수 있다.
componentDidUpdate : Ex) 이전의 상태와 지금의 상태를 비교해서 작업할 수 있다.

3. 사라질 때 Unmounting
componentDidUnmount : Mounting에서 설정한 Listener를 없에줄 수 있다.

#### 함수 설명
* constructor
컴포넌트 생성자 함수입니다. 컴포넌트가 새로 만들어질 때마다 이 함수가 호출됩니다.

* componentWillMount <- 사라짐

* componentDidMount
외부 라이브러리 연동: D3, masonry, etc
컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등

Ex)
```
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect().height);
  }
  render() {
    return (
      <div ref={ref => (this.myDiv = ref)}>
        <h1>안녕하세요 리액트</h1>
      </div>
    );
  }
}

export default App;
```
위와 같이 this.myDiv.getBoundingClientRect().height의 값을 요청해올 수 있습니다.

* componentWillReceiveProps <- 사라짐

* static getDerivedStateFromProps()
return { value: nextProps.value }-> 반환값을 가지고 온다.

* shouldComponentUpdate
shouldComponentUpdate(nextProps, nextState) {
  // return false 하면 업데이트를 안함
  // return this.props.checked !== nextProps.checked
  return true;
} : 업데이트 막아줌

* componentWillUpdate <- 사라짐

* getSnapshotBeforeUpdate()
이 API 가 발생하는 시점은 다음과 같습니다.
1. render()
2. getSnapshotBeforeUpdate()
3. 실제 DOM 에 변화 발생
4. componentDidUpdate
이 API를 통해서, DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate 에서 3번째 파라미터로 받아올 수 있게 됩니다.
예제 코드 : https://codesandbox.io/s/484zvr87ow

* componentDidUpdate : 
업데이트가 된 후 상태에서 사용되는 함수

* componentWillUnmount : 
업데이트가 된 후 , 이벤트가 제거되는 경우에 사용하는 함수입니다.
주로 등록했었던 이벤트를 제거하고, 만약에 setTimeout 을 걸은것이 있다면 clearTimeout 을 통하여 제거를 합니다. 

* componentDidCatch : 
에러가 발생하면 이런식으로 componentDidCatch 가 실행되게 하고, state.error 를 true 로 설정하게 하고, render 함수쪽에서 이에 따라 에러를 띄워주시면 됩니다.
이 함수는 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들을 잡아낼 수 있습니다

Ex)
App.js 파일에선
```
import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 1,
    error: false
  };
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    // API를 통해서 서버로 오류 내용 날리기
  }
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    if (this.state.error) {
      return <div>에러가 났어요!</div>;
    }
    return (
      <div>
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me </button>
      </div>
    );
  }
}

export default App;

```

MyComponent.js에선
```
import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value 값이 바뀌었습니다.', this.props.value);
    }
  }

  componentWillUnmount() {
    console.log('Good Bye');
  }
  render() {
    return (
      <div>
        {/* {this.props.missing.somthing} */} <- 일부러 주석처리를 해주었습니다. Error확인용 코드
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;

```
로 작성하시면 예제들을 볼 수 있습니다.