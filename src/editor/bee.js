import './bee.css';
import './svg.css';

import view from '../common/view';
import utility from '../common/utility';
import domObj from '../common/dom';
import selection from '../dom/selection';

class Bee {
  constructor(config) {
    var divModal = document.createElement('div');
    divModal.className = 'bee-backdrop';
    divModal.innerHTML = view.getClickerModalHTML(config);
    document.body.appendChild(divModal);

    this.modal = divModal;

    this.config = config;
    this.editor = this.modal.querySelector('div#bee-editor-content');

    this.initPlugins();
  }

  initPlugins() {
    var docfrag = document.createDocumentFragment();
    let plugins = window.bee.PluginManager.getPlugins();
    plugins.forEach((plugin) => {
      var li = document.createElement('li');
      li.className = plugin.className;
      if (plugin.icon) {
        li.innerHTML = `
          <svg class="icon ${plugin.icon}"><use xlink:href="#${plugin.icon}"></use></svg>
        `;
      } else if (plugin.template) {
        li.innerHTML = plugin.template;
      }

      docfrag.appendChild(li);

      let target = docfrag.querySelector(plugin.eventSelector);
      target.addEventListener(plugin.eventType, plugin.eventCallback(this));

      if (plugin.stylesheet) {
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(plugin.stylesheet));
        document.head.appendChild(style);
      }
    });
    this.modal.querySelector('ul.bee-modal-footer-menu').appendChild(docfrag);
  }

  addEventListener() {
    this.modal.querySelector('div.bee-modal').addEventListener('click', (event) => {
      utility.stopPropagation(event);
    });

    this.modal.querySelector('button.bee-btn-cancel').addEventListener('click', (event) => {
      utility.stopPropagation(event);
      utility.destroy(this.modal);
    });

    this.modal.querySelector('button.bee-btn-ok').addEventListener('click', (event) => {
      utility.stopPropagation(event);
      let modifiedHTML = this.editor.innerHTML;
      this.config.okCallback(modifiedHTML, this.config.index);
      utility.destroy(this.modal);
    });

    this.modal.querySelector('div#bee-editor-content').addEventListener('blur', () => {
      console.log('xxx::', selection);
      if (selection.getRangeAt && selection.rangeCount) {
        //domObj.range = selection.getRangeAt(0);
        //domObj.anchorNode = selection.anchorNode;

        this.setRange(selection.getRangeAt(0));
      }

      //domObj.anchorNode = selection.anchorNode;
      //console.log('12312#::', domObj.anchorNode);

    }, true);


    //this.modal.querySelector('li.handwriting').addEventListener('click', () => {
    //  var classNameStr = this.className;
    //  if (classNameStr.indexOf('active') === -1) {
    //    this.className = classNameStr + ' active';
    //    this.openHandWritingPanel();
    //  } else {
    //    this.className = classNameStr.replace(/\bactive\b/,'');
    //    this.removeHandWritingPanel();
    //  }
    //});

    //let font = this.modal.querySelector('.font');
    //if (font) {
    //  font.addEventListener('click', () => {
    //    //this.modal.querySelector('.bee-modal-footer').style.height = '300px';
    //    this.modal.querySelector('.bee-modal-footer').classList.toggle('show-font-detail');
    //    //this.modal.querySelector('.bee-modal-footer').style.lineHeight = 'normal';
    //  });
    //}

  }

  focus(focusStart) {
    if (!focusStart) this.setRange();
    this.editor.focus();
    return this;
  }

  setRange(range) {
    range = range || this._range;
    if (!range) {
      range = this.getRange();
      range.collapse(false); // set to end
    }
    try {
      selection.removeAllRanges();
      selection.addRange(range);
    } catch (e) {/* IE throws error sometimes*/}
    return this;
  }

  getRange() {
    var editor = this.editor, range = selection.rangeCount && selection.getRangeAt(0);
    if (!range) range = document.createRange();
    if (!utility.containsNode(editor, range.commonAncestorContainer)) {
      range.selectNodeContents(editor);
      range.collapse(false);
    }
    return range;
  }
}

export default Bee;
