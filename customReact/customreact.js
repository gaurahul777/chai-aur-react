function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);

    //agar bhut sare attribute hote to dikkat ho jati isliye improve
    */
    
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;//agar kise ne props ke ander children ki value de hui ho to isliye yeh kiya humne to bahr de hui hain
domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google',
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer);