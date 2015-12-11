module.exports = {
	'get': function(id, callback){
		var menu = {
			'entree' : 'avocats au saumon',
			'plat' : 'lasagnes à la roquette',
			'dessert' : 'crême fouettée aux figues et au miel'
		}
		callback(null, menu);

	}
};
