function mp3(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.displayInfo = function () {
        console.log("Manufacturer: " + this.manufacturer + ", model: " + this.model);
        }
    this.mp3Charact = function (charact) {
        console.log(this.manufacturer + " " +  this.model + " has a battery for " + charact.battery + "mAh." + " This provides " + charact.hours + " opening hours.")
    }
}
function Charact(battery, hours){
    this.battery = battery;
    this.hours = hours;
}
var touch = new mp3("Apple", "Ipod touch 7");
touch.displayInfo();
var touchInfo = new Charact(398, 40);
touch.mp3Charact(touchInfo);