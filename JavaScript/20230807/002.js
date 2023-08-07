jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

const avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());

let data = ['a', 'z', 'b', 'e'];
data.sort();
//a, b,e,z -> 사전식 정렬로 정렬이 이렇게 됨

let num = [1, 11, 2, 22];
num.sort();
//1, 11, 2, 22 사전식 정렬이라 문자로 인식하기 때문에 이렇게 정렬됨

num.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0)))
//-> 22, 11, 2, 1

num.sort((a, b) => (a < b ? -1 : (a < b ? 1 : 0)))
//-> 1, 2, 11, 22


//자주 사용하는 코드
let value = [1, 11, 2, 111, 22];
value.sort((a, b) => (a - b));
//(5) [1, 2, 11, 22, 111]
value.sort((a, b) => (b - a));
//(5) [111, 22, 11, 2, 1]


const test = [13, 9, 10];
test.sort(function (a, b) {
    console.lpog('a: ' + a, 'b: ' + b);
})

// 원리
// let test = [13, 9, 10, 2];
test.sort((a, b) => {
    console.log(a, b)
})
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// 9 13
// 10 9
// 2 10

// let test = [13, 9, 10, 2];
test.sort((a, b) => {
    console.log(a, b)
    console.log(a - b) // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
});

// let test = [13, 9, 10, 2];
test.sort((a, b) => {
    return a - b; // 작은 값이 앞으로 간다 => 오름차순
})