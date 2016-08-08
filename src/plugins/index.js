var PluginsManager = function() {
  var plugins = [];

  return {
    getPlugins: function() {
      return plugins;
    },
    addPlugin: function(plugin) {
      plugins.push(plugin);
    }
  };
};

export default PluginsManager;





