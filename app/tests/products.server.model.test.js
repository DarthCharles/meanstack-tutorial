'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Category = mongoose.model('Category'),
	Products = mongoose.model('Products');

/**
 * Globals
 */
var user, products;

/**
 * Unit tests
 */
describe('Products Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() {
			products = new Products({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('saves new record', function(done) {
			var category = new Category({
				name: 'Beverages',
				description: 'Soft drinks, coffees, teas, beers, and ales'
			});

var product = new Products({
	category: category,
	name: 'Apple Juice',
	quantityPerUnit: '200ml'
});

console.log(product);
			// category.save(function(err, saved) {
			// 	should.not.exist(err);
			// 	done();
			// });
		});
	});

	afterEach(function(done) {
		Products.remove().exec();
		User.remove().exec();

		done();
	});
});
