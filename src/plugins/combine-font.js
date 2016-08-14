var Font = {
  className: 'combine-font',
  eventType: 'click',
  icon: 'icon-text-color',
  subMenus: {
    toggleClass: 'test-toggle-class',
    plugins: [
      ['bold', 'italic', 'underline', 'strikethrough', 'backgroundtext'],
      ['paragraphleft', 'paragraphcenter', 'paragraphright']
    ]
  },
  svg: `
    <symbol id="icon-text-color" viewBox="0 0 32 32">
      <path class="path1" d="M10.063 26l1.8-6h8.274l1.8 6h3.551l-6-20h-6.976l-6 20h3.551zM14.863 10h2.274l1.8 6h-5.874l1.8-6z"></path>
    </symbol>
  `
};

export default Font;
