var Italic = {
  className: 'font-italic',
  eventType: 'click',
  icon: 'icon-italic',
  eventSelector: '.font-italic',
  eventCallback: function(editor) {
    return function(e) {
      alert('italic');
    };
  },
  svg: `
    <symbol id="icon-italic" viewBox="0 0 32 32">
      <title>italic</title>
      <path class="path1" d="M28 2v2h-4l-10 24h4v2h-14v-2h4l10-24h-4v-2z"></path>
    </symbol>
  `
};

export default Italic;
