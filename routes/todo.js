var express = require('express');
var router = express.Router();

let todoController = require('../controllers/todo');

// Helper function for guard purposes
const requireAuth = (req, res, next) =>
{
    // check if the user is logged in
    res.locals.isAuthenticated = req.isAuthenticated();

    if( req.isAuthenticated() ) {
        return next();
    }
    
    req.session.url = req.originalUrl;
    return res.redirect('../users/signin');
}

/* GET list of items */
router.get('/list', requireAuth, todoController.todoList);

// Route for Details
router.get('/details/:id', requireAuth, todoController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, todoController.displayEditPage);
router.post('/edit/:id', todoController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, todoController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, todoController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', todoController.processAddPage);

module.exports = router;