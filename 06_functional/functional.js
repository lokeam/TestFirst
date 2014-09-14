var countWords = function(str){
	var strArray = str.split(' ');
	//return 'this is a sentence with ' + strArray.length + ' words';
	return strArray.length;
};

var makeAdder = function(valueA){
	return function(valueB) {
		return valueA + valueB;
	}
};

var forEach = function(arr,yourFunction){
	for (var i = 0; i < arr.length; i++) {
		yourFunction(arr[i]);
	}
};

