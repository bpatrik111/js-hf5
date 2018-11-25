var renderMW = require('../middlewares/generic/render');
var authMW = require('../middlewares/generic/auth');

var getProfilMW = require('../middlewares/profil/getProfil');
var deleteProfilMW = require('../middlewares/profil/deleteProfil');
var updateProfilMW = require('../middlewares/profil/updateProfil');

module.exports= function(app){
	var authMW = function(){
		return function(req,res,next){			
			return next();
		};
	};
	
	var objrep ={};
	
	 /**
     * profil törlése
     */
	app.get('/profil/del/:id',
		authMW(objrep),
        getProfilMW(objrep),
        deleteProfilMW(objrep),
        function (req, res, next) {
            return res.redirect('/login');
        }
    );
	
	 /**
     * profil módosítása
     */
	app.get('/profil',
		authMW(objrep),
		getProfilMW(objrep),		
		renderMW(objrep,'profil'));
	
	 /**
     * profil módosításának elküldése
     */
	app.post('/profil',
		authMW(objrep),
		updateProfilMW(objrep));
			
		

};