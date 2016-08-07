function switchToListElement(type, appendTo, node2Append) {
  let ulElement = document.createElement(type);
  let liElement = document.createElement('li');
  liElement.appendChild(node2Append);
  ulElement.appendChild(liElement);
  appendTo.appendChild(ulElement);
}

var UnorderedList = {
  className: 'unordered-list',
  eventType: 'click',
  icon: 'icon-list2',
  eventSelector: 'li.unordered-list',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      let element2Transfer = currentRange.commonAncestorContainer.firstElementChild;
      if (element2Transfer) {
        currentRange.commonAncestorContainer.removeChild(currentRange.commonAncestorContainer.firstElementChild);
        switchToListElement('ul', currentRange.commonAncestorContainer, element2Transfer);
      } else {
        let parentNode = currentRange.commonAncestorContainer.parentNode;
        element2Transfer = currentRange.commonAncestorContainer;
        parentNode.removeChild(currentRange.commonAncestorContainer);
        switchToListElement('ul', parentNode, element2Transfer);
      }
    };
  }
};

export default UnorderedList;
