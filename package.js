Package.describe({
  name: 'epfl:static-assets',
  version: '0.1.1',
  summary: 'Import any static assets you like!',
  documentation: 'README.md',
  git: 'https://github.com/epfl-si/meteor-static-assets.git',
});

Package.registerBuildPlugin({
  name: 'static-assets',
  use: [
    'caching-compiler@2.0.0-alpha300.17',
    'ecmascript@0.12.0',
  ],
  sources: [
    'sha1.js',
    'options.js',
    'compiler.js',
    'plugin.js',
  ],
  npmDependencies: {
    'load-json-file': '4.0.0',
    'meteor-project-path': '0.0.3',
  },
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
