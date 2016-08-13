# BeeJi Mobile Rich Text Editor
[Homepage](http://beeji.cn/)

# Installation
```
npm install beeji
```

# Usage
* import js, css files
* init
```javascript
var objInit = {
  className: 'editor',
  type: 'click',
  cancelText: 'Cancel',
  okText: 'Ok',
  okCallback: function(data, idx) {
    let divs = document.getElementsByClassName('editor');
    divs[idx].innerHTML = data;
  }
};
bee.fly(objInit);
```

# Config
## plugins
* unordered-list


# License
MIT

