function switchToListElement(type, appendTo, node2Append) {
  let ulElement = document.createElement(type);
  let liElement = document.createElement('li');
  liElement.appendChild(node2Append);
  ulElement.appendChild(liElement);
  appendTo.appendChild(ulElement);

  return liElement;
}

var OrderedList = {
  className: 'ordered-list',
  eventType: 'click',
  icon: 'icon-list-numbered',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      let element2Transfer = currentRange.commonAncestorContainer.firstElementChild;
      let newElement;
      if (element2Transfer) {
        currentRange.commonAncestorContainer.removeChild(currentRange.commonAncestorContainer.firstElementChild);
        newElement = switchToListElement('ol', currentRange.commonAncestorContainer, element2Transfer);
      } else {
        let parentNode = currentRange.commonAncestorContainer.parentNode;
        element2Transfer = currentRange.commonAncestorContainer;
        parentNode.removeChild(currentRange.commonAncestorContainer);
        newElement = switchToListElement('ol', parentNode, element2Transfer);
      }

      let updateRange = document.createRange();
      updateRange.selectNodeContents(newElement);
      updateRange.collapse(false);
      editor.setRange(updateRange);
    };
  },
  svg: `
    <symbol id="icon-list-numbered" viewBox="0 0 32 32">
      <path class="path1" d="M12 26h20v4h-20zM12 14h20v4h-20zM12 2h20v4h-20zM6 0v8h-2v-6h-2v-2zM4 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM8 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"></path>
    </symbol>
  `
};

export default OrderedList;
