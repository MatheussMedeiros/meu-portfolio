const containerDiv = document.querySelector("#hidden")



containerDiv.addEventListener("mouseenter", (e)=>{
    containerDiv.classList.toggle("text-hover")
    containerDiv.classList.toggle("text-hover-2")
})
containerDiv.addEventListener("mouseout", (e)=>{
    containerDiv.classList.toggle("text-hover")
    containerDiv.classList.toggle("text-hover-2")
})