let image = {
    "symbol" : "https://thumbs.dreamstime.com/b/download-icon-vector-symbol-illustration-design-template-166347396.jpg"
}
let main_div = document.createElement("div")
main_div.className = "main"
const url = "https://picsum.photos/v2/list"
fetch(url).then(response => response.json()).then(data => 
    data.forEach(element => {
        let parent_div = document.createElement("div")
     parent_div.className = "card"
     main_div.appendChild(parent_div)
    let child_div = document.createElement("div")
    child_div.className = "card-body"
    
    parent_div.appendChild(child_div)


    let img = document.createElement("img")
    img.src = element.download_url
    child_div.appendChild(img)
    if(element.author){
        let p =document.createElement("p")
        p.innerText = `by : ${element.author}`
        child_div.appendChild(p)
    }

    })
)
document.body.appendChild(main_div)