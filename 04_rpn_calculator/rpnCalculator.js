var Calculator = function() {
this._stack = [];
};
Calculator.prototype._popAndCompute = function(operation) {
if (this._stack.length < 2) throw 'calculator is empty';
var operand1 = this._stack.pop();
var operand2 = this._stack.pop();
var result = operation(operand1, operand2);
this._stack.push(result);
return result;
};
Calculator.prototype.push = function(num) {
this._stack.push(num);
};
Calculator.prototype.plus = function() {
var sum = function(operand1, operand2) {
return operand1 + operand2;
};
return this._popAndCompute(sum);
};
Calculator.prototype.minus = function() {
var diff = function(operand1, operand2) {
return operand2 - operand1;
};
return this._popAndCompute(diff);
};
Calculator.prototype.times = function() {
var times = function(operand1, operand2) {
return operand1 * operand2;
};
return this._popAndCompute(times);
};
Calculator.prototype.divide = function() {
var div = function(operand1, operand2) {
return operand2 / operand1;
};
return this._popAndCompute(div);
};
Calculator.prototype.value = function() {
return this._stack[this._stack.length - 1];
};
