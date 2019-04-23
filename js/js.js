var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos)
        $("header").style.top = 0;
    else
        $("header").style.top = "-150px";
    prevScrollpos = currentScrollpos;
}

function $(id){
    var element = document.getElementById(id);
    return element;
}

