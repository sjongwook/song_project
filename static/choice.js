document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const savePreferences = document.getElementById('save-preferences');

    // 로컬 스토리지에서 첫 로그인 여부 확인
    const firstLogin = localStorage.getItem('firstLogin');

    // 첫 로그인일 경우만 welcome-screen 표시
    if (!firstLogin) {
        welcomeScreen.style.display = 'flex';
    }

    // '저장' 버튼 클릭 시
    savePreferences.addEventListener('click', () => {
        localStorage.setItem('firstLogin', 'false'); // 첫 로그인 완료 상태 저장
        welcomeScreen.style.display = 'none'; // 팝업 숨기기
    });
});
