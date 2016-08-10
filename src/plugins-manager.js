var PluginsManager = function() {
  var plugins = {};

  return {
    getPlugin: function(name) {
      return plugins[name];
    },
    addPlugin: function(name, plugin) {
      plugins[name] = plugin;
    },
    gettotalPlugins: function() {
      return plugins;
    },
    getPluginsCount: function() {
      return Object.keys(plugins).length;
    }
  };
};

export default PluginsManager;





