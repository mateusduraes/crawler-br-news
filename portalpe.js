const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.texto7.strong.espace1 a')
		.each((index, item) => arr.push({
			title: String($(item).text()).trim()
		}))
	return arr
}
        requestPromise('http://portalpe10.com.br/')
            .then(getNews)
            .then(prettyjson.render)
            .then(console.log)
