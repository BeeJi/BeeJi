var IndentIncrease = {
  className: 'indent-increase',
  eventType: 'click',
  icon: 'icon-indent-increase',
  eventSelector: '.indent-increase',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      if (currentRange.commonAncestorContainer && currentRange.commonAncestorContainer.parentNode) {
        currentRange.commonAncestorContainer.parentNode.style.textIndent = '2em';
      }
    };
  },
  svg: `
    <symbol id="icon-indent-increase" viewBox="0 0 32 32">
      <title>indent-increase</title>
      <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM0 22v-12l8 6z"></path>
    </symbol>
  `
};

export default IndentIncrease;
