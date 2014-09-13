var translate = function(str){
	var firstChar = str.charAt(0),
      secondChar = str.charAt(1),
      thirdChar = str.charAt(2),
      translated = '';

	// function used for checking vowels
	function isVowel(char){
		if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'Y') {
			return true;
		}
		return false;
	};

	// three consonants
	if ( isVowel(firstChar) == false && isVowel(secondChar) == false && isVowel(thirdChar) == false) {
    translated = str.slice(3) + str.slice(0, 3) + 'ay';
    console.log(translated);
	}
  // counts 'qu' as a consonant even when it's preceded by a consonant 
  else if ( isVowel(firstChar) == false && secondChar == 'q' && thirdChar == 'u') {
    translated = str.slice(3) + str.slice(0, 3) + 'ay';
    console.log(translated);
  }
  
	// two consonants
	else if ( isVowel(firstChar) == false && isVowel(secondChar) == false ) {
		console.log("ding");
    translated = str.slice(2) + str.slice(0, 2) + 'ay';
    console.log(translated);
	}
  
  // one consonant
	else if ( isVowel(firstChar) == false ) {
		console.log("ding");
    translated = str.slice(1) + str.slice(0, 1) + 'ay';
    console.log(translated);
	}
  
  // vowel
	else if ( isVowel(firstChar) == true ) {
		console.log("ding");
    translated = str + 'ay';
    console.log(translated);
	}  
  
};

translate('apple');

