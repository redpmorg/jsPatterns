// antipatern because of possibility of use "tostring" as parameter

var myFunc = function(param) {
  if(!myFunc.cache[param]) {
    var result = {};
    // do something for result
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
}

myFunc.cache = {};



// preferred method 1
// only one argument using param
var myFunc = function (param) {
  if (!myFunc.cache.hasOwnProperty(param)) {
    var result = {};
    // ... expensive operation ...
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};
// cache storage
myFunc.cache = {};


//prefered 2
//multiple arguments
var myFunc = function () {
  var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
  result;
  if (!myFunc.cache[cachekey]) {
    result = {};
    // ... expensive operation ...
    myFunc.cache[cachekey] = result;
  }
  return myFunc.cache[cachekey];
};
// cache storage
myFunc.cache = {};

// multiple arguments using arguments.callee
// argument.callee is forbiden under 'strict mode' start with ES5
var myFunc = function (param) {
  var f = arguments.callee,
  result;
  if (!f.cache[param]) {
    result = {};
    // ... expensive operation ...
    f.cache[param] = result;
  }
  return f.cache[param];
};
// cache storage
myFunc.cache = {};

// arguments.callee explain by factorial recursion
[1,2,3,4,5].map(function(n){
  return !(n > 1) ? 1 : arguments.callee(n-1)*n;
});

//is deprecated because can return different values of this
var global = this;

var sillyFunction = function(recursed) {
  if(!recursed) { return arguments.callee(true); }
  if(this !== global) {
    alert('this is:' + this);
  } else {
    alert('this is global!');
  }
}

sillyFunction();

//LIMITATION OF MEMOIZATION

//fibonacci not memoized version. Return the 50th fibonacci number will call the function 50billions time
function fibonacci(n){
  return !(n>1) ? 1 : (fibonacci(n-1) + fibonacci(n-2));
}

//fibonacci memoization will call the function 99times. but it use memory instead
var fibonacci = (function() {
  var memo = [];
  function f(n) {
    var value;
    if(n in memo) {
      value = memo[n];
    } else {
      if(0 === n || 1 === n) {
        value = n;
      } else {
        value = f(n-1) + f(n-2);
        memo[n] = value;
      }
    }
    return value;
  }
  return f;
})();

// function foo() is not Refferential Transparent because it use a global variable that can change anytime
//Refferential Transparent mean that our function depends only on its inputes like Fibonavcci sequence above
var bar = 1;
function foo(baz) {
  return baz + bar;
}
foo(1);
bar++;
foo(1);
