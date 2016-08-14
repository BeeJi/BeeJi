function switchToListElement(type, appendTo, node2Append) {
  let ulElement = document.createElement(type);
  let liElement = document.createElement('li');
  liElement.appendChild(node2Append);
  ulElement.appendChild(liElement);
  appendTo.appendChild(ulElement);

  return liElement;
}

var UnorderedList = {
  className: 'unordered-list',
  eventType: 'click',
  icon: 'icon-list2',
  eventCallback: function(editor) {
    return function(e) {
      let currentRange = editor.getRange();
      let element2Transfer = currentRange.commonAncestorContainer.firstElementChild;
      let newElement;
      if (element2Transfer) {
        currentRange.commonAncestorContainer.removeChild(currentRange.commonAncestorContainer.firstElementChild);
        newElement = switchToListElement('ul', currentRange.commonAncestorContainer, element2Transfer);
      } else {
        let parentNode = currentRange.commonAncestorContainer.parentNode;
        element2Transfer = currentRange.commonAncestorContainer;
        parentNode.removeChild(currentRange.commonAncestorContainer);
        newElement = switchToListElement('ul', parentNode, element2Transfer);
      }

      let updateRange = document.createRange();
      updateRange.selectNodeContents(newElement);
      updateRange.collapse(false);
      editor.setRange(updateRange);
    };
  },
  svg: `
    <symbol id="icon-list2" viewBox="0 0 32 32">
      <path class="path1" d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 28c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"></path>
    </symbol>
  `
};

export default UnorderedList;
