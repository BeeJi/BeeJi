# Demo
[Click event](http://gyf1.com/bee/demo/click)

# Usage
* bower install bee --save
* import js, css files
* init
```javascript
var objInit = {
  className: 'editor',
  type: 'click',
  cancelText: '取消',
  okText: '确定',
  okCallback: function(data, idx) {
    let divs = document.getElementsByClassName('editor');
    divs[idx].innerHTML = data;
  }
};
bee.fly(objInit);
```


# Features
### Upload Image
We can select file from local and insert it into content.

Only upload image is not enough, we can resize image or crop image before upload.


### Handwriting

### Drawing

### Insert
Insert QR Code
Insert Video from network
Insert Audio from network

# Configuration
### Call Back
We should set a callback function which used to accpet the edited content.

### Fire Type
We can choose the type which fire the rich text editor.

You have three choice:
1. Click event listener, after click event happened, open a modal for editing.
2. Open a whole new page
3. Initialization for a dom

### Buttons
We can choose which buttons to display, others will be hidden.


# Available versions
Run bower info bee to list the available versions.

