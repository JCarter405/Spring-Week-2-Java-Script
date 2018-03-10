

var beers = 99;

// repeat the section 99 times

while(beers > 0){

	if(beers === 1){
		console.log(beers + " bottles of beer on the wall");
		console.log(beers + " bottles of beer");
		console.log("You take one down, you pass it around.");
		beers--;
		console.log(beers + " bottles of beer on the wall"); 
			// beers = beers - 1; // does the same thing as beers --;
			// beers = beers + 1; // does the same thing as beers ++;
} else {
	console.log(beers + " bottles of beer on the wall");
	console.log(beers + " bottles of beer");
	console.log("You take one down, you pass it around.");
	beers--;
	console.log(beers + " bottles of beer on the wall"); 
	}
}
