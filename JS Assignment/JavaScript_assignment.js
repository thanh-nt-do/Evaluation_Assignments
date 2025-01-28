// 1. Write a JavaScript function that reverse a number

function reverseNum(num) {
    num = String(num)
    let res = ''
    
    for (let i = 0; i < num.length; i++) {
        res = num[i] + res
    }
    
    return res
}

// console.log(reverseNum(32243))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 

function isPalindrome(word) {
    word = String(word)
    l = word.length
    
    for (let i = 0; i < (l / 2); i++) {
        if (word[i] != word[l-i-1]) {
            return false
        }
    }
    
    return true
}

// console.log(isPalindrome("egoe"))

// 3. Write a JavaScript function that generates all combinations of a string

function allCombinationString(str) {
    let res = []

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            res.push(str.slice(i, j + 1))
        }
    }

    return res
}

// console.log(allCombinationString('thiscat'))

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order

function sortString(str) {
    str = String(str)
    
    return str.split("").sort().join("")
}

// console.log(sortString("webmaster"))

// 5. Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter of each word of the string in upper case

function upperFirstLetter(str) {
    str = String(str)
    arr = str.split(" ")
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
    }
    
    return arr.join(" ")
}

// console.log(upperFirstLetter('the quick brown fox'))

// 6. Write a JavaScript function that accepts a string as a parameter 
// and find the longest word within the string

function findLongestStr(str) {
    str = String(str)
    arr = str.split(" ")
    
    let res = ""
    let curMaxLen = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > curMaxLen) {
            res = arr[i]
            curMaxLen = arr[i].length
        }
    }
    
    return res
}

// console.log(findLongestStr('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter 
// and counts the number of vowels within the string

function countVowel(str) {
    str = String(str)
    vowels = ['u', 'e', 'o', 'a', 'i']

    let res = 0

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            res += 1
        }
    }

    return res
}

// console.log(countVowel('The quick brown fox')) 

// 8. Write a JavaScript function that accepts a number as a parameter 
// and check the number is prime or not

function isPrime(num) {
    num = Number(num)

    if (num <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

// console.log(isPrime(11)) 

// 9. Write a JavaScript function which accepts an argument and returns the type

function findType(arg) {
    return typeof arg
}

// console.log(findType({a:1}))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix

function createIdMatrix(n) {
    let res = []

    for (let i = 0; i < n; i++) {
        tmp = new Array(n).fill(0);
        tmp[i] = 1
        res.push(tmp)
    }

    return res
}

// console.log(createIdMatrix(3))

// 11. . Write a JavaScript function which will take an array of numbers stored 
// and find the second lowest and second greatest numbers, respectively

function findSecond(arr) {    
    let n = arr.length

    if (n < 2) {
        return
    }

    return [arr[1], arr[n-2]]
}

// console.log(findSecond([1,2,3,4,5]))

// 12. Write a JavaScript function which says whether a number is perfect

function isPerfectNumber(num) {
    num = Number(num)

    let divisorSum = 0

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisorSum += i
        }
    }

    return num === divisorSum
}

// console.log(isPerfectNumber(8128))

// 13. Write a JavaScript function to compute the factors of a positive integer

function findFactor(num) {
    num = Number(num)

    if (num === 1) {
        return [1]
    }

    let res = [num]

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            res.push(i)
        }
    }

    return res
}

// console.log(findFactor(12))

// 14. Write a JavaScript function to convert an amount to coins

function amountTocoins(amount, coins) {
    coins.sort((a,b) => b - a)

    let res = []

    for (let i = 0; i < coins.length; i++) {
        while (amount - coins[i] >= 0) {
            res.push(coins[i])
            amount -= coins[i]
        }
    }

    return res
}

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result

let compute_bn = (b, n) => {
    b = Number(b)
    n = Number(n)
    
    return b ** n
}

// console.log(compute_bn(2,3))

// 16. Write a JavaScript function to extract unique characters from a string

function extractUniqueC(str) {
    str = String(str)
    str = str.toLowerCase().split('')
    str = [...new Set(str)]

    return str.join('')
}

// console.log(extractUniqueC('thequickbrownfoxjumpsoverthelazydog'))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string

function countOccurence(str) {
    str = String(str)
    str = str.replaceAll(' ', '')

    let res = {}; 

    for (let i = 0; i < str.length; i++) {
        if (!res[str[i]]) {
            res[str[i]] = 0;
        }
        res[str[i]] += 1;
    }

    return res
}

// console.log(countOccurence("this is a test"))

// 18. Write a function for searching JavaScript arrays with a binary search

function binarySearch(arr, target) {
    arr.sort((a, b) => a - b);
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] === target) {
            return true
        } else if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return false
}

// console.log(binarySearch([4,2,6,3,6,2,3,5], 3))

// 19. Write a JavaScript function that returns array elements larger than a number

function largerThan(num, arr) {
    let res = []

    for (let ele of arr) {
        if (ele > num) {
            res.push(ele)
        }
    }

    return res
}

// console.log(largerThan(5, [1,2,6,3,7,2,4,9,9]))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters

function getRandomChar(n) {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let res = '';

    for (let i = 0; i < n; i++) {
        res += char[Math.floor(Math.random() * char.length)];
    }

    return res;
}

// console.log(getRandomChar(6))

// 21. Write a JavaScript function to get all possible subset with a fixed length combinations in an array

function allSubset(arr, targetLength) {
    arr.sort((a,b) => a-b)
    let res = []

    function backtrack(startIndex, curSubset) {
        if (curSubset.length === targetLength) {
            res.push([...curSubset])
            return
        }

        for (let i = startIndex; i < arr.length; i++) {
            if (i > 0 && arr[i] === arr[i-1]) {
                continue
            }
            curSubset.push(arr[i])
            backtrack(i + 1, curSubset)
            curSubset.pop()
        }
    }

    backtrack(0, [])

    return res
}

// console.log(allSubset([1, 2, 3, 4, 5, 2], 3))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter 
// and the function will count the number of occurrences of the specified letter within the string

function countLetterOcurrence(l, str) {
    let count = 0
    
    for (let c of str) {
        if (c === l) { 
            count += 1
        }
    }

    return count
}

// console.log(countLetterOcurrence('o', 'microsoft.com'))

// 23. Write a JavaScript function to find the first not repeated character

function firstNonRepeated(str) {
    let count = {}

    for (ele of str) {
        if (!count[ele]) {
            count[ele] = 0;
        }
        count[ele] += 1;
    }

    for (ele of str) {
        if (count[ele] == 1) {
            return ele
        }
    }

    return ''
}

// console.log(firstNonRepeated('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr
}

// console.log(bubbleSort([5, 2, 9, 1, 5, 6]))
// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input 
// and returns the longest country name as output

function longestName(arr) {
    let res = arr[0]

    for (ele of arr) {
        if (ele.length > res.length) {
            res = ele
        }
    }

    return res
}

// console.log(longestName(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters

function longestSubstring(str) {
    let seen = {}
    let res = ''
    let l = 0

    for (let r = 0; r < str.length; r++) {
        let c = str[r]
        if (!seen[c]) {
            seen[c] = 0
        }
        seen[c] += 1

        while (seen[c] > 1) {
            seen[str[l]] -= 1
            l += 1
        }

        if (r - l + 1 > res.length) {
            res = str.slice(l, r + 1)
        }
    }

    return res
}

// console.log(longestSubstring('pwwkew'))

// 27. Write a JavaScript function that returns the longest palindrome in a given string

function longestPalindrome(str) {
    if (str.length === 0) {
        return ''
    }
    
    let res = str[0]
    let count = {}

    for (let i = 0; i < str.length; i++) {
        if (!count[str[i]]) {
            count[str[i]] = [i]
            continue
        }

        for (index of count[str[i]]) {
            if (i - index + 1 > res.length && isPalindrome(str.slice(index, i + 1))) {
                res = str.slice(index, i + 1)
            }
        }
        count[str[i]].push(i)
    }

    return res
}

// console.log(longestPalindrome('bananas'))
// console.log(longestPalindrome('abracadabra'))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter

let bindPalindrome = (isPalindrome, str, thisArg = undefined) => {
    return isPalindrome.call(thisArg, str)
}

// 29. Write a JavaScript function to get the function name

let getFunctionName = (fn) => {
    return fn.name
}

// console.log(getFunctionName(bindPalindrome))