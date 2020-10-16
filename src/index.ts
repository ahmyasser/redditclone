import {MikroORM} from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config'

(async () =>{
    const orm = await MikroORM.init(mikroConfig);
      console.log(orm.em); 
    // const post = orm.em.create(Post,{title:'sec post'});
    // await orm.em.persistAndFlush(post);  
     })().catch(err=>{
       console.error(err);
      
     });
console.log('hi there');
