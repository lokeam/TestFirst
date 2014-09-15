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

var map = function(arr, func) {
	var procArr = [];
	forEach(arr, function(element) {
		procArr.push(func(element));
});
	return procArr;
};

var filter = function(arr, filter) {
	var filtered = [];
	forEach(arr, function(element) {
		if (filter(element)) filtered.push(element);
	});
	return filtered;
};

var contains = function(arr, num) {
	for (key in arr) {
		if (arr[key] === num) return true;
	}
	return false;
};

var reduce = function(arr, start, func) {
	var total = start;
	forEach(arr, function(element) {
		total = func(element, total);
	})
	return total;
};

var countWordsInReduce = function(wordsArr, start) {
	return countWords(wordsArr) + start;
};

var sum = function(arr) {
	return reduce(arr, 0, function(a, b) {
		return a + b;
	})
};

var every = function(arr, func) {
	var bool = true;
	for (var i = 0, l = arr.length; i < l; i++) {
		bool = func(arr[i]);
		if (!func(arr[i])) break;
	}
	return bool;
};

var any = function(arr, func) {
	var bool = false;
	var func = func || function(element) { return element; };
	for (var i = 0, l = arr.length; i < l; i++) {
		if (func(arr[i])) {
			bool = true;
			break
		}
	}
	return bool;
};

var once = function(func) {
	var hasRun = false;
	return function() {
		if (hasRun) return;
		func();
		hasRun = true;
	};
};

var wrapper = function(funcName, funcGreet) {
	return function() {
		return funcGreet(funcName);
	};
};
