#!/usr/bin/env node
import * as inquirer from 'inquirer';

const em = require('./crawlers/em');
const estadao = require('./crawlers/estadao');
const globo = require('./crawlers/globo');
const availableWebsites = ['http://www.em.com.br/', 'http://www.g1.globo.com/', 'http://www.estadao.com.br/'];

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
            if (answers.domain === availableWebsites[0]) {
                em.get();
            } else if (answers.domain === availableWebsites[1]) {
                globo.get();
            } else if (answers.domain === availableWebsites[2]) {
                estadao.get();
            }
        });
}

initialize();
