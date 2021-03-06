export default class Database {
    // ---
    constructor(objectTemplate = { Id }) {
        this._modelArray = this._getModel(objectTemplate);
        this._dto = Object.assign(objectTemplate, {});
        this._setObjectNull(this._dto, this._modelArray);
        this.template = this._dto;
    }
    // ---
    _getModel(objectTemplate) {
        const modelArray = [];
        for (const property in objectTemplate) {
            if (typeof objectTemplate[property] !== "object") {
                modelArray.push(property);
            }
            else {
                modelArray.push([property, this._getModel(objectTemplate[property])]);
            }
        }

        return modelArray;
    }
    // ---
    _setObjectNull(dataObject, modelArray) {
        modelArray
            .forEach(property => {
                if (typeof property !== "object") {
                    dataObject[property] = null;
                }
                else {
                    this._setObjectNull(dataObject[property[0]], property[1]);
                }
            })
    }
    // ---
    _doDataTransfer(dataObject) {
        for (const property in dataObject) {
            this._dto[property] = dataObject[property];
        }
    }
    // ---
    create(dataObject) {
        let isCreated = false;

        isCreated = (this.read(dataObject.Id) === "not found") ? false : true;

        if (isCreated) {
            return { isCreated: false, message: "Customer already created" };
        }
        else {
            try {
                this._doDataTransfer(dataObject);

                this._create();
                //this._createStore();

                isCreated = true;
            }
            catch {
                isCreated = false;
            }
            finally {
                this._setObjectNull(this._dto, this._modelArray);
                return { isCreated, message: isCreated ? "Success" : "Error" };
            }
        }
    }
    // ---
    _create() {
        localStorage.setItem(this._dto.Id, JSON.stringify(this._dto));
    }
    // ---
    read(idParameter) {
        let dataObject;
        try {
            dataObject = this._read(idParameter);
            //dataObject = this._readStore();
        }
        catch {
            dataObject = null;
        }

        return dataObject ? JSON.parse(dataObject) : "not found";
    }
    // ---
    _read(idParameter) {
        return localStorage.getItem(idParameter);
    }
    // ---
    update(idParameter, changesObject) {
        const dataObject = this.read(idParameter);

        if (dataObject === "not found") {
            return "Error: object not found";
        }

        let isUpdated = false;

        try {
            for (const property in changesObject) {

                if (property === "Id") {
                    continue;
                }

                if (this._dto.hasOwnProperty(property) && changesObject[property] !== null) {

                    this._logUpdate({
                        From: dataObject[property],
                        To: changesObject[property],
                        Id: dataObject.Id,
                        Property: property
                    });

                    dataObject[property] = changesObject[property];
                }

                else {
                    console.error(`Property ${property} is not part of the database model`)
                }
            }

            this._update(idParameter, dataObject);

            isUpdated = true;
        }
        catch {
            isUpdated = false;
        }

        return isUpdated ? "Success" : "Error";
    }
    // ---
    _update(idParameter, dataObject) {
        this._doDataTransfer(dataObject);
        localStorage.setItem(idParameter, JSON.stringify(this._dto));
    }
    // ---
    _logUpdate(objLog) {
        console.log(`### Member Update # Id: ${objLog.Id} > Property: ${objLog.Property}` +
            ` > From: ${objLog.From} > To: ${objLog.To}`);
    }
    // ---
    remove(idParameter) {
        let isCreated = false;

        isCreated = (this.read(idParameter) === "not found") ? false : true;

        if (isCreated) {
            const isDeleted = this._remove(idParameter);
            //this._removeStore(idParameter);
            return isDeleted ? "Success" : "Error: try again";
        }
        else {
            return "Error: not in the database";
        }
    }
    // ---
    _remove(idParameter) {
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