# Website with Registration System for Ecommerce

Syntax: HTML, CSS, and, JS ES6+

Developed as part of the training Hiring Coders provided by VTEX:

- 2nd challenge

## Demo Page

## Store Procedures

All operations are CRUD (create, read, update, and delete) based with JS routines.

## Database Class

Usage:

```javascript
const database = new Database(searchProperties);
```

### All Methods:

\# Create:

```javascript
const {isCreated, message} = database.create(dataObject);
```

> See also [its description.](/#-create)

\# Read:

```javascript
const dataObject = database.read({property: parameter})
```

> See also [its description.](/#-read)

\# Update:

```javascript
const message = database.update({
	Id: idIdentifier,
	property: parameter
})
```

> See also [its description.](/#-update)

\# Delete:

```javascript
const message = database.remove(idIdentifier)
```

> See also [its description.](#-delete)

\# Mock:

```javascript
const fakeObject = database.mock();
```

> See also [its description.](#-create)
### Methods Description

#### \# Generate Mock Object

```javascript
.mock()
```

This method is provided to generate fake data to facilitate tests of the database logic.

> Input: **empty**
>
> Output: returns a fake data object to be used to create new customers.

#### \# Create

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

#### \# Read

```javascript
.read({property: parameter})
```

> Input: 
> - ```property```: the identifier for the given parameter
> - ```parameter```: the parameter to search through in the database
>
> Output: ```dataObject``` |  ```-1``` for not found 

#### \# Update

```javascript
.update({
	Id: idIdentifier,
	property: parameter
})
```

> Input: 
> - ```idIdentifier```: **required** -> the Id of the object to be updated 
> - ```property: parameter```: the pair property and parameter to be updated
>
> Output: ```message```: ```"Success"``` | ```"Error"```

#### \# Delete

```javascript
.remove(idIdentifier)
```

> Input: 
> - ```idIdentifier```: the Id of the object to be deleted 
>
> Output: ```message```: ```"Success"``` | ```"Error"```

*Note: delete is a JavaScript reserved keyword that should be avoid to be used.

## Additional Features



## Registration System for Customers

The system accepts the following input for the registration of a new customer in the database.

*Note: this is an exemplary and explanatory ```dataObject```. So, please, adjust properly your inputs.

```javascript
dataObject = {
	Id: "cus_00000001",
	Name: "João da Silva",
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

The system accepts the following input for the registration of a new customer in the database.

*Note: this is an exemplary and explanatory ```dataObject```. So, please, adjust properly your inputs.

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

## Local Database

For exemplary purposes, all the stored data is also stored in the ```window``` ```localStorage``` object.

Type at the browser console ```localStorage``` to see all the stored data that you have entered while navigation in the website.

## Live Database (not implemented)

A [Google Sheets](mylink.com) integrated with the website through an Apps Script endpoint.

The code in provided in this [repository](mylink.com).