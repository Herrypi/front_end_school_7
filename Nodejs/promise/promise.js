//promise 구문
function sayHello() {
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello";
        resolve(hello);
        // reject(new Error());
    })
}

//async await 구문 
async function test() {
    const hello1 = await sayHello();
    console.log(hello1)
}

test();


// sayHello()
// .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;

// })
// .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
// })
// .then((resolvedData) => {
//     console.log(resolvedData);
// })
// .catch((error) => {
//     console.log(error);
// })
