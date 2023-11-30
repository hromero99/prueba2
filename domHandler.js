

class DomHandler{
    constructor(idRootElement){
        this.rootid = document.getElementById(idRootElement)
    }
    createP(content){
        const element = document.createElement("p")
        element.innerText = content
        return element
    }
    createDiv(parent,childContentList /*[<p>1</p>,<p>2</p>,<p>3</p>] */){
        const element = document.createElement("div")
        childContentList.forEach(childElement => {
            element.appendChild(childElement)
        });
        parent.appendChild(element)
    }

}