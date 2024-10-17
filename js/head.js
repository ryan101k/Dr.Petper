// head.js
// 페이지 스크롤 이벤트를 감지하여 헤더의 크기를 조정하는 함수
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollTop = window.scrollY; // 스크롤된 거리 감지

    if (scrollTop > 50) {
        header.classList.add('scrolled'); // 50px 이상 스크롤 시 'scrolled' 클래스 추가
    } else {
        header.classList.remove('scrolled'); // 스크롤이 적으면 클래스 제거
    }
});


// 헤더와 새로운 헤더 요소 가져오기
const header = document.querySelector('header'); // 기존 헤더
const newHeader = document.querySelector('.new-header'); // 새로운 헤더
const homeBtn = document.querySelector('.home-btn'); // 새로운 헤더의 홈 버튼

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', () => {
    // 페이지 스크롤 위치가 100px 이상일 경우
    if (window.scrollY > 100) {
        header.style.transform = 'translateY(-100%)'; // 기존 헤더를 위로 사라지게 함
        newHeader.style.transform = 'translateY(0)'; // 새로운 헤더가 나타나게 함
    } else {
        header.style.transform = 'translateY(0)'; // 기존 헤더가 다시 나타나게 함
        newHeader.style.transform = 'translateY(-100%)'; // 새로운 헤더를 숨김
    }
});

// 새로운 헤더의 초기 위치를 화면 위쪽 밖으로 설정
newHeader.style.transform = 'translateY(-100%)';
newHeader.style.transition = 'transform 0.7s ease'; // 부드러운 전환 설정
header.style.transition = 'transform 0.7s ease'; // 기존 헤더도 부드럽게 전환

// 홈 버튼 클릭 시 페이지 맨 위로 스크롤
homeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드럽게 스크롤
    });
});