# :collision: Section 6. Input 상태 관리하기 :collision:

rsc + tab으로 하면 함수형으로 만들 수 있다.
rcc + tab으로 하면 컴포넌트형으로 만들 수 있다.

e.target.value이 가리키는건 <input />입니다.

state변수 설정은
```
state = {
        name: '',
        phone: '',
}
```
위와 같이 해줍니다.
```
<input placeholder="이름" onChange={this.handleChange} value={this.state.name}/>                
```
placeholder는 input앞에 보이는 이름을 얘기하고 value로 설정한 값에 onChange함수를 적용시킨다는 것을 의미합니다.

한 개의 input값을 관리하려면  
PhoneForm.js 파일에서
```
import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }
    handleChange = (e) =>{
        this.setState({
            name: e.target.value
        });
    }
    render() {
        return (
            <form>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                />
                {this.state.name}
            </form>
        );
    }
}

export default PhoneForm;
```
위와 같이 입력해줍니다.

두 개 이상의 input값을 관리하려면 
PhoneForm.js 파일에서
```
import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                />
                <input
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <div>   
                    {this.state.name} {this.state.phone}
                </div>
            </form>
        );
    }
}

export default PhoneForm;
```
위와 같이 입력해줍니다.

```
this.setState({
    [e.target.name]: e.target.value
});
```
위 코드에서 보면 [e.target.name]이라는 부분은 
input에서 name으로 지정된 id와 연결된 value를 입력받아줍니다.