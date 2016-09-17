angular.module('searchApp',['ngRoute'])
	.controller("MainCtrl",["$http","$scope","$timeout",function($http,$scope,$timeout){
		$scope.websites = [];

		$scope.fetch = function(){
			$http.get("https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites")
				.success(function(data){
					console.log(data);
					$scope.websites = data.websites;
				})
				.error(function(err){
					console.log(err);
				});
		};


		//This is to call the fetch function 
		//when the controller is loaded
		$timeout($scope.fetch);


		
		// $scope.websites = [
		// 		{
		// 			"id": "1",
		// 			"title": "daniel g. siegel",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/10.png",
		// 			"url_address": "http://www.dgsiegel.net/",
		// 			"tag": "personal"
		// 		},
		// 		{
		// 			"id": "2",
		// 			"title": "Ross Penman",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/38.png",
		// 			"url_address": "https://rosspenman.com/",
		// 			"tag": "Personal"
		// 		},
		// 		{
		// 			"id": "3",
		// 			"title": "goker / resume",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/28.png",
		// 			"url_address": "http://gokercebeci.com/me",
		// 			"tag": "Blog"
		// 		},
		// 		{
		// 			"id": "4",
		// 			"title": "Gilles Quenot / SO",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/46.png",
		// 			"url_address": "https://goo.gl/fdr5Kq",
		// 			"tag": "Social"
		// 		},
		// 		{
		// 			"id": "5",
		// 			"title": "Nithin Rao Kumblekar",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/20.png",
		// 			"url_address": "http://www.nithinkumblekar.com/",
		// 			"tag": "Caricature"
		// 		},
		// 		{
		// 			"id": "6",
		// 			"title": "I am ben",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/9.png",
		// 			"url_address": "http://www.iamben.co.uk/",
		// 			"tag": "Professional"
		// 		},
		// 		{
		// 			"id": "7",
		// 			"title": "Mathias Karlsson",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/37.png",
		// 			"url_address": "https://bounty.github.com/researchers/avlidienbrunn.html",
		// 			"tag": "Security"
		// 		},
		// 		{
		// 			"id": "8",
		// 			"title": "randomstream",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/30.png",
		// 			"url_address": "http://kracekumar.com/",
		// 			"tag": "personal"
		// 		},
		// 		{
		// 			"id": "9",
		// 			"title": "travisneilson",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/30.png",
		// 			"url_address": "http://travisneilson.com/",
		// 			"tag": "personal"
		// 		},
		// 		{
		// 			"id": "10",
		// 			"title": "adhamdannaway",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/41.png",
		// 			"url_address": "http://www.adhamdannaway.com/",
		// 			"tag": "personal"
		// 		},
		// 		{
		// 			"id": "11",
		// 			"title": "test",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/37.png",
		// 			"url_address": "http://test.as.com",
		// 			"tag": "hacktest"
		// 		},
		// 		{
		// 			"id": "12",
		// 			"title": "google",
		// 			"favicon_image": "http://hackerearth.0x10.info/api/avatar/36.png",
		// 			"url_address": "http://google.com",
		// 			"tag": "super"
		// 		}
		// ];
		

		
}]);


