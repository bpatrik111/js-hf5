/**
 * Sablonok használata
 */
module.exports = function (objectrepository, viewName) {

  return function (req, res) {
    res.render(viewName, res.tpl);
  };

};
