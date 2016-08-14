var IndentIncrease = {
  className: 'indent-increase',
  eventType: 'click',
  icon: 'icon-indent-increase',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      if (currentRange.commonAncestorContainer && currentRange.commonAncestorContainer.parentNode) {
        let parentNode = currentRange.commonAncestorContainer.parentNode;
        let currentIndent = parentNode.style.textIndent.substr(0) || 0;
        if (typeof currentIndent === 'string') {
          let emIdx = currentIndent.indexOf('em');
          if (emIdx !== -1) currentIndent = parseInt(currentIndent.substr(0, emIdx));
        }
        parentNode.style.textIndent = (currentIndent + 2) + 'em';
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
