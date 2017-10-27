#!/usr/bin/env node
import * as inquirer from 'inquirer';
import * as _ from 'lodash';
import { crawlers } from './loader';
import { ICrawlerInfo } from './types/crawler-info';

const availableWebsites = crawlers.map(crawler => crawler.url);

function initialize() {
    let questions = [
        {
            type: 'list',
            name: 'domain',
            message: 'Please Select Website?:',
            choices: availableWebsites,
            default: availableWebsites[0],
        },
    ];

    inquirer.prompt(questions)
        .then((answers) => {
            const selectedCrawler: ICrawlerInfo = _.find(crawlers, crawler => crawler.url === answers.domain);
            selectedCrawler.get();
        });
}

initialize();
