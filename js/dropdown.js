// Кнопка для показа выпадающего списка
let button =  document.getElementById("myButton");
//Обработчик события при клике на кнопку
button.addEventListener('click', () =>{
    myFunction();
})
//Объявление функции отображения списка
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
