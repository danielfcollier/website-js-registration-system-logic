# Website with Registration System for Ecommerce

Syntax: HTML, CSS, and, JS ES6+

Developed as part of the training Hiring Coders provided by VTEX:

- 2nd challenge

## Demo Page

## Store Procedures

All operations are CRUD (create, read, update, and delete) based with JS routines.

### \# Create

Method:

```javascript
.create(dataObject)
```

Input: 
- ```dataObject```: object with properties for a given database member
(see Customers Object and Products Object)

Output: 
- ```.isCreated```: type boolean
- ```.message```: ```"Success"``` | ```"Error"``` | ```"Customer already created"``` 

### \# Read

Method:

```javascript
.read({property: parameter})
```

Input: 
- ```property```: the identifier for the given parameter
- ```parameter```: the parameter to search through in the database

Output: ```dataObject``` |  ```-1``` for not found 

### \# Update

```javascript
.update({
	Id: idIdentifier,
	property: parameter
})
```

Input: 
- ```idIdentifier```: **required** > the Id of the object to be updated 
- ```property: parameter```: the pair property and parameter to be updated

Output: ```.message```: ```"Success"``` | ```"Error"```

### \# Delete

```javascript
.delete(idIdentifier)
```

Input: 
- ```idIdentifier```: the Id of the object to be deleted 

Output: ```.message```: ```"Success"``` | ```"Error"```

## Registration System for Customers

Members of the database have the following structure and parameters:

```json
{
    Id: "cus_00000001",
	Name: "João da Silva Name",
	Email: "joaosilvafake@email.com",
	Birthday: "1985-01-10",
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
	},
	IsSameAddress: type boolean,
	BillingAddress: {
        ...DeliveryAddress
        // changed properties
    }
}
```

## Registration System for Products

```javascript
dataObject = {
    Id: "pro_00000001",
	SKU: "UGG-BB-PUR-06",
	Description: "product description",
	Category: "category",
	Status: "InStock" | "OutOfStock" | "ToOrder",
	Quantity: integer,
	Price: twoDecimalsFloat,
	Taxes: {
        Percentage: float,
        FixedValue: float,
    },
	Weight: float,      // in kg
	Dimensions: {
		Height: float,  //in cm
		Width: float,  //in cm
		Breadth: float, //in cm
	}
}
```

## Extra Features

### Live Database

A [Google Sheets](mylink.com) integrated with the website through an Apps Script endpoint.

The code in provided in this [repository](mylink.com).