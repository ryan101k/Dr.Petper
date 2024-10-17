// 페이지 스크롤 이벤트 리스너
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const newHeader = document.querySelector('.new-header');
    const scrollTop = window.scrollY; // 스크롤 위치 확인

    // 스크롤 100px 이상일 경우
    if (scrollTop > 100) {
        header.style.transform = 'translateY(-100%)'; // 기존 헤더 숨기기
        newHeader.style.transform = 'translateY(0)';  // 새로운 헤더 나타내기
    } else {
        header.style.transform = 'translateY(0)';     // 기존 헤더 다시 보이기
        newHeader.style.transform = 'translateY(-100%)'; // 새로운 헤더 숨기기
    }
});

// 새로운 헤더 초기 설정
document.addEventListener('DOMContentLoaded', function() {
    const newHeader = document.querySelector('.new-header');
    newHeader.style.transform = 'translateY(-100%)'; // 페이지 로딩 시 새로운 헤더 숨김
    newHeader.style.transition = 'transform 0.7s ease'; // 부드러운 전환 효과
});

// 기존 헤더 전환 설정
const header = document.querySelector('header');
header.style.transition = 'transform 0.7s ease'; // 기존 헤더 전환 설정

// '맨위로' 버튼 클릭 시 페이지 상단으로 이동
const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드럽게 상단으로 스크롤
    });
});
