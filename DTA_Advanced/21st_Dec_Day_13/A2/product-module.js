var  productArray = [
	{pid :  15454,  pname  : "masala",  category :  "spice", qty : 6, price : 10},
	{pid :  15453,  pname  : "rice",  category :  "grain", qty : 2, price : 11},
	{pid :  15452,  pname  : "dal",  category :  "pulse", qty : 0, price : 12},
	{pid :  15451,  pname  : "biscuit",  category :  "bakery", qty : 13, price : 13},
	{pid :  15450,  pname  : "cake",  category :  "bakery", qty : 2, price : 14},
	{pid :  15449,  pname  : "brown bread",  category :  "bread", qty : 3, price : 15},
	{pid :  15448,  pname  : "milk bread",  category :  "bread", qty : 0, price : 16},
];

exports.getAllProduct =  function()
{		   
		return productArray; 
};

exports.getCategory =  function(category)
{		   
	let filterArray = productArray.filter(item=>item.category==category); 
	return filterArray;
};

exports.getInRange =  function(min,max)
{		   
	let filterArray = productArray.filter(item=>item.price>=min && item.price<=max); 
	return filterArray;
};

exports.getInStock =  function()
{		   
	let filterArray = productArray.filter(item=>item.qty>0); 
	return filterArray;
};

exports.getOutOfStock =  function()
{		   
	let filterArray = productArray.filter(item=>item.qty==0); 
	return filterArray;
};
