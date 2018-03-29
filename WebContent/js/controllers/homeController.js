/*Home Page*/
app.controller('homeCtrl', ['$scope', function($scope){
	
}]);
/*Main Page*/
app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
/*Plot Review*/	
	$scope.getData =function(){

 		$scope.review = [];
		
			$http.get("data/outReview.json").then(function(data){
				$scope.outReview = data.data;
				angular.forEach($scope.outReview, function (l, o){
					$scope.review.push({x: l.Sentiment, y:l.Count});
				});
			});
			console.log($scope.review);
      return [{
          key: "Review",
          values: $scope.review
      }];
  }

  $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                clipEdge: true,
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                duration: 500,
                showControls: true,
                xAxis: {
                	axisLabel: 'Comments',
                    showMaxMin: false,
                    
                },
                yAxis: {
                    axisLabel: 'Count',
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                reduceXTicks: false
            }
        };

        
    $scope.data = $scope.getData();
/*Plot Service*/	
	$scope.getData1 =function(){

 		$scope.service = [];
		
			$http.get("data/outService.json").then(function(data){
				$scope.outService = data.data;
				angular.forEach($scope.outService, function (l, o){
					$scope.service.push({x: l.Sentiment, y:l.Count});
				});
			});
      return [{
          key: "Service",
          values: $scope.service
      }];
  }

  $scope.options1 = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                clipEdge: true,
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                duration: 500,
                showControls: true,
                xAxis: {
                	axisLabel: 'Comments',
                    showMaxMin: false,
                    
                },
                yAxis: {
                    axisLabel: 'Count',
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                reduceXTicks: false
            }
        };

        
    $scope.data1 = $scope.getData1();
/*Plot Network*/	
	$scope.getData2 =function(){

 		$scope.network = [];
		
			$http.get("data/outNetwork.json").then(function(data){
				$scope.outNetwork = data.data;
				angular.forEach($scope.outNetwork, function (l, o){
					$scope.network.push({x: l.Sentiment, y:l.Count});
				});
			});
      return [{
          key: "Network",
          values: $scope.network
      }];
  }

  $scope.options2 = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                clipEdge: true,
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                duration: 500,
                showControls: true,
                xAxis: {
                	axisLabel: 'Comments',
                    showMaxMin: false,
                    
                },
                yAxis: {
                    axisLabel: 'Count',
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                reduceXTicks: false
            }
        };

        
    $scope.data2 = $scope.getData2();
/*Plot Plan*/	
	$scope.getData3 =function(){

 		$scope.plan = [];
		
			$http.get("data/outPlan.json").then(function(data){
				$scope.outPlan = data.data;
				angular.forEach($scope.outPlan, function (l, o){
					$scope.plan.push({x: l.Sentiment, y:l.Count});
				});
			});
      return [{
          key: "Plan",
          values: $scope.plan
      }];
  }

  $scope.options3 = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                clipEdge: true,
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                duration: 500,
                showControls: true,
                xAxis: {
                	axisLabel: 'Comments',
                    showMaxMin: false,
                    
                },
                yAxis: {
                    axisLabel: 'Count',
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                reduceXTicks: false
            }
        };

        
    $scope.data3 = $scope.getData3();
/*Plot Product*/	
	$scope.getData4 =function(){

 		$scope.product = [];
		
			$http.get("data/outProduct.json").then(function(data){
				$scope.outProduct = data.data;
				angular.forEach($scope.outProduct, function (l, o){
					$scope.product.push({x: l.Sentiment, y:l.Count});
				});
			});
      return [{
          key: "Plan",
          values: $scope.product
      }];
  }

  $scope.options4 = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                clipEdge: true,
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                duration: 500,
                showControls: true,
                xAxis: {
                	axisLabel: 'Comments',
                    showMaxMin: false,
                    
                },
                yAxis: {
                    axisLabel: 'Count',
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                reduceXTicks: false
            }
        };

        
    $scope.data4 = $scope.getData4();
/*Plot Tweet*/	
	$scope.getData5 =function(){

 		$scope.tweet = [];
		
			$http.get("data/outTweet.json").then(function(data){
				$scope.outTweet = data.data;
				angular.forEach($scope.outTweet, function (l, o){
					$scope.tweet.push({x: l.tweet, y:l.number});
				});
			});
      return [{
          key: "Tweet",
          values: $scope.tweet
      }];
  }

  $scope.options5 = {
            chart: {
                type: 'discreteBarChart',
                height: 300,
                clipEdge: true,
                x: function(d){return d.x;},
                y: function(d){return d.y;},
                duration: 500,
                showControls: true,
                xAxis: {
                	axisLabel: 'Comments',
                    showMaxMin: false,
                    
                },
                yAxis: {
                    axisLabel: 'Count',
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                reduceXTicks: false
            }
        };

        
    $scope.data5 = $scope.getData5();
}]);