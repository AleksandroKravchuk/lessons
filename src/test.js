export default "main";

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

// const user = [{
//   "createdAt": "2022-04-09T05:08:07.144Z",
//   "name": "Nellie Orn",
//   "email": "Kenya59@hotmail.com",
// },
//   {
//     "createdAt": "2022-04-09T03:55:54.486Z",
//     "name": "Ramon Becker",
//     "email": "Alexzander.Cronin@gmail.com",
//     "number": "646-283-0756",
//     "id": "3"
//   }, {
//     "createdAt": "2022-04-09T04:01:47.731Z",
//     "name": "Jessica Rath",
//     "email": "Cassidy_Lind@gmail.com",
//     "number": "355-962-6019",
//     "id": "4"
//   },
//   {
//     "createdAt": "2022-04-09T03:58:44.224Z",
//     "name": "Tomas Ruecker",
//     "email": "Dwight.Mante57@yahoo.com",
//     "number": "725-465-4712",
//     "id": "5"
//   },
//   {
//     "createdAt": "2022-04-08T17:26:47.327Z",
//     "name": "Darrin Fahey",
//     "email": "Melisa.Schoen@gmail.com",
//     "number": "",
//     "id": "6"
//   },
//   {
//     "createdAt": "2022-04-09T06:45:18.607Z",
//     "name": "Herman D'Amore",
//     "email": "Liliane18@hotmail.com",
//     "number": "598-556-5293",
//     "id": "7"
//   },
//   {
//     "createdAt": "2022-04-09T06:15:10.121Z",
//     "name": "Eugene Kris",
//     "email": "Xavier.Beatty@yahoo.com",
//     "number": "",
//     "id": "8"
//   },
//   {
//     "createdAt": "2022-04-08T22:23:00.131Z",
//     "name": "Mr. Tabitha Jacobi",
//     "email": "Gabriella_Schmidt@gmail.com",
//     "number": "",
//     "id": "9"
//   },
//   {
//     "createdAt": "2022-04-08T19:41:48.858Z",
//     "name": "Kathryn Thiel",
//     "email": "Lyda10@gmail.com",
//     "number": "619-769-2227",
//     "id": "10"
//   }]

// const tel = `911 - 11 - 11`;
// function updateNumber(array,tel) {
//   return array.reduce((acc,elem) => {
//     if (elem.number === ``) {
//       return([...array, elem.number = tel ]) 
//     } return [...array];
//   },[])
// }

// console.table(updateNumber(user, tel ))
const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
  <button>x</button>
</li>`;

let items = [
  { id: '1', text: 'sdfgsg', isDone: false },
  { id: '2', text: 'ery', isDone: true },
  { id: '3', text: 'xcvb', isDone: false },
  { id: '4', text: 'asdf', isDone: true },
  { id: '5', text: 'uoi', isDone: false },
];

const refs = {
  ul: document.querySelector('ul'),
  form: document.querySelector('form'),
};

const handleIsDoneChange = (event) => {
  const parent = event.target.closest('li');
  const { id } = parent.dataset;
console.log(id)
  items = items.map((item) =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item,
    
  );return items;

  renderList();
};

const handleDeleteItem = (event) => {
  const parent = event.target.closest('li');
  const { id } = parent.dataset;
console.log(id)
  items = items.filter((item) => item.id !== id);
  renderList();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const text = event.target.elements.text.value;
  const newItem = {
    id: String(items.length+ 1),
    text,
    isDone: false,
  };

  items.push(newItem);
  renderList();
  refs.form.reset();
};

const addItemListeners = () => {
  // checkboxes
  const listItems = document.querySelectorAll('input[type="checkbox"]');

  listItems.forEach((item) =>
    item.addEventListener('change', handleIsDoneChange),
  );

  // delete buttons
  const deleteButtons = document.querySelectorAll('li>button');

  deleteButtons.forEach((button) =>
    button.addEventListener('click', handleDeleteItem),
  );
};

const renderList = () => {
  const list = items.map(itemTemplate).join('');

  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', list);

  // TODO: remove this shit
  addItemListeners();
};

refs.form.addEventListener('submit', handleSubmit);

renderList();