//require('vconsole/dist/vconsole.min.js');
import init from './editor/init';
import svg from './common/svg';
import PluginManager from './plugins/';
import UnorderedList from './plugins/basic-unordered-list';
import OrderedList from './plugins/basic-ordered-list';
import IndentDecrease from './plugins/basic-indent-decrease';
import IndentIncrease from './plugins/basic-indent-increase';
import InsertImage from './plugins/insert-image';
import Font from './plugins/font';

let bee = {
  version: '0.0.1'
};

window.bee = bee;

bee.PluginManager = PluginManager();
bee.PluginManager.addPlugin(UnorderedList);
bee.PluginManager.addPlugin(InsertImage);
bee.PluginManager.addPlugin(OrderedList);
bee.PluginManager.addPlugin(IndentDecrease);
bee.PluginManager.addPlugin(IndentIncrease);
bee.PluginManager.addPlugin(Font);

bee.fly = function(initParams) {
  switch (initParams.type) {
    case 'click' :
      init.clickMode(initParams);
      break;
  }
};

// insert svg sprite
var frag = document.createElement('div');
frag.className = 'svg-sprite';
frag.innerHTML = svg;
document.body.insertBefore(frag, document.body.childNodes[0]);
