var view = {
  getClickerModalHTML: function(options) {
    return `
      <div class="bee-modal">
        <div class="bee-modal-header">
          <button class="bee-btn bee-btn-cancel">
            ${options.cancelText},
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
          <ul>
            <li>
              <label class="upload-label">
                <input class="upload-image" type="file"/>
                <span>上传图片</span>
              </label>
            </li>
            <li class="handwriting">
              <a>手写</a>
            </li>
            <li>
              <a>涂鸦</a>
            </li>
            <li data-toggle="dropdown">
              <a>插入</a>
              <ul class="bee-dropdown-menu">
                <li>二维码</li>
                <li>日期</li>
                <li>链接</li>
              </ul>
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
