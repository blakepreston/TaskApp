function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  var time = h + ":" + m + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

/************Adding Elemements to Lists***************/

document.getElementById("add").onclick = function(){
  //get the text to add to list
  var node = document.createElement("Li")
  var text = document.getElementById("input").value;
  var textnode = document.createTextNode(text);
  var button = document.createElement("button");
  var delButton = document.createElement("button");

  button.style.background = 'transparent';
  button.style.color = 'white';
  button.style.border = '2px solid white'
  button.style.borderRadius = '20px';
  button.style.margin = '0% 1% 0% 35%';
  button.style.outline = 'none';

  delButton.style.background = 'transparent';
  delButton.style.color = 'white';
  delButton.style.border = '2px solid white'
  delButton.style.borderRadius = '20px';
  delButton.style.margin = '0% 1% 0% 1%';
  button.style.outline = 'none';

  button.innerHTML = "Cross Out";
  delButton.innerHTML = "Delete"

  node.appendChild(textnode);

  //appendChild allows to add to the list
  document.getElementById("list").appendChild(node).appendChild(button);
  document.getElementById("list").appendChild(node).appendChild(delButton);

  

  button.addEventListener('click', function(){
    this.parentNode.style.textDecoration='line-through';
  });

  delButton.addEventListener('click', function(){
    this.parentNode.remove();
  });

}

document.getElementById("add2").onclick = function(){
  //get the text to add to list
  var node = document.createElement("Li")
  var text = document.getElementById("input2").value;
  var textnode = document.createTextNode(text);
  var button = document.createElement("button");
  var delButton = document.createElement("button");

  button.style.background = 'transparent';
  button.style.color = 'white';
  button.style.border = '2px solid white'
  button.style.borderRadius = '20px';
  button.style.margin = '0% 1% 0% 35%';
  button.style.outline = 'none';

  delButton.style.background = 'transparent';
  delButton.style.color = 'white';
  delButton.style.border = '2px solid white'
  delButton.style.borderRadius = '20px';
  delButton.style.margin = '0% 1% 0% 1%';
  button.style.outline = 'none';

  button.innerHTML = "Cross Out";
  delButton.innerHTML = "Delete"

  node.appendChild(textnode);

  //appendChild allows to add to the list
  document.getElementById("list2").appendChild(node).appendChild(button);
  document.getElementById("list2").appendChild(node).appendChild(delButton);

  button.addEventListener('click', function(){
    this.parentNode.style.textDecoration='line-through';
  });

  delButton.addEventListener('click', function(){
    this.parentNode.remove();
  });

}

document.getElementById("add3").onclick = function(){
  //get the text to add to list
  var node = document.createElement("Li")
  var text = document.getElementById("input3").value;
  var textnode = document.createTextNode(text);
  var button = document.createElement("button");
  var delButton = document.createElement("button");

  button.style.background = 'transparent';
  button.style.color = 'white';
  button.style.border = '2px solid white'
  button.style.borderRadius = '20px';
  button.style.margin = '0% 1% 0% 1%';
  button.style.outline = 'none';

  delButton.style.background = 'transparent';
  delButton.style.color = 'white';
  delButton.style.border = '2px solid white'
  delButton.style.borderRadius = '20px';
  delButton.style.margin = '0% 1% 0% 1%';
  button.style.outline = 'none';

  button.innerHTML = "Cross Out";
  delButton.innerHTML = "Delete"

  node.appendChild(textnode);

  //appendChild allows to add to the list
  document.getElementById("list3").appendChild(node).appendChild(button);
  document.getElementById("list3").appendChild(node).appendChild(delButton);


  button.addEventListener('click', function(){
    this.parentNode.style.textDecoration='line-through';
  });

  delButton.addEventListener('click', function(){
    this.parentNode.remove();
  });


}


/*********************************************************/
