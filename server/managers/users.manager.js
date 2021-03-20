const { v1: uuidv1 } = require('uuid');

// saving data in an object, where id is the key and object is the value
// to reach items faster 
const usersData = {
    _emails: { 'admin@abc.com': '0123' }, // key: email, value: id (to get user by id on login)
    '0123': {
        name: 'admin',
        email: 'admin@abc.com',
        password: 'Admin123',
        role: 'admin',
        id: '0123'
    }
};

class Users {

    constructor() {
    }

    /**
     * @private
     * get clone of user object that safe to be sent to the client side
     * @param {string} id 
     * @returns 
     */
    _getCloneUser(id) {
        let user = { ...usersData[id] };
        delete user.password; // remove password for security
        return user;
    }

    /**
     * @async 
     * just to simulate getting data from data base
     * @param {string} id
     * @returns {object} user details
     */
    async getById(id) {
        let user = usersData[id];
        if (user == undefined) throw new Error("User doesn't exist");
        // get clone of user object to modify it
        return this._getCloneUser(id);
    }

    /**
     * @async 
     * login user by email 
     * @param {object} loginForm contains email and password
     * @returns {object} user details
     */
    async login(loginForm) {
        // check if email exists
        let { email } = loginForm;
        email = email.toLowerCase().trim();
        let userId = usersData._emails[email];
        if (userId == undefined) 
            throw { control: 'email', message: 'Wrong email.'};
        // get user object
        let user = usersData[userId];
        // check password
        if (user.password != loginForm.password)
            throw { control: 'password', message: 'Wrong password.'};
        // get clone of user object to modify it
        return this._getCloneUser(userId);
    }

    /**
     * @async 
     * register new user
     * @param {object} user 
     * @returns {object} user object
     */
     async register(user) {
        // check if email exists
        let { email } = user;
        email = email.toLowerCase().trim();
        if (usersData._emails[email] != undefined) 
            throw { control: 'email', message: 'Email already exists.'};
        user.id = uuidv1();
        user.role = 'client'; // add role to user
        usersData[user.id] = user; // add user to dict
        usersData._emails[email] = user.id; // add email and id for login
        // get clone of user object to modify it
        return this._getCloneUser(user.id);
    }
}

module.exports = Users;