import _ from 'lodash';
import foo from './foo';

function component() {
    const element = document.createElement('div');
    element.innerHTML = foo.foo;
    element.innerHTML += ' ';
    element.innerHTML += _.join(['hi', 'there'], ' ');
    return element;
}
  
document.body.appendChild(component());