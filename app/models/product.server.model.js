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
* Product Schema
*/
var ProductSchema = new Schema({
	// Product model fields
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

mongoose.model('Product', ProductSchema);
