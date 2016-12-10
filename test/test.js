'use strict'
const assert = require('assert')
const flatten = require('../index')
describe('test to flatten array', function () {
    it('should flatten  a array given', function () {
        let arrayToFlatten = [[1,2,[3]],4]
        assert.deepEqual(flatten(arrayToFlatten), [1,2,3,4])
    })
    it('should throw  error if a array is not passed', function () {
        try {
          flatten('is not a array')  
        } catch (e) {
            assert(e)
        }
    })
    
    it('should return a array', function () {
        assert(Array.isArray(flatten([1,[[2,3,[3],[5,8]]]])))
        assert.deepEqual(flatten([1,[[2,3,[3],[5,8]]]]), [1,2,3,3,5,8])
    })
})