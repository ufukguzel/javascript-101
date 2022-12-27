class Thermostat {
    constructor(Fahrenheit){
      this.Fahrenheit = Fahrenheit;
    }
    get temperature(){
      return (5 / 9) * (this.Fahrenheit - 32);
    }
    set temperature(celsius){
      this.Fahrenheit = (celsius * 9.0 / 5 + 32);
    }
  }
    
  const thermos = new Thermostat(76); 
  let temp = thermos.temperature; 
  thermos.temperature = 26;
  temp = thermos.temperature; 