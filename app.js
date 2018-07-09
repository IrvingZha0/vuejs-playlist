new Vue({
  el:'#vue-app',
  data: {
    name: 'Irving',
    job: 'dev'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
