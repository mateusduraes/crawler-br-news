import * as requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';

const getNews = (html) => {
  const $ = cheerio.load(html);
  const arr = [];
  $('section[class*="block-saiba-agora-"] h3')
    .each((index, item) => arr.push({
      title: $(item).text()
    }));
  return arr;
};

requestPromise('http://www.estadao.com.br')
  .then(getNews)
  .then(prettyjson.render)
  .then(console.log);
