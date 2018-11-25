/**
 * főoldal betöltése, ha a felhasználó be van jelentkezve, akkor lista ha nincs akkor login
 */
module.exports = function (objrep) {
  return function (req, res, next) {

    //if (typeof req.session.userid === 'undefined') {
      return res.redirect('/login');
    //} else {
      //return res.redirect('/list');
    //}
  };

};