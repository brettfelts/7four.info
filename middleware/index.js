/* Middleware object that contains all middleware functions. 
 * Make sure to add next() to any created middleware.
 */

var middlewareObj = {}

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
}

module.exports = middlewareObj;
