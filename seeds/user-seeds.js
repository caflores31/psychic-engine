const { User } = require('../models');

const userData = [{
        username: 'Cherrie',
        password: 'cherrie'

    },
    {
        username: 'Admin',
        password: 'admin'
    },
    {
        username: 'Tester',
        password: 'tester'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
