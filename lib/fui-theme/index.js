'use strict';

const debug = require("debug")("parog-web:fui-theme");
const path = require("path");

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  included(app) {
    this._addThemeOutputPath(app)
    this._addLessOptions(app);
  },

  _addThemeOutputPath(app) {
    if (process.env.BUILD_FUI_THEME)
      app.options.outputPaths.app.css["fui-theme"] = '/assets/fui-theme.css';
  },

  _addLessOptions(app) {
    if (!app.options.lessOptions)
      app.options.lessOptions = {}

    if (!app.options.lessOptions.paths)
      app.options.lessOptions.paths = []

    const fuiPath = path.dirname(require.resolve("fomantic-ui-less/package.json"))

    const addedPaths = [
      `${fuiPath}`,
      "/private/tmp/foobar/app/styles/semantic",
      "/private/tmp/foobar/app/styles/semantic/foo/bar"
    ]

    debug("Adding the following paths to lessOptions: %o", addedPaths);

    app.options.lessOptions.paths = [
      ...app.options.lessOptions.paths,
      ...addedPaths
    ]
  }
};
