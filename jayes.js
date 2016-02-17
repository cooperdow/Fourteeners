var mountain = angular.module('14ers', ["ngRoute"]);

mountain.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'homeController',
			  })
        .when('/frontrange', 
              {
              templateUrl : 'pages/frontrange.html',
              controller  : 'frontController',
			  })
        .when('/tenmilerange', 
              {
              templateUrl : 'pages/tenmilerange.html',
              controller  : 'tenmileController',
			  })
        .when('/mosquitorange', 
              {
              templateUrl : 'pages/mosquitorange.html',
              controller  : 'mosquitoController',
			  })
        .when('/sawatchrange', 
              {
              templateUrl : 'pages/sawatchrange.html',
              controller  : 'sawatchController',
			  })
        .when('/elkmountainrange', 
              {
              templateUrl : 'pages/elkrange.html',
              controller  : 'elkController',
			  })
        .when('/sanjuanrange', 
              {
              templateUrl : 'pages/sanjuanrange.html',
              controller  : 'sanjuanController',
			  })
        .when('/sangredecristo', 
              {
              templateUrl : 'pages/sangredecristo.html',
              controller  : 'sangreController',
			  })
        .when('/map', 
              {
              templateUrl : 'pages/map.html',
              controller  : 'mappController',
			  })
        .when('/weather', 
              {
              templateUrl : 'pages/weather.html',
              controller  : 'forecastController',
			  })
	});
mountain.controller('forecastController', ['$scope', '$http', function($scope, $http)
    {
    $scope.city = "Denver";
    $scope.$watch('city', function()
        {
        cityService.city = city.Service;
        });
    $scope.getData=function()
        {
            $http.get("http://api.apixu.com/v1/current.json?key=4c4af9a1caa14949891152121161602&q=" + $scope.city)
                .success(function(data) 
                    {
                        console.log("It worked");
                   
                        $scope.location1 = data.location.name;
                alert($scope.location1);
                
                        $scope.location2 = data.location.region;
                alert($scope.location2);
//                        $scope.location3 = data.object.location[lat];
//                        $scope.location4 = data.object.location[lon];
//                        $scope.location5 = data.object.location[localtime];
//
//                        $scope.current1 = data.object.current[last_updated];
//                        $scope.current2 = data.object.current[temp_f];
//                        $scope.current3 = data.object.current.condition[text];
//                        $scope.current4 = data.object.current[wind_mph];
//                        $scope.current5 = data.object.current[wind_dir];
//                        $scope.current6 = data.object.current[pressure_in];
//                        $scope.current7 = data.object.current[precip_in];
//                        $scope.current8 = data.object.current[humidity];
//                        $scope.current9 = data.object.current[cloud];
//                        $scope.current10 = data.object.current[feelslike_f];
                    })
                .error(function (data, status) 
                    {
                    console.log("Didn't work");
                    });
        }();
    }]);

mountain.controller("homeController", function($scope) 
    {
    $scope.hom=
        [
        {
        name: "Mountain Cabin in Breckenridge",
        height: "Moon cricket",
        image: "images/cabin.jpg",
        },
        ];
	});

mountain.controller('frontController', function ($scope)
    {
    $scope.front=
        [
        {
          name: "Grays(left) and Torreys(right)",
          height: "14,270 ft and 14,267 ft",
          image: "images/Grays_Toreys.jpg"
        },
       {
          name: "Mt.Evans",
          height: "14,264 ft",
          image: "images/Evans.jpg"
        },
        {
          name: "Longs Peak",
          height: "14,255 ft",
          image: "images/Longs.jpg"
        },
        {
          name: "Pikes Peak",
          height: "14,110 ft",
          image: "images/Pikes.jpg"
        },
        {
          name: "Mt. Bierstadt (Mt. Evans to the left)",
          height: "14,060 ft",
          image: "images/Bierstadt.jpg"
        },
        ];
	});
mountain.controller('tenmileController', function ($scope)
    {
    $scope.tenmile=
        [
        {
          name: "Mt. Quandry",
          height: "14,265 ft",
            local: "39.3972°N 106.1064°W, Co Rd 850, Breckenridge, CO 80424",
          image: "images/quandry.jpg"
        },
        ];
	});

mountain.controller('mosquitoController', function ($scope)
    {
    $scope.mosq=
        [
        {
          name: "Mt. Lincoln (seen behind saddle of Mt. Cameron)",
          height: "14,286 ft",
          image: "images/lincoln.jpg"
        },
       {
          name: "Mt.Bross (Mt. Lincoln out of sight to the right)",
          height: "14,172 ft",
          image: "images/bross.jpg"
        },
        {
          name: "Mt. Democrat (Seen from Mt. Bross)",
          height: "14,148 ft",
          image: "images/democrat.jpg"
        },
        {
          name: "Mt. Sherman",
          height: "14,036 ft",
          image: "images/sherman.jpg"
        },
        ];
	});

mountain.controller('sawatchController', function ($scope)
    {
    $scope.sawa=
        [
        {
          name: "Mt. ELbert",
          height: "14,433 ft",
          local: "39.1178°N 106.4454°W, Black Cloud Trail, Buena Vista, CO 81211",
          image: "images/elbert.jpg"
        },
       {
          name: "Mt. Massive",
          height: "14,421 ft",
          local: "39.1875°N 106.4757°W, Mt. Massive Trail, Leadville, CO 80461",
          image: "images/massive.jpg"
        },
        {
          name: "Mt. Harvard",
          height: "14,420 ft",
          local: "38.9244°N 106.3207°W, Colorado Trail, Buena Vista, CO 81211", 
          image: "images/harvard.jpg"
        },
        {
          name: "La Plata Peak",
          height: "14,336 ft",
            local: "39.0294°N 106.4729°W, La Plata Peak Trail, Buena Vista, CO 81211",
          image: "images/laplata.jpg"
        },
        {
          name: "Mt. Antero",
          height: "14,269 ft",
            local: "38.6741°N 106.2462°W, Co Rd 277, Nathrop, CO 81236",
          image: "images/antero.jpg"
        },
       {
          name: "Mt. Shavano",
          height: "14,269 ft",
           local: "38.6193°N 106.2394°W, Forest Rd 240, Salida, CO 81201",
          image: "images/shavano.jpg"
        },
        {
          name: "Mt. Princeton (Center)",
          height: "14,197 ft",
            local: "38.7492°N 106.2424°W, Forest Rd 322A, Nathrop, CO 81236",
          image: "images/princeton.jpg"
        },
        {
          name: "Mt. Belford",
          height: "14,197 ft",
            local: "38.9606°N 106.3608°W, Unnamed Rd, Almont, CO 81210",
          image: "images/belford.jpg"
        },
        {
          name: "Mt. Yale (Center)",
          height: "14,196 ft",
            local: "38.8442°N 106.3138°W, Colorado Trail, Buena Vista, CO 81211",
          image: "images/yale.jpg"
        },
       {
          name: "Tabeguache Peak (right) Mt. Shavano (left)",
          height: "14,155 ft",
           local: "38.6254°N 106.2509°W, Forest Rd 240, Salida, CO 81201",
          image: "images/tabeguache.jpg"
        },
        {
          name: "Mt. Oxford",
          height: "14,153 ft",
            local: "38.9648°N 106.3388°W, Colorado Trail, Buena Vista, CO 81211",
          image: "images/oxford.jpg"
        },
        {
          name: "Mt. Columbia",
          height: "14,073 ft",
            local: "38.9038°N 106.2975°W, Colorado Trail, Buena Vista, CO 81211", 
          image: "images/columbia.jpg"
        },
        {
          name: "Missouri Mountain",
          height: "14,067 ft",
            local: "38.9477°N 106.3786°W, Unnamed Rd, Almont, CO 81210",
          image: "images/missouri.jpg"
        },
       {
          name: "Mountain of the Holy Cross",
          height: "14,005 ft",
           local: "39.4668°N 106.4817°W, McCoy Park, Avon, CO 81620",
          image: "images/holycross.jpg"
        },
        {
          name: "Huron Peak (Center)",
          height: "14,003 ft",
            local: "38.9455°N 106.4380°W, Unnamed Rd, Almont, CO 81210",
          image: "images/huron.jpg"
        },
        ];
	});

mountain.controller('elkController', function ($scope)
    {
    $scope.elk=
        [
        {
          name: "Castle Peak",
          height: "14,265 ft",
          image: "images/castle.jpg"
        },
       {
          name: "Maroon Bells (Maroon Peak left, North Maroon Peak right)",
          height: "14,156 ft and 14,014 ft",
          image: "images/maroon.jpg"
        },
        {
          name: "Capitol Peak",
          height: "14,130 ft",
          image: "images/capitol.jpg",
          image2: "images/capitol2.jpg",
          image3: "images/capitol3.jpg"
        },
        {
          name: "Snowmass Mountain",
          height: "14,036 ft",
          image: "images/snowmass.jpg",
          image2: "images/snowmass2.jpg"
        },
        {
          name: "Conundrum Peak",
          height: "14,060 ft",
          image: "images/connundrum.jpg"
        },
        {
          name: "Pyramid Peak (center)",
          height: "14,018 ft",
          image: "images/pyramid.jpg"
        },
        ];
	});

mountain.controller('sanjuanController', function ($scope)
    {
    $scope.juan=
        [
        {
          name: "Uncompahgre Peak",
          height: "14,309 ft",
          image: "images/uncompahgre.jpg"
        },
       {
          name: "Mt. Wilson (left) and El Diente Peak (right)",
          height: "14,246 ft and 14,159 ft",
          image: "images/wilson.jpg"
        },
        {
          name: "Mt. Sneffels",
          height: "14,150 ft",
          image: "images/sneffels.jpg"
        },
        {
          name: "Mt. Eolus and North Eolus (right)",
          height: "14,083 ft and 14,039 ft",
          image: "images/eolus.jpg"
        },
       {
          name: "Windom Peak (left)",
          height: "14,082 ft",
          image: "images/windom.jpg"
        },
        {
          name: "Sunlight Peak (Windom Peak just to the right, out of view)",
          height: "14,059 ft",
          image: "images/sunlight.jpg"
        },
        {
          name: "Handies Peak",
          height: "14,048 ft",
          image: "images/handies.jpg"
        },
       {
          name: "Redcloud Peak (Sunshine Peak's summit barely visible to the left",
          height: "14,034 ft",
          image: "images/redcloud.jpg"
        },
        {
          name: "Wilson Peak",
          height: "14,017 ft",
          image: "images/wilsonpeak.jpg"
        },
        {
          name: "Wetterhorn Peak",
          height: "14,015 ft",
          image: "images/wetterhorn.jpg"
        },
        {
          name: "San Luis Peak",
          height: "14,014 ft",
          image: "images/luis.jpg"
        },
       {
          name: "Sunshine Peak",
          height: "14,001 ft",
          image: "images/sunshine.jpg"
        },
        ];
	});

mountain.controller('sangreController', function ($scope)
    {
    $scope.cristo=
        [
        {
          name: "Blanca Peak",
          height: "14,345 ft",
          image: "images/blanca.jpg"
        },
       {
          name: "Crestone Peak",
          height: "14,294 ft",
          image: "images/crestone.jpg",
          image2: "images/crestone2.jpg"
        },
        {
          name: "Crestone Needle",
          height: "14,197 ft",
          image: "images/needle.jpg",
          image2: "images/needle2.jpg"
        },
        {
          name: "Kit Carson Peak",
          height: "14,165 ft",
          image: "images/carson.jpg"
        },
       {
          name: "Challenger Point",
          height: "14,081 ft",
          image: "images/challenger.jpg"
        },
        {
          name: "Humboldt Peak",
          height: "14,064 ft",
          image: "images/humboldt.jpg"
        },
        {
          name: "Culebra Peak",
          height: "14,047 ft",
          image: "images/culebra.jpg"
        },
       {
          name: "Ellingwood Point",
          height: "14,042 ft",
          image: "images/ellingwood.jpg"
        },
        {
          name: "Mt. Lindsey",
          height: "14,042 ft",
          image: "images/lindsey.jpg"
        },
        {
          name: "Little Bear Peak",
          height: "14,037 ft",
          image: "images/bear.jpg"
        },
        ];
	});
    
$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
