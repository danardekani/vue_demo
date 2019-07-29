var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  },
  methods: {
    changeMessage:function() {
      console.log('I am in the change message function');
      this.message = "Hello";
    }
  }
});
