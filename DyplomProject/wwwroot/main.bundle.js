webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Models/Account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Country__ = __webpack_require__("../../../../../src/app/Models/Country.ts");

var Account = /** @class */ (function () {
    function Account() {
        this.country = new __WEBPACK_IMPORTED_MODULE_0__Country__["a" /* Country */]();
    }
    return Account;
}());

var User = /** @class */ (function () {
    function User() {
        this.country = new __WEBPACK_IMPORTED_MODULE_0__Country__["a" /* Country */]();
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/Models/Country.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "../../../../../src/app/Models/Message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(getterId) {
        this.getterId = getterId;
    }
    Message.ConvertToMessage = function (object) {
        var message = new Message(object.GetterId);
        message.messageId = object.MessageId;
        message.text = object.Text;
        message.sendTime = object.SendTime;
        message.readTime = object.ReadTime;
        message.senderId = object.SenderId;
        return message;
    };
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/Models/Post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "../../../../../src/app/Models/SearchModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Country__ = __webpack_require__("../../../../../src/app/Models/Country.ts");

var SearchModel = /** @class */ (function () {
    function SearchModel() {
        this.searchString = '';
        this.sex = 'All';
        this.country = new __WEBPACK_IMPORTED_MODULE_0__Country__["a" /* Country */]();
        this.country.title = 'All';
    }
    return SearchModel;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row col-12\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Hello, world!</h1>\n    <p class=\"lead\">This is a simple web-application, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n    <hr class=\"my-4\">\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n    </p>\n  </div>\n</div> -->\n<div class=\"row\">\n  <div class=\"col-6\">\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"loginAccount()\">\n      <div>\n        <div class=\"form-label-group\">\n          <label for=\"login\">Login</label>\n          <input [(ngModel)]=\"account.login\" #login=\"ngModel\" type=\"text\" class=\"form-control placeholder-shown\" name=\"login\" id=\"login\" placeholder=\"Login\"\n            required autofocus autocomplete=\"off\" />\n          <small id=\"loginHelp\" class=\"form-text text-muted\">We'll never share your information with anyone else.</small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input [(ngModel)]=\"account.password\" #password=\"ngModel\" type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"\n            placeholder=\"Password\" required />\n        </div>\n\n        <div class=\"form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n          <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n        </div>\n\n        <input [disabled]=\"!loginForm.form.valid\" type=\"submit\" style=\"float: right; margin-left: 10px;\" class=\"btn btn-success\"\n          value=\"Sign in\" />\n      </div>\n    </form>\n  </div>\n  <div class=\"col-6\">\n    <app-registration></app-registration>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_Account__ = __webpack_require__("../../../../../src/app/Models/Account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authorization_service__ = __webpack_require__("../../../../../src/app/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = /** @class */ (function () {
    function AccountComponent(location, router, authorizationService) {
        this.location = location;
        this.router = router;
        this.authorizationService = authorizationService;
        this.account = new __WEBPACK_IMPORTED_MODULE_1__Models_Account__["a" /* Account */]();
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.loginAccount = function () {
        var _this = this;
        this.authorizationService.loginAccount(this.account).subscribe(function (data) {
            if (data !== null) {
                _this.account = data;
                _this.router.navigateByUrl('UserPage');
            }
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__authorization_service__["a" /* AuthorizationService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_page_user_page_component__ = __webpack_require__("../../../../../src/app/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_dialogs_component__ = __webpack_require__("../../../../../src/app/dialogs/dialogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_search_user_search_component__ = __webpack_require__("../../../../../src/app/user-search/user-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/Account', pathMatch: 'full' },
    { path: 'Account', component: __WEBPACK_IMPORTED_MODULE_2__account_account_component__["a" /* AccountComponent */] },
    { path: 'UserPage', component: __WEBPACK_IMPORTED_MODULE_3__user_page_user_page_component__["a" /* UserPageComponent */] },
    { path: 'UserPage/:id', component: __WEBPACK_IMPORTED_MODULE_3__user_page_user_page_component__["a" /* UserPageComponent */] },
    { path: 'Registration', component: __WEBPACK_IMPORTED_MODULE_4__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'Dialogs', component: __WEBPACK_IMPORTED_MODULE_5__dialogs_dialogs_component__["a" /* DialogsComponent */] },
    { path: 'Dialogs/:id', component: __WEBPACK_IMPORTED_MODULE_5__dialogs_dialogs_component__["a" /* DialogsComponent */] },
    { path: 'Search', component: __WEBPACK_IMPORTED_MODULE_6__user_search_user_search_component__["a" /* UserSearchComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <app-navigation></app-navigation>\n\n  <br />\n  \n  <router-outlet></router-outlet>\n  \n  <hr />\n  \n  <div align=\"right\">David Olejnik <a href=\"mailto:davydon@me.com\"><span class=\"glyphicon glyphicon-pencil\"></span></a> &copy; 2018</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authorization_service__ = __webpack_require__("../../../../../src/app/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_page_user_page_component__ = __webpack_require__("../../../../../src/app/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_service__ = __webpack_require__("../../../../../src/app/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manage_service__ = __webpack_require__("../../../../../src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialogs_dialogs_component__ = __webpack_require__("../../../../../src/app/dialogs/dialogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_search_user_search_component__ = __webpack_require__("../../../../../src/app/user-search/user-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__countries_service__ = __webpack_require__("../../../../../src/app/countries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__posts_service__ = __webpack_require__("../../../../../src/app/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__web_socket_state_pipe__ = __webpack_require__("../../../../../src/app/web-socket-state.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_page_user_page_component__["a" /* UserPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dialogs_dialogs_component__["a" /* DialogsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_search_user_search_component__["a" /* UserSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__web_socket_state_pipe__["a" /* WebSocketStatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__authorization_service__["a" /* AuthorizationService */],
                __WEBPACK_IMPORTED_MODULE_10__registration_service__["a" /* RegistrationService */],
                __WEBPACK_IMPORTED_MODULE_12__manage_service__["a" /* ManageService */],
                __WEBPACK_IMPORTED_MODULE_14__users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_17__countries_service__["a" /* CountriesService */],
                __WEBPACK_IMPORTED_MODULE_18__posts_service__["a" /* PostsService */],
                __WEBPACK_IMPORTED_MODULE_20__messages_service__["a" /* MessagesService */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_cookie_services_cookies_service__["CookieService"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizationService = /** @class */ (function () {
    function AuthorizationService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    AuthorizationService.prototype.loginAccount = function (account) {
        var body = { login: account.login, password: account.password };
        return this.http.post('/api/Accounts/Login', body);
    };
    AuthorizationService.prototype.getAccount = function (id) {
        return this.http.get('/api/accounts/getAccount' + (id === null ? '' : '?id=' + id));
    };
    AuthorizationService.prototype.signOut = function () {
        this.cookieService.remove('AccountId');
        this.http.delete('/api/accounts/signOut');
    };
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "../../../../../src/app/countries.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountriesService = /** @class */ (function () {
    function CountriesService(http) {
        this.http = http;
    }
    CountriesService.prototype.getCountry = function (id) {
        return this.http.get('/api/Countries/GetCountry?Id=' + id);
    };
    CountriesService.prototype.getCountries = function () {
        return this.http.get('/api/Countries/GetCountries');
    };
    CountriesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CountriesService);
    return CountriesService;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/dialogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n    background-color: rgb(147, 196, 185) !important;\n    color: white;\n}\n\n/* Messages */\n\n.message-block {\n    margin-bottom: 10px;\n}\n\n.message-block span {\n    max-width: 60%;\n    word-wrap: break-word;\n    display: inline-block;\n    padding: 7px 10px;\n    text-align: left;\n    border-radius: 10px;\n}\n\n.message-block.text-left span {\n    background-color: azure;\n}\n\n.message-block.text-right span {\n    background-color: azure;\n}\n\n.isnt-readed {\n    background-color: rgba(158, 154, 154, 0.308);\n}\n\n#Messages {\n    height: 70vh;\n}\n\n#Users {\n    max-height: 100%;\n    overflow-y: scroll;\n    border: 1px solid rgba(42, 63, 61, 0.13);\n}\n\n#messagesBody {\n    max-height: 100%;\n    overflow-y: scroll;\n    border: 1px solid rgba(183, 255, 248, 0.253);\n}\n\n.sendMessageForm .form-group {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.main-form {\n    border-top: 1px solid #f6f6f6;\n    margin-top: 20px;\n    padding-top: 10px;\n}\n\n.chat-input {\n    position: relative;\n}\n\n.send-custom {\n    opacity: 0;\n    width: 1px;\n    height: 1px;\n    pointer-events: none;\n    position: absolute;\n}\n\n.photo-send {\n    position: absolute;\n    bottom: 0;\n    right: 90px;\n}\n\n.voice-send {\n    position: absolute;\n    bottom: 0;\n    right: 50px;\n}\n\n.attachment-send {\n    position: absolute;\n    bottom: 0;\n    right: 10px;\n}\n\n.photo-send .chat-photo-image {\n    background: url(\"/assets/images/messages/photo-camera.png\") 50% no-repeat;\n    display: block;\n    width: 24px;\n    height: 24px;\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n.voice-send .voice-send-image {\n    background: url(\"/assets/images/messages/speaker.png\") 50% no-repeat;\n    display: block;\n    width: 24px;\n    height: 24px;\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n.attachment-send .attachment-send-image {\n    background: url(\"/assets/images/messages/upload-1.png\") 50% no-repeat;\n    display: block;\n    width: 24px;\n    height: 24px;\n    opacity: 0.7;\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/dialogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-right\" [class]=\"(ws.readyState | webSocketState).cssclass\">{{ (ws.readyState | webSocketState).status }}</div>\n<hr />\n<div class=\"row\">\n  <div id=\"Users\" class=\"col-4\">\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td [class.selected]=\"this.selectedUser === user\" (click)=\"onSelect(user)\">\n            <img width=\"20%\" class=\"img-fluid rounded-circle\" [src]=\"user.hasPhoto ? '/api/Accounts/GetPhoto?Id=' + user.userId :\n                  '/assets/images/default-avatar.png'\" style=\"display: inline-block;\" />\n            <div style=\"display: inline-block\">{{ user.name + ' ' + user.surname }}\n              <span class=\"badge badge-dark\">{{ user.unreadedMessagesCount }}</span>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"selectedUser && message\" class=\"col-8\">\n    <div>\n      <div>\n        <div class=\"form-horizontal sendMessageForm\">\n          <div class=\"form-group\">\n            <div class=\"chat-input\">\n              <div>\n                <div class=\"row\">\n                  <div class=\"col-11\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"message.text\" placeholder=\"Message\" autocomplete=\"off\" />\n\n                    <!-- <div class=\"photo-send\">\n                      <label for=\"Image\" class=\"chat-photo-image\"></label>\n                      <input id=\"Image\" name=\"Image\" class=\"send-custom\" type=\"file\" accept=\"image/*\" />\n                    </div>\n                    <div class=\"voice-send\">\n                      <label for=\"Voice\" class=\"voice-send-image\"></label>\n                      <input id=\"Voice\" name=\"Voice\" class=\"send-custom\" type=\"file\" accept=\"audio/*\" />\n                    </div>\n                    <div class=\"attachment-send\">\n                      <label for=\"Attachment\" class=\"attachment-send-image\"></label>\n                      <input id=\"Attachment\" name=\"Attachment\" class=\"send-custom\" type=\"file\" />\n                    </div> -->\n                  </div>\n                  <div class=\"col-1\">\n                    <button class=\"btn btn-success\" (click)=\"sendMessage();\">Send</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"Messages\">\n      <div id=\"messagesBody\" (scroll)=\"loadMore($event);\">\n        <div class=\"message-block\" [class.isnt-readed]=\"message.readTime === null\" [class.text-right]=\"user?.accountId === message.senderId\"\n          [class.text-left]=\"user?.accountId != message.senderId\" *ngFor=\"let message of messages\" data-toggle=\"tooltip\" [title]='message.sendTime'>\n          <span>\n            {{ message.text }}\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dialogs/dialogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_Message__ = __webpack_require__("../../../../../src/app/Models/Message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authorization_service__ = __webpack_require__("../../../../../src/app/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_SearchModel__ = __webpack_require__("../../../../../src/app/Models/SearchModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DialogsComponent = /** @class */ (function () {
    function DialogsComponent(usersService, authorizationService, messagesService, route, location) {
        this.usersService = usersService;
        this.authorizationService = authorizationService;
        this.messagesService = messagesService;
        this.route = route;
        this.location = location;
        this.selectedUser = null;
        this.ws = new WebSocket('ws://localhost:5000/ws');
        this.isLoadedNewMessages = true;
        this.messages = new Array();
        this.ws.onmessage = this.OnWebSocketMessageEvent();
    }
    DialogsComponent.prototype.OnWebSocketMessageEvent = function () {
        var _this = this;
        return function (response) {
            var receivedMessageObject = JSON.parse(response.data);
            var receivedMessage = __WEBPACK_IMPORTED_MODULE_2__Models_Message__["a" /* Message */].ConvertToMessage(receivedMessageObject);
            if (_this.user.accountId !== receivedMessage.senderId) {
                _this.messages.unshift(receivedMessage);
            }
        };
    };
    DialogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .authorizationService
            .getAccount()
            .subscribe(function (data) { return _this.user = data; });
        this
            .usersService
            .getUsers(new __WEBPACK_IMPORTED_MODULE_4__Models_SearchModel__["a" /* SearchModel */]())
            .subscribe(function (data) {
            _this.users = data;
            _this.users.forEach(function (x) {
                return _this.messagesService.getUnreadedMessagesCountFromUser(x)
                    .subscribe(function (messagesCount) { return x.unreadedMessagesCount = messagesCount; });
            });
            var id = +_this.route.snapshot.paramMap.get('id');
            if (id) {
                _this.users.forEach(function (element) {
                    if (element.userId === id) {
                        _this.onSelect(element);
                    }
                });
            }
        });
    };
    DialogsComponent.prototype.onSelect = function (user) {
        var _this = this;
        this.selectedUser = user;
        this
            .usersService
            .getDialog(this.selectedUser, 0)
            .subscribe(function (data) {
            _this.messages = data;
            _this.message = new __WEBPACK_IMPORTED_MODULE_2__Models_Message__["a" /* Message */](_this.selectedUser.userId);
            _this.page = 0;
        });
    };
    DialogsComponent.prototype.sendMessage = function () {
        var _this = this;
        this
            .usersService
            .sendMessage(this.message)
            .subscribe(function (data) {
            _this.ws.send(JSON.stringify(_this.message));
            _this.messages.unshift(data);
            _this.message = new __WEBPACK_IMPORTED_MODULE_2__Models_Message__["a" /* Message */](_this.selectedUser.userId);
        });
    };
    DialogsComponent.prototype.CloseWebSocket = function () {
        this.ws.close();
    };
    DialogsComponent.prototype.loadMore = function (event) {
        var _this = this;
        if (this.isLoadedNewMessages) {
            var scrollLength = event.srcElement.scrollTop + event.srcElement.parentElement.offsetHeight - 2;
            if (scrollLength >= event.srcElement.scrollHeight) {
                this.isLoadedNewMessages = false;
                // Load new messages
                this.page = this.page + 1;
                this.usersService.getDialog(this.selectedUser, this.page).subscribe(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        _this.messages.push(data[i]);
                    }
                    _this.isLoadedNewMessages = true;
                });
            }
        }
    };
    DialogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialogs',
            template: __webpack_require__("../../../../../src/app/dialogs/dialogs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/dialogs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_7__messages_service__["a" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]])
    ], DialogsComponent);
    return DialogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageService = /** @class */ (function () {
    function ManageService(http) {
        this.http = http;
    }
    ManageService.prototype.changePhoto = function (event) {
        var fileList = event.target.files;
        var file = fileList[0];
        var formData = new FormData();
        formData.append('Photo', file, file.name);
        return this.http.post('/api/Accounts/changePhoto', formData);
    };
    ManageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ManageService);
    return ManageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesService = /** @class */ (function () {
    function MessagesService(http) {
        this.http = http;
    }
    MessagesService.prototype.getUnreadedMessagesCount = function () {
        return this.http.get('/api/Messages/GetUnreadedMessagesCount');
    };
    MessagesService.prototype.getUnreadedMessagesCountFromUser = function (user) {
        return this.http.get('/api/Messages/GetUnreadedMessagesCountFromUser?id=' + user.userId);
    };
    MessagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/UserPage\">Languar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [class.active]=\"router.url==='/UserPage'\" routerLink=\"/UserPage\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [class.active]=\"router.url==='/Dialogs'\" routerLink=\"/Dialogs\">Dialogs</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" [routerLink]=\"router.url\">Smart Search</a>\n      </li>\n    </ul>\n\n    <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Dropdown\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n      </div>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getPosts = function (user) {
        return this.http.get('/api/Posts/GetPosts' + (user === null ? '' : '?id=' + user.accountId));
    };
    PostsService.prototype.sendPost = function (post) {
        var body = { content: post.content };
        return this.http.post('/api/Posts/SendPost', body);
    };
    PostsService.prototype.deletePost = function (post) {
        return this.http.delete('/api/Posts/DeletePost?Id=' + post.postId);
    };
    PostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "../../../../../src/app/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.registerAccount = function (account) {
        var body = { login: account.login,
            password: account.password,
            name: account.name,
            surname: account.surname,
            email: account.email,
            countryId: account.countryId
        };
        return this.http.post('/api/accounts/register', body);
    };
    RegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div [ngClass]=\"['alert', status == 'OK' ? 'alert-info' : 'aler-danger']\" *ngIf=\"status\">{{ status }}</div>\n\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"registerSubmit()\">\n    <div>\n      <div class=\"form-group\">\n        <label for=\"login\">Login: </label>\n        <input [(ngModel)]=\"account.login\" #login=\"ngModel\" type=\"text\" class=\"form-control\" name=\"login\" id=\"login\" placeholder=\"Login\"\n          required />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password: </label>\n        <input [(ngModel)]=\"account.password\" #password=\"ngModel\" type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"\n          placeholder=\"Password\" required />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"login\">Name: </label>\n        <input [(ngModel)]=\"account.name\" #name=\"ngModel\" type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Name\"\n          required />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"login\">Surname: </label>\n        <input [(ngModel)]=\"account.surname\" #surname=\"ngModel\" type=\"text\" class=\"form-control\" name=\"surname\" id=\"surname\" placeholder=\"Surname\"\n          required />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"login\">Email: </label>\n        <input [(ngModel)]=\"account.email\" #email=\"ngModel\" type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" id=\"email\"\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"login\">Country: </label>\n        <select [(ngModel)]=\"account.countryId\" #email=\"ngModel\" class=\"form-control\" name=\"country\" id=\"country\">\n          <option *ngFor=\"let country of countries\" [value]=\"country.countryId\">{{ country.title }}</option>\n        </select>\n      </div>\n\n      <input [disabled]=\"!loginForm.form.valid\" type=\"submit\" style=\"float: right; margin-left: 10px;\" class=\"btn btn-success\"\n        value=\"Sign up\" />\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_Account__ = __webpack_require__("../../../../../src/app/Models/Account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_service__ = __webpack_require__("../../../../../src/app/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__countries_service__ = __webpack_require__("../../../../../src/app/countries.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(registrationService, countriesService) {
        var _this = this;
        this.registrationService = registrationService;
        this.countriesService = countriesService;
        this.account = new __WEBPACK_IMPORTED_MODULE_1__Models_Account__["a" /* Account */]();
        this.countriesService.getCountries().subscribe(function (data) { return _this.countries = data; });
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.registerSubmit = function () {
        var _this = this;
        this.registrationService.registerAccount(this.account).subscribe(function (data) { return _this.status = data.response; });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__registration_service__["a" /* RegistrationService */],
            __WEBPACK_IMPORTED_MODULE_3__countries_service__["a" /* CountriesService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-page/user-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-page/user-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header text-white bg-primary\">\n    <h4 style=\"display: inline-block;\">Details</h4>\n    <button style=\"float: right;\" class=\"btn btn-danger\" (click)=\"signOut();\">Sign out</button>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div *ngIf=\"account\" class=\"col-3\">\n        <div class=\"card\">\n          <div align=\"center\">\n            <div class=\"image-upload\">\n              <label for=\"file-input\">\n                <img class=\"img-fluid\" [src]=\"account.hasPhoto ? '/api/Accounts/GetPhoto' :\n                  '/assets/images/default-avatar.png'\" />\n              </label>\n\n              <input *ngIf=\"id === 0\" style=\"display: none;\" id=\"file-input\" type=\"file\" (change)=\"fileChange($event)\" accept=\".png,.jpg\"\n              />\n            </div>\n          </div>\n\n          <br />\n\n          <dl>\n            <dt>Name: </dt>\n            <dd>{{ account.name }}</dd>\n            <dt>Surname: </dt>\n            <dd>{{ account.surname }}</dd>\n            <dt>Email: </dt>\n            <dd>{{ account.email }}</dd>\n            <dt>Country: </dt>\n            <dd>{{ account.country?.title }}</dd>\n          </dl>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"card card-default\">\n          <div class=\"card-body\">\n            <div contenteditable=\"true\" style=\"display: inline-block; width: 80%;\">\n              {{ userStatus }}\n            </div>\n            <button style=\"float: right;\" type=\"button\" (click)=\"saveStatus();\" class=\"btn btn-default btn-sm\">\n              <span class=\"glyphicon glyphicon-edit\"></span> Save\n            </button>\n          </div>\n        </div>\n        <div id=\"Notifications\">\n          <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n        </div>\n        <hr />\n        <div *ngIf=\"id === 0\">\n          <div class=\"row\">\n            <div class=\"col-9\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newPost.content\" #post=\"ngModel\" id=\"post\" name=\"post\" placeholder=\"What's new?\"\n                autocomplete=\"off\" />\n            </div>\n            <div class=\"col-3\">\n              <button (click)=\"sendPost();\" class=\"btn btn-outline-primary\" style=\"float: right;\">Send</button>\n            </div>\n          </div>\n        </div>\n        <br />\n        <div class=\"list-group\">\n          <a *ngFor=\"let post of account?.Posts\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <h5 class=\"mb-1\"></h5>\n              <small>{{ post.createdTime }}\n                <div *ngIf=\"id === 0\" class=\"btn btn-danger btn-sm\" (click)=\"deletePost(post);\">X</div>\n              </small>\n            </div>\n            <p class=\"mb-1\">{{ post.content }}</p>\n            <small></small>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-3\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item list-group-item-action\">\n            <a class=\"btn\" routerLink=\"/Search\">Search user</a>\n          </li>\n          <li class=\"list-group-item list-group-item-action\">\n            <a class=\"btn\" routerLink=\"/Dialogs\">Dialogs <span class=\"badge badge-dark\">{{ unreadedMessagesCount }}</span></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-page/user-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authorization_service__ = __webpack_require__("../../../../../src/app/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_service__ = __webpack_require__("../../../../../src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__countries_service__ = __webpack_require__("../../../../../src/app/countries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__posts_service__ = __webpack_require__("../../../../../src/app/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_Post__ = __webpack_require__("../../../../../src/app/Models/Post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(authorizationService, manageService, countriesService, postsService, messagesService, router, route) {
        var _this = this;
        this.authorizationService = authorizationService;
        this.manageService = manageService;
        this.countriesService = countriesService;
        this.postsService = postsService;
        this.messagesService = messagesService;
        this.router = router;
        this.route = route;
        this.page = 0;
        this.isLoadedNewPosts = false;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.authorizationService.getAccount(this.id).subscribe(function (data) {
            _this.account = data;
            _this.countriesService.getCountry(_this.account.countryId).subscribe(function (country) { return _this.account.country = country; });
            _this.postsService.getPosts(_this.account).subscribe(function (Posts) { return _this.account.Posts = Posts; });
        });
        this.messagesService.getUnreadedMessagesCount().subscribe(function (data) { return _this.unreadedMessagesCount = data; });
        this.userStatus = 'User status';
        this.newPost = new __WEBPACK_IMPORTED_MODULE_6__Models_Post__["a" /* Post */]();
    }
    UserPageComponent.prototype.ngOnInit = function () {
    };
    UserPageComponent.prototype.signOut = function () {
        this.authorizationService.signOut();
        document.cookie = '';
        this.router.navigateByUrl('Account');
    };
    UserPageComponent.prototype.fileChange = function (event) {
        this
            .manageService
            .changePhoto(event)
            .subscribe(function (data) { return window.location.reload(); });
    };
    UserPageComponent.prototype.saveStatus = function () {
        if (this.userStatus === 'aa') {
            this.userStatus = 'b';
        }
    };
    UserPageComponent.prototype.sendPost = function () {
        var _this = this;
        this.postsService.sendPost(this.newPost).subscribe(function (data) {
            _this.account.Posts.unshift(data);
            _this.newPost = new __WEBPACK_IMPORTED_MODULE_6__Models_Post__["a" /* Post */]();
        });
    };
    UserPageComponent.prototype.deletePost = function (post) {
        this.postsService.deletePost(post).subscribe();
        this.account.Posts = this.account.Posts.filter(function (x) { return x.postId !== post.postId; });
    };
    UserPageComponent.prototype.loadMore = function (event) {
        var _this = this;
        if (this.isLoadedNewPosts) {
            var scrollLength = event.srcElement.scrollTop + event.srcElement.parentElement.offsetHeight - 2;
            if (scrollLength >= event.srcElement.scrollHeight) {
                this.isLoadedNewPosts = false;
                // Load new messages
                this.page = this.page + 1;
                this.postsService.getPosts(this.account).subscribe(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        _this.account.Posts.push(data[i]);
                    }
                    _this.isLoadedNewPosts = true;
                });
            }
        }
    };
    UserPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__("../../../../../src/app/user-page/user-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-page/user-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authorization_service__["a" /* AuthorizationService */],
            __WEBPACK_IMPORTED_MODULE_3__manage_service__["a" /* ManageService */],
            __WEBPACK_IMPORTED_MODULE_4__countries_service__["a" /* CountriesService */],
            __WEBPACK_IMPORTED_MODULE_5__posts_service__["a" /* PostsService */],
            __WEBPACK_IMPORTED_MODULE_7__messages_service__["a" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-search/user-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-search/user-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header bg-light\">\n    <h4>Search</h4>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <form>\n          <div class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <div class=\"col-10\">\n                <input type=\"text\" [(ngModel)]=\"filter.searchString\" (input)=\"onFilterChange();\" name=\"searchString\" class=\"form-control\"\n                  placeholder=\"Search\" autocomplete=\"off\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-10\">\n                <select [(ngModel)]=\"filter.country.countryId\" (change)=\"onFilterChange();\" name=\"country\" class=\"form-control\">\n                  <option value=\"0\">All</option>\n                  <option *ngFor=\"let country of countries\" [value]=\"country.countryId\">{{ country.title }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-8 table-responsive\">\n        <table class=\"table table-hover\" (scroll)=\"scrolling();\">\n          <thead>\n            <tr>\n              <th style=\"text-align: center;\">\n                Image\n              </th>\n              <th style=\"text-align: center;\">\n                Username\n              </th>\n              <th style=\"text-align: center;\">\n                Country\n              </th>\n            </tr>\n          </thead>\n\n          <tbody id=\"UpdateTargetId\">\n            <tr *ngFor=\"let user of users\" (click)=\"selectUser(user)\" class=\"User\" data-toggle=\"modal\" data-target=\"#ModalUserInfo\">\n              <td style=\"text-align: center;\">\n                <img class=\"rounded-circle\" style=\"max-width: 120px; max-height: 120px\" [src]=\"user.hasPhoto ? '/api/Accounts/GetPhoto?Id=' + user.userId :\n            '/assets/images/default-avatar.png'\" />\n              </td>\n              <td style=\"text-align: center;\">\n                {{ user.name }} {{ user.surname }}\n              </td>\n              <td style=\"text-align: center;\">\n                {{ user.country?.title }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div id=\"ModalUserInfo\" class=\"modal fade bd-example-modal-lg\" role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <label class=\"text-info\">User Information</label>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <div class=\"row\">\n                <div align=\"center\" class=\"col-12\">\n                  <img width=\"200\" class=\"rounded\" [src]=\"selectedUser.hasPhoto ? '/api/Accounts/GetPhoto?Id=' + selectedUser.userId :\n              '/assets/images/default-avatar.png'\" />\n                  <div align=\"center\" class=\"col-12\">\n                    <dl class=\"\">\n                      <dt>\n                        Name:\n                      </dt>\n\n                      <dd>\n                        {{ selectedUser.name }} {{ selectedUser.surname }}\n                      </dd>\n\n                      <dt>\n                        Email:\n                      </dt>\n\n                      <dd>\n                        {{ selectedUser.email }}\n                      </dd>\n\n                      <dt>\n                        Country:\n                      </dt>\n\n                      <dd>\n                        {{ selectedUser?.country?.title }}\n                      </dd>\n\n                    </dl>\n                  </div>\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <a routerLink=\"/UserPage/{{ selectedUser.userId }}\" class=\"btn btn-light\" data-dismiss=\"modal\">View Profile</a>\n                <a routerLink=\"/Dialogs/{{ selectedUser.userId }}\" class=\"btn btn-primary\" data-dismiss=\"modal\">Send message</a>\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/user-search/user-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_SearchModel__ = __webpack_require__("../../../../../src/app/Models/SearchModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_Account__ = __webpack_require__("../../../../../src/app/Models/Account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__countries_service__ = __webpack_require__("../../../../../src/app/countries.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(usersService, countriesService) {
        var _this = this;
        this.usersService = usersService;
        this.countriesService = countriesService;
        this.filter = new __WEBPACK_IMPORTED_MODULE_1__Models_SearchModel__["a" /* SearchModel */]();
        this.status = '1';
        this.selectedUser = new __WEBPACK_IMPORTED_MODULE_3__Models_Account__["b" /* User */]();
        this.users = new Array();
        this.countriesService.getCountries().subscribe(function (data) { return _this.countries = data; });
        this.onFilterChange();
    }
    UserSearchComponent.prototype.ngOnInit = function () {
    };
    UserSearchComponent.prototype.onFilterChange = function () {
        var _this = this;
        this.usersService.getUsers(this.filter).subscribe(function (data) {
            _this.users = data;
            _this.users.forEach(function (user) {
                _this.countriesService.getCountry(user.countryId).subscribe(function (country) { return user.country = country; });
            });
        });
    };
    UserSearchComponent.prototype.scrolling = function () {
        this.status = this.status + '1';
    };
    UserSearchComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    UserSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-search',
            template: __webpack_require__("../../../../../src/app/user-search/user-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-search/user-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_4__countries_service__["a" /* CountriesService */]])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function (filter) {
        var link = '/api/users/getUsers?';
        if (filter) {
            if (filter.searchString) {
                link = link + 'searchstring=' + filter.searchString;
            }
            if (filter.country) {
                link = link + '&Country=' + filter.country.countryId;
            }
        }
        return this.http.get(link);
    };
    UsersService.prototype.getDialog = function (user, page) {
        return this
            .http
            .get('/api/users/getDialog?Id=' + user.userId + '&page=' + page);
    };
    UsersService.prototype.sendMessage = function (message) {
        var body = { GetterId: message.getterId, Text: message.text };
        return this
            .http
            .post('/api/users/sendMessage', body);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/web-socket-state.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketStatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WebSocketStatePipe = /** @class */ (function () {
    function WebSocketStatePipe() {
    }
    WebSocketStatePipe.prototype.transform = function (readyState, args) {
        switch (readyState) {
            case 0:
                return { status: 'Connecting', cssclass: 'bg-primary text-white' };
            case 1:
                return { status: 'Connected', cssclass: 'bg-success text-white' };
            case 2:
                return { status: 'Closing', cssclass: 'bg-warning text-dark' };
            default:
                return { status: 'Closed', cssclass: 'bg-danger text-dark' };
        }
    };
    WebSocketStatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'webSocketState'
        })
    ], WebSocketStatePipe);
    return WebSocketStatePipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map