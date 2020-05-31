class ErrorHandle extends Error {
    static list: Map<number, string> = new Map();
    constructor ( code: number, message: string) {
        super(message);
    }
}

class Errors {
    static errorList: Map<number, string> = new Map([
        [1000, "成功"],
        [4004, "未找到"],
        [5000, "服务器错误"],

    ])
    getError () {
        return
    }
}

