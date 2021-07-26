import Server from "./Classes/Server.js"
import Database from "./Classes/Database.js";

import Lib from "./Classes/Lib.js";
import Utils from "./Classes/Utils.js";

import productTemplate from "./Config/productTemplate.js";
import productFake from "./Config/productFake.js";

const productDB = new Database(productTemplate);
window.productDB = productDB;
window.productFake = productFake;

// --- 
productDB.create(productFake(1));
productDB.create(productFake(2));
productDB.create(productFake(10));

// ---
document.getElementById("add-product-button").addEventListener("click", addProduct);

function addProduct() {

    const productInfo = {
        SKU: document.getElementById("product-sku").value || null,
        Description: document.getElementById("product-description").value || null,
        Category: document.getElementById("product-category").value || null,
        Status: "InStock",
        Quantity: document.getElementById("product-quantity").value || null,
        Price: document.getElementById("product-price").value || null,
        Taxes: {
            Percentage: 0.01,
            FixedValue: 0.30,
        },
        Weight: document.getElementById("product-weight").value || null,		// in kg
        Dimensions: {
            Height: document.getElementById("product-height").value || null,  	//in cm
            Width: document.getElementById("product-width").value || null,		//in cm
            Breadth: document.getElementById("product-breadth").value || null, 	//in cm
        }
    };

    const maxId = Lib.ArrayMax(Server.getProductData().map(data => parseInt(data.Id.slice(4,))));

    productInfo.Id = `pro_${maxId + 1}`;


    Utils.LoadingStart();

    productDB.create(productInfo);

    Utils.LoadingEnd();

    Utils.Confirmation();
}
