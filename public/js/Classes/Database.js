export default class Database {
    // ---
    constructor(keys = ["Id"]) {
        this.keys = keys;
        this._dto = {};
        this._setDtoNull();
    }
    // ---
    _setDtoNull() {
        this.keys.forEach(property => this._dto[property] = null);
    }
    // ---
    create(dataObject) {
        let isCreated = false;

        isCreated = (this.read(dataObject.Id) === -1) ? false : true;

        if (isCreated) {
            return { isCreated: false, message: "Customer already created" };
        }
        else {
            try {
                for (const property in dataObject) {
                    this._dto[property] = dataObject[property];
                }

                const isNotNull = property => this._dto[property] ? true : false;

                isCreated = this.keys.some(isNotNull);

                this._createLocal();
                this._createStore();
            }
            catch {
                isCreated = false;
            }
            finally {
                this._setDtoNull();
                return { isCreated, message: isCreated ? "Success" : "Error" };
            }
        }
    }
    // ---
    _createLocal() {
        localStorage.setItem(this._dto.Id, JSON.stringify(this._dto));
    }
    // ---
    read(idParameter) {
        let dataObject;
        try {
            dataObject = this._readLocal(idParameter);
            //dataObject = this._readStore();
        }
        catch {
            dataObject = null;
        }

        return dataObject ? JSON.parse(dataObject) : -1;
    }
    // ---
    _readLocal(idParameter) {
        return localStorage.getItem(idParameter);
    }
    // ---
    update(idParameter, changesObject) {
        const dataObject = this.read(idParameter);

        if (dataObject === -1) {
            return "Error: object not found";
        }

        let isUpdated = false;

        try {
            for (const property in changesObject) {

                if (property === "Id") {
                    continue;
                }

                if (this._dto.hasOwnProperty(property) && changesObject[property] !== null ) { 

                    this._logUpdates({
                        From: dataObject[property],
                        To: changesObject[property],
                        Id: dataObject.Id,
                        Property: property
                    });

                    dataObject[property] = changesObject[property];
                }
            }


            isUpdated = true;
        }
        catch {
            isUpdated = false;
        }

        return isUpdated ? "Success" : "Error";
    }
    // ---
    _updateLocal(idParameter) {
        localStorage.setItem(idParameter, JSON.stringify(this._dto));
    }
    // ----------------------------------------------------------------------------------------------
    _logUpdates(objLog) {
        console.log(`### Member Update # Id: ${objLog.Id} > Property: ${objLog.Property}` +
            ` > From: ${objLog.From} > To: ${objLog.To}`);
    }
    // ---
    remove(idParameter) {
        let isCreated = false;

        isCreated = (this.read(idParameter) === -1) ? false : true;

        if (isCreated) {
            const isDeleted = this._removeLocal(idParameter);
            //this._removeStore(idIdentifier);
            return isDeleted ? "Success" : "Error: try again";
        }
        else {
            return "Error: not in the database";
        }
    }
    // ---
    _removeLocal(idParameter) {
        try {
            localStorage.removeItem(idParameter);
            return true;
        }
        catch {
            return false;
        }
    }
    // ---
    _createStore() {

    }
    // ---
    _readStore() {

    }
    // ---
    _updateStore() {

    }
    // ---
    _removeStore() {

    }
    // ---
}