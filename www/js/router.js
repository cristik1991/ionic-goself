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
            .state('destinationdetail',{
              url:"/destinationdetail/:destinationId",
              templateUrl:"templates/destinationdetail.html",
              controller:"DestinationDetailCtrl"
            })
            
            $urlRouterProvider.otherwise('/tab/destination');

            
    }])