import join from 'lodash';
import foo from './foo';
console.log(foo);

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());