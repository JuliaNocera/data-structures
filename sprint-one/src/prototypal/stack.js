var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.count] = value; 
  this.count++;      
};

stackMethods.pop = function(){
  if(this.count){
    this.count--;
  };
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

stackMethods.size = function(){
  return this.count;
};






