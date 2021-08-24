function check_title(title){
    if(title in localStorage){
        alert(title+" folder is already created");
        return false;
    }else if(title=="" || title==" "*(title.length)){
        alert("folder title is blanc");
        return false;
    }else{
        return true;
    }
}
//create all folders on start

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    var contents=JSON.parse(localStorage.getItem(key));
    var addFolder=document.getElementById("add_folder_div")
    var folders=addFolder.parentNode;
    var div=document.createElement("div");
    var chdiv=document.createElement("div");
    var span1=document.createElement("span");
    var span2=document.createElement("span");
    var span3=document.createElement("span")
    var img1 =document.createElement("img");
    var img3 =document.createElement("img")
    var p=document.createElement("p");
    var h1=document.createElement("h1");

    div.className = 'folder';
    chdiv.className='folder_files';
    span1.className='folder_title';
    span2.className='folder_comment';
    span3.className='add_button';
    img1.src= "/res/edit.png";
    var img2=img1.cloneNode(true);
    img3.src= "/res/plus.png";
    p.innerHTML=contents["innerp"];
    h1.innerHTML=contents["innerh1"];

    span1.appendChild(h1);
    span1.appendChild(img1);
    span2.appendChild(p);
    span2.appendChild(img2);
    span3.appendChild(img3);
    contents["files"].forEach(element => {
        var h3=document.createElement("h3")
        h3.innerHTML=element;
        chdiv.appendChild(h3);
        
    });
    chdiv.appendChild(span3);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(chdiv);
    folders.insertBefore(div,addFolder);

}

var title_input=document.getElementById('title')
title_input.addEventListener("keyup",function(event){
    if (event.keyCode===13){
        document.getElementById('add_folder').click()
    }
})

document.getElementById('add_folder').addEventListener("click",function(){
    
    var title=title_input.value;
    document.getElementById('title').value="";
    location.reload();
    if(check_title(title)===true){
        window.localStorage.setItem(title,"{}");
        console.log(localStorage.getItem(title));
        //create div folder
        var addFolder=document.getElementById("add_folder_div")
        var folders=addFolder.parentNode;
        var div=document.createElement("div");
        var chdiv=document.createElement("div");
        var span1=document.createElement("span");
        var span2=document.createElement("span");
        var span3=document.createElement("span");
        var img1 =document.createElement("img");
        var img3=document.createElement("img");
        var p=document.createElement("p");
        var h1=document.createElement("h1");
        
        div.className = 'folder';
        chdiv.className='folder_files';
        span1.className='folder_title';
        span2.className='folder_comment';
        span3.className='add_button'
        img1.src= "/res/edit.png";
        var img2=img1.cloneNode(true);
        img3.src= "/res/plus.png"
        p.innerHTML='comment';
        h1.innerHTML=title;

        span1.appendChild(h1);
        span1.appendChild(img1);
        span2.appendChild(p);
        span2.appendChild(img2);
        span3.appendChild(img3);
        chdiv.appendChild(span3);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(chdiv);
        folders.insertBefore(div,addFolder);
        const title_objs={innerp:"comment",innerh1:title,files:[]}
        window.localStorage.setItem(title,JSON.stringify(title_objs));
    }
})

//edit button 
var buttons = document.querySelectorAll("img[src='/res/edit.png']");
for(let i = 0; i < buttons.length; i++){

    if (buttons[i].previousSibling.tagName=="H1"){
        buttons[i].addEventListener("click",function(){
            var text=document.createElement("input")
            text.type="text"
            buttons[i].style ="display:none;"
            buttons[i].previousSibling.style ="display:none;"
            buttons[i].parentElement.appendChild(text)

            var title_title =buttons[i].previousSibling.innerHTML;
            var title_object = JSON.parse(localStorage.getItem(title_title));
            text.addEventListener("keyup",function(event){
                if (event.keyCode === 13 && check_title(text.value)===true){
                    buttons[i].previousSibling.innerHTML = text.value
                    title_object["innerh1"]=text.value
                    
                    localStorage.removeItem(title_title)
                    window.localStorage.setItem(text.value,JSON.stringify(title_object))
                    buttons[i].parentElement.removeChild(text)
                    buttons[i].style ="display:block;"
                    buttons[i].previousSibling.style ="display:block;"
                    location.reload();
                }
            })
        })
    }else{
        buttons[i].addEventListener("click",function(){
            var textarea=document.createElement("textarea");
            buttons[i].style ="display:none;";
            buttons[i].previousSibling.style ="display:none;";
            buttons[i].parentElement.appendChild(textarea);

            var comment_title =buttons[i].parentElement.previousSibling.firstChild.innerHTML;
            var title_object = JSON.parse(localStorage.getItem(comment_title));
            textarea.addEventListener("keyup",function(event){
                if (event.keyCode === 13 ){
                    title_object["innerp"]=textarea.value
                    console.log(textarea.value)
                    window.localStorage.setItem(comment_title,JSON.stringify(title_object))
                    buttons[i].previousSibling.innerHTML = textarea.value
                    buttons[i].parentElement.removeChild(textarea)
                    buttons[i].style ="display:block;"
                    buttons[i].previousSibling.style ="display:block;"
                }
            })
        })
    }
    
}

//add buttons
var add_buttons = document.querySelectorAll(".add_button img[src='/res/plus.png']");
console.log(add_buttons)

for(let i = 0; i < add_buttons.length; i++){
    add_buttons[i].addEventListener('click',function(){
        var input=document.createElement("input")
        input.type="text"
        add_buttons[i].style ="display:none;"
        add_buttons[i].parentNode.insertBefore(input,add_buttons[i])
        input.addEventListener('keyup',function(event){
                if (event.keyCode === 13 ){
                var span=document.createElement("span");
                var h3=document.createElement("h3");
                span.className= "file";
                h3.innerHTML=input.value;
                span.appendChild(h3)
                add_buttons[i].parentNode.removeChild(input)
                add_buttons[i].style ="display:block;"
                add_buttons[i].parentNode.insertBefore(span,add_buttons[i])
                var title=add_buttons[i].parentElement.parentElement.parentElement.firstChild.firstChild.innerHTML
                console.log(title)
                var contents=JSON.parse(localStorage.getItem(title));
                contents["files"].push(input.value)
                console.log(contents["files"])

                localStorage.setItem(title,JSON.stringify(contents))
                console.log(localStorage.getItem(title));

            }
        })
    })
}

    
