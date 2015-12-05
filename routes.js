let prepare = require('./utils/prepare');
let generateFramework = require('./generators/framework/generateFramework');
let generateTemplateEngine = require('./generators/template-engine/generateTemplateEngine');
let generateCssFramework = require('./generators/css-framework/generateCssFramework');
let generateCssPreprocessor = require('./generators/css-preprocessor/generateCssPreprocessor');
let generateDatabase = require('./generators/database/generateDatabase');
let generateAuthentication = require('./generators/authentication/generateAuthentication');

async function download(req, res) {
  let params = await prepare(req.body);

  await generateFramework(params);
  await generateTemplateEngine(params);
  await generateCssFramework(params);
  await generateCssPreprocessor(params);
  await generateDatabase(params);
  await generateAuthentication(params);

  res.end();
}

module.exports = {
  download: download
};
