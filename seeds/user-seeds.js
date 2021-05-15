const { User } = require('../models');

const userData = [{
        username: 'Admin',
        password: 'admin'

    },
    {
        username: 'Test',
        password: 'test'
    },
    {
        username: 'User1',
        password: 'user1'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
