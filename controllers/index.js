const router = require('express').Router();
const apiRoutes = require('/Users/cherrieanneawang/Desktop/projects/psychic-engine/controllers/api');
const homeRoutes = require('/Users/cherrieanneawang/Desktop/projects/psychic-engine/controllers/home-routes.js');
const dashboardRoutes = require('/Users/cherrieanneawang/Desktop/projects/psychic-engine/controllers/dashboad-routes.js');
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;