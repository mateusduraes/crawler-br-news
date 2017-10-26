import * as requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';

const getNews = (html) => {
  const $ = cheerio.load(html);
  const arr = [];
  $('[data-destaque="titulo"]')
    .each((index, item) => arr.push({
      title: $(item).text(),
      link : $(item).closest('[data-destaque="link"]').attr('href')
    }));
  return arr;
};


requestPromise('http://www.em.com.br/')
  .then(getNews)
  .then(prettyjson.render)
  .then(console.log);

