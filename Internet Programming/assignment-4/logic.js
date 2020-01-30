var ti1 = document.getElementById('textinput1');
var ti2 = document.getElementById('textinput2');
var ti3 = document.getElementById('textinput3');
var ti4 = document.getElementById('textinput4');
var ti5 = document.getElementById('textinput5');
var ti6 = document.getElementById('textinput6');
var ti7 = document.getElementById('textinput7');
var ti8 = document.getElementById('textinput8');




var counter = 0;

function shiftContent()
{
	var x = ti1.value;
	document.getElementById(x).innerHTML = ti2.value;
}

function shiftStyle()
{
	if(ti4.value == "style1")
	{
		document.getElementById(ti3.value).style.color = "red";
		document.getElementById(ti3.value).style.border = "thick solid #00003F";

	}
	else if(ti4.value == "style2")
	{
		document.getElementById(ti3.value).style.color = "blue";
		document.getElementById(ti3.value).style.border = "thick solid #0000FF";
	}
}

function addElement()
{

	var btn = document.createElement(ti5.value);
	btn.id = ti5.value + counter;
	btn.innerHTML = ti6.value;
	document.body.appendChild(btn);
	counter = counter + 1;
}

function deleteElement()
{
	var ele = document.getElementById(ti7.value);
	ele.parentNode.removeChild(ele);


}

function colorAnimation()
{
	document.getElementById(ti8.value).style = "animation: colorchange 5s infinite";
}

