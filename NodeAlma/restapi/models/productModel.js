var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  product_name: { type: String, Required:  'Product name cannot be left blank.' },
  
  price:    { type: String,     Required:  'Product price cannot be left blank.'},
  
  genre:    { type: String,     Required:  'Product genre cannot be left blank.'},
  
  platform: { type: String ,    Required:  'Product platform cannot be left blank'}

});

module.exports = mongoose.model('Products', productSchema);


