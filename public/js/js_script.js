/* STEP 10 JS
let myButton = document.getElementById("submitKey");

var firstAndLast = document.getElementById("firstname").value;
var email = document.getElementById("email").value;
var adress = document.getElementById("adress").value;
var housenr = document.getElementById("housenr").value;
var gender;

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



function customer(name, email, adress, house, gender, payOption){
    this.name = name;
    this.email = email;
    this.adress = adress;
    this.house = house;
    this.gender=gender;
    this.payOption = payOption;
    
}

let customers = [("Martin", "asd", "ez", 66, "male", "Kort")];

myButton.onclick = function (){
    let newCustomer = new customer(firstAndLast, email, adress, housenr, gender, selectedValue);
    customers.push(newCustomer);
}

console.log(customers);
/*








































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

let myElement = document.getElementById("wrapper");
/*
for (var burger of burgers)
{
    let listItem = document.createElement("div");
    listItem.className = "box";
    let listValue = document.createTextNode(burger.burgName);
    var img = document.createElement("img");
    img.src = burger.imgPath;
    img.width = 200;
    img.height= 200;
    
    
    let innerList = document.createElement("ul");
    
    if(burger.gluten){
        let innerGlut = document.createElement("li");
        let glutValue = document.createTextNode("This burger contains gluten.");
        innerGlut.appendChild(glutValue);
        innerList.appendChild(innerGlut);
    }
    if(burger.lactose){
        let innerLact = document.createElement("li");
        let lactValue = document.createTextNode("This burger contains lactose.");
        innerLact.appendChild(lactValue);
        innerList.appendChild(innerLact);
    }
    
    let innerKCal = document.createElement("li");
    let KCalValue = document.createTextNode("This burger contains " + burger.kCal + " calories");    
    innerKCal.appendChild(KCalValue);
    innerList.appendChild(innerKCal);
    
    
    
    listItem.appendChild(listValue);
    listItem.appendChild(img);
    myElement.appendChild(listItem);
    
    let allergies = document.createElement("SECTION");
    allergies.className = "allergy";
    listItem.appendChild(allergies);
    allergies.appendChild(innerList)
    
    //listItem.appendChild(innerList);
}




//document.getElementById("V-burger").innerHTML = vburger.info();
//document.getElementById("S-burger").innerHTML = sburger.info();
//document.getElementById("D-burger").innerHTML = dburger.info();


*/
