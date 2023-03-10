### Selector Types 

[CSS Selector Type MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

[Back to Table of Contents](../README.md/#Table-of-Contents)

| Selector Type | Description | Example |
| --- | --- | --- |
| Element Selector | Selects all elements of a given type | `div { ... }` | 
| ID Selector | Selects an element based on its unique id | `#myUniqueId { ... }` |
| Class Selector | Selects all elements with a given class | `.myClass { ... }` |
| Universal Selector | Selects all elements on a page | `* { ... }` |
| Descendant Selector | Selects all elements that are descendants of a given element | `div p { ... }` |
| Child Selector | Selects all elements that are direct children of a given element | `div > p { ... }` |
| Adjacent Sibling Selector | Selects all elements that are adjacent siblings of a given element | `div + p { ... }` |
| General Sibling Selector | Selects all elements that are siblings of a given element | `div ~ p { ... }` |
| Attribute Selector | Selects all elements that contain a given attribute | `[type="text"] { ... }` |
```
Example:select all classes that begin with thunder you would use the attribute selector with a wildcard:
[class^="thunder"]
```
### Colors 

[CSS Pseudo Class MDN Docs]

[Back to Table of Contents](../README.md/#Table-of-Contents)

| Color Name | Description | Example |
|------------|-------------|---------|
| rgb(x,y,z) | Red in RGB format | rgb(255,0,0)|
| rgb(x%,y%,z%) | Red in RGB % format | rgb(100%,0,0)|
| rgba(x,y,z,alpha) | Red in RGB with alpha value | rgba(255,0,0,0.5)|
| #rrggbb | Red in hexadecimal format | #ff0000 (or shorthand - #f00)|
| hsl(hue, saturation, lightness) | Red in HSL format | hsl (0, 100%, 50%)|
| currentColor | computer value of the ‘currentColor’ keyword | currentColor |
| inherit | value of ‘inherit’ keyword | inherit |


### Pseudo Class 

[CSS Pseudo Class MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

[Back to Table of Contents](../README.md/#Table-of-Contents)

| Pseudo-Class         | Description                                         | Example                  |
|----------------------|-----------------------------------------------------|-------------------------|
| :active	             | an activated element                                | button:active            |
| :focus               | an element while the element has focus              | input:focus             |     
| :hover               | an element when you mouse over it                   | li:hover                |    
| :disabled	           | an element while the element is disabled            | button:disabled         |   
| :enabled             | an element while the element is enabled             | input:enabled           |     
| :checked             | an element that is checked retrieve                 | input[type=checkbox]:checked |   
| :selection	         | an element that is currently selected or highlighted by the user| p::selection |
| :lang                | allows the author to specify a language to use in a specified element | p:lang(de) |
|----------------------|-----------------------------------------------------|-------------------------|
|| [Good Visual for nth Child](https://dev.to/rammcodes/i-created-an-animated-cheatsheet-for-css-selectors-that-went-viral-on-social-media-2hm2) |
| :nth-child(n)        | an element that is the n-th sibling                 | li:nth-child(2)         |   
| :nth-last-child(n)	 | an element that is the n-th sibling counting from the last sibling        | li:nth-last-child(2) |
| :first-child         | an element that is the first sibling                | li:first-child          |     
| :last-child          | an element that is the last sibling                 | li:last-child           |   
| :only-child	         | an element that is the only child                   | li:only-child           |   
| :nth-of-type(n)      | an element that is the n-th sibling of its type     | li:nth-of-type(2)      |     
| :nth-last-of-type(n) | an element that is the n-th sibling of its type counting from the last sibling                      | li:nth-last-of-type(2) |
| :last-of-type        | an element that is the last sibling of its type     | li:last-of-type         |     
| :first-of-type       | an element that is the first sibling of its type    | li:first-of-type        |   
| :only-of-type 	     | an element that is the only child of its type       | li:only-of-type         |   
|----------------------|-----------------------------------------------------|-------------------------|
| :empty               | an element that has no children                     | p:empty                 |     
| :root                | root element within the document                    | :root                   |     
| :not(x)              | an element not represented by the argument ‘x’      | :not(.active)           |   
| :target              | a target element as specified by a target in a UR   | :target                 |

### Pseudo Element 

[CSS Pseudo Element MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

| Pseudo-Element       | Example                                    | 
|----------------------|-------------------------------------------|
| ::first-letter       | p::first-letter { font-size: 2em; }         |     
| ::first-line      | h1::first-line { font-size: 1.5em; }        |   
| ::before 	     | div::before { content: "Hello!"; }          | 
| ::after        | div::after { content: "Bye!"; }               | 

### Absolute Measurement

[Back to Table of Contents](../README.md/#Table-of-Contents)

| Absolute Measurement | Description | Example |
|----------------------|-------------|---------|
| % | percentage | 10% |
| cm | centimeter | 10cm |
| in | inch | 10in |
| mm | milimeter | 10mm |
| pc | pica (1p = 12 pts) | 10pc |
| pt | point (1pt = 1/72inch) | 10pt |
| px | pixel (1px = 1/96inch) | 10px |

### Relative Measurement 

| Type | Description | Example |
|----------------------------|-----------------------------------------------------|--------------------------------------------|
ch | width of the “0” glyph found in the font for the font size used to render | ch(10px) = 10px |
em | 1em = current font size of current element | em(10px) = 10px |
ex | x-height of the element’s font | ex(10px) = 10px |
gd | the grid defined by ‘layout-grid’ | gd(10px) = 10px |
rem | the font size of the root element | rem(10px) = 10px |
vh | the viewport’s height | vh(10px) = 10px |
vw | the viewport's width | vw(10px) = 10px |
vm | viewport’s height or width, whichever is smaller of the two | vm(10px) = 10px |

### Angles 

[Back to Table of Contents](../README.md/#Table-of-Contents)

| Type | Description | Example | 
|----------------------------|-----------------------------------------------------|------------------------------------|
|deg | degrees| 90° |
|grad | grads| 100grad |
|rad | radians| 2π rad |
|turn |  turns| 1 turn |

### Time 

| Type  | Description  | Example |
|---|---|---|
| ms  | mili-seconds  | 1 ms = 0.001 s |
| s  | seconds  | 1 s = 1000 ms |

### Frequency 

| Type | Description | Example |
|---|---|---|
|Hz| hertz | 50 Hz |
|kHz |kilo-hertz | 5 kHz |

## CSS Value Functions

[CSS Value Functions MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)

[Back to Table of Contents](../README.md/#Table-of-Contents)

|Name | Syntax | Description | example|
|-----------------|---------------------------------------|-----------------------------------|-----------------|
|calc() |	calc(expression)	| Used to perform mathematical operations on CSS values	| width: calc(100% - 20px);
|attr() |	attr(attributeName) |	Returns the value of an element's attribute	 | content: attr(data-title);
|url()	| url(urlString)	| Specifies a URL as the value for a CSS property |	background-image: url('bg.png');
|rgba() |	rgba(red, green, blue, alpha)	| Specifies a color value with opacity	| color: rgba(255, 0, 0, 0.5);
|hsl()	| hsl(hue, saturation, lightness) |	Specifies a color value in the HSL | color space	color: hsl(0, 100%, 50%);
|var() | var(--custom-variable)	 | Uses a custom CSS variable (CSS custom property) |	background-color: var(--bg-color);

## Rules of Specificity

### Elements and Pseudo-Elements Selectors
These selectors target specific HTML elements, such as `p` or `h1`, or a pseudo-element of an element, such as `::before` or `::after`. The specificity value of an element selector is 0 0 0 1.

### Class, Attribute, and Pseudo-Class Selectors
These selectors target elements based on their class, attribute, or a certain state or behavior. For example, `.highlight`, `[href="https://www.example.com"]`, or `:hover`. The specificity value of a class, attribute, or pseudo-class selector is 0 0 1 0.

### ID Selectors
These selectors target elements based on their unique ID attribute. For example, `#header`. The specificity value of an ID selector is 0 1 0 0.

### Inline Styles
These selectors target elements that have an inline style attribute. The specificity value of an inline style is 1 0 0 0.

### Layers
This selector is not part of the CSS specification, but it is sometimes used to refer to the stacking order of elements in CSS. The exact specificity value of a layer selector is not defined.

### !important
This selector allows you to increase the priority of a particular CSS rule, making it more important than other rules with equal or lower specificity values. The specificity value of `!important` is always the highest and takes precedence over all other rules, regardless of specificity value.

In terms of specificity, the most specific selector wins, meaning that if two selectors are targeting the same element, the selector with the higher specificity will take precedence. If two selectors have the same specificity value, the later rule in the stylesheet will take precedence.
