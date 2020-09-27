import { TEST_MODEL, TEST_DOC } from "../model/test";
import { Document, DocumentQuery, FilterQuery } from 'mongoose'
export class TestDb {
    async insertData ( row: object ): Promise<TEST_DOC>  {
        let condition: FilterQuery<TEST_DOC> = {};
        let res = await TEST_MODEL.findOne(condition).exec();
        let data: TEST_DOC = res?.toObject()
        return data;
    }
}