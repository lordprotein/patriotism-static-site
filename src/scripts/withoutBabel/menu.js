const toggleDisplayMenu = menu_btn => {
    const menu = menu_btn.parentElement.nextElementSibling;

    if (!menu.matches('.sidebar')) return;

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
    else {
        menu.classList.add('show');
    }
}


const handleMenu = () => {
    const menu_btn = document.querySelector('.sidebar_btn');

    const width = document.documentElement.scrollWidth;

    if (width > 800) return;
    
    menu_btn.addEventListener('click', () => toggleDisplayMenu(menu_btn));
}

handleMenu();