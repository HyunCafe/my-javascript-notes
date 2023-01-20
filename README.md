# Programming

# Work in Progress, Will add more as as time progresses

## **Javascript**
### Table of Contents
--------------------------------------------------------------------------------------------------
* [Strings](./topics/jsStrings.md/#Strings)
  * [String Methods](./topics/jsStrings.md/#String-Methods)
     * [length](./topics/jsStrings.md/#length)
     * [concat](./topics/jsStrings.md/#concat)
     * [substring](./topics/jsStrings.md/#substring)
     * [slice](./topics/jsStrings.md/#slice)
     * [substr](./topics/jsStrings.md/#substr)
     * [replace](./topics/jsStrings.md/#replace)
     * [indexOf](./topics/jsStrings.md/#indexOf)
     * [lastIndexOf](./topics/jsStrings.md/#lastIndexOf)
     * [toString](./topics/jsStrings.md/#toString)
     * [trim](./topics/jsStrings.md/#trim)
     * [repeat](./topics/jsStrings.md/#repeat)
     * [startsWith](./topics/jsStrings.md/#starsWith)
     * [endsWith](./topics/jsStrings.md/#endsWith)
     * [includes](./topics/jsStrings.md/#includes)
     * [search](./topics/jsStrings.md/#search)
     * [charCodeAt](./topics/jsStrings.md/#charCodeAt)
     * [charAt](./topics/jsStrings.md/#charAt)
     * [toLowerCase](./topics/jsStrings.md/#toLowerCase)
     * [toUpperCase](./topics/jsStrings.md/#toUpperCase)
     * [localeCompare](./topics/jsStrings.md/#localeCompare)
     * [split](./topics/jsStrings.md/#split)
     * [match](./topics/jsStrings.md/#match)
   --------------------------------------------------------------------------------------------------
* [Functions](./topics/jsFunctionsandConditionals.md/#Functions)
  * [Arrow Functions](./topics/jsFunctionsandConditionals.md/#Arrow-Functions)
 * [Conditional Statements](./topics/jsFunctionsandConditionals.md/#Conditional-Statements)
   * [If-Else Statements](./topics/jsFunctionsandConditionals.md/#If-Else-Statements)
   * [Ternary Operator](./topics/jsFunctionsandConditionals.md/#Ternary-Operator)
   * [Switch Statements](./topics/jsFunctionsandConditionals.md/#Switch-Statements)
 * [Loops](./topics/jsLoops.md/#Loops)
   * [For Loops](./topics/jsLoops.md/#For-Loops)
   * [For In Loops](./topics/jsLoops.md/#For-In-Loops)
   * [For Of Loops](./topics/jsLoops.md/#For-Of-Loops)
   * [For Each Loops](./topics/jsLoops.md/#For-Each-Loops)
   * [While Loops](./topics/jsLoops.md/#While-Loops)
   * [Do While Loops](./topics/jsLoops.md/#Do-While-Loops)
--------------------------------------------------------------------------------------------------
* [Arrays](./topics/jsArrays.md/#Arrays)
   * [Array Methods](./topics/jsArrays.md/#Array-Methods)
     * [push](./topics/jsArrays.md/#push)
     * [pop](./topics/jsArrays.md/#pop)
     * [shift](./topics/jsArrays.md/#shift)
     * [unshift](./topics/jsArrays.md/#unshift)
     * [splice](./topics/jsArrays.md/#splice)
     * [slice](./topics/jsArrays.md/#slice)
     * [indexOf](./topics/jsArrays.md/#indexOf)
     * [includes](./topics/jsArrays.md/#includes)
     * [filter](./topics/jsArrays.md/#filter)
     * [map](./topics/jsArrays.md/#map)
     * [sort](./topics/jsArrays.md/#sort)
     * [concat](./topics/jsArrays.md/#concat)
     * [join](./topics/jsArrays.md/#join)
     * [reverse](./topics/jsArrays.md/#reverse)
     * [reduce](./topics/jsArrays.md/#reduce)
     * [forEach](./topics/jsArrays.md/#forEach)
--------------------------------------------------------------------------------------------------
* [DOM Manipulation](./topics/jsDOMandMath.md/#DOM-Manipulation)
  * [Event Listeners](./topics/jsDOMandMath.md/#Event-Listeners)
    * [Add to Event Listen](./topics/jsDOMandMath.md/#Add-to-Event-Listen)
    * [Display Result to Event Listen](./topics/jsDOMandMath.md/#Display-Result-to-Event-Listen)
* [Math](./topics/jsDOMandMath.md/#Math)
     * [Math round](./topics/jsDOMandMath.md/#Math-round)
     * [Math ceil](./topics/jsDOMandMath.md/#Math-ceil)
     * [Math floor](./topics/jsDOMandMath.md/#Math-floor)
     * [Math random](./topics/jsDOMandMath.md/#Math-random)
     * [Math max](./topics/jsDOMandMath.md/#Math-max)
     * [Math min](./topics/jsDOMandMath.md/#Math-min)
     * [Math pow](./topics/jsDOMandMath.md/#Math-pow)
     * [Math sqrt](./topics/jsDOMandMath.md/#Math-sqrt)
     * [Math abs](./topics/jsDOMandMath.md/#Math-abs)
     * [Math trunc](./topics/jsDOMandMath.md/#Math-trunc)
--------------------------------------------------------------------------------------------------
* [Boiler Plates](./topics/jsBoilerPlate.md/#Boiler-Plates)
   * [Strings BP](./topics/jsBoilerPlate.md/#Strings-BP)
     * [Repeat a String](./topics/jsBoilerPlate.md/#Repeat-a-String)
   * [Arrays BP](./topics/jsBoilerPlate.md/#Arrays-BP)
     * [Check in Array for Element](./topics/jsBoilerPlate.md/#Check-in-Array-for-Elements)
     * [Expand Number into Array]((./topics/jsBoilerPlate.md/#Expand-Number-into-Array)
     * [Reverse a String or an Array](./topics/jsBoilerPlate.md/#Reverse-a-String-or-an-Array)
     * [Sum of an Array](./topics/jsBoilerPlate.md/#Sum-of-an-Array)
   * [Loops BP(./topics/jsBoilerPlate.md/#Loops-BP)
     * 
   * [Math BP](./topics/jsBoilerPlate.md/#Math-BP)
     * [Generate Random Selection](./topics/jsBoilerPlate.md/#Generate-Random-Selection)
--------------------------------------------------------------------------------------------------
* [Object Oriented Programming](#Object-Oriented-Programming)
  * [Data Structures](#Data-Structures)
    * [Data Logic](#Data-Logic)    
* [Big O Complexity](#Big-O-Complexity)
   * [Common Data Structure Operations](#Common-Data-Structure-Operations)
   * [Array Sorting Algorithms](#Array-Sorting-Algorithms)
--------------------------------------------------------------------------------------------------


```

## Object Oriented Programming

[Back to Table of Contents](#Table-of-Contents)

### Data Structures
#### Data Logic
```javascript
const rules = {
    option1: { rule1: "value1", rule2: "value2" },
    option2: { rule1: "value3", rule2: "value4" },
    option3: { rule1: "value5", rule2: "value6" }
};
```
Example 1
```javascript
const rules = {
    rock: { beats: "scissors", losesTo: "paper" },
    paper: { beats: "rock", losesTo: "scissors" },
    scissors: { beats: "paper", losesTo: "rock" }
};
```
Example 2
```javascript
const rules = {
    name: { required: true, maxLength: 50 },
    email: { required: true, emailFormat: true },
    age: { required: true, minValue: 18, maxValue: 100 },
    password: { required: true, minLength: 8, hasNumber: true, hasSpecialChar: true }
};
```

## Big O Complexity
Big-O notation, represents an algorithm's worst-case complexity. It uses algebraic terms to describe the complexity of an algorithm, allowing you to measure its efficiency and performance.

[Back to Table of Contents](#Table-of-Contents)

[Big O Cheat Sheet](https://www.30secondsofcode.org/articles/s/big-o-cheatsheet)

<img align="center" width="500" src="https://raw.githubusercontent.com/HyunCafe/HyunCafe/main/assests/bigo.png"  alt="big o complexity chart" />

### Common Data Structure Operations
Different data structures have different time complexities for the same operations. Below you can find average and worst time complexities for data structures used commonly in web development.

#### Average Time Complexity
```javascript
| Data Structure      | Access   | Search   | Insertion | Deletion  |
|---------------------|----------|----------|-----------|-----------|
| Array               | Θ(1)     | Θ(n)     | Θ(n)      | Θ(n)      |
| Queue               | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Stack               | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Linked List         | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Doubly Linked List  | Θ(n)     | Θ(n)     | Θ(1)      | Θ(1)      |
| Skip List           | Θ(log n) | Θ(log n) | Θ(log n)  | Θ(log n)  |
| Hash Table          | N/A      | Θ(1)     | Θ(1)      | Θ(1)      |
| Binary Search Tree  | Θ(log n) | Θ(log n) | Θ(log n)  | Θ(log n)  |
```
#### Worst Time Complexity
```javascript
| Data Structure     | Access | Search | Insertion | Deletion |
|--------------------|--------|--------|-----------|----------|
| Array              | O(1)   | O(n)   | O(n)      | O(n)     |
| Queue              | O(n)   | O(n)   | O(1)      | O(1)     |
| Stack              | O(n)   | O(n)   | O(1)      | O(1)     |
| Linked List        | O(n)   | O(n)   | O(1)      | O(1)     |
| Doubly Linked List | O(n)   | O(n)   | O(1)      | O(1)     |
| Skip List          | O(n)   | O(n)   | O(n)      | O(n)     |
| Hash Table         | N/A    | O(n)   | O(n)      | O(n)     |
| Binary Search Tree | O(n)   | O(n)   | O(n)      | O(n)     |
```

### Array Sorting Algorithms
Similar to data structures, different array sorting algorithms have different time complexities. Below you can find the best, average and worst time complexities for the most common array sorting algorithms.

```javascript
| Algorithm      | Best       | Average    | Worst      |
|----------------|------------|------------|------------|
| Quick sort     | Ω(n log n) | Θ(n log n) | O(n^2)     |
| Merge sort     | Ω(n log n) | Θ(n log n) | O(n log n) |
| Heap sort      | Ω(n log n) | Θ(n log n) | O(n log n) |
| Bubble sort    | Ω(n)       | Θ(n^2)     | O(n^2)     |
| Insertion sort | Ω(n)       | Θ(n^2)     | O(n^2)     |
| Selection sort | Ω(n^2)     | Θ(n^2)     | O(n^2)     |
| Bucket sort    | Ω(n+k)     | Θ(n+k)     | O(n^       |
```
