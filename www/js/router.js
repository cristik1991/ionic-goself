/**
 * 路由
 */
angular.module('goself.router', [])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {
        $stateProvider
            /*导航栏*/
            .state('tabs', {
              url: "/tab",
              abstract: true,
              templateUrl: "templates/tabs.html",
              controller:'MainCtrl'
            })
            /*目的地，攻略，聊天，我的菜单*/
            .state('tabs.destination', {
              url: "/destination",
              views: {
                'main-tab': {
                  templateUrl: "templates/destination.html",
                  controller: 'DestinationCtrl'
                }
              }
            })
            .state('tabs.strategy', {
              url: "/strategy",
              views: {
                'main-tab': {
                  templateUrl: "templates/strategy.html",
                  controller:'StrategyCtrl'
                }
              }
            })
            .state('tabs.chat', {
              url: "/chat",
              views: {
                'main-tab': {
                  templateUrl: "templates/chat.html",
                  controller:'ChatCtrl'
                }
              }
            })
            .state('tabs.myprofile', {
              url: "/myprofile",
              views: {
                'main-tab': {
                  templateUrl: "templates/myprofile.html",
                  controller:'MyprofileCtrl'
                }
              }
            })
            /*其他路径*/
            .state('tabs.destination.recommend',{
              url:"/recommend",
              views:{
                'destination-select-tab':{
                  templateUrl:"templates/recommend.html"
                }
              }
            })
            .state('tabs.destination.subject',{
              url:"/subject",
              views:{
                'destination-select-tab':{
                  templateUrl:"templates/subject.html"
                }
              }
            })
            ;
            $urlRouterProvider.otherwise('tab/destination/recommend');
    }])