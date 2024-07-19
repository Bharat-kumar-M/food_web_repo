let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let content=document.querySelector('.content');
let items=document.querySelector('.items');

next.onclick=function(){
    var contentItems=document.querySelectorAll('.content .item');
    var images=document.querySelectorAll('.items .images');
    content.appendChild(contentItems[0]);
    items.appendChild(images[0]);
}
prev.onclick=function(){
    var contentItems=document.querySelectorAll('.content .item');
    var images=document.querySelectorAll('.items .images');
    content.prepend(contentItems[contentItems.length-1]);
    items.prepend(images[images.length-1]);
}

document.addEventListener('keydown',function(e){
    if(e.key=="ArrowRight"){
        var contentItems=document.querySelectorAll('.content .item');
        var images=document.querySelectorAll('.items .images');
        content.appendChild(contentItems[0]);
        items.appendChild(images[0]);
    }
    else if(e.key=="ArrowLeft"){
        var contentItems=document.querySelectorAll('.content .item');
        var images=document.querySelectorAll('.items .images');
        content.prepend(contentItems[contentItems.length-1]);
        items.prepend(images[images.length-1]);
    }
})
