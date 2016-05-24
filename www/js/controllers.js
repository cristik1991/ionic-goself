/**
 * 控制器
 */
angular.module('goself.controllers', [])
    //总控制器
    .controller('MainCtrl', ['$rootScope','$scope','$location','$stateParams', '$state', '$ionicLoading', '$ionicModal','TabService', function ($rootScope,$scope,$location, $stateParams, $state, $ionicLoading, $ionicModal,TabService) {
        $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
            TabService.selectTab();
        });
        TabService.selectTab();
        
    }])
    /*目的地控制器*/
    .controller('DestinationCtrl',['$scope', '$stateParams', '$state', '$ionicLoading', '$ionicModal','ImageService','ConfigService', function ($scope, $stateParams, $state, $ionicLoading, $ionicModal,ImageService,ConfigService) {
        $scope.visible=false;
        //加载头部轮播图
        ImageService.getHeadImage().then(function(data){
            var url = ConfigService.getImage()+data.data.result;
            $scope.imageUrl = url;
        })
        //切换tab
        $scope.selectTab=function(tab){
            if(tab==1){
                $scope.visible=true;
            }else{
                $scope.visible=false;
            }
            
        }


        
    }])
    /*攻略控制器*/
    .controller('StrategyCtrl',['$scope', '$stateParams', '$state', '$ionicLoading', '$ionicModal', function ($scope, $stateParams, $state, $ionicLoading, $ionicModal) {

    }])
    /*聊天控制器*/
    .controller('ChatCtrl',['$scope', '$stateParams', '$state', '$ionicLoading', '$ionicModal', function ($scope, $stateParams, $state, $ionicLoading, $ionicModal) {

    }])
    /*个人中心控制器*/
    .controller('MyprofileCtrl',['$scope', '$stateParams', '$state', '$ionicLoading', '$ionicModal', function ($scope, $stateParams, $state, $ionicLoading, $ionicModal) {
        /*TitleService.SetTitle("个人中心");*/
        /*$scope.$on("$ionicView.beforeEnter", function(event, data){
                $scope.title="个人中心";
            });
            $scope.$on("$ionicView.enter", function(event, data){

            });
            $scope.$on("$ionicView.afterEnter", function(event, data){

            });*/
    }])
    .controller('TabController', ['$scope','$rootScope', function($scope,$rootScope){

        
    }])

    
