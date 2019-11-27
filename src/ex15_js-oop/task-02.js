'use strict';
class Device {
  constructor(name, powerCons) {
    this.name = name;
    this.powerCons = powerCons;
    this.isPlugged = false;
  }
}
class HomeAppliance extends Device {
  constructor(name, powerCons) {
    super(name, powerCons);
  }
}
class ElectronicDevice extends Device {
  constructor(name, powerCons) {
    super(name, powerCons);
  }
}
class Room {
  constructor() {
    this.devices = Array.prototype.slice.call(arguments);
  }
  plugDevice(io) {
    const plugDevices = Array.prototype.slice.call(arguments, 1);
    for (let i = 0; i < plugDevices.length; i++) {
      for (let j = 0; j < this.devices.length; j++) {
        if (this.devices[j].name === plugDevices[i].name) this.devices[j].isPlugged = !!io;
      }
    }
  }
  getTotalPowerCons() {
    let totalPowerCons = 0;
    this.devices.forEach(device => {
      if (device.isPlugged) totalPowerCons += device.powerCons;
    });
    return totalPowerCons;
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
kitchen.plugDevice(1, fridge, kettle);
console.log(kitchen.getTotalPowerCons());
console.log(kitchen.findDevice('kettle'));
livingRoom.plugDevice(0, iron);