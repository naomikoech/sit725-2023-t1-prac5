// views/userView.js
const userView = {
    renderSignupForm: (req, res) => {
        // Render signup form HTML
        res.send('Signup Form');
    },

    renderLoginForm: (req, res) => {
        // Render login form HTML
        res.send('Login Form');
    },

    renderDashboard: (req, res, username) => {
        // Render user dashboard HTML
        res.send(`Welcome ${username} to your Dashboard`);
    },
};

module.exports = userView;
