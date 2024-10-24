ssh -i */Desktop/CS_260/*****.pem ubuntu@3.233.244.116
ssh -i */OneDrive/Desktop/CS_260/*****.pem ubuntu@washingtonguide.click
<a href="link">Hyperlink Text</a>
div - allows to have different structure in document
<img src = "link" alt = "alt text">

<video controls width="int" crossorigin="anonymous">
  <source src="link" />
</video>
<audio controls src="testAudio.mp3"></audio>

https://developer.mozilla.org/en-US/docs/Web/SVG

https://htmlcheatsheet.com/

vi file extension
*ESC* to exit insert mode
:wq

Quick link tutorial
href="#id"
id = "id"

What I wanted to do with text changing is less with CSS animation than it is with javascript

Midterm Questions
Sure, let's dive into each question with detailed explanations and examples where necessary.

### 1. What does the link element do?
The `<link>` element in HTML is used to define a relationship between the current document and an external resource. It is most commonly used to link to external stylesheets.

#### Example:
```html
<link rel="stylesheet" href="styles.css">
```
- **rel**: Specifies the relationship between the current document and the linked resource. In this case, `stylesheet` indicates that the linked resource is a CSS file.
- **href**: Specifies the URL of the linked resource.

This `<link>` element tells the browser to apply the styles defined in `styles.css` to the current HTML document¹².

### 2. What does a div tag do?
The `<div>` tag in HTML is a block-level container used to group together HTML elements. It has no semantic meaning on its own but is useful for applying styles or scripts to a group of elements.

#### Example:
```html
<div class="container">
    <p>This is a paragraph inside a div.</p>
</div>
```
- **class**: An attribute used to apply CSS styles to the `<div>` and its contents.
- **block-level**: By default, a `<div>` takes up the full width available and starts on a new line.

This `<div>` groups the paragraph inside it, allowing you to style or manipulate the group as a whole⁴⁵.

### 3. What is the difference between the #title and .grid selector?
- `#title` is an ID selector. It selects an element with the specific ID `title`. IDs should be unique within a document.
- `.grid` is a class selector. It selects all elements with the class `grid`. Multiple elements can share the same class.

#### Example:
```css
#title {
    font-size: 24px;
}

.grid {
    display: grid;
}
```
- **ID Selector (`#title`)**: Targets a single, unique element with the ID `title`.
- **Class Selector (`.grid`)**: Targets all elements with the class `grid`⁹[^10^].

### 4. What is the difference between padding and margin?
- **Padding** is the space between the content of an element and its border.
- **Margin** is the space outside the border of an element, separating it from other elements.

#### Example:
```css
.element {
    padding: 10px; /* Space inside the element */
    margin: 20px;  /* Space outside the element */
}
```
- **Padding**: Adds space inside the element, pushing the content away from the border.
- **Margin**: Adds space outside the element, pushing the element away from other elements¹²¹⁴.

### 5. Given this HTML and this CSS, how will the images be displayed using flex?
To answer this, we need to see the specific HTML and CSS code. Generally, using `display: flex;` on a container will arrange its child elements (like images) in a flexible layout.

#### Example:
```html
<div class="flex-container">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
</div>
```
```css
.flex-container {
    display: flex;
}
```
This will display the images side by side in a row¹⁷¹⁸.

### 6. What does the following padding CSS do?
Without the specific CSS code, I can explain that padding adds space inside an element, between its content and its border.

#### Example:
```css
.element {
    padding: 20px;
}
```
This adds 20 pixels of padding on all sides of the element¹³.

### 7. What does the following code using arrow syntax function declaration do?
Arrow functions provide a concise syntax for writing functions in JavaScript.

#### Example:
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Outputs: 5
```
This code defines an arrow function `add` that takes two parameters and returns their sum¹.

### 8. What does the following code using map with an array output?
The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

#### Example:
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Outputs: [2, 4, 6, 8]
```
This code doubles each number in the array and logs the new array¹.

### 9. What does the following code output using getElementByID and addEventListener?
This code adds an event listener to an element with a specific ID, executing a function when the event occurs.

#### Example:
```html
<button id="myButton">Click me</button>
<script>
    document.getElementById('myButton').addEventListener('click', () => {
        alert('Button clicked!');
    });
</script>
```
Clicking the button will display an alert saying "Button clicked!"¹.

### 10. What does the following line of JavaScript do using a # selector?
The `#` selector is used to select an element by its ID.

#### Example:
```javascript
document.querySelector('#myElement').style.color = 'red';
```
This changes the text color of the element with ID `myElement` to red¹.

### 11. Which of the following are true? (mark all that are true about the DOM)
The Document Object Model (DOM) represents the structure of a document as a tree of objects. It allows scripts to update the content, structure, and style of a document¹.

### 12. By default, the HTML span element has a default CSS display property value of:
The default display property value of a `<span>` element is `inline`¹.

### 13. How would you use CSS to change all the div elements to have a background color of red?
You can use the following CSS rule:
```css
div {
    background-color: red;
}
```
This will set the background color of all `<div>` elements to red¹.

### 14. How would you display an image with a hyperlink in HTML?
You can wrap the `<img>` tag inside an `<a>` tag.

#### Example:
```html
<a href="https://example.com">
    <img src="image.jpg" alt="Example Image">
</a>
```
This makes the image clickable, linking to `https://example.com`¹.

### 15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
The order is: Content, Padding, Border, Margin¹.

### 16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
#### HTML:
```html
<p><span class="trouble">trouble</span>double</p>
```
#### CSS:
```css
.trouble {
    color: green;
}
```
This sets the text "trouble" to green while leaving "double" unaffected¹.

### 17. What will the following code output when executed using a for loop and console.log?
#### Example:
```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// Outputs: 0, 1, 2
```
This code logs the numbers 0, 1, and 2 to the console¹.

### 18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
#### Example:
```javascript
document.getElementById('byu').style.color = 'green';
```
This changes the text color of the element with ID `byu` to green¹.

### 19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- Paragraph: `<p>`
- Ordered list: `<ol>`
- Unordered list: `<ul>`
- Second level heading: `<h2>`
- First level heading: `<h1>`
- Third level heading: `<h3>`¹.

### 20. How do you declare the document type to be html?
#### Example:
```html
<!DOCTYPE html>
```
This declares the document type to be HTML5¹.

### 21. What is valid JavaScript syntax for if, else, for, while, switch statements?
#### Examples:
- `if` statement:
  ```javascript
  if (condition) {
      // code
  }
  ```
- `else` statement:
  ```javascript
  else {
      // code
  }
  ```
- `for` loop:
  ```javascript
  for (let i = 0; i < 10; i++) {
      // code
  }
  ```
- `while` loop:
  ```javascript
  while (condition) {
      // code
  }
  ```
- `switch` statement:
  ```javascript
  switch (expression) {
      case value1:
          // code
          break;
      case value2:
          // code
          break;
      default:
          // code
  }
  ```¹.

### 22. What is the correct syntax for creating a JavaScript object?
You can create a JavaScript object using an object literal or the `new Object()` syntax.

#### Object Literal:
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue"
};
```

#### Using `new Object()`:
```javascript
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.eyeColor = "blue";
```
The object literal syntax is more concise and commonly used¹².

### 23. Is it possible to add new properties to JavaScript objects?
Yes, you can add new properties to JavaScript objects using dot notation or bracket notation.

#### Example:
```javascript
const person = {
    firstName: "John",
    lastName: "Doe"
};

// Adding a new property using dot notation
person.age = 30;

// Adding a new property using bracket notation
person["eyeColor"] = "blue";
```
Both methods will add the new properties to the `person` object⁶⁷.

### 24. If you want to include JavaScript on an HTML page, which tag do you use?
You use the `<script>` tag to include JavaScript in an HTML page. The `<script>` tag can be placed in the `<head>` or `<body>` section of the HTML document.

#### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Example</title>
    <script>
        console.log("Hello, World!");
    </script>
</head>
<body>
    <h1>My Web Page</h1>
</body>
</html>
```
You can also link to an external JavaScript file using the `src` attribute:
```html
<script src="script.js"></script>
```
¹¹¹².

### 25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
#### HTML:
```html
<p id="animal">fish</p>
```

#### JavaScript:
```javascript
document.getElementById("animal").textContent = "crow";
```
This code selects the element with the ID `animal` and changes its text content to "crow"¹⁹[^20^].

### 26. Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on a subset of JavaScript but is language-independent¹⁵¹⁶.

### 27. What does the console command `chmod`, `pwd`, `cd`, `ls`, `vim`, `nano`, `mkdir`, `mv`, `rm`, `man`, `ssh`, `ps`, `wget`, `sudo` do?
- **`chmod`**: Changes file permissions.
- **`pwd`**: Prints the current working directory.
- **`cd`**: Changes the current directory.
- **`ls`**: Lists directory contents.
- **`vim`**: Opens the Vim text editor.
- **`nano`**: Opens the Nano text editor.
- **`mkdir`**: Creates a new directory.
- **`mv`**: Moves or renames files or directories.
- **`rm`**: Removes files or directories.
- **`man`**: Displays the manual for a command.
- **`ssh`**: Opens a secure shell session.
- **`ps`**: Displays information about running processes.
- **`wget`**: Downloads files from the web.
- **`sudo`**: Executes a command as a superuser¹.

### 28. Which of the following console command creates a remote shell session?
The `ssh` command creates a remote shell session.

### 29. Which of the following is true when the `-la` parameter is specified for the `ls` console command?
The `-la` parameter for the `ls` command lists all files and directories, including hidden ones, in long format.

### 30. Which of the following is true for the domain name `banana.fruit.bozo.click`, which is the top level domain, which is a subdomain, which is a root domain?
- **Top-level domain (TLD)**: `click`
- **Subdomain**: `banana.fruit`
- **Root domain**: `bozo.click`

### 31. Is a web certificate necessary to use HTTPS?
Yes, a web certificate is necessary to use HTTPS. It ensures secure communication between the client and the server.

### 32. Can a DNS A record point to an IP address or another A record?
A DNS A record can point to an IP address but not to another A record.

### 33. Port 443, 80, 22 is reserved for which protocol?
- **Port 443**: HTTPS
- **Port 80**: HTTP
- **Port 22**: SSH

### 34. What will the following code using Promises output when executed?
#### Example:
```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise.then(result => {
    console.log(result);
});
```
This code will output "Success!" to the console¹.
