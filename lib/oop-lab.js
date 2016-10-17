//GitHub repo containing a real-world problem modeled using OOP while taking advantage of inheritance, encapsulation, polymorphism and the other OOP concepts.``
//method build with storeys rooms, kitchen 
function Building(rooms, color, storey){
  //property of the class
  this.name = "House";
  this.rooms = rooms;
  this.color = color;
  this.storey = storey;
}

Building.prototype.build = function(){
    return "A " + this.name + ", with " + this.rooms + " rooms" + " painted " + this.color + " having "  + this.storey + " stories"
}


function Bungalow(rooms, color, storey){
  this.name = "Bungalow";
  this.rooms = rooms;
    this.color = color;
    this.storey = storey;
}

//inheritance 
Bungalow.prototype = new Building();

var Bunga = new Bungalow(3, "red", "3");
console.log(Bunga.build())