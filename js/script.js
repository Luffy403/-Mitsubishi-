document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-block img');
    const leftBtn = document.getElementById('slide-left');
    const rightBtn = document.getElementById('slide-right');
    let currentIndex = 0;
        
    // Показываем первое изображение
    images[currentIndex].classList.add('block');
    images[currentIndex].classList.remove('none-block');
    images[currentIndex].style.opacity = '1';
    images[currentIndex].style.transform = 'translateX(0)';
        
    // Функция для переключения слайдов
    function showSlide(index) {
        // Скрываем все изображения
        images.forEach(img => {
            img.classList.remove('block');
            img.classList.add('none-block');
            img.style.opacity = '0';
            img.style.transform = 'translateX(100%)';
        });
            
        // Показываем текущее изображение
        images[index].classList.add('block');
        images[index].classList.remove('none-block');
        images[index].style.opacity = '1';
        images[index].style.transform = 'translateX(0)';
            
        // Анимация для предыдущего слайда (если нужно)
        if (index > 0) {
            images[index - 1].style.transform = 'translateX(-100%)';
        }
    }
        
    // Кнопка "Вправо"
    rightBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    });
        
    // Кнопка "Влево"
    leftBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    });
        
    // Автоматическая прокрутка (опционально)
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }, 6000);
});