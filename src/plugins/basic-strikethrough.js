var Strikethrough = {
  className: 'font-strikethrough',
  eventType: 'click',
  icon: 'icon-strikethrough',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      let newSpan = document.createElement('span');
      newSpan.style.textDecoration = 'line-through';
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
  },
  svg: `
    <symbol id="icon-strikethrough" viewBox="0 0 32 32">
      <path class="path1" d="M32 16v2h-7.328c0.86 1.203 1.328 2.584 1.328 4 0 2.215-1.146 4.345-3.143 5.843-1.855 1.391-4.29 2.157-6.857 2.157s-5.002-0.766-6.857-2.157c-1.998-1.498-3.143-3.628-3.143-5.843h4c0 2.168 2.748 4 6 4s6-1.832 6-4c0-2.168-2.748-4-6-4h-16v-2h9.36c-0.073-0.052-0.146-0.104-0.217-0.157-1.998-1.498-3.143-3.628-3.143-5.843s1.146-4.345 3.143-5.843c1.855-1.391 4.29-2.157 6.857-2.157s5.002 0.766 6.857 2.157c1.997 1.498 3.143 3.628 3.143 5.843h-4c0-2.168-2.748-4-6-4s-6 1.832-6 4c0 2.168 2.748 4 6 4 2.468 0 4.814 0.709 6.64 2h9.36z"></path>
    </symbol>
  `
};

export default Strikethrough;
