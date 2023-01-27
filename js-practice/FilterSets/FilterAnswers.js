 // 1
function evenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
 
 // 2
function longStrings(strings) {
    return strings.filter(str => str.length > 5);
}
 
 // 3
function filterByProperty(objects, prop, value) {
    return objects.filter(obj => obj[prop] === value);
}
 
 // 4
function divisibleBy(numbers, divisor) {
    return numbers.filter(num => num % divisor === 0);
}
 
 // 5
function filterByPropType(objects, prop, value, type) {
    return objects.filter(obj => typeof obj[prop] === type && obj[prop] === value);
}
 
 // 6
function filterByRange(numbers, min, max) {
    return numbers.filter(num => num >= min && num <= max);
}
 
 // 7
function filterByRegex(objects, prop, regex) {
    return objects.filter(obj => obj[prop].match(regex));
}
 
 // 8
function filterBySubstring(strings, substring) {
    return strings.filter(str => str.includes(substring));
}
 
 // 9
function primeNumbers(numbers) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return numbers.filter(num => isPrime(num));
}
 
 // 10
function filterByArrayValue(objects, prop, value) {
    return objects.filter(obj => Array.isArray(obj[prop]) && obj[prop].includes(value));
}
 
 // 11
function filterByDateRange(objects, prop, startDate, endDate) {
    return objects.filter(obj => obj[prop] >= startDate && obj[prop] <= endDate);
}
 
 // 12
function evenPrimeNumbers(numbers) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return numbers.filter(num => num % 2 === 0 && isPrime(num));
}
 
 // 13
function filterByFunctionReturn(objects, prop, returnValue) {
    return objects.filter(obj => typeof obj[prop] === 'function' && obj[prop]() === returnValue);
}
 
// 14
function filterByObjectKeyValue(objects, prop, key, value) {
    return objects.filter(obj => typeof obj[prop] === 'object' && obj[prop][key] === value);
}


// 15
    function filterByMultipleProperties(objects, props) {
        return objects.filter(obj => {
            let match = true;
            props.forEach(prop => {
                if(obj[prop.key] !== prop.value){
                    match = false;
                }
            });
            return match;
        });
    }