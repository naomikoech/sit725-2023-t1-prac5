// models/userModel.js
const connection = require('../config/db');
const bcrypt = require('bcrypt');


const userModel = {
    createUser: async (first_name,last_name,phone,username, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const result = await connection.query('INSERT INTO users (first_name,last_name,phone,email, password) VALUES (?,?,?,?,?)', [first_name,last_name,phone,username, hashedPassword]);
            return result.insertId;
        } finally {
            // Release the connection back to the pool
        }
    },

    getUserByUsername: async (email) => {
        try {
            const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
            // ... rest of the code
        } catch (error) {
            console.error('Error connecting to the database:', error);
            return null;
        } finally {
            // Ensure proper connection release logic
        }
    },

    comparePassword: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    },
};

module.exports = userModel;
