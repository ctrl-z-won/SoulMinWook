# :collision: Section 8. 최적화, 활용, Ref :collision:

#### 불변성을 왜 유지하는가? 

컴포넌트 업데이트 성능 최적화

vscode market에서 Reactjs code snippet 패키지를 깔면
shouldComponentUpdate는 scu로 입력하면 자동 완성이 이루어진다.

만약에 handleCreate함수를 
```
handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))
    });
}
```
위와 같이 setState메소드를 사용하지 않고 
```
handleCreate = (data) => {
    const { information } = this.state;
    this.state.information.push({ ...data, id: this.id++});
    this.setState({
      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))
    });
}
```
위와 같이 this.state.information.push를 사용하면 rerendering이 일어나지 않기 때문에 
this.state.information.push를 사용하면 안되고 setState메소드를 사용해야만 합니다.

* 불변성을 가져야 하는 이유 :

```
const array = [0,1,2];
const anotherArray = array;
array.push(3);
arrat === anotherArray;
```
를 하면 true가 나옵니다.

```
const array = [0,1,2];
const anotherArray = [...array, 3];
const anotherArray2 = array.concat(4);

array !== anotherArray;
array === anotherArray2;
```
를 하면 
array !== anotherArray => false;
array === anotherArray2 => true;
가 나옵니다.

```
const object = { a: 1, b: 2};
const anotherObject = {...object, c: 3};
object !== anotherObject;
```
를 하면 object !== anotherObject; => true가 나옵니다.

참고 사이트 : https://immutable-js.github.io/immutable-js/

코드 예제 : https://codesandbox.io/s/1xpzj13yl


* DOM에 접근 : Ref
Ref는 focusing을 하거나 특정 돔의 크기를 가지고 오거나 특정 돔의 스크롤 위치를 설정하거나 변수를 가질 때와 같이 직접적으로 접근해야 할 때 사용합니다.


1. PhoneForm.js 파일 안에 아래와 같은 코드를 입력해주면 handleSubmit메소드 안에 있는 함수 중에 this.input.focus()를 통해서 포커싱을 이동시켜줍니다.
```
import React, { Component } from 'react';

class PhoneForm extends Component {
    input = null
    state = {
        name: '',
        phone: '',
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
        this.input.focus();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    ref={ref =>this.input = ref}
                />
                <input
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;
```


2. React.createRef()를 이용해서 this.input.current.focus() => current값에 focusing을 해줄 수 있습니다.
```
import React, { Component } from 'react';

class PhoneForm extends Component {
    input = React.createRef();
    state = {
        name: '',
        phone: '',
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: '',
        });
        this.input.current.focus();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                    ref={this.input}
                />
                <input
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;
```