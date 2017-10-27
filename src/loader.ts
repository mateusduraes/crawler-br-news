import * as glob from 'glob';
import * as path from 'path';
import { ICrawlerInfo } from './types/crawler-info';


const crawlers: ICrawlerInfo[] = [];

glob.sync('./dist/crawlers/**/*.js').forEach( file => {
    crawlers.push(require( path.resolve( file ) ).default);
});

export { crawlers };
