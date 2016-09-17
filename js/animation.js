var isMenuOpen = true;

function openNav(){
    isMenuOpen = true;
    document.getElementById("sideBar").style.width = "100px";
    //document.getElementById("main").style.marginLeft = "100px";
    //document.getElementById("btnOpen").style.visibility = "hidden";

}

function closeNav(){
    isMenuOpen = false;
    document.getElementById("sideBar").style.width = "0px";
    //document.getElementById("main").style.marginLeft = "0px";
    //document.getElementById("btnOpen").style.visibility = "visible";
}

function changeMenu(x){
    x.classList.toggle("change");
    if(isMenuOpen){
        closeNav();
    }
    else{
        openNav();
    }
}