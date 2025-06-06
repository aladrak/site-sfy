(function() {
    const header = document.querySelector('header');
    if (header) {
        const navContainer = document.createElement('div');
        navContainer.className = 'nav-container';
        // Для телефона
        const burgerMenu = document.createElement('div');
        burgerMenu.className = 'burger-menu';
        const burgerBtn = document.createElement('button');
        burgerBtn.innerHTML = '&#9776;'; // Иконка "≡"
        burgerMenu.appendChild(burgerBtn);

        // const sep = document.createElement('div');
        // sep.className = 'line';

        // Кнопки
        const navButtons = [
            { text: 'Главная', href: 'index.html' },
            // { text: 'Рестораны и кафе', href: 'index.html' },
            // { text: 'Продуктовые магазины', href: 'index.html' },
            { text: 'Найти магазины', href: 'search.html' }
            // { text: 'Магазины для хобби', href: 'index.html' },
            // { text: 'Контакты', href: 'index.html' }
        ];
        const btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';

        navButtons.forEach(button => {
            const navButton = document.createElement('button');
            navButton.type = 'button';
            navButton.className = 'nav-button';
            navButton.innerHTML = `<h3>${button.text}</h3>`;
            navButton.onclick = () => window.location.href = button.href;
            btnContainer.appendChild(navButton);
        });

        // const themeBtn = document.createElement('button');
        // themeBtn.id = 'theme-toggle';

        burgerMenu.onclick = () => btnContainer.classList.toggle('active');
        // navContainer.appendChild(sep);
        navContainer.appendChild(burgerMenu); // Для телефона
        navContainer.appendChild(btnContainer);
        // navContainer.appendChild(themeBtn);
        header.appendChild(navContainer);
    }
})();