function createUser(manufacturer, model, weight) {
    return {
    manufacturer: manufacturer,
    model: model,
    weight: weight,
    displayInfo: function () {
        console.log("Manufacturer: " + this.name + ", model: " + this.age + ", weight:" + this.weight + "g");
        }
    
    };
    
}
var sony = createUser("Sony Walkman", "NW-A55", 99);
sony.displayInfo();