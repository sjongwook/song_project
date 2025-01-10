document.addEventListener('DOMContentLoaded', () => {
    const loginPopup = document.getElementById('login-popup');   // 팝업 창
    const popupOverlay = document.querySelector('.popup-overlay'); // 팝업 배경
    const closePopup = document.getElementById('close-popup');   // 닫기 버튼
    const loginTrigger = document.getElementById('login-button'); // 오른쪽 상단 로그인 버튼

    // 팝업 열기 함수
    function openPopup() {
        if (loginPopup) {
            loginPopup.style.display = 'flex'; // 팝업 표시
        }
    }

    // 팝업 닫기 함수
    function closePopupFunc() {
        if (loginPopup) {
            loginPopup.style.display = 'none'; // 팝업 숨김
        }
    }

    // 오른쪽 상단 로그인 버튼 클릭 시 팝업 열기
    if (loginTrigger) {
        loginTrigger.addEventListener('click', (event) => {
            event.preventDefault(); // 기본 동작 방지
            openPopup(); // 팝업 표시
        });
    }

    // 이미지 박스 클릭 시 팝업 열기
    const boxes = document.querySelectorAll('.box'); // 모든 박스 요소 선택
    boxes.forEach(box => {
        box.addEventListener('click', (event) => {
            event.preventDefault(); // 기본 동작 방지
            openPopup(); // 팝업 표시
        });
    });

    // 프롬프트 입력 제출 시 팝업 열기
    const promptInput = document.querySelector('input[type="text"]');
    promptInput?.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // 엔터 키 입력 시 팝업 열기
            event.preventDefault(); // 기본 동작 방지
            openPopup(); // 팝업 표시
        }
    });

    // 팝업 외부 클릭 시 닫기
    if (popupOverlay) {
        popupOverlay.addEventListener('click', closePopupFunc);
    }

    // 팝업 닫기 버튼 클릭 시 닫기
    if (closePopup) {
        closePopup.addEventListener('click', closePopupFunc);
    }
});
