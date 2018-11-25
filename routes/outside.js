var renderMW = require('../middlewares/generic/render');
var authMW = require('../middlewares/generic/auth');

var mainRedirectMW = require('../middlewares/generic/mainRedirect');
var inverseAuthMW = require('../middlewares/generic/inverseAuth');
var checkUserLoginMW = require('../middlewares/generic/checkUserLogin');
var logoutMW = require('../middlewares/generic/logout');
var forgotPWMW= require('../middlewares/generic/forgotPW');
var updateProfilMW = require('../middlewares/generic/updateProfil');

module.exports= function(app){

	var renderMW = require('../middlewares/generic/render.js');
	
	var objrep ={
		
	};
	
	 /**
     * fooldal
     */
    app.get('/',
        mainRedirectMW(objrep)
    );	    
	
	/**
     * regisztráció render
     */
	app.get('/register',
		inverseAuthMW(objrep),
		renderMW(objrep,'register'));
	
	/**
     * regisztráció elküldése
     */	
	app.post('/register',
		inverseAuthMW(objrep),
		updateProfilMW(objrep));
	
	/**
     * elfelejtett jelszó render
     */
	
	app.get('/forgotpw',
		inverseAuthMW(objrep),
		renderMW(objrep,'forgotpw'));
		
	/**
     * elfelejtett jelszó, elküld egy e-mailt
     */
	
	app.post('/forgotpw',
		inverseAuthMW(objrep),
		forgotPWMW(objrep, 'login')
	);
		
	/**
     * bejelentkezés render
     */
    app.get('/login',
        inverseAuthMW(objrep),
        renderMW(objrep, 'login')
    );

	/**
     * Bejelentkezés elküldése
     */
    app.post('/login',
        inverseAuthMW(objrep),
        checkUserLoginMW(objrep),
    );
	
	 /**
     * kijelentkezés, főoldalra irányít
     */
    app.get('/logout',
        logoutMW(objrep),
        function(req, res, next) {
            res.redirect('/');
        }
    );
		
	
};