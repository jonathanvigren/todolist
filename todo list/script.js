let listItems = [];
var i = 0;



function getValue() {
  const inputText = document.querySelector(".textinput").value;
  listItems.push(inputText);
}

function addListElement() {
  localStorage.setItem('listItemsRef', JSON.stringify(listItems));
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
  trash.onclick = function trashBin() {
    this.parentElement.remove();
  };
  listItem.appendChild(trash);

  var toggle = document.createElement("INPUT");
  toggle.className = "checkbox";
  toggle.setAttribute("type", "checkbox");
  listItem.appendChild(toggle);
}

function trashBin() {
  this.parentElement.remove();
}

document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('listItemsRef');
  if (ref) {
    listItems = JSON.parse(ref);
    listItems.forEach(t => {
      addListElement(t);
    });
  }
});