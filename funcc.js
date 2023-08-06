const notificationIcon = document.querySelector('.notifications-icon-container');
const notificationBar = document.querySelector('.notification-bar');

notificationIcon.addEventListener('click', () => {
    notificationBar.classList.toggle('show');
});
