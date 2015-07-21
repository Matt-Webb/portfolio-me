
$(function() {

	//var board = ChessBoard('board', 'start');

});



(function () {

    "use strict";

    var app = angular.module('webbApp', ['ngRoute', 'ngMap', 'ngAnimate']);

}());

(function (app) {

    "use strict";
	
    /**
    * Configure the Routes
    */
    app.config(['$routeProvider', function ($routeProvider) {
		
		var routes = [
			{ // HOME
				url: "/",
				config: {
					templateUrl: "partials/home.html",
					controller: "webbBodyController"
				}
			},
			{ // PAGES
				url: "/work",
				config: {
					templateUrl: "partials/work.html",
					controller: "webbBodyController"
				}
			},
			{
				url: "/experiences",
				config: {
					templateUrl: "partials/experiences.html",
					controller: "webbBodyController"
				}
			},
            {
                url: "/chess",
                config: {
                    templateUrl: "partials/chess.html",
                    controller: "webbChessController"
                }
            },
			{
				url: "/contact",
				config: {
					templateUrl: "partials/contact.html",
					controller: "webbBodyController"
				}
			}
		];
		
		routes.forEach(function(route) {
			$routeProvider.when(route.url, route.config);
		});
		
		$routeProvider.otherwise("/404", { templateUrl: "partials/404.html", controller: "webbBodyController" })
		
    }]);


    app.controller('webbBodyController', function ($scope) {
		

    });

    app.controller('webbChessController', function ($scope) {

    	

        $scope.title = "Welcome to the chess section!";

        $scope.tableHeaders = ["Name", "Title", "Grade", "Result", "Color", "Date"];

        $scope.data = [["265142H", "Swain, Sam B", "", "164", "1", "B", "11-07-2014"], ["125474B", "Newton, Robert A", "", "180", "1", "W", "13-07-2014"], ["156101H", "Burnett, Jim", "", "196", "1", "B", "13-07-2014"], ["273469C", "Ai, Farshad", "", "170", "1", "B", "27-09-2014"], ["124889D", "Evans, Paul A", "", "175", "1", "W", "03-10-2014"], ["113457H", "Jackson, Oliver A", "", "187", "1", "B", "04-10-2014"], ["283438J", "Izod, Chris", "", "191", "1", "W", "04-10-2014"], ["156101H", "Burnett, Jim", "", "196", "1", "B", "05-10-2014"], ["108841F", "Cooper, John G", "", "193", "1", "W", "05-10-2014"], ["146549B", "Rogerson, Mark W", "", "174", "1", "B", "11-10-2014"], ["296672E", "Gantner, Matthias", "", "211", "½", "B", "15-10-2014"], ["286095J", "Kee, Steve", "", "186", "1", "B", "24-10-2014"], ["187132J", "Burgin, Ryan", "", "182", "1", "W", "25-10-2014"], ["226372F", "Bak, Andrew", "", "175", "½", "B", "25-10-2014"], ["108841F", "Cooper, John G", "", "193", "1", "W", "26-10-2014"], ["259489E", "Adair, James R", "IM", "238", "½", "W", "26-10-2014"], ["191070L", "Jameson, David", "", "178", "1", "B", "15-11-2014"], ["268824E", "Smerdon, David", "GM", "248", "½", "W", "16-11-2014"], ["182906D", "Gower, Patrick", "", "172", "1", "B", "22-11-2014"], ["173429F", "Watson, Phil R", "", "197", "½", "B", "06-12-2014"], ["101814A", "Haddock, Paul", "", "128", "1", "B", "08-12-2014"], ["299800C", "Guramishvili, Sopiko", "IM", "223", "1", "W", "09-12-2014"], ["115262C", "McDonald, Neil R", "GM", "233", "½", "W", "10-12-2014"], ["103545K", "Gormally, Daniel W", "GM", "243", "½", "B", "11-12-2014"], ["243515K", "Zhou, Yang-Fan", "IM", "233", "1", "W", "12-12-2014"], ["296176D", "Vakhidov, Jahongir", "GM", "244", "0", "B", "13-12-2014"], ["263807B", "Sanders, Isaac B", "FM", "223", "½", "W", "14-12-2014"], ["258768D", "Merry, Alan B", "FM", "226", "1", "B", "10-12-2015"], ["142641C", "Braithwaite, Trevor", "", "186", "1", "W", "17-12-2015"], ["142953L", "Walker, Mike A", "", "183", "1", "B", "27-01-2015"], ["230914C", "Barry, Colm", "", "198", "1", "B", "03-02-2015"], ["108841F", "Cooper, John G", "", "193", "½", "W", "07-02-2015"], ["105776F", "Ansell, Simon T", "IM", "232", "½", "W", "14-02-2015"], ["104259C", "Greet, Andrew N", "IM", "229", "0", "B", "15-02-2015"], ["253127G", "Morrison, Graham", "FM", "220", "1", "B", "22-02-2015"], ["121082J", "Walton, Alan J", "", "203", "1", "B", "23-02-2015"], ["131102F", "Hamer, Martyn", "", "178", "1", "W", "06-03-2015"], ["294094C", "Pousada Garcia, Daniel", "", "190", "1", "B", "07-03-2015"], ["105817E", "Arkell, Keith CC", "GM", "234", "½", "W", "07-03-2015"], ["112455K", "Hebden, Mark L", "GM", "244", "1", "B", "08-03-2015"], ["124141C", "Walker, David J", "FM", "227", "1", "W", "08-03-2015"], ["259489E", "Adair, James R", "IM", "238", "0", "W", "11-04-2015"]];
    });

    app.controller("dataImagesWork", function ($scope) {
        $scope.images_work = [
              { num: 1, category: 'marketing', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 2, category: 'branding', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 3, category: 'design', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 4, category: 'photo', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 5, category: 'marketing', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 6, category: 'design', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 7, category: 'photo', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 8, category: 'marketing', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" },
              { num: 9, category: 'design', src: "1100x1057", description: 'Oscar is a decent man. He used to clean porches with pleasure. ', url_details: "details.html" }];

    });


    //'use strict';
    app.directive('autoActive', ['$location', function ($location) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element) {
                function setActive() {
                    var path = $location.path();
                    if (path) {
                        angular.forEach(element.find('li'), function (li) {
                            var anchor = li.querySelector('a');
                            if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                                angular.element(li).addClass('current');
                            } else {
                                angular.element(li).removeClass('current');
                            }
                        });
                    }
                }

                setActive();

                scope.$on('$locationChangeSuccess', setActive);
            }
        };
    }]);
	
	app.directive('webbHeader', function () {
		
		return {
			restrict: 'E',
			templateUrl: 'templates/header.html',
			link: function (scope, element, attributes) {	
			}
		};
		
	});
	
	
	app.directive('webbFooter', function () {
		
		return {
			restrict: 'E',
			templateUrl: 'templates/footer.html',
			link: function (scope, element, attributes) {	
			}
		};
		
	});

}(angular.module('webbApp')));






