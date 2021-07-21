export default class Database {
    // ---
    constructor(fakeObject) {
        this.fakeObject = fakeObject;
     }
    // ---
    create(dataObject) {

        return {isCreated, message};
    }
    // ---
    read({property: parameter}) {

        return dataObject ?? -1;
    }
    // ---
    update({Id: idParameter, dataObject}) {

        return isUpdated ? "Success" : "Error";
    }
    // ---
    remove(idIdentifier) {

        return isDeleted ? "Success" : "Error";
    } 
    // ---
    mock(fakeObject) {
        return this.fakeObject;
    }
    // ---

}