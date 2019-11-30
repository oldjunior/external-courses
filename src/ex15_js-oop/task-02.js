'use strict';
class Device {
  constructor(name, powerConsumption) {
    this.name = name;
    this.powerConsumption = powerConsumption;
    this.isPlugged = false;
  }
}
class HomeAppliance extends Device {
  constructor(name, powerConsumption) {
    super(name, powerConsumption);
  }
}
class ElectronicDevice extends Device {
  constructor(name, powerConsumption) {
    super(name, powerConsumption);
  }
}
class Room {
  constructor() {
    this.devices = Array.prototype.slice.call(arguments);
  }
  plugDevice(isTurnOn) {
    const plugDevices = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < plugDevices.length; i++) {
      for (let j = 0; j < this.devices.length; j++) {
        if (this.devices[j].name === plugDevices[i].name) this.devices[j].isPlugged = isTurnOn;
      }
    }
  }
  getTotalPowerConsumption() {
    let totalPowerConsumption = 0;
    this.devices.forEach(device => {
      if (device.isPlugged) totalPowerConsumption += device.powerConsumption;
    });
    return totalPowerConsumption;
  }
  findDevice(byName) {
    return this.devices.find(device => device.name.toLowerCase() === byName.toLowerCase());
  }
}

const
  kettle = new HomeAppliance('Kettle', 1500),
  fridge = new HomeAppliance('Refrigerator', 200),
  microwave = new HomeAppliance('Microwave oven', 1200),
  iron = new HomeAppliance('Steam iron', 2000),
  tv = new ElectronicDevice('Television', 250),
  laptop = new ElectronicDevice('Laptop', 150),
  kitchen = new Room(fridge, kettle, microwave),
  livingRoom = new Room(laptop, kitchen, iron);
kitchen.plugDevice(true, fridge, kettle);
console.log(kitchen.getTotalPowerConsumption());
console.log(kitchen.findDevice('kettle'));
livingRoom.plugDevice(false, iron);