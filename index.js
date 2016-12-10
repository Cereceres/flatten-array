'use strict'
/**
 * recursive function to flatten a array of integers given
 * @func
 * @param {Array} - arrayToFlatten of integers
 */
function flattenArray(arrayToFlatten, arrayFlatten) {
    // check if the arg is a array, if not a error is thrown
    if(!Array.isArray(arrayToFlatten)) throw new Error('Only can flat arrays and you pass a ' + typeof arrayToFlatten)
    // set the default value of arrayFlatten, this validation is used only in the first call of
    // recursive function
    arrayFlatten = arrayFlatten || []
    // loop over the array to get flatten the array 
    for (let i = 0; i < arrayToFlatten.length; ++i) {
        // if the item in the arrray is a array then the flattenArray function is callen again
        if (Array.isArray(arrayToFlatten[i])) {
          // the function is called with the element what is a array and pass the arrayFlatten as second arg
          flattenArray(arrayToFlatten[i], arrayFlatten)
          // break the loop
          continue
        }
        // if the element is not a array only push the element
        arrayFlatten.push(arrayToFlatten[i]);
    }
    // return the array flatten
    return arrayFlatten
}

module.exports = flattenArray