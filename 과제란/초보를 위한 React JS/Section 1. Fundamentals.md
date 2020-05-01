# :collision: Section 1. Fundamentals :collision:


array operation, arrow function, ... 필요한 것을 배울 것입니다.


#### Section 1.1 Arrow Function


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


