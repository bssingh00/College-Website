let btn = document.getElementsByClassName("btn")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

btn.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "-420px"){
        startmenu.style.bottom = "-430px";
        startmenu.style.opacity = 0;
    }
    else{
        startmenu.style.bottom = "-420px"
        startmenu.style.opacity = 1;
    }
});
