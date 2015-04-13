    var fs = require('fs');

    module.exports = function(filePath){
        this.productNames = function(callback) {
            var linesInFile = fs.readFileSync(filePath, "utf8"); 
            var lines= linesInFile.split('\r');
            var totalProducts =[];

            lines.forEach(function(storedLines){
                var product = storedLines.split(';');
                
                var currentItem = product[2];
                var productTotal = product[3];

                var productMap = {
                    itemName : currentItem,
                    soldItems : Number(productTotal)
                };
                totalProducts.push(productMap);
              });

            callback(null, totalProducts);
        };
        this.groupedItems = function(){
            var linesInFile =     fs.readFileSync(filePath, "utf8");
            var productLines = linesInFile.split('\r');
            var productCountMap = {};
            productLines.forEach(function(productLine){

                var splitLines = productLine.split(';');
                console.log(splitLines);

                var currentItem = splitLines[2];
                var numberSold =  splitLines[3];

                if(productCountMap[currentItem] === undefined)
                {
                        productCountMap[currentItem] = 0;
                }
                    productCountMap[currentItem] += Number(numberSold);
            });
            
            return productCountMap;
        };
        
        this.mostPopular = function(productCountMap){
            var mostPopularProduct = {};
            var max = 0;
            for(var prop in productCountMap) {
                var value = productCountMap[prop];
                if(value > max) {
                      max = value;
                    mostPopularProduct = {
                       Product : prop,
                       Amount  : max
                    }
                }
            }
             //console.log(itemMap);
              return mostPopularProduct ;
        };
    };