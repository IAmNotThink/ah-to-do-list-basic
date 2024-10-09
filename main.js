function addTask() {
  console.log("button clicked");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      taskList.removeChild(i);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

export default addTask;
