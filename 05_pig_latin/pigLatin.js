var translate = function(str){
	var translated = '',
      strArray = str.split(' ');

	// function used for checking vowels
	function isVowel(char) {
		if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'Y') {
			return true;
		}
		return false;
	};

  // function used for switching letters
  function pLatinize(word) {
    var firstChar = word.charAt(0),
        secondChar = word.charAt(1),
        thirdChar = word.charAt(2),
        output = '';
    
    // vowel
    if ( isVowel(firstChar) == true ) {
      output = word + 'ay';
	  }  
	  // three consonants
	  else if ( isVowel(firstChar) == false && isVowel(secondChar) == false && isVowel(thirdChar) == false) {
      output = word.slice(3) + word.slice(0, 3) + 'ay';
	  }
    // counts 'qu' as a consonant even when it's preceded by a consonant 
    else if ( isVowel(firstChar) == false && secondChar == 'q' && thirdChar == 'u') {
      output = word.slice(3) + word.slice(0, 3) + 'ay';
    }
    // counts 'qu' as a single phoneme
    else if ( firstChar == 'q' && secondChar == 'u') {
      output = word.slice(2) + word.slice(0, 2) + 'ay';
    }    
	  // two consonants
	  else if ( isVowel(firstChar) == false && isVowel(secondChar) == false ) {
      output = word.slice(2) + word.slice(0, 2) + 'ay';
	  }
    // one consonant
	  else {
      output = word.slice(1) + word.slice(0, 1) + 'ay';
	  }
    return output;
  }
  
  // iterate through all words
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = pLatinize(strArray[i]);  
    
  }

  return strArray.join(" ");
    
};

translate('one two three square five queen');

