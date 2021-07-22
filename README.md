# Website with Registration System for Ecommerce

Syntax: HTML, CSS, and, JS ES6+

Developed as part of the training Hiring Coders provided by VTEX:

- 2nd challenge

## Demo Page

## Database Class

Usage:

```javascript
const database = new Database(objectTemplate);
```

The ```objectTemplate``` is a sample JSON object with the properties for the created database. A must property - and also the default, is ```Id```.  

At any time, the object template can be accessed through the database property ```database.template```.

### Public Methods:

All operations are CRUD (create, read, update, and delete) based with JS routines.

\# Create:

```javascript
const {isCreated, message} = database.create(dataObject);
```

> *See also [its description.](#-create)*

\# Read:

```javascript
const dataObject = database.read(idParameter);
```

> *See also [its description.](#-read)*

\# Update:

```javascript
const message = database.update(idParameter, changesObject);
```

> *See also [its description.](#-update)*

\# Delete:

```javascript
const message = database.remove(idParameter);
```

> *See also [its description.](#-delete)*

## Methods Description

### \# Constructor

```javascript
new Database(objectTemplate);
```

```objectTemplate```

> Default property 
```javascript
Id
``` 
> Example
```javascript
const objectTemplate = {
	Id: "cus_00000001",
	Name: "João da Silva",
	Email: "joaosilvafake@email.com",
	Birthday: "1985-01-10",
	Document: "XXX.XXX.XXX-XX",  
	Type: "CPF",
	ExtraDocument: "RG 234-5 SSP/SC",
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
	IsSameAddress: true,
	BillingAddress: {
		Street: "Rua Pirineus",
		Details: "Bloco A Apto 306, Res. Solar da Primavera",
		Number: 86,
		Neighborhood: "Córrego Grande",
		City: "Florianópolis",
		State: "SC",
		Country: "Brasil",
		Zipcode: "88.035-615"
	}
}
```

### \# Create

```javascript
.create(dataObject)
```

> Input: 
> - ```dataObject```: object with properties for a given database member
> (see Customers Object and Products Object)
>
> Output: 
> - ```.isCreated```: type boolean
> - ```.message```: ```"Success"``` | ```"Error"``` | ```"Customer already created"``` 

### \# Read

```javascript
.read(idParameter)
```

> Input: ```idParameter```: the Id of the object to be updated 
>
> Output: ```dataObject``` | ```dataObjArray``` |  ```-1``` for not found 

### \# Update

```javascript
.update(idParameter, changesObject = {property: parameter})
```

> Input: 
> - ```idParameter```: the Id of the object to be updated 
> - ```property: parameter```: pairs of property and parameter to be updated
>
> Output: ```message```: ```"Success"``` | ```"Error"```

### \# Delete

```javascript
.remove(idParameter)
```

> Input: 
> - ```idParameter```: the Id of the object to be deleted 
>
> Output: ```message```: ```"Success"``` | ```"Error"```

*__Note__: delete is a JavaScript reserved keyword that should be avoid to be used.*

## Registration System for Customers

The system accepts the following input for the registration of a new customer in the database.

```javascript
dataObject = {
	Id: "cus_00000001",
	Name: "João da Silva",
	Email: "joaosilvafake@email.com",
	Birthday: "1985-01-10",
	Document: "XXX.XXX.XXX-XX",  
	Type: "CPF",
	ExtraDocument: "RG 234-5 SSP/SC",
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
	IsSameAddress: true, //type boolean
	BillingAddress: {
        ...DeliveryAddress
        // changed properties
    }
}
```

*__Note__: this is an exemplary and explanatory ```dataObject```. So, please, adjust properly your inputs.*

### Starting a Customer Database

```javascript
const customerDB = new Database();
```
## Registration System for Products

The system accepts the following input for the registration of a new customer in the database.

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
	Weight: float,		// in kg
	Dimensions: {
		Height: float,  //in cm
		Width: float,  	//in cm
		Breadth: float, //in cm
	}
}
```
*__Note__: this is an exemplary and explanatory ```dataObject```. So, please, adjust properly your inputs.*

### Starting a Product Database

```javascript
const productDB = new Database();
```

## Local Database

For exemplary purposes, all the stored data is also stored in the ```window``` object within the property ```localStorage```.

Type at the browser console ```localStorage``` to see all the stored data that you have entered while navigation in the website.

## Live Database (not implemented)

A [Google Sheets](mylink.com) integrated with the website through an Apps Script endpoint.

The code in provided in this [repository](mylink.com).