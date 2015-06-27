/*! Licensed under MIT, https://github.com/gyf1/Bee */
(function (root, doc) {
  'use strict';

  var BeeClass, objBee, utils = {}, modals = {};
  var selection = doc.getSelection();

  modals = {
    getClickerModalHTML: function (options) {
      return [
        '<div class="bee-modal">',
        '<div class="bee-modal-header">',
        '<button class="bee-btn bee-btn-cancel">',
        options.cancelText,
        '</button>',
        '<button class="bee-btn bee-btn-ok">',
        options.okText,
        '</button>',
        '</div>',
        '<div class="bee-modal-body">',
        '<div id="bee-editor-content" class="bee-modal-content" contentEditable="true">',
        options.content,
        '</div>',
        '</div>',
        '<div class="bee-modal-footer">',
        '<ul>',
        '<li>',
        '<label class="upload-label">',
        '<input class="upload-image" type="file"/>',
        '<span>上传图片</span>',
        '</label>',
        '</li>',
        '<li>',
        '<a>手写</a>',
        '</li>',
        '<li><a>涂鸦</a></li>',
        '<li data-toggle="dropdown">',
        '<a>插入</a>',
        '<ul class="bee-dropdown-menu"><li>二维码</li><li>日期</li><li>链接</li></ul>',
        '</li>',
        '</ul>',
        '</div>',
        '</div>'
      ].join('');
    }
  };

  utils = {
    stopPropagation : function (e) {
      e.stopPropagation();
    },
    destroy: function (node) {
      objBee = null;
      doc.body.removeChild(node);
    },
    extend: function (src, dest) {

    }
  };


  BeeClass = function (config) {
    var divModal = doc.createElement('div');
    divModal.className = 'bee-backdrop';
    divModal.innerHTML = modals.getClickerModalHTML(config);
    doc.body.appendChild(divModal);
    this.modal = divModal;
  };


  BeeClass.prototype.insertImage = function (files) {
    var reader = new FileReader();
    var image = new Image();
    var _that = this;
    reader.readAsDataURL(files[0]);
    reader.onload = function (_file) {
      image.src = _file.target.result;
      if (_that._range !== undefined) {
        _that._range.insertNode(image);
      } else {

      }
    };
  };

  BeeClass.prototype.addEventListener = function () {
    var _that = this;

    this.modal.addEventListener('click', function () {
      utils.destroy(_that.modal);
    });

    this.modal.querySelector('div.bee-modal').addEventListener('click', function (event) {
      utils.stopPropagation(event);
    });

    this.modal.querySelector('button.bee-btn-cancel').addEventListener('click', function (event) {
      utils.stopPropagation(event);
      utils.destroy(_that.modal);
    });

    this.modal.querySelector('button.bee-btn-ok').addEventListener('click', function (event) {
      utils.stopPropagation(event);
    });

    this.modal.querySelector('div#bee-editor-content').addEventListener('blur', function (event) {
      if (selection.getRangeAt && selection.rangeCount) {
        _that._range = selection.getRangeAt(0);
      }
    });

    this.modal.querySelector('input.upload-image').addEventListener('change', function () {
      _that.insertImage(this.files);
    });
  };


  var initClickMode = function (domObj) {
    var divs = doc.getElementsByClassName(domObj.className);
    for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', function () {
        domObj.content = this.innerHTML;
        objBee = new BeeClass(domObj);
        objBee.addEventListener();


        //var s = window.getSelection(),
        //  r = document.createRange(),
        //  editorDiv = objBee.modal.querySelector('div#bee-editor-content');
        //r.setStart(editorDiv, 0);
        //r.setEnd(editorDiv, 0);
        //s.removeAllRanges();
        //s.addRange(r);
      });
    }
  };

  // Create namespaces
  root.bee = {
    version: '0.0.1'
  };

  bee.fly = function (initParams) {
    switch (initParams.type) {
      case 'click' :
        initClickMode(initParams);
        break;
    }
  };


}(window, document));



