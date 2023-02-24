## Functions 

[Back to Table of Contents](../README.md/#Table-of-Contents)

[Mozilla Functions Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

A function is a reusable block of code that can be invoked by a name. Functions can take in parameters and return a value.
```javascript
function functionName(parameter1, parameter2) {
  // code to be executed
  return value;
}
//call
functionName(arguments)
```
### Arrow Functions
A shorthand way of writing function expressions
```javascript
const functionName = (param1, param2) => {
    // code to be executed
}
//Example:
const checkAge = age => age >= 18 ? 'You are an adult' : 'You are a minor';  // Left side of : will run if true, right side if false
```

## Conditional Statements

[Back to Table of Contents](../README.md/#Table-of-Contents)

Conditional statements are used to make decisions in code. The most common type of conditional statement is the if-else statement.

### If Else Statements
```javascript
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition1 is false and condition2 is true
} else {
    // code to be executed if all conditions are false
}
```

### Switch Statements
```javascript
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression does not match any case
}
```

### Ternary Operator
shorthand way to write a basic if-else statement in a single line of code.
```javascript
let result = condition ? parameter1 : parameter2;

//Example:
const checkAge = age => age >= 18 ? 'You are an adult' : 'You are a minor';  // Left side of : will run if true, right side if false
```

[Back to Table of Contents](../README.md/#Table-of-Contents)

## Regex

[Mozilla MDN Regex Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[MDN Regex CheatSheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

[Awesome Regex Cheatsheet](https://regex101.com)

[Regex Practical Examples](https://towardsdatascience.com/regular-expressions-clearly-explained-with-examples-822d76b037b4)

[Back to Table of Contents](../README.md/#Table-of-Contents)

### Character Classes
```javascript
Flags and Modifiers (Added at end after the closing /)
g	// Global search. Find all matches, rather than stopping after the first.
i	// Case-insensitive search.
m	// Multiline search. Treat beginning and end characters (^ and $) as working over multiple lines.
s	// Dotall search. Allows the dot (.) to match newline characters.
u	// Unicode search. Treat the pattern as a sequence of Unicode code points.
y	// Sticky search. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.
(x)	// Capturing group. Captures the matched substring and stores it for later use.
(?:x)	// Non-capturing group. Groups regular expressions together without capturing the matched substring.
x?	// Optional. Matches 0 or 1 occurrence of preceding element.
x*	// 0 or more. Matches 0 or more occurrences of preceding element.
x+	// 1 or more. Matches 1 or more occurrences of preceding element.
x{n}	// Exactly n occurrences. Matches exactly n occurrences of preceding element.
x{n,}	// n or more occurrences. Matches n or more occurrences of preceding element.
x{n,m}	// Between n and m occurrences. Matches between.

// Example: replace all vowels
let vowels = /[aeiou]/gi; // global and case insensitive search

// Example: function for validating a username using regular expression. lowercase, letters, numbers, underscore, and between 4-16 length
function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/i;
  return res.test(username);
}



| Character Classes | Explanation                                         | Example                                              |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /./               | Matches any single character                        | /.y/ matches "my" and "ay", but not "yes", in "yes   |
|                   |                                                     |  make my day".                                       |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\d/              | Matches any digit (0-9)                             | /\d/ or /[0-9]/ matches 2 in B2 is the suite number. |               
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\D/              | Matches any non-digit character                     | /\D/ or /[^0-9]/ matches B in B2 is the suite number |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\w/              | Matches any word character (alphanumeric characters | /\w/ matches "a" in "apple", "5" in "$5.28", and     |
|                   | and underscores)                                    | "3" in "3D"                                          |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\W/              | Matches any non-word character (non-alphanumeric    | /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%"         |
|                   | characters and spaces)                              |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\s/              | Matches any whitespace character                    | /\s\w*/ matches " bar" in "foo bar"                  |   
|                   | (space, tab, newline, etc.)                         |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\S/              | Matches any non-whitespace character                | /\S\w*/ matches "foo" in "foo bar".                  |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[a-z]/           | Matches any lowercase letter from a to z            |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /^[A-Z]/          | Matches any uppercase letter from A to Z at the     |                                                      |
|                   | start of the string                                 |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[a-zA-Z]/        | Matches any letter, both uppercase and lowercase    |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[0-9]{3}/        | Matches exactly 3 digits                            |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /[0-9a-zA-Z]/     | Matches any alphanumeric character                  |                                                      |
|                   | (letters and digits)                                |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| /\b[A-Za-z]+\b/   | Matches any word consisting of one or more letters  |                                                      |
|                   | (case-insensitive), surrounded by word boundaries   |                                                      |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
```

### Assertions
```javascript
| Assertions        | Explanation                                         | Example                                              |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| ^                 | Matches the start of a line                         | /^A/ Matches any uppercase letter A at the           |
|                   |                                                     |  start of the string                                 |
|-------------------|-----------------------------------------------------|------------------------------------------------------|                
| $                 | Matches the end of a line                           | /$z/ Matches any lowercase letter z at the end of    |
|                   |                                                     |   the string                                         |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| \b                | Matches a word boundary (^\w|\w$|\W\w|\w\W)         |  /\bgreen\b/ Matches the word "green" surrounded     |
|                   |                                                     |  by word boundaries                                  |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| \B                | Matches a non-word boundary                         | /\Bgreen\B/ Matches any instance of the letters      | 
|                   |                                                     | "green" NOT surrounded by word boundaries            |        
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| (?=...)           | Positive lookahead. Matches if the                  | /\d(?=%)/ Matches a digit only if it is followed     |
|                   | pattern inside the parentheses can be matched       |  by a % symbol                                       |  
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| (?!...)           | Negative lookahead. Matches if the pattern          | /\d(?!%)/ Matches a digit only if it is NOT          |
|                   | inside the parentheses cannot be matched            | followed by a % symbol                               |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| (?<=...)          | Positive lookbehind. Matches if pattern inside      | /\w+(?=\t) Matches a word followed by a tab,         |
|                   | parentheses can be matched before  current positio  | but doesn't include the tab in the match.            |
|-------------------|-----------------------------------------------------|------------------------------------------------------|
| (?<!...)          | Negative lookbehind. Matches if the pattern inside  | /\d+(?!.) Matches a digit not followed by a period,  |  
|                   | parentheses can't be matched before current position| example: when matching a num but not matching a float|                              
|-------------------|-----------------------------------------------------|------------------------------------------------------|
// Example: Removes all trailing !'s at end of string
function remove (string) {  
  return string.replace(/!*$/g, '');
}
```
### Groups and Backreferences
```javascript
() - Grouping. Groups multiple characters together and allows you to apply a quantifier to the entire group.
Example: (ab)+ matches "ababab"

[] - Character set. Matches any character inside the square brackets.
Example: [abc] matches "a", "b", or "c"

[^] - Negated character set. Matches any character NOT inside the square brackets.
Example: [^abc] matches any character except "a", "b", or "c"

\d - Matches any digit (0-9). Equivalent to [0-9].
Example: \d{3} matches "123"

\w - Matches any word character (a-z, A-Z, 0-9, ). Equivalent to [a-zA-Z0-9].
Example: \w+ matches "word"

\s - Matches any whitespace character (space, tab, newline).
Example: \s matches " "

. - Matches any character except newline.
Example: . matches any character except newline

* - Matches 0 or more of the preceding character or group.
Example: a* matches "", "a", "aa", "aaa", etc.

+ - Matches 1 or more of the preceding character or group.
Example: a+ matches "a", "aa", "aaa", etc.

? - Matches 0 or 1 of the preceding character or group.
Example: a? matches "" or "a"

{n} - Matches exactly n of the preceding character or group.
Example: a{3} matches "aaa"

{n,} - Matches n or more of the preceding character or group.
Example: a{3,} matches "aaa", "aaaa", "aaaaa", etc.

{n,m} - Matches between n and m of the preceding character or group.
Example: a{3,5} matches "aaa", "aaaa", or "aaaaa"

(?<name>) - Named capturing group. Creates a named group that you can refer to later.
Example: (?<year>\d{4}) matches "2022" and creates a named group "year"

\k<name> - Matches the text matched by the named group.
Example: \k<year> matches the text matched by the group named "year"

(?:) - Non-capturing group. Groups multiple characters together without creating a backreference.
Example: (?:ab)+ matches "ababab" but does not create a backreference
```

### Quantifiers 
```javascript
* - Matches 0 or more of the preceding character or group.
Example: a* matches "" (empty string), "a", "aa", "aaa", etc.

+ - Matches 1 or more of the preceding character or group.
Example: a+ matches "a", "aa", "aaa", etc.

? - Matches 0 or 1 of the preceding character or group.
Example: a? matches "" (empty string) or "a"

{n} - Matches exactly n of the preceding character or group.
Example: a{3} matches "aaa"

{n,} - Matches n or more of the preceding character or group.
Example: a{3,} matches "aaa", "aaaa", "aaaaa", etc.

{n,m} - Matches between n and m of the preceding character or group.
Example: a{3,5} matches "aaa", "aaaa", or "aaaaa"

*? - Matches 0 or more of the preceding character or group in a non-greedy manner.
Example: <.*?> matches the first <>, rather than the last </> in <a>This is <b> bold </b> </a> 

+? - Matches 1 or more of the preceding character or group in a non-greedy manner.
Example: <.+?> matches the first <a> rather than the last </a> in <a>This is <b> bold </b> </a> 

?? - Matches 0 or 1 of the preceding character or group in a non-greedy manner.
Example: <.?> matches the first <a> rather than the last </a> in <a>This is <b> bold </b> </a> 

*+ - Possessive quantifier , matches as much as possible of the preceding character or group.
Example: a*+ matches "aaaaaaaaaa" in "aaaaaaaaaa a"
 
++ - Possessive quantifier, matches as much as possible of the preceding character or group.
Example: a++ matches "aa" in "aa a" 

?+ - Possessive quantifier, matches as much as possible of the preceding character or group.
Example: a?+ matches "a" in "aa a" 

//Example: Removing Ending 0's
function noBoringZeros(n) {
  // Use regex to match any trailing zeroes
  // * quantifier is used to match zero or more occurences of the preceding element (0)
  // $ asserts position at the end of the string
  let trailingZeroes = /0*$/; 
  
  // replace any trailing zeroes with an empty string
  n = n.toString().replace(trailingZeroes, "");
  
  // convert the number back to number format
  return +n;
}

//Example: Remove Starting 0's
let input = "000001234";
let leadingZeroes = /^0+/;
let output = input.replace(leadingZeroes,"")

//The + quantifier specifies that the preceding character (in this case, 0) can be matched one or more times. So this regular expression will match one or more //consecutive zeroes at the start of a string.
//The ^ asserts position at the start of the string. So this regular expression will only match the leading zeroes at the start of the string.

//Example: Removing Starting and Ending 0's
let input = "0000012340000";
let leadingAndTrailingZeroes = /^0+|0*$/;
let output = input.replace(leadingAndTrailingZeroes,"")

//This will match the leading zeroes at the start of the string and trailing zeroes at the end of the string. Using the replace() method, it will replace all leading //zeroes and trailing zeroes with an empty string, giving you an output of "1234".
//The | symbol is a logical operator, it matches the preceding or the following element whatever comes first.
```
### Regex Methods
```javascript
1. exec() - // This method executes a search for a match in a specified string. It returns an array of information or null if no match is found. 
Example: /hello/g.exec("Hello World") // ["Hello"]

2. test() - // This method tests for a match in a specified string. It returns true or false. 
Example: /hello/g.test("Hello World") // true

3. match() - // This method searches a string for a match and returns an array of information or null if no match is found. 
Example: "Hello World".match(/hello/g) // ["Hello"]

4. search() - // This method searches a string for a specified value and returns the position of the match. 
Example: "Hello World".search(/hello/g) // 0

5. replace() - // This method searches a string for a specified value and replaces it with a new value. 
Example: "Hello World".replace(/hello/g, "Goodbye") // "Goodbye World"

6. split() - // This method splits a string into an array of substrings based on a specified separator. 
Example: "Hello World".split(" ") // ["Hello", "World"]

7. matchAll() - // This method returns an iterator containing all results matching a specified regular expression. 
Example: "Hello World".matchAll(/ello/) // ["ello"]

8. flags() - // This method returns a string containing the flags of the regular expression. 
Example: /hello/g.flags() // "g"

9. compile() - // This method compiles a regular expression into an object that can be used to match against strings. 
Example: const regex = /hello/g.compile() // {exec: ƒ, test: ƒ, flags: "g"}

10. toString() - // This method returns a string representing the specified regular expression. 
Example: /hello/g.toString() // "/hello/g"
```
