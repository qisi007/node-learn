"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_swagger_decorator_1 = require("koa-swagger-decorator");
const index_1 = require("../service/index");
let test = new index_1.Test();
const tag = koa_swagger_decorator_1.tags(['测试']);
class Text {
    static getData(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = yield test.getList();
        });
    }
    static postData(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(ctx.request.body);
            ctx.body = { aaa: 111, bbb: 222 };
        });
    }
}
__decorate([
    koa_swagger_decorator_1.request('get', '/getData'),
    koa_swagger_decorator_1.summary('测试'),
    tag
], Text, "getData", null);
__decorate([
    koa_swagger_decorator_1.request('post', '/postData'),
    koa_swagger_decorator_1.summary('测试'),
    koa_swagger_decorator_1.body({
        aaa: { type: "string" },
        bbb: { type: "string" }
    }),
    tag
], Text, "postData", null);
exports.default = Text;
