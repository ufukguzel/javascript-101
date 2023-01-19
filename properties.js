function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
//nesneye fonksiyon kullanarak özellik eklemek.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  

  let beagle = new Dog("Snoopy");

  //direkt fonksiyon içine prototipe ekleyerek özellik ekleme 