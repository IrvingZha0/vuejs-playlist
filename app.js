new Vue({
  el:'#vue-app',
  data: {
    age: 25,
    a: 0,
    b: 0
  },
  methods:{
    // addToA: function(){
    //   console.log('a is run')
    //   return this.a + this.age
    // },
    // addToB: function(){
    //   console.log('b is run')
    //
    //   return this.b + this.age
    // }
  },
  computed:{
    addToA: function(){
      console.log('a is run')
      return this.a + this.age
    },
    addToB: function(){
      console.log('b is run')
      return this.b + this.age
    }
  }
});
