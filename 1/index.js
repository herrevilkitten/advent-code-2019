const fs = require('fs');

function calculateFuel(mass, base = 0) {
  const requiredFuel = Math.max(0, Math.floor(mass / 3) - 2);
  if (requiredFuel > 0) {
    return calculateFuel(requiredFuel, base + requiredFuel);
  } else {
    return base;
  }
}

let total = 0;
const modules = fs
  .readFileSync('./advent-1-input.txt')
  .toString()
  .split(/\n/);
modules.forEach(element => {
  const requiredFuel = calculateFuel(element);
  console.log(element, '=>', requiredFuel);
  total = total + requiredFuel;
});

console.log('Total fuel:', total);
