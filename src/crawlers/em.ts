import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

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

const get = () => {
    requestPromise('http://www.em.com.br/')
        .then(getNews)
        .then(prettyjson.render)
        .then(console.log);
};

export { get };


