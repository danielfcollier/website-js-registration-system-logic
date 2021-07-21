# Website with Registration System for Ecommerce

Syntax: HTML, CSS, and, JS ES6+

Developed as part of the training Hiring Coders provided by VTEX:

- 2nd challenge

## Demo Page

## Store Procedures

All operations are CRUD (create, read, update, and delete) based with JS routines.

### Create

Method:

```javascript
.create(dataObject)
```
Input: 
- ```dataObject```: object with properties for a given database member
(see Customers Object and Products Object)

Output: 
- ```.isCreated```: type boolean
- ```.message```: "Success" | "Error" | "Customer already created" 

### Read

### Update

### Delete

## Registration System for Customers

Members of the database have the following structure and parameters:

```javascript
dataObject = {
    Id: "cus_XXXXXXXX",
	Name: "Full Name",
	Email: "your@email.com",
	Birthday: "year-MM-dd",
	Document: "XXX.XXX.XXX-XX" | , 
	Type: "CPF" | "CPNJ",
	ExtraDocument: "RG",
	Phone: "(48) 99889-1234",
	DeliveryAddress: {
		Street: "Rua Pirineus",
		Details: "Bloco A Apto 306, Res. Solar da Primavera",
		Number: 86,
		Neighborhood: "Córrego Grande",
		City: "Florianópolis",
		State: "SC",
		Country: "Brasil",
		Zipcode: "88.035-615"
	}
	IsSameAddress: boolean
	BillingAddress: {
        ...DeliveryAdress,
        // changed properties
    }
}
```

## Registration System for Products

```javascript
dataObject = {
    Id: "pro_XXXXXXXX",
	SKU: ,
	Description: "product description",
	Category: "category"
	Status: "InStock" | "OutOfStock" | "ToOrder",
	Quantity: integer,
	Price: twoDecimalsFloat,
	Taxes: {
        Percentage: float,
        FixedValue: float,
    }
	Weight: float,      // in kg
	Dimensions: {
		Height: float,  //in cm
		Witdth: float,  //in cm
		Breadth: float, //in cm
}
```

## Extra Features

### Live Database

A [Google Sheets](mylink.com) integrated with the website through a Apps Script endpoint.

The code in provided in this [repository](mylink.com).