function cutomRender(reactelement, container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href', reactElemnt.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendhild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
        
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

cutomRender(reactelement, mainContainer)
