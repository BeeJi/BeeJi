# Range.collapse()
### 定义和用法
collapse() 方法是范围的边界点重合。

### 语法:
collapse(toStart)

### 参数
如果把参数 toStart 设置为 true，该方法将把范围的结束点设置为与开始点相同的值。否则，它将把范围的开始点设置为与结束点相同的值。

### 描述
该方法将设置范围的一个边界点，使它与另一个边界点相同。要修改的边界点由参数 toStart 指定。该方法返回后，范围将“折叠”，即表示文档中的一个点，没有内容。
当范围被折叠后，它的 collapsed 属性将被设置为 true。

# Range.selectNodeContents()



# Range.setStartAfter()
### 定义和用法:
setStartAfter() 方法在指定的节点后开始范围。

### 语法:

    setStartAfter(refNode)

### 参数:
refNode	一个节点，要设置的范围的开始点位于该节点之后。


# Range.setEndBefore()
### 定义和用法:
setEndBefore() 方法在指定的节点之前结束范围。

### 语法:

    setStartAfter(refNode)

### 参数:
refNode	一个节点，要设置的范围的结束点位于该节点之前。



# HTMLInputElement.setSelectionRange()


# Document.getSelection()
This method functions identically to the Window.getSelection() method; 
it returns a Selection object representing the text currently selected in the document.

# Document.createRange()
Returns a new Range object.

# Selection.getRangeAt()
The Selection.getRangeAt() method returns a range object representing one of the ranges currently selected.

# Selection.removeAllRanges()
The Selection.removeAllRanges() method removes all ranges from the selection, 
leaving the anchorNode and focusNode properties equal to null and leaving nothing selected.

# insertNode

