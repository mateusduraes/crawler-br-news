import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.lista-promocoes .informacoes')
		.each((index, item) => arr.push({
			title: String($(item).find('h3').text()).trim(),
			preco: String($(item).find('.preco').text().trim()),
			url: String($(item).find('h3').find('a').attr('href')).trim(),
		}));
	return arr;
};

const get = () => {
	requestPromise('https://gatry.com/')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
