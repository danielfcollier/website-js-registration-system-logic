const productTemplate = {
	Id: "pro_1",
	SKU: "UGG-BB-PUR-06",
	Description: "product description",
	Category: "category",
	Status: '"InStock" | "OutOfStock" | "ToOrder"',
	Quantity: "integer",
	Price: "twoDecimalsFloat",
	Taxes: {
        Percentage: "float",
        FixedValue: "float",
    },
	Weight: "float",		// in kg
	Dimensions: {
		Height: "float",  	//in cm
		Width: "float",		//in cm
		Breadth: "float", 	//in cm
	}
};

export default productTemplate;