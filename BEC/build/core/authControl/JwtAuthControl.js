"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var standard_http_error_1 = __importDefault(require("standard-http-error"));
var JwtAuthControl = /** @class */ (function () {
    function JwtAuthControl() {
    }
    JwtAuthControl.prototype.sign = function (valueToEncode, secret, options) {
        if (options === void 0) { options = null; }
        try {
            var token = jsonwebtoken_1.default.sign({ payload: valueToEncode }, secret, options);
            return token;
        }
        catch (error) {
            console.log("sign ----- error ", error);
            throw new standard_http_error_1.default(500, "InternalServerError");
        }
    };
    JwtAuthControl.prototype.decode = function (verifyToken, secret) {
        try {
            var decoded = jsonwebtoken_1.default.verify(verifyToken, secret, { ignoreExpiration: true });
            return decoded.payload;
        }
        catch (error) {
            console.log("JwtAuthControl.decode error ==> ", error);
            throw new standard_http_error_1.default(401, "Unauthorized");
        }
    };
    JwtAuthControl.prototype.decodeRequestHeader = function (req, secret) {
        try {
            var token = req.headers.authorization;
            return this.decode(token, secret);
        }
        catch (error) {
            console.log("JwtAuthControl.decodeRequestHeader error ==> ", error);
            throw new standard_http_error_1.default(401, "Unauthorized");
        }
    };
    JwtAuthControl.prototype.decodeWithoutVerifying = function (token) {
        try {
            var decoded = jsonwebtoken_1.default.decode(token);
            return decoded;
        }
        catch (error) {
            console.log("JwtAuthControl.decodeWithoutVerifying error ==> ", error);
            throw new standard_http_error_1.default(401, "Unauthorized");
        }
    };
    return JwtAuthControl;
}());
exports.default = JwtAuthControl;
