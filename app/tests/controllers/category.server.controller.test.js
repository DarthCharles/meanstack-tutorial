'use strict';
/**
* Module dependencies.
*/
var should = require('chai').should,
mongoose = require('mongoose');
var app = require('../../../server');
var request = require('supertest');
var Category = mongoose.model('Category');



/**
* Unit tests
*/


describe('Categories Controller Tests', function(){

	it('Shoud create a new category', function(done){
		var category = {
			name: 'Beverages',
			description: 'Soft drinks, coffees, teas, beers, and ales'
		};


		request(app).post('/categories')
		.send(category)
		// end handles the response
		.end(function(err, res) {
			if (err) {
				throw err;
			}
			res.status.should.be.equal(201);
			done();
		});
	});


	it('Shoud get existing categories', function(done){
		request(app).get('/categories/')
		.end(function (err, res) {
			res.status.should.be.equal(200);
			done();
		});
	})


	afterEach(function(done) {
		// NB this deletes ALL categories (but is run against a test database)
		Category.remove().exec();
		done();
	});
});
