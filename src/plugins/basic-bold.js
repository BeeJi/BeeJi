var Bold = {
  className: 'font-bold',
  eventType: 'click',
  icon: 'icon-bold',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      let newSpan = document.createElement('span');
      newSpan.style.fontWeight = 'bold';
      newSpan.innerHTML = '&nbsp;';
      currentRange.insertNode(newSpan);
      let updateRange = document.createRange();
      updateRange.selectNodeContents(newSpan);
      updateRange.collapse(false);
      editor.setRange(updateRange);
    };
  },
  svg: `
    <symbol id="icon-bold" viewBox="0 0 32 32">
      <path class="path1" d="M22.121 15.145c1.172-1.392 1.879-3.188 1.879-5.145 0-4.411-3.589-8-8-8h-10v28h12c4.411 0 8-3.589 8-8 0-2.905-1.556-5.453-3.879-6.855zM12 6h3.172c1.749 0 3.172 1.794 3.172 4s-1.423 4-3.172 4h-3.172v-8zM16.969 26h-4.969v-8h4.969c1.827 0 3.313 1.794 3.313 4s-1.486 4-3.313 4z"></path>
    </symbol>
  `
};

export default Bold;
