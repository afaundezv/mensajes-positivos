angular.module('goodVibesBro', [])
    .controller('mainController', function($scope, $http) {
        
        $scope.newMessage = {};
    
        $scope.message =function(){
            $http.get('/api/getMessage')
            .success(function(data) {
                $scope.msj = data;
                $('body').css('background', 'url('+$scope.msj.image+') no-repeat');
                if ($scope.msj.image == null || $scope.msj.image == "" || $scope.msj.image == undefined)
                    $('body').css('background-color', 'burlywood');  
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });    
        };
        $scope.createMessage = function(){
            $http.post('/api/addMessage', $scope.newMessage)
                .success(function(data) {
                    $scope.newMessage = {};
                })
                .error(function(data) {
                    console.log('Error:' + data);
                });
        };
        $scope.message();
    });