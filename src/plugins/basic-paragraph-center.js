var Bold = {
  className: 'paragraph-center',
  eventType: 'click',
  icon: 'icon-paragraph-center',
  eventCallback: function(editor) {
    return function(e) {
      alert('paragraph-center');
    };
  },
  svg: `
    <symbol id="icon-paragraph-center" viewBox="0 0 32 32">
      <title>paragraph-center</title>
      <path class="path1" d="M0 2h32v4h-32zM6 8h20v4h-20zM6 20h20v4h-20zM0 14h32v4h-32zM0 26h32v4h-32z"></path>
    </symbol>
  `
};

export default Bold;
