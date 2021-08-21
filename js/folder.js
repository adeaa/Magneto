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
    console.log(`${key}: ${localStorage.getItem(key)}`);
    console.log(JSON.parse(localStorage.getItem(key)));
    
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


document.getElementById('add_folder').addEventListener("click",function(){
    var title=document.getElementById('title').value;
    document.getElementById('title').value="";
    console.log(title)
    
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
    console.log(i);
    console.log(buttons[i].parentElement.getAttribute("class"))
    if (buttons[i].previousSibling.tagName=="H1"){
        buttons[i].parentElement.innerHTML.clear()
    }else{

    }
    buttons[i].addEventListener('click',function(){
        //if (buttons[i].previousSibling.tagName ==="h1"){
        
        console.log(buttons[i].previousSibling.tagName=="H1");
    })
}

