var renderMW = require('../middlewares/generic/render');
var authMW = require('../middlewares/generic/auth');

var updateRecipeMW = require('../middlewares/list/updateRecipe');
var getRecipeMW = require('../middlewares/list/getRecipe');
var deleteRecipeMW = require('../middlewares/list/deleteRecipe');
var addCommentMW = require('../middlewares/list/addComment');
var getCommentMW = require('../middlewares/list/getComment');
var getRecipeListMW = require('../middlewares/list/getRecipeList');

module.exports= function(app){
	var authMW = function(){
		return function(req,res,next){			
			return next();
		};
	};
	
	var objrep ={};
	
	
	
	 /**
     * étel hozzáadása render
     */
	app.get('/list/add',					
		authMW(objrep),		
		renderMW(objrep,'addRecipe'));
		
	 /**
     * étel hozzáadása elküld
     */		
	app.post('/list/add',				
		authMW(objrep),
		updateRecipeMW(objrep));	
		
	 /**
     * étel módosítása render
     */		
	app.get('/list/mod/:id',				
		authMW(objrep),
		getRecipeMW(objrep),
		renderMW(objrep,'changeRecipe'));
	 
	 /**
     * étel módosítása elküld
     */		
	app.post('/list/mod/:id',				
		authMW(objrep),
		updateRecipeMW(objrep));	
	 
	 /**
     * étel törlése
     */		
	app.get('/list/del/:id',				
		authMW(objrep));
		getRecipeMW(objrep),
		deleteRecipeMW(objrep),
        function (req, res, next) {
            return res.redirect('/list');
        }
	 
	 /**
     * kommentálás az ételhez
     */		
	app.post('/list/comment/:id',
		authMW(objrep),
		addCommentMW(objrep));
	 
	 /**
     * ugrás az ételre
     */		
	app.get('/list/:id',					
		authMW(objrep),
		getRecipeMW(objrep),
		getCommentMW(objrep),
		renderMW(objrep,'recipe'));
	 
	 /**
     * ételek listázásalistázás
     */		
	app.get('/list',						
		authMW(objrep),
		getRecipeListMW(objrep),
		renderMW(objrep,'list'));
		
};