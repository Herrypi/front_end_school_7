//매개변수 없을때
const foo = () => {
    console.log("arrow function");
};

const foo1 = (x, y) => {
    return x + y;
};

// function foo() {
//     console.log("arrow function");
// }

foo();
console.log(foo1("arrow", " function"));