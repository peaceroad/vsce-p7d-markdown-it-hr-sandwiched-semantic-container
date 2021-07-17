'use strict';

const sContainer = require('@peaceroad/markdown-it-hr-sandwiched-semantic-container');

const workspace = require('vscode').workspace;
const fs = require('fs');

const cssFile = 'hr-sandwiched-semantic-container.css';
const cssFilePath = __dirname + '/style/' + cssFile;
const cachedCssFilePath = __dirname + '/style/_' + cssFile;

function cacheCssFile () {
  if (!fs.existsSync(cachedCssFilePath)) {
    fs.writeFileSync(cachedCssFilePath, fs.readFileSync(cssFilePath));
  }
  return;
}

async function activate() {
  workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('p7dMarkdownItHrSandwichedSemanticContainer')) {
      if (workspace.getConfiguration('p7dMarkdownItHrSandwichedSemanticContainer').get('disableStyle')) {
        cacheCssFile();
        fs.writeFileSync(cssFilePath, '');
      } else {
        cacheCssFile();
        fs.writeFileSync(cssFilePath, fs.readFileSync(cachedCssFilePath));
      }
    }
  });

  return {
    extendMarkdownIt(md) {
      return md.use(sContainer);
    }
  };
}

exports.activate = activate;
