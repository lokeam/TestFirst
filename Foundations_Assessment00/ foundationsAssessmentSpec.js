describe("vowelsCount", function() {

	it("should handle an empty String", function(){
		expect(vowelsCount("")).toEqual(0);
	});
	it("should handle a String with no Vowels", function(){
		expect(vowelsCount("http://")).toEqual(0);
	});

	it("should handle a String with Vowels", function(){
		expect(vowelsCount("Hello")).toEqual(2);
	});

	it("should handle a String with multiple words and Vowels", function(){
		expect(vowelsCount("Hello World!")).toEqual(3);
	});

	it("should handle a String with all vowels", function(){
		expect(vowelsCount("AeIoU")).toEqual(5);
	});
});

describe("Car Constructor", function() {
	var car;
	beforeEach(function() {
		car = new Car(22589, "blue");
	});

	it("should take License Plate number in its constructor", function() {
		expect(car.licensePlate).toEqual(22589);
	});

	it("should take type of Color in its constructor", function(){
		expect(car.color).toEqual("blue");
	});

	it("the beep function should return the string 'BEEP, BEEP'", function() {
		expect(car.beep()).toEqual("BEEP, BEEP");
	});

	it("has a changeColor function and changes car color from blue to red", function(){
		car.changeColor("red");
		expect(car.color).toEqual("red");
	});

	it("should create a car object with a unique License Plate Number and Color", function(){
		console.log(car);
		expect(car.hasOwnProperty("licensePlate") && car.hasOwnProperty("color")).toEqual(true);
	});

	it("the beep function is on its prototype", function(){
		expect(car.hasOwnProperty("beep")).toEqual(false);
	});

	it("the changeColor function is on its prototype", function() {
		expect(car.hasOwnProperty("changeColor")).toEqual(false);
	});

});


describe('generallyFizzy', function(){
	var solution;
  beforeEach(function() {
      solution = ["1",
              "2 fizzy",
              "3 fizzy",
              "4 fizzy",
              "5",
              "6 realfizzy",
              "7",
              "8 fizzy",
              "9 fizzy",
              "10 fizzy",
              "11",
              "12 realfizzy"];

  });

  it("should return the right answer", function(){
		expect(generallyFizzy([2,3], 1 ,12)).toEqual(solution);
	});

	it("should process the range correctly", function(){
		var rangeOfArray = generallyFizzy([2,3], 1, 12);
		expect(rangeOfArray.length).toEqual(12);
	});

	it("should calculate fizzies correctly", function() {
		var generallyFizzySolution = generallyFizzy([5,7,9], 5, 15);
		var fizzyCount =0;
		generallyFizzySolution.forEach(function(word){
			// Searching for all "fizzy" occurrences
			if(word.match(/fizzy/ig)){
				fizzyCount++;
			}
		});
		expect(fizzyCount).toEqual(6);
	});

	it("should calculate fizzies correctly", function() {
		var generallyFizzySolution = generallyFizzy([9], 5, 15);
		var realfizzyCount =0;
		generallyFizzySolution.forEach(function(word){
			// Searching for all "realfizzy" occurrences
			if(word.match(/realfizzy/ig)){
				realfizzyCount++;
			}
		});
		expect(realfizzyCount).toEqual(1);
	});
});


describe("stringAddition", function() {

	it("should handle an empty String", function(){
		expect(stringAddition("")).toEqual(0);
	});

	it("should handle a String without Numbers", function(){
		expect(stringAddition("Hello")).toEqual(0);
	});

	it("should handle a String with Numbers", function(){
		expect(stringAddition("Hello5")).toEqual(5);
	});

	it("should handle a String with multiple Numbers", function(){
		expect(stringAddition("66He7llo5")).toEqual(78);
	});

	it("should handle a String with multiple words and Numbers", function(){
		expect(stringAddition("H3llo7, 5 W0rld22!")).toEqual(37);
	});

	it("should handle a String with all vowels", function(){
		expect(stringAddition("AeIoU")).toEqual(0);
	});
});
