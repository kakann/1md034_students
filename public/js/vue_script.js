
/*
function menuItem(burgName, kCal, gluten, lactose, imgPath){
    this.burgName = burgName;
    this.kCal = kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.imgPath = imgPath;
    this.info = function() {
        return this.burgName + ' ' + this.kCal;
    };
}

let vburger = new menuItem('V-burger', 600, true, false, 'https://i.pinimg.com/originals/6f/a9/65/6fa96522cdd808f2ccc576c85ef949b0.jpg');

let sburger = new menuItem('S-burger', 900, false, true, 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg');

let dburger = new menuItem('V-burger', 1500, false, false, 'https://cdn.stowr.se/p/8d/67/8d67ac3ed75f9ac5b199c0b6891d6b65e33da97f-105883-2.jpg');

var burgers = [vburger, sburger, dburger];
*/


/*
const vm = new Vue({
  el: '#wrapper',
  data: {
    copiedBurgers: food
  },
  methods: {
  	printInfo: function(){
    	console.log( this.copiedInfo );
    }
  }
})
*/

'use strict';
const socket = io();

function customer(name, email, adress, house, gender, payOption){
    this.name= name;
    this.email= email;
    this.gender= gender;
    this.payOption = payOption;    
}

//let customers = [("Martin", "asd", "ez", 66, "male", "Kort")];


//let recipt = document.getElementById("recipt").style.visibility = "hidden"; 

const vn = new Vue({
    el: '#overall',
    data: {
        copiedBurgers: food,
        burgArray: [],
        displayArray: false,
        house: "",
        orders: {},
    },
    created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },
    methods: {
        getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
    },
        markDone: function() {
            this.displayArray=true;
            var firstAndLast = document.getElementById("firstname").value;
            var email = document.getElementById("email").value;
            
            var gender = "male";

            if(document.getElementById("male").checked){
                gender = "male";
            }
            if(document.getElementById("female").checked){
                gender = "female";
            }
            if(document.getElementById("other").checked){
                gender = "other";
            }

            var payOption = document.getElementById("recipient");
            var selectedValue = payOption.options[payOption.selectedIndex].value;
            

            let customerrr = new customer(firstAndLast, email, gender, selectedValue);
           
            document.getElementById("cname").innerHTML = "Name: " + customerrr.name;
            document.getElementById("cgender").innerHTML = "Gender: "+ customerrr.gender;
            document.getElementById("cpayment").innerHTML = "Choosen payment method: "+ customerrr.payOption;

            
            
            document.getElementById("recipt").style.visibility = "visible";
            
            
        }
    }
});
      
