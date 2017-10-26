const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
    let $ = cheerio.load(html)
    let arr = []
    $('[data-destaque="titulo"]')
        .each((index, item) => arr.push({
            title: $(item).text(),
            link : $(item).closest('[data-destaque="link"]').attr('href')
        }))
    return arr
}

module.exports = {
    get: function () {
        requestPromise('http://www.em.com.br/')
            .then(getNews)
            .then(prettyjson.render)
            .then(console.log)
    }
}