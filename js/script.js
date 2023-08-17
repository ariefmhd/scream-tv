const navigationToggle = document.querySelector('.navigation-toggle');
const navigationList = document.querySelector('.navigation');

navigationToggle.addEventListener('click', () => {
  navigationList.classList.toggle('active');
});
