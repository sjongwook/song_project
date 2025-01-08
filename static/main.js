document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button'); // 로그인 버튼
    const loginPopup = document.getElementById('login-popup');   // 팝업 창
    const closePopup = document.getElementById('close-popup');   // 닫기 버튼

    // 팝업 열기
    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'flex'; // 팝업 표시
    });

    // 팝업 닫기
    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none'; // 팝업 숨김
    });
});
