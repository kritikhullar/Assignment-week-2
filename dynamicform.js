var x = document.getElementById("myform");
var line;


var createform = document.createElement("form");
createform.setAttribute("action", "");
createform.setAttribute("method", "post");
x.appendChild(createform);

var heading = document.createElement("h1");
heading.innerHTML = "Form using JS";
createform.appendChild(heading);

var line = document.createElement("hr");
createform.appendChild(line);

var linebreak = document.createElement("br");
createform.appendChild(linebreak);

var label1 = document.createElement("label");
label1.setAttribute("for", "uname");
label1.innerHTML = "Uname";
createform.appendChild(label1);


var input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "uname");
input1.setAttribute("name", "uname");
createform.appendChild(input1);
var line = document.createElement("hr");
createform.appendChild(line);

createform.appendChild(linebreak);


var label2 = document.createElement("label");
label2.setAttribute("for", "psw");
label2.innerHTML = "Password";
createform.appendChild(label2);


var input2 = document.createElement("input");
input2.setAttribute("type", "password");
input2.setAttribute("id", "psw");
input2.setAttribute("name", "psw");
createform.appendChild(input2);

createform.appendChild(linebreak);


var button1 = document.createElement("input");
button1.setAttribute("type", "submit");
button1.setAttribute("value", "submit");
createform.appendChild(button1);