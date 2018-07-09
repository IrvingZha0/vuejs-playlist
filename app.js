new Vue({
  el:'#vue-app',
  data: {
    name: 'Irving',
    job: 'dev',
    website: 'http://www.baidu.com',
    websiteTag: '<a href="http://www.baidu.com"> Baidu website </a>'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
