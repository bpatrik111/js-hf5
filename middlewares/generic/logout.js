/**
 * kijelentkezés
 */
module.exports = function (objectrepository) {
    return function (req,res,next) {
        req.session.destroy(function (error) {
            return res.redirect('/login');
        });
    }
}