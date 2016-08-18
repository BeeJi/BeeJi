var Italic = {
  className: 'font-italic',
  eventType: 'click',
  icon: 'icon-italic',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      let newSpan = document.createElement('span');
      newSpan.style.fontStyle = 'italic';
      newSpan.innerHTML = '&nbsp;';
      currentRange.insertNode(newSpan);

      let updateRange = document.createRange();
      updateRange.selectNodeContents(newSpan);
      updateRange.collapse(false);
      editor.setRange(updateRange);
    };
  },
  svg: `
    <symbol id="icon-italic" viewBox="0 0 32 32">
      <path class="path1" d="M28 2v2h-4l-10 24h4v2h-14v-2h4l10-24h-4v-2z"></path>
    </symbol>
  `
};

export default Italic;
