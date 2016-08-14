// abc
var style = '.background-text > span {background: #f9cc9d;position: relative;top: 6px;}';
var BackgroundText = {
  className: 'background-text',
  eventType: 'click',
  label: 'abc',
  stylesheet: style,
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      let newSpan = document.createElement('span');
      newSpan.style.background = '#f9cc9d';
      newSpan.innerHTML = '&nbsp;';
      let append2Element;
      if (currentRange.commonAncestorContainer.nodeType === 3) {
        let tempParentElement = currentRange.commonAncestorContainer.parentElement;
        if (tempParentElement.nodeName === 'SPAN') {
          append2Element = tempParentElement.parentElement;
        } else {
          append2Element = tempParentElement;
        }
      } else append2Element = currentRange.endContainer;
      append2Element.appendChild(newSpan);

      let updateRange = document.createRange();
      updateRange.selectNodeContents(newSpan);
      updateRange.collapse(false);
      editor.setRange(updateRange);
    };
  }
};

export default BackgroundText;
