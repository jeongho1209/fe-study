const button = document.getElementsByClassName("add-button");

const buttonClickHandler = () => {
  const inputBox = document.getElementById("add-todo");

  var todo = document.createElement("li");
  var text = document.createTextNode(inputBox.value);
  var element = document.querySelector("ul");

  const button = document.createElement("button");
  button.innerText = "❌";

  todo.appendChild(text);
  todo.appendChild(button);
  element.appendChild(todo);

  inputBox.value = "";

  button.addEventListener("click", () => {
    todo.remove();
  });
};

button[0].addEventListener("click", buttonClickHandler);

const input = document.getElementById("add-todo");

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && event.target.value) {
    buttonClickHandler();
  }
});
