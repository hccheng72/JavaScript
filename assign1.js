// 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let p in salaries) {
    sum += salaries[p];
}
// 2
/**
 * 
 * @param {object} obj 
 */
function multiplyNumeric(obj) {
    for (let p in obj) {
        if(!isNaN(obj[p])) {
            obj[p] *= 2;
        }
    }
}
// 3
/**
 * 
 * @param {string} str 
 * @returns 
 */
function checkEmailId(str) {
    let atIndex = str.indexOf('@'),
        dotIndex = str.indexOf('.');
    
    if (atIndex === -1 || dotIndex === -1 || (dotIndex - atIndex) < 1) {
        return false;
    }
    return true;

}
// 4
/**
 * 
 * @param {string} str 
 * @param {int} maxlength 
 * @returns {string}
 */
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 1);
    }
    return str + '…';
}
// 5
let arr = ["James", "Brennie"];
arr.push("Robert");
/**
 * 
 * @param {string[]} arr 
 * @param {string} newItem 
 * @returns 
 */
function replaceMiddle(arr, newItem) {
    if (arr.length % 2) return;

    let i = Math.floor(arr.length / 2);
    arr[i] = newItem;
}

replaceMiddle(arr, "Calvin");
arr.shift()
console.log(arr);
arr.unshift("Rose", "Regal");
// 6
/**
 * 
 * @param {string[]} cardNumbers 
 * @param {string[]} bannedPrefixes 
 * @returns {string[]}
 */
function validateCards(cardNumbers, bannedPrefixes) {
    let result = [];

    for (let number of cardNumbers) {
        let obj = {};
        obj['card'] = number;
        obj['isValid'] = isValid(number);
        
        for (let p of bannedPrefixes) {
            if (number.startWith(p)) {
                obj['isAllowed'] = false;
                break;
            } else {
                obj['isAllowed'] = true;
            } 
        }
        result.add(JSON.stringify(obj));
    }
    return result;
}
/**
 * 
 * @param {string} cardNumber 
 * @returns {boolean}
 */
function isValid(cardNumber) {
    let lastIndex = cardNumber.length - 1, 
        n = 0;

    for (let i = 0; i < lastIndex; i++) {
        n += +cardNumber[i] * 2;
    }
    n %= 10;

    return (n === +cardNumber[lastIndex]);
}
// bonus
/**
 * 
 * @param {int[]} intArr 
 * @returns {int}
 */
function findLongestPeak(intArr) {
    if (intArr.length < 3) 
        return 0;

    let  maxCount = 0,
        preindex= null;
    
    for (let i = 0; i < intArr.length; i++) {
        if ((i === 0 || intArr[i] < intArr[i-1]) && (i === intArr.length - 1 || intArr[i] < intArr[i+1])) {
            if (preindex === null) {
                preindex = i;
            } else {
                maxCount = Math.max(maxCount, i - preindex + 1);
                preindex = null;
            }
        }
        else if (intArr[i] === intArr[i-1]) {
            preindex = null;
        }
    }
    return maxCount;
}