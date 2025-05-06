// add click event and validation check in the button

document.querySelector("#push").onclick = function (e) {
  if (document.querySelector(".newtask input").value.length == 0) {
    alert("Please input a task!!");
  } else {
      addNewTask();
    }
};

document.querySelector(".newtask input").addEventListener("keydown", function(e){
  if (e.key === "Enter") {
    addNewTask();
  }
});

function addNewTask() {
  document.querySelector("#tasks").innerHTML += `
        <div class="task">
        <span id="task-name">${
          document.querySelector(".newtask input").value
        }</span>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
        </div>
        `;

    let current_task = document.querySelectorAll(".delete");

    for (let i = 0; i < current_task.length; i++) {
        current_task[i].onclick = function() {
            this.parentNode.remove();
        }
    }

    let task = document.querySelectorAll('.task');

    for(let i = 0; i < task.length; i++) {
        task[i].onclick = function() {
            this.classList.toggle('completed')
        }
    }
    document.querySelector('.newtask input').value = "";
  }

/*
    class="container"
    class="newtask"
    id="push"
    id="tasks"
 */
    console.log('Hello, Eshan..');