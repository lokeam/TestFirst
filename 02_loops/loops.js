var repeat = function(str,num) {
  var repeated = '';
  if (num == 0) {
    return '';
  }
  else if (num == 1) {
    return str;
  }
  else {
    for (var i = 0; i <= num - 1; i++) {
      repeated += str;
    }
    return repeated;
  }
};

var join = function(arr,del){
  var len = arr.length,
      joined = "";
      if (typeof del === "undefined") {
        del = "";
      }
      for (var i = 0; i < len; i++){
        joined += arr[i];
        if( i !== arr.length -1){
          joined+=del;
        }
      }
      return joined;
};

var sum = function(arr){
  var arrSum = 0,
      len = arr.length;
  for (var i = 0; i < len; i++) {
  	arrSum += arr[i];
  }
  return arrSum;
};

var paramify = function(obj) {
  var myArr = [];
  // helper function to check if the object's empty 
  function isEmpty(obj) {
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        return false;
      }
    }
    return true;
  }
  for (var p in obj) {
     if ( isEmpty(obj) ) {
      return '';
    }
    else { 
      if (obj.hasOwnProperty(p) ) {
        myArr.push(p + '=' + obj[p] + '&');
      }
    }
   }
  return myArr.sort().join('').slice(0, -1);
};

var factorial = function(num){
  var fArray = [];
  if (num == 0 || num == 1) {
    return 1;
  }
  else if (fArray[num] > 0){
    return fArray[num];
  }
  return fArray[num] = factorial(num - 1) * num;
};

var concat_string = function(string){
  var output = '';
  for (var i = 0; i < arguments.length; i++) {
    output += arguments[i]; 
  }
  return output;
};


