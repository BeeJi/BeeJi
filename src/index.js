//require('vconsole/dist/vconsole.min.js');
import svg from './common/svg';
import PluginManager from './plugins-manager';
import UnorderedList from './plugins/basic-unordered-list';
import OrderedList from './plugins/basic-ordered-list';
import IndentDecrease from './plugins/basic-indent-decrease';
import IndentIncrease from './plugins/basic-indent-increase';
import InsertImage from './plugins/insert-image';
import Font from './plugins/font';
import Bee from './editor/bee.js';

let bee = {
  version: '0.0.1'
};

const init = {
  clickMode: (domObj) => {
    let divs = document.getElementsByClassName(domObj.className);
    for (let i = 0, len = divs.length; i < len; i++) {
      divs[i].addEventListener('click', function() {
        domObj.content = this.innerHTML;
        domObj.index = i;
        let objBee = new Bee(domObj);
        objBee.addEventListener();
        objBee.focus();
      });
    }
  }
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
