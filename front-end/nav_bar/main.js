// html에 있는 클래스를 js에 연결 시켜 저장
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

// // toggleBtn이 클릭될 때마다 지정된 함수(이벤트)를 호출
toggleBtn.addEventListener('click', () => {
    // active 클래스 toggling
    // 버튼이 클릭될 때 메뉴와 아이콘에 active가 없다면 빼주고 있다면 추가하기
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
