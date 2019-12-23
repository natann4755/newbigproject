(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addphoto/addphoto.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addphoto/addphoto.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">add photo</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n<div class=\"example-container\">\n    <form [formGroup]=\"newphoto\">\n   \n   \n    <mat-form-field>\n      <input formControlName=\"albumId\" matInput placeholder=\"Input albumId \">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"id\" matInput placeholder=\"Input id\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"title\" matInput placeholder=\"Input title\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"url\" matInput placeholder=\"Input url\">\n    </mat-form-field> <br>\n    \n    <br>\n\n    <button (click)= \"AddItem()\" class=\"bb\" mat-button>addpost</button>\n    </form>\n    \n  \n       \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addpost/addpost.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addpost/addpost.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">add post</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n\n<div class=\"example-container\">\n    <form [formGroup]=\"newItem\"> \n                  <mat-form-field>\n      <input formControlName=\"userId\" matInput placeholder=\"Input userId \">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"id\" matInput placeholder=\"Input id\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"title\" matInput placeholder=\"Input title\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"body\" matInput placeholder=\"Input body\">\n    </mat-form-field>\n  \n    \n    <br>\n\n    <button (click)= \"AddItem()\" class=\"bb\" mat-button>addpost</button>\n  \n        </form>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addtodo/addtodo.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addtodo/addtodo.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">add todo</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n\n\n<div class=\"example-container\">\n    <form [formGroup]=\"newItem\">\n   \n    <!-- <mat-select formControlName=\"userId\" placeholder=\"Select\">\n         <mat-option  value=\"1\">user 1</mat-option>\n         <mat-option  value=\"2\">user 2</mat-option>\n         <mat-option  value=\"3\">user 3</mat-option>\n         <mat-option  value=\"4\">user 4</mat-option>\n         <mat-option  value=\"5\">user 5</mat-option>\n         <mat-option  value=\"6\">user 6</mat-option>\n         <mat-option  value=\"7\">user 7</mat-option>\n         <mat-option  value=\"8\">user 8</mat-option>\n         <mat-option  value=\"9\">user 9</mat-option>\n         <mat-option  value=\"10\">user 10</mat-option>\n                  </mat-select> <br> -->\n    <mat-form-field>\n      <input formControlName=\"userId\" matInput placeholder=\"Input userId \">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"id\" matInput placeholder=\"Input id\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"title\" matInput placeholder=\"Input title\">\n    </mat-form-field> <br>\n    <!-- <mat-form-field>\n        <input formControlName=\"body\" matInput placeholder=\"Input body\">\n    </mat-form-field> -->\n    <!-- <p><mat-checkbox  (click)=\"check()\"  class=\"example-margin\">complited</mat-checkbox></p> -->\n  \n       \n    <br>\n\n    <button (click)= \"AddItem()\" class=\"bb\" mat-button>add todo</button>\n    </form>\n    \n  \n       \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/adduser/adduser.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/additem/adduser/adduser.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">add user</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n\n\n<div class=\"example-container\">\n    <form [formGroup]=\"newuser\">\n   \n    <mat-form-field>\n      <input formControlName=\"id\" matInput placeholder=\"Input id \">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"name\" matInput placeholder=\"Input name\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"username\" matInput placeholder=\"Input username\">\n    </mat-form-field> <br>\n    <mat-form-field>\n        <input formControlName=\"email\" matInput placeholder=\"Input email\">\n    </mat-form-field>\n\n\n     <div formGroupName=\"address\">\n\n         <mat-form-field>\n            <input formControlName=\"street\" matInput placeholder=\"Input street \">\n        </mat-form-field> <br>\n        <mat-form-field>\n            <input formControlName=\"suite\" matInput placeholder=\"Input suite\">\n        </mat-form-field> <br>\n        <mat-form-field>\n            <input formControlName=\"city\" matInput placeholder=\"Input city\">\n        </mat-form-field> <br>\n        <mat-form-field>\n            <input formControlName=\"zipcode\" matInput placeholder=\"Input zipcode\">\n        </mat-form-field>\n   \n\n    </div>\n       \n    <br>\n\n    <button (click)= \"AddItem()\" class=\"bb\" mat-button>adduser</button>\n  \n</form>\n  </div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navige *ngIf=\"svslog.islog\"></app-navige>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/photo/photo.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/photo/photo.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>photo works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/post/post.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/post/post.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>post titel : {{pos.title}}</mat-card-title>\n          <mat-card-subtitle>user name : {{svsUser.findUsernamebyid(pos.userId)}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n                {{pos.body}}\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          \n        </mat-card-actions>\n      </mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/todoss/todoss.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/todoss/todoss.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title> titel : {{tod.title}}</mat-card-title>\n      <mat-card-subtitle>user name : {{svsus.findUsernamebyid(tod.userId)}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n           status :  {{tod.completed}}\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      \n    </mat-card-actions>\n  </mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/user/user.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/user/user.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title> user name : {{userr.username}}</mat-card-title>\n      <mat-card-subtitle>email : {{userr.email}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        address                <br>\n        street : {{userr.address.street}} <br>\n        suite : {{userr.address.suite}}  <br>\n        city : {{userr.address.city}} <br>\n        zipcode : {{userr.address.zipcode}} <br>   \n            \n\n    </mat-card-content>\n \n  </mat-card>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/alboms/alboms.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/alboms/alboms.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navige></app-navige>\n<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">alboms</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n  \n\n<form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n           <input (input)=\"userId = $event.target.value\" matInput placeholder=\"serch by userId\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n             <input (input)=\"id = $event.target.value\" matInput placeholder=\"serch by id\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input)=\"title = $event.target.value\" matInput placeholder=\"serch by title\" value=\"\">\n       </mat-form-field>\n       \n</form>\n\n<!-- <button (click)= \"pageAddItem()\" mat-button>addpost</button> \n\n<button (click)= \"mypost()\" mat-button>my post</button>\n\n<button (click)= \"allpost()\" mat-button>all post</button>\n\n --> \n\n<p *ngIf=\"svsus.data\" >\n<mat-accordion *ngFor = \"let alb of svsalb.data \n| async\n| pipeIncluds : 'title' : title\n| pipeshave : 'userId' : userId\n| pipeshave : 'id' : id\n\">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              albom from : {{svsus.findnamebyid(alb.userId)}}\n            </mat-panel-title>\n            <mat-panel-description>\n                albom id : {{alb.id}}\n            </mat-panel-description>\n            <mat-panel-description>\n                user name : {{svsus.findUsernamebyid(alb.userId)}}\n            </mat-panel-description>\n            <mat-panel-description>\n                albom titel : {{alb.title}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n        </mat-expansion-panel>\n        <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n                           \n         \n        </mat-expansion-panel>\n      </mat-accordion>\n    </p>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/homepage/homepage.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/homepage/homepage.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\"> wellcome to hoompage</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n\n\n\n<!-- <button (click)= \"cli()\" mat-button>to shoo 10 last posts</button>\n<div *ngIf=\"svsposts.posttt\" class=\"ul2\"> -->\n    \n    <div >\n        <h1>last 10 photos</h1>\n       \n        <ul class=\"ul1\">\n            <li class=\"li1\" *ngFor = \"let potos of svsphotos.tenPhotose\">\n               <p class=\"titel\">{{potos.id}}-{{potos.title}}</p> <br>\n                <img src=\"{{potos.url}}\"><br>\n            </li>\n        </ul>\n   \n        </div>\n\n\n\n\n    <div class=\"dss\">\n    <h1>last 10 posts</h1>\n    <p>\n        \n        <mat-accordion *ngFor = \"let pos of svsposts.tenpos\">\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Post from : {{svsus.findnamebyid(pos.userId)}}\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        post id : {{pos.id}}\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n              \n                  <card-post [pos]=\"pos\"></card-post>\n        \n        \n        \n        \n                </mat-expansion-panel>\n                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                     (closed)=\"panelOpenState = false\">\n                                   \n                 \n                </mat-expansion-panel>\n              </mat-accordion>\n            </p>\n        </div>\n            \n        \n        \n    \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/how-mny-users/how-mny-users.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/how-mny-users/how-mny-users.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <mat-icon matBadge={{count}} matBadgeColor=\"warn\">people_alt</mat-icon>\n      <span class=\"cdk-visually-hidden\">\n      </span>\n  </p>\n<!-- <div> count : {{count}} </div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"name\">\n        </mat-form-field>\n      \n        <mat-form-field class=\"example-full-width\">\n          <textarea (input)= \"userid= $event.target.value\" matInput placeholder=\"password - user id\"></textarea>\n        </mat-form-field>\n        <button (click)=\"login()\" mat-mini-fab color=\"primary\" >login</button>\n      </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navige/navige.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navige/navige.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"mat-elevation-z6\">\n    <a mat-button (click)= \"moveto('homepage')\">Home</a>\n    <a mat-button (click)= \"moveto('users')\">users</a>\n    <a mat-button (click)= \"moveto('todo')\">todo</a>\n    <a mat-button (click)= \"moveto('post')\">post</a>\n    <a mat-button (click)= \"moveto('alboms')\">alboms</a>\n    <a mat-button (click)= \"moveto('photos')\">photos</a>\n</nav>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/photos/photos.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/photos/photos.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">photot</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n<!-- \n\n\n<button (click)= \"pageAddItem()\" mat-button>addpost</button> \n\n<button (click)= \"mypost()\" mat-button>my post</button>\n\n<button (click)= \"allpost()\" mat-button>all post</button> -->\n\n\n<!--  \n<p>\n<mat-accordion *ngFor = \"let pho of svspho.data \n| async \">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n                Photo title : {{pho.title}}  \n            </mat-panel-title>\n            <mat-panel-description>\n                Photo id : {{pho.id}}  \n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <app-photo></app-photo>\n            <card-post [pos]=\"po\"></card-post> \n\n\n\n\n        </mat-expansion-panel>\n        <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n                           \n         \n        </mat-expansion-panel>\n      </mat-accordion>\n    </p>   -->\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n           <input (input)=\"albumId = $event.target.value\" matInput placeholder=\"serch by albumId\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n             <input (input)=\"id = $event.target.value\" matInput placeholder=\"serch by id\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input)=\"title = $event.target.value\" matInput placeholder=\"serch by title\" value=\"\">\n       </mat-form-field>\n      \n</form>\n\n<button (click)= \"pageAddphoto()\" mat-button>addphoto</button> \n\n\n<ul>\n    <li *ngFor = \"let pho of svspho.data \n    | async\n    | pipeIncluds : 'title' : title \n    | pipeshave : 'albumId' : albumId\n    | pipeshave : 'id' : id \n    \">\n    album id : {{pho.albumId}} <br>\n    Photo id : {{pho.id}} <br>\n    Photo title : {{pho.title}} <br>\n    <img src=\"{{pho.url}}\" > <br>\n</li>\n</ul>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/posts/posts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/posts/posts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navige></app-navige>\n<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">post</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n\n<form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n           <input (input)=\"titel = $event.target.value\" matInput placeholder=\"serch by titel\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n             <input (input)=\"body = $event.target.value\" matInput placeholder=\"serch by body\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input)=\"userid = $event.target.value\" matInput placeholder=\"serch by userid\" value=\"\">\n       </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input)=\"id = $event.target.value\" matInput placeholder=\"serch by id\" value=\"\">\n        </mat-form-field>\n</form>\n\n<button (click)= \"pageAddItem()\" mat-button>addpost</button> \n\n<button (click)= \"mypost()\" mat-button>my post</button>\n\n<button (click)= \"allpost()\" mat-button>all post</button>\n\n\n\n<p *ngIf=\"svsUser.data\" >\n<mat-accordion *ngFor = \"let po of svsposts.data | async | pipe1 : titel : body : id : userid\">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Post from : {{svsUser.findnamebyid(po.userId)}}\n            </mat-panel-title>\n            <mat-panel-description>\n                post id : {{po.id}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <card-post [pos]=\"po\"></card-post>\n\n\n\n\n        </mat-expansion-panel>\n        <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n                           \n         \n        </mat-expansion-panel>\n      </mat-accordion>\n    </p>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/todo/todo.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/todo/todo.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n        <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n            <span class=\"mat-button-wrapper\">\n            </span>\n            <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n            <div class=\"mat-button-focus-overlay\"></div>\n        </button>\n            <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">todo</h2>\n            <app-how-mny-users></app-how-mny-users>\n    </div>\n    \n    <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n               <input (input)=\"userId = $event.target.value\" matInput placeholder=\"serch by userId\" value=\"\">\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                 <input (input)=\"id = $event.target.value\" matInput placeholder=\"serch by id \" value=\"\">\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input (input)=\"title = $event.target.value\" matInput placeholder=\"serch by title\" value=\"\">\n           </mat-form-field>\n\n       \n          \n    </form>\n\n\n     <button (click)= \"pageAddItem()\" mat-button>addtodo</button> \n    \n    <button (click)= \"mypost()\" mat-button>my todo</button>\n    \n    <button (click)= \"allpost()\" mat-button>all todo</button>    \n    \n  \n    \n     <p *ngIf=\"svsus.data\" >\n    <mat-accordion *ngFor = \"let t of svsto.data \n    | async\n    | pipeIncluds : 'title' : title \n    | pipeshave : 'userId' : userId \n    | pipeshave : 'id' : id \n    \">\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  to do from : {{svsus.findnamebyid(t.userId)}}\n                </mat-panel-title>\n                <mat-panel-description>\n                    to do id : {{t.id}}\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n          \n            <app-todoss [tod]=\"t\"></app-todoss>\n              \n            </mat-expansion-panel>\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                 (closed)=\"panelOpenState = false\">\n                               \n             \n            </mat-expansion-panel>\n          </mat-accordion>\n        </p>\n    \n\n\n\n\n\n\n\n\n\n\n<!-- \n<form [formGroup]='newtodo' (ngSubmit)=\"addtodo()\">\n    <h2>add new to do</h2>\n    userId : <input formControlName='userId'> <br>\n    id : <input formControlName='id'> <br>\n    title : <input formControlName='title'> <br>\n    completed : <input type=\"checkbox\" formControlName='completed'> <br>\n    <button>send</button>\n\n\n\n</form>\n<div>\n    <h1>list of all todos</h1>\n\n    <ul>\n        <li *ngFor = \"let t of svsto.data | async\">\n            userId : {{t.userId}} <br>\n            id : {{t.id}} <br>\n            title : {{t.title}} <br>\n            completed : {{t.completed}} <br>\n            <br>\n        </li>\n    </ul> -->\n\n\n<!-- </div> -->\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navige></app-navige>\n<div _ngcontent-neo-c512=\"\" class=\"component-page-header docs-primary-header\">\n    <button _ngcontent-neo-c512=\"\" mat-button=\"\" class=\"sidenav-toggle mat-button mat-button-base\">\n        <span class=\"mat-button-wrapper\">\n        </span>\n        <div matripple=\"\" class=\"mat-button-ripple mat-ripple\"></div>\n        <div class=\"mat-button-focus-overlay\"></div>\n    </button>\n        <h2 _ngcontent-neo-c512=\"\" focusonnavigation=\"\" tabindex=\"-1\">users</h2>\n        <app-how-mny-users></app-how-mny-users>\n</div>\n\n\n <form class=\"example-form\">\n       \n        <mat-form-field class=\"example-full-width\">\n             <input (input)=\"name = $event.target.value\" matInput placeholder=\"serch by name\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input)=\"username = $event.target.value\" matInput placeholder=\"serch by username\" value=\"\">\n       </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input)=\"email = $event.target.value\" matInput placeholder=\"serch by email\" value=\"\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input (input)=\"id = $event.target.value\" matInput placeholder=\"serch by id\" value=\"\">\n         </mat-form-field>\n</form> \n\n <button (click)= \"pageAddUser()\" mat-button>adduser</button> \n\n\n\n\n\n\n<p>\n <mat-accordion *ngFor = \"let ue of svsus.data \n | async\n | pipeIncluds : 'name' : name\n | pipeIncluds : 'username' : username\n | pipeIncluds : 'email' : email\n | pipeshave : 'id' : id\n \">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n             name : {{ue.name}}\n            </mat-panel-title>\n            <mat-panel-description>\n                user id : {{ue.id}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n      \n          <app-user [userr]=\"ue\"></app-user>\n\n\n         </mat-expansion-panel>\n        <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n                           \n         \n        </mat-expansion-panel>\n      </mat-accordion> \n    </p> \n    \n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/additem/addphoto/addphoto.component.css":
/*!*********************************************************!*\
  !*** ./src/app/additem/addphoto/addphoto.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field{background-color: rgb(184, 169, 169);\n}\n.example-container{ margin: 7% 20% 0% 20%;}\nbutton,.mat-select{\n    background-color: lightslategrey;    \n}\n.component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n.component-page-header{\n    padding-top: 4%\n}\n.mat-form-field{\n    width: 89%;\n}\n.bb{\n    margin-left: 38%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGRwaG90by9hZGRwaG90by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixvQ0FBb0M7QUFDcEQ7QUFDQSxvQkFBb0IscUJBQXFCLENBQUM7QUFDMUM7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzR0FBc0c7SUFDdEcsU0FBUztBQUNiO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRpdGVtL2FkZHBob3RvL2FkZHBob3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTY5LCAxNjkpO1xufVxuLmV4YW1wbGUtY29udGFpbmVyeyBtYXJnaW46IDclIDIwJSAwJSAyMCU7fVxuYnV0dG9uLC5tYXQtc2VsZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5OyAgICBcbn1cblxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcltfbmdjb250ZW50LW5lby1jNTEyXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDQlXG59XG4ubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDg5JTtcbn1cbi5iYntcbiAgICBtYXJnaW4tbGVmdDogMzglXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/additem/addphoto/addphoto.component.ts":
/*!********************************************************!*\
  !*** ./src/app/additem/addphoto/addphoto.component.ts ***!
  \********************************************************/
/*! exports provided: AddphotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddphotoComponent", function() { return AddphotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servises/photos.service */ "./src/app/servises/photos.service.ts");




let AddphotoComponent = class AddphotoComponent {
    constructor(svsp) {
        this.svsp = svsp;
        this.newphoto = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            albumId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    AddItem() {
        let photo = this.newphoto.value;
        console.log(this.newphoto.value);
        this.svsp.addItem(photo);
    }
};
AddphotoComponent.ctorParameters = () => [
    { type: src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_3__["PhotosService"] }
];
AddphotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addphoto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addphoto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addphoto/addphoto.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addphoto.component.css */ "./src/app/additem/addphoto/addphoto.component.css")).default]
    })
], AddphotoComponent);



/***/ }),

/***/ "./src/app/additem/addpost/addpost.component.css":
/*!*******************************************************!*\
  !*** ./src/app/additem/addpost/addpost.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field{background-color: rgb(184, 169, 169);\n }\n.example-container{ margin: 7% 20% 0% 20%;}\nbutton,.mat-select{\n    background-color: lightslategrey;\n  \n}\n.component-page-header[_ngcontent-neo-c512] {\n  display: flex;\n  align-items: center;\n}\n.docs-primary-header {\n  background: #3f51b5;\n}\n.docs-primary-header {\n  padding-left: 20px;\n}\n.component-page-header{\n  padding-top: 4%\n}\nbody {\n  font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n  margin: 0;\n}\n.mat-form-field{\n  width: 89%;\n}\n.bb{\n  margin-left: 38%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGRwb3N0L2FkZHBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0Isb0NBQW9DO0NBQ25EO0FBQ0Qsb0JBQW9CLHFCQUFxQixDQUFDO0FBQzFDO0lBQ0ksZ0NBQWdDOztBQUVwQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLHNHQUFzRztFQUN0RyxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkZGl0ZW0vYWRkcG9zdC9hZGRwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTY5LCAxNjkpO1xuIH1cbi5leGFtcGxlLWNvbnRhaW5lcnsgbWFyZ2luOiA3JSAyMCUgMCUgMjAlO31cbmJ1dHRvbiwubWF0LXNlbGVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgXG59XG4uY29tcG9uZW50LXBhZ2UtaGVhZGVyW19uZ2NvbnRlbnQtbmVvLWM1MTJdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcntcbiAgcGFkZGluZy10b3A6IDQlXG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG59XG4ubWF0LWZvcm0tZmllbGR7XG4gIHdpZHRoOiA4OSU7XG59XG4uYmJ7XG4gIG1hcmdpbi1sZWZ0OiAzOCVcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/additem/addpost/addpost.component.ts":
/*!******************************************************!*\
  !*** ./src/app/additem/addpost/addpost.component.ts ***!
  \******************************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_serviss_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviss/posts.service */ "./src/app/serviss/posts.service.ts");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");





let AddpostComponent = class AddpostComponent {
    constructor(svs, svsus) {
        this.svs = svs;
        this.svsus = svsus;
        this.newItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    AddItem() {
        let newpos = this.newItem.value;
        if (this.svsus.findUserid(newpos.userId)) {
            this.svs.addItem(newpos);
        }
        else {
            alert("eroor, userID need to be from users");
        }
    }
};
AddpostComponent.ctorParameters = () => [
    { type: src_app_serviss_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
AddpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addpost',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addpost.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addpost/addpost.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addpost.component.css */ "./src/app/additem/addpost/addpost.component.css")).default]
    })
], AddpostComponent);



/***/ }),

/***/ "./src/app/additem/addtodo/addtodo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/additem/addtodo/addtodo.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field{background-color: rgb(184, 169, 169);\n }\n.example-container{ margin: 7% 20% 0% 20%;}\nbutton,.mat-select{\n    background-color: lightslategrey;\n   \n}\n.component-page-header[_ngcontent-neo-c512] {\n  display: flex;\n  align-items: center;\n}\n.docs-primary-header {\n  background: #3f51b5;\n}\n.docs-primary-header {\n  padding-left: 20px;\n}\n.component-page-header{\n  padding-top: 4%\n}\nbody {\n  font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n  margin: 0;\n}\n.mat-form-field{\n  width: 89%;\n}\n.bb{\n  margin-left: 38%\n}\n/* .example-section {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    height: 60px;\n   \n  } */\n/* p{\n    background-color:rgb(184, 169, 169) ;\n    width: 27%;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGR0b2RvL2FkZHRvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0Isb0NBQW9DO0NBQ25EO0FBQ0Qsb0JBQW9CLHFCQUFxQixDQUFDO0FBQzFDO0lBQ0ksZ0NBQWdDOztBQUVwQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLHNHQUFzRztFQUN0RyxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0U7QUFDRjtBQUNBOzs7Ozs7S0FNSztBQUNIOzs7S0FHRyIsImZpbGUiOiJzcmMvYXBwL2FkZGl0ZW0vYWRkdG9kby9hZGR0b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTY5LCAxNjkpO1xuIH1cbi5leGFtcGxlLWNvbnRhaW5lcnsgbWFyZ2luOiA3JSAyMCUgMCUgMjAlO31cbmJ1dHRvbiwubWF0LXNlbGVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgIFxufVxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcltfbmdjb250ZW50LW5lby1jNTEyXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gIHBhZGRpbmctdG9wOiA0JVxufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDogODklO1xufVxuLmJie1xuICBtYXJnaW4tbGVmdDogMzglXG59XG4vKiAuZXhhbXBsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcbiAgIFxuICB9ICovXG4gIC8qIHB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTg0LCAxNjksIDE2OSkgO1xuICAgIHdpZHRoOiAyNyU7XG4gIH0gKi9cbiJdfQ== */");

/***/ }),

/***/ "./src/app/additem/addtodo/addtodo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/additem/addtodo/addtodo.component.ts ***!
  \******************************************************/
/*! exports provided: AddtodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodoComponent", function() { return AddtodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");
/* harmony import */ var src_app_serviss_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/serviss/todo.service */ "./src/app/serviss/todo.service.ts");





let AddtodoComponent = class AddtodoComponent {
    constructor(svsus, svsto) {
        this.svsus = svsus;
        this.svsto = svsto;
        this.complit = false;
        this.newItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    AddItem() {
        let newtodo = this.newItem.value;
        console.log(" all newtodo", newtodo);
        newtodo.completed = this.complit;
        console.log("newtodo", newtodo);
        if (this.svsus.findUserid(newtodo.userId)) {
            this.svsto.addItem(newtodo);
        }
        else {
            alert("eroor, userID need to be from users");
        }
    }
};
AddtodoComponent.ctorParameters = () => [
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: src_app_serviss_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] }
];
AddtodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addtodo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addtodo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/addtodo/addtodo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addtodo.component.css */ "./src/app/additem/addtodo/addtodo.component.css")).default]
    })
], AddtodoComponent);



/***/ }),

/***/ "./src/app/additem/adduser/adduser.component.css":
/*!*******************************************************!*\
  !*** ./src/app/additem/adduser/adduser.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field{background-color: rgb(184, 169, 169);\n    }\n.example-container{ margin: 7% 20% 0% 20%;}\nbutton,.mat-select{\n    background-color: lightslategrey;\n \n}\n.component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\n.component-page-header{\n    padding-top: 4%\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n.mat-form-field{\n    width: 89%;\n}\n.bb{\n    margin-left: 38%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGR1c2VyL2FkZHVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0Isb0NBQW9DO0lBQ2hEO0FBQ0osb0JBQW9CLHFCQUFxQixDQUFDO0FBQzFDO0lBQ0ksZ0NBQWdDOztBQUVwQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHNHQUFzRztJQUN0RyxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FkZGl0ZW0vYWRkdXNlci9hZGR1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTY5LCAxNjkpO1xuICAgIH1cbi5leGFtcGxlLWNvbnRhaW5lcnsgbWFyZ2luOiA3JSAyMCUgMCUgMjAlO31cbmJ1dHRvbiwubWF0LXNlbGVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiBcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1uZW8tYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDQlXG59XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWUgTGlnaHRcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLFwiTHVjaWRhIEdyYW5kZVwiLHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiA4OSU7XG59XG4uYmJ7XG4gICAgbWFyZ2luLWxlZnQ6IDM4JVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/additem/adduser/adduser.component.ts":
/*!******************************************************!*\
  !*** ./src/app/additem/adduser/adduser.component.ts ***!
  \******************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");




let AdduserComponent = class AdduserComponent {
    constructor(svsus) {
        this.svsus = svsus;
        this.newuser = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                suite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            })
        });
    }
    ngOnInit() {
    }
    AddItem() {
        let uuser = this.newuser.value;
        console.log(this.newuser.value);
        this.svsus.addItem(uuser);
    }
};
AdduserComponent.ctorParameters = () => [
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
];
AdduserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adduser',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adduser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/additem/adduser/adduser.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adduser.component.css */ "./src/app/additem/adduser/adduser.component.css")).default]
    })
], AdduserComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _comps_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/todo/todo.component */ "./src/app/comps/todo/todo.component.ts");
/* harmony import */ var _comps_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/login/login.component */ "./src/app/comps/login/login.component.ts");
/* harmony import */ var _comps_navige_navige_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/navige/navige.component */ "./src/app/comps/navige/navige.component.ts");
/* harmony import */ var _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/posts/posts.component */ "./src/app/comps/posts/posts.component.ts");
/* harmony import */ var _additem_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./additem/addpost/addpost.component */ "./src/app/additem/addpost/addpost.component.ts");
/* harmony import */ var _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/homepage/homepage.component */ "./src/app/comps/homepage/homepage.component.ts");
/* harmony import */ var _additem_addtodo_addtodo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./additem/addtodo/addtodo.component */ "./src/app/additem/addtodo/addtodo.component.ts");
/* harmony import */ var _comps_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/users/users.component */ "./src/app/comps/users/users.component.ts");
/* harmony import */ var _additem_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./additem/adduser/adduser.component */ "./src/app/additem/adduser/adduser.component.ts");
/* harmony import */ var _comps_photos_photos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/photos/photos.component */ "./src/app/comps/photos/photos.component.ts");
/* harmony import */ var _additem_addphoto_addphoto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./additem/addphoto/addphoto.component */ "./src/app/additem/addphoto/addphoto.component.ts");
/* harmony import */ var _comps_alboms_alboms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/alboms/alboms.component */ "./src/app/comps/alboms/alboms.component.ts");















const routes = [
    { path: "todo", component: _comps_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"] },
    { path: "login", component: _comps_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "navi", component: _comps_navige_navige_component__WEBPACK_IMPORTED_MODULE_5__["NavigeComponent"] },
    { path: "post", component: _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"] },
    { path: "addpost", component: _additem_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_7__["AddpostComponent"] },
    { path: "addtodo", component: _additem_addtodo_addtodo_component__WEBPACK_IMPORTED_MODULE_9__["AddtodoComponent"] },
    { path: "homepage", component: _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"] },
    { path: "users", component: _comps_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"] },
    { path: "addusers", component: _additem_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_11__["AdduserComponent"] },
    { path: "photos", component: _comps_photos_photos_component__WEBPACK_IMPORTED_MODULE_12__["PhotosComponent"] },
    { path: "addphotos", component: _additem_addphoto_addphoto_component__WEBPACK_IMPORTED_MODULE_13__["AddphotoComponent"] },
    { path: "alboms", component: _comps_alboms_alboms_component__WEBPACK_IMPORTED_MODULE_14__["AlbomsComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _serviss_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviss/login.service */ "./src/app/serviss/login.service.ts");



let AppComponent = class AppComponent {
    constructor(svslog) {
        this.svslog = svslog;
        this.title = 'datal';
    }
};
AppComponent.ctorParameters = () => [
    { type: _serviss_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _materyall_nati__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materyall/nati */ "./src/app/materyall/nati.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/todo/todo.component */ "./src/app/comps/todo/todo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _comps_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/login/login.component */ "./src/app/comps/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _comps_navige_navige_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/navige/navige.component */ "./src/app/comps/navige/navige.component.ts");
/* harmony import */ var _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/posts/posts.component */ "./src/app/comps/posts/posts.component.ts");
/* harmony import */ var _card_post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card/post/post.component */ "./src/app/card/post/post.component.ts");
/* harmony import */ var _pips_pipe1_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pips/pipe1.pipe */ "./src/app/pips/pipe1.pipe.ts");
/* harmony import */ var _additem_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./additem/addpost/addpost.component */ "./src/app/additem/addpost/addpost.component.ts");
/* harmony import */ var _pips_pitodo_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pips/pitodo.pipe */ "./src/app/pips/pitodo.pipe.ts");
/* harmony import */ var _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comps/homepage/homepage.component */ "./src/app/comps/homepage/homepage.component.ts");
/* harmony import */ var _comps_how_mny_users_how_mny_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comps/how-mny-users/how-mny-users.component */ "./src/app/comps/how-mny-users/how-mny-users.component.ts");
/* harmony import */ var _card_todoss_todoss_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./card/todoss/todoss.component */ "./src/app/card/todoss/todoss.component.ts");
/* harmony import */ var _pip_pipe_includs_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pip/pipe-includs.pipe */ "./src/app/pip/pipe-includs.pipe.ts");
/* harmony import */ var _pip_pipeshave_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pip/pipeshave.pipe */ "./src/app/pip/pipeshave.pipe.ts");
/* harmony import */ var _additem_addtodo_addtodo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./additem/addtodo/addtodo.component */ "./src/app/additem/addtodo/addtodo.component.ts");
/* harmony import */ var _card_user_user_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./card/user/user.component */ "./src/app/card/user/user.component.ts");
/* harmony import */ var _comps_users_users_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./comps/users/users.component */ "./src/app/comps/users/users.component.ts");
/* harmony import */ var _additem_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./additem/adduser/adduser.component */ "./src/app/additem/adduser/adduser.component.ts");
/* harmony import */ var _comps_photos_photos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./comps/photos/photos.component */ "./src/app/comps/photos/photos.component.ts");
/* harmony import */ var _card_photo_photo_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./card/photo/photo.component */ "./src/app/card/photo/photo.component.ts");
/* harmony import */ var _additem_addphoto_addphoto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./additem/addphoto/addphoto.component */ "./src/app/additem/addphoto/addphoto.component.ts");
/* harmony import */ var _comps_alboms_alboms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./comps/alboms/alboms.component */ "./src/app/comps/alboms/alboms.component.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _comps_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
            _comps_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _comps_navige_navige_component__WEBPACK_IMPORTED_MODULE_11__["NavigeComponent"],
            _comps_posts_posts_component__WEBPACK_IMPORTED_MODULE_12__["PostsComponent"],
            _card_post_post_component__WEBPACK_IMPORTED_MODULE_13__["PostComponent"],
            _pips_pipe1_pipe__WEBPACK_IMPORTED_MODULE_14__["Pipe1Pipe"],
            _additem_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__["AddpostComponent"],
            _pips_pitodo_pipe__WEBPACK_IMPORTED_MODULE_16__["PitodoPipe"],
            _comps_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_17__["HomepageComponent"],
            _comps_how_mny_users_how_mny_users_component__WEBPACK_IMPORTED_MODULE_18__["HowMnyUsersComponent"],
            _card_todoss_todoss_component__WEBPACK_IMPORTED_MODULE_19__["TodossComponent"],
            _pip_pipe_includs_pipe__WEBPACK_IMPORTED_MODULE_20__["PipeIncludsPipe"],
            _pip_pipeshave_pipe__WEBPACK_IMPORTED_MODULE_21__["PipeshavePipe"],
            _additem_addtodo_addtodo_component__WEBPACK_IMPORTED_MODULE_22__["AddtodoComponent"],
            _card_user_user_component__WEBPACK_IMPORTED_MODULE_23__["UserComponent"],
            _comps_users_users_component__WEBPACK_IMPORTED_MODULE_24__["UsersComponent"],
            _additem_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_25__["AdduserComponent"],
            _comps_photos_photos_component__WEBPACK_IMPORTED_MODULE_26__["PhotosComponent"],
            _card_photo_photo_component__WEBPACK_IMPORTED_MODULE_27__["PhotoComponent"],
            _additem_addphoto_addphoto_component__WEBPACK_IMPORTED_MODULE_28__["AddphotoComponent"],
            _comps_alboms_alboms_component__WEBPACK_IMPORTED_MODULE_29__["AlbomsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _materyall_nati__WEBPACK_IMPORTED_MODULE_4__["MModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/card/photo/photo.component.css":
/*!************************************************!*\
  !*** ./src/app/card/photo/photo.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvcGhvdG8vcGhvdG8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/card/photo/photo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/card/photo/photo.component.ts ***!
  \***********************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotoComponent = class PhotoComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/photo/photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo.component.css */ "./src/app/card/photo/photo.component.css")).default]
    })
], PhotoComponent);



/***/ }),

/***/ "./src/app/card/post/post.component.css":
/*!**********************************************!*\
  !*** ./src/app/card/post/post.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/card/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/card/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");



let PostComponent = class PostComponent {
    constructor(svsUser) {
        this.svsUser = svsUser;
    }
    ngOnInit() {
    }
};
PostComponent.ctorParameters = () => [
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "pos", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'card-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/card/post/post.component.css")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/card/todoss/todoss.component.css":
/*!**************************************************!*\
  !*** ./src/app/card/todoss/todoss.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvdG9kb3NzL3RvZG9zcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/card/todoss/todoss.component.ts":
/*!*************************************************!*\
  !*** ./src/app/card/todoss/todoss.component.ts ***!
  \*************************************************/
/*! exports provided: TodossComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodossComponent", function() { return TodossComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");



let TodossComponent = class TodossComponent {
    constructor(svsus) {
        this.svsus = svsus;
    }
    ngOnInit() {
    }
};
TodossComponent.ctorParameters = () => [
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TodossComponent.prototype, "tod", void 0);
TodossComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todoss',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todoss.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/todoss/todoss.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todoss.component.css */ "./src/app/card/todoss/todoss.component.css")).default]
    })
], TodossComponent);



/***/ }),

/***/ "./src/app/card/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/card/user/user.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/card/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/card/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserComponent.prototype, "userr", void 0);
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/card/user/user.component.css")).default]
    })
], UserComponent);



/***/ }),

/***/ "./src/app/comps/alboms/alboms.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/alboms/alboms.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n.mat-expansion-panel-header {\n    background-color: lightgrey;\n}\n.mat-expansion-panel-header-description,.mat-expansion-panel-header-title {\n    color: rgba(39, 37, 37, 0.7);\n}\n.mat-expansion-panel {\n    background: lightsteelblue;\n    color: rgba(39, 37, 37, 0.7);\n    margin: 1%;\n}\np{\n    margin: 5% 15% 5% 15%;\n}\n.mat-form-field{\n    background-color: lightslategrey;\n}\nbutton{\n    background-color: lightslategrey;\n    margin-left: 4% ;\n    margin: 2%;\n}\nform{\n    margin: 2%;\n}\nimg{\n    width: 40px;\n    height: 40px;\n}\n.component-page-header{\n    padding-top: 4%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWxib21zL2FsYm9tcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNHQUFzRztJQUN0RyxTQUFTO0FBQ2I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWxib21zL2FsYm9tcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBvbmVudC1wYWdlLWhlYWRlcltfbmdjb250ZW50LW5lby1jNTEyXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDM5LCAzNywgMzcsIDAuNyk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzdGVlbGJsdWU7XG4gICAgY29sb3I6IHJnYmEoMzksIDM3LCAzNywgMC43KTtcbiAgICBtYXJnaW46IDElO1xufVxucHtcbiAgICBtYXJnaW46IDUlIDE1JSA1JSAxNSU7XG59XG4ubWF0LWZvcm0tZmllbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG4gICAgbWFyZ2luLWxlZnQ6IDQlIDtcbiAgICBtYXJnaW46IDIlO1xufVxuZm9ybXtcbiAgICBtYXJnaW46IDIlO1xufVxuaW1ne1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDQlXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/comps/alboms/alboms.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/alboms/alboms.component.ts ***!
  \**************************************************/
/*! exports provided: AlbomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbomsComponent", function() { return AlbomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");
/* harmony import */ var src_app_servises_albomsser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servises/albomsser.service */ "./src/app/servises/albomsser.service.ts");
/* harmony import */ var src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servises/photos.service */ "./src/app/servises/photos.service.ts");





let AlbomsComponent = class AlbomsComponent {
    constructor(svsus, svsalb, svsphoto) {
        this.svsus = svsus;
        this.svsalb = svsalb;
        this.svsphoto = svsphoto;
        this.title = "";
    }
    ngOnInit() {
    }
};
AlbomsComponent.ctorParameters = () => [
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_servises_albomsser_service__WEBPACK_IMPORTED_MODULE_3__["AlbomsserService"] },
    { type: src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_4__["PhotosService"] }
];
AlbomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alboms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alboms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/alboms/alboms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alboms.component.css */ "./src/app/comps/alboms/alboms.component.css")).default]
    })
], AlbomsComponent);



/***/ }),

/***/ "./src/app/comps/homepage/homepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/comps/homepage/homepage.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-page-header{\n    padding-top: 4%\n}\n.component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n.mat-expansion-panel-header {\n    background-color: lightgrey;\n}\n.mat-expansion-panel-header-description,.mat-expansion-panel-header-title {\n    color: rgba(39, 37, 37, 0.7);\n}\n.mat-expansion-panel, .mat-accordion {\n\n    background: lightsteelblue;\n    color: rgba(39, 37, 37, 0.7);\n    margin: 1%;\n}\np, h1{\n    margin: 5% 15% 5% 15%;\n}\n.mat-form-field{\n    background-color: lightslategrey;\n}\nbutton{\n    background-color: lightslategrey;\n    margin-left: 4% ;\n    margin: 2%;\n}\nform{\n    margin: 2%;\n}\n.component-page-header{\n    padding-top: 4%\n}\n.ul1{\n    position: relative;\n    width: 100%;\n}\n.li1{\n    position:absolute;\n    left: -100%;\n    top: 0%;\n    width: 100%;\n    transition: all 4s;\n}\n.titel{\n    position:absolute;\n    margin-top: 2%; \n    right: 9%;\n    top: 5%;  \n}\n.li1.shoo{\n    left: 0%;  \n}\nimg{\n    width: 100%;\n    max-height: 250px;\n}\ndiv{\n    width: 100%;\n}\n.ul2{\n    margin-top: 30%\n}\n.dss{\n    margin-top: 26%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzR0FBc0c7SUFDdEcsU0FBUztBQUNiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsT0FBTztBQUNYO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9uZW50LXBhZ2UtaGVhZGVye1xuICAgIHBhZGRpbmctdG9wOiA0JVxufVxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcltfbmdjb250ZW50LW5lby1jNTEyXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDM5LCAzNywgMzcsIDAuNyk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCwgLm1hdC1hY2NvcmRpb24ge1xuXG4gICAgYmFja2dyb3VuZDogbGlnaHRzdGVlbGJsdWU7XG4gICAgY29sb3I6IHJnYmEoMzksIDM3LCAzNywgMC43KTtcbiAgICBtYXJnaW46IDElO1xufVxucCwgaDF7XG4gICAgbWFyZ2luOiA1JSAxNSUgNSUgMTUlO1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xuICAgIG1hcmdpbi1sZWZ0OiA0JSA7XG4gICAgbWFyZ2luOiAyJTtcbn1cbmZvcm17XG4gICAgbWFyZ2luOiAyJTtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDQlXG59XG4udWwxe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5saTF7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgdG9wOiAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNHM7XG59XG4udGl0ZWx7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMiU7IFxuICAgIHJpZ2h0OiA5JTtcbiAgICB0b3A6IDUlOyAgXG59XG4ubGkxLnNob297XG4gICAgbGVmdDogMCU7ICBcbn1cbmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbn1cbmRpdntcbiAgICB3aWR0aDogMTAwJTtcbn1cbi51bDJ7XG4gICAgbWFyZ2luLXRvcDogMzAlXG59XG4uZHNze1xuICAgIG1hcmdpbi10b3A6IDI2JTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/comps/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servises/photos.service */ "./src/app/servises/photos.service.ts");
/* harmony import */ var src_app_serviss_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviss/posts.service */ "./src/app/serviss/posts.service.ts");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");





let HomepageComponent = class HomepageComponent {
    constructor(svsphotos, svsposts, svsus) {
        this.svsphotos = svsphotos;
        this.svsposts = svsposts;
        this.svsus = svsus;
        this.index = 0;
        this.maxindex = 9;
        this.set();
    }
    ngOnDestroy() {
        clearInterval(this.numberofinterval);
    }
    ngOnInit() {
        this.svsphotos.data.subscribe(photos => {
            if (photos.length > 0)
                this.svsphotos.lastTenPhotos();
        });
        this.svsposts.data.subscribe(posts => {
            if (posts.length > 0)
                this.svsposts.lastTenPost();
        });
    }
    set() {
        this.numberofinterval = window.setInterval(() => { this.move(); }, 3000);
    }
    move() {
        let oan = document.querySelectorAll(".li1")[this.index];
        console.log("oan.className", oan.className);
        oan.className = "li1";
        console.log("oan.className", oan.className);
        if (this.index == 9) {
            this.index = -1;
        }
        let to = document.querySelectorAll(".li1")[++this.index];
        to.className = "li1 shoo";
    }
};
HomepageComponent.ctorParameters = () => [
    { type: src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_2__["PhotosService"] },
    { type: src_app_serviss_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/comps/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/comps/how-mny-users/how-mny-users.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/how-mny-users/how-mny-users.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-icon{\n    margin-left: 37.2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaG93LW1ueS11c2Vycy9ob3ctbW55LXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9ob3ctbW55LXVzZXJzL2hvdy1tbnktdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbntcbiAgICBtYXJnaW4tbGVmdDogMzcuMmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/comps/how-mny-users/how-mny-users.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/how-mny-users/how-mny-users.component.ts ***!
  \****************************************************************/
/*! exports provided: HowMnyUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowMnyUsersComponent", function() { return HowMnyUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");



let HowMnyUsersComponent = class HowMnyUsersComponent {
    constructor(svsus) {
        this.svsus = svsus;
        this.svsus.data.subscribe(d => this.count = d.length);
    }
    ngOnInit() {
    }
};
HowMnyUsersComponent.ctorParameters = () => [
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
HowMnyUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-mny-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./how-mny-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/how-mny-users/how-mny-users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./how-mny-users.component.css */ "./src/app/comps/how-mny-users/how-mny-users.component.css")).default]
    })
], HowMnyUsersComponent);



/***/ }),

/***/ "./src/app/comps/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n    min-width: 200px;\n    max-width: 700px;\n    width: 100%;\n    margin-top: 20%;\n    margin-left: 32%;\n    /* background-color: blue; */\n  }\n  \n  .example-full-width {\n    width: 100%;\n    background-color:lightskyblue;\n  }\n  \n  mat-form-field {\n    text-align: center;\n  }\n  \n  button{\n    margin-left: 49.5%;\n  }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjs7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMiU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodHNreWJsdWU7XG4gIH1cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBidXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDQ5LjUlO1xuICB9XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/comps/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");
/* harmony import */ var src_app_serviss_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/serviss/login.service */ "./src/app/serviss/login.service.ts");





let LoginComponent = class LoginComponent {
    constructor(rr, avaus, svslog) {
        this.rr = rr;
        this.avaus = avaus;
        this.svslog = svslog;
    }
    ngOnInit() {
    }
    login() {
        console.log("log in");
        let use = this.avaus.findUserid(this.userid);
        if (use) {
            this.avaus.myuser = use;
            this.rr.navigateByUrl('/homepage');
            this.avaus.myuser = use;
            this.svslog.islog = true;
        }
        else {
            alert(`userid: ${this.userid} not corect`);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: src_app_serviss_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoginComponent.prototype, "userid", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/comps/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/comps/navige/navige.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/navige/navige.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 8px 16px;\n    background: #3f51b5;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    color: white;\n}\n\n/* .component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    position: fixed;\n    align-items: center;\n    width: 100%;\n    height: 10%;\n}\n.docs-primary-header {\n    background: #6878d4;\n}\nbutton{\n    color: black;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbmF2aWdlL25hdmlnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7Ozs7Ozs7Ozs7OztHQVlHIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvbmF2aWdlL25hdmlnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiAuY29tcG9uZW50LXBhZ2UtaGVhZGVyW19uZ2NvbnRlbnQtbmVvLWM1MTJdIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAlO1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM2ODc4ZDQ7XG59XG5idXR0b257XG4gICAgY29sb3I6IGJsYWNrO1xufSAqL1xuIl19 */");

/***/ }),

/***/ "./src/app/comps/navige/navige.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/navige/navige.component.ts ***!
  \**************************************************/
/*! exports provided: NavigeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigeComponent", function() { return NavigeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavigeComponent = class NavigeComponent {
    constructor(rot) {
        this.rot = rot;
    }
    ngOnInit() {
    }
    moveto(page) {
        console.log(page);
        this.rot.navigateByUrl(`/${page}`);
    }
};
NavigeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavigeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navige',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navige.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/navige/navige.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navige.component.css */ "./src/app/comps/navige/navige.component.css")).default]
    })
], NavigeComponent);



/***/ }),

/***/ "./src/app/comps/photos/photos.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/photos/photos.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n.mat-expansion-panel-header {\n    background-color: lightgrey;\n}\n.mat-expansion-panel-header-description,.mat-expansion-panel-header-title {\n    color: rgba(39, 37, 37, 0.7);\n}\n.mat-expansion-panel {\n    background: lightsteelblue;\n    color: rgba(39, 37, 37, 0.7);\n    margin: 1%;\n}\np{\n    margin: 5% 15% 5% 15%;\n}\n.mat-form-field{\n    background-color: lightslategrey;\n}\nbutton{\n    background-color: lightslategrey;\n    margin-left: 4% ;\n    margin: 2%;\n}\nform{\n    margin: 2%;\n}\nimg{\n    width: 40px;\n    height: 40px;\n}\n.component-page-header{\n    padding-top: 4%\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNHQUFzRztJQUN0RyxTQUFTO0FBQ2I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBvbmVudC1wYWdlLWhlYWRlcltfbmdjb250ZW50LW5lby1jNTEyXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG59XG4uZG9jcy1wcmltYXJ5LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlIExpZ2h0XCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxcIkx1Y2lkYSBHcmFuZGVcIixzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDM5LCAzNywgMzcsIDAuNyk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzdGVlbGJsdWU7XG4gICAgY29sb3I6IHJnYmEoMzksIDM3LCAzNywgMC43KTtcbiAgICBtYXJnaW46IDElO1xufVxucHtcbiAgICBtYXJnaW46IDUlIDE1JSA1JSAxNSU7XG59XG4ubWF0LWZvcm0tZmllbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyZXk7XG4gICAgbWFyZ2luLWxlZnQ6IDQlIDtcbiAgICBtYXJnaW46IDIlO1xufVxuZm9ybXtcbiAgICBtYXJnaW46IDIlO1xufVxuaW1ne1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDQlXG59XG5cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/comps/photos/photos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/photos/photos.component.ts ***!
  \**************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servises/photos.service */ "./src/app/servises/photos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PhotosComponent = class PhotosComponent {
    constructor(svspho, rout) {
        this.svspho = svspho;
        this.rout = rout;
        this.title = "";
    }
    ngOnInit() {
    }
    pageAddphoto() {
        this.rout.navigateByUrl('/addphotos');
    }
};
PhotosComponent.ctorParameters = () => [
    { type: src_app_servises_photos_service__WEBPACK_IMPORTED_MODULE_2__["PhotosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/photos/photos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photos.component.css */ "./src/app/comps/photos/photos.component.css")).default]
    })
], PhotosComponent);



/***/ }),

/***/ "./src/app/comps/posts/posts.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/posts/posts.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n.mat-expansion-panel-header {\n    background-color: lightgrey;\n}\n.mat-expansion-panel-header-description,.mat-expansion-panel-header-title {\n    color: rgba(39, 37, 37, 0.7);\n}\n.mat-expansion-panel {\n    background: lightsteelblue;\n    color: rgba(39, 37, 37, 0.7);\n    margin: 1%;\n}\np{\n    margin: 5% 15% 5% 15%;\n}\n.mat-form-field{\n    background-color: lightslategrey;\n}\nbutton{\n    background-color: lightslategrey;\n    margin-left: 4% ;\n    margin: 2%;\n}\nform{\n    margin: 2%;\n}\n.component-page-header{\n    padding-top: 4%\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzR0FBc0c7SUFDdEcsU0FBUztBQUNiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1uZW8tYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgzOSwgMzcsIDM3LCAwLjcpO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0c3RlZWxibHVlO1xuICAgIGNvbG9yOiByZ2JhKDM5LCAzNywgMzcsIDAuNyk7XG4gICAgbWFyZ2luOiAxJTtcbn1cbnB7XG4gICAgbWFyZ2luOiA1JSAxNSUgNSUgMTUlO1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xuICAgIG1hcmdpbi1sZWZ0OiA0JSA7XG4gICAgbWFyZ2luOiAyJTtcbn1cbmZvcm17XG4gICAgbWFyZ2luOiAyJTtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDQlXG59XG5cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/comps/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviss_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/serviss/posts.service */ "./src/app/serviss/posts.service.ts");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let PostsComponent = class PostsComponent {
    constructor(svsposts, svsUser, rout) {
        this.svsposts = svsposts;
        this.svsUser = svsUser;
        this.rout = rout;
        this.titel = "";
        this.body = "";
    }
    ngOnInit() {
    }
    pageAddItem() {
        this.rout.navigateByUrl("/addpost");
    }
    mypost() {
        console.log("svsUser.myuser.id", this.svsUser.myuser.id);
        this.userid = this.svsUser.myuser.id;
    }
    allpost() {
        this.userid = null;
    }
};
PostsComponent.ctorParameters = () => [
    { type: src_app_serviss_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/posts/posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.css */ "./src/app/comps/posts/posts.component.css")).default]
    })
], PostsComponent);



/***/ }),

/***/ "./src/app/comps/todo/todo.component.css":
/*!***********************************************!*\
  !*** ./src/app/comps/todo/todo.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-radio-button ~ .mat-radio-button {\n    margin-left: 16px;\n  }\n\n.component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n\n.docs-primary-header {\n    background: #3f51b5;\n}\n\n.docs-primary-header {\n    padding-left: 20px;\n}\n\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n\n.mat-expansion-panel-header {\n    background-color: lightgrey;\n}\n\n.mat-expansion-panel-header-description,.mat-expansion-panel-header-title {\n    color: rgba(39, 37, 37, 0.7);\n}\n\n.mat-expansion-panel {\n    background: lightsteelblue;\n    color: rgba(39, 37, 37, 0.7);\n    margin: 1%;\n}\n\np{\n    margin: 5% 15% 5% 15%;\n}\n\n.mat-form-field , .mat-radio-group{\n    background-color: lightslategrey;\n}\n\nbutton{\n    background-color: lightslategrey;\n    margin-left: 4% ;\n    margin: 2%;\n}\n\nform{\n    margin: 2%;\n}\n\n.mat-radio-group{\n    padding: 1.5%;\n    margin: 1%;\n}\n\n.component-page-header{\n    padding-top: 4%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksc0dBQXNHO0lBQ3RHLFNBQVM7QUFDYjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wcy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB9XG5cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1uZW8tYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgzOSwgMzcsIDM3LCAwLjcpO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0c3RlZWxibHVlO1xuICAgIGNvbG9yOiByZ2JhKDM5LCAzNywgMzcsIDAuNyk7XG4gICAgbWFyZ2luOiAxJTtcbn1cbnB7XG4gICAgbWFyZ2luOiA1JSAxNSUgNSUgMTUlO1xufVxuLm1hdC1mb3JtLWZpZWxkICwgLm1hdC1yYWRpby1ncm91cHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbn1cbmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgICBtYXJnaW4tbGVmdDogNCUgO1xuICAgIG1hcmdpbjogMiU7XG59XG5mb3Jte1xuICAgIG1hcmdpbjogMiU7XG59XG5cbi5tYXQtcmFkaW8tZ3JvdXB7XG4gICAgcGFkZGluZzogMS41JTtcbiAgICBtYXJnaW46IDElO1xufVxuLmNvbXBvbmVudC1wYWdlLWhlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogNCVcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/todo/todo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/todo/todo.component.ts ***!
  \**********************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviss_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/serviss/todo.service */ "./src/app/serviss/todo.service.ts");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TodoComponent = class TodoComponent {
    constructor(svsto, svsus, rout) {
        this.svsto = svsto;
        this.svsus = svsus;
        this.rout = rout;
        this.title = "";
        svsto.data;
    }
    ngOnInit() {
    }
    pageAddItem() {
        this.rout.navigateByUrl("/addtodo");
    }
    mypost() {
        console.log("svsus.myuser.id", this.svsus.myuser.id);
        this.userId = this.svsus.myuser.id;
    }
    allpost() {
        this.userId = null;
    }
};
TodoComponent.ctorParameters = () => [
    { type: src_app_serviss_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] },
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/todo/todo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.css */ "./src/app/comps/todo/todo.component.css")).default]
    })
], TodoComponent);



/***/ }),

/***/ "./src/app/comps/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-page-header[_ngcontent-neo-c512] {\n    display: flex;\n    align-items: center;\n}\n.docs-primary-header {\n    background: #3f51b5;\n}\n.docs-primary-header {\n    padding-left: 20px;\n}\nbody {\n    font-family: Roboto,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\n    margin: 0;\n}\n.mat-drawer-container {\n    background-color: #fafafa;\n    color: rgba(0,0,0,.87);\n}\n.mat-expansion-panel-header {\n    background-color: lightgrey;\n}\n.mat-expansion-panel-header-description,.mat-expansion-panel-header-title {\n    color: rgba(39, 37, 37, 0.7);\n}\n.mat-expansion-panel {\n    background: lightsteelblue;\n    color: rgba(39, 37, 37, 0.7);\n    margin: 1%;\n}\np{\n    margin: 5% 15% 5% 15%;\n}\n.mat-form-field{\n    background-color: lightslategrey;\n}\nbutton{\n    background-color: lightslategrey;\n    margin-left: 4% ;\n    margin: 2%;\n}\nform{\n    margin: 2%;\n}\n.component-page-header{\n    padding-top: 4%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzR0FBc0c7SUFDdEcsU0FBUztBQUNiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtcGFnZS1oZWFkZXJbX25nY29udGVudC1uZW8tYzUxMl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb2NzLXByaW1hcnktaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xufVxuLmRvY3MtcHJpbWFyeS1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZSBMaWdodFwiLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsXCJMdWNpZGEgR3JhbmRlXCIsc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgzOSwgMzcsIDM3LCAwLjcpO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0c3RlZWxibHVlO1xuICAgIGNvbG9yOiByZ2JhKDM5LCAzNywgMzcsIDAuNyk7XG4gICAgbWFyZ2luOiAxJTtcbn1cbnB7XG4gICAgbWFyZ2luOiA1JSAxNSUgNSUgMTUlO1xufVxuLm1hdC1mb3JtLWZpZWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xufVxuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmV5O1xuICAgIG1hcmdpbi1sZWZ0OiA0JSA7XG4gICAgbWFyZ2luOiAyJTtcbn1cbmZvcm17XG4gICAgbWFyZ2luOiAyJTtcbn1cbi5jb21wb25lbnQtcGFnZS1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDQlXG59Il19 */");

/***/ }),

/***/ "./src/app/comps/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/serviss/users.service */ "./src/app/serviss/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UsersComponent = class UsersComponent {
    constructor(svsus, rut) {
        this.svsus = svsus;
        this.rut = rut;
        this.name = "";
        this.username = "";
        this.email = "";
    }
    ngOnInit() {
    }
    pageAddUser() {
        this.rut.navigateByUrl('/addusers');
    }
};
UsersComponent.ctorParameters = () => [
    { type: src_app_serviss_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/comps/users/users.component.css")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/materyall/nati.ts":
/*!***********************************!*\
  !*** ./src/app/materyall/nati.ts ***!
  \***********************************/
/*! exports provided: MModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MModule", function() { return MModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MModule = class MModule {
};
MModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MModule);

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/pip/pipe-includs.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pip/pipe-includs.pipe.ts ***!
  \******************************************/
/*! exports provided: PipeIncludsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeIncludsPipe", function() { return PipeIncludsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PipeIncludsPipe = class PipeIncludsPipe {
    transform(arr, tip, str) {
        return arr = arr.filter(aa => aa[tip].includes(str));
    }
};
PipeIncludsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pipeIncluds'
    })
], PipeIncludsPipe);



/***/ }),

/***/ "./src/app/pip/pipeshave.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pip/pipeshave.pipe.ts ***!
  \***************************************/
/*! exports provided: PipeshavePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeshavePipe", function() { return PipeshavePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PipeshavePipe = class PipeshavePipe {
    transform(arr, tip, st) {
        if (st) {
            arr = arr.filter(aa => aa[tip] == st);
        }
        return arr;
    }
};
PipeshavePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pipeshave'
    })
], PipeshavePipe);



/***/ }),

/***/ "./src/app/pips/pipe1.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pips/pipe1.pipe.ts ***!
  \************************************/
/*! exports provided: Pipe1Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe1Pipe", function() { return Pipe1Pipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Pipe1Pipe = class Pipe1Pipe {
    transform(value, titel, body, id, userid) {
        value = value.filter(ob => {
            return ob.title.includes(titel) && ob.body.includes(body);
        });
        if (userid) {
            console.log("userid", userid);
            value = value.filter(ob => {
                return ob.userId == userid;
            });
        }
        if (id) {
            let arr1 = value.filter(ob => {
                return ob.id == id;
            });
            return arr1;
        }
        return value;
    }
};
Pipe1Pipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pipe1'
    })
], Pipe1Pipe);



/***/ }),

/***/ "./src/app/pips/pitodo.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pips/pitodo.pipe.ts ***!
  \*************************************/
/*! exports provided: PitodoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitodoPipe", function() { return PitodoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PitodoPipe = class PitodoPipe {
    transform(value, userId, id, title, completed) {
        return value;
    }
};
PitodoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pitodo'
    })
], PitodoPipe);



/***/ }),

/***/ "./src/app/servises/albomsser.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servises/albomsser.service.ts ***!
  \***********************************************/
/*! exports provided: AlbomsserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbomsserService", function() { return AlbomsserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _serviss_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serviss/base.service */ "./src/app/serviss/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AlbomsserService = class AlbomsserService extends _serviss_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http, "albums");
    }
};
AlbomsserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AlbomsserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlbomsserService);



/***/ }),

/***/ "./src/app/servises/photos.service.ts":
/*!********************************************!*\
  !*** ./src/app/servises/photos.service.ts ***!
  \********************************************/
/*! exports provided: PhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function() { return PhotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _serviss_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serviss/base.service */ "./src/app/serviss/base.service.ts");




let PhotosService = class PhotosService extends _serviss_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super(http, "photos");
        this.tenPhotose = [];
    }
    lastTenPhotos() {
        this.Photosett = this.data.value;
        console.log("post", this.Photosett);
        for (let i = this.Photosett.length - 10; i <= this.Photosett.length - 1; i++) {
            this.tenPhotose.push(this.Photosett[i]);
        }
        console.log("tenpos", this.tenPhotose);
    }
};
PhotosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PhotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PhotosService);



/***/ }),

/***/ "./src/app/serviss/base.service.ts":
/*!*****************************************!*\
  !*** ./src/app/serviss/base.service.ts ***!
  \*****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class BaseService {
    constructor(http, type) {
        this.http = http;
        this.type = type;
        //  ddata:BehaviorSubject<T[]>=new BehaviorSubject<T[]>([])
        // o:Observable<T[]>=this.ddata
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.api = type;
        // this.setArray(http,type)
        this.setArrayToDdata(http, type);
    }
    setArrayToDdata(http, type) {
        let stor = localStorage[this.type];
        if (stor != null) {
            this.data.next(JSON.parse(stor));
            console.log("data from locallstoreg", this.data);
        }
        else {
            let api = "https://jsonplaceholder.typicode.com/" + type;
            this.http.get(api)
                .subscribe(td => {
                this.data.next(td);
                console.log("data from http", this.data);
            });
        }
    }
    //  setArray(http:HttpClient,type:string){
    //   let stor = localStorage[this.type]
    //   if(stor!=null){
    //     this.data=JSON.parse(stor)
    //     console.log("data from locallstoreg",this.data)
    //   }
    //   else{
    //     let api = "https://jsonplaceholder.typicode.com/"+type
    //     this.http.get<T[]>(api)
    //   .subscribe(td=>{this.data=td
    //     console.log("data from http",this.data)
    //   })
    //   }
    // }
    addItem(newItem) {
        console.log("add to do");
        let arr = this.data.value;
        arr.push(newItem);
        this.data.next(arr);
        console.log("arrey length", this.data.subscribe(d => { d.length; }));
        localStorage.setItem(this.api, JSON.stringify(arr));
        console.log("locallstor", localStorage.getItem(this.api));
    }
}


/***/ }),

/***/ "./src/app/serviss/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/serviss/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginService = class LoginService {
    constructor(rout) {
        this.rout = rout;
        this.islog = false;
        this.rout.events.subscribe(rouevent => {
            if (rouevent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (this.islog == false) {
                    this.rout.navigateByUrl("/login");
                }
            }
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/serviss/posts.service.ts":
/*!******************************************!*\
  !*** ./src/app/serviss/posts.service.ts ***!
  \******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/serviss/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PostsService = class PostsService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http, "posts");
        this.tenpos = [];
    }
    lastTenPost() {
        this.posttt = this.data.value;
        console.log("post", this.posttt);
        for (let i = this.posttt.length - 10; i <= this.posttt.length - 1; i++) {
            this.tenpos.push(this.posttt[i]);
        }
        console.log("tenpos", this.tenpos);
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostsService);



/***/ }),

/***/ "./src/app/serviss/todo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/serviss/todo.service.ts ***!
  \*****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/serviss/base.service.ts");




let TodoService = class TodoService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(__Http) {
        super(__Http, "todos");
    }
};
TodoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodoService);



/***/ }),

/***/ "./src/app/serviss/users.service.ts":
/*!******************************************!*\
  !*** ./src/app/serviss/users.service.ts ***!
  \******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/serviss/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let UsersService = class UsersService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http, "users");
    }
    findnamebyid(id) {
        // let use:string
        //    this.data.subscribe(ss=> {
        //      use= ss.find(us=>id==us.id).name})
        return this.data.value.find(us => id == us.id).name;
    }
    findUsernamebyid(id) {
        // let usid:string
        // this.data.subscribe(ee => {usid= ee.find(us=>us.id==id).username })
        // return usid
        return this.data.value.find(us => us.id == id).username;
    }
    findUserid(id) {
        // let uesid:{}
        // this.data.subscribe(a => {uesid= a.find(us=>us.id==id)}) 
        // return uesid
        return this.data.value.find(us => us.id == id);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/student/Desktop/angular/lessens/lessen 3/newbigproject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map