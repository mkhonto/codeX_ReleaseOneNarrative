  var assert = require("assert");

  describe("Find data in file", function(filepath){

      it('should return all products as they are in the csv file', function(done){
          var Products = require("./popular_products");
          var products = new Products('./Nelisa Sales History.csv');
          products.productNames(function(err, product){
          assert.equal(449, product.length);
          assert.equal("Imasi", product[2].itemName);
          done();
          });
           
      });

       it('should return grouped items', function(){
          var Products = require("./popular_products");
          var products = new Products('./Nelisa Sales History.csv');
          var groupedProducts = products.groupedItems();
          console.log(groupedProducts);
          assert.equal(125, groupedProducts["Imasi"]);
         
      });

       it('should return mostPopular item', function(){
          var Products = require("./popular_products");
          var products = new Products('./Nelisa Sales History.csv');
          var productMap = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14
      };

          var popularProduct = products.mostPopular(productMap);
          console.log("Most popular product with total number of sales:");
          console.log("===============================================");
          for(key in popularProduct){
              console.log(key + "=>" + popularProduct[key]);    
          }
          assert.equal('Mixed Sweets 5s', popularProduct["Product"]);
          assert.equal(172, popularProduct["Amount"]);
      });
});