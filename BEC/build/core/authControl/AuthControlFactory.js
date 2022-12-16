"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JwtAuthControl_1 = __importDefault(require("./JwtAuthControl"));
var AuthControlFactory = /** @class */ (function () {
    function AuthControlFactory() {
    }
    AuthControlFactory.prototype.create = function () {
        var authControl = new JwtAuthControl_1.default();
        return authControl;
    };
    return AuthControlFactory;
}());
exports.default = AuthControlFactory;
