(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gwladalah/Documents/Developpement/Projets/Larangular/larangular/public/angular/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "FDtu":
/*!*********************************************!*\
  !*** ./src/app/Service/get-date.service.ts ***!
  \*********************************************/
/*! exports provided: GetDateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDateService", function() { return GetDateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GetDateService {
    constructor() {
        this.today = new Date();
    }
    now() {
        return this.today.getDate() + '-' + (String(this.today.getMonth() + 1).padStart(2, '0')) + '-' + this.today.getFullYear() + " " + (String(this.today.getHours()).padStart(2, '0')) + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    }
}
GetDateService.ɵfac = function GetDateService_Factory(t) { return new (t || GetDateService)(); };
GetDateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetDateService, factory: GetDateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetDateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MROq":
/*!**********************************************************************************************************************!*\
  !*** /home/gwladalah/Documents/Developpement/Projets/Larangular/larangular/node_modules/moment/locale sync ^\.\/.*$ ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "8GSH",
	"./af.js": "8GSH",
	"./ar": "NcOb",
	"./ar-dz": "1ors",
	"./ar-dz.js": "1ors",
	"./ar-kw": "Sc1Y",
	"./ar-kw.js": "Sc1Y",
	"./ar-ly": "GzvP",
	"./ar-ly.js": "GzvP",
	"./ar-ma": "hH25",
	"./ar-ma.js": "hH25",
	"./ar-sa": "u2jB",
	"./ar-sa.js": "u2jB",
	"./ar-tn": "5Mza",
	"./ar-tn.js": "5Mza",
	"./ar.js": "NcOb",
	"./az": "ZVVJ",
	"./az.js": "ZVVJ",
	"./be": "kQaN",
	"./be.js": "kQaN",
	"./bg": "+n5x",
	"./bg.js": "+n5x",
	"./bm": "TTiN",
	"./bm.js": "TTiN",
	"./bn": "aIF2",
	"./bn.js": "aIF2",
	"./bo": "QWb5",
	"./bo.js": "QWb5",
	"./br": "iQoZ",
	"./br.js": "iQoZ",
	"./bs": "EL7g",
	"./bs.js": "EL7g",
	"./ca": "vd/2",
	"./ca.js": "vd/2",
	"./cs": "K+3W",
	"./cs.js": "K+3W",
	"./cv": "Jt3X",
	"./cv.js": "Jt3X",
	"./cy": "sWi3",
	"./cy.js": "sWi3",
	"./da": "YcFX",
	"./da.js": "YcFX",
	"./de": "BKZ+",
	"./de-at": "Oq9h",
	"./de-at.js": "Oq9h",
	"./de-ch": "hHY4",
	"./de-ch.js": "hHY4",
	"./de.js": "BKZ+",
	"./dv": "w8Ej",
	"./dv.js": "w8Ej",
	"./el": "tSbB",
	"./el.js": "tSbB",
	"./en-au": "HgyJ",
	"./en-au.js": "HgyJ",
	"./en-ca": "ZyTy",
	"./en-ca.js": "ZyTy",
	"./en-gb": "exaB",
	"./en-gb.js": "exaB",
	"./en-ie": "yKzn",
	"./en-ie.js": "yKzn",
	"./en-il": "TB59",
	"./en-il.js": "TB59",
	"./en-in": "S70V",
	"./en-in.js": "S70V",
	"./en-nz": "iDxo",
	"./en-nz.js": "iDxo",
	"./en-sg": "zS0P",
	"./en-sg.js": "zS0P",
	"./eo": "4bvN",
	"./eo.js": "4bvN",
	"./es": "GNPT",
	"./es-do": "R7mU",
	"./es-do.js": "R7mU",
	"./es-us": "Nstw",
	"./es-us.js": "Nstw",
	"./es.js": "GNPT",
	"./et": "ZOjb",
	"./et.js": "ZOjb",
	"./eu": "kFC9",
	"./eu.js": "kFC9",
	"./fa": "8Cju",
	"./fa.js": "8Cju",
	"./fi": "vcN1",
	"./fi.js": "vcN1",
	"./fil": "3g1g",
	"./fil.js": "3g1g",
	"./fo": "8Ygf",
	"./fo.js": "8Ygf",
	"./fr": "Y8Ij",
	"./fr-ca": "t+Zl",
	"./fr-ca.js": "t+Zl",
	"./fr-ch": "SPXN",
	"./fr-ch.js": "SPXN",
	"./fr.js": "Y8Ij",
	"./fy": "T3MF",
	"./fy.js": "T3MF",
	"./ga": "NowM",
	"./ga.js": "NowM",
	"./gd": "GJYX",
	"./gd.js": "GJYX",
	"./gl": "MdC8",
	"./gl.js": "MdC8",
	"./gom-deva": "QJjq",
	"./gom-deva.js": "QJjq",
	"./gom-latn": "5j0y",
	"./gom-latn.js": "5j0y",
	"./gu": "fY0S",
	"./gu.js": "fY0S",
	"./he": "ACAV",
	"./he.js": "ACAV",
	"./hi": "3WqV",
	"./hi.js": "3WqV",
	"./hr": "OnNk",
	"./hr.js": "OnNk",
	"./hu": "EQmw",
	"./hu.js": "EQmw",
	"./hy-am": "MNf7",
	"./hy-am.js": "MNf7",
	"./id": "0yow",
	"./id.js": "0yow",
	"./is": "TmOJ",
	"./is.js": "TmOJ",
	"./it": "xD/0",
	"./it-ch": "foQf",
	"./it-ch.js": "foQf",
	"./it.js": "xD/0",
	"./ja": "jOnb",
	"./ja.js": "jOnb",
	"./jv": "lOtj",
	"./jv.js": "lOtj",
	"./ka": "BAN/",
	"./ka.js": "BAN/",
	"./kk": "iNiw",
	"./kk.js": "iNiw",
	"./km": "TUxt",
	"./km.js": "TUxt",
	"./kn": "hQzt",
	"./kn.js": "hQzt",
	"./ko": "ZNZT",
	"./ko.js": "ZNZT",
	"./ku": "S0Tg",
	"./ku.js": "S0Tg",
	"./ky": "JO+T",
	"./ky.js": "JO+T",
	"./lb": "vn/h",
	"./lb.js": "vn/h",
	"./lo": "gnIm",
	"./lo.js": "gnIm",
	"./lt": "6PD3",
	"./lt.js": "6PD3",
	"./lv": "YKe2",
	"./lv.js": "YKe2",
	"./me": "d3TR",
	"./me.js": "d3TR",
	"./mi": "hTlv",
	"./mi.js": "hTlv",
	"./mk": "ffVN",
	"./mk.js": "ffVN",
	"./ml": "ejL1",
	"./ml.js": "ejL1",
	"./mn": "RIsM",
	"./mn.js": "RIsM",
	"./mr": "CPJk",
	"./mr.js": "CPJk",
	"./ms": "d5Hy",
	"./ms-my": "t4T9",
	"./ms-my.js": "t4T9",
	"./ms.js": "d5Hy",
	"./mt": "1KVU",
	"./mt.js": "1KVU",
	"./my": "LsNb",
	"./my.js": "LsNb",
	"./nb": "h+U8",
	"./nb.js": "h+U8",
	"./ne": "2JSI",
	"./ne.js": "2JSI",
	"./nl": "jsZ8",
	"./nl-be": "+h6j",
	"./nl-be.js": "+h6j",
	"./nl.js": "jsZ8",
	"./nn": "mh29",
	"./nn.js": "mh29",
	"./oc-lnc": "zX+o",
	"./oc-lnc.js": "zX+o",
	"./pa-in": "O6bP",
	"./pa-in.js": "O6bP",
	"./pl": "8Bez",
	"./pl.js": "8Bez",
	"./pt": "DDip",
	"./pt-br": "uHm5",
	"./pt-br.js": "uHm5",
	"./pt.js": "DDip",
	"./ro": "baBi",
	"./ro.js": "baBi",
	"./ru": "ecsu",
	"./ru.js": "ecsu",
	"./sd": "e9KM",
	"./sd.js": "e9KM",
	"./se": "CZRU",
	"./se.js": "CZRU",
	"./si": "TO58",
	"./si.js": "TO58",
	"./sk": "K+Lk",
	"./sk.js": "K+Lk",
	"./sl": "QK6v",
	"./sl.js": "QK6v",
	"./sq": "v3Qg",
	"./sq.js": "v3Qg",
	"./sr": "Ndyf",
	"./sr-cyrl": "PGvg",
	"./sr-cyrl.js": "PGvg",
	"./sr.js": "Ndyf",
	"./ss": "2B8G",
	"./ss.js": "2B8G",
	"./sv": "WF5B",
	"./sv.js": "WF5B",
	"./sw": "4VvY",
	"./sw.js": "4VvY",
	"./ta": "dw3T",
	"./ta.js": "dw3T",
	"./te": "4MAb",
	"./te.js": "4MAb",
	"./tet": "/hi0",
	"./tet.js": "/hi0",
	"./tg": "PoVJ",
	"./tg.js": "PoVJ",
	"./th": "OY2w",
	"./th.js": "OY2w",
	"./tk": "zO4H",
	"./tk.js": "zO4H",
	"./tl-ph": "UC+K",
	"./tl-ph.js": "UC+K",
	"./tlh": "cWLW",
	"./tlh.js": "cWLW",
	"./tr": "EqYs",
	"./tr.js": "EqYs",
	"./tzl": "fN8o",
	"./tzl.js": "fN8o",
	"./tzm": "6cYq",
	"./tzm-latn": "pdAN",
	"./tzm-latn.js": "pdAN",
	"./tzm.js": "6cYq",
	"./ug-cn": "J+SV",
	"./ug-cn.js": "J+SV",
	"./uk": "6Olw",
	"./uk.js": "6Olw",
	"./ur": "QNGR",
	"./ur.js": "QNGR",
	"./uz": "hLzJ",
	"./uz-latn": "KqOT",
	"./uz-latn.js": "KqOT",
	"./uz.js": "hLzJ",
	"./vi": "EnIJ",
	"./vi.js": "EnIJ",
	"./x-pseudo": "W7dU",
	"./x-pseudo.js": "W7dU",
	"./yo": "QDhB",
	"./yo.js": "QDhB",
	"./zh-cn": "bjMe",
	"./zh-cn.js": "bjMe",
	"./zh-hk": "JFCg",
	"./zh-hk.js": "JFCg",
	"./zh-mo": "5BRa",
	"./zh-mo.js": "5BRa",
	"./zh-tw": "xBDH",
	"./zh-tw.js": "xBDH"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "MROq";

/***/ }),

/***/ "Psk1":
/*!****************************************!*\
  !*** ./src/app/Pipes/from-now.pipe.ts ***!
  \****************************************/
/*! exports provided: FromNowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromNowPipe", function() { return FromNowPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wgY5");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class FromNowPipe {
    transform(value, ...args) {
        let time = moment__WEBPACK_IMPORTED_MODULE_1__(value, 'DD.MM.YYYY HH:mm:ss');
        let duration = moment__WEBPACK_IMPORTED_MODULE_1__["duration"](moment__WEBPACK_IMPORTED_MODULE_1__().diff(time));
        return duration.asSeconds();
    }
}
FromNowPipe.ɵfac = function FromNowPipe_Factory(t) { return new (t || FromNowPipe)(); };
FromNowPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fromNow", type: FromNowPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromNowPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'fromNow'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Service_get_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service/get-date.service */ "FDtu");
/* harmony import */ var _Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pipes/from-now.pipe */ "Psk1");






class AppComponent {
    constructor(date, mypipe) {
        this.date = date;
        this.mypipe = mypipe;
        this.title = 'Larangular';
        this.time = date.now();
        this.passed = mypipe.transform(this.time);
    }
    getpassed() {
        if (parseInt(this.passed) >= 60) {
            this.time = this.date.now();
        }
        this.passed = this.mypipe.transform(this.time);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Service_get_date_service__WEBPACK_IMPORTED_MODULE_1__["GetDateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__["FromNowPipe"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["la-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_Service_get_date_service__WEBPACK_IMPORTED_MODULE_1__["GetDateService"], _Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__["FromNowPipe"]])], decls: 10, vars: 3, consts: [[1, "welcome"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.getpassed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome on ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("It is : ", ctx.time, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.passed, " time pass since the component is mounted");
    } }, styles: [".welcome[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUge1xuICBtYXJnaW46IDEwcHggMTBweDsgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'la-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass'],
                providers: [_Service_get_date_service__WEBPACK_IMPORTED_MODULE_1__["GetDateService"], _Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__["FromNowPipe"]]
            }]
    }], function () { return [{ type: _Service_get_date_service__WEBPACK_IMPORTED_MODULE_1__["GetDateService"] }, { type: _Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_2__["FromNowPipe"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pipes/from-now.pipe */ "Psk1");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_3__["FromNowPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _Pipes_from_now_pipe__WEBPACK_IMPORTED_MODULE_3__["FromNowPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map