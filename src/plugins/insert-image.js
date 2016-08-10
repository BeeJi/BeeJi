var style = `
  label.upload-label input[type="file"] {
    position: fixed;
    top: -1000px;
  }

  .upload-label {
    display: inline-block;
    height: 44px;
    line-height: 44px;
    padding: 0;
    margin: 0;
    width:100%;
    cursor: pointer;
  }
  .upload-label:hover {
    background: #CCC;
  }
  .upload-label:active {
    background: #CCF;
    background: #DDD;
  }
  .upload-label :invalid + span {
    color: #A44;
  }
  .upload-label :valid + span {
    color: #333333;
  }
`;

var insertImage = function(files, range) {
  var reader = new FileReader();
  var image = new Image();
  image.style.maxWidth = '100%';
  reader.readAsDataURL(files[0]);
  reader.onload = function(_file) {

    image.src = _file.target.result;

    if (range !== undefined) {
      range.insertNode(image);
    }
  };
};

var InsetImage = {
  className: 'upload-image',
  stylesheet: style,
  eventSelector: 'input.upload-image',
  eventType: 'change',
  svg: `
    <symbol id="icon-image" viewBox="0 0 32 32">
      <title>image</title>
      <path class="path1" d="M29.996 4c0.001 0.001 0.003 0.002 0.004 0.004v23.993c-0.001 0.001-0.002 0.003-0.004 0.004h-27.993c-0.001-0.001-0.003-0.002-0.004-0.004v-23.993c0.001-0.001 0.002-0.003 0.004-0.004h27.993zM30 2h-28c-1.1 0-2 0.9-2 2v24c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-24c0-1.1-0.9-2-2-2v0z"></path>
      <path class="path2" d="M26 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
      <path class="path3" d="M28 26h-24v-4l7-12 8 10h2l7-6z"></path>
    </symbol>
  `,
  template: `
    <label class="upload-label">
      <input class="upload-image" type="file"/>
      <span>
        <svg class="icon icon-image"><use xlink:href="#icon-image"></use></svg>
      </span>
    </label>
  `,
  eventCallback: function(editor) {
    return function(e) {
      let files = e.srcElement.files;
      let currentRange = editor.getRange();
      insertImage(files, currentRange);
    };
  }
};

export default InsetImage;
