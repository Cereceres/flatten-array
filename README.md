[![Build Status](https://travis-ci.org/Cereceres/flatten-array.svg?branch=master)](https://travis-ci.org/Cereceres/flatten-array)
# flattenarray-node
flatten a array of elemts given

# install

```bash
npm install flattenarray-node
```

# Use

```js
const flatten = require('flattenarray-node')
let arrayToFlatten = [[1,2,[3]],4]
flatten(arrayToFlatten)// -> [1,2,3,4]
```

# API 

##  flatten(arrayToFlatten [, arrayFlatten])

Receive the array to be flatten and the array where store the array flatten.
