var Bold = {
  className: 'paragraph-right',
  eventType: 'click',
  icon: 'icon-paragraph-right',
  eventSelector: '.paragraph-right',
  eventCallback: function(editor) {
    return function(e) {
      alert('paragraph-right');
    };
  },
  svg: `
    <symbol id="icon-paragraph-right" viewBox="0 0 32 32">
      <title>paragraph-right</title>
      <path class="path1" d="M0 2h32v4h-32zM12 8h20v4h-20zM12 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z"></path>
    </symbol>
  `
};

export default Bold;
