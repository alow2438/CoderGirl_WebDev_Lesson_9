// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode


var word = "DOG"; 
var isGuessingLetter = false; 
var letter = "A"; 

if (isGuessingLetter === true){
	switch (letter) {
		case "D":
			console.log(letter+" _ _"); 
			break;
		case "O":
			console.log("_ " +letter+ " _"); 
			break;
		case "G":
			console.log("_ _ " +letter); 
			break;	
		default:
			console.log("Sorry, no " + letter+ "!");	
	}
}else{
	if (word === "DOG"){ 
		console.log("Congratulations! You won Wheel of Fortune!"); 

	}else console.log("Nope, keep trying!"); 
}