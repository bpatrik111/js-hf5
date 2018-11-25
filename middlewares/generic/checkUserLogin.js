/**
 * ellenőrzi a megadott adatokat, ha helyes, akkor bejelentkezik
 */
var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');

  return function (req, res, next) {

    //not enough parameter
    if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
      (typeof req.body.password === 'undefined')) {
      return next();
    }

    //lets find the user
    userModel.findOne({
      email: req.body.email
    }, function (err, result) {
      if ((err) || (!result)) {
        res.tpl.error.push('Az e-mail cím nincs regisztrálva!');
        return next();
      }

      //check password
      if (result.password !== req.body.password) {
        res.tpl.error.push('Rossz jelszó!');
        return next();
      }

      //login is ok, save id to session
      req.session.userid = result._id;

      //redirect to / so the app can decide where to go next
      return res.redirect('/');
    });
  };

};
