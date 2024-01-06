// Класс прибора
class Device {
    constructor(name) {
      this.name = name;
      this.powerOn = false;
    }
    
    turnOn() {
      if (!this.powerOn) {
        console.log(`${this.name} включен`);
        this.powerOn = true;
      } else {
        console.log(`${this.name} уже включен`);
      }
    }
    
    turnOff() {
      if (this.powerOn) {
        console.log(`${this.name} выключен`);
        this.powerOn = false;
      } else {
        console.log(`${this.name} уже выключен`);
      }
    }
  }
  
  class VT extends Device {
    constructor() {
      super("Лампа");
    }
  }
  
  class TV extends Device {
    constructor() {
      super("Телевизор");
    }
  }
  
  const myVT = new VT();
  
  const myTV = new TV();
  
  myVT.turnOn(); 
  myTV.turnOn(); 
  myVT.turnOff(); 
  myTV.turnOff(); 
  myTV.turnOff(); 
  