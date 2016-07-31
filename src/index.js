require('vconsole/dist/vconsole.min.js');
import init from './editor/init';
import svg from './common/svg';

let bee = {
  version: '0.0.1'
};

bee.fly = function(initParams) {
  switch (initParams.type) {
    case 'click' :
      init.clickMode(initParams);
      break;
  }
};

window.bee = bee;

// insert svg sprite
var range = document.createRange();
var frag = range.createContextualFragment(svg);
document.body.insertBefore(frag, document.body.childNodes[0]);
