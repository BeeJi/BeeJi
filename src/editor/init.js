import Bee from './bee.js';

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

export default init;
