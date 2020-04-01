const { SwaggerRouter } = require('koa-swagger-decorator');
const path = require('path');
const router = new SwaggerRouter();

router.swagger({
    title:'千家严选公众号后台服务',
    description: 'selected',
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
router.mapDir(path.resolve(__dirname, '../controllers'));
module.default = router;
