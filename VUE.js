new Vue({
  el: "#app",
  data: {
    name: "Shaun",
    job: "Ninja",
    // website: "http:thenetninja.co.uk",
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    },
    add: function(pinc) {
      this.age += pinc;
    },
    substract: function(pdec) {
      this.age -= pdec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
