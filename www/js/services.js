/**
 * 服务
 */
angular.module('goself.services', [])
    // Ionic
    .service('ImageService',['$http','$q','ConfigService',function($http,$q,ConfigService){
        /*var service = {
            getHeadImage:function(data){
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/headimage";
                $http({
                    method: 'GET',
                    url: url,
                    params: data
                }).success(
                    function (data, status, header, config) {
                        alert(data.data.result)
                        return data.data.result;              
                    });
            }
        }
        return service;*/


        return {
            // 获取主题
            getHeadImage: function(data){
                var deferred = $q.defer();
                var url = ConfigService.getHost() + "/api/v1/headimage";
                $http({
                    method: 'GET',
                    url: url,
                    params: data
                }).success(
                    function (data, status, header, config) {
                        deferred.resolve(data);             
                    });
                return deferred.promise;
            }
        }
    }])
    /*域名等基础配置*/
    .service('ConfigService', [function () {
        var hostURL = "http://10.10.10.79:8080/goself";
        var imageURL = "/image/view/"
        var service = {
            getHost: function () {
                return hostURL;
            },
            getImage:function(){
                return hostURL+imageURL;
            }
        }
        return service;
    }])
    /*控制tab*/
    .service('TabService',['$location','$rootScope',function ($location,$rootScope) {
        this.selectTab = function(){
            var url = $location.url();
            switch (url) {
                case '/tab/destination':
                    $rootScope.tab0='active';
                    $rootScope.tab1='';
                    $rootScope.tab2='';
                    $rootScope.tab3='';
                    break;
                case '/tab/strategy':
                    $rootScope.tab0='';
                    $rootScope.tab1='active';
                    $rootScope.tab2='';
                    $rootScope.tab3='';
                    break;
                case '/tab/chat':
                    $rootScope.tab0='';
                    $rootScope.tab1='';
                    $rootScope.tab2='active';
                    $rootScope.tab3='';
                    break;
                case '/tab/myprofile':
                    $rootScope.tab0='';
                    $rootScope.tab1='';
                    $rootScope.tab2='';
                    $rootScope.tab3='active';
                    break;
            };
        }
    }])



