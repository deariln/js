import './style.scss'
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

type product = {
  product: string,
  count: number,
  purchased: boolean,
}


const buyList:product [] = [
 { product: 'apple', count: 3, purchased: true},
 { product: 'milk', count: 1, purchased: false},
 { product: 'flour', count: 2, purchased: false},
 { product: 'egg', count: 5, purchased: false},
 { product: 'jucie', count: 2, purchased: true}
]

//1 Вывод всего списка на экран таким образом, чтобы сначала
//шли некупленные продукты, а потом – купленные.
const buyListOL = document.getElementById('buyList') as HTMLOListElement

function renderBuyList (arr: product[]) {
  let html = ''
  
}

// 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10

// const array = numCreate()
// function numCreate () {
//   let num = []
//   for (let i=1; i<=10;i++) {
//     num.push(i)
//   }
//   return num
// }

// console.log(array)

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
// 2.3. Вывесли в полученный div текст, "Привет, пользователь"
// 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.

// Есть массив объектов
const employees = [
  { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
  { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
  { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
  { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
  { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
  { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
  { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
  { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
]



//ПРАКТИКА строки 2.3
//1 Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
//строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
//одинаковой длины.

