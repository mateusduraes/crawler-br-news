import * as requestPromise from 'request-promise';
import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';

const getNews = (html) => {
  const $ = cheerio.load(html);
  const arr = [];
  $('.feed-post-body-title')
    .each((index, item) => arr.push({
      title: $(item).text()
    }));
  return arr;
};

requestPromise('http://www.g1.globo.com')
  .then(getNews)
  .then(prettyjson.render)
  .then(console.log);
