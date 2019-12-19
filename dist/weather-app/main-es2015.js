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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\r\n  <mat-sidenav #sidenav>\r\n      <app-sidenav-list (CloseSidenav)=\"sidenav.close()\"></app-sidenav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n      <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n      <main>\r\n          <router-outlet></router-outlet>\r\n      </main>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>favorites works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/weather-tile/weather-tile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/weather-tile/weather-tile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>weather-tile works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n        <div fxHide.gt-xs>\r\n            <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n        </div>\r\n        <div>\r\n            <a [routerLink]=\"[ '/' ]\">\r\n                <mat-icon>filter_drama</mat-icon>\r\n                Weather\r\n            </a>\r\n        </div>\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end\" fxHide.xs>\r\n            <ul class=\"nav-items\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n                <li>\r\n                    <a [routerLink]=\"[ '/' ]\" routerLinkActive=\"active\">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"[ '/favorites' ]\" routerLinkActive=\"active\">Favorites</a>\r\n                </li>\r\n                <li>\r\n                    <button mat-button>\r\n                        <mat-icon>color_lense</mat-icon>\r\n                    </button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\r\n    <a  mat-list-item [routerLink]=\"[ '/' ]\" routerLinkActive=\"active\" (click)=\"onClose()\">\r\n        <mat-icon >filter_drama</mat-icon>\r\n        <span class=\"nav-caption\">Home</span>\r\n    </a>\r\n    <a mat-list-item [routerLink]=\"[ '/favorites' ]\" routerLinkActive=\"active\" (click)=\"onClose()\">\r\n        <mat-icon>favorite</mat-icon>\r\n        <span class=\"nav-caption\">Favorites</span>\r\n    </a>\r\n    <mat-list-item>\r\n            <button mat-icon-button (click)=\"onClose()\">\r\n                    <mat-icon>color_lense</mat-icon>\r\n                    <span class=\"nav-caption\">Toggle Dark Theme</span>\r\n                </button>\r\n    </mat-list-item>\r\n        \r\n</mat-nav-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/weather-details/weather-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/weather/weather-details/weather-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"2rem\">\r\n  <div class=\"search-bar\" fxLayout fxLayoutAlign=\"center\">\r\n    <mat-form-field>\r\n        <input type=\"text\" matInput [matAutocomplete]=\"auto\" \r\n        [(ngModel)]=\"searchValue\" \r\n        (keyup)=\"onStartSearch()\" \r\n        placeholder=\"Start typing a city name\">\r\n      </mat-form-field>\r\n      \r\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onSelectCity($event)\">\r\n        <mat-option *ngFor=\"let option of cities\" [value]=\"option\">{{option.LocalizedName}}</mat-option>\r\n      </mat-autocomplete>\r\n</div>\r\n\r\n<div class=\"weather-details-wrapper\" fxLayout fxLayoutAlign=\"center center\" fxLayoutGap=\"1rem\">\r\n  <mat-card fxFlex.gt-xs=\"90%\" fxFlex.xs=\"100%\">\r\n    <mat-card-header fxLayout.xs=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign.xs=\"center center\">\r\n      <div mat-card-avatar class=\"city-header-image\"></div>\r\n      <mat-card-title>\r\n        {{ selectedLocation?.LocalizedName }}\r\n      </mat-card-title>\r\n      <mat-card-subtitle fxLayoutAlign.xs=\"center center\">\r\n        <span>{{ selectedLocationWeather?.DailyForecasts[0].Temperature.Maximum.Value }} &deg;</span> \r\n        <span>{{ selectedLocationWeather?.DailyForecasts[0].Temperature.Maximum.Unit }}</span>\r\n      </mat-card-subtitle>\r\n      <div fxFlex></div>\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start end\">\r\n        <button mat-raised-button> <mat-icon>favorite</mat-icon> Add to favorites</button>\r\n      </div>\r\n    </mat-card-header>\r\n    <mat-card-content *ngIf=\"selectedLocationWeather\" \r\n                      fxLayout=\"column\" \r\n                      fxLayoutGap=\"5rem\"\r\n                      fxLayoutAlign=\"center\">\r\n      <div class=\"current-condition\" fxFlex>\r\n        <h1>{{ selectedLocationWeather?.DailyForecasts[0].Day.IconPhrase}}</h1>\r\n      </div>\r\n      <div class=\"daily-forecast-cards\" fxFlex fxLayout.lt-md=\"column\"\r\n          fxLayout.gt-sm=\"row\" \r\n          fxLayoutGap=\"3rem\"\r\n          fxLayoutAlign=\"center\">\r\n        <mat-card *ngFor=\"let day of selectedLocationWeather.DailyForecasts\" fxFlex fxLayout=\"column\" fxLayoutGap=\"1rem\" fxLayoutAlign=\"center center\">\r\n          <mat-card-header>\r\n            <mat-card-title>\r\n              {{ day.Day.IconPhrase }}\r\n            </mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <span>{{ day.Temperature.Maximum.Value }} &deg;</span> \r\n            <span>{{ day.Temperature.Maximum.Unit }}</span>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>  \r\n</div>");

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

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container,\nmat-sidenav-content,\nmat-sidenav {\n  height: 100%;\n}\nmat-sidenav {\n  width: 15rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvdXNlcjEvRGVza3RvcC9yb24vUm9uLUJpdGVybWFuLTE4LTEyLTIwMTkvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBQ0ksWUFBQTtBQ0dKO0FEQUE7RUFDSSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMTVyZW07XG59XG5cbiIsIm1hdC1zaWRlbmF2LWNvbnRhaW5lcixcbm1hdC1zaWRlbmF2LWNvbnRlbnQsXG5tYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDE1cmVtO1xufVxuIl19 */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'weather-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
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
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/modules/app-routing.module */ "./src/app/shared/modules/app-routing.module.ts");
/* harmony import */ var _shared_modules_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/modules/app-material.module */ "./src/app/shared/modules/app-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _weather_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./weather/weather-details/weather-details.component */ "./src/app/weather/weather-details/weather-details.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _favorites_weather_tile_weather_tile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./favorites/weather-tile/weather-tile.component */ "./src/app/favorites/weather-tile/weather-tile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_9__["SidenavListComponent"],
            _weather_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_11__["WeatherDetailsComponent"],
            _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__["FavoritesComponent"],
            _favorites_weather_tile_weather_tile_component__WEBPACK_IMPORTED_MODULE_13__["WeatherTileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_modules_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_modules_app_material_module__WEBPACK_IMPORTED_MODULE_6__["AppMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/favorites/favorites.component.less":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoritesComponent = class FavoritesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.less */ "./src/app/favorites/favorites.component.less")).default]
    })
], FavoritesComponent);



/***/ }),

/***/ "./src/app/favorites/weather-tile/weather-tile.component.less":
/*!********************************************************************!*\
  !*** ./src/app/favorites/weather-tile/weather-tile.component.less ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy93ZWF0aGVyLXRpbGUvd2VhdGhlci10aWxlLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "./src/app/favorites/weather-tile/weather-tile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/favorites/weather-tile/weather-tile.component.ts ***!
  \******************************************************************/
/*! exports provided: WeatherTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherTileComponent", function() { return WeatherTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherTileComponent = class WeatherTileComponent {
    constructor() { }
    ngOnInit() {
    }
};
WeatherTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-tile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-tile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/weather-tile/weather-tile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-tile.component.less */ "./src/app/favorites/weather-tile/weather-tile.component.less")).default]
    })
], WeatherTileComponent);



/***/ }),

/***/ "./src/app/navigation/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.less ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: white;\n}\na:hover,\na:active {\n  color: lightgray;\n}\n.nav-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvQzovVXNlcnMvdXNlcjEvRGVza3RvcC9yb24vUm9uLUJpdGVybWFuLTE4LTEyLTIwMTkvc3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7O0VBQ0ksZ0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciwgYTphY3RpdmUge1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5uYXYtaXRlbXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59IiwiYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5uYXYtaXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onToggleSidenav() {
        this.sidenavToggle.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "sidenavToggle", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.less */ "./src/app/navigation/header/header.component.less")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: white;\n}\na:hover,\na:active {\n  color: lightgray;\n}\n.nav-caption {\n  display: inline;\n  padding-left: 6px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3QvQzovVXNlcnMvdXNlcjEvRGVza3RvcC9yb24vUm9uLUJpdGVybWFuLTE4LTEyLTIwMTkvc3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vc2lkZW5hdi1saXN0L3NpZGVuYXYtbGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7O0VBQ0ksZ0JBQUE7QUNDSjtBRElBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuXG5cbi5uYXYtY2FwdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xufSIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4ubmF2LWNhcHRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavListComponent = class SidenavListComponent {
    constructor() {
        this.CloseSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClose() {
        this.CloseSidenav.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidenavListComponent.prototype, "CloseSidenav", void 0);
SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidenav-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidenav-list.component.less */ "./src/app/navigation/sidenav-list/sidenav-list.component.less")).default]
    })
], SidenavListComponent);



/***/ }),

/***/ "./src/app/shared/modules/app-material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/app-material.module.ts ***!
  \*******************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AppMaterialModule = class AppMaterialModule {
};
AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"]
        ],
    })
], AppMaterialModule);



/***/ }),

/***/ "./src/app/shared/modules/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/modules/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _weather_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../weather/weather-details/weather-details.component */ "./src/app/weather/weather-details/weather-details.component.ts");
/* harmony import */ var src_app_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");





const routes = [
    { path: '', component: _weather_weather_details_weather_details_component__WEBPACK_IMPORTED_MODULE_3__["WeatherDetailsComponent"] },
    { path: 'favorites', component: src_app_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"] }
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

/***/ "./src/app/shared/services/weather-service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/weather-service.ts ***!
  \****************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'forecast/v1';
const API_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiKey;
let WeatherService = class WeatherService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isMetric = true;
        this.fiveDaysForecastUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    toggleMetricUnits() {
        this.isMetric = !this.isMetric;
    }
    getCurrentWeather(key) {
    }
    getWeatherForCityFiveDays(key) {
        const queryParams = `?apikey=${API_KEY}&metric=${this.isMetric}`;
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            this.http.get('assets/stubs/forecast/fiveDay').subscribe((data) => {
                // this.autocompleteResults = data;
                this.fiveDaysForecastUpdate.next(data);
            });
        }
        else {
            this.http.get(BACKEND_URL + '/daily/5day/' + key + queryParams)
                .subscribe((data) => {
                // this.autocompleteResults = data;
                this.fiveDaysForecastUpdate.next(data);
            });
        }
    }
    getFiveDaysForecastUpdateListener() {
        return this.fiveDaysForecastUpdate.asObservable();
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], WeatherService);



/***/ }),

/***/ "./src/app/weather/locations-service.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/locations-service.ts ***!
  \**********************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'locations/v1';
const API_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiKey;
let LocationsService = class LocationsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.autocompleteResults = [];
        this.autocompleteUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentPosUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getCurrentLocationByLatLong(lat, long) {
        const queryParams = `?apikey=${API_KEY}&q=${lat},${long}&toplevel=true`;
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            this.http.get('assets/stubs/location/getLocationByLatLong')
                .subscribe((data) => {
                this.currentPosUpdate.next(data);
            });
        }
        else {
            this.http.get(BACKEND_URL + '/cities/geoposition/search' + queryParams)
                .subscribe((data) => {
                this.currentPosUpdate.next(data);
            });
        }
    }
    getAutocompleteCitys(value) {
        const queryParams = `?apikey=${API_KEY}&q=${value}`;
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            this.http.get('assets/stubs/location/autocomplete')
                .subscribe((data) => {
                this.autocompleteResults = data;
                this.autocompleteUpdate.next([...data]);
            });
        }
        else {
            this.http.get(BACKEND_URL + '/cities/autocomplete' + queryParams)
                .subscribe((data) => {
                this.autocompleteResults = data;
                this.autocompleteUpdate.next([...data]);
            });
        }
    }
    getAutocompleteUpdateListener() {
        return this.autocompleteUpdate.asObservable();
    }
    getCurrentLocationUpdateListener() {
        return this.currentPosUpdate.asObservable();
    }
};
LocationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LocationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LocationsService);



/***/ }),

/***/ "./src/app/weather/weather-details/weather-details.component.less":
/*!************************************************************************!*\
  !*** ./src/app/weather/weather-details/weather-details.component.less ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-bar {\n  margin-top: 2rem;\n}\nmat-form-field {\n  width: 20rem;\n}\n.city-header-image {\n  background-image: url('location_city-24px.svg');\n  background-size: cover;\n}\nmat-card-content .current-condition {\n  margin-top: 5rem;\n  text-align: center;\n}\nmat-card-content .daily-forecast-cards {\n  margin-bottom: 3rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLWRldGFpbHMvQzovVXNlcnMvdXNlcjEvRGVza3RvcC9yb24vUm9uLUJpdGVybWFuLTE4LTEyLTIwMTkvc3JjL2FwcC93ZWF0aGVyL3dlYXRoZXItZGV0YWlscy93ZWF0aGVyLWRldGFpbHMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci1kZXRhaWxzL3dlYXRoZXItZGV0YWlscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNBSjtBREdBO0VBQ0ksK0NBQUE7RUFDQSxzQkFBQTtBQ0RKO0FESUE7RUFFUSxnQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURBQTtFQU1RLG1CQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyL3dlYXRoZXItZGV0YWlscy93ZWF0aGVyLWRldGFpbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAyMHJlbTtcbn1cblxuLmNpdHktaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9sb2NhdGlvbl9jaXR5LTI0cHguc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gICAgLmN1cnJlbnQtY29uZGl0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZGFpbHktZm9yZWNhc3QtY2FyZHMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cbn1cbiIsIi5zZWFyY2gtYmFyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDIwcmVtO1xufVxuLmNpdHktaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvbG9jYXRpb25fY2l0eS0yNHB4LnN2ZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxubWF0LWNhcmQtY29udGVudCAuY3VycmVudC1jb25kaXRpb24ge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYXQtY2FyZC1jb250ZW50IC5kYWlseS1mb3JlY2FzdC1jYXJkcyB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/weather/weather-details/weather-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/weather/weather-details/weather-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: WeatherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDetailsComponent", function() { return WeatherDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../locations-service */ "./src/app/weather/locations-service.ts");
/* harmony import */ var src_app_shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/weather-service */ "./src/app/shared/services/weather-service.ts");




let WeatherDetailsComponent = class WeatherDetailsComponent {
    constructor(locationService, weatherService) {
        this.locationService = locationService;
        this.weatherService = weatherService;
        this.searchValue = '';
        this.cities = [];
        this.isLoading = false;
    }
    ngOnInit() {
        if (navigator.geolocation) {
            const geoSuccess = (position) => {
                this.currentLatLong = position;
                this.locationService.getCurrentLocationByLatLong(position.coords.latitude, position.coords.longitude);
                this.currentPosSub = this.locationService.getCurrentLocationUpdateListener()
                    .subscribe((data) => {
                    this.currentLocation = data;
                    this.selectedLocation = data;
                    this.weatherService.getWeatherForCityFiveDays(this.selectedLocation.Key);
                });
            };
            navigator.geolocation.getCurrentPosition(geoSuccess);
        }
        else {
            console.log('Geolocation is not supported for this Browser/OS.');
        }
        this.citiesSub = this.locationService.getAutocompleteUpdateListener()
            .subscribe((data) => {
            this.isLoading = false;
            this.cities = data;
        });
        this.weaterForecastSub = this.weatherService.getFiveDaysForecastUpdateListener()
            .subscribe((data) => {
            this.isLoading = false;
            this.selectedLocationWeather = data;
        });
    }
    onStartSearch() {
        if (this.searchValue.length > 2) {
            this.isLoading = true;
            this.locationService.getAutocompleteCitys(this.searchValue);
        }
        else {
            this.cities = [];
        }
    }
    onSelectCity($event) {
        console.log($event);
        this.searchValue = $event.option.value.LocalizedName;
        this.selectedLocation = $event.option.value;
        this.weatherService.getWeatherForCityFiveDays(this.selectedLocation.Key);
    }
    ngOnDestroy() {
        this.citiesSub.unsubscribe();
        this.currentPosSub.unsubscribe();
    }
};
WeatherDetailsComponent.ctorParameters = () => [
    { type: _locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"] },
    { type: src_app_shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }
];
WeatherDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/weather/weather-details/weather-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-details.component.less */ "./src/app/weather/weather-details/weather-details.component.less")).default]
    })
], WeatherDetailsComponent);



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
    production: false,
    apiUrl: 'http://dataservice.accuweather.com/',
    apiKey: 'SfBFsHGTU3GYr6eygTeXRayxbGQyb9XS'
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

module.exports = __webpack_require__(/*! C:\Users\user1\Desktop\ron\Ron-Biterman-18-12-2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map