// 1
function squareNumbers(numbers) {
    return numbers.map(n => n * n);
}
 
 // 2
function stringLengths(strings) {
    return strings.map(s => s.length);
}
 
 // 3
function getObjectProperties(objects, prop) {
    return objects.map(obj => obj[prop]);
}
 
 // 4
function incrementNumbers(numbers) {
    return numbers.map(n => n + 1);
}
 
 // 5
function uppercaseStrings(strings) {
    return strings.map(s => s.toUpperCase());
}
 
 // 6
function addPropertyToObjects(objects, prop, value) {
    return objects.map(obj => {
        obj[prop] = value;
        return obj;
    });
}
 
 // 7
function evenNumbers(numbers) {
    return numbers.filter(n => n % 2 === 0).map(n => n);
}
 
 // 8
function filterStrings(strings, substring) {
    return strings.filter(s => s.includes(substring)).map(s => s);
}
 
 // 9
function filterObjects(objects, prop, value) {
    return objects.filter(obj => obj[prop] === value).map(obj => obj);
}
 
 // 10
function countNumbers(numbers) {
    return numbers.reduce((counts, number) => {
        counts[number] = (counts[number] || 0) + 1;
        return counts;
    }, {})
}
 
 // 11
function groupStrings(strings) {
    return strings.reduce((groups, string) => {
        const firstLetter = string[0];
        if(groups[firstLetter]) {
            groups[firstLetter].push(string);
        } else {
            groups[firstLetter] = [string];
        }
        return groups;
    }, {})
}
 
 // 12
function groupByProperty(objects, prop) {
    return objects.reduce((groups, object) => {
        const key = object[prop];
        if(groups[key]) {
            groups[key].push(object);
        } else {
            groups[key] = [object];
        }
        return groups;
    }, {})
}
 
 // 13
function convertToBinary(numbers) {
    return numbers.map(n => n.toString(2));
}
 
 // 14
function stringObjects(strings) {
    return strings.map(s => ({string: s, length: s.length}));
}
 
 // 15
function sortObjects(objects, prop) {
    return objects.sort((a, b) => a[prop] > b[prop]).map(obj => obj);
}