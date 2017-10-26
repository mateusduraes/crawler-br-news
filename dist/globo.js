"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestPromise = require("request-promise");
var cheerio = require("cheerio");
var prettyjson = require("prettyjson");
var getNews = function (html) {
    var $ = cheerio.load(html);
    var arr = [];
    $('.feed-post-body-title')
        .each(function (index, item) { return arr.push({
        title: $(item).text()
    }); });
    return arr;
};
requestPromise('http://www.g1.globo.com')
    .then(getNews)
    .then(prettyjson.render)
    .then(console.log);
