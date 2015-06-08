Package.describe({
  name: 'loredanacirstea:jqtree',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for https://github.com/mbraak/jqTree',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/loredanacirstea/jqTree.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['jquery']);
  api.addFiles([
    'tree.jquery.js',
    'jqtree.css',
    'jqtree-circle.png'
  ], 'client');
});
