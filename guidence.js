var fs = require('fs');
var Products = require('./most_popular_product')
//var most_popular_product = "Nelisa Sales History.csv";
//var itemArr = rdcsv.readcsv(most_popular_product);
    //console.log(itemArr);
var products = new Products();

var itemArr = products.productList("Nelisa Sales History.csv")

var group = products.groupItems(itemArr);

var mostPop = products.mostPopularPdt(group);

  console.log(mostPop);

  
var fs = require('fs');
var Products = require('./least_popular_product')
//var most_popular_product = "Nelisa Sales History.csv";
//var itemArr = rdcsv.readcsv(most_popular_product);
    //console.log(itemArr);
var products = new Products();

var itemArr = products.productList("Nelisa Sales History.csv")

var group = products.groupItems(itemArr);

var leastPop = products.leastPopularPdt(group);

  console.log(leastPop);

var fs = require('fs');
var Products = require('./most_popular_category')
//var most_popular_product = "Nelisa Sales History.csv";
//var itemArr = rdcsv.readcsv(most_popular_product);
    //console.log(itemArr);
var products = new Products();

var itemArr = products.productList("Nelisa Sales History.csv")

var group = products.groupCat(itemArr);

var mostPopCat = products.mostPopularCat(group);

  console.log(mostPopCat);

  
var fs = require('fs');
var Products = require('./least_popular_category')
//var most_popular_product = "Nelisa Sales History.csv";
//var itemArr = rdcsv.readcsv(most_popular_product);
    //console.log(itemArr);
var products = new Products();

var itemArr = products.productList("Nelisa Sales History.csv")

var group = products.groupCat(itemArr);

var leastPopCat = products.leastPopularCat(group);

  console.log(leastPopCat);