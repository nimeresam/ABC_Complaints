const { v1: uuidv1 } = require('uuid');

class Complaints {

    constructor() {
        // saving data in an object, where id is the key and object is the value
        // to reach items faster 
        this._dataDict = {
            _list: []
        };
    }

    /**
     * @async 
     * just to simulate getting data from data base
     * @returns 
     */
    async get(userId, role) {
        return (role == 'admin') ?
            this._dataDict._list:
            this._dataDict._list.filter(complaint => complaint.createdBy == userId);
    }

    /**
     * @async 
     * create or update complaint
     * @param {object} complaint 
     * @returns {object} updated complaint
     */
    async update(complaint, userId) {
        // check if complaint exists
        let current = this._dataDict[complaint.id];
        // throw an error if complaint not exist
        if (current == undefined) throw new Error(`Failed to find Complaint with id: ${complaint.id}`);
        complaint.changeDate = new Date();
        complaint.changeBy = userId;
        // to keep current instance
        return Object.assign(current, complaint);

    }

    /**
     * @async 
     * create new complaint
     * @param {object} complaint 
     * @param {string} userId 
     * @returns {object} created complaint
     */
    async create(complaint, userId) {
        complaint.creationDate = new Date();
        complaint.createdBy = userId;
        complaint.id = uuidv1();

        this._dataDict[complaint.id] = complaint;
        this._dataDict._list.push(complaint);
        return complaint;
    }

    /**
     * @async 
     * remove complaint by id
     * @param {string} id 
     */
    async delete(id) {
        if (this._dataDict[id] == undefined) throw new Error(`No Complaint found with id: ${complaint.id}`);
        var complaint = this._dataDict[id];
        // remove complaint from list also
        let index = this._dataDict._list.indexOf(complaint);
        this._dataDict._list.splice(index, 1);
        delete this._dataDict[id];
    }
}

module.exports = Complaints;