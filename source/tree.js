'use strict';

function isNumber(number) {
  return !isNaN(number) && isFinite(number);
}

function tree(height) {
  height = parseFloat(height);
  
  if (isNumber(height) && height >= 3) {
    var heightLeaves = height - 1;
    var strTree = '';
    var width = heightLeaves * 2 - 1;
    
    var spaces = '', stars = '';
    for (var i = 0; i < heightLeaves; i++) {
        spaces = new Array((width - (i * 2 + 1)) / 2 + 1).join(' ');
        stars = new Array(i * 2 + 2).join('*');
        strTree += spaces + stars + spaces + '\n';
    }
    
    spaces = new Array((width - 1) / 2 + 1).join(' ');
    strTree += spaces + new Array(2).join('|') + spaces + '\n';

    return strTree;
  }
  return null;  
}



