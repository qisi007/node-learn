import Koa from "koa";
import router from "./swagger/index";
import koaBody from "koa-body";
import { projectConfig } from "./config/config";
import { MongoDb } from "./db/mongo";
import { rest } from "./middleware/rest";
import { EurekaService } from "./eureka/index";

let eurekaService = new EurekaService()

let app = new Koa();

let { host, database, port } = projectConfig.db;
let mongoDb = new MongoDb(host, port, database);

const start = async () => {
    await mongoDb.link();
    await eurekaService.start()
    app.use(koaBody());
    app.use(rest())
    app.use(router.routes());
    app.listen(projectConfig.port);

}

start()








