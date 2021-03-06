// BEFORE
/* var utils = {
		 addListener: function (el, type, fn) {
    		 if (typeof window.addEventListener === 'function') {
        		 el.addEventListener(type, fn, false);
    		 } else if (typeof document.attachEvent !== 'undefined') {
        		 el.attachEvent('on' + type, fn);
    		 } else {
        		 el['on' + type] = fn;
    		 }
		 },
		 removeListener: function (el, type, fn) {
		 }
}; */

// the interface
var utils = {
  addListener: null,
  removeListener: null
}

if(typeof window.addEventListener === 'function') {
  utils.addListener = function(el, type, fn) {
    el.addEventListener(type, fn, false);
  };
  utils.removeListener = function(el, type, fn) {
    el.removeEventListener(type, fn, false);
  };
} else if(typeof document.attachEvent !== 'undefined') {
  utils.addListener = function(el, type, fn) {
    el.attachEvent('on'+type, fn);
  };
  utils.removeListener = function(el, type, fn) {
    el.detachEvent('on'+type, fn);
  }
} else {//old browsers
  utils.addListener = function(el, type, fn) {
    el['on'+type] = fn;
  };
  utils.removeListener = funtion(el, type, fn) {
    el['on'+type] = null;
  }
}
