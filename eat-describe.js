function Dog(name) {
    this.name = name;
  }
  Dog.prototype = {
    // Add your code below this line
    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  
  //Prototipi yeni bir nesneye ayarlayarak, numLeks özelliğini ve eat() ve define() adlı iki yöntemi Dog prototipine ekledim