/**
 * átadja az összes receptet
 */

module.exports = function (objectrep) {
    return function (req, res, next) {
		var food =[
			{
				id:1,
				name:'Húsleves',
				calorie: 200,
				time:210,
				img: 'http://placehold.it/300x200',
				recipe: 'Random szöveg.',
			},
			{
				id:2,
				name:'Pörkölt',
				calorie: 250,
				time:300,
				img: 'http://placehold.it/300x200',
				recipe: 'Random szöveg.',
			},	
			{
				id:3,
				name:'palacsinta',
				calorie: 300,
				time:30,
				img: 'http://placehold.it/300x200',
				recipe: 'Random szöveg.',
			},
			{
				id:4,
				name:'Húsleves',
				calorie: 200,
				time:210,
				img: 'http://placehold.it/300x200',
				recipe: 'Random szöveg.',
			},
			{
				id:5,
				name:'Pörkölt',
				calorie: 250,
				time:300,
				img: 'http://placehold.it/300x200',
				recipe: 'Random szöveg.',
			}	
		]
	
		res.tpl.food = food;
        return next();
    };

};
