function curry(fn) {
    return function(args) {
      return fn.call(this, args);
      //if(args)
    }([]);
}

var plus = curry(function(){
  return ++this.args;
});

plus(1,2);
