#!/usr/bin/env node

const inquirer    = require('inquirer');

const em    = require('./em');
const estadao    = require('./estadao');
const globo    = require('./globo');
const availableWebsites = ['http://www.em.com.br/', 'http://www.g1.globo.com/', 'http://www.estadao.com.br/'];

function initialize() {
    let questions = [
        {
            type: 'list',
            name: 'domain',
            message: 'Please Select Website?:',
            choices: availableWebsites,
            default: availableWebsites[0]
        }
    ];

    inquirer.prompt(questions)
        .then(function(answers) {
            if(answers.domain === availableWebsites[0]){
                em.get();
            }
            else if(answers.domain === availableWebsites[1]){
                globo.get();
            }
            else if(answers.domain === availableWebsites[2]){
                estadao.get();
            }
        });
}

initialize();