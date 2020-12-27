let listItems = [];
var i = 0;

function getValue() {
  const inputText = document.querySelector(".textinput").value;
  listItems.push(inputText);
}

function addListElement() {
    var listItem = document.createElement("div");
    listItem.className = "item";
    listItem.id = i;
    listItem.innerHTML = listItems[i];
    var element = document.getElementById("taskcontainer");
    element.appendChild(listItem);
    i++;
    var trash = document.createElement("div");
    trash.className = "trash";
    trash.innerHTML = "🗑️";
    trash.onclick = function trashBin () {
      this.parentElement.remove();
    };
    listItem.appendChild(trash);
  }

function trashBin () {
  this.parentElement.remove();
}