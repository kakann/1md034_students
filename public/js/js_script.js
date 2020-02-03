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


console.log( vburger.info() );
