import view from '../common/view';
import utility from '../common/utility';
import domObj from '../common/dom';
import selection from '../dom/selection';
import insertImage from '../insert/image.js';

class Bee {
  constructor(config) {
    var divModal = document.createElement('div');
    divModal.className = 'bee-backdrop';
    divModal.innerHTML = view.getClickerModalHTML(config);
    document.body.appendChild(divModal);
    this.modal = divModal;
    this.config = config;
    this.editor = this.modal.querySelector('div#bee-editor-content');
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

    this.modal.querySelector('div#bee-editor-content').addEventListener('blur', function() {
      console.log('blur...');
      if (selection.getRangeAt && selection.rangeCount) {
        domObj.range = selection.getRangeAt(0);
        //domObj.anchorNode = selection.anchorNode;
      }

      //domObj.anchorNode = selection.anchorNode;
      //console.log(domObj.anchorNode);
    }, true);

    this.modal.querySelector('input.upload-image').addEventListener('change', function() {
      insertImage(this.files, this._range);
    });

    this.modal.querySelector('li.handwriting').addEventListener('click', () => {
      var classNameStr = this.className;
      if (classNameStr.indexOf('active') === -1) {
        this.className = classNameStr + ' active';
        this.openHandWritingPanel();
      } else {
        this.className = classNameStr.replace(/\bactive\b/,'');
        this.removeHandWritingPanel();
      }
    });
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
