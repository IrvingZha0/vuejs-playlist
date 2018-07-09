new Vue({
  el:'#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods:{
    add: function(n){
      this.age += n;
    },
    subtract: function(n){
      this.age -= n;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    alertClick: function(){
      alert('you clickd me!')
    }
  }
});
