function set_theme(theme){
    if (theme==="deep_ocean"){
        localStorage.setItem("theme","deep_ocean")
        document.body.style.backgroundImage = "url('/res/deep_ocean_bg.jpg')";
        document.documentElement.style.setProperty('--main_color','#0a1118');
        document.documentElement.style.setProperty('--main_color_t1','#0a111869');
        document.documentElement.style.setProperty('--main_color_t2','#0a11183a');
        document.documentElement.style.setProperty('--second_color',' #202931');
        document.documentElement.style.setProperty('--third_color',' #27313a');
        document.documentElement.style.setProperty('--fourth_color','#38444e');
        document.documentElement.style.setProperty('--palet_1','#000000');
        document.documentElement.style.setProperty('--palet_1_1','#00080d');
        document.documentElement.style.setProperty('--palet_1_2','#00111a');
        document.documentElement.style.setProperty('--palet_2','#00111a');
        document.documentElement.style.setProperty('--palet_2_1','#001927');
        document.documentElement.style.setProperty('--palet_2_2','#002234');
        document.documentElement.style.setProperty('--palet_3','#002234');
        document.documentElement.style.setProperty('--palet_3_1','#012a41');
        document.documentElement.style.setProperty('--palet_3_2','#01324e');
        document.documentElement.style.setProperty('--palet_4','#01324e');
        document.documentElement.style.setProperty('--palet_4_1','#013b5b');
        document.documentElement.style.setProperty('--palet_4_2','#014368');
        document.documentElement.style.setProperty('--palet_5','#014368');
        document.documentElement.style.setProperty('--palet_5_1','#014c75');
        document.documentElement.style.setProperty('--palet_5_2','#015e91');
        document.documentElement.style.setProperty('--font_color1','#fff');
        document.documentElement.style.setProperty('--font_color2','#fff');
        document.documentElement.style.setProperty('--font_color3','#000');
    }else if(theme==="neon"){
        localStorage.setItem("theme","neon")
        document.body.style.background="url('/res/neon_bg.jpg')";
        document.documentElement.style.setProperty('--main_color','#000000');
        document.documentElement.style.setProperty('--main_color_t1','#00000069');
        document.documentElement.style.setProperty('--main_color_t2','hsla(0, 0%, 0%, 0.227)');
        document.documentElement.style.setProperty('--second_color',' #5eff00');
        document.documentElement.style.setProperty('--third_color',' #c8ff00');
        document.documentElement.style.setProperty('--fourth_color','#e5ff00');
        document.documentElement.style.setProperty('--palet_1','#7aff01');
        document.documentElement.style.setProperty('--palet_1_1','#c2ff03');
        document.documentElement.style.setProperty('--palet_1_2','#cdeb24');
        document.documentElement.style.setProperty('--palet_2','#0020fe');
        document.documentElement.style.setProperty('--palet_2_1','#6820ea');
        document.documentElement.style.setProperty('--palet_2_2','#8200ff');
        document.documentElement.style.setProperty('--palet_3','#cb22ea');
        document.documentElement.style.setProperty('--palet_3_1','#dc48f7');
        document.documentElement.style.setProperty('--palet_3_2','#e680f8');
        document.documentElement.style.setProperty('--palet_4','#fe1500');
        document.documentElement.style.setProperty('--palet_4_1','#ea4b21');
        document.documentElement.style.setProperty('--palet_4_2','#ff5940');
        document.documentElement.style.setProperty('--palet_5','#fffd01');
        document.documentElement.style.setProperty('--palet_5_1','#ffb600');
        document.documentElement.style.setProperty('--palet_5_2','#ff9600');
        document.documentElement.style.setProperty('--font_color1','#000');
        document.documentElement.style.setProperty('--font_color2','#000');
        document.documentElement.style.setProperty('--font_color3','#000');
    }else{
        localStorage.setItem("theme","pastel");
        document.body.style.background= "url('/res/pastel_bg.jpg')";
        document.documentElement.style.setProperty('--main_color','#000000');
        document.documentElement.style.setProperty('--main_color_t1','#00000069');
        document.documentElement.style.setProperty('--main_color_t2','#0000003a');
        document.documentElement.style.setProperty('--second_color',' #ffcece');
        document.documentElement.style.setProperty('--third_color',' #ffd9ca');
        document.documentElement.style.setProperty('--fourth_color','#ffe2d4');
        document.documentElement.style.setProperty('--palet_1','#FFAACC');
        document.documentElement.style.setProperty('--palet_1_1','#FFBBCC');
        document.documentElement.style.setProperty('--palet_1_2','#FFCCCC');
        document.documentElement.style.setProperty('--palet_2','#FFDDCC');
        document.documentElement.style.setProperty('--palet_2_1','#FFEECC');
        document.documentElement.style.setProperty('--palet_2_2','#FFFFCC');
        document.documentElement.style.setProperty('--palet_3','#CCAAFF');
        document.documentElement.style.setProperty('--palet_3_1','#CCBBFF');
        document.documentElement.style.setProperty('--palet_3_2','#CCCCFF');
        document.documentElement.style.setProperty('--palet_4','#CCDDFF');
        document.documentElement.style.setProperty('--palet_4_1','#CCEEFF');
        document.documentElement.style.setProperty('--palet_4_2','#CCFFFF');
        document.documentElement.style.setProperty('--palet_5','#4e9c81');
        document.documentElement.style.setProperty('--palet_5_1','#8DC3A7');
        document.documentElement.style.setProperty('--palet_5_2','#B4D6C1');
        document.documentElement.style.setProperty('--font_color1','#000');
        document.documentElement.style.setProperty('--font_color2','#000');
        document.documentElement.style.setProperty('--font_color3','#000');   
    }
}
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
function add_function(button){
    button.addEventListener('click',function(){
    var input=document.createElement("input");
    input.type="text";
    button.style ="display:none;";
    button.parentElement.parentNode.insertBefore(input,button.parentElement);
    input.addEventListener('keyup',function(event){
            if (event.keyCode === 13 ){
                var file=document.createElement("span");
                var h3=document.createElement("h3");
                var trash2=document.createElement("img");
                var edit3=document.createElement("img");
                var divopts3=document.createElement("div");
                h3.innerHTML=input.value;
                file.className="color0"
                trash2.src="/res/delete.png";
                edit3.src="/res/edit.png";
                divopts3.className="file_options";
                divopts3.appendChild(edit3);
                divopts3.appendChild(trash2);
                file.appendChild(h3);
                file.appendChild(divopts3);  
                button.parentElement.parentNode.removeChild(input);
                button.style ="display:block;";
                button.parentElement.parentNode.insertBefore(file,button.parentElement);
                edit_file(edit3);
                trash_file(trash2);
                var title=button.parentElement.parentElement.parentElement.firstChild.firstChild.innerHTML;
                var contents=JSON.parse(localStorage.getItem(title));
                contents["files"].push(input.value);
                localStorage.setItem(title,JSON.stringify(contents))
            }
        })
    })
}
function color_button(button){
    button.addEventListener('click',function(){
        var title= button.parentElement.parentElement.parentElement.parentElement;
        title.className="folder_title";
        title.classList.add(button.id);
        var comment=title.nextSibling;
        comment.className="folder_comment";
        comment.classList.add(button.id);
        var files=comment.nextSibling.children
        for (var i = 0; i < files.length; i++) {
            if (files[i].className!="add_button"){
                files[i].className=button.id
            }
        }
    })
}
//create all folders on start
for (let i = 0; i < localStorage.length; i++) {
    if(localStorage.getItem(localStorage.key(i))!="pastel" && localStorage.getItem(localStorage.key(i))!="deep_ocean" && localStorage.getItem(localStorage.key(i))!="neon"){
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
        span1.className='folder_title color0';
        span2.className='folder_comment color0';
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
            file.className="color0"
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
    }else{
        set_theme(localStorage.getItem(localStorage.key(i)))
    }
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
        span1.className='folder_title color0';
        span2.className='folder_comment color0';
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
        color_button(color1);
        color_button(color2);
        color_button(color3);
        color_button(color4);
        color_button(color5);
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
        trash_title(trash1);
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
//color buttons
var color_buttons=document.querySelectorAll("img[src='/res/color_palet.png']");
for(let i = 0; i < color_buttons.length; i++){
    color_button(color_buttons[i])
}
//theme buttons
var themes=document.querySelectorAll("h5.theme")
for(let i = 0; i < themes.length; i++){
    themes[i].addEventListener('click',function(){
        set_theme(themes[i].id)
    })
}
