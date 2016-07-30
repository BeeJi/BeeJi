import init from './editor/init';

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
