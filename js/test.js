// const { config } = require("process");

// const name = "Aleksandr";
// let number = "43px";
// const bull = true;
// const bullN = false;


// let should = prompt(name);
// should = Number(should);
// console.log(should);
// console.log(typeof should)
// const result = Number.parseInt(number);
// console.log(result)

// const balance = 1000;
// let massege;

// if (balance >= 0) {
//     massege = "Позитивный баланc"
// } else {
//     massege = "Негативный баланc"
// }

// const massege = balance >= 0 ? "Позитивный баланc" : "Негативный баланc";

// console.log(massege)


// ПРИМЕР СВИЧ
const stars = 5;
let price;

if (stars === 1) {
  price = 30;
} else if (stars === 2) {
  price = 50;
} else if (stars === 3) {
  price = 90;
} else if (stars === 4) {
  price = 120;
}
console.log(price)

switch (stars) {
  case 1:
    price = 20;
    break;
  case 2:
    price = 70;
    break;
  case 3:
    price = 100;
    break;
  case 4:
    price = 150;
    break;
  default:
    console.log(`Такого количества звезд нет`)
}
console.log(price)


//   ПРИМЕР СВИЧ ПАРНЫЙ

if (stars === 1 || stars === 2) {
  price = 30;
} else if (stars === 3 || stars === 4) {
  price = 50;
} else if (stars === 5) {
  price = 120;
} else {
  console.log(`Такого количества звезд нет`)
}
console.log(price)

switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;
  case 3:
  case 4:
    price = 100;
    break;
  default:
    console.log(`Такого количества звезд нет`)
}
console.log(price)


// ПРИМЕР ЗАДАЧИ СВИЧ

const option = 3;
let message = "";

switch (option) {
  case 1:
    message = `Вы можете забрать товар завта после 12.00`
    break;
  case 2:
    message = `Курьер доставит ваш товар после 09.00`
    break;
  case 3:
    message = `Посылка будет доставлена почтой`
    break;
  default:
    message = `Наш менеджер вам перезвонит`
}
console.log(message)

// ПРИМЕР ЦИКЛА

for (let i = 0; i < 10; i += 1) {
  console.log(i)
}

// ПРИМЕР ЗАДАЧИ НА ЦИКЛ
const employees = 10;
const maxSalary = 3000;
const minSalary = 500;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );
  console.log(`ЗП работника номер ${i} - ${salary}`)
  totalSalary += salary;

}
console.log(`Зарплата вцелом: ${totalSalary}`)

// ЗАДАЧКА НА ЦИКЛЫ

const min = 3;
const max = 11;
let total = 0;

for (let i = min; i <= max; i += 1) {
  console.log(i)
  // проверяем остаток от деления
  if (i % 2 === 0) {
    console.log(`четное: `, i)
    total += i;
  }
  // метод логики от обратного
  if (i % 2 !== 0) {
    console.log(`НЕ четное: `, i);
    continue;
  }


}
console.log(`Число: `, total)

// ЗАДАЧКА ПОКУПКИ ТОВАРА

let manyBalance = 10000;
const payment = 12000;

console.log(`Общая стоимость заказа ${payment}. Проверяем наличие средств нв счету`);
if (manyBalance >= payment) {
  console.log(`ok`);
  manyBalance -= payment;
  console.log(`На счету осталось ${manyBalance}`)
} else {
  console.log(`Недостаточно средств на счету`)
}
console.log(`Операция завершена`)

// ЗАДАЧКА ПОДСЧЕТА СУММЫ ПОКУПКИ

// общая сумма потраченного
let totalSpent = 4000;
// сумма текущего платежа 
let pay = 5000;
// скидка
let discont = 0;

if (totalSpent < 100) {
  discont = 0;
} else if (totalSpent >= 100 && totalSpent < 1000) {
  console.log(`Бронзовый парнер, скидка 2%`);
  discont = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log(`Cеребряный парнер, скидка 5%`);
  discont = 0.05;
} else {
  console.log(`Золотой парнер, скидка 10%`);
  discont = 0.1;
}
pay = pay - pay * discont;
console.log(`Оформляем заказ на сумму ${pay} со скидкой ${discont * 100}%`);

totalSpent += pay;

console.log(`Общая сумма потраченного в магазине ${totalSpent}`)



// Пример инпут и кнопка

const btnAdd = document.querySelector(`button[data-add]`);
const btnReset = document.querySelector(`button[data-reset]`);
const valueInput = document.querySelector(`input[data-value]`);
const finalSumma = document.querySelector(`span`);
let toTal = 0;
btnAdd.addEventListener(`click`, function () {

  console.log(`click hehehe`);
  const value = Number(valueInput.value);
  toTal += value;
  console.log(toTal);
  valueInput.value = ``;
  finalSumma.textContent = toTal;

})

btnReset.addEventListener(`click`, function () {
  finalSumma.textContent = 0;
})


// const available = 20;
// const ordered = 10;
function checkStorage(available = 30, ordered = 40) {

  let message;
  // Change code below this line

  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  //    if (ordered > available) {
  //     message = "Not enough goods in stock!";
  //   } else {
  //     message = "The order is accepted, our manager will contact you";
  //   }


  // return message;
  console.log(message);
};
checkStorage()


function multiply(a, b) {
  let com = a * b;
  console.log(com);
}
multiply(3, 134)


first: for (let num = 0; num < 5; num++) {

  for (let size = 0; size < 7; size++) {
    console.log(size);
    if (size == 5) { break first; }
  }
}

// ПРИМЕРЫ ФУНКЦИЙ

function calkSum(numOne, numTwo, more, less) {
  let numSum = numOne + numTwo;
  if (numSum > 3) {
    more();
  } else {
    less();
  }
}
function showMoreMessage() {
  console.log(`Больше чем 3`);
}
function showLessMessage() {
  console.log(`Меньше чем 3`);
}
calkSum(3, 3, showMoreMessage, showLessMessage)

function calk(numOne, numTwo) {
  let result = 1;
  for (let i = 0; i < numTwo; i++) {
    result *= numOne;
  }
  return result;
}
console.log(calk(2, 3))


function calKul(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calKul(numOne, numTwo - 1)
  }
}
console.log(calKul(2, 3))

// ПРИМЕР ФУНКЦИОНАЛЬНОГО ВЫРАЖЕНИЯ

let getMessage = (text, name) => text + `, ` + name + `!`;
console.log(getMessage(`Привет`, `Макс`));



// ПРИМЕР ПОЯВЛЕНИЯ ТЕКСТ С ЗАДЕРЖКОЙ

function showMessage(text, name) {
  console.log(`${text}`, `${name}!`)
}
setTimeout(showMessage, 3000, `Привет`, `Макс`);

// ПРИМЕР ПОВЛЯЮЩИХСЯ ЧИСЕЛ

// function showNumber(num) {
//     console.log(num);
//     if (num < 10 && num > -5) {
//         setTimeout(showNumber, 1000, --num);
//     }
// }
// setTimeout(showNumber, 1000, 9);

// ПРИМЕР ОСТАНОВКА TIMEOUT

// function showNumb(num) {
//     console.log(num);
//     let timeId = setTimeout(showNumb, 1000, ++num);
//     if (num === 7) {
//         clearTimeout(timeId);
//     }
// }
// setTimeout(showNumb, 1000, 1)

// // ПРИМЕР ВЫЗОВА ВЛОЖЕННОЙ ФУНКЦИИ

// let shoowMess;
// if (2 > 1) {
//    shoowMess = function() {
//         console.log(`Повідомлення`)
//     }
// }
// shoowMess();

// function showName() {
//     console.log(`Вася!`);
// }
// // showName()
// setTimeout(showName, 0);
// console.log(`Петя!`)

const club = ["Динамо", "Шахтер", "Ворскла", "Черноморец"];
const myClub = "Динамо";
let text;

for (const my of club) {
  if (my === myClub) {
    text = `Это мой клуб!`
    break;
  } else {
    text = `Моего клуба здесь нет!`
  }
}
console.log(text);

function getExtremeElements(array = [2, 3, 4, 5]) {
  const last = array.length - 2;
  array.splice(1, last);
  console.log(array);
}
getExtremeElements()

function slugify(title) {
  title = "How to become a JUNIOR developer in TWO WEEKS";
  const name = title.toLowerCase();

  let slug = name.split(" ");


  console.log(slug.join("-"));

}
slugify()

function makeArray(firstArray = [1, 2, 4, 8], secondArray = [9], maxLength = 5) {
  const endArray = firstArray.concat(secondArray);
  if (endArray.length <= maxLength) {
    console.log(endArray);
  } else {
    console.log(endArray.slice(0, maxLength));
  }
}
makeArray()


// ПРИМЕР СЛОЖЕНИЯ ВВОДИМЫХ ЧИСЕЛ

function calculateTotal(number = 18) {
  let rez = 0;
  for (let i = 1; i <= number; i += 1) {
    rez = rez + i;
  }
  console.log(rez);

}
calculateTotal();



const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}


// ПРИМЕР ПОДСЧЕТА ВСЕХ ВВЕДЕННЫХ ЧИСЕЛ

function calculateTotalPrice(order = [12, 10, 20, 5]) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total = total + order[i];
  }
  console.log(total)
}
calculateTotalPrice()


// ПРИМЕР ПОИСКА САМОГО ДЛИННОГО СЛОВА
function findLongestWord(string = "Макс самый высокий парень") {
  let words = string.split(" ");
  let longest = words[0];
  console.log(words);
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  console.log(longest);
}
findLongestWord()


// ПРИМЕР ИЗМЕНЕНИЯ РЕГИСТРА КАЖДОЙ БУКВЫ В СЛОВЕ

const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = " ";

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
  }

  return invertedString;
}
console.log(changeCase("Александр КРавчУК"));


// ПРИМЕР SLUG

const slugiFy = function (string) {

  return string.toLowerCase().split(" ").join("-");
}

console.log(slugiFy("Я самый крутой чувак"))


// ПРИМЕР ФИЛЬТРОВАНИЯ ЧИСЕЛ МАССИВ и НЕ МАССИВ

const filterNumbers = function (array, ...args) {
  const unicElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      unicElements.push(element);
    }
  }
  return unicElements;
}


console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));


// ПРИМЕР ДОБАВЛЕНИЯ ЧИСЕЛ В МАССИВ ОТ МИН К МАКС


function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}
console.log(createArrayOfNumbers(2, 7))


// СОДАНИЕ НОВОГО МАССИВВА
function filterArray(numbers, value) {
  const unicElements = [];

  for (const number of numbers) {
    if (number > value) {
      unicElements.push(number);
    }
  }
  return unicElements;
}
console.log(filterArray([12, 24, 8, 41, 76], 20))



function includes(array, value) {

  for (const element of array) {
    if (element === value) {
      return true;
    }
  }
  return false;
}
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));




//  Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в килограммах на квадрат высоты человека в метрах.
//  * Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// * Индекс массы тела необходимо округлить до одной цифры после запятой;
//  */

let weight = '90,3';
let height = '1.86';

for (let nweight of weight) {
  if (nweight === ',') {
    weight = weight.replace(nweight, '.');
    break;
  }
}
for (let nheight of height) {
  if (nheight === ',') {
    height = height.replace(nheight, '.');
    break;
  }
}
weight = Number.parseFloat(weight);
height = Number.parseFloat(height);
const imt = (weight / (height ** 2)).toFixed(1);

console.log(imt)




//  * Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
//  */

let link = 'https://my-site.com/about';

const last = "/";
for (let index = 0; index < link.length; index++) {
  const element = link[link.length - 1];
  if (last === element) {
    console.log(link);
    break;
  }
  link = (link + last);

}
const numb = 12.4;
console.log(Math.floor(numb))


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//         city: "Kingston",
// }
// console.log(apartment)

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]); 
// } 
// console.log(keys);
// console.log(values);


// ПИРИМЕР КОРЗИНЫ ПОКУПКИ ПРОДУКТОВ

// const cart = {
//     items: [],
//     getItems() { },
//     add(product) { },
//     remove(productName) { },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) {},
// }


// cart.add({ name: , price: 50 });
// cart.add({ name: , price: 60 });
// cart.add({ name: , price: 60 });
// cart.add({ name: , price: 110 });



// cart.remove();

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
  }
  if (apartment.hasOwnProperty(key)) {
    values.push(apartment[key]);
  }
} console.log(keys)
console.log(values)


//     function countProps(object) {
//         let propCount = 0;

//         for (const obj in object) {
//         if (object.hasOwnProperty(obj)) {
//             propCount = Object.values(object).length;
//         }
//     }
//         console.log(propCount)
// }
// countProps({  })



// const apartments = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const valueses = [];


// Change code below this line
// const keyses = Object.keys(apartments);
// for (const key of Object.values(apartments)) {
//     valueses.push(key);
// }
// console.log(keyses)
// console.log(valueses)

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const value = Object.keys(object).length;

//     console.log(value)
// }
//     countProps({ name: "Mango", age: 2 })

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const salary = Object.values(salaries);

// for (const sal of salary){
//     totalSalary += sal;
// }
//   // Change code above this line
//  console.log(totalSalary)
// }
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     let message;
// for(const product of products){
//   if (product.name === productName){
//       message = product.price;
//       break;
//   }
//      message = null;
//     }
//     console.log( message)
// }
// getProductPrice("Scanner")

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const name = [];

//     for (const product of products) {
//         const keys = Object.keys(product);

//         for (const key of keys) {
//             if (key === propName) {
//                 name.push(product[key]);
//         }   
//         }
//     }
//     console.log(name);
// }
// getAllPropValues("name")


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const name = [];
//     for (const product of products) {
//     const keys = Object.keys(product);
//         if (keys.includes(propName)) {
//         name.push(product[propName]);   
//         }

//     }

//     console.log(name);

// }
// getAllPropValues("price")


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalp(productName) {
//     let price = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//         price = product.price * product.quantity
//     }
// }

// console.log(price)

// }
// calculateTotalp("Grip")

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//     const rezult = { completed, category, priority, ...data };

//     return rezult;
// }
// console.log(makeTask({category: "Homemade", priority: "Low", text: "Take out the trash"}))

// function add(...args) {
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//  }
//     return sum;
// }
// console.log(add(15, 27))

// function addOverNum(num,...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (arg > num) {
//        total += arg;   
//       }

//   }

//   return total;
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36))

// function findMatches(numFirst,...numSecond) {
//   const matches = [];

//     for (const numF of numSecond) {
//         if (numFirst.includes(numF))
//             matches.push(numF);    
//     }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {

//         if (this.books.includes(oldName)) {
//               this.books.splice(this.books.indexOf(oldName), 1, newName)
//           } 

//    return this.books;   
//   },
// };
// console.log(bookShelf.updateBook("The last kingdom", "Dune"))

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],

// getPotions(){
// return this.potions;
// },
// }
// console.log(atTheOldToad.getPotions())

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {

// this.potions.splice(this.potions.indexOf(potionName) , 1);
// return this.potions
//   },
// }
// console.log(atTheOldToad.removePotion("Dragon breath"))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],


//   // Change code below this line
//   getPotions() {
//       return this.potions ;

//   },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {

//          if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     } 
//       }
//         return this.potions.push(newPotion);
//     },
//   removePotion(potionName) {

//       for (const potion of this.potions) {
//           if (potion.name === potionName) {
//               const potionIndex = this.potions.indexOf(potion);
//                 return  this.potions.splice(potionIndex, 1);
//     }
// }
//    return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {

//       for (const potion of this.potions) {      
//      if (potion.name === oldName) {
//       return potion.name = newName;
//     }    
// }
//  return `Potion ${oldName} is not in inventory!`;  


//   },

// };

// console.log(atTheOldToad.addPotion({ name: "Speed potio", price: 240 })) 
// console.log(atTheOldToad.removePotion("Speed potion")) 
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
// console.log(atTheOldToad.getPotions()) 



function lastNumber(number) {
  let num = "";
  for (let numb of number) {
    num += numb;
  }
  num = Number(num) + 1;
  // console.log(num)
  let rezult = String(num).split("");
  // console.log(rezult);
  let finish = [];
  for (let rez of rezult) {
    rez = [Number(rez)];
    // console.log(rez)
    finish = finish.concat(rez);

  }
  return finish;

}
console.log(lastNumber([1, 2, 9, 9]))


// const fnA = function (message, callback) {
//     console.log(message);
//     // console.log(callback);
//     callback();
// }

// const fnB = function () {
//     console.log(`Это лог при вызове fnB`)
// }
// fnA (`сообщение`,fnB )

const filter = function (array, test) {
  const filteArray = [];

  for (const el of array) {
    // console.log(el);


    if (test(el)) {
      filteArray.push(el);
    }
  }
  // console.log(filteArray);
  return filteArray;

}

// const callback1 = value =>value >= 3;


const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 8, 98, 70], value => value >= 5);

console.log(r2);

// ЗАМЫКАНИЕ ФУНКЦИЙ

const fnA = function (parametr) {
  const inner = `значение внутренней переменной функции A`

  const innerFunction = function (a, b) {
    console.log(parametr);
    console.log(inner);
    console.log(`Это вызов функции innerFun`)
    console.log(a * b);
  };
  return innerFunction;
}
// console.log(fnA)
const fnB = fnA(555);
fnB(2, 4,);
// console.log(fnB);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName); 
// }

// console.log(makeMessage("Ultracheese", deliverPizza));
// console.log(makeMessage("Royal Grand", makePizza))

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, callback, callback1) {
    if (this.pizzas.includes(pizzaName)) {
      return callback(pizzaName);
    } return callback1(pizzaName);

  },
};
// Change code above this line





// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// // console.log(pizzaPalace.order("Four meats", makePizza, onOrderError))
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError))






// function calculate (orderedItems) {
//   let totalPrice = 0;

//     orderedItems.forEach(function (element) {
//         totalPrice += element;
//     })

//   return totalPrice;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))



// function filterArr(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//     numbers.forEach(element => {
//         if (element > value) {
//             filteredNumbers.push(element);
//         }
//     });

//   return filteredNumbers;
// }
// console.log(filterArr([1, 2, 3, 4, 5], 4))



// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//    firstArray.forEach(element => {
//         if (secondArray.includes(element)){
//             commonElements.push(element);
//     }

// });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))



// const calculateTot = (orderedItems) => {
//   let totalPrice = 0;
// orderedItems.forEach(element => {
//      totalPrice += element
// });

//   return totalPrice;
// }
// console.log(calculateTot([12, 85, 37, 4]))



// const changeEven = (numbers, value) => {
//   // Change code below this line
//     const NewArrow = [];
//   numbers.forEach((number)=>{
//     if (number % 2 === 0) {
//         NewArrow.push(number + value);

//       } else if (number % 2 !== 0)
//       NewArrow.push(number);
//   })
//     return NewArrow;
//   // Change code above this line
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))



const getUsersWithFriend = (users) => {
  const friend = users.flatMap(user => user.friends);
  return friend.filter((name, index, array) => array.indexOf(name) === index)

};

console.log(getUsersWithFriend([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]));



const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.friends.includes("Sharron Pace"))

};
console.table(getUsersWithAge([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
], 10, 37))



const calculateT = users => {
  return users.reduce((acc, user) => acc + user.balance, 0)



};


console.log(calculateT([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]))



const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line
const names = books.filter((book => book.rating > MIN_BOOK_RATING))
  .map(book => book.title)
  .sort((first, second) => first.localeCompare(second));



console.log(names);


const getSortedFriends = users => {

  return users.flatMap(user => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort((first, second) => first.localeCompare(second))
};
console.log(getSortedFriends([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]))


const getTotalBalanceByGender = (users, gender) => {
  return users.filter((user) => user.gender === gender).map((item) => item.balance).reduce((acc, element) => acc + element)
};
console.log(getTotalBalanceByGender([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
], "male"))


const pizzaPalace1 = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;

  },
  // Change code above this line

};

console.log(pizzaPalace1.order("Four meats"))
console.log(pizzaPalace1.checkPizza("Four meats"))


class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    return this.items.splice(this.items.indexOf(itemToRemove), 1);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


class StringBuilder  {
  constructor(initialValue) {
    this.value = initialValue;
    
  }
  getValue() {
    return this.value;
  }

  padStart(str) {

    this.value = str + this.value;

  }
  padEnd(str) {

    this.value = this.value + str;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


const CounterPlugin = function ({ initialValue = 0, step = 1 } = {}) {
  console.log(this._value = initialValue) ;
  console.log(this._step = step) ;
  
 };
CounterPlugin.prototype.increment = function () {
  this._value += this._step;
}

const counter = new CounterPlugin({ step: 3 });
console.log(counter);
counter.increment();
console.log(counter)

const str = 'abrakadabra';
// { a: 5, b: 2, r: 2, k: 1, d: 1 }
const res = str.split(``)
  .reduce((acc, elem) =>
({...acc, 
[elem]: acc[elem]? acc[elem]+1:1}),{})

console.log(res)

// const obj = {
//   a: 3,
//   b: 1,
// };

// const letter = 'b';
// const newObj = {
//   ...obj,
//   [letter]: obj[letter] + 10,
// };

// console.log(newObj);

// class Car {
//   // Change code below this line
//   #price;
// static MAX_PRICE = 50000;


//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < 50000) {
//       this.#price = newPrice;
//     } 
//   }
  // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
static checkPrice(price) {
  if (price > 50000) {
    return "Error! Price exceeds the maximum"
  }  return "Success! Price is within acceptable limits" 
}
  // Change code above this line
  constructor({ price }) {
    this.price = price;

  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"










class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
    this. blacklistedEmails = []
  }
blacklist(email) {
this.blacklistedEmails.push(email)
  };
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true
    } return false;
    
  } 
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true


function showThis() {
  console.log("this in showThis: ", this);
}
showThis()

const user = {
  username: "Mango",
};
user.showcontekst = showThis;
user.showcontekst()




const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  name: 2,
  getFullName() {
    
    return `${this.firstName} ${this.lastName}  ${this.name}`;
    
  },
};

console.log(customer.getFullName())

function makeMessage(callback) {
  
  console.log(`Обрабатываем заявку от ${callback()}.`);
}
makeMessage(customer.getFullName.bind(customer));




const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрелки запоминают контекст во время объявления,
      // из родительской области видимости
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}



function greetGuest(greeting, greetings) {
  console.log(`${this.username} ${greeting}, ${greetings}.`);
}

const mangos = {
  username: "Манго",
};
const poly = {
  username: "Поли",
};

greetGuest.apply(mangos, ["Добро пожаловать", "Привет Вика"]); // Добро пожаловать, Манго.
greetGuest.call(poly, "С приездом"); // С приездом, Поли.






function greet(clientName) {
  return `${clientName}, добро пожаловать в «${this.service}».`;
}

const steam = {
  service: "Steam",
};
const steamGreeter = greet.bind(steam);
console.log(steamGreeter("Манго"))
; // "Манго, добро пожаловать в «Steam»."

const gmail = {
  service: "Gmail",
};
const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter("Поли"))
; // "Поли, добро пожаловать в «Gmail»."




const makeChange = function () {
  const change = function (color) {
    console.log(`Метод обекта`, this.color)
  };
  const sweater = {
    color: `red`,
  };
   sweater.updataColor = change;

  sweater.updataColor()
// console.log(sweater.change);
  return sweater.updataColor();
  
}

 makeChange();
// console.log(swpColor)
// swpColor(`biue`)
console.log(document)

const calkr = {
  value: 0,
  increment() {
    this.value -= 1;
  },
  dicrement() {
    this.value += 1;
  }
}
const incrementBtn = document.querySelector(`.js-increment`);
const dicrementBtn = document.querySelector(`.js-dicremeht`);
const valueBtn = document.querySelector(`.js-value`);

// incrementBtn.textContent = `Вика привет`

incrementBtn.addEventListener(`click`, function () {
  calkr.increment();
  valueBtn.textContent = calkr.value;
})

dicrementBtn.addEventListener(`click`, function () {
  calkr.dicrement();
  valueBtn.textContent = calkr.value;
})

console.log(incrementBtn)
console.log(dicrementBtn)
console.log(valueBtn)


const obj = {
  from: 1,
  to: 7,

  [Symbol.iterator]: function () {
    let current = this.from;
    let last = this.to;

    // метод должен вернуть объект с методом next()
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (const number of obj) {
  console.log(number);
}






 class Account {
  #balance;
  #history;

  constructor(amount) {
    this.#balance = amount;
    this.#history = [];
  }

  set balance(value) {
    this.#history.push({
      value,
      type: 'set balance',
    });

    if (value < 0) {
      console.log('Error ....');
      return;
    }

    this.#balance -= value;
  }

  get balance() {
    this.#history.push({
      type: 'get balance',
    });

    return this.#balance;
  }

  static sum(a, b) {
    console.log(a + b);
  }
}

const account1 = new Account(2000);

account1.balance = 200; // set

console.log(account1.balance); // get

console.log(account1);

Account.sum(1, 1);
// account1.sum(1, 1);