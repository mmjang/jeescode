var a = 1;
var obj = {
  a: 2,
  func: function () {
    console.log("a的值是: " + this.a);
  },
};

obj.func();
