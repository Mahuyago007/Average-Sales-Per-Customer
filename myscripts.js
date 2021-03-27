function createNote(total){

let li= document.createElement(li);
let a= document.createElement(a);
let p=document.createElement(p);
//let XButton= document.createElement(button);

//XButton.classList.add("delete");
//let XText=document.createTextNode("X");
let pTN=document.createTextNode("total");

p.appendChild(pTN);
//XButton.appendChild(XText);

a.appendChild(p);
//a.appendChild(XButton);
a.setAttribute("href","#");

li.appendChild(a);
document.getElementById("values").appendChild(li);


};

function createNoteFromInput (e){
e.preventDefault();

let sales=document.getElementById("Sales-input").value;
let customer=document.getElementById("Customer-input").value;
let typeofcloth=document.getElementById("typeofcloth").value;

document.getElementById("Sales-input").value="";
document.getElementById("Customer-input").value="";
var total=(sales*typeofcloth)/customer;
total= Math.round(total*100)/100;
total=total.toFixed(2);
document.getElementById("demo").innerHTML=total;
createNote(total);



}

document
  .getElementById("inputForm")
  .addEventListener("submit", createNoteFromInput, false);

  