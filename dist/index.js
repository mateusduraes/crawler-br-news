"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestPromise = require("request-promise");
var cheerio = require("cheerio");
var prettyjson = require("prettyjson");
var getNews = function (html) {
    var $ = cheerio.load(html);
    var arr = [];
    $('[data-destaque="titulo"]')
        .each(function (index, item) { return arr.push({
        title: $(item).text(),
        link: $(item).closest('[data-destaque="link"]').attr('href')
    }); });
    return arr;
};
requestPromise('http://www.em.com.br/')
    .then(getNews)
    .then(prettyjson.render)
    .then(console.log);
