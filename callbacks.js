// return a function withinside a function
// known as Anynomous Function


function forEach(array, callback){
	for(var x = 0; x = array.length; x++){
		var user = array[x];
		callback(user);
	}
}

var students = ['Linda', 'Justin', 'Mike'];

//var message = function(name){console.log(name, "was here");}

forEach(students, function(names){
	console.log(name, "was here");
});

	// nineSquared = funcion(){9*9}
//var nineSquared = makeSquared(9);
//var twelveSquared = makeSquared(12);

//console.log("Nine squared is ", nineSquared() );
//console.log("Twelve squared is ", twelveSquared() );


function makeSquared(number){
	return function(){
		return number * number;
	}
}

function makePower(power){
	return function(x){
		return Math.pow(x,power);
	}
}

var squared = makePower(2);
var cubed = makePower(3);
var forthed = makePower(4);


console.log("Nine squared is ", squared(9) );
console.log("Twelve cubed is ", cubed(12) );
console.log("Five fourthed is ", forthed(5) );

