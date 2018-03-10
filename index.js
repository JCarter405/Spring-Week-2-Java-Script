

var beers = 99;

function printVerse(num){

	var name = "bottles";
	if(num === 1) { name = "bottle"; }

	console.log(num + " " + name + " bottles of beer on the wall");
	console.log(num + " " + name + " of beer");
	console.log("You take one down, you pass it around.");
	num--;
	console.log(num + " bottles of beer on the wall\n");
	return num;
}

// repeat the section 99 times

while(beers > 0){
	// console.log ("No more bottles of bee on the wall!! Go buy more beer.\n");
	beers = printVerse(beers);
}
