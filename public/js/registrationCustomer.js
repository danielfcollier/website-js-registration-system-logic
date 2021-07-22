import Database from "./Classes/Database.js";

import customerTemplate from "./Config/customerTemplate.js";
import customerFake from "./Config/customerFake.js";

const customerDB = new Database(customerTemplate);

window.customerDB = customerDB;
window.customerFake = customerFake;