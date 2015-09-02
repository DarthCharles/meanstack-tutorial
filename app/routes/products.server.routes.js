'use strict';

module.exports = function(app) {
	var products = require('../../app/controllers/products.server.controller');

	app.route('/products')
  .get(products.list)
  .post(products.create);

};
