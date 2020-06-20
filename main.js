let  bodyDocument = document.querySelector("body")

//main removal button
let mainButton1 = document.createElement("button")
mainButton1.append("Remove main")
mainButton1.id = 'mainButton1'

//create button
let button2 = document.createElement("button")
button2.append('Create')

// input for  create
let input = document.createElement("input")
input.type = 'text'
input.name = 'create'
input.id = 'create'
input.placeholder = 'Enter New Text Here'
//main appends
let  main = document.createElement("main")
bodyDocument.append(button2, '', mainButton1, '', main, '', input)

//Anchor Tag

let anchor = document.createElement("a")
anchor.className = 'file_link'
anchor.href ="https://kids.nationalgeographic.com/content/dam/kids/photos/States/K-N/new-york-statue-of-liberty.jpg"
anchor.target = '_blank'
anchor.append('NEW YORK CITY')
//image tag
let image_tag  = document.createElement("img")
image_tag.className = 'image_link'
image_tag.src =  'kk.jpg'

// main appends
main.append(image_tag, anchor)
//main button event listener
mainButton1.addEventListener('click',function(){
    main.remove()

})

//create button2 event listener
button2.addEventListener("click", function(){

    let  add =input.value
    div1 = document.createElement("div")
    div1.id = 'add'
    bodyDocument.append(div1)
    div1.append(add)
})