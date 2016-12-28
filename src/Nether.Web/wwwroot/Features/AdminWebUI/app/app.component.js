"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var nether_api_1 = require("./nether.api");
var AppComponent = (function () {
    function AppComponent(_api) {
        var _this = this;
        this._api = _api;
        this.loggedIn = this._api.isLoggedIn();
        this._api.loggedInChanged.subscribe(function (loggedIn) {
            console.log("logged in: " + loggedIn);
            _this.loggedIn = loggedIn;
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "nether-app",
        templateUrl: "app/app.html",
        providers: [nether_api_1.NetherApiService]
    }),
    __metadata("design:paramtypes", [nether_api_1.NetherApiService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map