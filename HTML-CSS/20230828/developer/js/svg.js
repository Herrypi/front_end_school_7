//path 찾기
const path = document.querySelector('#path');

const openBtn = document.querySelector('.btn-open');
//path 전체길이 구하기
const pathLength = path.getTotalLength();

// path.style.strokeDasharray = 100 + " " + 100;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

//dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;


console.log('clientHeight', document.documentElement.clientHeight)
console.log('scrollHeight', document.documentElement.scrollHeight)

function scrollHandler() {
    const scrollTop = document.documentElement.scrollTop;

    //전체 스크롤의 길이
    const scrollHeight = document.documentElement.scrollHeight;

    //뷰포트의 높이
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);

    const drawLength = pathLength * scrollPercentage;


    path.style.strokeDashoffset = pathLength - drawLength;

    //button opacity 조절
    openBtn.style.opacity = scrollPercentage;

    if (scrollPercentage > 0.8) {
        openBtn.disabled = false;
    } else {
        openBtn.disabled = true;
    }
    // console.log(drawLength);
}
window.addEventListener('scroll', scrollHandler)

// console.log(pathLength)