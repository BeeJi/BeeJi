import './bee.css';
import './svg.css';


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

    this.modal.querySelector('input.upload-image').addEventListener('change', function() {
      insertImage(this.files, this._range);
    });

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

    let menuUnorderedList = this.modal.querySelector('li.unordered-list');
    if (menuUnorderedList) {
      menuUnorderedList.addEventListener('click', () => {
        let currentRange = this.getRange();
        let element2Transfer = currentRange.commonAncestorContainer.firstElementChild;
        if (element2Transfer) {
          currentRange.commonAncestorContainer.removeChild(currentRange.commonAncestorContainer.firstElementChild);
          this.switchToListElement('ul', currentRange.commonAncestorContainer, element2Transfer);
        } else {
          let parentNode = currentRange.commonAncestorContainer.parentNode;
          element2Transfer = currentRange.commonAncestorContainer;
          parentNode.removeChild(currentRange.commonAncestorContainer);
          this.switchToListElement('ul', parentNode, element2Transfer);
        }
      });
    }

    let menuOrderedList = this.modal.querySelector('li.ordered-list');
    if (menuOrderedList) {
      menuOrderedList.addEventListener('click', () => {
        let currentRange = this.getRange();
        let element2Transfer = currentRange.commonAncestorContainer.firstElementChild;
        if (element2Transfer) {
          currentRange.commonAncestorContainer.removeChild(currentRange.commonAncestorContainer.firstElementChild);
          this.switchToListElement('ol', currentRange.commonAncestorContainer, element2Transfer);
        } else {
          let parentNode = currentRange.commonAncestorContainer.parentNode;
          element2Transfer = currentRange.commonAncestorContainer;
          parentNode.removeChild(currentRange.commonAncestorContainer);
          this.switchToListElement('ol', parentNode, element2Transfer);
        }
      });
    }

    let indenetDecrease = this.modal.querySelector('.indent-decrease');
    if (indenetDecrease) {
      indenetDecrease.addEventListener('click', () => {
        let currentRange = this.getRange();
        if (currentRange.commonAncestorContainer && currentRange.commonAncestorContainer.parentNode) {
          currentRange.commonAncestorContainer.parentNode.style.textIndent = '2em';
        }
      });
    }

    let indentIncrease = this.modal.querySelector('.indent-increase');
    if (indentIncrease) {
      indentIncrease.addEventListener('click', () => {
        let currentRange = this.getRange();
        if (currentRange.commonAncestorContainer && currentRange.commonAncestorContainer.parentNode) {
          currentRange.commonAncestorContainer.parentNode.style.textIndent = '0em';
        }
      });
    }

  }

  switchToListElement(type, appendTo, node2Append) {
    let ulElement = document.createElement(type);
    let liElement = document.createElement('li');
    liElement.appendChild(node2Append);
    ulElement.appendChild(liElement);
    appendTo.appendChild(ulElement);
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
