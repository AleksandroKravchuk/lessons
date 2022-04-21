

// const calkr = {
//   value: 0,
//   increment() {
//     this.value -= 1;
//   },
//   dicrement() {
//     this.value += 1;
//   }
// }
// const incrementBtn = document.querySelector(`.js-increment`);
// const dicrementBtn = document.querySelector(`.js-dicremeht`);
// const valueBtn = document.querySelector(`.js-value`);

// // incrementBtn.textContent = `Вика привет`

// incrementBtn.addEventListener(`click`, function () {
//   calkr.increment();
//   valueBtn.textContent = calkr.value;
// })

// dicrementBtn.addEventListener(`click`, function () {
//   calkr.dicrement();
//   valueBtn.textContent = calkr.value;
// })

// console.log(incrementBtn)
// console.log(dicrementBtn)
// console.log(valueBtn)

const user = [{
  "createdAt": "2022-04-09T05:08:07.144Z",
  "name": "Nellie Orn",
  "email": "Kenya59@hotmail.com",
  "number": "799-684-6512",
  "id": "1"
},
  {
    "createdAt": "2022-04-08T19:26:23.865Z",
    "name": "Dolores Moen",
    "email": "Isom34@hotmail.com",
    "number": "379-718-4871",
    "id": "2"
  },
  {
    "createdAt": "2022-04-09T03:55:54.486Z",
    "name": "Ramon Becker",
    "email": "Alexzander.Cronin@gmail.com",
    "number": "646-283-0756",
    "id": "3"
  }, {
    "createdAt": "2022-04-09T04:01:47.731Z",
    "name": "Jessica Rath",
    "email": "Cassidy_Lind@gmail.com",
    "number": "355-962-6019",
    "id": "4"
  },
  {
    "createdAt": "2022-04-09T03:58:44.224Z",
    "name": "Tomas Ruecker",
    "email": "Dwight.Mante57@yahoo.com",
    "number": "725-465-4712",
    "id": "5"
  },
  {
    "createdAt": "2022-04-08T17:26:47.327Z",
    "name": "Darrin Fahey",
    "email": "Melisa.Schoen@gmail.com",
    "number": "",
    "id": "6"
  },
  {
    "createdAt": "2022-04-09T06:45:18.607Z",
    "name": "Herman D'Amore",
    "email": "Liliane18@hotmail.com",
    "number": "598-556-5293",
    "id": "7"
  },
  {
    "createdAt": "2022-04-09T06:15:10.121Z",
    "name": "Eugene Kris",
    "email": "Xavier.Beatty@yahoo.com",
    "number": "",
    "id": "8"
  },
  {
    "createdAt": "2022-04-08T22:23:00.131Z",
    "name": "Mr. Tabitha Jacobi",
    "email": "Gabriella_Schmidt@gmail.com",
    "number": "",
    "id": "9"
  },
  {
    "createdAt": "2022-04-08T19:41:48.858Z",
    "name": "Kathryn Thiel",
    "email": "Lyda10@gmail.com",
    "number": "619-769-2227",
    "id": "10"
  }]

const tel = `911 - 11 - 11`;
function updateNumber(array,tel) {
  return array.reduce((acc,elem) => {
    if (elem.number === ``) {
      return([...array, elem.number = tel ]) 
    } return [...array];
  },[])
}

console.table(updateNumber(user, tel ))

