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
          </ul>
        </div>
      </div>
    `;
  }
};

export default view;
