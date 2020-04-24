# SoulMinWook
ctrl-z 팀원 설민욱 개인 과제 실습코드입니다.


#### TodoItemList.js에서 

todos: todo 객체들이 들어있는 배열
onToggle: 체크박스를 키고 끄는 함수
onRemove: 아이템을 삭제시키는 함수


#### TodoItem.js에서 

text: todo 내용
checked: 체크박스 상태
id: todo 의 고유 아이디
onToggle: 체크박스를 키고 끄는 함수
onRemove: 아이템을 삭제시키는 함수


#### 상태 관리하기

* 리덕스 정복하기 : https://velopert.com/3346

-> Form 기능 구현하기 부터 시작하기


#### Form 기능 구현하기

* 기능 구현할 것들 :
텍스트 내용 바뀌면 state 업데이트
버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기


#### App.js중 handleToggle함수 중

객체들이 들어있는 배열들을 업데이트 할 때마다 복사한다면 오버헤드가 발생하지 않을까? 라는 의문이 들 수도 있습니다. 하지만 걱정하지 않으셔도 됩니다. 전개연산자를 통하여 배열을 복사하는것은 deepCopy 가 아닌 shallowClone 이기 때문에, 내부의 객체 안에있는 내용들은 기존의 것들을 재사용합니다. 즉 n개의 원소가 들어있다면 O(n) 정도의 복잡도라는 것이죠. 따라서, 내부의 객체를 바꿔야 할 때는 바꿀 객체를 새로 지정하고 내부의 값을 복사해줘야합니다.


#### 컴포넌트 최적화

값을 입력할 때마다 render 함수가 실행되고 있기 때문에 최적화를 해주어야 합니다.
shouldComponentUpdate()로 리렌더링을 할 지 말지 결정해줍니다.

* TodoItem 컴포넌트 최적화도 동일하게 해줍니다.