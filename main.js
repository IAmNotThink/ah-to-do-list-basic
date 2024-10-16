function addtask() {
  console.log("button clicked");
  const taskinput = document.getElementById("taskInput");
  const tasklist = document.getElementById("taskList");

  if (taskinput.value !== "") {
    const li = document.createElement("li");
    li.textcontent = taskinput.value;

    const deletebutton = document.createElement("button");
    deletebutton.textcontent = "delete";
    deletebutton.onclick = function () {
      tasklist.removeChild(i);
    };

    li.appendChild(deletebutton);
    tasklist.appendChild(li);
    taskinput.value = "";
  }
}

function handlekeypress(event) {
  if (event.key === "enter") {
    addtask();
  }
}

export default addtask;
