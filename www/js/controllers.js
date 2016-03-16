angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $interval, $ionicPopup, Setting) {

    $scope.finalRet = 0;
    $scope.answer = {
        ret : ""
    };

    $scope.start = function(){
        console.log($scope.count);
        $scope.finalRet = 0;
        var i = 0;
        var round = $interval(function(){
            var randomAdder = Math.floor((Math.random() * Setting.config.numberRange) + 1);
            $scope.adder = randomAdder;
            if(++i > Setting.config.numberCount){
                $scope.adder = "";
                $interval.cancel(round);
            } else {
                $scope.finalRet += randomAdder;
            }
        }, Setting.config.timeout);
    };

    $scope.answer = function(){
        var message = "";
        var title = "";
        if ($scope.finalRet == 0){
            title = "ERROR";
            message = "Please start question.";
        } else {
            if ($scope.answer.ret == $scope.finalRet){
              title = "CORRECT";
              message = "You're awesome. The answer is " + $scope.finalRet;
            } else {
              title = "INCORRECT";
              message = "Please try again";
            }
        }

        $ionicPopup.alert({
            title: title,
            template: message
        });

    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SettingCtrl', function($scope, Setting) {
    $scope.config = Setting.option;

    $scope.setting = function(opt) {
        Setting.setOption(opt);
        Setting.setSetting(opt);
    }
});
