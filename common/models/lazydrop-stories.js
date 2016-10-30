'use strict';

module.exports = function(Lazydropstories) {

	Lazydropstories.getStories = function(latLeft, latRight, longUp, longDown, callback){
		// Get all stories between within the region of the screen
		Lazydropstories.find({
			where: {
				and:[
					{storyLatitude: {between: [latLeft,latRight]}},
					{storyLongitude: {between: [longDown,longUp]}}
				]
			}
		},function(err, res){
			if(!err) return callback(null, res);
		});
	}

	Lazydropstories.remoteMethod('getStories',{
		accepts: [
				{arg:"latLeft", type:"number", required:true},
				{arg:"latRight", type:"number", required:true},
				{arg:"longUp", type:"number", required:true},
				{arg:"longDown", type:"number", required:true}
			],
		returns: {arg:"res", type:"object"}
	});


};
