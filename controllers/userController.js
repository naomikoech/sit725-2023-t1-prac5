// controllers/userController.js
const userModel = require('../models/userModel');
const userView = require('../views/userView');

const userController = {
    signup: async (req, res) => {
        console.log(req.body);
        const { first_name,last_name,phone,username, password } = req.body;
        try {
            const userId = await userModel.createUser(first_name,last_name,phone,username, password);
            userView.renderDashboard(req, res, username);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await userModel.getUserByUsername(username);

            if (user && (await userModel.comparePassword(password, user.password))) {
                userView.renderDashboard(req, res, username);
            } else {
                res.status(401).send('Invalid username or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).send('Internal Server Error');
        }
    },
};

module.exports = userController;
