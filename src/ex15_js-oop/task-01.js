'use strict';
function Candy(brand, weight) {
  this.brand = brand;
  this.weight = weight;
}
function SugarCandy(brand, weight, type) {
  Candy.call(this, brand, weight);
  this.type = type;
}
function ChocolateCandy(brand, weight, type) {
  Candy.call(this, brand, weight);
  this.type = type;
}
SugarCandy.prototype = Object.create(Candy.prototype);
SugarCandy.prototype.constructor = SugarCandy;
ChocolateCandy.prototype = Object.create(Candy.prototype);
ChocolateCandy.prototype.constructor = ChocolateCandy;
function Gift() {
  this.candies = [];
}
Gift.prototype.addCandy = function(candy, qty) {
  for (let i = 0; i < qty; i++) {
    this.candies.push(candy);
  }
  return this;
}
Gift.prototype.getTotalWeight = function() {
  let totalWeight = 0;
  this.candies.forEach(function(candy) { totalWeight += candy.weight });
  return totalWeight.toFixed(3);
}
Gift.prototype.sortCandies = function(byProp, selectedType) {
  switch(byProp) {
    case 'brand':
    default:
      return this.candies.sort((candy1, candy2) => {
        if (candy1.brand.toLowerCase() < candy2.brand.toLowerCase()) {
          return -1;
        }
        if (candy1.brand.toLowerCase() > candy2.brand.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    break;
    case 'type':
      return this.candies.filter(candy => candy.type === selectedType);
    break;
  }
}
Gift.prototype.findCandy = function(byBrand) {
  return this.candies.find(candy => candy.brand.toLowerCase() === byBrand.toLowerCase());
}

const
  chupachups = new SugarCandy('Chupa Chups', 0.012, 'lollipop'),
  mnms = new SugarCandy('MnMs', 0.360, 'dragee'),
  sula = new SugarCandy('Sula', 0.420, 'hard candy'),
  milkyway = new ChocolateCandy('Milky Way', 0.051, 'chocolate bar'),
  kitkat = new ChocolateCandy('KitKat', 0.045, 'chocolate bar'),
  hersheys = new ChocolateCandy('Hersheys', 0.044, 'chocolate bar'),
  newYearsGift = new Gift();
  newYearsGift
    .addCandy(chupachups, 5)
    .addCandy(hersheys, 3)
    .addCandy(kitkat, 3)
    .addCandy(mnms, 1)
    .addCandy(sula, 1)
    .addCandy(milkyway, 4);
  console.log(newYearsGift.getTotalWeight());
  console.log(newYearsGift.sortCandies('type', 'chocolate bar'));
  console.log(newYearsGift.findCandy('kitkat'));