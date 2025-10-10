const a = [];

function add() {
  let d = document.getElementById("n").value;
  a.push(d);
  console.log(a);
  show();
}

function addAtStart() {
  let d = document.getElementById("n").value;
  a.unshift(d); 
  console.log(a);
  show();
}

function removeArray() {
  a.shift(); 
  console.log(a);
  show();
}

function remove() {
  a.pop();
  console.log(a);
  show();
}

function show() {
  document.getElementById("p1").innerHTML = a;
}
