//forEach(콜백함수)
let arr = [10, 20, 30, 40, 50]
arr.forEach((value, index, array) => {
    console.log(value, index, array)
})

//문제 1: forEach를 사용해서 배열의 모든 요소를 더하는 코드를 작성하세요.

let data = [10, 20, 30, 40, 50]
let sum = 0
data.forEach(v => {
    sum += v
})
console.log(sum)

//문제 2: forEach를 사용해서 짝수 인덱스의 값을 모두 더하세요.
let data2 = [10, 20, 30, 40, 50];
let sum2 = 0;
data2.forEach((v, i) => {
    if (i % 2 === 0) {
        sum2 += v
    }
})
console.log(sum2)

//
let data3 = [10, '20', 30, '40', 50]
let sum3 = 0;
arr.forEach(v => {
    sum3 += parseInt(v)
})
console.log(sum3)

//https://school.programmers.co.kr/learn/courses/30/lessons/120835
let userInput = [3, 76, 24];
let sortValue = userInput.sort((a, b) => (b - a))

let userInput2 = [3, 76, 24];
let sortValue2 = [...userInput2].sort((a, b) => (b - a))
userInput2.forEach((v, i) => {
    userInput2[i] = sortValue2.indexOf(v) + 1
})
console.log(userInput2)

// 한글 풀이
// userInput = [3, 76, 24]라면 정렬된 후의 값은 [76, 24, 3]이 됩니다. 그렇다면 정렬된 후의 값에 3이 위치한 인덱스는 2가 됩니다. 76이 위치한 인덱스는 0이 됩니다. 24가 위치한 인덱스는 1이 됩니다.
// 그렇다면 userInput에 이 인덱스를 하나씩 지정합니다. 그러면 userInput은 [2, 0, 1]이 됩니다.
// 결과값을 보니 0번째는 없습니다. 따라서 여기에 1씩 더해줍니다. [3, 1, 2]가 됩니다.

//문제 5. 1부터 100까지 숫자 중 3의 배수만 더해주세요.
let sum4 = 0;
Array(100).fill(0).forEach((v, i) => {
    // if(v % 3 === 0){
    //     sum4 += i;
    // }
    i % 3 === 0 ? sum += i : null
})
console.log(sum4)

// 문제6. 아래와 같이 출력되게 해주세요.
// input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
// output = ['hojun is good', 'dongjun is good', 'dongwook is good', 'donggeun is good']

let input = ['hojun', 'dongjun', 'dongwook', 'donggeun']
let output = []

input.forEach(v => {
    output.push(`${v} is good`)
})

//문제 7. 010-5044-2903번호가 있었을 때 아래와 같이 출력되게 하세요
// 뒤에 2자리를 x로 바꾸어주세요
//input = 010-5044-2903
//output = 0xx-50xx-29xx

let input2 = '010-5044-2903'
let input3 = '010-4444-1234'

input2.split('-').forEach((v, i) => {
    console.log(v.replace(v.slice(-2), 'xx'))
})
//위에 풀이의 문제점 4444일 경우 앞에 두개가 xx처리됨
input3.split('-').forEach((v, i) => {
    console.log(v.replace(v.slice(-2), 'xx'))
})

//위에 문제 해결 방법
input3.split('-').forEach((v, i) => {
    if (v.length === 4) {
        console.log(v[0] + v[1] + 'xx')
    }
    else {
        console.log('0xx')
    }
})


//주의 사항
//forEach는 return을 사용할 수 없다.
[1, 2, 3].forEach(v => {
    console.log(v)
    return
})

[1, 2, 3].forEach(v => {
    return//뒤에 코드를 무시하는 코드로 사용 가능
    console.log(v)
})

// forEach는 break, continue를 사용할 수 없다.