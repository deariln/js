import './style.scss'
console.log('4556') 
console.log('kkkk')
    
// let value = prompt('Какое «официальное» название JavaScript?')
// if   (value == 'ECMAScript') {
//     console.log('true')
// } else {
//     console.log('false')
// }
  
// вывести '#' столько раз сколько указал поьзователь

let start = 0
let userInput = 1
let text = ''
while (start < userInput) {
    text = text + '#'
    start++
}
console.log(text) 


//Пользователь ввел число, а на экран вывелись все числа
//от введенного до 0
userInput = 10
text = ''
while (userInput) {
    text = text + userInput + '_'
    userInput--
}
console.log(text)


//запросить  число и степень
let num = 10
let count = 3
let result = 1
while (count) {
    result *= num
    count--
}
console.log(result)


//запросить два числа т найти общие делители 
let num1 = 416
let num2 = 793
text = ''
let min = num1<num2 ? num1 : num2
while(min) {
    if (num1%min == 0 && num2%min == 0) {
        text += min + '_'
    }
    min--
}
console.log(text)


//Посчитать факториал введенного пользователем числа
 
// let factorial = 4
//  num = 5
//  result = 96
//  while(result) {
//     result *=factorial
//     num--
//  }
//  console.log(result)
