var subTemplate = `
  <ul class="bee-modal-footer-font">
    <li>
      <ul class="font-normal">
        <li>
          <svg class="icon icon-bold"><use xlink:href="#icon-bold"></use></svg>
        </li>
        <li>
          <svg class="icon icon-italic"><use xlink:href="#icon-italic"></use></svg>
        </li>
        <li>
          <svg class="icon icon-underline"><use xlink:href="#icon-underline"></use></svg>
        </li>
        <li>
          <svg class="icon icon-strikethrough"><use xlink:href="#icon-strikethrough"></use></svg>
        </li>
        <li>
          <a>abc</a>
        </li>
      </ul>
    </li>
    <li>
      <ul class="font-align">
        <li>
          <svg class="icon icon-paragraph-left"><use xlink:href="#icon-paragraph-left"></use></svg>
        </li>
        <li>
          <svg class="icon icon-paragraph-center"><use xlink:href="#icon-paragraph-center"></use></svg>
        </li>
        <li>
          <svg class="icon icon-paragraph-right"><use xlink:href="#icon-paragraph-right"></use></svg>
        </li>
      </ul>
    </li>
    <li>
      sjalkdjals
    </li>
    <li>
      adsasdas
    </li>
  </ul>
`;

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
  eventCallback: function(editor) {
    var modalFooter = editor.modal.querySelector('.bee-modal-footer-menu');
    modalFooter.insertAdjacentHTML('afterend', subTemplate);

    return function(e) {
      editor.modal.querySelector('.bee-modal-footer').classList.toggle('show-font-detail');
    };
  }
};

export default Font;
