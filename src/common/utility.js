var utility = {
  stopPropagation : function(e) {
    e.stopPropagation();
  },
  destroy: function(node) {
    document.body.removeChild(node);
  },
  containsNode: function(parent, child) {
    if (parent === child) return true;
    child = child.parentNode;
    while (child) {
      if (child === parent) return true;
      child = child.parentNode;
    }
    return false;
  },
  appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      console.log(div.children[0]);
      el.appendChild(div.children[0]);
    }
  }
};

export default utility;
