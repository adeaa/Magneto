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
function add_function(button){
        button.addEventListener('click',function(){
        var input=document.createElement("input");
        input.type="text";
        button.style ="display:none;";
        button.parentNode.insertBefore(input,button);
        input.addEventListener('keyup',function(event){
                if (event.keyCode === 13 ){
                    var file=document.createElement("span");
                    var h3=document.createElement("h3");
                    var trash2=document.createElement("img");
                    var edit3=document.createElement("img");
                    var divopts3=document.createElement("div");
                    h3.innerHTML=input.value;
                    trash2.src="/res/delete.png";
                    edit3.src="/res/edit.png";
                    divopts3.className="file_options";
                    divopts3.appendChild(edit3);
                    divopts3.appendChild(trash2);
                    file.appendChild(h3);
                    file.appendChild(divopts3);  
                    chdiv.appendChild(file);
                    button.parentNode.removeChild(input);
                    button.style ="display:block;";
                    button.parentNode.insertBefore(file,button);
                    var title=button.parentElement.parentElement.parentElement.firstChild.firstChild.innerHTML;
                    var contents=JSON.parse(localStorage.getItem(title));
                    contents["files"].push(input.value);
                    localStorage.setItem(title,JSON.stringify(contents))
                }
        })
    })
}

function edit_title(button){
    button.addEventListener("click",function(){
            var text=document.createElement("input");
            text.type="text";
            button.parentElement.style ="display:none;";
            button.parentElement.previousSibling.style ="display:none;";
            button.parentElement.parentElement.appendChild(text);

            var title_title =button.parentElement.previousSibling.innerHTML;
            var title_object = JSON.parse(localStorage.getItem(title_title));
            text.addEventListener("keyup",function(event){
                if (event.keyCode === 13 && check_title(text.value)===true){
                    button.parentElement.previousSibling.innerHTML = text.value;
                    title_object["innerh1"]=text.value;
                    localStorage.removeItem(title_title);
                    localStorage.setItem(text.value,JSON.stringify(title_object));
                    button.parentElement.parentElement.removeChild(text);
                    button.parentElement.style ="display:flex;";
                    button.parentElement.previousSibling.style ="display:block;";
                }
            })
        })
}
function edit_comment(button){
    button.addEventListener("click",function(){
        var textarea=document.createElement("textarea");
        button.parentElement.style ="display:none;";
        button.parentElement.previousSibling.style ="display:none;";
        button.parentElement.parentElement.appendChild(textarea);
        var comment_title =button.parentElement.parentElement.previousSibling.firstChild.innerHTML;
        var title_object = JSON.parse(localStorage.getItem(comment_title));
        textarea.addEventListener("keyup",function(event){
            if (event.keyCode === 13 ){
                title_object["innerp"]=textarea.value;
                localStorage.setItem(comment_title,JSON.stringify(title_object));
                button.parentElement.previousSibling.innerHTML = textarea.value;
                button.parentElement.parentElement.removeChild(textarea);
                button.parentElement.style ="display:flex;";
                button.parentElement.previousSibling.style ="display:block;";
            }
        })
    })
}
function edit_file(button){
    button.addEventListener("click",function(){
        var text=document.createElement("input");
        text.type="text";
        button.parentElement.style ="display:none;";
        button.parentElement.previousSibling.style ="display:none;";
        button.parentElement.parentElement.appendChild(text);

        var file_title =button.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerHTML;
        var title_object = JSON.parse(localStorage.getItem(file_title));
        text.addEventListener("keyup",function(event){
            if (event.keyCode === 13 && text.value!="" && text.value!=(text.value).length*" " ){
                var y=title_object["files"].indexOf(button.parentElement.previousSibling.innerHTML);
                title_object["files"][y]=text.value;
                button.parentElement.previousSibling.innerHTML = text.value;
                localStorage.setItem(file_title,JSON.stringify(title_object));
                button.parentElement.parentElement.removeChild(text);
                button.parentElement.style ="display:flex;";
                button.parentElement.previousSibling.style ="display:block;";
            }
        })
    })
}
function trash_title(button){
    button.addEventListener("click",function(){
        var title_title =button.parentElement.previousSibling.innerHTML;
        localStorage.removeItem(title_title);
        var parent=button.parentElement.parentElement.parentElement
        parent.parentElement.removeChild(parent)
    })
}
function trash_file(button){
    button.addEventListener("click",function(){
        var file_title =button.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerHTML;
        var title_object = JSON.parse(localStorage.getItem(file_title));
        var y=title_object["files"].indexOf(button.parentElement.previousSibling.innerHTML);
        title_object["files"].splice(y,1);
        localStorage.setItem(file_title,JSON.stringify(title_object));
        var parent=button.parentElement.parentElement;
        parent.parentElement.removeChild(parent);
    })
 
}
//create all folders on start

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    var contents=JSON.parse(localStorage.getItem(key));
    var addFolder=document.getElementById("add_folder_div");
    var folders=addFolder.parentNode;
    var div=document.createElement("div");
    var chdiv=document.createElement("div");
    var divopts1=document.createElement("div");
    var divopts2=document.createElement("div");
    var divcolors=document.createElement("div");
    var section1=document.createElement("section");
    var span1=document.createElement("span");
    var span2=document.createElement("span");
    var span3=document.createElement("span");
    var trash1=document.createElement("img");
    var edit1 =document.createElement("img");
    var splash =document.createElement("img");
    var img3 =document.createElement("img");
    var color1 = document.createElement("img");
    var color2 = document.createElement("img");
    var color3 = document.createElement("img");
    var color4 = document.createElement("img");
    var color5 = document.createElement("img");
    var p=document.createElement("p");
    var h1=document.createElement("h1");

    div.className = 'folder';
    chdiv.className='folder_files';
    divopts1.className='title_options';
    divopts2.className='comment_options';    
    divcolors.className='color_palet'
    section1.className='color_section';
    span1.className='folder_title';
    span2.className='folder_comment';
    span3.className='add_button';
    color1.src ="/res/color_palet.png";
    color2.src ="/res/color_palet.png";
    color3.src ="/res/color_palet.png";
    color4.src ="/res/color_palet.png";
    color5.src ="/res/color_palet.png";
    color1.id ="color1";
    color2.id ="color2";
    color3.id ="color3";
    color4.id ="color4";
    color5.id ="color5";
    edit1.src= "/res/edit.png";
    splash.src="/res/color.png";
    trash1.src="/res/delete.png";
    var edit2=edit1.cloneNode(true);
    img3.src= "/res/plus.png";
    p.innerHTML=contents["innerp"];
    h1.innerHTML=contents["innerh1"];

    span1.appendChild(h1);
    divcolors.appendChild(color1);
    divcolors.appendChild(color2);
    divcolors.appendChild(color3);
    divcolors.appendChild(color4);
    divcolors.appendChild(color5);
    section1.appendChild(splash);
    section1.appendChild(divcolors);
    divopts1.appendChild(section1);
    divopts1.appendChild(edit1);
    divopts1.appendChild(trash1)
    span1.appendChild(divopts1);
    divopts2.appendChild(edit2);
    span2.appendChild(p);
    span2.appendChild(divopts2);
    span3.appendChild(img3);
    contents["files"].forEach(element => {
        var file=document.createElement("span");
        var h3=document.createElement("h3");
        var trash2=document.createElement("img");
        var edit3=document.createElement("img")
        var divopts3=document.createElement("div")
        h3.innerHTML=element;
        trash2.src="/res/delete.png";
        edit3.src="/res/edit.png";
        divopts3.className="file_options"
        divopts3.appendChild(edit3);
        divopts3.appendChild(trash2);
        file.appendChild(h3);
        file.appendChild(divopts3);  
        chdiv.appendChild(file);
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
    if(check_title(title)===true){
        var addFolder=document.getElementById("add_folder_div")
        var folders=addFolder.parentNode;
        var div=document.createElement("div");
        var chdiv=document.createElement("div");
        var divopts1=document.createElement("div");
        var divopts2=document.createElement("div");
        var divcolors=document.createElement("div");
        var section1=document.createElement("section");
        var span1=document.createElement("span");
        var span2=document.createElement("span");
        var span3=document.createElement("span");
        var trash1=document.createElement("img");
        var edit1 =document.createElement("img");
        var splash=document.createElement("img");
        var img3=document.createElement("img");
        var color1 = document.createElement("img");
        var color2 = document.createElement("img");
        var color3 = document.createElement("img");
        var color4 = document.createElement("img");
        var color5 = document.createElement("img");
        var p=document.createElement("p");
        var h1=document.createElement("h1");
        
        div.className = 'folder';
        chdiv.className='folder_files';
        divopts1.className='title_options';
        divopts2.className='comment_options';
        divcolors.className="color_palet";
        section1.className="color_section"
        span1.className='folder_title';
        span2.className='folder_comment';
        span3.className='add_button';
        trash1.src="/res/delete.png";
        edit1.src= "/res/edit.png";
        splash.src="/res/color.png";
        var edit2=edit1.cloneNode(true);
        img3.src= "/res/plus.png";
        color1.src ="/res/color_palet.png";
        color2.src ="/res/color_palet.png";
        color3.src ="/res/color_palet.png";
        color4.src ="/res/color_palet.png";
        color5.src ="/res/color_palet.png";
        color1.id ="color1";
        color2.id ="color2";
        color3.id ="color3";
        color4.id ="color4";
        color5.id ="color5";
        p.innerHTML="add comment here...";
        h1.innerHTML=title;

        span1.appendChild(h1);
        divopts1.appendChild(splash);
        divopts1.appendChild(edit1);
        divcolors.appendChild(color1);
        divcolors.appendChild(color2);
        divcolors.appendChild(color3);
        divcolors.appendChild(color4);
        divcolors.appendChild(color5); 
        section1.appendChild(splash);
        section1.appendChild(divcolors);
        divopts1.appendChild(section1);
        divopts1.appendChild(edit1);
        divopts1.appendChild(trash1);
        span1.appendChild(divopts1);
        divopts2.appendChild(edit2);
        span2.appendChild(p);
        span2.appendChild(divopts2);
        span3.appendChild(img3);
        chdiv.appendChild(span3);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(chdiv);
        folders.insertBefore(div,addFolder);
        add_function(img3);
        edit_title(edit1);
        edit_comment(edit2);
        const title_objs={innerp:"add comment here...",innerh1:title,files:[]};
        window.localStorage.setItem(title,JSON.stringify(title_objs));
    }
})

//edit buttons 
var edits = document.querySelectorAll("img[src='/res/edit.png']");
for(let i = 0; i < edits.length; i++){
    if (edits[i].parentElement.previousSibling.tagName=="H1"){
        edit_title(edits[i]);
    }else if(edits[i].parentElement.previousSibling.tagName=="P"){
        edit_comment(edits[i]);
    }else{
        edit_file(edits[i]);
    }  
}
//trash buttons
var trashes = document.querySelectorAll("img[src='/res/delete.png']");
for(let i = 0; i < trashes.length; i++){
    if (trashes[i].parentElement.previousSibling.tagName=="H1"){
        trash_title(trashes[i]);
    }else{
        trash_file(trashes[i]);
    }  
}
//add buttons
var add_buttons = document.querySelectorAll(".add_button img[src='/res/plus.png']");
for(let i = 0; i < add_buttons.length; i++){
    add_function(add_buttons[i]);
}
