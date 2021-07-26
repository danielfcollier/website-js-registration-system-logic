import Server from "./Classes/Server.js"
import Database from "./Classes/Database.js";

import Lib from "./Classes/Lib.js";
import Utils from "./Classes/Utils.js";

import customerTemplate from "./Config/customerTemplate.js";
import customerFake from "./Config/customerFake.js";

const customerDB = new Database(customerTemplate);
window.customerDB = customerDB;
window.customerFake = customerFake;

// --- 
customerDB.create(customerFake(1));
customerDB.create(customerFake(2));
customerDB.create(customerFake(10));

// ---
document.getElementById("add-customer-button").addEventListener("click", addCustomer);

function addCustomer() {

    const customerInfo = {
        Name: document.getElementById("customer-fullname").value || null,
        Email: document.getElementById("customer-email").value || null,
        Birthday: document.getElementById("customer-birthday").value || null,
        Document: document.getElementById("customer-document").value || null,
        Type: "CPF",
        ExtraDocument: document.getElementById("customer-extra-document").value || null,
        Phone: document.getElementById("customer-phone").value || null,
        DeliveryAddress: {
            Street: document.getElementById("customer-da-street").value || null,
            Details: document.getElementById("customer-da-details").value || null,
            Number: document.getElementById("customer-da-number").value || null,
            Neighborhood: document.getElementById("customer-da-neighborhood").value || null,
            City: document.getElementById("customer-da-city").value || null,
            State: document.getElementById("customer-da-state").value || null,
            Country: document.getElementById("customer-da-country").value || null,
            Zipcode: document.getElementById("customer-da-zipcode").value || null
        },
        IsSameAddress: true,
    };

    const maxId = Lib.ArrayMax(Server.getCustomerData().map(data => parseInt(data.Id.slice(4,))));

    customerInfo.Id = `cus_${maxId + 1}`;

    Utils.LoadingStart();

    customerDB.create(customerInfo);

    Utils.LoadingEnd();

    Utils.Confirmation();
}
