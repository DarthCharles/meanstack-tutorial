'use strict';

/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;


function validateLength(v) {
return v.length <= 40;
}
/**
* Products Schema
*/
var ProductsSchema = new Schema({
	// Products model fields
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: 'invalid category'
	},
	created: {
		type: Date,
		default: Date.now
	},
	name:{
		type: String,
		default: '',
		trim: true,
		required: 'Name can not be blank',
		validate: [validateLength, 'name must be 40 chars in length or less']
	},
	quantityPerUnit: {
		type: String
	},
	unitPrice: {
		type: Number,
		default: 0
	},
	unitInStock: {
		type: Number,
		default: 0,
		min: 0
	},
	unitsOnOrder: {
		type: Number,
		default: 0,
		min: 0
	},
	discontinued: {
		type: Boolean,
		default: false
	}

});

mongoose.model('Products', ProductsSchema);
