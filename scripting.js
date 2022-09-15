document.querySelectorAll('a[href^="#"]').forEach(anquor =>{
    anquor.addEventListener('click', function (e) {
        e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView ({
    behavior: 'smooth'
        });
    });
});
