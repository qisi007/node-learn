"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_swagger_decorator_1 = require("koa-swagger-decorator");
const path_1 = __importDefault(require("path"));
const swaggerRouter = new koa_swagger_decorator_1.SwaggerRouter();
swaggerRouter.swagger({
    title: '日志',
    description: '日志后台接口',
    varsion: 'v1.0.0',
    swaggerHtmlEndpoint: '/index.html',
    swaggerJsonEndpoint: '/swagger-json',
    swaggerOptions: {
        secrityDefinitions: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'QianJia'
            }
        }
    },
    swaggerConfiguration: {
        display: {
            defaultModelsExpandDepth: 4,
            defaultModelExpandDepth: 3,
            docExpansion: 'list',
            defaultModelRendering: 'model'
        }
    }
});
swaggerRouter.mapDir(path_1.default.resolve(__dirname, '../controller'));
exports.default = swaggerRouter;
