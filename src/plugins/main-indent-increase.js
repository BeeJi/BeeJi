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
  }
};

export default IndentIncrease;
