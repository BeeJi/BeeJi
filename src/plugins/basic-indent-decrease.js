var IndentDecrease = {
  className: 'indent-decrease',
  eventType: 'click',
  icon: 'icon-indent-decrease',
  eventSelector: '.indent-decrease',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      if (currentRange.commonAncestorContainer && currentRange.commonAncestorContainer.parentNode) {
        currentRange.commonAncestorContainer.parentNode.style.textIndent = '0em';
      }
    };
  },
  svg: `
    <symbol id="icon-indent-decrease" viewBox="0 0 32 32">
      <title>indent-decrease</title>
      <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM8 10v12l-8-6z"></path>
    </symbol>
  `
};

export default IndentDecrease;
