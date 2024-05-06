/*
	Source:
	van Creij, Maurice (2018). "filter.js: Simple data filtering functionality", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Filter = function (config) {

	// PROPERTIES

	// METHODS

	this.init = function (config) {
		// store the config
		this.config = config;
		this.element = config.element;
		// set the event handler on the input element
		this.config.keyword = transitions.select(this.config.keyword, this.element)[0];
		this.config.keyword.addEventListener('keyup', this.handleChange.bind(this));
		this.config.keyword.addEventListener('change', this.handleChange.bind(this));
		// set the event handler for the button
		this.config.button = transitions.select(this.config.button, this.element)[0];
		this.config.button.style.display = 'none';
		this.config.button.addEventListener('click', this.handleClick.bind(this));
		// update the view
		this.update();
		// return the object
		return this;
	};

	this.update = function () {
		var a, b, c, d, compare, groups, elements, matched;
		// get the keyword
		compare = new RegExp(this.config.keyword.value, 'gi');
		// for all the groups
		groups = transitions.select(this.config.grouping, this.element);
		for (a = 0 , b = groups.length; a < b; a += 1) {
			// reset the match
			matched = false;
			// for all the elements
			elements = transitions.select(this.config.data, groups[a]);
			for (c = 0 , d = elements.length; c < d; c += 1) {
				// apply the right compare to each type
				switch (elements[c].nodeName) {
				case 'IMG' :
					matched = matched || compare.test(elements[c].title) || compare.test(elements[c].alt);
					break;
				default :
					matched = matched || compare.test(elements[c].innerHTML);
				}
			}
			// if the element was matched
			if (matched) {
				// show the group
				groups[a].className = groups[a].className.replace(/ filter-hide| filter-show/gi, '') + ' filter-show';
			// else
			} else {
				// hide the group
				groups[a].className = groups[a].className.replace(/ filter-hide| filter-show/gi, '') + ' filter-hide';
			}
		}
	};

	this.match = function (text) {
		// fill in the search keyword
		this.config.keyword.value = text;
		// perform the search
		this.update();
	};

	this.handleChange = function (evt) {
		// update the view
		this.update();
	};

	this.handleClick = function (evt) {
		// cancel the click
		evt.preventDefault();
		// update the view
		this.update();
	};

	this.init(config);

};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Filter });
if (typeof module != 'undefined') module.exports = Filter;
