"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
exports.default = {
    entities: [Post_1.Post],
    dbName: 'reddit',
    debug: !constants_1.__prod__,
    type: 'mongo',
    clientUrl: 'mongodb://localhost:27017'
};
//# sourceMappingURL=mikro-orm.config.js.map