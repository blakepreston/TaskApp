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

/***************************/

document.getElementById("add").onclick = function(){
  //get the text to add to list
  var node = document.createElement("Li")
  var text = document.getElementById("input").value;
  var textnode = document.createTextNode(text);

  node.appendChild(textnode);

  //appendChild allows to add to the list
  document.getElementById("list").appendChild(node);
}

document.getElementById("add2").onclick = function(){
  //get the text to add to list
  var node = document.createElement("Li")
  var text = document.getElementById("input2").value;
  var textnode = document.createTextNode(text);

  node.appendChild(textnode);

  //appendChild allows to add to the list
  document.getElementById("list2").appendChild(node);
}

document.getElementById("add3").onclick = function(){
  //get the text to add to list
  var node = document.createElement("Li")
  var text = document.getElementById("input3").value;
  var textnode = document.createTextNode(text);

  node.appendChild(textnode);

  //appendChild allows to add to the list
  document.getElementById("list3").appendChild(node);
}
