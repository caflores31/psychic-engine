const { Post } = require('../models');

const postData = [{
        title: 'How to extract data from any webpage without getting blocked I',
        content: 'Scraping can help you glean effective tactics and techniques from competitors, generate leads, and monitor price fluctuations, but acquiring the data can be difficult – here are ten ways to keep the data flowing.',
        user_id: 1

    },
    {
        title: 'How has MLOps changed in recent years?',
        content: 'Machine Learning Operations (MLOps) is a relatively new discipline or practice for data scientists and information technology professionals to interact or communicate while programming and automating machine learning algorithms.',
        user_id: 2
    },
    {
        title: 'Cybersecurity OT, focus on the electrical sector ',
        content: 'Cybersecurity OT, focus on the electrical sector”, will take place on Tuesday, March 2nd, at 5pm (CET). Registration, free of charge',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;