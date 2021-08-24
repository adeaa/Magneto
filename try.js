var button = document.getElementById("cloning")
var clone = document.getElementById("clone")
var clones = document.getElementById("clones")
button.addEventListener("click",function(){
    var element = clone.cloneNode(true)
    clones.appendChild(element)
    
})