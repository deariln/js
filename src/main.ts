import './style.scss'
// import axios from 'axios'
// console.log('4556') 
// console.log('kkkk')
    
// a = 25

// var a = 0 
// console.log(a)
// var a = 2
// console.log(a)

//создание переменной 
// let newVar = 5
// newVar = 5

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
// console.log(`В этой строке мы сложим 2 числа ${newVar+5}`)
// console.log('В этой строке мы сложим 2 числа ' + (newVar + 5) + '. Вот так')

// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253 - 1).
// bigint для целых чисел произвольной длины.
// string для строк.Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true / false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// symbol для уникальных идентификаторов.
// И один не является «примитивным» и стоит особняком:
// object для более сложных структур данных.

// let num1 = 1
// let num2 = 2
// console.log(2 > 1)
// console.log(num1 == num2)
// console.log(num1 != num2)
// console.log(num1 != 1)
// console.log(num1 == 1)
// console.log(num1 === 1)
// console.log(1 === +'1')

// console.log(+false)
// console.log(+true)


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


let year = 2015
let month = 1

if (year == 2015) {
  console.log('yes')
}

if (year==2015) {
  console.log('yes')
} else {
  if (month==1) {
    console.log('mo==1')
  }
  console.log('no')
}

if (year==2015) {
  console.log('yes')
} else if (year==2010) {
  console.log('maybe')
} else {
  console.log('no')
}

// let age = 18
// let message
// if (age>16) {
//   message='hello'
// } else {
//   message='too yang'
// }
// console.log(message)


// переменная = (условие) ? Значение, которое присвоится в случае истинности условия : Значение, которое присвоится в случае ложности условия
// const isThursday = new Date().getDate() == 22 ? true : false
// console.log(isThursday)

let x = '1'
switch (x) {
  case '1':  // if (x === '1')
    console.log('x=1')
    break
  case '2':  // if (x === '2')
    console.log('x=2')
    break
  default:
    console.log('x не 1 и не 2')
}

console.log(true || true)   
console.log(false || true)  
console.log(true || false)  
console.log(false || false)

// Оператор || выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение.Если результат true, останавливается и возвращает исходное значение этого операнда.
// Если все операнды являются ложными(false), возвращает последний из них.
console.log(0 || 0 || 'gfdg' || 0)
console.log(0 || 0 || 0 || null)

let aStr = ''
let bStr = 'Default'

aStr ||= bStr
aStr = aStr ? aStr : bStr
console.log(aStr)

console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)

// Оператор && выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение.Если результат false, останавливается и возвращает исходное значение этого операнда.
// Если все операнды были истинными, возвращается последний.
// Другими словами, И возвращает первое ложное значение.Или последнее, если ничего не найдено.

console.log(1 && 11 && 'gfdg' && 'sdf')
console.log('' && 0 && 0 && null)

aStr = 'Hello'

aStr &&= aStr + ' user'
aStr = aStr ? aStr + '!' : aStr
console.log(aStr)

// Оператор ! принимает один аргумент и выполняет следующие действия:

// Сначала приводит аргумент к логическому типу true / false.
// Затем возвращает противоположное значение.

console.log(!true)
console.log(!false)
console.log(!!1)
console.log(Boolean(1))
console.log(!!0)
console.log(Boolean(0))

// while (условие) {
   // код
   // также называемый "телом цикла"
// }

// Цикл с предусловием
// let i = 0
// while (i<5) {
//   i++
//   console.log(i)
// }

// Цикл с постусловием
// i = 0
// do {
//   i++
//   console.log(i)
// } while(i<0)

// for (начало; условие; шаг) {
  // ... тело цикла ...
  // }
  
for (let i=3; i < 5; i++ ) {
  if (i==3) continue
  console.log(i)
  break
}

// break - выход из цикла
// continue - переход на следующую итерацию без выполнения оставшегося тела цикла

for (let x=0; x<2; x++) {
  for (let y=0; y<2; y++) {
    console.log(`(x:${x}, y:${y})`)
  }
}

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


//Пользователь ввел число, а на экран вывелись все числа от веденного до 0
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


//запросить два числа и найти общие делители 
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


// ДЗ-2 
// задание 1
//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым
//(18_60) или пенсионером (60– ...).

// let age = 2
// let message
// if (age <= 11) {
//     message = 'Вы ребенок'
// } else if (age <= 18) {
//     message = 'Вы подросток'
// } else if (age < 60) {
//     message = 'Вы взрослый'
// } else {
//     message = 'Вы пенсионер'
// }
// console.log(message)

// задание 2
//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!,
//2–@, 3–# и т. д).

// let number = prompt('Введите число')
// if (number == '0') {
//   alert(')')
// } else if (number == '1') {
//   alert('!')
// } else if (number == '2') {
//   alert('@')
// } else if (number == '3') {
//   alert('#')
// } else if (number == '4') {
//   alert('$')
// } else if (number == '5') {
//   alert('%')
// } else if (number == '6') {
//   alert('^')
// } else if (number == '7') {
//   alert('&') 
// } else if (number == '8') {
//   alert('*')
// } else if (number == '9') {
//   alert('(')
// }

// задание 3 
// Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
// const num = 588
// const arr = num.toString
// let a = arr[0]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     a = arr[i]
//   } else {
//     console.log('в числе цифры повторяются')
//     break
//   }
//   if (a === arr[i + 1]) {
//     console.log('в числе цифры повторяются')
//     break
//   }
//   if(arr[i] === arr[i + 2]) {
//     console.log('в числе цифры повторяются')
//   }
// }

// задание 4 
//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и
//при этом не кратен 100

//Практика 4
// задание 1
//Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
// function minNumber(num1, num2) {
//    if (num1>num2) {
//     return num2
//    } else {
//     return num1
//    }
// }
// console.log(minNumber(3,5))

//Задание 2 - Написать функцию, которая возводит переданное число в указанную степень.
// function number(a,b)  {
//   return a**b
// }
// console.log(number(2,2))

//Задание 3 - Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
// function result(number1,number2,sign) {
//   if (sign ==='+') {
//   return number1 + number2
//   } else if (sign === '-') {
//     return number1 - number2
//   } else if (sign === '*') {
//     return number1 * number2
//   } else if (sign ==='/') {
//     return number1 / number2
//   }
// }
// console.log(result(4,3, '+'))
// console.log(result(5,4, '-'))
// console.log(result(2,2, '*'))
// console.log(result(6,2, '/'))

//Задание 4 - Написать функцию, которая проверяет, является ли переданное ей число простым.

// function primeNum (num) {
//   if (num <= 1) {
//     return false
//   }
//   for (let i =2; i< num; i++) {
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }
// console.log(primeNum(5))
// console.log(primeNum(10))


// Практика 5 
// Написать функцию, которая выводит переданное ей число задом наперед.
//Например: число 1234 вывести как 4321
// function getReverseNumber (n: number):number {
//   if (n<10) {
//    return n
//   } else {
//    return + ( n%10 + '' + getReverseNumber(Math.floor(n/10)))
//   }
// }

// console.log(getReverseNumber(1234))

//4
//Написать функцию, которая считает сумму цифр числа.
//Например: число 1357, сумма 1 + 3 + 5 + 7 = 16
// function getSumDigits (n: number):number {
//   if (n < 10) {
//     return n
//   } else {
//     return n % 10 + getSumDigits(Math.floor(n/10))
//   }
// }
// console.log(getSumDigits(1357))

//5 
//Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок.
//Например: число 4 – (((()))).
// function getBracketsPairsByNum (n: number):string{
//   if (!n) {
//     return '()'
//   } else {
//     return '(' + getBracketsPairsByNum(n-1) + ')'
//   }
// }
// console.log(getBracketsPairsByNum(4))

//1
//Написать функцию, которая вычисляет факториал заданного числа.
// function factorial (n: number): number {
//   if (n===0) {
//     return 1 
//   } else {
//     return n * factorial(n-1)
//   }
// }
// console.log(factorial(3))


// ДЗ 5 задание 1
// Написать функцию возведения числа в степень.
// function degree (n:number, x:number):number {
//   if (n==0) {
//     return 1
//   } else {
//     return n ** x
//   }
// }
// console.log(degree(4,4))

const object = {
  b:2,
  d:1,
  C:1,
  'a':12,
  1:'sdfs',
  obj: {
    z:888
  },
  'two words': 'fsdf',
} as Record<string, any>

object.newProp = 15
console.log(object)
// Можем получить доступ к значению ключа через квадраьные скобки и занчение ключа строкой
// ?так мы можем получить любое значение (даже если ключ число или состоит из нескольких слов)
console.log(object['1'])
console.log(object['obj'])
console.log(object['obj'].z)


// Можем получить доступ к значению ключа через точку и имя ключа 
// ! выдаст ошибку, если ключ число или состоит из нескольких слов
console.log(object.b)
console.log(object.two)
// Опциональная цепочка
// ? Позволяет обращаться к вложенным ключам без ошибки, даже если значение не установлено
console.log(object.obj1)
console.log(object.obj1?.z)

try {
  object.obj1.z
} catch(e:any) {
  console.log(e.message)
}

console.log(object['two words'])
delete object['two words']
delete object.a
for (let key in object) {
  console.log(key)
  console.log(object[key])
}


{

  let a=1
  let b=a
  console.log(a,b)
  a++
  console.log(a,b)
  console.log(a==b)
  
  const obj1 = {a:1}
  const obj2 = obj1
  const obj3 = {...obj1}

  console.log(obj1, obj2, obj3)
  obj1.a++
  console.log(obj1, obj2, obj3)
  console.log(obj1 == obj2)
  // @ts-ignore
  console.log({} == {})
  // @ts-ignore
  console.log({a:1} == {a:1})


}

//дз2.2
//Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необ-
//ходимое количество и куплен или нет.

// type product = {
//   name: string,
//   count: number,
//   purchased: boolean,
// }


// const buyList:product [] = [
//  { name: 'яблоко', count: 3, purchased: true},
//  { name: 'молоко', count: 1, purchased: false},
//  { name: 'мука', count: 2, purchased: false},
//  { name: 'макароны', count: 5, purchased: false},
//  { name: 'кофе', count: 2, purchased: true}
// ]

//1 Вывод всего списка на экран таким образом, чтобы сначала
//шли некупленные продукты, а потом – купленные.
// const buyListOL = document.getElementById('buyList') as HTMLOListElement

// function renderBuyList (arr: product[]) {
//   let html = ''
//   for (let el of arr) {
//     if (!el.purchased) {
//       html += `<li style="color:red">${el.name} ${el.count} <button data-name="${el.name}">Отметить купленным</button></li>`
//     }
//   }
//   for (let el of arr) {
//     if (el.purchased) {
//       html += `<li style="color:green">${el.name} ${el.count}</li>`
//     }
//   }
//   buyListOL.innerHTML = html
// }

// renderBuyList(buyList)

// 2 Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необ-
//ходимо увеличивать количество в существующей покупке,
//а не добавлять новую.

// const productNameInput = document.getElementById('productName') as HTMLInputElement
// const productCountInput = document.getElementById('productCount') as HTMLInputElement
// const addProductButton = document.getElementById('addProduct') as HTMLButtonElement

// function addToBuyList(arr:product[], name:string, count:number) {
//   let inList = false
//   for (let el of arr) {
//     if (el.name == name && !el.purchased) {
//       el.count+=count
//       inList = true
//     }
//   }
//   if (!inList) {
//     arr.push({name, count, purchased:false})
//   }
//   renderBuyList(arr)
// }
// addToBuyList(buyList, 'мука', 2)

// addProductButton.addEventListener('click', function() {
//   const count = parseFloat(productCountInput.value.replace(',', '.'))
//   addToBuyList(buyList, productNameInput.value, count)
//   productNameInput.value = ''
//   productCountInput.value = ''
// })

//3 Покупка продукта. Функция принимает название продукта
//и отмечает его как купленный.

// const setBuyedButton = document.getElementById('setBuyed') as HTMLButtonElement

// function setBuyed(arr: product[], name: string) {
//   for (let el of arr) {
//     if (el.name == name) {
//       el.purchased = true
//     }
//   }
//   renderBuyList(arr)
// }

// setBuyed(buyList, 'мука')

// setBuyedButton.addEventListener('click', function() {
//   setBuyed(buyList, productNameInput.value)
//   productNameInput.value = ''
//   productCountInput.value = ''
// })

// buyListOL.addEventListener('click', function(e) {
//   const target = e.target as HTMLElement
//   if (target.tagName == 'BUTTON' && target.dataset.name) {
//     setBuyed(buyList, target.dataset.name)
//   }
// })

//Задание 2
//Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
//единицу товара. Написать следующие функции.

// type check = {
//   name: string,
//   count: number,
//   price: number,
// }
//  const descriptionCheck: check[] = [
//   {name: 'стол', count: 1 , price: 5000},
//   {name: 'стакан', count: 2, price: 200 },
//   {name: 'сахар', count: 2 , price: 60 },
//   {name: 'конфеты', count: 3, price: 400 }, 
//   {name: 'яблоко', count: 5, price: 200 },
//  ]

// 1 Распечатка чека на экран.

// const descriptionCheckOL = document.getElementById('descriptionCheck') as HTMLOListElement

// function printCheck(arr: check[]) {
//   let html = ''
//   for (let el of arr) {
//     html += `<li>${el.name} ${el.count} ${el.price}</li>`
//   }
//   descriptionCheckOL.innerHTML = html
// }

// printCheck(descriptionCheck)

// //2.Подсчет общей суммы покупки.

// function sumCheck(arr:check[]) {
//   let sum = 0
//   for (let el of arr) {
//     console.log(el)
//     sum += el.price * el.count
//   }
//   return sum
// }
// console.log(sumCheck(descriptionCheck))

//3.Получение самой дорогой покупки в чеке.

// function maxPriceCheck(arr: check[]) {
//   let max = 0
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].count * arr[i].price > max) {
//       max = arr[i].count * arr[i].price
//     }
//   }
//   return max
// }
// console.log(maxPriceCheck(descriptionCheck))

//4.Подсчет средней стоимости одного товара в чеке.

// function averageCheck(arr: check[]) {
//   return sumCheck(arr) / arr.length
// }
// console.log(averageCheck(descriptionCheck))


// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10

function getNum() {
  const arr: number[] = []
  for (let i = 0; i < 10; i++) {
    arr.push(i)
  }
  return arr
}

console.log(getNum())


// 1.2.  Добавить в функцию параметры опциональные параметры начального и конечного значения массива
//     (если конечный элемент массива не передат, то он больше нечального на 10) . Вызвать функцию несаколько раз
function numbers (start=0,end=start+10) {
 return {
  start,end
 }
}
console.log(numbers (3,5))
console.log(numbers (3))
console.log(numbers (5,10))
// 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве

// 2.1. В файле html создать пустой div с произвольным id
// 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement
// const myObj = document.getElementById('obj') as HTMLDivElement
// console.log(myObj)
// 2.3. Вывесли в полученный div текст, "Привет, пользователь"
// myObj.innerHTML = 'Привет, пользователь!'
// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.

// Есть массив объектов

// type employees = {
//   name: string,
//   department: string,
//   salary: number,
// }

// const employees = [
//   { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
//   { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
//   { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
//   { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
//   { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
//   { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
//   { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
//   { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
// ]

// function showEmployees(arr: employees[], i = -1) {
//   if (i > -1 && i < arr.length) {
//     myObj.innerHTML = 'Привет, ' + arr[i].name + '!'
//   } else {
//     myObj.innerHTML = 'Привет, пользователь'
//   }
// }
// showEmployees(employees, 4)


// Все функции вызывать несколько раз с разными параметрами
// 2.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)

// function uniqueDepartment(arr: employees[]) {
//   const unique: string[] = []
//   for (let el of arr) {
//     if (!unique.includes(el.department)) {
//       unique.push(el.department)
//     }
//   }
//   return unique
// }
// console.log(uniqueDepartment(employees))

// 2.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием

// function sortEmployees(arr: employees[], key: 'name' | 'department' | 'salary') {
//   return arr.sort((a, b) => {
//     if (a[key] > b[key]) return 1
//     if (a[key] < b[key]) return -1
//     return 0
//   })
// }
// console.log(sortEmployees(employees, 'name'))
// console.log(sortEmployees(employees, 'department'))
// console.log(sortEmployees(employees, 'salary'))


// 2.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке
// function sortReversEmployees(arr: employees[], key: 'name' | 'department' | 'salary') {
//   return arr.sort((a, b) => {
//     if (a[key] < b[key]) return 1
//     if (a[key] > b[key]) return -1
//     return 0
//   })
// }
// console.log(sortReversEmployees(employees, 'name'))
// console.log(sortReversEmployees(employees, 'department'))
// console.log(sortReversEmployees(employees, 'salary'))


// 2.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined

// function listEmployees(arr: employees[], name: string) {
//   for (let el of arr) {
//     if (el.name == name) {
//       return el
//     }
//   }
//   return undefined
// }
// console.log(listEmployees(employees, 'Крылов Богдан Максимович'))

// 2.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела
// function newArr(arr: employees[], department: string) {
//   return arr.filter((el) => el.department == department)
// }
// newArr(employees, 'ads')
// console.log(newArr(employees, 'ads'))

// 2.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

// function paymentEmployees(arr: employees[]) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].salary
//   }
//   return sum
// }
// console.log(paymentEmployees(employees))
// console.log(paymentEmployees(newArr(employees, 'ads')))
// console.log(paymentEmployees(newArr(employees, 'prog')))
// console.log(paymentEmployees(newArr(employees, 'disign')))


// Все функции вызывать несколько раз с разными параметрами
// 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
// deps.includes
// [ads, prog, disign]

// function uniqueDep(arr: employees[]) {
//   const unique: string[] = []
//   for (let el of arr) {
//     if (!unique.includes(el.department)) {
//       unique.push(el.department)
//     }
//   }
//   return unique
// }
// console.log(uniqueDep(employees))//Задание дублируется с 2.1


// 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
// Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием
// function sortEmpl(arr, key: 'name' | 'department' |'salary') {
// }

// function sortEmpl(arr: employees[], key: 'name' | 'department' | 'salary') {//дубль 2.2 + localeCompare
//   if (key == 'name' || key == 'department') {
//     arr.sort((a, b) => a[key].localeCompare(b[key]))
//   } else {
//     arr.sort((a, b) => a[key] - b[key])
//   }
// }
// sortEmpl(employees, 'name')
// sortEmpl(employees, 'department')
// sortEmpl(employees, 'salary')

// 3.3. Написать функцию, аналогичную описанной в задании 3.2., но сортирующую в обратном порядке

// function sortBackEmpl(arr: employees[], key: 'name' | 'department' | 'salary') {
//   sortEmpl(arr, key)
//   arr.reverse()
// }
// sortBackEmpl(employees, 'name')
// sortBackEmpl(employees, 'department')
// sortBackEmpl(employees, 'salary')

// 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined

// function listNewEmployees(arr: employees[], name: string) {
//   for (let el of arr) {
//     if (el.name == name) {
//       return el
//     }
//   }
//   return undefined
// }
// console.log(listNewEmployees(employees, 'Крылов Богдан Максимович'))

// 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела

// function newArrEmp(arr: employees[], department: string) {
//   return arr.filter((el) => el.department == department)
// }
// newArr(employees, 'ads')
// console.log(newArrEmp(employees, 'disign'))

// 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

// function paymentNewEmployees(arr: employees[]) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].salary
//   }
//   return sum
// }
// console.log(paymentNewEmployees(employees))
// console.log(paymentNewEmployees(newArr(employees, 'ads')))
// console.log(paymentNewEmployees(newArr(employees, 'prog')))
// console.log(paymentNewEmployees(newArr(employees, 'disign')))

// 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.

// const myButton = document.getElementById('myBut') as HTMLDivElement
// console.log(myButton)

// 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат
// const sumSalary = document.getElementById('sumSal') as HTMLDivElement
// function conclusionList(arr: employees[]) {
//   let html = '<ul>'

//   for (let el of arr) {
//     html += `<li>${el.name} ${el.department} ${el.salary}</li>`
//   }
//   sumSalary.innerHTML = `${html}</ul><div>Sum ${paymentNewEmployees(arr)}</div>`
// }
// console.log(conclusionList(employees))

// 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
// использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"
// const buttonAds = document.getElementById('butAds') as HTMLDivElement

// function renderButtons(arr: string[]) {
//   let html = ''
//   for (let dep of arr) {
//     html += `<button style="background-color: black; width: 80px; color: white; border-color: black; border-width: 5px;
//     margin-left: 20px; margin-bottom: 5px;" data-dep="${dep}">${dep.toUpperCase()}</button>`
//   }
//   html += `<button style="background-color: black; width: 80px; color: white; border-color: black; border-width: 5px;
//   margin-left: 20px; margin-bottom: 5px;" data-dep="all">ALL</button>`
//   buttonAds.innerHTML = html
// }

// renderButtons(uniqueDep(employees))

// 3.10. Используя div, полученный в задании 3.7
// buttonAds.addEventListener('click', function (e) {
//   const target = e.target as HTMLElement
//   if (target.tagName == 'BUTTON' && target.dataset.dep) {
//     if (target.dataset.dep == 'all') {
//       conclusionList(employees)
//     } else {
//       conclusionList(newArrEmp(employees, target.dataset.dep))
//     }
    // в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
    // в div (3.8) выводить сумму зарплат
//   }
// })
// function renderText(mass: ({ color: string; width?: undefined; height?: undefined; 'font-size'?: undefined; 'text-align'?: undefined } | { width: string; color?: undefined; height?: undefined; 'font-size'?: undefined; 'text-align'?: undefined } | { height: string; color?: undefined; width?: undefined; 'font-size'?: undefined; 'text-align'?: undefined } | { 'font-size': string; color?: undefined; width?: undefined; height?: undefined; 'text-align'?: undefined } | { 'text-align': string; color?: undefined; width?: undefined; height?: undefined; 'font-size'?: undefined })[], arg1: string) {
//   throw new Error('Function not implemented.')
// }
// console.log(renderText)


  

//ПРАКТИКА строки 2.3
//1 Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
//строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
//одинаковой длин

function acceptStr (str1: string, str2: string) {
  for(let i=0; i < str1.length && str2.length; i++) {
    if (str1.length>str2.length) {
      return 1
    } else if (str2.length > str1.length) {
      return -1
    } else (str1.length == str2.length) 
      return 0
  } 
}
console.log(acceptStr('да','нет'))

//2 Написать функцию, которая переводит в верхний регистр
//первый символ переданной строки.

function upperString(str: string) {
  for (let i = 0; i < str.length; i++)
    return str
}
console.log(upperString('привет'[0].toUpperCase()))

//3 Написать функцию, которая считает количество гласных
//букв в переданной строке.

function findVowels (str:string) {
  let vowels = 'aioyueAYUIOE'
  let count= 0
  for ( let i =0; i < str.length; i++ ) {
    if (vowels.includes(str[i])) count++
  }
  return count
}

console.log(findVowels('findVowels'))

  //4 Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит
//спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх.
//Функция должна быть нечувствительна к регистру.

 function chekSpam (str:string) {
  let lowerStr = str.toLocaleLowerCase();
  if (lowerStr.includes('aaa') || lowerStr.includes('bbb') || lowerStr.includes('ccc')) {
    return true
  } else 
    return false
 }
 console.log(chekSpam('eee'))
 console.log(chekSpam('aaa'))

 //5 Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
//больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие.
//Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”.

function reductionStr(str: string, maxlength: number) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…'
  }
}
console.log(reductionStr('Hello world', 5))


//6 Написать функцию, которая проверяет, является ли пере-
//данная строка палиндромом.

function palindromeStr(str: string) {
  return str.split('').reverse().join('') == str;
}
console.log(palindromeStr('алла'))


 //1.Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// let date = new Date (2012, 1, 20, 3, 12 )
// console.log(date.toLocaleString())


//2. Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// function getWeekDay(date:string) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'] 
//   return days [date.getDay()]
// }
// let date = new Date (2022, 3, 28)
// console.log(getWeekDay(date))


 //3. Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
// function getLocalDate(date:Date) {
//   let days = ['0','1','2','3','4','5','6','7']
//   return days [date.getDay()]
// }
// let date = new Date (2012, 0,3)
// console.log(getLocalDate(date))


//4.Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// function getDateAgo(date:number, days:number) {
//   let dateCopy = new Date(date)
//   dateCopy.setDate(date.getDate() - days)
//   return dateCopy.getDate()
// }
// let date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 1))
// console.log(getDateAgo(date,2))

//5. Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// function getLastDayOfMonth(year:number, month:number) {
//   let date =  new Date (year, month +1,0) 
//   return date.getDate()
// }
// console.log( getLastDayOfMonth(2012, 0))


//2
//Реализовать класс, описывающий html элемент.

class HtmlElement {
  tag: string
  isSingle: boolean
  text: string
  atributes = [] as any[]
  styles = [] as any[]
  elements = [] as HtmlElement[]
  constructor(tag: string, text = '') {
      const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
      this.tag = tag
      this.text = text
      this.isSingle = singleArr.includes(tag) ? true : false
  }
  setAtribute(name: string, value: string) {
      this.atributes.push({ name, value })
  }
  setStyle(name: string, value: string) {
      this.styles.push({ name, value })
  }
  prepend(el: HtmlElement) {
      this.elements.unshift(el)
  }
  append(el: HtmlElement) {
      this.elements.push(el)
  }
  getHtml(): string {
      const styles = this.styles.map(el => el.name + ':' + el.value).join(';')
      const attrCopy = [...this.atributes]
      if (this.styles.length) {
          attrCopy.push({ name: 'style', value: styles })
      }
      if (this.isSingle) {
          if (this.text) {
              attrCopy.push({ name: 'area-label', value: this.text })
          }
          const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
          return `<${this.tag} ${atributes}>`
      } else {
          const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
          return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el => el.getHtml()).join('\n')}</${this.tag}>`
      }
  }
}
const wrapper = new HtmlElement('div')
wrapper.setAtribute('id', 'wrapper')
wrapper.setStyle('display', 'flex')
const div = new HtmlElement('div')
div.setStyle('width', '300px')
div.setStyle('margin', '10px')
const h3 = new HtmlElement('h3', 'Lorem')
const img = new HtmlElement('img')
img.setStyle('width', '100%')
img.setAtribute('src', 'ee.jpg')
img.setAtribute('alt', 'Lorem')
const p = new HtmlElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda inventore voluptas natus obcaecati mollitia ad eos adipisci delectus quia odit, earum culpa sunt, molestiae doloribus in explicabo! Illo, harum!')
p.setStyle('text-align', 'justify')
const ala = new HtmlElement('a', ' More...')
ala.setAtribute('href', 'https://www.lipsum.com/')
ala.setAtribute('target', '_blank')
p.append(ala)
div.append(img)
div.append(p)
div.prepend(h3)
wrapper.append(div)
wrapper.append(div)
const heDiv = document.getElementById('he') as HTMLDivElement
heDiv.innerHTML = wrapper.getHtml()



//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

  // const button = document.querySelector('#button') as HTMLButtonElement
  // const hiddenText = document.querySelector('#text') as HTMLDivElement
  // button.addEventListener('click', () => {
  //   hiddenText.hidden = true
  // }
  // )


//Создайте кнопку, которая будет скрывать себя по нажатию.
//  const but = document.querySelector('#but') as HTMLButtonElement
//  but.addEventListener('click', () => {
//  but.hidden = true
// }
// )

//Есть список сообщений.
const panes = document.querySelectorAll('#pane') 
for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>')
  pane.addEventListener('click', () => {
    pane.remove()
  }
  )
}

//Создать меню, которое по нажатию открывается либо закрывается:
const menu = document.querySelector('#menu') as HTMLButtonElement
const titleElem = menu.querySelector('.title') as HTMLSpanElement
 titleElem.addEventListener('click', () => {
    menu.classList.toggle('open')
 }) 
 
//Создайте цветные часы как в примере ниже:

// const clock = document.querySelector('#clock') as HTMLElement
//   window.onload = function(){
//   window.setInterval(function(){
//        var now = new Date()
//        var clock = document.getElementById("clock") as HTMLElement
//       clock.innerHTML = now.toLocaleTimeString()
//   }, 1000)
//  }
const clock = document.getElementById('clock') as HTMLDivElement
const clockStart = document.getElementById('clockStart') as HTMLButtonElement
const clockStop = document.getElementById('clockStop') as HTMLButtonElement
function newDate() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  clock.children[0].innerHTML = hours.toString().padStart(2, '0')
  clock.children[1].innerHTML = minutes.toString().padStart(2, '0')
  clock.children[2].innerHTML = seconds.toString().padStart(2, '0')
}

 let timer = setInterval(newDate, 1000)
 clockStart.onclick = function clockStart() {
   clearInterval(timer)
   timer = setInterval(newDate, 1000)
 }
  clockStop.onclick = function clockStop() {
   clearInterval(timer)
 }
{
  //Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
  const carousel = document.getElementById('carousel') as HTMLDivElement
  const width = 150
  const count = 3
  const list = carousel.querySelector('ul') as HTMLUListElement
  list.style.marginLeft = 0+'px'
  const allCount = list.children.length
  const maxWidth = allCount*width
  const viewWidth = count*width

  carousel.addEventListener('click', (e)=>{
    const target = e.target as HTMLElement
    if (target.classList.contains('arrow')) {
      if (target.classList.contains('prev')) {
        if (parseInt(list.style.marginLeft)==0) {
          list.style.marginLeft = -maxWidth+viewWidth+'px'
        } else {
          list.style.marginLeft = parseInt(list.style.marginLeft) + width +'px'
        }
      } else {
        if (parseInt(list.style.marginLeft)<=-maxWidth+viewWidth) {
          list.style.marginLeft = 0+'px'
        } else {
          // if (parseInt(list.style.marginLeft) - width<-)
          list.style.marginLeft = parseInt(list.style.marginLeft) - width +'px'

        }
      }
    }
  })
}

//Поймайте переход по ссылке
const contents = document.getElementById('contents') as HTMLElement
contents.addEventListener('click', (e)=>{
  const target = e.target as HTMLElement
  if (target.tagName != 'A' ){
    return false
  }
   let targetA = confirm('Хотите покинуть страницу?')
   return targetA ? true : e.preventDefault()
})


//Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

const largeImg = document.querySelector('#largeImg') as HTMLImageElement
const thumbs = document.querySelector('#thumbs') as HTMLUListElement
thumbs.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  let miniImg = target.closest('a') as HTMLAnchorElement
  if (miniImg) {
    largeImg.src = miniImg.href
  }
  if (!miniImg) return
  e.preventDefault()
})

//Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch: