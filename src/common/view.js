var view = {
  getClickerModalHTML: function(options) {
    return `
      <div class="bee-modal">
        <div class="bee-modal-header">
          <button class="bee-btn bee-btn-cancel">
            ${options.cancelText}
          </button>
          <button class="bee-btn bee-btn-ok">
            ${options.okText}
          </button>
        </div>
        <div class="bee-modal-body">
          <div id="bee-editor-content" class="bee-modal-content" contentEditable="true">
            ${options.content}
          </div>
        </div>
        <div class="bee-modal-footer">
          <ul class="bee-modal-footer-menu">
            <li class="unordered-list">
              <svg class="icon icon-list2"><use xlink:href="#icon-list2"></use></svg>
            </li>
            <li class="ordered-list">
              <svg class="icon icon-list-numbered"><use xlink:href="#icon-list-numbered"></use></svg>
            </li>
            <li class="indent-decrease">
              <svg class="icon icon-indent-decrease"><use xlink:href="#icon-indent-decrease"></use></svg>
            </li>
            <li class="indent-increase">
              <svg class="icon icon-indent-increase"><use xlink:href="#icon-indent-increase"></use></svg>
            </li>
            <li>
              <label class="upload-label">
                <input class="upload-image" type="file"/>
                <span>
                  <svg class="icon icon-image"><use xlink:href="#icon-image"></use></svg>
                </span>
              </label>
            </li>
            <li class="font">
              <svg class="icon icon-text-color"><use xlink:href="#icon-text-color"></use></svg>
            </li>
            <!--<li class="handwriting">-->
              <!--<a>手写</a>-->
            <!--</li>-->
            <!--<li>-->
              <!--<a>涂鸦</a>-->
            <!--</li>-->
            <!--<li data-toggle="dropdown">-->
              <!--<a>插入</a>-->
              <!--<ul class="bee-dropdown-menu">-->
                <!--<li>二维码</li>-->
                <!--<li>日期</li>-->
                <!--<li>链接</li>-->
              <!--</ul>-->
            <!--</li>-->
          </ul>
          <ul class="bee-modal-footer-font">
            <li>
              <ul class="font-normal">
                <li>
                  <svg class="icon icon-bold"><use xlink:href="#icon-bold"></use></svg>
                </li>
                <li>
                  <svg class="icon icon-italic"><use xlink:href="#icon-italic"></use></svg>
                </li>
                <li>
                  <svg class="icon icon-underline"><use xlink:href="#icon-underline"></use></svg>
                </li>
                <li>
                  <svg class="icon icon-strikethrough"><use xlink:href="#icon-strikethrough"></use></svg>
                </li>
                <li>
                  <a>abc</a>
                </li>
              </ul>
            </li>
            <li>
              <ul class="font-align">
                <li>
                  <svg class="icon icon-paragraph-left"><use xlink:href="#icon-paragraph-left"></use></svg>
                </li>
                <li>
                  <svg class="icon icon-paragraph-center"><use xlink:href="#icon-paragraph-center"></use></svg>
                </li>
                <li>
                  <svg class="icon icon-paragraph-right"><use xlink:href="#icon-paragraph-right"></use></svg>
                </li>
              </ul>
            </li>
            <li>
              sjalkdjals
            </li>
            <li>
              adsasdas
            </li>
          </ul>
        </div>
      </div>
    `;
  },
  getHandWritingHTML: function() {
    return `
      <div class="bee-handwriting-panel">
        <canvas id="handwring-canvas"></canvas>
      </div>
    `;
  }
};

export default view;
