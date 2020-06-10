var dataInput = document.querySelector("input[type='text']");
var ulSpisok = document.getElementById("list");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var infoBtn = document.getElementById("info");
var name = "Боровиков Александр Владимирович";

document.addEventListener("DOMContentLoaded", loadTodo());

function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function () {
      span.parentElement.remove();
      event.preventDefault();
    });
  }
}

function loadTodo() {
  if (localStorage.getItem("todoAplication")) {
    ulSpisok.innerHTML = localStorage.getItem("todoAplication");
    deleteTodo();
    strikeOutTodo();
  }
}

function strikeOutTodo() {
  let li = document.getElementsByTagName("li");
  for (let list of li) {
    list.addEventListener("click", function () {
      this.style.textDecoration = "line-through";
    });
  }
}

dataInput.addEventListener("keypress", function (keyPressed) {
  if (keyPressed.which === 13) {
    if (dataInput.value.trim() === "") {
      document.getElementById("Warning").style.display = "block";
    } else {
      var newLi = document.createElement("li");
      var newSpan = document.createElement("span");
      newSpan.innerHTML = "Удалить ";
      let now = new Date();

      var newTodo = this.value;
      this.value = "";

      ulSpisok
        .appendChild(newLi)
        .append(
          newSpan,
          newTodo + " [",
          now.getDate() +
            "." +
            now.getMonth() +
            "." +
            now.getFullYear() +
            "] " +
            name
        );

      document.getElementById("Warning").style.display = "none";

      deleteTodo();
      strikeOutTodo();
    }
  }
});

saveBtn.addEventListener("click", function () {
  localStorage.setItem("todoAplication", ulSpisok.innerHTML);
});

clearBtn.addEventListener("click", function () {
  ulSpisok.innerHTML = "";
  localStorage.setItem("todoAplication", ulSpisok.innerHTML);
  document.getElementById("Warning").style.display = "none";
});

infoBtn.addEventListener("click", function () {
  defaultName = prompt("Данные пользователя", name);
});
