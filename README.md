# filter.js: Simple data filtering functionality

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Allows the contents of a table or list to be filtered by keyword.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/filter.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="lib/transitions.js"></script>
<script src="js/filter.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'lib/transitions.js',
	'js/filter.js'
], function(transitions, Filter) {
	...
});
```

Or use imported as a component in existing projects.

```js
@import {transitions = require('lib/transitions.js";
@import {Filter} from "js/filter.js";
```

## How to start the script

```javascript
var filter = new Filter({
	'element' : document.getElementById('id'),
	'keyword' : 'fieldset input',
	'button' : 'fieldset button',
	'grouping' : 'tbody tr, li',
	'data' : '*'
});
```

**id : {string}** - The ID attribute of an element somewhere in the document.

**keyword : {string}** - A CSS Rule inside the parent element that describes the input element for the keyword.

**button : {string}** - A CSS Rule inside the parent element that describes the button to apply the filter.

**grouping : {string}** - A CSS Rule inside the parent element that describes the rows of data.

**data : {string}** - A CSS Rule inside the grouping element that describes the data to be filtered.

### Match

```javascript
filter.match(text);
```

Perform a search.

**text : {string}** - The text to search for.

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
