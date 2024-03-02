import './style.scss'
// console.log('4556') 
// console.log('kkkk')
    
// a = 25

// var a = 0 
// console.log(a)
// var a = 2
// console.log(a)

//создание переменной 
let newVar = 5
newVar = 5

// let noVal
// noVal = 'g'
// console.log(noVal)

// let theValue

//создание константы
// const DAY_IN_WEEK = 7
//ошибка не можем изменять константы
//DAY_IN_WEEK = 8

// const countedSum = a + newVar

console.log('10 + 5 =', 10+5)
console.log('10 - 5 =', 10-5)
console.log('10 * 5 =', 10*5)
console.log('10 / 5 =', 10/5)
console.log('10 ** 5 =', 10**5) //возведение в степень
console.log('10 % 5 =', 10%5) //остаток от деления
console.log('3 % 2 =', 3%2) //остаток от деления

// let userInput = prompt('Введите число', 10)
// console.log(userInput)
// console.log(typeof userInput)
// userInput = parseInt(userInput)
// console.log(userInput)
// console.log(typeof userInput)

// console.log('456')
// console.log(456)

// alert('Вы ввели' + userInput)

// Практика 1 
// задание 1
//Запросите у пользователя число, возведите это число во 2 степень и выведите а экран
// let num = parseInt(prompt('Введите число', 4))
// alert ('Ваше число возведенное во 2 степень' + num**2)

// ДЗ-1 
// задание 1
// Запросите у пользователя его имя и выведите в ответ:«Привет, его имя!».
// let name = prompt('Введите свое имя')
// alert ('Привет ' + name + '!')

// задание 2
// Запросите у пользователя год его рождения, посчитайте,сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
// var year_of_birth = Number(prompt('Укажите год своего рождения'));
// const this_year = Number(prompt('Какой сейчас год? '));
// alert('В текущем году вам будет' + (this_year - year_of_birth) + ' лет');

// задание 3
// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// let lengh_side = prompt('Введите сторону квадрата')
// alert ('Периметр квадрата равен' + 4 * lengh_side)

// задание 4
// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
// var radius = prompt('Введите радиус окружности')
// alert ('Радиус окружности равен ' + radius ** 2)

// задание 5
// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
//Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// var distance = prompt('Введите расстояние между городами ')
// var time = prompt('Введите за сколько часов вы хотите добраться ')
// alert ('Скорость, с которой вам необходимо двигаться ' + distance / time + 'км/ч')

// задание 6 
// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
// const rate = Number(prompt('Введите текущий курс доллара к евро: '));
// var dollar = Number(prompt('Введите количество долларов для обмена: '));
// alert("По текущему курсу при обмене вы получите " + dollar * rate + " евро");

console.log(typeof 12)
console.log(typeof 12.6)
console.log(typeof (12.6/0))
console.log(12.6/0)
console.log(parseInt('a'))
console.log(parseInt('12aaa'))
console.log(parseFloat('12.5aaa'))
console.log(+'12.5aaa')
console.log(+'12.5')
console.log(Number('12.5'))
console.log(String(12.5))
console.log(typeof '12')
console.log(typeof true)
console.log(typeof false)
console.log(typeof [])
console.log(typeof {})
console.log(typeof undefined)
let variable
console.log(variable)
console.log(null)
console.log(typeof alert)
console.log(typeof null)
console.log(typeof '')
console.log(`В этой строке мы сложим 2 числа ${newVar+5}`)
console.log('В этой строке мы сложим 2 числа ' + (newVar + 5) + '. Вот так')

// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253 - 1).
// bigint для целых чисел произвольной длины.
// string для строк.Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true / false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// symbol для уникальных идентификаторов.
// И один не является «примитивным» и стоит особняком:
// object для более сложных структур данных.

let num1 = 1
let num2 = 2
console.log(2 > 1)
console.log(num1 == num2)
console.log(num1 != num2)
console.log(num1 != 1)
console.log(num1 == 1)
console.log(num1 === 1)
console.log(1 === +'1')

console.log(+false)
console.log(+true)


// Все значения, которы станут false при преобразовании в boolean тип
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(false))

console.log('z' > 'Z')

console.log(null === undefined)
console.log(null == undefined)
console.log(null == null)

console.log(isNaN(NaN))
console.log(isNaN(1))


// let year = 2015
// let month = 1

// if (year == 2015) {
//   console.log('yes')
// }

// if (year==2015) {
//   console.log('yes')
// } else {
//   if (month==1) {
//     console.log('mo==1')
//   }
//   console.log('no')
// }

// if (year==2015) {
//   console.log('yes')
// } else if (year==2010) {
//   console.log('maybe')
// } else {
//   console.log('no')
// }

// let age = 18
// let message
// if (age>16) {
//   message='hello'
// } else {
//   message='too yang'
// }
// console.log(message)


// let value = prompt('Какое «официальное» название JavaScript?')
// if   (value == 'ECMAScript') {
//     console.log('true')
// } else {
//     console.log('false')
// }
  
// вывести '#' столько раз сколько указал поьзователь

// let start = 0
// let userInput = 1
// let text = ''
// while (start < userInput) {
//     text = text + '#'
//     start++
// }
// console.log(text) 


//Пользователь ввел число, а на экран вывелись все числа
//от введенного до 0
// userInput = 10
// text = ''
// while (userInput) {
//     text = text + userInput + '_'
//     userInput--
// }
// console.log(text)


//запросить  число и степень
// let num = 10
// let count = 3
// let result = 1
// while (count) {
//     result *= num
//     count--
// }
// console.log(result)


//запросить два числа т найти общие делители 
// let num1 = 416
// let num2 = 793
// text = ''
// let min = num1<num2 ? num1 : num2
// while(min) {
//     if (num1%min == 0 && num2%min == 0) {
//         text += min + '_'
//     }
//     min--
// }
// console.log(text)


