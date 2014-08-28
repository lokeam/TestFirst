var Calculator = function() {
	this.currentValue = 0;
};

Calculator.prototype.value = function(){
	return this.currentValue;
};

Calculator.prototype.add = function(num) {
	this.currentValue = this.currentValue + num;
	return this.currentValue;
};

Calculator.prototype.subtract = function(num) {
	this.currentValue = this.currentValue - num;
	return this.currentValue;
};
