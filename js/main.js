// 메인페이지 js
// 2024-10-17

// 병원 정보 로드
document.addEventListener('DOMContentLoaded', () => {
    loadHospitalData();
    loadNotices();
    loadQuestions();
});

function loadHospitalData() {
    // AJAX 또는 Fetch API로 병원 정보를 가져오고 페이지에 렌더링
    fetch('/api/hospitals')
        .then(response => response.json())
        .then(data => {
            const hospitalList = document.getElementById('hospital-list');
            data.forEach(hospital => {
                const hospitalItem = document.createElement('div');
                hospitalItem.innerHTML = `
                    <h3>${hospital.NAME}</h3>
                    <p>주소: ${hospital.STREET_ADDRESS}</p>
                    <p>전화번호: ${hospital.TEL}</p>
                `;
                hospitalList.appendChild(hospitalItem);
            });
        });
}

function loadNotices() {
    // 공지사항 데이터를 가져와서 목록으로 표시
    fetch('/api/notices')
        .then(response => response.json())
        .then(data => {
            const noticeList = document.getElementById('notice-list');
            data.forEach(notice => {
                const listItem = document.createElement('li');
                listItem.textContent = `${notice.TITLE} - ${notice.CREATED_DATE}`;
                noticeList.appendChild(listItem);
            });
        });
}

function loadQuestions() {
    // 질문 데이터를 가져와서 목록으로 표시
    fetch('/api/questions')
        .then(response => response.json())
        .then(data => {
            const questionList = document.getElementById('question-list');
            data.forEach(question => {
                const questionItem = document.createElement('div');
                questionItem.innerHTML = `
                    <h3>${question.TITLE}</h3>
                    <p>${question.CONTENT_TXT}</p>
                `;
                questionList.appendChild(questionItem);
            });
        });
}

//페이지 이동기능 url 받아서 이동
function redirectToPage(url) {
    window.location.href = url;
}