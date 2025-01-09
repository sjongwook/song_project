document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button'); // 로그인 버튼
    const loginPopup = document.getElementById('login-popup');   // 팝업 창
    const closePopup = document.getElementById('close-popup');   // 닫기 버튼
    const popupOverlay = document.querySelector('.popup-overlay'); // 팝업 배경

    // 팝업 열기
    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'flex'; // 팝업 표시
    });

    // 팝업 닫기 버튼
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            loginPopup.style.display = 'none'; // 팝업 숨김
        });
    }

    // 팝업 외부 클릭 시 닫기
    popupOverlay.addEventListener('click', () => {
        loginPopup.style.display = 'none'; // 팝업 숨김
    });
});
