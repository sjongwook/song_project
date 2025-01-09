document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.music-player button');
    playButton.addEventListener('click', () => {
        alert('재생 버튼 클릭!');
    });
});
