var style = `
.bee-modal .bee-modal-footer ul.bee-modal-footer-font {
  background: #fff;
  list-style: none;
  margin: 0;
  padding: 0 10px;
}

.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}

.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  font-size: 0;
}

.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul > li {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
}

.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul.font-normal > li {
  width: 20%;
}

.bee-modal .bee-modal-footer ul.bee-modal-footer-font > li > ul.font-align > li {
  width: 33.33%;
}

.bee-modal .bee-modal-footer.show-font-detail {
  height: 244px;
  line-height: normal;
}
`;

var Font = {
  className: 'font',
  stylesheet: style,
  eventType: 'click',
  icon: 'icon-text-color',
  eventSelector: '.font',
  plugins: [
    ['bold', 'italic', 'underline', 'strikethrough'],
    ['paragraphleft', 'paragraphcenter', 'paragraphright'],
    ['unorderedlist'],
    ['insertimage']
  ],
  toggleClass: 'show-font-detail',
  svg: `
    <symbol id="icon-text-color" viewBox="0 0 32 32">
      <path class="path1" d="M10.063 26l1.8-6h8.274l1.8 6h3.551l-6-20h-6.976l-6 20h3.551zM14.863 10h2.274l1.8 6h-5.874l1.8-6z"></path>
    </symbol>
  `,
  eventCallback: function(editor) {
    return function(e) {
      editor.modal.querySelector('.bee-modal-footer').classList.toggle('show-font-detail');
    };
  }
};

export default Font;
