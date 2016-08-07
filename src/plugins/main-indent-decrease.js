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
  }
};

export default IndentDecrease;
