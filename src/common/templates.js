export function generateClickerModalHTML(options) {
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
        <div id="more-button">
          <div id="arrow-left">
            <svg class="icon"><use xlink:href="#icon-arrow-left2"></use></svg>
          </div>
          <div id="arrow-right">
            <svg class="icon"><use xlink:href="#icon-arrow-right2"></use></svg>
          </div>
        </div>
      </div>
    </div>
  `;
}

export var svgSpriteContainer = `
  <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="icon-arrow-right2" viewBox="0 0 32 32">
      <title>arrow-right2</title>
      <path class="path1" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
      </symbol>
      <symbol id="icon-arrow-left2" viewBox="0 0 32 32">
      <title>arrow-left2</title>
      <path class="path1" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
      </symbol>
    </defs>
  </svg>
`;
