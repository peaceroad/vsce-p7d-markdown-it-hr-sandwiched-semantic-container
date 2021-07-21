'use strict';

const sContainer = require('@peaceroad/markdown-it-hr-sandwiched-semantic-container');
const workspace = require('vscode').workspace;
const fs = require('fs');

async function activate() {

  function cacheCssFile (cssFilePath, cachedCssFilePath) {
    if (!fs.existsSync(cachedCssFilePath)) {
      fs.writeFileSync(cachedCssFilePath, fs.readFileSync(cssFilePath));
    }
    return;
  }

  function updateCss (cssFilePath, cachedCssFilePath) {
    if (workspace.getConfiguration('p7dMarkdownItHrSandwichedSemanticContainer').get('disableStyle')) {
      cacheCssFile(cssFilePath, cachedCssFilePath);
      fs.writeFileSync(cssFilePath, '');
    } else {
      cacheCssFile(cssFilePath, cachedCssFilePath);
      fs.writeFileSync(cssFilePath, fs.readFileSync(cachedCssFilePath));
    }
    return;
  }

  let requireHrAtOneParagraph = workspace.getConfiguration('p7dMarkdownItHrSandwichedSemanticContainer').get('requireHrAtOneParagraph');

  const cssFile = 'hr-sandwiched-semantic-container.css';
  const cssFilePath = __dirname + '/style/' + cssFile;
  const cachedCssFilePath = __dirname + '/style/_' + cssFile;

  workspace.onDidChangeConfiguration(event => {
    const cs = event.affectsConfiguration('p7dMarkdownItHrSandwichedSemanticContainer');
    if (cs.get('disableStyle')) {
      updateCss(cssFilePath, cachedCssFilePath);
    }
    /*
    if (cs.get('requireHrAtOneParagraph')) {
      requireHrAtOneParagraph = workspace.getConfiguration('p7dMarkdownItHrSandwichedSemanticContainer').get('requireHrAtOneParagraph');
    }
    */
  });

  return {
    extendMarkdownIt(md) {
      return md.use(sContainer, {
        "requireHrAtOneParagraph": requireHrAtOneParagraph
      });
    }
  };
}

exports.activate = activate;
