[![Build Status](https://travis-ci.org/Cereceres/flatten-array.svg?branch=master)](https://travis-ci.org/Cereceres/flatten-array)
# flatten-array
flatten a array of elemts given

# install

```bash
npm install flatten-array
```

# Use

```js
const flatten = require('flatten-array')
let arrayToFlatten = [[1,2,[3]],4]
flatten(arrayToFlatten)// -> [1,2,3,4]
```

# API 

##  flatten(arrayToFlatten [, arrayFlatten])

Receive the array to be flatten and the array where store the array flatten.
