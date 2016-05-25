angular.module('ionicApp', ['ionic','goself.router','goself.controllers','goself.services','goself.filters'])

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.text("");
  $ionicConfigProvider.backButton.previousTitleText(false);



  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');


  



});

/*.controller('HomeTabCtrl', function($scope, $ionicModal) {
  console.log('HomeTabCtrl');
  $ionicModal.fromTemplateUrl('templates/mylongform.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(){
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
});*/