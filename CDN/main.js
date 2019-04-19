'use strict';

var ymb = angular.module('ymbao', ['ionic']);
ymb.config(function ($stateProvider, $ionicConfigProvider, $urlRouterProvider, $sceDelegateProvider, $sceProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider.state("tabs", {
        url: '/tab',
        cache: false,
        templateUrl: 'forter.html'
    }).state("tabs.homepage", {
        url: "/homepage",
        cache: false,
        views: {
            "homepage-tab": {
                templateUrl: "homepage/homepage.html",
                controller: 'main'
            }
        }
    }).state("tabs.shopping", {
        url: "/shopping",
        cache: false,
        views: {
            "shopping-tab": {
                templateUrl: "homepage/shopping.html",
                controller: "shoppingList"
            }
        }
    }).state("tabs.myinformation", {
        url: "/formation",
        cache: false,
        views: {
            "formation-tab": {
                templateUrl: "homepage/formation.html",
                controller: "myinformation"
            }
        }
    }).state("customer", {
        url: "/customer",
        cache: false,
        templateUrl: "homepage/customer.html"
    }).state("security", {
        url: "/security",
        cache: false,
        templateUrl: "share/security.html"
    }).state("message", {
        url: '/message',
        cache: false,
        templateUrl: "personal/message.html"
    }).state('names', {
        url: '/names',
        cache: false,
        templateUrl: 'mymessage/name.html'
    }).state('gender', {
        url: '/gender',
        cache: false,
        templateUrl: 'mymessage/gender.html'
    }).state("wallet", {
        url: '/wallet',
        cache: false,
        templateUrl: "personal/wallet.html",
        controller: 'wallets'
    }).state("order", {
        url: '/order',
        cache: false,
        templateUrl: "personal/order.html",
        controller: 'order'
    }).state("delivery", {
        url: '/delivery/:id',
        cache: false,
        templateUrl: "cmoder/delivery.html",
        controller: "delivery"
    }).state("ceipt", {
        url: '/ceipt/:id',
        cache: false,
        templateUrl: "cmoder/goodceipt.html",
        controller: "ceipts"
    }).state("completed", {
        url: '/completed/:id',
        cache: false,
        templateUrl: "cmoder/completed.html"
    }).state("payments", {
        url: '/payments/pay',
        cache: false,
        templateUrl: "cmoder/payment.html",
        controller: "payments"
    }).state('logistics', {
        url: '/logcs/:id',
        cache: false,
        templateUrl: 'cmoder/logistics.html',
        controller: "logistics"
    }).state('myranch', {
        url: '/ranch',
        cache: false,
        templateUrl: 'myranch/myranch.html'
    }).state('myentity', {
        url: '/myentity',
        cache: false,
        templateUrl: 'myranch/myentity.html'
    }).state('myentityadoption', {
        url: '/myentityadoption/:codes',
        cache: false,
        templateUrl: 'myranch/myentityadoption.html',
        controller: 'myentityadoption'
    }).state('mymoney', {
        url: '/mymoney',
        cache: false,
        templateUrl: 'myranch/mymoney.html'
    }).state('mymoneyadoption', {
        url: '/mymoneyadoption/:codes',
        cache: false,
        templateUrl: 'myranch/mymoneyadoption.html',
        controller: 'mymoneyadoption'
    }).state('adoption', {
        url: '/adoption/:codes',
        cache: false,
        templateUrl: 'myranch/adoption.html'
    }).state('bringin', {
        url: '/bringin/:codes',
        templateUrl: 'myranch/bringin.html',
        controller: 'bringin'
    }).state('contract', {
        url: '/contract',
        cache: false,
        templateUrl: 'contract/contract.html',
        controller: 'contrant'
    }).state('coupon', {
        url: '/coupon',
        cache: false,
        templateUrl: 'coupon/coupon.html',
        controller: 'coupon'
    }).state('usecoupon', {
        url: '/usecoupon',
        cache: false,
        templateUrl: 'coupon/usecoupon.html',
        controller: 'usecoupon'
    }).state('accman', {
        url: '/accman',
        cache: false,
        templateUrl: 'man/accman.html'
    }).state('phone', {
        url: '/phone',
        cache: false,
        templateUrl: 'man/phone.html'
    }).state('reset', {
        url: '/reset',
        cache: false,
        templateUrl: 'man/resetpwd.html'
    }).state('resettrade', {
        url: '/resettrade',
        cache: false,
        templateUrl: 'man/resettrade.html'
    }).state('settradepwd', {
        url: '/settradepwd',
        cache: false,
        templateUrl: 'man/settradepwd.html'
    }).state('sign', {
        url: '/sign',
        cache: false,
        templateUrl: 'login/sign.html'
    }).state('loginbycode', {
        url: '/loginbycode',
        cache: false,
        templateUrl: 'login/loginbycode.html'
    }).state('register', {
        url: '/reg',
        cache: false,
        templateUrl: 'login/register.html'
    }).state('registerxy', {
        url: '/registerxy',
        cache: false,
        templateUrl: 'login/registerxy.html'
    }).state('forget', {
        url: '/getpwd',
        cache: false,
        templateUrl: 'login/forgetpwd.html'
    }).state('real', {
        url: '/real',
        cache: false,
        templateUrl: 'login/real.html'
    }).state('detailshare', {
        url: '/detailshare/:minOid',
        cache: false,
        templateUrl: 'share/detailshare.html'
    }).state("profit", {
        url: '/profit/:imgid',
        cache: false,
        templateUrl: "share/profit.html"
    }).state('immed', {
        url: '/immed/',
        cache: false,
        templateUrl: 'share/immediately.html',
        controller: "immed"
    }).state('record', {
        url: '/record',
        cache: false,
        templateUrl: 'record/record.html'
    }).state('activity', {
        url: '/activity',
        cache: false,
        templateUrl: 'activity/activity.html',
        controller: 'activity'
    }).state('receipt', {
        url: '/receipt',
        cache: false,
        templateUrl: 'receipt/receipt.html'
    }).state('build', {
        url: '/build',
        cache: false,
        templateUrl: 'receipt/build.html',
        controller: 'build'
    }).state('modb', {
        url: '/modb/:id',
        cache: false,
        templateUrl: 'receipt/modifybd.html',
        controller: "modb"
    }).state('detailed', {
        url: '/deta',
        cache: false,
        templateUrl: 'detailed/detailed.html',
        controller: 'detailedmp'
    }).state('pasture', {
        url: '/pasture/:oid',
        cache: false,
        templateUrl: 'detailed/pasture.html',
        controller: "pasture"
    }).state('seal', {
        url: '/sealmin/:img',
        templateUrl: 'detailed/seal.html'
    }).state('okorder', {
        url: '/okorder/pay',
        templateUrl: 'detailed/okorder.html',
        controller: "okorder",
        cache: false
    }).state('save', {
        url: '/save/:id/:num',
        cache: false,
        templateUrl: 'detailed/save.html'
    }).state("tioncontract", {
        url: '/tioncontract/:code',
        cache: false,
        templateUrl: 'share/tioncontract.html'
    }).state("incomeback", {
        url: '/incomeback/:minOid/:num',
        cache: false,
        templateUrl: 'share/incomeback.html'
    }).state("withdrawals", {
        url: '/withdrawals',
        cache: false,
        templateUrl: 'record/withdrawals.html'
    }).state("BankPay", {
        url: '/BankPay/',
        cache: false,
        templateUrl: 'record/BankPay.html'
    }).state("guidance", {
        url: '/guidance',
        cache: false,
        templateUrl: 'homepage/guidance.html'
    }).state("ranch_code", {
        url: '/ranch_code/:minOid',
        cache: false,
        templateUrl: 'share/ranch.html'
    }).state("physicaldetails", {
        url: '/physicaldetails',
        cache: false,
        templateUrl: 'share/physicaldetails.html'
    }).state("introduce", {
        url: '/introduce',
        cache: false,
        templateUrl: 'homepage/introduce.html'
    }).state("Splay", {
        url: "/Splay",
        cache: false,
        templateUrl: 'share/sina.html',
        controller: 'sina'
    }).state("bank", {
        url: '/bank',
        templateUrl: 'homepage/bank.html',
        controller: 'bank'
    }).state("news", {
        url: '/news',
        cache: false,
        templateUrl: 'homepage/news.html',
        controller: "news"
    }).state("quota", {
        url: '/quota',
        cache: false,
        templateUrl: 'homepage/quota.html'
    }).state("edit", {
        url: '/edit',
        cache: false,
        templateUrl: 'shop/edit.html'
    }).state("shop", {
        url: '/shop',
        cache: false,
        templateUrl: 'shop/shop.html'
    }).state("bonus", {
        url: '/bonus',
        cache: false,
        templateUrl: 'shop/bonus.html'
    }).state("apply", {
        url: '/apply',
        cache: false,
        templateUrl: 'shop/apply.html'
    }).state("extension", {
        url: '/extension',
        cache: false,
        templateUrl: 'shop/extension.html'
    }).state("members", {
        url: '/members',
        cache: false,
        templateUrl: 'shop/members.html'
    }).state("recordwp", {
        url: '/recordwp',
        cache: false,
        templateUrl: 'shop/recordwp.html'
    }).state("recordout", {
        url: '/recordout',
        cache: false,
        templateUrl: 'shop/recordout.html'
    }).state("recordIf", {
        url: '/recordIf',
        cache: false,
        templateUrl: 'shop/recordIf.html'
    }).state("twodimensioncode", {
        url: '/twodimensioncode',
        cache: false,
        templateUrl: 'shop/twodimensioncode.html'
    }).state("withdrawalswp", {
        url: '/withdrawalswp',
        cache: false,
        templateUrl: 'shop/withdrawals.html'
    }).state("listranch", {
        url: '/listranch',
        cache: false,
        templateUrl: 'myranch/listranch.html',
        controller: 'listranch'
    }).state("guarantee", {
        url: '/guarantee',
        cache: false,
        templateUrl: 'homepage/guarantee.html'
    }).state("problem", {
        url: '/problem',
        cache: false,
        templateUrl: 'homepage/problem.html'
    }).state("introduceup", {
        url: '/introduceup',
        cache: false,
        templateUrl: 'homepage/introduceup.html',
        controller: 'introduceup'
    }).state("experience", {
        url: '/experience',
        cache: false,
        templateUrl: 'homepage/experience.html',
        controller: 'experience'
    }).state("goonline", {
        url: '/goonline',
        cache: false,
        templateUrl: 'homepage/goonline.html'
    }).state("ward", {
        url: '/ward/:code',
        cache: false,
        templateUrl: 'shop/ward.html'
    }).state('journalism', {
        url: '/journalism',
        cache: false,
        templateUrl: 'iframe/Journalism.html',
        controller: 'journalism'
    }).state('sinaifram', {
        url: '/sinaifram',
        cache: false,
        templateUrl: 'iframe/sinaifram.html',
        controller: 'sinaifram'
    }).state('sinapwd', {
        url: '/sinapwd',
        cache: false,
        templateUrl: 'iframe/pwdiframe.html',
        controller: 'pwdiframe'
    }).state('binBank', {
        url: '/binBank',
        cache: false,
        templateUrl: 'iframe/bindingbank.html'
    }).state('removeBank', {
        url: '/removeBank',
        cache: false,
        templateUrl: 'iframe/removeBank.html'
    }).state('playiframe', {
        url: '/playiframe',
        cache: false,
        templateUrl: 'iframe/playiframe.html',
        controller: 'playiframe'
    }).state('immedplay', {
        url: '/immedplay',
        cache: false,
        templateUrl: 'iframe/immedplay.html',
        controller: 'immedplay'
    }).state('agent', {
        url: '/agent',
        cache: false,
        templateUrl: 'iframe/agent.html',
        controller: 'agent'
    }).state('gifts', {
        url: '/gifts',
        cache: false,
        templateUrl: 'login/gifts.html',
        controller: 'gifts'
    }).state('rolloutmywallet', {
        url: '/rolloutmywallet',
        cache: false,
        templateUrl: 'shop/rolloutmywallet.html',
        controller: 'rolloutmywallet'
    });
    $urlRouterProvider.otherwise('/tab/homepage')
});
ymb.run(function ($http) {
    $http.defaults.headers.post = {
        'Content-Type': 'application/json'
    }
});

//var url = 'http://cs.umubao.com';
 var url = 'http://wx.umubao.com';
// var url = 'http://192.168.2.198:8181';

var addCookie=(name,value,expireHours)=>{
    var cookieString = name + "=" + escape(value);
    if (expireHours > 0) {
        let date = new Date();
        date.setTime(date.getTime() + expireHours * 3600 * 1000);
        cookieString = cookieString + "; expires=" + date.toGMTString()
    }
    document.cookie = cookieString
};


ymb.factory('$',
    function () {
        var wind_find = {};
        wind_find.$ = function (id) {
            return document.getElementById(id)
        };
        return wind_find
    });
ymb.factory('myFactory',
    function () {
        var service = {};
        service.getData = function () {
            var a = function a() {
                console.log('你好程序员!\n欢迎你观看本页面\n如果你觉得本页面有做的不够漂亮或者不好的地方\n请加微信 duan88888899\n我们等待你的点评')
            };
            return a()
        };
        return service
    });
ymb.run(function ($rootScope) {
    $rootScope.title_up_puck = ""
});
ymb.factory('WeChat',
    function ($) {
        var weChat_lost = {};
        weChat_lost.WxData = function () {
            var is_weixin = function is_weixin() {
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                    $.$('content').style.top = "0";
                    return true
                } else {
                    return false
                }
            };
            return is_weixin()
        };
        return weChat_lost
    });
ymb.factory('WecHat',
    function () {
        var WecHatTitle = {};
        WecHatTitle.inData = function (title) {
            var setWechatTitle = function setWechatTitle() {
                document.title = title
            };
            return setWechatTitle()
        };
        return WecHatTitle
    });
ymb.factory('loginM',
    function ($state, $http, $ionicViewSwitcher) {
        var min_log = {};
        min_log.inLog = function ($1, $2) {
            var login = function login() {
                $http.post(url + '/user/iflogin', {}).success(function (data) {
                    if (data.code === '08') {
                        $state.go($2);
                        return true
                    }
                    if (data.code !== '08') {
                        $state.go($1);
                        $ionicViewSwitcher.nextDirection("forward");
                        return true
                    }
                })
            };
            return login()
        };
        return min_log
    });
ymb.factory('$class',
    function ($) {
        var class_find = {};
        class_find.$$ = function (a, $$class, gun_biu) {
            var x = document.getElementsByClassName($$class);
            for (var i in x) {
                if (typeof a !== 'number') {
                    console.log("程序出错")
                }
                if (typeof a === 'number' && a === 1) {
                    return x[i]
                }
                if (typeof a === 'number' && a === 2) {
                    return x[i].classList.add(gun_biu)
                }
                if (typeof a === 'number' && a === 3) {
                    return x[i].classList.remove(gun_biu)
                }
                if (typeof a === 'number' && a === 4) {
                    return x[i].innerText = gun_biu
                }
            }
        };
        return class_find
    });
ymb.factory('$class_mp',
    function () {
        var class_repeat = {};
        class_repeat.$$$ = function (obj, sName) {
            var aTmp = obj.getElementsByTagName('*');
            var aRes = [];
            var arr = [];
            for (var i = 0; i < aTmp.length; i++) {
                arr = aTmp[i].className.split(' ');
                for (var j = 0; j < arr.length; j++) {
                    if (arr[j] == sName) {
                        aRes.push(aTmp[i])
                    }
                }
            }
            return aRes
        };
        return class_repeat
    });
ymb.factory('$PlPup',
    function ($ionicPopup) {
        var up_MoDel = {};
        up_MoDel.$model = function (news) {
            $ionicPopup.alert({
                title: '提示',
                template: news,
                okText: '确定'
            })
        };
        return up_MoDel
    });
ymb.factory('$confirm',
    function ($ionicPopup, $http, $PlPup) {
        var up_confir = {};
        up_confir.$confIMS = function ($scope, news, not, orCalEs, urlsMin, cancel, ok_push, code_a) {
            $scope.token = "";
            $http.get(url + "/user/getToken").success(function (data) {
                $scope.token = data.data
            });
            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: news,
                cancelText: cancel,
                okText: ok_push
            });
            confirmPopup.then(function (res) {
                if (res) {
                    if (not === 1) {
                        $http.post(url + urlsMin, {
                            order_sn: orCalEs,
                            token: $scope.token
                        }).success(function (data) {
                            if (data.code === '00') {
                                if (code_a == 1) {
                                    location.reload();
                                    return
                                }
                                if (code_a == 2) {
                                    history.back(- 1);
                                    return
                                }
                                return
                            }
                            if (data.code !== '00') {
                                $scope.token = "";
                                $http.get(url + "/user/getToken").success(function (data) {
                                    $scope.token = data.data
                                });
                                $PlPup.$model(data.data)
                            }
                        });
                        return
                    }
                    if (not === 2) {
                        return
                    }
                } else { }
            })
        };
        return up_confir
    });
ymb.factory('$go',
    function ($state, $ionicViewSwitcher) {
        var go_up = {};
        go_up.$goUp = function (goState) {
            $ionicViewSwitcher.nextDirection('back');
            $state.go(goState)
        };
        return go_up
    });
ymb.factory('$okgo',
    function ($state, $ionicViewSwitcher) {
        var ok_go = {};
        ok_go.$$go = function (goGo) {
            $state.go(goGo);
            $ionicViewSwitcher.nextDirection("forward")
        };
        return ok_go
    });
ymb.factory('$myfor',
    function () {
        var my_for = {};
        my_for.$my_fortion = function ($http, $scope) {
            $http.post(url + '/user/getuserdetails', {}).success(function (data) {
                $scope.nickname = data.wuser.nickname;
                $scope.phone = data.wuser.phone;
                $scope.username = data.wuser.username;
                $scope.sex = data.wuser.sex;
                $scope.age = data.wuser.age;
                $scope.idcard = data.wuser.idcard;
                if(typeof $scope.idcard=="undefined"||$scope.idcard==null||$scope.idcard==""||$scope.idcard=="null"){
                    $scope.idImg=false;
                }else{
                    $scope.idImg=true;
                }
                $scope.imgurl = data.wuser.photo
            })
        };
        return my_for
    });
ymb.factory('$eye',
    function () {
        var $eyes = {};
        $eyes.$my_eye = function ($scope) {
            $scope.Eye = 1;
            $scope.EyeImg = 'img/login_p.png';
            $scope.bright = 'password';
            $scope.EyeI = 1;
            $scope.EyeImgI = 'img/login_p.png';
            $scope.brightI = 'password';
            $scope.EyeO = 1;
            $scope.EyeImgO = 'img/login_p.png';
            $scope.brightO = 'password';
            $scope.SeeMp = function () {
                if ($scope.Eye === 1) {
                    $scope.Eye = 2;
                    $scope.EyeImg = 'img/login_p1.png';
                    $scope.bright = 'text';
                    return
                }
                if ($scope.Eye === 2) {
                    $scope.EyeImg = 'img/login_p.png';
                    $scope.Eye = 1;
                    $scope.bright = 'password';
                    return
                }
            };
            $scope.SeeMpI = function () {
                if ($scope.EyeI === 1) {
                    $scope.EyeI = 2;
                    $scope.EyeImgI = 'img/login_p1.png';
                    $scope.brightI = 'text';
                    return
                }
                if ($scope.EyeI === 2) {
                    $scope.EyeImgI = 'img/login_p.png';
                    $scope.EyeI = 1;
                    $scope.brightI = 'password';
                    return
                }
            };
            $scope.SeeMpO = function () {
                if ($scope.EyeO === 1) {
                    $scope.EyeO = 2;
                    $scope.EyeImgO = 'img/login_p1.png';
                    $scope.brightO = 'text';
                    return
                }
                if ($scope.EyeO === 2) {
                    $scope.EyeImgO = 'img/login_p.png';
                    $scope.EyeO = 1;
                    $scope.brightO = 'password';
                    return
                }
            }
        };
        return $eyes
    });
ymb.factory('$$target',
    function () {
        var target_m = {};
        target_m.$$staget = function ($event, attr) {
            return $event.target.getAttribute(attr)
        };
        return target_m
    });
ymb.factory("$$display",
    function () {
        var display = {};
        display.$display = function ($scope, $http) {
            $http.get(url + '/user/mymessagenum').success(function (data) {
                if (data.code == "68") {
                    $scope.display = 2;
                    return
                }
                $scope.display = 1;
                $scope.display_data = data.data;
            })
        };
        return display
    });

ymb.controller('parentCtrl', ['$scope', '$state', '$ionicViewSwitcher', 'myFactory', 'loginM', '$ionicHistory',
    function ($scope, $state, $ionicViewSwitcher, myFactory, loginM, $ionicHistory) {
        myFactory.getData();
        $scope.jump = function (desState, arg) {
            $state.go(desState, arg);
            $ionicViewSwitcher.nextDirection("forward")
        };
        $scope.returnUpper = function (e) {
            $ionicViewSwitcher.nextDirection('back');
            $state.go(e)
        };
        $scope.journalism_return = function () {
            $ionicViewSwitcher.nextDirection('back');
            $ionicHistory.goBack()
        };
        $scope._up_return = function () {
            $ionicViewSwitcher.nextDirection('back');
            window.history.go(- 1)
        };
        $scope._no_jump = function (arg) {
            $state.go(arg)
        };
        $scope.login = function (address) {
            loginM.inLog('sign', address)
        };
        $scope.goback = function () {
            $ionicHistory.goBack();
            $ionicViewSwitcher.nextDirection("back")
        };
        $scope.imgUrl = url
    }]);
ymb.controller('main', ['$scope', '$http', '$state', '$ionicLoading', 'WecHat', 'WeChat', '$$target', '$PlPup', '$ionicPopup', '$class', '$ionicSlideBoxDelegate', '$ionicViewSwitcher', '$$display','$ionicModal','$location',
    function ($scope, $http, $state, $ionicLoading, WecHat, WeChat, $$target, $PlPup, $ionicPopup, $class, $ionicSlideBoxDelegate, $ionicViewSwitcher, $$display,$ionicModal,$location) {
        WeChat.WxData();
        clearInterval(window.timers);
        var c = window.location.href;
        if (c.split("#")[1].split("?")[0] == "/tab/homepage") {
            var urlto = c.split("homepage")[1];
            if (urlto == "") {
                var d = null
            } else {
                var d = urlto.split("?")[1];
                var w = d.split("=")[1];
                window.sessionStorage.setItem("super_key_up", w)
            }
        }

        var tracking=c.split("?")[1];
        if(typeof tracking!="undefined"){
            var trackingTo=tracking.split("=")[0];
            var trackContent=tracking.split("#")[0];
            var toContent=trackContent.split("=")[1];
            if(trackingTo=="source"){
                addCookie("source",toContent,7);
            }
        }

        var inviteurl =$location.url();
        var invitereg = /user_key=([0-9]{6})/;
        var inviteflag = invitereg.test(inviteurl);
        if (inviteflag==true) {
            var invitecode =  invitereg.exec(inviteurl)[1];
            window.sessionStorage.setItem("invitecode",invitecode);
        }

        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.display = 2;
        $$display.$display($scope, $http);
        //文字滚动轮播
        var timers=null;
        function AutoScroll() {
            $("#announcement").find("ul:first").animate({
                    marginTop: "-41.38px"
                },
                500,
                function() {
                    $(this).css({
                        marginTop: "0px"
                    }).find("li:first").appendTo(this);
                });
        };
        //图片滚动轮播
        $http.get(url + '/index/showMain').success(function (data) {
            $scope.banners = data.data.indexPic;
            var html = '';
            for (var i = 0; i < $scope.banners.length; i++) {
                html += '\n        \t\t<li class="hiSlider-item"><img src="' + $scope.banners[i].filepath + '" ng-click="live($event)" data-href="' + $scope.banners[i].url + '"/></li>\n        \t'
            }
            $(".hiSlider3").html(html);
            $('.hiSlider3').hiSlider({
                isFlexible: true,
                isSupportTouch: true,
                intervalTime: 3000
            });
            $scope.investProducts = data.data.investProducts;
            window.timers=window.setInterval(AutoScroll, 1500);
            $ionicLoading.hide();
            if (data.data.title != null) {
                $scope.title_one = data.data.title;
                WecHat.inData(data.data.title);
            } else {
                $scope.title_one = "友牧农场";
                WecHat.inData("友牧农场");
            }
        });
        $scope.$on('$ionicView.beforeEnter',
            function () {
                WecHat.inData('首页');
                /**$http.get(url + '/index/showMain').success(function (data) {
                    if (data.data.title != null) {
                        $scope.title_one = data.data.title;
                        WecHat.inData(data.data.title);
                    } else {
                        $scope.title_one = "友牧农场";
                        WecHat.inData("友牧农场");
                    }
                });
                 */
                $scope.display = 2;
                $$display.$display($scope, $http);
                $scope.mycode = 2;
            });
        //
        $(".hiSlider3").on('click','img',function(){
            var bannerUrl=$(this).attr("data-href");
            if(bannerUrl==null||bannerUrl=="null"){
                return;
            }
            window.location.href =bannerUrl;
        });

        var c = window.location.href;
        if (c.split("#")[1].split("?")[0] == "/tab/homepage") {
            var urlto = c.split("homepage")[1];
            if (urlto == "") {
                var d = null
            } else {
                var d = urlto.split("?")[1];
                var w = d.split("=")[1];
                window.sessionStorage.setItem("super_key_up", w)
            }
        }
        $scope.refresh = function () {
            $http.get(url + '/index/showMain').success(function (data) {
                $scope.investProducts = data.data.investProducts;
                $scope.banners = data.data.indexPic;
                var html = '';
                for (var i = 0; i < $scope.banners.length; i++) {
                    html += '\n        \t\t<li class="hiSlider-item"><img src="' + $scope.banners[i].filepath + '" ng-click="live($event)" data-href="' + $scope.banners[i].url + '"/></li>\n        \t'
                }
                $(".hiSlider3").html(html);
                $('.hiSlider3').hiSlider({
                    isFlexible: true,
                    isSupportTouch: true,
                    intervalTime: 3000
                });
            });
            $$display.$display($scope, $http);
            $scope.$broadcast("scroll.refreshComplete")
        };
        // $http.get(url + "/index/getMessage").success(function (data) {
        //     if (data.code == "00") {
        //         var alertPopupc_wp = $ionicPopup.alert({
        //             title: '提示',
        //             template: '亲爱的友牧农场用户' + "</br>" + data.data.content,
        //             okText: "知道了"
        //         });
        //         alertPopupc_wp.then(function (res) {
        //             $http.post(url + "/index/setRead", {
        //                 id: data.data.id
        //             }).success(function (data) { })
        //         });
        //         return
        //     }
        // });
        $scope.detaShare = function ($event) {
            $state.go("detailshare", {
                minOid: $$target.$$staget($event, 'data-inter')
            });
            $ionicViewSwitcher.nextDirection("forward")
        };

        $scope.myranchS=function(){
            $http.post(url + '/user/iflogin', {}).success(function (data) {
                if (data.code === '08') {
                    $state.go("myranch");
                    $ionicViewSwitcher.nextDirection("forward");
                    return true
                }
                if (data.code !== '08') {
                    $state.go("sign");
                    $ionicViewSwitcher.nextDirection("forward");
                    return true
                }
            })
        };

        $scope.playdian = function () {
            $http.post(url + '/user/iflogin', {}).success(function (data) {
                if (data.code === '08') {
                    // $ionicPopup.alert({
                    //     title: '提示',
                    //     template: '小主，产品正在升级中，升级完成会通知你的哦！',
                    //     okText: "知道啦"
                    // });
                    $state.go("shop");
                    $ionicViewSwitcher.nextDirection("forward");
                    if ($scope.mycode == 2) {
                        $state.go("shop");
                        $ionicViewSwitcher.nextDirection("forward");
                        return
                    }
                    if ($scope.mycode == 1) {
                        $state.go("shop");
                        $ionicViewSwitcher.nextDirection("forward");
                        return
                    }
                    return true
                }
                if (data.code !== '08') {
                    $state.go("sign");
                    $ionicViewSwitcher.nextDirection("forward");
                    return true
                }
            })
        }


        $http.post(url + '/user/iflogin', {}).success(function(data) {
            if (data.code == '08') {
                //检查优惠券是否领取
                $http.post(url + '/user/checkNewWard', {}).success(function (data) {
                    if(data.data == 'Y'){
                        return;
                    }else{
                        $scope.openModal();

                    }
                });
            }
        })
        $scope.immed_get = function(){
            $scope.closeModal();
            $http.post(url + '/user/getNewWard', {}).success(function (data) {
                if(data.code == '00'){
                    $state.go("coupon");
                }
            });
        }



        $scope.close = function(){
            $scope.closeModal();
        }

        $scope.openModal = function() {
            //如果modal没有在显示
            //打开模态框
            $ionicModal.fromTemplateUrl('./login/gifts.html', {
                scope: $scope,//modal的作用域
                animation: 'slide-in-up',//modal, 进入的动画
                focusFirstInput:true,//是否自动对焦显示模态的第一个输入。只会在iOS上显示键盘，强制键盘在Android上显示，请使用Ionic键盘插件.插件地址在代码片段下面。默认值：false
                backdropClickToClose:false,//是否关闭点击背景幕的模式。默认值：true。
                hardwareBackButtonClose:false//使用Android和类似设备上的硬件返回按钮可以关闭模​​态。默认值：true。
            }).then(function(modal) {
                $scope.modal =  modal;//把引入的modal赋值给当前作用域下的变量
                $scope.modal.show();
            });
        };

        $scope.closeModal = function() {
            $scope.modal.remove();
        };

    }]);
ymb.controller('mains', ['WecHat', 'WeChat',
    function (WecHat, WeChat) {
        WeChat.WxData();
        WecHat.inData('客服');
        var cws = "http://p.qiao.baidu.com/cps/chat?siteId=11354412&userId=24695480";
        var ifram = document.getElementById('ifram');
        var iframe_box = document.getElementById('iframe_box');
        ifram.style.height = '100%';
        iframe_box.style.height = '100%';
        if (navigator.userAgent.match(/iPad|iPhone/i)) {
            var _iframe_box = document.getElementById('iframe_box');
            _iframe_box.style.width = 100 + '%';
            _iframe_box.style.overflowX = 'hidden';
            _iframe_box.style.overflowY = 'scroll';
            _iframe_box.style.webkitOverflowScrolling = 'touch !important';
            _iframe_box.style.OverflowScrolling = 'touch !important';
            ifram.setAttribute('scrolling', 'yes')
        }
        ifram.setAttribute('src', cws)
    }]);
ymb.controller('guidance', ['$scope', 'WeChat', 'WecHat', '$ionicViewSwitcher',
    function ($scope, WeChat, WecHat, $ionicViewSwitcher) {
        WeChat.WxData();
        WecHat.inData('新手指导');
        $scope.go_home = function () {
            $ionicViewSwitcher.nextDirection('back');
            window.history.go(- 1)
        }
    }]);
ymb.controller('shoppingList', ['$scope', 'WecHat', '$http', 'WeChat', '$PlPup', '$state', '$ionicPopup',
    function ($scope, WecHat, $http, WeChat, $PlPup, $state, $ionicPopup) {
        WeChat.WxData();
        WecHat.inData('购物车');
        $scope.inCp = "";
        $scope.data_not = {};
        var moeny = 0;
        $http.post(url + "/getCartDetails").success(function (data) {
            $scope.data_not = data.rows
        });
        $scope.m = 1;
        $scope.Select = function () {
            if ($scope.shop_ok == 1) {
                for (var i = 0; i < $scope.data_not.length; i++) {
                    if ($scope.m === 1) {
                        $scope.data_not[i].choose = true;
                        moeny += $scope.data_not[i].price * $scope.data_not[i].cartNum
                    } else if ($scope.m === 2) {
                        $scope.data_not[i].choose = false;
                        moeny = 0
                    }
                }
                $scope.moeny = moeny;
                if ($scope.m === 1) {
                    $scope.m = 2;
                    return
                }
                if ($scope.m === 2) {
                    $scope.m = 1;
                    return
                }
                return
            }
            if ($scope.shop_ok != 1) {
                for (var i = 0; i < $scope.data_not.length; i++) {
                    if ($scope.m === 1) {
                        $scope.data_not[i].choose = true
                    } else if ($scope.m === 2) {
                        $scope.data_not[i].choose = false
                    }
                }
                $scope.moeny = moeny;
                if ($scope.m === 1) {
                    $scope.m = 2;
                    return
                }
                if ($scope.m === 2) {
                    $scope.m = 1;
                    return
                }
            }
        };
        var moeny = 0;
        $scope.moeny = 0;
        $scope.inter = function (w) {
            if ($scope.shop_ok == 1) {
                if ($scope.data_not[w].choose == true) {
                    moeny += $scope.data_not[w].price * $scope.data_not[w].cartNum
                } else {
                    moeny -= $scope.data_not[w].price * $scope.data_not[w].cartNum
                }
                $scope.moeny = moeny;
                $scope.m = 2;
                return
            }
        };
        $scope.id_bg = "";
        $scope.ok_moeny = function () {
            if ($scope.data_not.length == 0) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '抱歉，您还没有选择任何商品',
                    okText: "重新挑选"
                });
                return
            }
            for (var i = 0; i < $scope.data_not.length; i++) {
                if ($scope.data_not[i].choose == true) {
                    $scope.id_bg += $scope.data_not[i].shopcartid + ",";
                    moeny += $scope.data_not[i].price * $scope.data_not[i].cartNum
                }
                $scope.moeny = moeny
            }
            var k = $scope.id_bg.slice(0, $scope.id_bg.length - 1);
            if (k == "") {
                $ionicPopup.alert({
                    title: '提示',
                    template: '抱歉，您还没有选择任何商品',
                    okText: "重新挑选"
                });
                return
            }
            window.sessionStorage.setItem("spgo", k);
            $state.go("okorder")
        };
        $scope.no_moeny = function () {
            if ($scope.data_not.length == 0) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '抱歉，您没有可删除的商品',
                    okText: "确定"
                });
                return
            }
            for (var i = 0; i < $scope.data_not.length; i++) {
                if ($scope.data_not[i].choose == true) {
                    moeny += $scope.data_not[i].price * $scope.data_not[i].cartNum;
                    $scope.id_bg += $scope.data_not[i].id + ","
                }
            }
            var v = $scope.id_bg.slice(0, $scope.id_bg.length - 1);
            if (v == "") {
                $ionicPopup.alert({
                    title: '提示',
                    template: '抱歉，您没有可删除的商品',
                    okText: "确定"
                });
                return
            }
            $http.post(url + "/del2Cart", {
                product_ids: v
            }).success(function (data) {
                $http.post(url + "/getCartDetails").success(function (data) {
                    $scope.data_not = data.rows
                })
            })
        };
        $scope.clic = function (b, c) {
            if (c == 1) {
                if ($scope.data_not[b].cartNum == 1) {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '我也是有底线的，不能再减啦',
                        okText: "知道了"
                    });
                    return
                }
                $scope.data_not[b].cartNum--;
                if ($scope.data_not[b].choose == true) {
                    moeny -= $scope.data_not[b].price
                }
            } else {
                $scope.data_not[b].cartNum++;
                if ($scope.data_not[b].choose == true) {
                    moeny += $scope.data_not[b].price
                }
            }
            $scope.moeny = moeny;
            $http.post(url + "/add2Cart", {
                productid: $scope.data_not[b].id,
                amount: $scope.data_not[b].cartNum
            }).success(function (data) {
                if (data.code == "00") {
                    return
                }
                if (data.code != "00") {
                    $PlPup.$model(data.data);
                    return
                }
            })
        };
        $scope.shop_ok = 1;
        $scope.shop_switch = function (a) {
            if (a == 1) {
                $scope.shop_ok = 1;
                for (var i = 0; i < $scope.data_not.length; i++) {
                    if ($scope.data_not[i] == true) {
                        moeny += $scope.data_not[i].price * $scope.data_not[i].cartNum;
                        return
                    }
                }
                return
            }
            if (a == 2) {
                $scope.shop_ok = 2;
                $scope.moeny = 0;
                return
            }
        };
        window.sessionStorage.removeItem("code");
        window.sessionStorage.removeItem("codein");
        window.sessionStorage.removeItem("spgo");
        window.sessionStorage.removeItem("number_up");
        window.sessionStorage.removeItem("oid_up");
        window.sessionStorage.removeItem("name_up");
        window.sessionStorage.removeItem("price_up");
        window.sessionStorage.removeItem("photo_url_up");
        window.sessionStorage.removeItem("play_sessin");
        window.sessionStorage.removeItem("order_type")
    }]);
ymb.factory('$$moeny',
    function () {
        var moEny_up = {};
        moEny_up.$$moEny = function ($scope, $http, $ionicLoading) {
            $scope.balance = 0.00;
            $scope.total_money = 0.00;
            $http.post(url + '/user/selecttotalmoney', {}).success(function (data) {

                if ($scope.loding_in == 1) {
                    $ionicLoading.hide()
                }
                $scope.balance = data.balance;
                $scope.account_money=data.account_money;
                $scope.total_money = data.total_money;
                $scope.phone = data.phone;
                $scope.sina_money=data.sina_money;
            })
        };
        return moEny_up
    });
ymb.controller('wallets', ['$scope', 'WecHat', 'WeChat', '$http', '$$moeny', '$ionicLoading','$ionicViewSwitcher','$state',
    function ($scope, WecHat, WeChat, $http, $$moeny, $ionicLoading,$ionicViewSwitcher,$state) {
        WeChat.WxData();
        WecHat.inData('我的钱包');
        $scope.loding_in = 0;
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $$moeny.$$moEny($scope, $http, $ionicLoading);
        $scope.$on('$ionicView.beforeEnter',
            function () {
                $scope.loding_in++;
                $$moeny.$$moEny($scope, $http, $ionicLoading);
            });
        $scope.jumpBankPay=function(a){
            var href=window.location.href.split("#")[0];
            var t=href.split("?")[0];
            location.href=t+a;
        }
        $scope.withdrawals = function(){
            //判读是否添加银行卡
            $http.post(url + "/user/selecttotalmoney", {}).success(function (data) {
                if (data.is_set_paypwd == "N") {
                    $state.go("settradepwd");
                    return;
                }else if(data.is_bankcard == "N"){
                    $state.go("binBank");
                    return;
                }else{
                    $state.go("withdrawals");
                }
            })
        }
    }]);
ymb.controller('order', ['$scope', '$state', '$ionicViewSwitcher', 'WecHat', 'WeChat', '$http', '$PlPup', '$confirm', '$$target',
    function ($scope, $state, $ionicViewSwitcher, WecHat, WeChat, $http, $PlPup, $confirm, $$target) {
        WeChat.WxData();
        WecHat.inData('商品订单');
        $scope.e = 1;
        $scope.Order_active = 'Order_active';
        $scope.View_switch = function (l, i, o, p) {
            $scope.e = l;
            $scope.b = i;
            $scope.c = o;
            $scope.d = p
        };
        $scope.shopswitch = '';
        $http.post(url + '/user/selectallorder', {}).success(function (data) {
            if (data.data === "null") {
                $scope.shopswitch = '1';
                return
            }
            if (data.data !== "null") {
                $scope.shopswitch = '2';
                $scope.shopList = data.data;
                return
            }
        });
        $scope.$on('$ionicView.beforeEnter',
            function () {
                $http.post(url + '/user/selectallorder', {}).success(function (data) {
                    if (data.data === "null") {
                        $scope.shopswitch = '1';
                        return
                    }
                    if (data.data !== "null") {
                        $scope.shopswitch = '2';
                        $scope.shopList = data.data;
                        return
                    }
                })
            });
        $scope.showConfirm = function ($event) {
            $confirm.$confIMS($scope, '您真的要取消本次订单吗', 1, $$target.$$staget($event, 'data-orId'), '/user/updateorder', "考虑一下", "狠心取消", 1)
        };
        $scope.goodsConfirm = function ($event) {
            $confirm.$confIMS($scope, '是否确定收货', 1, $$target.$$staget($event, 'data-orId'), '/user/updateorderdelivery', "否", "是", 1)
        };
        $scope.Minclick = function () {
            $PlPup.$model('亲，我们将尽快为您发货，请耐心等待')
        };
        $scope.Param = function ($event) {
            $state.go('delivery', {
                id: $$target.$$staget($event, 'data-ids')
            });
            $ionicViewSwitcher.nextDirection("forward")
        };
        $scope.ceipt = function ($event) {
            $state.go('ceipt', {
                id: $$target.$$staget($event, 'data-ids')
            });
            $ionicViewSwitcher.nextDirection("forward")
        };
        $scope.complete = function ($event) {
            $state.go('completed', {
                id: $$target.$$staget($event, 'data-ids')
            });
            $ionicViewSwitcher.nextDirection("forward")
        };
        $scope.payments = function ($event) {
            window.sessionStorage.setItem("data-ids_up", $$target.$$staget($event, 'data-ids'));
            $state.go('payments');
            $ionicViewSwitcher.nextDirection("forward")
        };
        window.sessionStorage.removeItem("data-ids_up")
    }]);
ymb.factory('$query',
    function () {
        var query_up = {};
        query_up.query_wp = function ($scope, $http, $stateParams, duota) {
            $http.post(url + '/user/selectoneorder', {
                id: $stateParams.id
            }).success(function (data) {
                $scope.pay = data.data;
                $scope.listData = new Date().getTime();
                $scope.ceiptsData = $scope.listData - data.data.shipments_time;
                $scope.finterData = 10 - $scope.ceiptsData / 86400000;
                $scope.ser = String($scope.finterData).split('.')[0];
                $scope.mms = $scope.finterData - parseInt($scope.ser);
                $scope.mm = String($scope.mms * 24);
                $scope.branch_up = String($scope.mms).split('.')[0];
                $scope.branchs = $scope.mms - parseInt($scope.branch_up);
                $scope.branch = String($scope.branchs * 60);
                $scope.ins = String($scope.finterData);
                if (duota === 1) {
                    $scope.query_int = data.data.id;
                    $http.post(url + '/user/getexpress', {
                        id: $scope.query_int
                    }).success(function (data) {
                        $scope.un_up = data;
                        $scope.express_up = JSON.parse(data.data);
                        $scope.express_us = $scope.express_up.data[0];
                        $scope.express_rEpe = $scope.express_up.data
                    });
                    return
                }
                if (duota === 2) {
                    return
                }
            })
        };
        return query_up
    });
ymb.controller('delivery', ['$scope', '$state', '$http', '$stateParams', 'WecHat', 'WeChat', '$query', '$PlPup',
    function ($scope, $state, $http, $stateParams, WecHat, WeChat, $query, $PlPup) {
        WeChat.WxData();
        WecHat.inData('订单详情');
        $query.query_wp($scope, $http, $stateParams, 2);
        $scope.Minclick = function () {
            $PlPup.$model('我们会用最快时间给您处理')
        }
    }]);
ymb.controller('ceipts', ['$scope', '$state', '$http', '$stateParams', '$ionicViewSwitcher', 'WecHat', 'WeChat', '$query', '$$target',
    function ($scope, $state, $http, $stateParams, $ionicViewSwitcher, WecHat, WeChat, $query, $$target) {
        WeChat.WxData();
        WecHat.inData('订单详情');
        $query.query_wp($scope, $http, $stateParams, 1);
        $scope.logistics = function ($event) {
            $state.go('logistics', {
                id: $$target.$$staget($event, 'data-ids')
            });
            $ionicViewSwitcher.nextDirection("forward")
        }
    }]);
ymb.controller('completeds', ['$scope', '$state', '$ionicViewSwitcher', '$http', '$stateParams', '$query', '$$target', 'WecHat', 'WeChat',
    function ($scope, $state, $ionicViewSwitcher, $http, $stateParams, $query, $$target, WecHat, WeChat) {
        WeChat.WxData();
        WecHat.inData('订单详情');
        $query.query_wp($scope, $http, $stateParams, 1);
        $scope.logistics = function ($event) {
            $state.go('logistics', {
                id: $$target.$$staget($event, 'data-ids')
            });
            $ionicViewSwitcher.nextDirection("forward")
        }
    }]);
ymb.controller('payments', ['$scope', 'WecHat', 'WeChat', '$http', '$$moeny', '$state', '$confirm', '$$target', '$ionicPopup', '$okgo', '$ionicLoading', '$ionicViewSwitcher',
    function ($scope, WecHat, WeChat, $http, $$moeny, $state, $confirm, $$target, $ionicPopup, $okgo, $ionicLoading, $ionicViewSwitcher) {
        WeChat.WxData();
        WecHat.inData('订单详情');
        $$moeny.$$moEny($scope, $http, $ionicLoading);
        $scope.payConfirm = function ($event) {
            $confirm.$confIMS($scope, '您真的要取消本次订单吗', 1, $$target.$$staget($event, 'data-orId'), '/user/updateorder', "考虑一下", "狠心取消", 2)
        };
        $scope.data_up = window.sessionStorage.getItem("data-ids_up");
        $http.post(url + '/user/selectoneorder', {
            id: $scope.data_up
        }).success(function (data) {
            $scope.pay = data.data
        });
        $scope.transmission = "overpay";
        $scope.weChat_yd = "cmoder11.png";
        $scope.sinaPay_yd = "cmoder11.png";
        $scope.overpay = "cmoder10.png";
        $scope.transmiss_pay = function (x) {
            if (x === 1) {
                $scope.transmission = "weChat";
                $scope.weChat_yd = "cmoder10.png";
                $scope.sinaPay_yd = "cmoder11.png";
                $scope.overpay = "cmoder11.png"
            } else if (x === 2) {
                $scope.transmission = "sinaPay";
                $scope.weChat_yd = "cmoder11.png";
                $scope.sinaPay_yd = "cmoder10.png";
                $scope.overpay = "cmoder11.png"
            } else if (x === 3) {
                $scope.transmission = "overpay";
                $scope.weChat_yd = "cmoder11.png";
                $scope.sinaPay_yd = "cmoder11.png";
                $scope.overpay = "cmoder10.png"
            }
        };
        $scope._mask_up = 1;
        $scope.go_pay_wp = function () {
            if ($scope._mask_up == 1) {
                $scope._mask_up = 2;
                if ($scope.transmission == "sinaPay") {
                    $http.post(url + '/user/ifidentification', {}).success(function (data) {
                        if (data.code === '00') {
                            $http.post(url + "/user/selectsinamoneycheck", {}).success(function (data) {
                                if (data.isSet == "N") {
                                    $scope._mask_up = 1;
                                    location.href = data.redirectUrl;
                                    return
                                }
                                if (data.isSet == "Y") {
                                    $http.post(url + "/user/orderpay", {
                                        banktype: $scope.transmission,
                                        orderId: $scope.data_up
                                    }).success(function (data) {
                                        $scope._mask_up = 1;
                                        if (data.code == "00") {
                                            window.sessionStorage.setItem("playiframe", data.redirect_url);
                                            $state.go('playiframe');
                                            $ionicViewSwitcher.nextDirection("forward");
                                            return
                                        }
                                        if (data.code !== "00") {
                                            $ionicPopup.alert({
                                                title: '提示',
                                                template: data.data,
                                                okText: "确定"
                                            });
                                            return
                                        }
                                    });
                                    return
                                }
                            });
                            return
                        }
                        if (data.code != '00') {
                            $scope._mask_up = 1;
                            $okgo.$$go('real');
                            return
                        }
                    });
                    return
                }
                if ($scope.transmission == "weChat") {
                    $http.post(url + "/savePayOrder_wx", {
                        dataId: $scope.data_up,
                        orderType: "03",
                        payType: $scope.transmission
                    }).success(function (data) {
                        $http.post(url + "/getWxPayid", {
                            orderid: data.orderid
                        }).success(function (data) {
                            $scope._mask_up = 1;
                            WeixinJSBridge.invoke('getBrandWCPayRequest', {
                                "appId": data.appId,
                                "timeStamp": data.timeStamp,
                                "nonceStr": data.nonceStr,
                                "package": data.package,
                                "signType": data.signType,
                                "paySign": data.paySign
                            },
                                function (res) {
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                        var alertPopupc = $ionicPopup.alert({
                                            title: '提示',
                                            template: '支付成功',
                                            okText: '确定'
                                        });
                                        alertPopupc.then(function (res) {
                                            $state.go("tabs.homepage",{cache:true},{reload: true});
                                        })
                                    } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                                        return
                                    } else {
                                        $ionicPopup.alert({
                                            title: '提示',
                                            template: '支付失败',
                                            okText: '确定'
                                        });
                                        return
                                    }
                                })
                        })
                    });
                    return
                }
                if ($scope.transmission == "overpay") {
                    var confirmPopup = $ionicPopup.confirm({
                        title: '提示',
                        template: '是否确定支付',
                        cancelText: '取消',
                        okText: '确定'
                    });
                    confirmPopup.then(function (res) {
                        if (res) {
                            $http.post(url + "/user/orderpay", {
                                banktype: $scope.transmission,
                                orderId: $scope.data_up
                            }).success(function (data) {
                                $scope._mask_up = 1;
                                if (data.code == "00") {
                                    var alertPopupc = $ionicPopup.alert({
                                        title: '提示',
                                        template: '支付成功',
                                        okText: '确定'
                                    });
                                    alertPopupc.then(function (res) {
                                        $state.go("tabs.homepage",{cache:true},{reload: true});
                                    });
                                    return
                                }
                                if (data.code !== "00") {
                                    $ionicPopup.alert({
                                        title: '提示',
                                        template: data.data,
                                        okText: '确定'
                                    });
                                    return
                                }
                            });
                            return
                        } else {
                            $scope._mask_up = 1
                        }
                    });
                    return
                }
                return
            }
            if ($scope._mask_up == 2) {
                return
            }
        }
    }]);
ymb.controller('logistics', ['$scope', '$query', '$http', '$stateParams', 'WecHat', 'WeChat',
    function ($scope, $query, $http, $stateParams, WecHat, WeChat) {
        WeChat.WxData();
        WecHat.inData('订单详情');
        $query.query_wp($scope, $http, $stateParams, 1)
    }]);
ymb.controller('ranch', ['$scope', '$http', 'WecHat', 'WeChat', '$state', '$$target', '$ionicLoading',
    function ($scope, $http, WecHat, WeChat, $state, $$target, $ionicLoading) {
        WeChat.WxData();
        WecHat.inData('我的牧场');
        $scope.e = 1;
        $scope.Order_active = 'Order_active';
        $scope.View_switch = function (a,b,c) {
            $scope.e = a;
            $scope.b = b;
            $scope.c = c;
        };
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.indataBg = 1;
        $http.post(url + '/loadinvestOrderhts', {
            currentPage: 1,
            pageCount: 50
        }).success(function (data) {
            $ionicLoading.hide();
            $.each(data.rows,function(index,ele){
                data.rows[index].end_time = getNewTime(ele.start_time,ele.time_type==1?ele.time_limit*30:ele.time_limit);
            })
            $scope.interData = data.rows;
            if (data.rows.length == 0) {
                $scope.indataBg = 1;
                return
            }
            if (data.rows.length != 0) {
                $scope.indataBg = 2;
                return
            }
        });
        $scope.$on('$ionicView.beforeEnter',
            function () {
                $http.post(url + '/loadinvestOrderhts', {
                    currentPage: 1,
                    pageCount: 50
                }).success(function (data) {
                    $.each(data.rows,function(index,ele){
                        data.rows[index].end_time = getNewTime(ele.start_time,ele.time_type==1?ele.time_limit*30:ele.time_limit);
                    })
                    $scope.interData = data.rows;

                    if (data.rows.length == 0) {
                        $scope.indataBg = 1;
                        return
                    }
                    if (data.rows.length != 0) {
                        $scope.indataBg = 2;
                        return
                    }
                })
            });
        $scope.adGo = function ($event) {
            $state.go("adoption", {
                codes: $$target.$$staget($event, "data-codes")
            })
        };
        $scope.abBringin = function ($event) {
            $state.go("bringin", {
                codes: $$target.$$staget($event, "data-codes")
            })
        }
    }]);
//我的实物
ymb.controller('myentity', ['$scope', '$http', 'WecHat', 'WeChat', '$state', '$$target', '$ionicLoading',
    function ($scope, $http, WecHat, WeChat, $state, $$target, $ionicLoading) {
        WeChat.WxData();
        WecHat.inData('我的实物');
        $scope.e = 1;
        $scope.Order_active = 'Order_active';
        $scope.View_switch = function (a,b,c) {
            $scope.e = a;
            $scope.b = b;
            $scope.c = c;
        };
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.indataBg = 1;
        $http.post(url + '/loadinvestOrderhts', {
            currentPage: 1,
            pageCount: 50,
            pay_back:2,
            state:null,
        }).success(function (data) {
            $ionicLoading.hide();
            if(data == null || data.rows == null){
                return;
            }
            $scope.interData = data.rows;
            if (data.rows.length == 0) {
                $scope.indataBg = 1;
                return
            }
            if (data.rows.length != 0) {
                $scope.indataBg = 2;
                return
            }
        });

            $scope.adGo = function ($event) {
                $state.go("myentityadoption", {
                    codes: $$target.$$staget($event, "data-codes")
                })
            };

    }]);
ymb.controller('myentityadoption', ['$scope', '$http', 'WeChat', 'WecHat', '$stateParams', '$state', '$$target',
    function ($scope, $http, WeChat, WecHat, $stateParams, $state, $$target) {
        WeChat.WxData();
        WecHat.inData('实物详情');
        $http.post(url + "/getOrderht", {
            code: $stateParams.codes
        }).success(function (data) {
            if(data == null){
                return;
            }
            // data.rows.end_time = getNewTime(data.rows.start_time,limit);
            // data.rows.left_sy_days = Math.floor(Math.abs(new Date(data.rows.end_time) - new Date())/ (24 * 3600 * 1000));
            $scope.interData = data.rows;
        });
        $scope.codeClick = function ($event) {
            $state.go('tioncontract', {
                code: $$target.$$staget($event, "data-code")
            })
        }
    }]);
//我的资产
//我的实物
ymb.controller('mymoney', ['$scope', '$http', 'WecHat', 'WeChat', '$state', '$$target', '$ionicLoading',
    function ($scope, $http, WecHat, WeChat, $state, $$target, $ionicLoading) {
        WeChat.WxData();
        WecHat.inData('我的收益');
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.indataBg = 1;
        $http.post(url + '/loadinvestOrderhts', {
            currentPage: 1,
            pageCount: 50,
            pay_back:1,
            state:null,
        }).success(function (data) {
            $ionicLoading.hide();
            if (data == null||data.rows.length == 0) {
                $scope.indataBg = 1;
                return
            }
            if (data.rows.length !== 0) {
                $scope.indataBg = 2;
                $scope.interData = data.rows;
                return
            }
        });

        $scope.adGo = function ($event) {
            $state.go("mymoneyadoption", {
                codes: $$target.$$staget($event, "data-codes")
            })
        };

    }]);
ymb.controller('mymoneyadoption', ['$scope', '$http', 'WeChat', 'WecHat', '$stateParams', '$state', '$$target',
    function ($scope, $http, WeChat, WecHat, $stateParams, $state, $$target) {
        WeChat.WxData();
        WecHat.inData('收益详情');
        $scope.interest = 0;
        $http.post(url + "/getOrderht", {
            code: $stateParams.codes
        }).success(function (data) {
            if(data.rows.pay_back == 1){
                $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/12*100)/100;
                if(data.rows.investCoupon !== null){
                    $scope.interest = Math.round(data.rows.pay_money*data.rows.investCoupon.offer_rate/100*data.rows.time_limit/12*100)/100;
                }
            }else{
                $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/360*100)/100;
                if(data.rows.investCoupon !== null) {
                    $scope.interest = Math.round(data.rows.pay_money * data.rows.investCoupon.offer_rate / 100 * data.rows.time_limit / 360 * 100) / 100;
                }
            }
            $scope.inData = data.rows;
        });
        $scope.codeClick = function ($event) {
            $state.go('tioncontract', {
                code: $$target.$$staget($event, "data-code")
            })
        }
    }]);
ymb.controller('myentitybringin', ['$scope', '$http', '$stateParams', 'WeChat', 'WecHat', '$state', '$$target',
    function ($scope, $http, $stateParams, WeChat, WecHat, $state, $$target) {
        WeChat.WxData();
        WecHat.inData('我的实物');
        $http.post(url + "/getOrderht", {
            code: $stateParams.codes
        }).success(function (data) {
            // if(data.rows.pay_back == 1){
            //     $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/12*100)/100;
            //     if(data.rows.investCoupon !== null){
            //         $scope.interest = Math.round(data.rows.pay_money*data.rows.investCoupon.offer_rate/100*data.rows.time_limit/12*100)/100;
            //     }
            // }else{
            //     $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/360*100)/100;
            //     if(data.rows.investCoupon !== null) {
            //         $scope.interest = Math.round(data.rows.pay_money * data.rows.investCoupon.offer_rate / 100 * data.rows.time_limit / 360 * 100) / 100;
            //     }
            // }
            $scope.interData = data.rows;
        });
        $scope.codeClick = function ($event) {
            $state.go('tioncontract', {
                code: $$target.$$staget($event, "data-code")
            })
        }
    }]);

// ymb.controller('adoption', ['$scope', '$http', 'WeChat', 'WecHat', '$stateParams', '$state', '$$target',
//     function ($scope, $http, WeChat, WecHat, $stateParams, $state, $$target) {
//         WeChat.WxData();
//         WecHat.inData('我的牧场');
//         $http.post(url + "/getOrderht", {
//             code: $stateParams.codes
//         }).success(function (data) {
//             if(data.rows.pay_back == 1){
//                 $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/12*100)/100;
//                 if(data.rows.investCoupon !== null){
//                     $scope.interest = Math.round(data.rows.pay_money*data.rows.investCoupon.offer_rate/100*data.rows.time_limit/12*100)/100;
//                 }
//             }else{
//                 $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/360*100)/100;
//                 if(data.rows.investCoupon !== null) {
//                     $scope.interest = Math.round(data.rows.pay_money * data.rows.investCoupon.offer_rate / 100 * data.rows.time_limit / 360 * 100) / 100;
//                 }
//             }
//             $scope.inData = data.rows;
//         });
//         $scope.codeClick = function ($event) {
//             $state.go('tioncontract', {
//                 code: $$target.$$staget($event, "data-code")
//             })
//         }
//     }]);
ymb.controller('bringin', ['$scope', '$http', '$stateParams', 'WeChat', 'WecHat', '$state', '$$target',
    function ($scope, $http, $stateParams, WeChat, WecHat, $state, $$target) {
        WeChat.WxData();
        WecHat.inData('我的牧场');
        $scope.interest = 0;
            $http.post(url + "/getOrderht", {
            code: $stateParams.codes
        }).success(function (data) {
            //本金收益资金
            if(data.rows.pay_back == 1){
                $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/12*100)/100;
                if(data.rows.investCoupon !== null){
                    $scope.interest = Math.round(data.rows.pay_money*data.rows.investCoupon.offer_rate/100*data.rows.time_limit/12*100)/100;
                }
            }else{
                $scope.income = Math.round(data.rows.pay_money*data.rows.return_rate/100*data.rows.time_limit/360*100)/100;
                if(data.rows.investCoupon !== null) {
                    $scope.interest = Math.round(data.rows.pay_money * data.rows.investCoupon.offer_rate / 100 * data.rows.time_limit / 360 * 100) / 100;
                }
            }

            $scope.inData = data.rows;
        });
        $scope.codeClick = function ($event) {
            $state.go('tioncontract', {
                code: $$target.$$staget($event, "data-code")
            })
        }
    }]);
ymb.controller('contrant', ['$scope', '$http', '$state', '$$target', 'WeChat', 'WecHat', '$ionicLoading',
    function ($scope, $http, $state, $$target, WeChat, WecHat, $ionicLoading) {
        WeChat.WxData();
        WecHat.inData('认养合同');
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.sf_sj = 2;
        $http.post(url + "/loadinvestOrderhts", {
            currentPage: 1,
            pageCount: 20
        }).success(function (data) {
            $ionicLoading.hide();
            if (data.rows == null) {
                $scope.sf_sj = 1;
                return
            }
            if (data.rows.length <= 0) {
                $scope.sf_sj = 1;
                return
            }
            if (data.rows.length != 0) {
                $scope.Sign_contrant = data.rows;
                $scope.sf_sj = 2;
                return
            }
        });
        $scope.$on('$ionicView.beforeEnter',
            function () {
                $scope.sf_sj = 2;
                $http.post(url + "/loadinvestOrderhts", {
                    currentPage: 1,
                    pageCount: 20
                }).success(function (data) {
                    if (data.rows == null) {
                        $scope.sf_sj = 1;
                        return
                    }
                    if (data.rows.length <= 0) {
                        $scope.sf_sj = 1;
                        return
                    }
                    if (data.rows.length != 0) {
                        $scope.Sign_contrant = data.rows;
                        $scope.sf_sj = 2;
                        return
                    }
                })
            });
        $scope.codeClick = function ($event) {
            $state.go('tioncontract', {
                code: $$target.$$staget($event, "data-code")
            })
        }
    }]);
ymb.factory('$$swItEch',
    function () {
        var swItEct_up = {};
        swItEct_up.$$swItEchUp = function ($scope, $http, urls,a,$ionicLoading) {
            $http.post(url + urls, {"state":a}).success(function (data) {
                $scope.wbCouponList = data.investCoupon;
                $scope.xinshou = data.xinshou;
                $ionicLoading.hide();
            })
        };
        return swItEct_up
    });
ymb.controller('coupon', ['$scope', 'WeChat', 'WecHat', '$http', '$$swItEch', '$ionicLoading','$ionicPopup','$state','$ionicViewSwitcher',
    function ($scope, WeChat, WecHat, $http, $$swItEch, $ionicLoading,$ionicPopup,$state,$ionicViewSwitcher) {
        WeChat.WxData();
        WecHat.inData('优惠券');
        $scope.e = 1;
        $scope.b = 3;
        $scope.c = 4;
        $scope.noImg="img/no.png";
        $$swItEch.$$swItEchUp($scope, $http, '/selectInvestCoupon',1,$ionicLoading);
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.$on('$ionicView.beforeEnter',
            function () {
                $scope.e = 1;
                $scope.b = 3;
                $scope.c = 4;
                // $http.post(url + "/user/getcouponnum", {}).success(function (data) {
                //     $scope.unused = data.data.unused;
                //     $scope.used = data.data.used;
                //     $scope.past = data.data.past
                // });
                $$swItEch.$$swItEchUp($scope, $http, '/selectInvestCoupon',1,$ionicLoading)
            });
        $scope.View_switch = function (l, i, o) {
            $scope.e = l;
            $scope.b = i;
            $scope.c = o;
            if ($scope.e === 1) {
                $$swItEch.$$swItEchUp($scope, $http, '/selectInvestCoupon',1,$ionicLoading);
                return
            }
            if ($scope.b === 1) {
                $$swItEch.$$swItEchUp($scope, $http, '/selectInvestCoupon',2,$ionicLoading);
                return
            }
            if ($scope.c === 1) {
                $$swItEch.$$swItEchUp($scope, $http, '/selectInvestCoupon',3,$ionicLoading);
                return
            }
        }
        $scope.token = "";

        $scope.useBk=function(a,b,c){
            var goon = $http.get(url + "/user/getToken").success(function (data) {
                $scope.token = data.data
            });
            if(a==true){
                $state.go("tabs.homepage");
                $ionicViewSwitcher.nextDirection("forward");
                return;
            }

            if(a == false && b==1){
                $state.go("detailshare",{
                    minOid: c
                });
                return;
            }

            goon.then(function (res) {
                if (res) {
                    $http.post(url + "/useInvestCoupon", {
                        id: b,token: $scope.token
                    }).success(function (data) {
                        if(data.code=="00"){
                            if(c==3){
                                $ionicPopup.alert({
                                    title: '提示',
                                    template: '您已使用体验金，收益已到账我的钱包，请前往查看/使用',
                                    okText: '   知道啦'
                                });
                            }else{
                                $ionicPopup.alert({
                                    title: '提示',
                                    template: '使用成功',
                                    okText: '   确定'
                                });
                            }
                            $$swItEch.$$swItEchUp($scope, $http, '/selectInvestCoupon',1,$ionicLoading);
                        }else{
                            $ionicPopup.alert({
                                title: '提示',
                                template: data.data,
                                okText: '确定'
                            });
                        }
                    })
                }
            })
        }
    }]);
//可以使用的优惠券
ymb.controller('usecoupon', ['$scope', 'WeChat', 'WecHat','$state','$ionicViewSwitcher',
    function ($scope, WeChat, WecHat,$state,$ionicViewSwitcher) {
        WeChat.WxData();
        WecHat.inData('使用优惠券');
        var useCoupon=window.sessionStorage.getItem("coupon");
        $scope.wbCouponList = JSON.parse(useCoupon);
        $scope.useBk=function(a){
            window.sessionStorage.setItem("couponId",a);
            window.history.go(-1)
        }
    }]);
ymb.controller('incomeback', ['$scope', '$state', '$http', '$stateParams', 'WeChat', 'WecHat', '$$target', '$ionicViewSwitcher', '$okgo', '$', '$ionicLoading', '$ionicPopup',
    function ($scope, $state, $http, $stateParams, WeChat, WecHat, $$target, $ionicViewSwitcher, $okgo, $, $ionicLoading, $ionicPopup) {
        WeChat.WxData();
        WecHat.inData('收益回报');
        $http.post(url + "/getInvestProduct", {
            id: $stateParams.minOid
        }).success(function (data) {
            $scope.indata = data.data;
            var limit = data.data.time_limit;

            if(data.data.time_type == 1){
                $scope.moneycome = Math.round(data.data.return_rate*limit*data.data.price/100/12*100)/100;
                $scope.income = Math.round(data.data.return_rate*limit*data.data.price/100/12*100)/100*$stateParams.num;
            }else{
                $scope.moneycome = Math.round(data.data.return_rate*limit*data.data.price/100/360*100)/100;
                $scope.income = Math.round(data.data.return_rate*limit*data.data.price/100/360*100)/100*$stateParams.num;
            }

        })
    }
]);

ymb.controller('ranch_code', ['$scope', '$state', '$http', '$stateParams', 'WeChat', 'WecHat', '$$target', '$ionicViewSwitcher', '$okgo', '$', '$ionicLoading', '$ionicPopup',
    function ($scope, $state, $http, $stateParams, WeChat, WecHat, $$target, $ionicViewSwitcher, $okgo, $, $ionicLoading, $ionicPopup) {
        WeChat.WxData();
        WecHat.inData('牧场介绍');
        $http.post(url + "/getInvestProduct", {
            id: $stateParams.minOid
        }).success(function (data) {
            $scope.indata = data.data;
            var limit = data.data.time_limit;
            if(data.data.time_type == 1){
                $scope.income = Math.round(data.data.return_rate*limit*data.data.price/100/12*100)/100;
            }else{
                $scope.income = Math.round(data.data.return_rate*limit*data.data.price/100/365*100)/100;
            }
        })
    }
]);


ymb.controller('detailshare', ['$scope', '$state', '$http', '$stateParams', 'WeChat', 'WecHat', '$$target', '$ionicViewSwitcher', '$okgo', '$', '$ionicLoading', '$ionicPopup',
    function ($scope, $state, $http, $stateParams, WeChat, WecHat, $$target, $ionicViewSwitcher, $okgo, $, $ionicLoading, $ionicPopup) {
        WeChat.WxData();
        WecHat.inData('牧场详情');
        $scope.to_img_url = "";
        $scope.hash_img_url = "";
        $scope.watch_width = "";
        $scope.vodeo_url = "";
        $scope.lave_amount = "";
        $scope.number_valo = 1;
        $scope.indata={};
        //定义实物回报的内容
        $scope.physicalFont="1";
        //判断是否是牛羊
        $scope.types="";
        $http.post(url + "/getInvestProduct", {
            id: $stateParams.minOid
        }).success(function (data) {
            $scope.physicalFont=data.data.back_product;
            $scope.can_buy = data.can_buy;
            $scope.indata = data.data;
            //  处理认养日期
            var limit = data.data.time_limit;
            if(data.data.time_type == 1){
                $scope.income = Math.round(data.data.return_rate*limit*data.data.price/100/12*100)/100;
            }else{
                $scope.income = Math.round(data.data.return_rate*limit*data.data.price/100/360*100)/100;
            }

            $scope.to_img_url = data.data.description;
            $scope.hash_img_url = data.data.url;
            $scope.winnerList = data.winnerList;
            $scope.vodeo_url = data.data.wbinvestGrasslandWithBLOBs.video_url;
            $scope.lave_amount = data.data.lave_amount;
            $scope.product_url=data.data.product_url;

            if (data.data.lave_amount == 0) {
                $.$("jd_up").style.width = "" + 100 + "%";
                return
            }
            if (data.data.sales == 0) {
                $.$("jd_up").style.width = "" + 0 + "%";
                return
            }
            if (data.data.lave_amount != 0 && data.data.sales != 0) {
                $.$("jd_up").style.width = "" + data.data.sales / (data.data.sales + data.data.lave_amount) * 100 + "%";
                return
            }
        });

        $scope.$on('$ionicView.beforeEnter',
            function () {
                $http.post(url + "/getInvestProduct", {
                    id: $stateParams.minOid
                }).success(function (data) {
                    $scope.physicalFont=data.data.back_product;
                    $scope.indata = data.data;
                    $scope.to_img_url = data.data.description;
                    $scope.hash_img_url = data.data.url;
                    $scope.winnerList = data.winnerList;
                    $scope.vodeo_url = data.data.wbinvestGrasslandWithBLOBs.video_url;
                    $scope.lave_amount = data.data.lave_amount;
                    $scope.product_url=data.data.product_url;
                    if (data.data.lave_amount == 0) {
                        $.$("jd_up").style.width = "" + 100 + "%";
                        return
                    }
                    if (data.data.sales == 0) {
                        $.$("jd_up").style.width = "" + 0 + "%";
                        return
                    }
                    if (data.data.lave_amount != 0 && data.data.sales != 0) {
                        $.$("jd_up").style.width = "" + data.data.sales / (data.data.sales + data.data.lave_amount) * 100 + "%";
                        return
                    }
                });
            }
        );

        $scope.vodeo_url_up = function () {
            location.href = $scope.vodeo_url
        };
        $scope.plus = function () {
            $scope.number_valo += 1
        };
        $scope.reduce = function () {
            if ($scope.number_valo == 1) {
                return
            }
            $scope.number_valo -= 1
        };
        $scope.cannotmulti = function(){
            $ionicPopup.alert({
                title: '提示',
                template: '小主，新手专享只能体验一份哦～',
                okText: "知道啦"
            });
        }
        $scope.numo = function ($event) {
            $scope.number_valo = parseInt($$target.$$staget($event, 'data-numl'))
        };
        $scope.inter = function ($event) {
            $state.go("profit", {
                imgid: $$target.$$staget($event, 'data-imgid')
            })
        };
        $scope.incomeback_go = function () {
            $state.go("incomeback",{
                minOid: $stateParams.minOid,
                num:$scope.number_valo
            })
        };
        $scope.tion_go = function () {
            $state.go("tioncontract")
        };
        $scope._msak = 1;
        $scope.immediately = function () {
            if ($scope.lave_amount < $scope.number_valo) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '当前剩余认养数不足<p>请重新选择</p>',
                    okText: '知道啦'
                });
                return
            }
            if ($scope.number_valo <= 0) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '当前购买数量不符合标准<p>请重新输入</p>',
                    okText: '知道啦'
                });
                return
            }
            if ($scope._msak == 1) {
                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });
                $scope._msak == 2;
                $http.post(url + '/user/iflogin', {}).success(function (data) {
                    if (data.code === '08') {
                        $http.post(url + '/user/ifidentification', {}).success(function (data) {
                            if (data.code === '00') {
                                $ionicLoading.hide();
                                window.sessionStorage.setItem("minoid", $stateParams.minOid);
                                window.sessionStorage.setItem("number_up", $scope.number_valo);
                                window.sessionStorage.setItem("ReturnWay",$scope.ReturnWay);
                                window.sessionStorage.setItem("moenys",$scope.income*$scope.number_valo);
                                window.sessionStorage.setItem("entity_return",$scope.indata.type=="牛"?70*$scope.number_valo:10*$scope.number_valo);
                                window.sessionStorage.setItem("entity_type",$scope.indata.type);

                                $state.go("immed");
                                return
                            }
                            if (data.code != '00') {
                                $ionicLoading.hide();
                                $scope._msak = 1;
                                $okgo.$$go('real');
                                return
                            }
                        });
                        return
                    }
                    if (data.code !== '08') {
                        $ionicLoading.hide();
                        $scope._msak == 1;
                        $state.go("sign");
                        $ionicViewSwitcher.nextDirection("forward");
                        return true
                    }
                })
            }
        };
        $scope.details_go = function () {
            window.sessionStorage.setItem("detailse_img", $scope.to_img_url);
            window.sessionStorage.setItem("detailse_hash_img", $scope.hash_img_url);
            $state.go("ranch_code",{
                minOid: $stateParams.minOid
            })
        };
        //实物回报
        $scope.physical = function(){
            window.sessionStorage.setItem("physicaldetails_img",$scope.product_url);
            $state.go("physicaldetails");
        };
        window.sessionStorage.removeItem("minoid");
        window.sessionStorage.removeItem("number_up");
        //新加选择 是否是 实物回报和收益回报
        $scope.earningsImg="myimg/cores-1.png";
        $scope.physicals="myimg/cores.png";
        $scope.mieder="activeReturn";
        $scope.mieders="mieder";
        //定义一个是什么回报
        $scope.ReturnWay=1;
        $scope.colls=true;
        $scope.collsTow=false;
        $scope.physicalRs = function($event){
            var indexZ=$$target.$$staget($event, 'data-user');
            if(indexZ=="1"){
                $scope.earningsImg="myimg/cores-1.png";
                $scope.physicals="myimg/cores.png";
                $scope.mieder="activeReturn";
                $scope.mieders="mieder";
                $scope.ReturnWay=1;
                $scope.colls=true;
                $scope.collsTow=false;
            }else{
                $scope.collsTow=true;
                $scope.colls=false;
                $scope.earningsImg="myimg/cores.png";
                $scope.physicals="myimg/cores-1.png";
                $scope.mieder="mieder";
                $scope.mieders="activeReturn";
                $scope.ReturnWay=2;
            }
        }
        //清除优惠券
        window.sessionStorage.removeItem("couponId")
    }]);
ymb.controller('ranch_push', ['$scope',
    function ($scope) {
        $scope.e = 1;
        $scope.b = "";
        $scope.Order_active = 'Order_active';
        $scope.switch_phsu = function (l, i) {
            $scope.e = l;
            $scope.b = i
        };
        $scope.detailse_img = window.sessionStorage.getItem("detailse_img");
        $scope.detailse_hash_img = window.sessionStorage.getItem("detailse_hash_img");
        $scope.video_go = function () {
            location.href = 'http://wx.umubao.com/upload/muchang.mp4'
        }
    }]);
ymb.controller('physicaldetailss', ['$scope',
    function ($scope) {
        $scope.imgs=window.sessionStorage.getItem("physicaldetails_img");
    }]);
ymb.controller('tioncontract', ['$scope', '$http', '$stateParams', 'WeChat', 'WecHat',
    function ($scope, $http, $stateParams, WeChat, WecHat) {
        WeChat.WxData();
        WecHat.inData('认养合同');
        $http.post(url + "/getOrderht", {
            code: $stateParams.code
        }).success(function (data) {
            // console.log(data.rows);
            // data.rows.end_time = getNewTime(data.rows.start_time,data.rows.time_limit*30);
            $scope.orderht = data.rows
        })
    }]);
ymb.controller("profit", ['$scope', 'WeChat', 'WecHat', '$stateParams',
    function ($scope, WeChat, WecHat, $stateParams) {
        $scope.urlImg = $stateParams.imgid;
        WeChat.WxData();
        WecHat.inData('收益计算')
    }]);
//支付订单
ymb.controller('immed', ['$scope', 'WeChat', 'WecHat', '$http', '$state', '$ionicPopup', '$$moeny', '$ionicLoading', '$ionicViewSwitcher','$ionicModal',
    function ($scope, WeChat, WecHat, $http, $state, $ionicPopup, $$moeny, $ionicLoading, $ionicViewSwitcher,$ionicModal) {
        WeChat.WxData();
        WecHat.inData('牧场详情');
        $scope.data_dq = new Date().getTime();
        $scope.id = window.sessionStorage.getItem("minoid");
        $scope.number_up = window.sessionStorage.getItem("number_up");
        //查看是现金还是实物回报
        $scope.way=window.sessionStorage.getItem("ReturnWay");
        $scope.wayMoney=window.sessionStorage.getItem("moenys");
        $scope.entity_return=window.sessionStorage.getItem("entity_return");
        $scope.entity_type=window.sessionStorage.getItem("entity_type");
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $http.post(url + "/getInvestProduct", {
            id: $scope.id
        }).success(function (data) {
            $ionicLoading.hide();
            $scope.details_up = data.data;
        }).then(function () {
            //查看是否有优惠券
            $scope.couponId=window.sessionStorage.getItem("couponId");
            //查看有没有可以使用的优惠券
            $scope.CouponsLength="";
            $scope.arrAyCoupon=[];
            $http.post(url + "/checkInvestCoupon", {
                id: $scope.id,
                amount:$scope.number_up
            }).success(function (data) {
                $scope.CouponsLength=data.rows.length;
                $scope.arrAyCoupon=data.rows;
                $scope.arrAyT=[];
                $scope.BoxData=false;
                $scope.jiaxi=false;
                if($scope.arrAyCoupon.length!=0){
                    for(var i=0;i<$scope.arrAyCoupon.length;i++){
                        if($scope.arrAyCoupon[i].id==$scope.couponId){
                            // console.log($scope.arrAyCoupon[i]);
                            $scope.arrAyT.push($scope.arrAyCoupon[i]);
                        }
                    }
                }
                if($scope.arrAyT.length!=0&&$scope.arrAyT[0].type !== 4){
                    $scope.names=$scope.arrAyT[0].name;
                    $scope.BoxData=true;
                }else if($scope.arrAyT.length!=0&&$scope.arrAyT[0].type == 4){
                    $scope.names=$scope.arrAyT[0].name+$scope.arrAyT[0].offer_rate+"%";
                    $scope.interest = $scope.number_up* $scope.details_up.price*$scope.arrAyT[0].offer_rate/100*$scope.details_up.time_limit/12;
                    $scope.jiaxi=true;
                    $scope.BoxData=true;
                }else{
                    $scope.BoxData=false;
                }
            });
        })

        $scope.tion_go = function () {
            $state.go("tioncontract")
        };
        $scope.token = "";

        //选择优惠券
        $scope.SelectCoupons=function(){
            if($scope.arrAyCoupon.length==0){
                $ionicPopup.alert({
                    title: '提示',
                    template: '小主，您没有可用的优惠券喔',
                    okText: '知道啦'
                });
                return;
            }
            window.sessionStorage.setItem("coupon", JSON.stringify($scope.arrAyCoupon));
            $state.go("usecoupon")
        };
        //获取收获地址
        $scope.address = "";
        var b = window.sessionStorage.getItem("code");
        if($scope.way ==="2"){
            if(b == null){
                //获取用户默认地址
                $http.post(url + "/user/finddefaultaddress", {}).success(function(data) {
                    if (data.data == "null") {
                        $scope.showAddress = 2;
                        return
                    } else {
                        $scope.address = data.data;
                        $scope.showAddress = 1;
                        return
                    }
                })
            }else{
                $http.post(url + "/user/findaddress", {
                    id: b
                }).success(function(data) {
                    $scope.address = data.data;
                    $scope.showAddress = 1;
                })
            }
        }
        $scope.transmission = "weChat";
        $scope.weChat_yd = "cmoder10.png";
        $scope.sinaPay_yd = "cmoder11.png";
        $scope.transmiss_pay = function (x) {
            if (x === 1) {
                $scope.transmission = "weChat";
                $scope.weChat_yd = "cmoder10.png";
                $scope.sinaPay_yd = "cmoder11.png"
            } else if (x === 2) {
                $scope.transmission = "overpay";
                $scope.weChat_yd = "cmoder11.png";
                $scope.sinaPay_yd = "cmoder10.png"
            }
        };
        $scope._msak = 1;
        $$moeny.$$moEny($scope, $http, $ionicLoading);
        //收货地址
        $scope.go_address = function(){
            window.sessionStorage.setItem("codein",1);
            $state.go("receipt");
        };
        //打开模态框
        $ionicModal.fromTemplateUrl('./share/security.html', {
            scope: $scope,//modal的作用域
            animation: 'slide-in-up',//modal, 进入的动画
            focusFirstInput:true,//是否自动对焦显示模态的第一个输入。只会在iOS上显示键盘，强制键盘在Android上显示，请使用Ionic键盘插件.插件地址在代码片段下面。默认值：false
            backdropClickToClose:false,//是否关闭点击背景幕的模式。默认值：true。
            hardwareBackButtonClose:false//使用Android和类似设备上的硬件返回按钮可以关闭模​​态。默认值：true。
        }).then(function(modal) {
            $scope.modal = modal;//把引入的modal赋值给当前作用域下的变量
        });
        $scope.openModal = function() {
            //如果modal没有在显示
            $scope.modal.show();//显示modal
            $('.keybox').show();
            var pwd = "";
            var len = 0;
            $scope.img_wp = "";
            $http.post(url + '/user/selecttotalmoney', {}).success(function(data) {
                $ionicLoading.hide();
                $scope.img_wp = data.photo
            });
            $('.surface-ipt input').css("height",$('.surface-ipt input').css("width"));
            $('.surface-ipt').css("height",$('.surface-ipt input').css("width"));
            //关闭键盘事件
            $scope.closesec = function(){
                $('.keybox').hide();
            }
            $scope.paypassword = function(){
                $('.keybox').show();
            }
            //点击键盘数字
            $scope.addnum =  function($event){
                $('.surface-ipt input').each(function(i,e){
                    if(e.value ==""){
                        $('.surface-ipt input')[i].value = $event.target.innerHTML;
                        return false;
                    }
                })
            }
            //删除数字
            var len = $('.surface-ipt input').length;
            $scope.delnum = function(){
                $($('.surface-ipt input').toArray().reverse()).each(function(i,e){
                    if(e.value !==""){
                        $('.surface-ipt input')[len-i-1].value = "";
                        return false;
                    }
                })
            }

            $scope.pwd = "";
            //关闭模态框
            $scope.send = function(){

                if($('.surface-ipt input')[len-1].value == ""){
                    $ionicPopup.alert({
                        title: '提示',
                        template: '请输入6位交易密码',
                        okText: '确定'
                    });
                }else{
                    $('.surface-ipt input').each(function(i,e){
                        $scope.pwd += e.value;
                    })

                    $scope.modal.hide();
                    //支付订单
                    $ionicLoading.show({
                        content: 'Loading',
                        animation: 'fade-in',
                        showBackdrop: true,
                        maxWidth: 200,
                        showDelay: 0
                    });
                    $http.get(url + "/user/getToken").success(function (data) {
                        $scope.token = data.data;
                    }).then(function(){
                        $http.post(url + "/saveInvestOrder", {
                            id: $scope.id,
                            amount: $scope.number_up,
                            banktype: $scope.transmission,
                            token: $scope.token,
                            user_key: window.sessionStorage.getItem("super_key_up"),
                            pay_back:window.sessionStorage.getItem("ReturnWay"),
                            couponid:$scope.couponId=="null"||$scope.couponId==null||$scope.couponId==undefined||$scope.couponId=="undefined"?"":$scope.couponId,
                            paypwd:$scope.pwd
                        }).success(function (data) {
                            $ionicLoading.hide();
                            if (data.code == "00") {
                                var alertPopupc = $ionicPopup.alert({
                                    title: '提示',
                                    template: '亲爱的牧场主，恭喜您认养成功，可在我的牧场查看收益状态',
                                    okText: '确定'
                                });
                                alertPopupc.then(function (res) {
                                    //关闭模态框
                                    $scope.modal.remove();
                                    window.history.go(- 2)
                                });
                                return
                            }
                            if (data.code != "00") {
                                $ionicPopup.alert({
                                    title: '提示',
                                    template: data.data,
                                    okText: '确定'
                                }).then(function(){
                                    $(".surface-ipt input").val("");
                                    $(".real-ipt").val("");
                                    $scope.openModal();
                                });
                                $scope._msak = 1;
                                return
                            }
                        });
                        return

                    })


                }

            }

        };

        $scope.close = function(){
            $scope._msak = 1;
            $scope.closeModal();
        }
        $scope.closeModal = function() {
            $scope.modal.hide();//隐藏modal
        };
        //当我们用完模型时，清除它！
        //因为每次弹出modal都会在html中生成表示modal的标签，如果不手动remove，下次再弹出来modal将会又生成一个代表modal的标签。
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // 当隐藏模型时执行动作
        $scope.$on('modal.hide', function() {
            // 执行动作
            $scope.modal.$destroy(); //清除
        });
        // 当移动模型时执行动作
        $scope.$on('modal.removed', function() {
            // 执行动作
        });
        //触发立即支付
        $scope.go_pay_wp = function () {
            if ($scope._msak == 1) {
                $scope._msak = 2;
                if ($scope.transmission == "overpay") {
                    //判断钱包支付的时候有没有设置交易密码
                    $http.post(url + "/user/selecttotalmoney", {}).success(function (data) {
                        if (data.is_set_paypwd == "N") {
                            var myPopup = $ionicPopup.confirm({
                                title: '提示',
                                template: '为了您账户安全请先设置交易密码',
                                cancelText: '取消',
                                okText: '确定'
                            });
                            myPopup.then(function (res) {
                                //console.log('Tapped!', res);
                                if (res === true) {
                                    $state.go("settradepwd");
                                }else{
                                    $scope._msak = 1
                                    return false;
                                }
                            });
                            return;
                        }else if($scope.account_money < $scope.number_up*$scope.details_up.price){

                            var con = $ionicPopup.confirm({
                                title: '提示',
                                template: '您的钱包余额不足，请先充值或更换支付方式',
                                cancelText: '微信支付',
                                okText: '充值'
                            });
                            con.then(function(res){
                                console.log(res);
                                if(res === false){
                                    $scope.transmission = "weChat";
                                    $scope.transmiss_pay(1);
                                    $scope._msak = 1;
                                    return;
                                }else{
                                    $state.go("BankPay");
                                }

                            })
                            return;
                        } else {
                            //打开模态窗
                            $scope.openModal();
                        }
                    })

                }
                if ($scope.transmission == "weChat") {
                    $ionicLoading.show({
                        content: 'Loading',
                        animation: 'fade-in',
                        showBackdrop: true,
                        maxWidth: 200,
                        showDelay: 0
                    });
                    //判断是否符合微信支付环境
                    var goon = $http.get(url + "/user/getToken").success(function (data) {
                        $scope.token = data.data;
                    });
                    goon.then(function () {
                        $http.post(url + "/saveInvestOrder", {
                            id: $scope.id,
                            amount: $scope.number_up,
                            banktype: $scope.transmission,
                            token: $scope.token,
                            // address_id:b,
                            user_key: window.sessionStorage.getItem("super_key_up"),
                            pay_back: window.sessionStorage.getItem("ReturnWay"),
                            couponid: $scope.couponId == "null" || $scope.couponId == null || $scope.couponId == undefined || $scope.couponId == "undefined" ? "" : $scope.couponId
                        }).success(function (data) {
                            $ionicLoading.hide();
                            if(data.code == '99'){
                                window.location.href= data.data;
                            }else {
                                if (data.code == "00") {
                                    $http.post(url + "/savePayOrder_wx", {
                                        dataId: data.dataid,
                                        orderType: data.orderType,
                                        payType: data.payType
                                    }).success(function (datamin) {
                                        $http.post(url + "/getWxPayid", {
                                            orderid: datamin.orderid
                                        }).success(function (_data) {
                                            $scope._msak = 1;
                                            WeixinJSBridge.invoke('getBrandWCPayRequest', {
                                                    "appId": _data.appId,
                                                    "timeStamp": _data.timeStamp,
                                                    "nonceStr": _data.nonceStr,
                                                    "package": _data.package,
                                                    "signType": _data.signType,
                                                    "paySign": _data.paySign
                                                },
                                                function (res) {
                                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                                        var alertPopupc = $ionicPopup.alert({
                                                            title: '提示',
                                                            template: '亲爱的牧场主，恭喜您认养成功',
                                                            okText: '确定'
                                                        });
                                                        alertPopupc.then(function (res) {
                                                            window.history.go(-2)
                                                        })
                                                    } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                                                        $http.get(url + "/user/getToken").success(function (data) {
                                                            $scope.token = data.data
                                                        });
                                                        return
                                                    } else {
                                                        $http.get(url + "/user/getToken").success(function (data) {
                                                            $scope.token = data.data
                                                        });
                                                        $ionicPopup.alert({
                                                            title: '提示',
                                                            template: '支付失败',
                                                            okText: '确定'
                                                        });
                                                        return
                                                    }
                                                })
                                        })
                                    });
                                    return
                                }
                                if (data.code != "00") {
                                    $http.get(url + "/user/getToken").success(function (data) {
                                        $scope.token = data.data
                                    });
                                    $ionicPopup.alert({
                                        title: '提示',
                                        template: data.data,
                                        okText: '确定'
                                    });
                                    $scope._msak = 1;
                                    return
                                }
                            }

                        });
                    })
                    return
                }
                if ($scope._msak == 2) {
                    return
                }
            }
        }
    }]);
ymb.controller('introduce', ['$scope', 'WeChat', 'WecHat', '$',
    function ($scope, WeChat, WecHat, $) {
        WeChat.WxData();
        WecHat.inData('牧场详情');
        $scope.video = function ($event) {
            $.$("video1").style.display = "block";
            $event.target.style.display = "none";
            $.$("video1").play()
        }
    }]);
ymb.controller('sina', ['$scope', 'WeChat', 'WecHat',
    function ($scope, WeChat, WecHat) {
        WeChat.WxData();
        WecHat.inData('资金托管')
    }]);
ymb.controller('bank', ['$scope', '$state', 'WeChat', 'WecHat', '$http', '$ionicPopup', '$ionicViewSwitcher', '$$target', '$ionicLoading',
    function ($scope, $state, WeChat, WecHat, $http, $ionicPopup, $ionicViewSwitcher, $$target, $ionicLoading) {
        WeChat.WxData();
        WecHat.inData('我的银行卡');
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.hiddenS;
        $scope.bankId="";
        $http.post(url + "/user/getBankCard", {}).success(function (data) {
            $ionicLoading.hide();
            if(data.data==null){
                $scope.hiddenS=false;
                return;
            }
            console.log(data.data);
            $scope.hiddenS=true;
            $scope.bankname=data.data.bankname;
            $scope.cardnumber=data.data.cardnumber;
            $scope.bankId=data.data.id;
        });
            $scope.$on('$ionicView.beforeEnter',
                function () {
                    $http.post(url + "/user/getBankCard", {}).success(function (data) {
                        $ionicLoading.hide();
                        WeChat.WxData();
                        WecHat.inData('我的银行卡');
                        if(data.data==null){
                            $scope.hiddenS=false;
                            return;
                        }
                        $scope.hiddenS=true;
                        $scope.bankname=data.data.bankname;
                        $scope.cardnumber=data.data.cardnumber;
                        $scope.bankId=data.data.id;
                    });
                });
        $scope.jump_bank = function (){
            $http.post(url + '/user/ifidentification', {}).success(function (data) {
                console.log(data.code);
                if (data.code === '00') {
                    $state.go('binBank');
                    return
                }
                if (data.code != '00') {
                    $state.go('real');
                    return
                }
            });
        };
        $scope.showpk = function ($event) {
            var confirmPopup = $ionicPopup.confirm({
                title: '提示',
                template: '是否解除银行卡',
                cancelText: '否',
                okText: '是'
            });
            confirmPopup.then(function (res) {
                if(res){
                    window.sessionStorage.setItem("bankId",$scope.bankId);
                    $state.go('removeBank');
                }else{

                }
            })
        };
        window.sessionStorage.removeItem("boks")
    }]);
var $$news = function $$news($scope, $http, b, $ionicLoading) {
    if (b == 0) {
        $scope.currentPage = 1;
        $scope.hasMore = false;
        $http.get(url + '/user/mymessageus?' + "type=" + b + "&" + "currentPage=" + $scope.currentPage + "&" + "pageCount=" + 20).success(function (data) {
            if ($scope.noke == 1) {
                $ionicLoading.hide()
            }
            $scope.hasMore = true;
            $scope.news_data = data.data
        });
        $scope.loadMore = function () {
            $scope.currentPage++;
            $http.get(url + '/user/mymessageus?' + "type=" + b + "&" + "currentPage=" + $scope.currentPage + "&" + "pageCount=" + 20).success(function (data) {
                if (data.data.length < 20) {
                    $scope.hasMore = false
                }
                $scope.news_data = $scope.news_data.concat(data.data);
                $scope.$broadcast('scroll.infiniteScrollComplete')
            })
        };
        return
    }
    if (b == 1) {
        $scope.currentPage_up = 1;
        $scope.hasMore_up = false;
        $http.get(url + '/user/mymessageus?' + "type=" + b + "&" + "currentPage=" + $scope.currentPage_up + "&" + "pageCount=" + 20).success(function (data) {
            $scope.hasMore_up = true;
            $scope.news_up_data = data.data
        });
        $scope.loadMore_up = function () {
            $scope.currentPage_up++;
            $http.get(url + '/user/mymessageus?' + "type=" + b + "&" + "currentPage=" + $scope.currentPage_up + "&" + "pageCount=" + 20).success(function (data) {
                if (data.data.length < 20) {
                    $scope.hasMore_up = false
                }
                $scope.news_up_data = $scope.news_up_data.concat(data.data);
                $scope.$broadcast('scroll.infiniteScrollComplete')
            })
        };
        return
    }
};
ymb.controller('news', ['$scope', '$http', 'WeChat', 'WecHat', '$ionicLoading',
    function ($scope, $http, WeChat, WecHat, $ionicLoading) {
        WeChat.WxData();
        WecHat.inData('我的消息');
        $scope.noke = 0;
        $scope._Try = 1;
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $$news($scope, $http, 0, $ionicLoading);
        $scope.$on('$ionicView.beforeEnter',
            function () {
                $scope.noke++;
                if ($scope._Try == 1) {
                    $$news($scope, $http, 0, $ionicLoading);
                    return
                }
                if ($scope._Try == 2) {
                    $$news($scope, $http, 1, $ionicLoading);
                    return
                }
            });
        $scope.e = 1;
        $scope.b = "";
        $scope.Order_active = 'Order_active';
        $scope.switch_phsu = function (l, i) {
            $scope.e = l;
            $scope.b = i;
            if ($scope.e == 1) {
                $$news($scope, $http, 0, $ionicLoading);
                $scope._Try = 1;
                console.log($scope._Try);
                return
            }
            if ($scope.b == 1) {
                $$news($scope, $http, 1, $ionicLoading);
                $scope._Try = 2;
                console.log($scope._Try);
                return
            }
        }
    }]);
ymb.controller('quota', ['$scope', 'WeChat', 'WecHat',
    function ($scope, WeChat, WecHat) {
        WeChat.WxData();
        WecHat.inData('限额列表');
        $scope.e = 1;
        $scope.b = "";
        $scope.Order_active = 'Order_active';
        $scope.switch_phsu = function (l, i) {
            $scope.e = l;
            $scope.b = i
        }
    }]);
ymb.controller('edit', ['$scope', 'WeChat', 'WecHat', '$', '$class_mp', '$state', '$ionicViewSwitcher', '$http', '$ionicPopup', '$ionicLoading', '$interval', '$PlPup',
    function ($scope, WeChat, WecHat, $, $class_mp, $state, $ionicViewSwitcher, $http, $ionicPopup, $ionicLoading, $interval, $PlPup) {
        WeChat.WxData();
        WecHat.inData('编辑店铺');
        $scope.dp_name = "";
        $scope.nikename = "友牧农场官方";
        $scope.shopname = "友牧农场官方";
        $scope.urls_yp = "";
        $scope.token = "";
        $http.get(url + "/user/getToken").success(function (data) {
            $scope.token = data.data
        });
        var c = window.location.href;
        if (c.split("#")[1] == "/tab/formation") {
            var d = null
        } else {
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
            var urlto = c.split("homepage")[1];
            if (urlto == "") {
                var d = null
            } else if (c.split("edit")[1] == "") {
                var d = null
            } else {
                var pushurl = c.split("?")[1];
                var d = pushurl.split("=")[1];
                window.sessionStorage.setItem("super_key_up", d)
            }
            $http.post(url + "/shop/checkSubscribe", {
                super_key: d
            }).success(function (data) {
                $ionicLoading.hide();
                if (data.code == "-1") {
                    $scope.urls_yp = data.data;
                    $.$("edit_op").style.display = "block";
                    $.$("content").className += 'hidden_src';
                    for (var i = 0; i < $class_mp.$$$($.$('content'), 'scroll').length; i++) {
                        $class_mp.$$$($.$('content'), 'scroll')[i].style.position = "relative"
                    }
                    return
                }
                if (data.code == "00") {
                    $scope.nikename = data.data.nickName;
                    $scope.shopname = data.data.shop_name;
                    return
                }
            })
        }
        $scope.disabledS = false;
        $scope.Obtain = '获取验证码';
        $scope.nodeBa = 1;
        $scope.hash = '';
        $scope.tamp = '';
        $scope.sterCode = '';
        $scope.edit_yzm = "";
        $scope.Send_out = function () {
            if (!/^1[1|2|3|4|5|6|7|8|9][0-9]\d{8}$/.test($scope.sterCode)) {
                $PlPup.$model('请输入您正确的手机号码');
                return
            }
            $scope.disabledS = true;
            $scope.TimeS = 60;
            $scope.Obtain = 60 + 'S';
            $scope.nodeBa = 2;
            $scope.timerI = $interval(function () {
                $scope.TimeS--;
                $scope.Obtain = $scope.TimeS + 'S';
                if ($scope.TimeS === 0) {
                    $scope.nodeBa = 1;
                    $scope.Obtain = '获取验证码';
                    $interval.cancel($scope.timerI);
                    $scope.disabledS = false;
                    $scope.TimeS = 60;
                    return
                }
            },
                1000);
            $http.post(url + '/user/sendSMS', {
                phoneNumber: $scope.sterCode,
                smstype: "shop"
            }).success(function (data) {
                $scope.hash = data.hash;
                $scope.tamp = data.tamp
            })
        };
        $scope.tomin = function () {
            if ($scope.dp_name.length <= 0) {
                $PlPup.$model('请输入您的店铺名称');
                return
            }
            if (!/^1[1|2|3|4|5|6|7|8|9][0-9]\d{8}$/.test($scope.sterCode)) {
                $PlPup.$model('请输入您正确的手机号码');
                return
            }
            if ($scope.edit_yzm.length <= 0) {
                $PlPup.$model('请输入您收到的手机验证码');
                return
            }
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
            $http.post(url + "/shop/openshop", {
                super_key: d,
                shop_name: $scope.dp_name,
                token: $scope.token,
                phone: $scope.sterCode,
                tamp: $scope.tamp,
                hash: $scope.hash,
                msgNum: $scope.edit_yzm
            }).success(function (data) {
                $ionicLoading.hide();
                if (data.code == "00") {
                    var alertPopup = $ionicPopup.alert({
                        title: '提示',
                        template: '恭喜您开店成功，快去分享领奖金吧',
                        okText: '确定'
                    });
                    alertPopup.then(function (res) {
                        $state.go("tabs.homepage");
                        $ionicViewSwitcher.nextDirection("forward")
                    });
                    return
                }
                if (data.code != "00") {
                    $http.get(url + "/user/getToken").success(function (data) {
                        $scope.token = data.data
                    });
                    $ionicPopup.alert({
                        title: '提示',
                        template: data.data,
                        okText: '确定'
                    })
                }
            })
        }
    }]);
ymb.controller('twodimensioncode', ['$scope', 'WeChat', 'WecHat', '$http', '$ionicPopup', '$', '$class_mp',
    function ($scope, WeChat, WecHat, $http, $ionicPopup, $, $class_mp) {
        WeChat.WxData();
        WecHat.inData('推荐有礼');
        $http.post(url + "/shop/inviteStore", { url: window.location.href.split("#")[0]}).success(function(data) {
            $scope.invitedata = data.data;
            jQuery('#qrcode').qrcode({
                render: "canvas",
                text: data.data.sharelink,
            });
        });
        $scope.showinfo = function(){
            $.$("pade").style.display = 'block'
        }
        var shareonurk = "";
        var title_up = "";
        var title_wp = "";
        var desc_wp = "";
        var link_img = "";
        $http.post(url + "/shop/inviteStore", {
            url: window.location.href.split("#")[0]
        }).success(function(data) {
            title_up = "我正在友牧农场养牛羊获收益，大家快来加入我吧！";
            title_wp = data.data.name+"送你3000元，现金红包送不停！";
            desc_wp = "友牧农场，只需一步注册， 送你3000元！分享好友， 领现金红包！";
            shareonurk = data.data.sharelink;
            link_img = "https://mmbiz.qpic.cn/mmbiz_png/iavQejJhffJa4TGQeicrtliaLAq2D01AqcbqxgFGV8hx6f4XXqCqupn3m6MdDMIia8n3zmlEU8YicgicpBRIMFZ5Fdug/0?wx_fmt=gif";
            wx.config({
                appId: data.data.appid,
                timestamp: data.data.timestamp,
                nonceStr: data.data.nonceStr,
                signature: data.data.signature,
                jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage']
            });
            wx.ready(function() {
                wx.onMenuShareTimeline({
                    title: title_up,
                    link: shareonurk,
                    imgUrl: link_img,
                    success: function success() {
                        var confirmPopup = $ionicPopup.alert({
                            title: '提示',
                            template: '恭喜您分享成功，好友成功注册并实名，您将获得现金收益。赶紧邀请更多好友加入吧！',
                            okText: '确定'
                        });
                        confirmPopup.then(function(res) {
                            $.$("pade").style.display = 'none'
                        });
                        return
                    },
                    cancel: function cancel() {
                        $.$("pade").style.display = 'none';
                        return
                    },
                    fail: function fail() {
                        $.$("pade").style.display = 'none';
                        return
                    }
                });
                wx.onMenuShareAppMessage({
                    title: title_wp,
                    desc: desc_wp,
                    link: shareonurk,
                    imgUrl: link_img,
                    type: 'link',
                    success: function success() {
                        var confirmPopup = $ionicPopup.alert({
                            title: '提示',
                            template: '恭喜您分享成功，好友成功注册并实名，您将获得现金收益。赶紧邀请更多好友加入吧！',
                            okText: '确定'
                        });
                        confirmPopup.then(function(res) {
                            $.$("pade").style.display = 'none'
                        });
                        return
                    },
                    cancel: function cancel() {
                        $.$("pade").style.display = 'none';
                        return
                    },
                    fail: function fail() {
                        $.$("pade").style.display = 'none';
                        return
                    }
                })
            });
            wx.error(function(res) {
                console.log(res.errMsg)
            })
        });
        $.$("content").className += 'hidden_src';
        $.$("pade").style.display = 'none';
        for (var i = 0; i < $class_mp.$$$($.$('content'), 'scroll').length; i++) {
            $class_mp.$$$($.$('content'), 'scroll')[i].style.position = "relative"
        }
        $scope.nodeclick = function() {
            $.$("pade").style.display = 'block';
        }
    }]);
ymb.controller('shop', ['$scope', 'WeChat', 'WecHat', '$http', '$ionicPopup', '$', '$class_mp','$state',
    function ($scope, WeChat, WecHat, $http, $ionicPopup, $, $class_mp,$state) {
        WeChat.WxData();
        WecHat.inData('推荐有礼');
        $http.post(url + "/shop/selectshop", {}).success(function(data) {
            $scope.shopdata = data;
            console.log(data);
        });
        $scope.nodeclick = function() {
            $.$("pade").style.display = 'none'
        }
        $scope.ward = function () {
            $state.go('ward',{
                code:"twodimensioncode"
            })
        }
    }]);

ymb.controller('rolloutmywallet', ['$scope', 'WeChat', 'WecHat', '$http', '$ionicPopup', '$', '$class_mp','$state',
    function ($scope, WeChat, WecHat, $http, $ionicPopup, $, $class_mp,$state) {
        WeChat.WxData();
        WecHat.inData('奖励转出');
        $http.post(url + "/shop/selectbountydetails", {}).success(function(data) {
            $scope.shopdata = data
        });
        $scope.$on("$ionicView.beforeEnter", function(){
            $http.post(url + "/shop/selectbountydetails", {}).success(function(data) {
                $scope.shopdata = data
            });
        });

        $scope.data = {
            rolloutMoney:"",
        };

        $scope.send_out = function() {
            if ($scope.data.rolloutMoney <= 0) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '请输入转出金额',
                    okText: "确定"
                });
                return;
            }
            if ($scope.data.rolloutMoney > $scope.shopdata.actual_bounty) {

                $ionicPopup.alert({
                    title: '提示',
                    template: '转出金额已超出可转出金额',
                    okText: "确定"
                });
                return;
            }
            $http.post(url + "/shop/withdrawShopMoney ", {
                txmoney: $scope.data.rolloutMoney
            }).success(function (data) {
                if (data.code == "00") {
                    var alertPopupc_wp = $ionicPopup.alert({
                        title: '提示',
                        template: '转出成功，前往我的钱包查看',
                        okText: "立即查看"
                    });
                    alertPopupc_wp.then(function (res) {
                        $state.go("wallet");
                    });
                    return
                }
                if (data.code != "00") {
                    $ionicPopup.alert({
                        title: '提示',
                        template: data.data,
                        okText: "确定"
                    });
                    return
                }
            })
        }
    }]);

ymb.controller('bonus', ['$scope', 'WeChat', 'WecHat', '$http','$state','$ionicPopup',
    function ($scope, WeChat, WecHat, $http,$state,$ionicPopup) {
        WeChat.WxData();
        WecHat.inData('奖励转出');
        $http.post(url + "/shop/selectbountydetails", {}).success(function (data) {
            $scope.bonusdata = data
        })
    }]);
ymb.controller('apply', ['$scope', 'WeChat', 'WecHat', '$http', '$ionicPopup',
    function ($scope, WeChat, WecHat, $http, $ionicPopup) {
        WeChat.WxData();
        WecHat.inData('申请提现');
        $scope.names = "";
        $scope.khyh = "";
        $scope.yhkh = "";
        $scope.moeny = 0;
        $scope.goclick = function () {
            if ($scope.names.length <= 0) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '请输入您的姓名',
                    okText: "确定"
                });
                return
            }
            if ($scope.khyh.length <= 0) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '请输入您银行卡的开户行',
                    okText: "确定"
                });
                return
            }
            if ($scope.yhkh.length <= 10) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '请输入您正确的银行卡号',
                    okText: "确定"
                });
                return
            }
            if ($scope.moeny.length <= 0 || $scope.moeny <= 0) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '请您输入正确提现金额，提现金额必须大于50',
                    okText: "确定"
                });
                return
            }
            if ($scope.moeny < 50) {
                $ionicPopup.alert({
                    title: '提示',
                    template: '请您输入正确提现金额，提现金额必须大于50元',
                    okText: "确定"
                });
                return
            }
            $http.post(url + "/shop/withdrawShopMoney", {
                name: $scope.names,
                open_bank: $scope.khyh,
                bank_num: $scope.yhkh,
                txmoney: $scope.moeny
            }).success(function (data) {
                if (data.code == "00") {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '恭喜您提现成功，继续分享赚奖金吧',
                        okText: "确定"
                    });
                    return
                }
                if (data.code != "00") {
                    $ionicPopup.alert({
                        title: '提示',
                        template: data.data,
                        okText: "确定"
                    });
                    return
                }
            })
        }
    }]);
ymb.controller('extension', ['$scope', 'WeChat', 'WecHat', '$http',
    function ($scope, WeChat, WecHat, $http) {
        WeChat.WxData();
        WecHat.inData('我的好友');
        /*
        $http.post(url + "/shop/selectlowershopmoney", {}).success(function (data) {
            if (data.data == null) {
                $scope.extension_up = 1;
                return
            }
            if (data.data != null) {
                $scope.extension_up = 2;
                $scope.extension_data = data.data;
                return
            }
        })
        */
    }]);
ymb.controller('members', ['$scope', 'WeChat', 'WecHat', '$http',
    function ($scope, WeChat, WecHat, $http) {
        WeChat.WxData();
        WecHat.inData('我的会员');
        $http.post(url + "/shop/selectmymember", {}).success(function (data) {
            if (data.data == null) {
                $scope.members_up = 1;
                return
            }
            if (data.data != null) {
                $scope.members_up = 2;
                $scope.members = data.data;
                return
            }
        })
    }]);
ymb.controller('recordwp', ['$scope', 'WeChat', 'WecHat', '$http',
    function ($scope, WeChat, WecHat, $http) {
        WeChat.WxData();
        WecHat.inData('奖励记录');
        $http.post(url + "/shop/selecttradingrecord", {}).success(function (data) {
            console.log(data.data);
            if (data.data == null || data.data.length == 0) {
                $scope.recordwp_up = 1;
                return
            }
            if (data.data != null&& data.data.length !== 0) {
                $scope.recordwp_up = 2;
                $scope.recordwp = data.data;
                return
            }
        })
    }]);

//奖励转出记录
ymb.controller('recordout', ['$scope', 'WeChat', 'WecHat', '$http',
    function ($scope, WeChat, WecHat, $http) {
        WeChat.WxData();
        WecHat.inData('奖励转出');
        $http.post(url + "/shop/showWithdrawShop", {}).success(function (data) {
            console.log(data.data);
            if (data.data == null || data.data.length == 0) {
                $scope.recordout_up = 1;
                return
            }
            if (data.data != null&& data.data.length !== 0) {
                $scope.recordout_up = 2;
                $scope.recordout = data.data;
                return
            }
        })
    }]);

//邀请好友的红包记录
ymb.controller('recordIf', ['$scope', 'WeChat', 'WecHat', '$http','$ionicLoading',
    function ($scope, WeChat, WecHat, $http,$ionicLoading) {
        WeChat.WxData();
        WecHat.inData('交易记录');
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $http.post(url + "/shop/selecttradingrecord", {
            currentPage: 1,
            pageCount: 20
        }).success(function(data) {
            $ionicLoading.hide();
            if (data.data == null) {
                $scope.interRecord = 1;
                return
            }
            if (data.data != null) {
                $scope.rows_one = 2;
                $scope.interRecord = data.data;
                return
            }
        })
    }]);


ymb.controller('withdrawalswp', ['$scope', 'WeChat', 'WecHat', '$http',
    function ($scope, WeChat, WecHat, $http) {
        WeChat.WxData();
        WecHat.inData('提现明细');
        $http.post(url + "/shop/showWithdrawShop", {}).success(function (data) {
            if (data.data == null) {
                $scope.withdrawalswp_up = 1;
                return
            }
            if (data.data != null) {
                $scope.withdrawalswp_up = 2;
                $scope.withdrawalswp_data = data.data;
                return
            }
        })
    }]);
ymb.controller('listranch', ['$scope', 'WeChat', 'WecHat', '$http', '$ionicLoading', '$state', '$ionicViewSwitcher', '$$target',
    function ($scope, WeChat, WecHat, $http, $ionicLoading, $state, $ionicViewSwitcher, $$target) {
        WeChat.WxData();
        WecHat.inData('共享牧场');
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $http.post(url + "/showInvestProduct", {
            currentPage: 1,
            pageCount: 100
        }).success(function (data) {
            $ionicLoading.hide();
            if (data.data == null) {
                $scope.nodatalist_ranch = 1;
                return
            }
            if (data.data != null) {
                $scope.nodatalist_ranch = 2;
                $scope.investProducts = data.data;
                return
            }
        });
        $scope.$on('$ionicView.beforeEnter',
            function () {
                $http.post(url + "/showInvestProduct", {
                    currentPage: 1,
                    pageCount: 100
                }).success(function (data) {
                    if (data.data == null) {
                        $scope.nodatalist_ranch = 1;
                        return
                    }
                    if (data.data != null) {
                        $scope.nodatalist_ranch = 2;
                        $scope.investProducts = data.data;
                        return
                    }
                })
            });
        $scope.detaShare = function ($event) {
            $state.go("detailshare", {
                minOid: $$target.$$staget($event, 'data-inter')
            });
            $ionicViewSwitcher.nextDirection("forward")
        }
    }]);
ymb.controller('guarantee', ['$scope', 'WeChat', 'WecHat',
    function ($scope, WeChat, WecHat) {
        WeChat.WxData();
        WecHat.inData('安全保障')
    }]);
ymb.controller('problem', ['$scope', 'WeChat', 'WecHat',
    function ($scope, WeChat, WecHat) {
        WeChat.WxData();
        WecHat.inData('常见问题')
    }]);
ymb.controller('introduceup', ['$scope', 'WeChat', 'WecHat', '$',
    function ($scope, WeChat, WecHat, $) {
        WeChat.WxData();
        WecHat.inData('平台介绍');
        $scope.$on('$ionicView.beforeEnter',
            function () {
                var player = polyvObject('#previewArea').previewPlayer({
                    'height':"180",
                    'vid' : '6690869nl4568p67pc3523kccn884kn24_6'
                });
            });
    }]);
ymb.controller('experience', ['$scope', 'WeChat', 'WecHat', '$',
    function ($scope, WeChat, WecHat, $) {
        WeChat.WxData();
        WecHat.inData('平台介绍');
        $scope.randomNum = generateMixed(8);
    }]);
ymb.controller('goonline', ['$scope', 'WeChat', 'WecHat', '$',
    function ($scope, WeChat, WecHat, $) {
        WeChat.WxData();
        WecHat.inData('3.0上线公告')
    }]);
ymb.controller('ward', ['$scope', 'WeChat', 'WecHat','$ionicModal','$stateParams','$http','$state','$ionicPopup',
    function ($scope, WeChat, WecHat,$ionicModal,$stateParams,$http,$state,$ionicPopup) {
        WeChat.WxData();
        WecHat.inData('奖励说明');
        //打开模态框
        $ionicModal.fromTemplateUrl('./shop/activityrule.html', {
            scope: $scope,//modal的作用域
            animation: 'slide-in-up',//modal, 进入的动画
            focusFirstInput:true,//是否自动对焦显示模态的第一个输入。只会在iOS上显示键盘，强制键盘在Android上显示，请使用Ionic键盘插件.插件地址在代码片段下面。默认值：false
            backdropClickToClose:false,//是否关闭点击背景幕的模式。默认值：true。
            hardwareBackButtonClose:false//使用Android和类似设备上的硬件返回按钮可以关闭模​​态。默认值：true。
        }).then(function(modal) {
            $scope.modal = modal;//把引入的modal赋值给当前作用域下的变量
        });
        $scope.openModal = function() {
            //如果modal没有在显示
            $scope.modal.show();//显示modal
            $scope.close = function(){
                $scope.closeModal();
            }
        }
        $scope.closeModal = function() {
            $scope.modal.hide();//隐藏modal
        };
        //当我们用完模型时，清除它！
        //因为每次弹出modal都会在html中生成表示modal的标签，如果不手动remove，下次再弹出来modal将会又生成一个代表modal的标签。
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // 当隐藏模型时执行动作
        $scope.$on('modal.hide', function() {
            // 执行动作
        });
        $scope.actirule = function(){
            $scope.openModal();
        }

        $scope.invitefri = function(){
            $http.post(url + '/user/iflogin', {}).success(function(data) {
                if (data.code === '08') {
                    $state.go($stateParams.code);
                }
                if (data.code !== '08') {
                    $ionicPopup.alert({
                        title: '提示',
                        template: '小主，还未登录哦，请先登录再查看详情吧',
                        okText: "知道啦"
                    });
                    return
                }
            })
        }
    }]);
ymb.controller('journalism', ['$scope',
    function ($scope) {
        var cws = window.sessionStorage.getItem("href_journalism");
        var ifram_up = document.getElementById('ifram_up');
        var iframe_box_up = document.getElementById('iframe_box_up');
        ifram_up.style.height = '100%';
        iframe_box_up.style.height = '100%';
        if (navigator.userAgent.match(/iPad|iPhone/i)) {
            var _iframe_box_up = document.getElementById('iframe_box_up');
            _iframe_box_up.style.width = 100 + '%';
            _iframe_box_up.style.overflowX = 'hidden';
            _iframe_box_up.style.overflowY = 'scroll';
            _iframe_box_up.style.webkitOverflowScrolling = 'touch !important';
            _iframe_box_up.style.OverflowScrolling = 'touch !important';
            ifram_up.setAttribute('scrolling', 'yes')
        }
        ifram_up.setAttribute('src', cws)
    }]);
ymb.controller('sinaifram', ['$scope',
    function ($scope) {
        var cws_up_s = window.sessionStorage.getItem("sinahref");
        var ifram_wp = document.getElementById('ifram_wp');
        var iframe_box_wp = document.getElementById('iframe_box_wp');
        ifram_wp.style.height = '100%';
        iframe_box_wp.style.height = '100%';
        if (navigator.userAgent.match(/iPad|iPhone/i)) {
            var _iframe_box_wp = document.getElementById('iframe_box_wp');
            _iframe_box_wp.style.width = 100 + '%';
            _iframe_box_wp.style.overflowX = 'hidden';
            _iframe_box_wp.style.overflowY = 'scroll';
            _iframe_box_wp.style.webkitOverflowScrolling = 'touch !important';
            _iframe_box_wp.style.OverflowScrolling = 'touch !important';
            ifram_wp.setAttribute('scrolling', 'yes')
        }
        ifram_wp.setAttribute('src', cws_up_s)
    }]);
ymb.controller('pwdiframe', ['$scope',
    function ($scope) {
        var cws_up_i = window.sessionStorage.getItem("sinAPwdHref");
        var ifram_i = document.getElementById('ifram_i');
        var iframe_box_i = document.getElementById('iframe_box_i');
        ifram_i.style.height = '100%';
        iframe_box_i.style.height = '100%';
        if (navigator.userAgent.match(/iPad|iPhone/i)) {
            var _iframe_box_i = document.getElementById('iframe_box_i');
            _iframe_box_i.style.width = 100 + '%';
            _iframe_box_i.style.overflowX = 'hidden';
            _iframe_box_i.style.overflowY = 'scroll';
            _iframe_box_i.style.webkitOverflowScrolling = 'touch !important';
            _iframe_box_i.style.OverflowScrolling = 'touch !important';
            ifram_i.setAttribute('scrolling', 'yes')
        }
        ifram_i.setAttribute('src', cws_up_i)
    }]);
ymb.controller('binBank', ['$scope','$http','WeChat','WecHat','$interval','$state','$ionicPopup','$PlPup','$timeout',
    function ($scope,$http,WeChat,WecHat,$interval,$state,$ionicPopup,$PlPup,$timeout) {
        WeChat.WxData();
        WecHat.inData('添加银行卡');
        $scope.username="";
        $http.post(url + "/user/selecttotalmoney", {}).success(function(data) {
            $scope.phones=data.phone;
            $scope.username=data.username;
        });
        //验证银行卡号是否有效
        let binnumblurflag = false;
        $scope.binnumblur = function(){
            if($scope.cardnumber !== ""){
                $http.get("https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo="+$scope.cardnumber+"&cardBinCheck=true",{}).success(function(data){
                    if(data.cardType == "CC"){
                        $ionicPopup.alert({
                            title: '提示',
                            template: '暂时不支持信用卡的绑定，请使用其它储蓄卡',
                            okText: "知道了"
                        });
                        return;
                    }else{
                        if(data.validated == true){
                            $scope.bank = data;
                            binnumblurflag = true;
                            $http.get("./js/bankname.json").success(function(data){
                                $scope.bankname = data[$scope.bank.bank];
                            })
                            return;
                        }else{
                            var myPopup = $ionicPopup.alert({
                                title: '提示',
                                template: "您输入的银行卡号有误",
                                buttons:[]
                            })
                            $timeout.cancel($scope.timer);
                            $scope.timer = $timeout(function() {
                                myPopup.close(); //由于某种原因3秒后关闭弹出
                                $scope.cardnumber = "";
                                $timeout.cancel($scope.timer);
                            }, 2000);

                        }
                    }
                });
            }

        }


        $scope.$on('$ionicView.beforeEnter',
            function() {
                $http.post(url + "/user/selecttotalmoney", {}).success(function(data) {
                    $scope.phones=data.phone;
                    $scope.username=data.username;
                });
            });
        $scope.Obtain = '发送验证码';
        $scope.nodeBa = 1;
        $scope.hash = '';
        $scope.tamp = '';
        $scope.sterCode = '';
        $scope.referees='';
        $scope.cation = '';
        $scope.pwDStEr = '';
        $scope.NewPwDStEr = '';
        $scope.Send_out = function() {
            $scope.disabledS = true;
            $scope.TimeS = 60;
            $scope.Obtain = 60 + 'S';
            $scope.nodeBa = 2;
            $scope.timerI = $interval(function() {
                    $scope.TimeS--;
                    $scope.Obtain = $scope.TimeS + 'S';
                    if ($scope.TimeS === 0) {
                        $scope.nodeBa = 1;
                        $scope.Obtain = '发送验证码';
                        $interval.cancel($scope.timerI);
                        $scope.disabledS = false;
                        return
                    }
                },
                1000);
            $http.post(url + '/user/sendSMS', {
                smstype: "bankcark"
            }).success(function(data) {
                $scope.hash = data.hash;
                $scope.tamp = data.tamp
            })
        };
        //添加银行卡
        //短信验证码初始化
        $scope.msgNum="";
        //银行卡号
        $scope.cardnumber="";
        //银行名称
        $scope.bankname="";
        //银行支行
        $scope.banksub="";
        $scope.addcard = function(){
            if(binnumblurflag == false){
                $PlPup.$model("您输入的银行卡号不正确");
                return;
            }
            if($scope.banksub==""){
                $PlPup.$model("请输入银行支行");
                return;
            }
            if($scope.msgNum==""){
                $PlPup.$model("请输入验证码");
                return;
            }
            $http.post(url + "/user/setBankCard", {
                username:$scope.username,
                bankname: $scope.bankname,
                banksub: $scope.banksub,
                banktype:$scope.bank.cardType,
                province: "",
                cardnumber:$scope.cardnumber,
                city:"",
                hash:$scope.hash,
                tamp:$scope.tamp,
                msgNum:$scope.msgNum
            }).success(function(data) {
                if(data.code=="00"){
                    $ionicPopup.alert({
                        title: '提示',
                        template: data.data,
                        okText: '确定'
                    }).then(function(){
                        window.history.go(-1)
                    });
                    return;
                }
                $PlPup.$model(data.data);
            });
        }
    }]);
ymb.controller('removeBank', ['$scope','$http','WeChat','WecHat','$interval','$state','$ionicPopup','$PlPup',
    function ($scope,$http,WeChat,WecHat,$interval,$state,$ionicPopup,$PlPup) {
        WeChat.WxData();
        WecHat.inData('解绑银行卡');
        $scope.Obtain = '发送验证码';
        $scope.nodeBa = 1;
        $scope.hash = '';
        $scope.tamp = '';
        $scope.sterCode = '';
        $scope.referees='';
        $scope.cation = '';
        $scope.pwDStEr = '';
        $scope.NewPwDStEr = '';
        $scope.Send_out = function() {
            $scope.disabledS = true;
            $scope.TimeS = 60;
            $scope.Obtain = 60 + 'S';
            $scope.nodeBa = 2;
            $scope.timerI = $interval(function() {
                    $scope.TimeS--;
                    $scope.Obtain = $scope.TimeS + 'S';
                    if ($scope.TimeS === 0) {
                        $scope.nodeBa = 1;
                        $scope.Obtain = '发送验证码';
                        $interval.cancel($scope.timerI);
                        $scope.disabledS = false;
                        return
                    }
                },
                1000);
            $http.post(url + '/user/sendSMS', {
                smstype: "jiebang"
            }).success(function(data) {
                if(data.code=="-1"){
                   return;
                }
                $scope.hash = data.hash;
                $scope.tamp = data.tamp
            })
        };
        $scope.Send_out();
        //短信验证码初始化
        $scope.msgNum="";
        $scope.removecard = function(){
            if($scope.msgNum==""){
                $PlPup.$model("请输入验证码");
                return;
            }
            $http.post(url + "/user/delBankCard", {
                cardid:window.sessionStorage.getItem("bankId"),
                hash:$scope.hash,
                tamp:$scope.tamp,
                msgNum:$scope.msgNum
            }).success(function(data) {
                if(data.code=="00"){
                    $ionicPopup.alert({
                        title: '提示',
                        template: data.data,
                        okText: '确定'
                    }).then(function(){
                        window.history.go(-1)
                    });
                    return;
                }
                $PlPup.$model(data.data);
            });
        }
    }]);
ymb.controller('playiframe', ['$scope',
    function () {
        var cws_up_s = window.sessionStorage.getItem("playiframe");
        var ifram_s = document.getElementById('ifram_s');
        var iframe_box_s = document.getElementById('iframe_box_s');
        ifram_s.style.height = '100%';
        iframe_box_s.style.height = '100%';
        if (navigator.userAgent.match(/iPad|iPhone/i)) {
            var _iframe_box_s = document.getElementById('iframe_box_s');
            _iframe_box_s.style.width = 100 + '%';
            _iframe_box_s.style.overflowX = 'hidden';
            _iframe_box_s.style.overflowY = 'scroll';
            _iframe_box_s.style.webkitOverflowScrolling = 'touch !important';
            _iframe_box_s.style.OverflowScrolling = 'touch !important';
            ifram_s.setAttribute('scrolling', 'yes')
        }
        ifram_s.setAttribute('src', cws_up_s)
    }]);
ymb.controller('immedplay', ['$scope',
    function () {
        var cws_up_m = window.sessionStorage.getItem("immedplay");
        var ifram_m = document.getElementById('ifram_m');
        var iframe_box_m = document.getElementById('iframe_box_m');
        ifram_m.style.height = '100%';
        iframe_box_m.style.height = '100%';
        if (navigator.userAgent.match(/iPad|iPhone/i)) {
            var _iframe_box_m = document.getElementById('iframe_box_m');
            _iframe_box_m.style.width = 100 + '%';
            _iframe_box_m.style.overflowX = 'hidden';
            _iframe_box_m.style.overflowY = 'scroll';
            _iframe_box_m.style.webkitOverflowScrolling = 'touch !important';
            _iframe_box_m.style.OverflowScrolling = 'touch !important';
            ifram_m.setAttribute('scrolling', 'yes')
        }
        ifram_m.setAttribute('src', cws_up_m)
    }]);
ymb.controller('agent', ['$scope',
    function () {
        var cws_up_op = window.sessionStorage.getItem("agent");
        var ifram_op = document.getElementById('ifram_op');
        var iframe_box_op = document.getElementById('iframe_box_op');
        ifram_op.style.height = '100%';
        iframe_box_op.style.height = '100%';
        if (navigator.userAgent.match(/iPad|iPhone/i)) {
            var _iframe_box_op = document.getElementById('iframe_box_op');
            _iframe_box_op.style.width = 100 + '%';
            _iframe_box_op.style.overflowX = 'hidden';
            _iframe_box_op.style.overflowY = 'scroll';
            _iframe_box_op.style.webkitOverflowScrolling = 'touch !important';
            _iframe_box_op.style.OverflowScrolling = 'touch !important';
            ifram_op.setAttribute('scrolling', 'yes')
        }
        ifram_op.setAttribute('src', cws_up_op)
    }]);
//处理日期
function getNewTime(startTime,days){
    var rDate = new Date(startTime);
    rDate.setDate(rDate.getDate() +days );
    var year = rDate.getFullYear();
    var month = rDate.getMonth()+1;
    if(month<10) month = "0"+month;
    var date = rDate.getDate();
    if(date < 10) date = "0"+date;
    return year + "-" + month + "-" + date;
}
function generateMixed(n) {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var res = "";
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random()*35);
        res += chars[id];
    }
    return res;

}
