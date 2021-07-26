export default class Server {
    // ---
    static getCustomerData() {
        const patternCondition = /^cus./;
        const dataBulk = Object.keys(localStorage)
            .filter(property => patternCondition.test(property))
            .map(property => JSON.parse(localStorage.getItem(property)));
        return dataBulk;
    }
    // ---
    static getProductData() {
        const patternCondition = /^pro./;
        const dataBulk = Object.keys(localStorage)
            .filter(property => patternCondition.test(property))
            .map(property => JSON.parse(localStorage.getItem(property)));
        return dataBulk;
    }
    // ---
}