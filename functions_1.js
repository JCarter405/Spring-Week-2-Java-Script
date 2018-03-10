
var printVerse = function (num){

	var name = "bottles";
	if(num === 1) { name = "bottle"; }

	console.log(num + " " + name + " bottles of beer on the wall");
	console.log(num + " " + name + " of beer");
	console.log("You take one down, you pass it around.");
	num--;
	console.log(num + " bottles of beer on the wall\n");
}

for(var x = 99; x > 0; x--){
	printVerse(x)
}
