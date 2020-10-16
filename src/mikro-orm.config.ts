import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import {MikroORM} from '@mikro-orm/core';

export default 
    {
        entities: [Post],
        dbName:'reddit',
        debug:!__prod__,
        type: 'mongo', 
        clientUrl: 'mongodb://localhost:27017'
      } as Parameters<typeof MikroORM.init>[0];
