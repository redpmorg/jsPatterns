({
  width: 600,
  height: 400,
  gimmeMax: function() {
    return this.width + "x" + this.height;
  },
  init: function() {
    console.log(gimmeMax());
  }
}).init();
