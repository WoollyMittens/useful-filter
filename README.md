# filter.js: Simple data filtering functionality

Allows the contents of a table or list to be filtered by keyword.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-filter">demo</a>.

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

Or import into an MVC framework.

```js
var transitions = require('lib/transitions.js');
var Filter = require('js/filter.js');
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

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
