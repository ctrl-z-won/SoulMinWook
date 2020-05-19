# :collision: Section 2. Project Setup :collision:


#### Section Setting 

Arrow 함수에는 return 함수가 내포되어 있다.
Function을 Anonymous Function로 만드는 데 좋습니다.

Ex)
```
const button = document.querySelector("button");

const handleClick = event => console.log(event);

button.addEventListener("click", handleClick);
```
```
const button = document.querySelector("button");

const handleClick = event => console.log(event);

button.addEventListener("click", function(event){
    console.log(event);
});
```
```
const button = document.querySelector("button");

button.addEventListener("click", event => console.log(event));
```
세 개 표현은 다르지만 같은 기능을 제공한다.


#### Section 1.2 Template Literals

```
const sayHello = (name) => "Hello" + name;
const sayHello = (name) => `Hello ${name}`;
```
두 개의 코드는 같다. ``로 써야 하는 규칙이 있습니다.


#### Section 1.3 Object Destructuring

1. Structuring 
구조체의 변수들과 설정하는 변수 간의 이름이 같으면 비효율적이다.
```
const human = {
    name: "Nico",
    lastName: "soul",
    nationality: "korea",
    favfood:{
        breakfast: "a",
        lunch: "b",
        dinner: "c"
    }
}

// const name = human.name;
// const lastName = human.lastName;
// const difName = human.nationality;

const { 
    name, 
    lastName, 
    nationality: difName, 
    favfood: {dinner, breakfast, lunch }
} = human;

console.log(name, lastName, difName, dinner, breakfast, lunch);
```
위 코드와 같이 구조체를 만들어주면 됩니다.
nationality: difName은 nationality를 difName으로 바꾸는 것이다.
favfood: {dinner, breakfast, lunch }는 favfood Object에서 중괄호 안에 있는 변수를 찾는 것이다.


#### Section 1.4 Spread operators

2. Spread operators

Spread Operator는 배열로부터 아이템을 가져와서 Unpack한다.
...을 사용해야 합니다.


#### Section 1.5 Classes

프로그래밍의 패러다임이라는 게 있는데 Functional Programming(함수형 프로그래밍)과 Object-Oriented Programming(OOP, 객체 지향 프로그래밍)이 있습니다.

Ex)
class Baby extends Human {
...
여기에서 보면 Human클래스에서 extends해서 Baby 클래스를 만듭니다.


#### Section 1.6 Array.map

map함수는 array에 있는 배열의 원소를 돌면서 반환해주는 함수를 의미합니다
```
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const addSmile = day => `${day}`;

const smileingDays = days.map(potato => console.log(potato))
const smileingDays_2 = days.map(potato => `${potato}`)
const smileingDays_3 = days.map(addSmile)
const smileingDays_4 = days.map((day, index) => `#${index + 1} ${day}`)

console.log(smileingDays);
console.log(smileingDays_2);
console.log(smileingDays_3);
console.log(smileingDays_4);
```
index는 배열 원소의 순서를 의미합니다.
map Function은 배열의 모든 Argument에 Function을 실행하고 그 결과값들로 이루어진 배열을 만듭니다.


#### Section 1.7 Array.filter

filter Function은 배열의 모든 요소에 Function을 실행하고 그 true를 return하는 요소로만 이루어진 배열을 만듭니다.
```
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let posts = ["Hi", "Hello", "Bye"]

const testcondition = (number) => number < 5;
const biggerThan5 = numbers.filter(number => number > 5);
const biggerThan5_2 = numbers.filter(testcondition);
posts = posts.filter(post => post !== "Bye")

console.log(biggerThan5);
console.log(biggerThan5_2);
console.log(posts);
```


#### Section 1.8 forEach, includes, push

```
let posts = ["Hi", "Hello", "Bye"]

let greetings = ["Hi", "Howdy", "Suup"]

posts.push("new")

posts.forEach(post => console.log(post))

if(!greetings.includes("Hello")){
    greetings.push("Hello");
}

console.log(greetings);
```
push는 배열 끝에 추가하는 함수입니다.
forEach는 함수에 각각에 대하여 적용시킵니다.
includes는 배열안에 해당 원소가 있는지 알아보는 함수입니다.
