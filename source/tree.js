'use strict';

const isNumber = (number) => !isNaN(number) && isFinite(number);

function tree(height) {
  height = parseFloat(height);
  
  if (isNumber(height) && height >= 3) {
    const heightLeaves = height - 1;
    const width = heightLeaves * 2 - 1;

    let strTree = '', spaces = '', stars = '';
    
    for (let i = 0; i < heightLeaves; i++) {
        spaces = ' '.repeat((width - (i * 2 + 1)) / 2);
        stars = '*'.repeat(i * 2 + 1);
        strTree += `${spaces}${stars}${spaces}\n`;
    }
    
    spaces = ' '.repeat((width - 1) / 2);
    strTree += `${spaces}|${spaces}\n`;

    return strTree;
  }
  return null;  
}



