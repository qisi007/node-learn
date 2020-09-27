import { TestDb } from '../dao/index'
export class Test {
    private readonly dao: TestDb = new TestDb();
    constructor() {
        
    }

    getList () {
       return 12
    }

    async insertData () {
        let res = await this.dao.insertData({}); 
        res.name
        res.age
        return res.name;
    }
}