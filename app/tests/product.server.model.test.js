'use strict';

/**
* Module dependencies.
*/
var should = require('should'),
mongoose = require('mongoose'),
Category = mongoose.model('Category'),
Product = mongoose.model('Product');

/**
* Globals
*/
var user, product;

/**
* Unit tests
*/
describe('Product Model Unit Tests:', function() {

	describe('Method Save', function() {
		it('saves new record', function(done) {
			var category = new Category({
				name: 'Beverages',
				description: 'Soft drinks, coffees, teas, beers, and ales'
			});

			var product = new Product({
				category: category,
				name: 'Apple Juice',
				quantityPerUnit: '200ml'
			});

			product.save(function(err, saved) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		Product.remove().exec();
		done();
	});
});
