# :collision: Section 7. 배열 데이터 렌더링 및 관리 :collision:

#### 배열에 데이터 삽입하기
자식 컴포넌트가 부모한테 값 전달하기
```
this.props.onCreate({
    name: this.state.name,
    phone: this.state.phone,
})
```
이거나 
```
this.props.onCreate({this.state})
```
위에 있는 코드랑 동일하다.


아래에 있는 부분에서 information을 바꾸기 위해서
```
state = {
    information: [],
}
handleCreate = (data) => {
    console.log(data);
}
```
아래와 같은 코드를 사용하면 안된다!
##### (이유 : 불변성을 유지해야 되기 때문이다.)
```
state = {
    information: [],
}
handleCreate = (data) => {
    this.state.information.push(data); 
    this.setState({
        information: this.state.information,
    })
}
```
아래와 같이 concat함수를 사용해서 데이터를 저장할 수 있도록 합니다.
```
state = {
    information: [],
  }
  handleCreate = (data) => {
    this.setState({
      information: this.state.information.concat(data),
    })
  }
```


* 고유한 값을 추가하고 싶으면 다음과 같은 방법을 사용하면 됩니다.

1. 아래와 같이 데이터를 추가합니다.
```
handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
}
```
2. id값을 선언하고 concat함수를 사용해서 추가해줄 수 있도록 합니다.
```
handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        name: data.name,
        phone: data.phone,
        id: this.id++
      })
    });
}
```
3. 위 코드와 같이 Object.assign함수를 사용해도 됩니다.
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


#### 배열 렌더링하기

JavaScript 배열 내장함수 map
용도 : 

아래에 있는 코드는 info라는 배열을 PhoneInfo Component로 변환시켜주고 {list}로 랜더링해줍니다.
```
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
```
아래 코드와 같이 PhoneInfoList data를 받아주면 입력값이 받아지는 것을 볼 수 있습니다.
-> 아래에 있는 코드는 App.js의 render부분입니다.
```
render(){
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
}
```

* 배열 렌더링.key 
key가 없다면 Update를 했을 때, 데이터가 비효율적으로 바뀌게 된다.
key가 있다면 key를 기준으로 데이터 수정이 일어나게 된다. DB의 PrimaryKey와 비슷한 역할을 한다.


#### 데이터 제거와 수정

불변성을 유지하면서 제거와 수정이 이루어줘야 한다.
데이터를 제거하려면 .slice 혹은 .filter 함수를 이용해줘야 합니다.
```
const numbers = [1,2,3,4,5];
number.slice(0,2).concat(numbers.slice(3,5));
```
->[1,2,4,5]가 나오게 됩니다.
```
const numbers = [1,2,3,4,5];
[
    ...numbers.slice(0,2),
    10,
    ...numbers.slice(3,5)
]
```
->[1,2,10,4,5]가 나오게 됩니다.

```
const numbers = [1,2,3,4,5];
number.filter(n => n !== 3);
```
->[1,2,4,5]가 나오게 됩니다.

* 꿀팁 : Window 유저분들은 ctrl을 누르고 해당 클래스 이름을 클릭하면 해당 클래스 파일로 이동합니다!

PhoneInfo.js 파일에서 handleRemove 함수를 구현하는 방법은

1. 아래와 같이 =>함수를 이용할 수 있습니다.
```
import React, { Component } from 'react';

class PhoneInfo extends Component {
    handleRemove = () =>{
        const {info, onRemove } = this.props;
        onRemove(info.id);
    }
    render() {
        const { name, phone,  id } = this.props.info;
        const { onRemove } = this.props;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={
                    () => { onRemove(id) }
                }>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;
```
2. 아래와 같이 this함수를 이용할 수 있습니다.
```
import React, { Component } from 'react';

class PhoneInfo extends Component {
    handleRemove = () =>{
        const {info, onRemove } = this.props;
        onRemove(info.id);
    }
    render() {
        const { name, phone, id } = this.props.info;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;
```
를 비교해봅시다!

#### 배열 안의 데이터 수정하기

데이터 수정은 .slice 혹은 .map함수를 이용해서 구현할 수 있습니다.

```
const numbers = [1,2,3,4,5];
numbers.map(n => {
    if(n === 3) {
        return 9;
    }
})
```
->[undefined, undefined, 9, undefined, undefined]라는 결과값이 나옵니다.
위와 같이 조건에 부합하면 데이터를 수정할 수 있습니다.

```
 handleToggleEdit = () =>{
        const { info, onUpdate } = this.props;
        if(this.state.editing){
            onUpdate(info.id, {
                name: this.state.name,
                phonr: this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone,
            })
        }
        this.setState({
            editing: !this.state.editing,
        })
}
```
true->false로 갈 땐, onUpdate함수를 
false->true로 갈 땐, state에 info값들을 넣어주는 함수입니다.
