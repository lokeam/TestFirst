var bubbleSort = function(arr) {
	for (var i = 0; i < arr.length; i++) {

		// so we hit the second to last number
		for (var k = 0; k < arr.length; k++) {
            console.log('second integer '+ arr[k])
			var swapNumber;
			if (arr[k] > arr[k +1]){
				swapNumber = arr[k +1];
				arr[k+1] = arr[k];
				arr[k] = swapNumber;
				console.log('swapNumber: '+swapNumber);
			}
		}
	}
	return arr;
};



var merge = function(arr1, arr2){
    var sorted = [],
        i = 0,
        k = 0; 
    while ( (i < arr1.length) && (k < arr2.length) ) {
        if (arr1[i] < arr2[k]) {
            sorted.push(arr1[i]);
            i++;
        }
        else {
            sorted.push(arr2[k]);
            k++;
        }
    }
        if (i < arr1.length) {
            sorted = sorted.concat(arr1.slice(i) );
        }
        else if (k < arr2.length) {
            sorted = sorted.concat(arr2.slice(k) );
        }      
    return sorted;
};


var mergeSort = function(arr) {
    var left,
        right,
        intMiddle = Math.floor(arr.length/2);
    
	if (arr.length <= 1) {
		return arr;
	}
    left = mergeSort( arr.slice( 0, intMiddle) );
    right = mergeSort( arr.slice( intMiddle) );

    return merge(left, right);
};
