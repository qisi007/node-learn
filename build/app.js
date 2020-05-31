"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const index_1 = __importDefault(require("./swagger/index"));
const koa_body_1 = __importDefault(require("koa-body"));
const config_1 = require("./config/config");
const mongo_1 = require("./db/mongo");
const rest_1 = require("./middleware/rest");
const index_2 = require("./eureka/index");
let eurekaService = new index_2.EurekaService();
let app = new koa_1.default();
let { host, database, port } = config_1.projectConfig.db;
let mongoDb = new mongo_1.MongoDb(host, port, database);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoDb.link();
    yield eurekaService.start();
    app.use(koa_body_1.default());
    app.use(rest_1.rest());
    app.use(index_1.default.routes());
    app.listen(config_1.projectConfig.port);
});
start();
