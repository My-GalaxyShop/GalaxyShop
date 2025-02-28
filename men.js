function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'flex') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'flex';
    }
  }function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('show');}