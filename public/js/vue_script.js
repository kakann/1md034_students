const vm = new Vue({
  el: '#V-burger',
  data: {
    copiedInfo: vburger.info()
  },
  methods: {
  	printInfo: function(){
    	console.log( this.copiedInfo );
    }
  }
})
     
