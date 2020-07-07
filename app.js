const simple = ["yellow", "red", "rgba(133,122,200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// BUTTONS
const btn = document.getElementById("btn");
const simpleBtn = document.getElementById("simple")
const hexBtn = document.getElementById("hex")

// ELEMENTS

const color = document.getElementById("color");
const text = document.getElementById("text-color");

// SELECT HEX OR SIMPLE

var simpleValue = true, 
	hexValue, 
	number = 3;


simpleBtn.addEventListener('click', simpleTrueAndFalse)
hexBtn.addEventListener('click', hexTrueAndFalse)



function simpleTrueAndFalse(){
	
	 simpleValue = true
	hexValue = false
	number = 3
	simpleBtn.style.backgroundColor = "dimgray" ;
	hexBtn.style.backgroundColor = "dodgerblue";
}

function hexTrueAndFalse(){
	hexBtn.style.backgroundColor = "dimgray";
	simpleBtn.style.backgroundColor = "dodgerblue" ;
	
	 simpleValue = false
	hexValue = true
	number = 16
	
	
}









btn.addEventListener("click", simpleOrHex);

function simpleOrHex(){
	if(simpleValue === true){
		return simpleFunc()
	} else if (hexValue === true){
		return hexFunc()
	}
}

function hexFunc(){
	let hexColor = "#";
	console.log(hexColor)
	
	
	for(let i = 0; i <= 6; i++ ){
		
		hexColor += hex[getRandomNumber()];
		text.innerHTML = hexColor.toUpperCase();
		text.style.color = hexColor;
		color.style.backgroundColor = `${hexColor}`
	}
	
}




function simpleFunc() {
	
  let numberRandom = getRandomNumber();
  text.innerHTML = simple[numberRandom].toUpperCase();
  text.style.color = simple[numberRandom];
  color.style.backgroundColor = simple[numberRandom];
}

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * number);
  return randomNumber;
}
