// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');
//

const curry = function(fn) {
    return function() {
        return fn.apply(this, arguments);
    }
}

const setEl = {
    atr: curry(function() {
        var a = arguments;
        document.getElementById(a[0]).addEventListener(a[1], function(event) {
            event.target.setAttribute(a[2].a, a[2].p);
        }, false);
        return this;
    })
}


setEl.atr('one', 'mouseover', {
    a: 'style',
    p: 'background-color: blue'
}).atr('one', 'mouseout', {
    a: 'style',
    p: 'background-color: red'
}).atr('two', 'click', {
    a: 'class',
    p: 'other-class'
}).atr('three', 'click', {
  a: 'style',
  p: 'border: 2px solid red'
});
