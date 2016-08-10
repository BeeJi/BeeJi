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
  }
};

export default utility;
