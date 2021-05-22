// // stores array in Localstorage
// function storeInStorage (fullName, description, AssignTo) {
//     localStorage.setItem("todos", JSON.stringify())
//     renderTodos(todos);
// }


let fullName= document.querySelector('#inputEmail4').value;
let description = document.querySelector('#inputAddress').value;
let AssignTo = document.querySelector('#inputAddress2').value;

// this to render the todos to the todolist html
function display( fullname, description, AssignedTo, dueDate, status) {  
    let newObject = {
        "fullName": fullname,
        "description": description, 
        "AssignTo": AssignedTo, 
        "DueDate": dueDate,
        "Status": status,
        displayPost: function () {
          console.log(`${this.fullName} \n${this.description} \n${this.AssignedTo}  \n${this.DueDate}`)
        }
    }
    return newObject
}
    let todo =[];


    
   

    document.querySelector('#buttonevent').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Button was clicked');

    // console.log(authorName, quote)
    // displayQuote(authorName, quote)
    storeInStorage(fullName,description, AssignTo )
    display(fullName,description,AssignedTo, dueDate, status)

});

todos.push(todo);
addToLocalStorage(todos); 

validate(prompt("what is the word"))

// input character checking
function validate(value){
  if ( value.length >= 0 && value.length <= 20 ){
 return value
  } else {
    console.log("error-characters too much")
  }
}

// ADD todo list

const list = document.getElementById("tasklist")
function addToDo (todo){
    const text  = `<ul class="list-group list-group-flush 5">
    <li class="list-group-item">Assigned To: ${this.AssignedTo} </li>
    <li class="list-group-item">Assigned by: ${this.fullName}</li>
    <li class="list-group-item">Due date:${this.DueDate}</li>
    <li class="list-group-item">Status:</li>
    <li class="list-group-item">Description:${this.description} </li>
    </ul>`

}



function validateForm() {
    var name = document.forms["Form"]["name"].value;
    var description = document.forms["Form"]["description"].value;
    var assignedTo = document.forms["Form"]["assignedTo"].value;

    if ((name == "") || (name.length > 20)) {
      alert("Name must be filled out");
      return false;
    } else if ((description == "") || (description.length > 20)) {
        alert("Description must be filled out");
        return false;
    } else if ((assignedTo == "") || (assignedTo.length > 20)) {
        alert("AssignedTo must be filled out");
        return false;
    }
}



// Validating the forminputs 
function validate(){
  console.log("validate running!")
 let fullName = document.querySelector('#inputname').value
 let description = document.querySelector('#inputdescription').value
 let assignTo= document.querySelector('#inputAssign').value 
  if (( fullName.length === "") && (fullName.length > 20)){
      console.log("working")
      let text = "name need an input"
      document.getElementById("demo").innerHTML = text; 
      return true;
      
  } else if ((description.length <= 0) && (description.length > 20)){
      document.getElementById("descrip").innerHTML ="desciption need an input";
  } else if ((assignTo <= 0) && (assignTo.length > 20)){
      document.getElementById("Assig").innerHTML = "AssignTo need an input";
      return true;
  }

validate()

const buttonEvent = document.getElementById('buttonevent'); 

buttonEvent.addEventListener('click', function (event){
  event.preventDefault();
  console.log('Button was clicked');
});


buttonEvent.addEventListener('click', function (event){
  event.preventDefault();
  console.log('Button was clicked');
});




class TaskManager {
  constructor(tasks) {
    this.tasks = tasks; // []
  }

  getAllTask() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }
  deleteTask(task) {}
  updateTask(taskId, status) {}
}

class Task {
  constructor(id, name, description, assignedTo, dueDate, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
  }

  // if (length == 0){
  //   let id = 0
  // } else {

  //  let item = TaskManager[TaskManager.length-1].id
  //  id= item + 1
  //  console.log(working)
  // }
}

let manager = new TaskManager([]);

manager.addTask(new Task(1, "Jimmt", "asdasd", "hafsa", "24/23/23", "done"));
console.log(manager.tasks);

// if (new NewManager.length){
//   id = 0
// } else{

//  let item = TaskManager[TaskManager.length-1].id
//  id= item + 1
// }

// function validateForm(nameField, descriptionField, assignField) {

//     if ((nameField === "") {
//       alert("Name must be filled out");
//       return false;
//     } else if ( (nameField.length > 20)){
//         alert("name too long");
//         return false;
//         if ((nameField == "") || (nameField.length > 20)) {
//             alert("Name must be filled out");
//             return false;
//           } else if ( (nameField.length > 20)){
//               alert("name too long");
//               return false;

//     return true;
// }
// }
// }

const fullName = document.forms["addTaskForm"]["name"].value;
const description = document.forms["addTaskForm"]["description"].value;
const assignedTo = document.forms["addTaskForm"]["assignedTo"].value;



const miniCardRender = () => {
  let html = "";

  document.querySelector(".minicard").innerHTML = "";

  tarray.forEach(function (item) {
    html += `
    <div class="card text-dark bg-light mb-3" style="max-width: auto;">
    <div class="card-header card-header-blue">Task for</div>
    <div class="card-body">
      <h5 class="card-title">description: ${item.description}</h5>
      <p class="card-text">status: ${item.status}</p>
    </div>
  </div>
    `;
  });

  document.querySelector(".mini").innerHTML = html;
};



