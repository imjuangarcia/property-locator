import meli from './meli';
import properati from './properati';
import argenprop from './argenprop';
import zonaprop from './zonaprop';

// Empty array to push the items to
const data = [];

// Iterate over each dataset
for (let n of meli) {
  data.push(n);
}

for (let n of properati) {
  data.push(n);
}

for (let n of argenprop) {
  data.push(n);
}

for (let n of zonaprop) {
  data.push(n);
}

export const propertyData = data;