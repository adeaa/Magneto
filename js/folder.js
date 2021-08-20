
document.getElementById('add_folder').addEventListener("click",function(){
    var title=document.getElementById('title').value;
    document.getElementById('title').value="";
    console.log(title)
    
    if(title in localStorage){
        alert(title+" folder is already created");
    }else if(title=="" || title==" "*(title.length)){
        alert("folder title is blanc");
        localStorage.clear();
    }else{
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
        var input=document.createElement("input");
        div.className = 'folder';
        chdiv.className='folder_files';
        span1.className='folder_title';
        span2.className='folder_comment';
        img1.src= "/res/edit.png";
        var img2=img1.cloneNode(true);
        p.innerHTML='comment';
        h1.innerHTML=title;
        input.className='custom_file_input'
        input.type="file"
        span1.appendChild(h1);
        span1.appendChild(img1);
        span2.appendChild(p);
        span2.appendChild(img2);
        chdiv.appendChild(input);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(chdiv);
        folders.insertBefore(div,addFolder);
    }
})


