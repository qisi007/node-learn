import { SwaggerRouter } from "koa-swagger-decorator";
import path from 'path';


const swaggerRouter = new SwaggerRouter();

swaggerRouter.swagger({
    title:'日志',
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

swaggerRouter.mapDir(path.resolve(__dirname, '../controller'));

export default swaggerRouter;