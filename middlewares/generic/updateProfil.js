var requireOption = require('../common').requireOption;


/**
 * Ha a Felhasználó be van jelentkezve
 */
module.exports = function (objectrepository) {
	
	var userModel = requireOption(objectrepository, 'userModel');
    return function (req, res, next) {
		var g=new User();
		g.firstName = 'Pista';
		
		g.lastName = 'Kiss';
		g.email = 'KissPista@valami.hu';
		g.password = 'abc123';
		g.save(function(err){
			console.log(err);
			
		});
		
		
		
        return next();
    };

};