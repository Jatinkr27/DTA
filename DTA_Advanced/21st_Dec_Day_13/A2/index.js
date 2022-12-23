const productModule =  require("./product-module");



console.log("All Products");
 
let  pArray =  productModule.getAllProduct();
 
for(let item  of  pArray)
{
    str =  `Id : ${item.pid}, Name : ${item.pname}, Category : ${item.category}, Quantity : ${item.qty}, Price : ${item.price}`;
	console.log(str);	
}


console.log("\nOnly Given Category");
 
pArray =  productModule.getCategory("bread");
 
for(let item  of  pArray)
{
    str =  `Id : ${item.pid}, Name : ${item.pname}, Category : ${item.category}, Quantity : ${item.qty}, Price : ${item.price}`;
	console.log(str);	
}

console.log("\nProduct in price range");
 
pArray =  productModule.getInRange(10,12);
 
for(let item  of  pArray)
{
    str =  `Id : ${item.pid}, Name : ${item.pname}, Category : ${item.category}, Quantity : ${item.qty}, Price : ${item.price}`;
	console.log(str);	
}

console.log("\nProduct in stock");
 
pArray =  productModule.getInStock();
 
for(let item  of  pArray)
{
    str =  `Id : ${item.pid}, Name : ${item.pname}, Category : ${item.category}, Quantity : ${item.qty}, Price : ${item.price}`;
	console.log(str);	
}

console.log("\nProduct out of stock");
 
pArray =  productModule.getOutOfStock();
 
for(let item  of  pArray)
{
    str =  `Id : ${item.pid}, Name : ${item.pname}, Category : ${item.category}, Quantity : ${item.qty}, Price : ${item.price}`;
	console.log(str);	
}
