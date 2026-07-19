// التقاط العناصر من واجهة الـ HTML
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// تفعيل ميزة فتح وإغلاق القائمة عند الضغط على الزر
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});