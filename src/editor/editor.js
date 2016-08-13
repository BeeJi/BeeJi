import './editor.css';

import { generateClickerModalHTML } from '../common/templates';
import utility from '../common/utility';

let selection = document.getSelection();

class Editor {
  constructor(config) {
    var divModal = document.createElement('div');
    divModal.className = 'bee-backdrop';
    divModal.innerHTML = generateClickerModalHTML(config);
    document.body.appendChild(divModal);

    this.modal = divModal;

    this.config = config;
    this.editor = this.modal.querySelector('div#bee-editor-content');

    this.pluginManager = window.beeji.PluginManager;
    this.initPlugins(config.plugins);
  }

  initPlugins(plugins) {
    let pluginsLength = plugins.length;
    let defaultMenuItemWidth = 100 / pluginsLength;
    var docfrag = document.createDocumentFragment();

    plugins.forEach((pluginKey) => {
      var plugin = this.pluginManager.getPlugin(pluginKey);
      if (!plugin) {
        console.log(`${pluginKey} is not existed.`);
        return;
      }

      let liElement;
      liElement = pluginsLength <= 6 ? this._pluginToLiElement(plugin, defaultMenuItemWidth) : this._pluginToLiElement(plugin);
      docfrag.appendChild(liElement);

      if (plugin.svg) this._insertSvgSymbol(plugin.svg);
      if (plugin.eventSelector && plugin.eventType && plugin.eventCallback && !plugin.subMenus) this._listenPluginEvent(docfrag, plugin);
      else if (plugin.subMenus) {
        var subMenuContainerSelector = `.bee-modal-footer .${plugin.subMenus.toggleClass}`;
        liElement.addEventListener('click', () => {
          let subMenuContainer = this.modal.querySelector(subMenuContainerSelector);
          let footerContainer = this.modal.querySelector('.bee-modal-footer');

          if (subMenuContainer.classList.contains('show-sub-menus')) {
            footerContainer.style.height = '44px';
            footerContainer.style.lineHeight = '44px';
          } else {
            footerContainer.style.height = (44 + plugin.subMenus.plugins.length * 50) + 'px';
            footerContainer.style.lineHeight = 'normal';
          }

          subMenuContainer.classList.toggle('show-sub-menus');
        }, false);
      }

      if (plugin.stylesheet) this._insertStylesheet(plugin.stylesheet);
      if (plugin.subMenus) this._generateSubMenus(plugin.subMenus);
    });

    var footMenuList = this.modal.querySelector('ul.bee-modal-footer-menu');
    footMenuList.appendChild(docfrag);

    if (pluginsLength > 6) {
      footMenuList.style.width = (window.innerWidth - 80) + 'px';
      this.modal.querySelector('.bee-modal-footer').classList.toggle('show-more-button');
    }
  }

  _generateSubMenus(subMenus) {
    let plugins = subMenus.plugins;
    let subMenuHeight = plugins.length * 50;
    let subMenuItem = document.createElement('ul');
    subMenuItem.className = subMenus.toggleClass + ' sub-container';
    subMenuItem.style.height = subMenuHeight + 'px';

    plugins.forEach((pluginLine) => {
      let pluginLineLiElement = document.createElement('li');
      pluginLineLiElement.className = 'sub-menus';

      let subMenuListElement = document.createElement('ul');

      let defaultMenuItemWidth = 100 / pluginLine.length;
      pluginLine.forEach((pluginKey) => {
        var plugin = this.pluginManager.getPlugin(pluginKey);
        if (!plugin) {
          console.log(`${pluginKey} is not existed.`);
          return;
        }

        subMenuListElement.appendChild(this._pluginToLiElement(plugin, defaultMenuItemWidth));
        if (plugin.svg)  this._insertSvgSymbol(plugin.svg);
        if (plugin.eventSelector && plugin.eventType && plugin.eventCallback) this._listenPluginEvent(subMenuListElement, plugin);
        if (plugin.stylesheet) this._insertStylesheet(plugin.stylesheet);
      });

      pluginLineLiElement.appendChild(subMenuListElement);

      subMenuItem.appendChild(pluginLineLiElement);
    });

    var footMenuList = this.modal.querySelector('.bee-modal-footer');
    footMenuList.appendChild(subMenuItem);
  }

  _insertStylesheet(stylesheet) {
    let style = document.createElement('style');
    style.appendChild(document.createTextNode(stylesheet));
    document.head.appendChild(style);
  }

  _listenPluginEvent(docfrag, plugin) {
    let target = docfrag.querySelector(plugin.eventSelector);
    target.addEventListener(plugin.eventType, plugin.eventCallback(this));
  }

  _insertSvgSymbol(svg) {
    var svgSprite = document.body.querySelector('.svg-sprite symbol');
    svgSprite.insertAdjacentHTML('beforebegin', svg);
  }

  _pluginToLiElement(plugin, width) {
    var li = document.createElement('li');
    li.className = plugin.className + ' menu-item';
    if (width) li.style.width = width + '%';

    if (plugin.icon) {
      li.innerHTML = `
          <svg class="icon ${plugin.icon}"><use xlink:href="#${plugin.icon}"></use></svg>
        `;
    } else if (plugin.template) {
      li.innerHTML = plugin.template;
    }

    return li;
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
      if (selection.getRangeAt && selection.rangeCount) {
        this.setRange(selection.getRangeAt(0));
      }
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
  }

  focus(focusStart) {
    if (!focusStart) this.setRange();
    this.editor.focus();
    return this;
  }

  setRange(range) {
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

export default Editor;
