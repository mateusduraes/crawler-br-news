const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

const bbc_url = 'http://bbc.com'

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('a.title-link')
		.each((index, item) => arr.push({
			title: $(item).text().trim(),
			link : bbc_url + $(item).attr('href')
		}))
	return arr
}

requestPromise(bbc_url + '/portuguese/brasil')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
