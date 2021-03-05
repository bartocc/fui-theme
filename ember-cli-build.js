'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const outputPaths = function() {
  if (!process.env.BUILD_FUI_THEME) return

  return { app: { css: {"fui-theme": '/assets/fui-theme.css'} } }
}

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    outputPaths: outputPaths(),
    lessOptions: {
      paths: [
        "/private/tmp/foobar/node_modules/fomantic-ui-less",
        "/private/tmp/foobar/app/styles/semantic",
        "/private/tmp/foobar/app/styles/semantic/foo/bar"
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import("vendor/fui-theme.css");

  return app.toTree();
};
