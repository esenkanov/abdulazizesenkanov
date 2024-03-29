const btnDarkMode = document.querySelector('.dark-mode-btn')

// Сохранение темной темы
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// // Если меняютя системные настройки, меняем тему 
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () =>{
//     const newColorScheme = event.matches ? "dark" : 'Light';

//     if (newColorScheme === 'dark') {
//         btnDarkMode.classList.add("dark-mode-btn--active");
//         docement.body.classList.add("dark"); 
//     } else {
//         btnDarkMode.classList.remove("dark-mode-btn--active");
//         docement.body.classList.remove("dark"); 
//     }
// })

// Включение ночного режима по кнопке

btnDarkMode.onclick =function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "Light");
    }
}
