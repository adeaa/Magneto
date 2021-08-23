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
    var img1 =document.createElement("img");
    var p=document.createElement("p");
    var h1=document.createElement("h1");
    var form=document.createElement("form");
    var input=document.createElement("input");
    div.className = 'folder';
    chdiv.className='folder_files';
    span1.className='folder_title';
    span2.className='folder_comment';
    img1.src= "/res/edit.png";
    var img2=img1.cloneNode(true);
    p.innerHTML=contents["innerp"];
    h1.innerHTML=contents["innerh1"];
    form.action="upload.php";
    form.method="POST";
    form.enctype="multipart/form-data"
    input.className='custom_file_input';
    input.type="file";
    span1.appendChild(h1);
    span1.appendChild(img1);
    span2.appendChild(p);
    span2.appendChild(img2);
    form.appendChild(input)
    chdiv.appendChild(form);
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
        window.localStorage.setItem(title,"{}");
        console.log(localStorage.getItem(title));
        //create div folder
        var addFolder=document.getElementById("add_folder_div")
        var folders=addFolder.parentNode;
        var div=document.createElement("div");
        var chdiv=document.createElement("div");
        var span1=document.createElement("span");
        var span2=document.createElement("span");
        var img1 =document.createElement("img");
        var p=document.createElement("p");
        var h1=document.createElement("h1");
        var form=document.createElement("form")
        var input=document.createElement("input");
        div.className = 'folder';
        chdiv.className='folder_files';
        span1.className='folder_title';
        span2.className='folder_comment';
        img1.src= "/res/edit.png";
        var img2=img1.cloneNode(true);
        p.innerHTML='comment';
        h1.innerHTML=title;
        form.action="upload.php";
        form.method="POST";
        form.enctype="multipart/form-data";
        input.className='custom_file_input';
        input.type="file";
        span1.appendChild(h1);
        span1.appendChild(img1);
        span2.appendChild(p);
        span2.appendChild(img2);
        form.appendChild(input);
        chdiv.appendChild(form);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(chdiv);
        folders.insertBefore(div,addFolder);
        const title_objs={innerp:"comment",innerh1:title,files:{}}
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
            text.addEventListener("keyup",function(event){
                if (event.keyCode === 13 && check_title(text.value)===true){
                    buttons[i].previousSibling.innerHTML = text.value
                    

                    buttons[i].parentElement.removeChild(text)
                    buttons[i].style ="display:block;"
                    buttons[i].previousSibling.style ="display:block;"
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
/*
var _lsTotal = 0,
    _xLen, _x;
for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
        continue;
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2);
    _lsTotal += _xLen;
    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
};
console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");*/