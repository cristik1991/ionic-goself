/**
 * 过滤器
 */
angular.module('goself.filters', [])
    .filter('tabName', ['TabService', function (TabService) {
        var Tabs = TabService.getTabs();
        return function (tab) {
            for (var i in Tabs) {
                if (Tabs[i].value === tab) {
                    return Tabs[i].label;
                }
            }
        };
    }])
    .filter('avatarFilter', function () {
        return function (src) {
            // add https protocol
            if (src) {
                src = src.replace("https://avatars.githubusercontent.com", "http://7xj5bc.com1.z0.glb.clouddn.com");
                src = src + "&imageView2/2/w/120";
            }
            return src;
        };
    })

