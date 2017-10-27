import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'http://www.em.com.br/';

let getNews = html => {
    let $ = cheerio.load(html);
    let arr = [];
    $('[data-destaque="titulo"]')
        .each((index, item) => arr.push({
            title: $(item).text(),
            link : $(item).closest('[data-destaque="link"]').attr('href'),
        }));
    return arr;
};

const crawlerInfo: ICrawlerInfo = {
    get: () => {
        requestPromise(url)
            .then(getNews)
            .then(prettyjson.render)
            .then(console.log);
    },
    url,
};

export default crawlerInfo;
