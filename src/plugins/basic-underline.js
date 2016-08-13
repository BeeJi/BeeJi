var Underline = {
  className: 'font-underline',
  eventType: 'click',
  icon: 'icon-underline',
  eventSelector: '.font-underline',
  eventCallback: function(editor) {
    return function(e) {
      alert('underline');
    };
  },
  svg: `
    <symbol id="icon-underline" viewBox="0 0 32 32">
      <path class="path1" d="M22 2h4v13c0 4.971-4.477 9-10 9s-10-4.029-10-9v-13h4v13c0 1.255 0.57 2.459 1.605 3.391 1.153 1.038 2.714 1.609 4.395 1.609s3.242-0.572 4.395-1.609c1.035-0.931 1.605-2.136 1.605-3.391v-13zM6 26h20v4h-20z"></path>
    </symbol>
  `
};

export default Underline;
