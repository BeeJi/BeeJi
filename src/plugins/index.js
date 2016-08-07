//class Plugin {
//  constructor(config) {
//    //let { text, icon, template, onclick, editor } = config;
//    //
//    //this.icon = icon;
//    //this.onclick = onlick;
//
//  }
//
//  addButton(test) {
//    console.log('test::', test);
//  }
//}
//
//
//export default {
//  add: (config, callback) => {
//    var plugin = new Plugin(config);
//    var editor = {a: 'hi'};
//    callback(editor);
//  }
//};

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





