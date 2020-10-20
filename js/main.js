'use strict';

// Функция проверки введеного аргумента на число
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function botRundom(){
    let randomNumber = parseInt(Math.random() * 100),
        count = 10;
    // Функция отвечающая за ход игры
    function guessNumber() {
        if(count > 0){
            let userNumber = prompt('Отгадайте случайное число. Введите свой варианет от 1 до 100');
            if (isNumber(userNumber)) {
                userNumber = +userNumber;
                count--;
                if (userNumber > randomNumber) {
                    alert('Загаданное число меньше, у вас осталось ' +count+ ' попыток');
                } else if (userNumber < randomNumber) {
                    alert('Загаданное число больше, у вас осталось ' +count+ ' попыток');
                } else if (userNumber === randomNumber) {
                    let again = confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще раз?');
                    if(again === true){
                        botRundom();
                    } else {
                        alert('Было приятно с тобой играть.');
                        return again === false;
                    } 
                }
            } else {
                alert('Можно вводить только числа');
            }
            return guessNumber();
        } else {
            let again2 = confirm('У вас закончились поппытки! Хотите сыграть еще раз?');
            if(again2 === true){
                botRundom();
            } else {
                alert('Было приятно с тобой играть.');
                return;
            }
        }
    }

    // Функция узнет у пользователя, хочет он играть или нет.
    function startGame(){
        let start = confirm('Првивет. Это игра угадайка. Она задумала случайное число которое нужно отгадать. Попробуешь свои силы?');
        if(start === true){
            guessNumber();
        } else {
            alert('Игра окончена');
        }
    }
    startGame();
}
botRundom();
