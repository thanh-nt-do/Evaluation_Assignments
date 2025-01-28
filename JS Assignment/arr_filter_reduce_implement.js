
// ------------------------------------------------------------------------------------------------
// Implement the reduce method

Array.prototype.reduce = function(callbackFn, initialValue = undefined) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError("Empty array with no initial value!")
    }
    
    let currentIndex = 0
    let res = initialValue

    if (initialValue === undefined) {
        currentIndex = 1
        res = this[0]
    }

    for (let i = currentIndex; i < this.length; i++) {
        res = callbackFn(res, this[i], i, this)
    }

    return res
}

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// console.log([50].reduce(getMax, 10)); // 50

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax)); // 100

// // callback is not invoked
// console.log([50].reduce(getMax)); // 50
// console.log([].reduce(getMax, 1)); // 1

// console.log([].reduce(getMax)); // 1

// ------------------------------------------------------------------------------------------------
// Implement the filter method

// With call() function
Array.prototype.filter = function(callbackFn, thisArg = undefined) {
    let res = []

    for (let i = 0; i < this.length; i++) {
        if (callbackFn.call(thisArg, this[i], i, this)) {
            res.push(this[i])
        }
    }

    return res
}

// With bind() function
Array.prototype.filter = function(callbackFn, thisArg = undefined) {
    let res = []

    let newCallBackFn = callbackFn.bind(thisArg) // bind() create a new function

    for (let i = 0; i < this.length; i++) {
        if (newCallBackFn(this[i], i, this)) {
            res.push(this[i])
        }
    }

    return res
}

function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered) // filtered is [12, 130, 44]