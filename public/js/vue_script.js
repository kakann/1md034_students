
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

function customer(name, email, adress, house, gender, payOption){
    this.name= name;
    this.email= email;
    this.adress = adress;
    this.house = house;
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
        house: ""
    },
    methods: {
        markDone: function() {
            this.displayArray=true;
            var firstAndLast = document.getElementById("firstname").value;
            var email = document.getElementById("email").value;
            var adress = document.getElementById("adress").value;
            var housenr = document.getElementById("housenr").value;
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
            

            let customerrr = new customer(firstAndLast, email, adress, housenr, gender, selectedValue);

            console.log( housenr );
           

            document.getElementById("cname").innerHTML = "Name: " + customerrr.name;
            document.getElementById("cadress").innerHTML = "Adress: " + customerrr.adress;
            document.getElementById("chouse").innerHTML = "House number: " + housenr;
            document.getElementById("cgender").innerHTML = "Gender: "+ customerrr.gender;
            document.getElementById("cpayment").innerHTML = "Choosen payment method: "+ customerrr.payOption;

            
            
            document.getElementById("recipt").style.visibility = "visible";
            
            
        }
    }
});
      
