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
  },
  forEach(obj, iterator, arrayLike) {
    if (!obj) return;
    if (arrayLike == null) arrayLike = utils.is(obj, 'Array');
    if (arrayLike) {
      for (var i = 0, l = obj.length; i < l; i++) iterator(obj[i], i, obj);
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) iterator(obj[key], key, obj);
      }
    }
  }
};

export default utility;
