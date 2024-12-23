
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const buyButton = document.getElementById("buy");
const footer = document.querySelector("footer"); 

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        document.body.style.backgroundColor = '#2d4253'; 
        document.body.style.color = 'white'; 
        buyButton.style.color = 'white';
        footer.style.backgroundColor='#2d4253';
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        document.body.style.backgroundColor = 'black'; 
        document.body.style.color = 'white'; 
        buyButton.style.color = 'white';
        footer.style.backgroundColor='black';
    }
});

