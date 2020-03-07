// const list = document.getElementById('list-container')
// const heading = document.querySelector('#list-container h1')
// let task;
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
//   .then(json => {console.log(json)
//     task = json;
//     heading.innerHTML = task.title
//   })

// const list = document.getElementById('list-container')
// const heading = document.querySelector('#list-container h1')
// let arrayOfObjects;
// fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
//   .then(json => {console.log(json)
//     arrayOfObjects = json;
//     console.log()
//     // arrayOfObjects.forEach(function(item, i){
//     //   console.log(item.title);
//     // });
//     // for(let i = 0; i < arrayOfObjects.length; i++){
//     //   console.log(arrayOfObjects[i].title);
//     // }
//   })


// const list = document.getElementById('list-container')
// const heading = document.querySelector('#list-container h1')
// let taksList;
// fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
//   .then(json => {console.log(json)
//     taksList = json;
//     taksList.forEach(function(task, i){
//       let myHeading = document.createElement("p");
//       myHeading.innerHTML = ` ${task.id} ${task.title}`;
//       list.appendChild(myHeading);;
//     });
//   })


// const list = document.getElementById('list-container')
// const heading = document.querySelector('#list-container h1')
// const fetchURL= 'https://jsonplaceholder.typicode.com/todos/99'
// let task;
//
// fetch(`${fetchURL}`).then(response => response.json())
//   .then(json => {console.log(json)
//     task = json;
//     heading.innerHTML = ` ${task.id} ${task.title}`;
//   })


// const list = document.getElementById('list-container')
// const heading = document.querySelector('#list-container h1')
// const fetchURL = 'https://jsonplaceholder.typicode.com/todos/'
// let task;
//
// fetch('https://swapi.co/api/planets/1/').then(response => response.json())
//   .then(json => {
//     console.log(json)
//     task = json;
//     heading.innerHTML = JSON.stringify(task);
//   })



//  szukanie w tablicy

// const heading = document.querySelector('#list-container h1')
// const fetchURL= 'https://jsonplaceholder.typicode.com/todos'
// const userId = 5;
// let taskList;
//
// fetch(fetchURL).then(response => response.json())
//   .then(json =>{
//     console.log(json)
//     taskList = json;
//     let thisParticularTask = taskList.find(function(task){
//       return task.userId == userId
//     })
//     console.log(thisParticularTask);
//     // heading.innerHTML = ` ${task.id} ${task.title}`;
//   })


// filtrowanie w Tablicy

const list = document.getElementById('list-container');
const fetchURL = 'https://jsonplaceholder.typicode.com/todos';
const userId = document.getElementById('user-filter');
const idFrom = document.getElementById('id-from-filter');
const idTo = document.getElementById('id-to-filter');
const completed = document.getElementById('completed');
const getTaskBtn = document.getElementById('get-tasks');
let taskList;

function getTasks() {
  fetch(fetchURL).then(response => response.json())
    .then(json =>{
      console.log(json)
      taskList = json;
      let thisParticularTask = taskList.filter(function(task){
        return task.userId == userId.value &&
              task.id >= idFrom.value &&
              task.id <= idTo.value &&
              task.completed == completed.checked
      });

      thisParticularTask.forEach(function(task, i) {
        let myAnswer = document.createElement('h2');
        myAnswer.innerHTML = ` ${task.id} ${task.title} `;
        list.appendChild(myAnswer);
      }); 
    });
}
getTaskBtn.addEventListener('click', getTasks);