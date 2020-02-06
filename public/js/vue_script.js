
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
        orders: {},
        details: {x: 0, y: 0},
        currentIndex: 0,
        person: {name: '', email: '', gender: '', payOption: ''},
    },
    methods: {
        getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      this.currentIndex = this.currentIndex + 1;
      return this.currentIndex;
    },
    addOrder: function() {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      
      socket.emit('addOrder', {
        orderId: this.getNext(),
          details: this.details, // NEW CHANGE
        orderItems: this.burgArray,
      });
    },
      displayOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };

          
        this.details= {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        };
       
    },
        markDone: function() {
            
            this.displayArray=true;
            let firstAndLast = document.getElementById("firstname").value;
            let email = document.getElementById("email").value;
            
            let gender = "male";

            if(document.getElementById("male").checked){
                gender = "male";
            }
            if(document.getElementById("female").checked){
                gender = "female";
            }
            if(document.getElementById("other").checked){
                gender = "other";
            }

            let payOption = document.getElementById("recipient");
            let selectedValue = payOption.options[payOption.selectedIndex].value;

            this.person.name = firstAndLast;
            this.person.email = email;
            this.person.gender = gender;
            this.person.payOption = selectedValue;
            this.addOrder();
            

            //let customerrr = new customer(firstAndLast, email, gender, selectedValue);
           /*
            document.getElementById("cname").innerHTML = "Name: " + customerrr.name;
            document.getElementById("cgender").innerHTML = "Gender: "+ gender;
            document.getElementById("cpayment").innerHTML = "Choosen payment method: "+ customerrr.payOption;
*/

            
            
            document.getElementById("recipt").style.visibility = "visible";
            
            
        }
    }
});
      
