import domObj from '../common/dom';

var insertImage = function(files) {

  var reader = new FileReader();
  var image = new Image();
  reader.readAsDataURL(files[0]);
  reader.onload = function(_file) {

    //var anchor = document.getSelection().anchorNode;
    //anchor.parentNode.insertBefore(document.createTextNode('test'),anchor);
    //var anchor = getSelection().anchorNode;
    //anchor.parentNode.insertBefore(document.createTextNode('test'),anchor.nextSibling);

    image.src = _file.target.result;
    //var anchor = domObj.selection.anchorNode;
    //var anchor = domObj.anchorNode;
    //console.log(anchor);
    //anchor.parentNode.insertBefore(image, anchor.nextSibling);

    if (domObj.range !== undefined) {
      domObj.range.insertNode(image);
    }
  };
};

export default insertImage;
