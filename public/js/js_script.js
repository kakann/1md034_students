
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

let myElement = document.getElementById("myID");

for (var burger of burgers)
{
        let listItem = document.createElement("li");
        let listValue = document.createTextNode(burger.burgName);
        let innerList = document.createElement("ol");
        
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
        myElement.appendChild(listItem);
        
        listItem.appendChild(innerList);
}




document.getElementById("V-burger").innerHTML = vburger.info();
document.getElementById("S-burger").innerHTML = sburger.info();
document.getElementById("D-burger").innerHTML = dburger.info();


