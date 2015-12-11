var module = module || {};


function checkWordCount(input) {
	//validate to check if word count is 100 words or less
	input = input.split(" ");

	var resultGiven;

	if(input.length > 100){
		resultGiven = false;
	} else {
		resultGiven = true;
	}
  	return resultGiven;
}

function duplicateCheck(input) {
	//validate to check if there are duplicate words
	var arrayOfInput = input.split(" ");


	//loop over array
	for(var i = 0; i < arrayOfInput.length; i++){
		console.log(arrayOfInput[i]);

		function checker(value){
			return value === arrayOfInput[i]
		}

		var output = arrayOfInput.filter(checker);

		// console.log("output is ", output);

		if(output.length > 1){
			var givenResult = false
		}

	}

	if(givenResult === undefined){
		givenResult = true
	}


  	return givenResult;
}

function verifyAlphaNumeric(input) {
	//verify that input is only alpha numeric characters

		//returns false if validation succeeds!!

		//returns true if result is not validated!!

	var onlyAlphaNumeric;

	var reg = /[^A-Za-z0-9 ]/;
	regexReturn = reg.test(input)

  	console.log("the result is ", regexReturn)

  	return regexReturn
}


module.exports = { checkWordCount, duplicateCheck, verifyAlphaNumeric };