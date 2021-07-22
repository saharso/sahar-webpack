import foo from './foo';

function component() {
    const element = document.createElement('div');
    element.innerHTML = foo.foo;
    return element;
}
  
document.body.appendChild(component());