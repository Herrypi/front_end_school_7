function add(x, y) {
    return x + y
}

add(1, 2)
function add(x, y) {
    return x - y
}

add(1, 2)
function add(x, y) {
    return x / y
}

add(1, 2)
function add(x, y) {
    return x * y
}

add(1, 2)

// 문제2: '10,000,000,00' 와 같은 문자를 입력받아 10000000000와 같이 컴마를 제거해라
function stringToNumber()
function deleteComma(str) {
    let answer = parseInt(str.replaceAll(',', ''))
    return answer
}


//문제 3: 입력된 문자열을 콘솔로 출력하고 입력된 문자열을 쪼개서 출력하는 함수
//입력 world
//출력 ['w','o','r','l','d']

function printAndSplit(str) {
    console.log(str)
    return str.split('')
}

//문제4: 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어라
//입력: 1, 2
//출력: (1 + 2) * (1 + 2) = 9

//풀이 1
function plusAndGob(x, y) {
    let sum = x + y
    let multiply = sum + sum
    return multiply
}

//풀이 2
function add(x,y) {
    return x + y
}

function addAndMultiply(x, y) {
    let sum = add(x, y) * add(x, y)
    return sum
}


//문제 5: x**2 + 4x - 12 를 구해주는 함수=
//입력: 3
//출력: 9 + 12 - 12 = 9

function calculate(x) {
    return x**2 + 4*x - 12
}