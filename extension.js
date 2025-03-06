import sContainer from '@peaceroad/markdown-it-hr-sandwiched-semantic-container'
import fs from 'fs'

import { workspace, commands } from 'vscode'
const config = workspace.getConfiguration('p7dMarkdownItHrSandwichedSemanticContainer')

export function activate (context) {

  const cacheCssFile = (cssFilePath, cachedCssFilePath) => {
    if (!fs.existsSync(cachedCssFilePath)) {
      fs.writeFileSync(cachedCssFilePath, fs.readFileSync(cssFilePath));
    }
    return;
  }

  const opt = {
    requireHrAtOneParagraph: config.get('requireHrAtOneParagraph'),
    removeJointAtLineEnd: config.get('removeJointAtLineEnd'),
  }

  const cssFile = 'hr-sandwiched-semantic-container.css';
  const cssFilePath = __dirname + '/style/' + cssFile;
  const cachedCssFilePath = __dirname + '/style/_' + cssFile;

  workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('p7dMarkdownItHrSandwichedSemanticContainer.disableStyle')) {
      if (config.get('disableStyle')) {
        cacheCssFile(cssFilePath, cachedCssFilePath);
        fs.writeFileSync(cssFilePath, '');
      } else {
        cacheCssFile(cssFilePath, cachedCssFilePath);
        fs.writeFileSync(cssFilePath, fs.readFileSync(cachedCssFilePath));
      }
      commands.executeCommand('workbench.action.reloadWindow')
    }
    if (event.affectsConfiguration('p7dMarkdownItHrSandwichedSemanticContainer.requireHrAtOneParagraph')) {
      opt.requireHrAtOneParagraph = config.get('requireHrAtOneParagraph');
      commands.executeCommand('workbench.action.reloadWindow')
    }
    if (event.affectsConfiguration('p7dMarkdownItHrSandwichedSemanticContainer.removeJointAtLineEnd')) {
      opt.removeJointAtLineEnd = config.get('removeJointAtLineEnd');
      commands.executeCommand('workbench.action.reloadWindow')
    }


  });

  return {
    extendMarkdownIt(md) {
      return md.use(sContainer, {
        requireHrAtOneParagraph: opt.requireHrAtOneParagraph,
        removeJointAtLineEnd: opt.removeJointAtLineEnd,
      })
    }
  }
}

export function deactivate () {}

