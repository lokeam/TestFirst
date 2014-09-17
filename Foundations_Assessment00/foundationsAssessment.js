/*var vowelsCount = function(str){
  var vowel = 'aeiou';
  var strArr = [];	
  console.log('ding');

  str.forEach(function(str) {
  	for (var i = 0; i < str.length; i++) {
  		if (vowel.search(str[i] !== -1) {
  			return 0;
  		})

  	}



  });
  if (typeof str == 'undefined') {
    return 0;
  }
  if (vowel.search(str[i]) !== -1){
  	return 0;

  }
  return 0;

}
*/

var vowelsCount = function(myString){
	var vowel = 'aeiou';
	var strArr = myString.split('');
	var count = 0;
    var len = myString.length;

  	function isVowel(char) {
		if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'Y') {
			return true;
		}
		return false;
	};

	if (strArr.length == 0){
		return 0;
	}
    for (var i = 0; i <= len; i++){
		if ( isVowel(strArr[i]) == true) {
			count += 1;
			console.log('vowel: '+strArr);
		}
  	}
  return count;
}





function Car (plate){
	this.plate = plate;

}



var generallyFizzy = function(){}



/*var stringAddition = function(arg){
	var count = 0;
	if (typeof arg !== 'number' || arg.length == 0){
		return 0;
	}
	var iCount = 0;
	for (iIndex in arg) {
	    if (!isNaN(parseInt(arg[iIndex]))) {
	        iCount++;
	    }
	}
	return(iCount);


}*/

var stringAddition = function(arg){
	var count = 0;
	if (arg.length == 0) {
		return 0;
	}
	for (var i = 0; i < arg.length; i++) {
	    if (!isNaN(parseInt(arg[i]))) {  
          // Need to check if the next index is NOT a number then slice the string from the start of the index to the number
          arg.slice()

        count+= parseInt(arg[i]);
        
	    }
	}
  console.log(count);
  return(count);

}

