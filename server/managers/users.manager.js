const { v1: uuidv1 } = require('uuid');

class Users {
    constructor() {
        // saving data in an object, where id is the key and object is the value
        // to reach items faster 
        this._dataDict = {
            _emails: {} // key: email, value: id (to get user by id on login)
        };
    }

    /**
     * @async 
     * just to simulate getting data from data base
     * @param {string} id
     * @returns 
     */
    async getById(id) {
        let user = this._dataDict[id];
        if (user == undefined) throw new Error("User doesn't exist");
        return user;
    }

    /**
     * @async 
     * login user by email 
     * @param {object} loginForm contains email and password
     * @returns 
     */
    async login(loginForm) {
        // check if email exists
        let { email } = loginForm;
        email = email.toLowerCase().trim();
        let userId = this._dataDict._emails[email];
        if (userId == undefined) 
            throw { control: 'email', message: 'Wrong email.'};
        // get user object
        let user = this._dataDict[userId];
        // check password
        if (user.password != loginForm.password)
            throw { control: 'password', message: 'Wrong password.'};
        return user;
    }

    /**
     * @async 
     * register new user
     * @param {object} user 
     * @param {'admin' | 'client'} role 
     * @returns {object} user object
     */
     async register(user, role) {
        // check if email exists
        let { email } = user;
        email = email.toLowerCase().trim();
        if (this._dataDict._emails[email] != undefined) 
            throw { control: 'email', message: 'Email already exists.'};
        user.id = uuidv1();
        user.role = role; // add role to user
        this._dataDict[user.id] = user; // add user to dict
        this._dataDict._emails[email] = user.id; // add email and id for login
        return user;
    }
}

module.exports = Users;