var Pencil = (function () {
  'use strict';

  // Pencil Class
  function Pencil() {
    //new Pencil(domObj);
  }

  var initClickMode = function (domObj) {
    var divs = document.getElementsByClassName(domObj.className);

    for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', function (event) {
        console.log('Hi!::', this.innerHTML);
      });
    }
  };

  return {
    initPencil: function (domObj) {
      switch (domObj.type) {
        case 'click' :
          initClickMode(domObj);
          break;
      }
    }
  }


}());
