const sayHello = (name) => "Hello" + name;

function sayHello2(name = "Human") {
    return "Hello " + name;
}
// javascript function 함수의 새로운 기능입니다.
const sayHello3 = (name = "Human") => "Hello" + name;

const nicolas = sayHello("Soul");
const nicolas2 = sayHello2("Soul2");
const nicolas3 = sayHello3();

console.log(nicolas);
console.log(nicolas2);
console.log(nicolas3);

const button = document.querySelector("button");

button.addEventListener("click", event => console.log(event));