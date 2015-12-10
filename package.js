Package.describe({
  name: "tmeasday:publish-with-relations",
  summary: "Publish associated collections at once.",
  version: "0.2.1",
  git: "https://github.com/tmeasday/meteor-publish-with-relations.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['coffeescript', 'underscore'], 'server');
  api.add_files('publish_with_relations.coffee', 'server');
});

Package.on_test(function(api) {
  api.use([
    'tinytest',
    'coffeescript',
    'underscore',
    'tmeasday:publish-with-relations',
    'mongo-livedata'], 'server');

  api.add_files('publish_with_relations_test.coffee', 'server');
});
