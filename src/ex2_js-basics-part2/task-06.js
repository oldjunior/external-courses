'use strict';
function isPrimeOrComposite(num) {
  if (num > 1000) return 'Данные неверны';
  if (num <= 0) return 'Отрицательное число или ноль';
  if (num === 1) return 'Число не является ни простым, ни составным';
  for (let i = 2; i < num; i++) {
    if (!(num % i)) {
      return 'Число ' + num + ' - составное число';
    }
  }
  return 'Число ' + num + ' - простое число';
}
module.exports = isPrimeOrComposite;