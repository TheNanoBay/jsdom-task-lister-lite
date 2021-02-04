
document.addEventListener("DOMContentLoaded", () => {


  //first we grab the form .... so that we can listen for the submit button 
  const form = document.getElementById("create-task-form")


  //listens for the submit button to be pushed 
  form.addEventListener('submit', logSubmit);


  //when we fire our submit button....we want to do these steps 
  function logSubmit(event){
    event.preventDefault();

    const userInput = document.getElementById("new-task-description").value;

    const tasks = document.getElementById("tasks");

    const newTask = document.createElement('li');
    newTask.innerText = userInput;

    tasks.appendChild(newTask);

  }

});
