const buttonEvent = document.getElementById("buttonevent");
let tarray = [];
buttonevent.addEventListener("click", function (event) {
  event.preventDefault();
  const fullName = document.querySelector("#inputname").value;
  const description = document.querySelector("#inputdescription").value;
  const assignedTo = document.querySelector("#inputAssign").value;
  const dueDate = document.querySelector("#duedate").value;
  const status = document.querySelector("#inputState").value;

  console.log("Button was clicked");
  let allFormValid = validateForm(
    fullName,
    description,
    assignedTo,
    dueDate,
    status
  );
  if (allFormValid == true) {
    console.log("all valid");
    let id = tarray.length + 1;
    let task = createobject(
      id,
      fullName,
      description,
      assignedTo,
      dueDate,
      status
    );
    addTask(task);
    console.log(task);
  } else {
    console.log("Not valid");
  }
  resetform()
});


function resetform(){
  document.querySelector("#addTaskForm").reset()
}

function validateForm(fullName, description, assignedTo, dueDate, status) {
  if ((fullName.length === 0 ) || (fullName.length > 20)) {
    return false; 
  } else {
    // const errorNameMessage = "Name must less than 20 characters";
    // document.querySelector(".errorName").innerHTML = errorNameMessage;
  }
  if ((description.length === 0) || (description.length > 20)) {
    return false;
  } else {
    // const errordescriptionMessage = "Description must less than 20 characters";
    // document.querySelector(".errordescription").innerHTML =
    //   errordescriptionMessage;
  }
  if ((assignedTo.length === 0) || (assignedTo.length > 20)) {
    return false;
  } else {
    // const errorAssignToMessage = "AssignTo must less than 20 characters";
    // document.querySelector(".errorAssignTo").innerHTML = errorAssignToMessage;
  }
  if (!dueDate) {
    return false;
  }
  if (!status) {
    return false;
  }
  return true;
}

function createobject(id, fullName, description, assignedTo, dueDate, status) {
  let taskobject = {
    id: id,
    fullName: fullName,
    description: description,
    assignedTo: assignedTo,
    dueDate: dueDate,
    status: status,
  };
  return taskobject;
}

// function for task#

function getAllTasks() {
  console.log(tArray);
  //function that populates
  // all tasks on the page when it loads
}

function addTask(task) {
  // going to add a task when form submitted.
  //  Add card and update array
  tarray.push(task);
  addToLocalStorage();
}

const cardbtn = document.getElementById("cardbtn");

function deleteTask(id) {
  // work out how to identify the task
  // that was clicked, delete from array and page
  tarray = tarray.filter(function (item) {
    return item.id != id;
  });
  addToLocalStorage();
}

function updateTask() {
  // allow you to change info of a task,
  // save to card and update array
}


function miniCardRender(){
  console.log("i")
  let html = "";

  document.querySelector("#smallCards").innerHTML = "";
  console.log(tarray)
  tarray.forEach(function (item) {
    console.log(html)
    html += `
    <div class="card text-dark bg-light mb-3" style="max-width: auto;">
    <div class="card-header card-header-blue">Task for ${item.assignedTo}</div>
      <div class="card-body">
        <h5 class="card-title">description:${item.description}</h5>
        <p class="card-text card-text-style">status:  ${item.status}</p>
      </div>
    </div>
    `;
  });

  document.querySelector("#smallCards").innerHTML = html;
};



const rerenderTasks = () => {
  let html = "";
  // empty
  document.querySelector(".tasklist").innerHTML = "";
  // loop over tarray
  tarray.forEach(function (item) {
    html += `
           <div class="col">
        <div class="card" style="width: auto;">
            <div class="card-header">
              Task (${item.id})
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Assigned To: ${item.assignedTo}</li>
              <li class="list-group-item">Assigned by: ${item.fullName}</li>
              <li class="list-group-item">Due date: ${item.dueDate}</li>
              <li class="list-group-item">Status: ${item.status}</li>
              <li class="list-group-item">Description: ${item.description}</li>
            </ul>
            <button id="cardbtn" data-id='${item.id}' onclick='deleteTask(${item.id})'>delete me</button>
          </div>
      </div>
    `;
    console.log(html)
  });
  //
  document.querySelector(".tasklist").innerHTML = html;
};

function addToLocalStorage() {
  localStorage.setItem("item", JSON.stringify(tarray));
  rerenderTasks();
  miniCardRender();
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('item');
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    tarray = JSON.parse(reference);
   
  
  }
  rerenderTasks(); 
  miniCardRender();
}
getFromLocalStorage() 