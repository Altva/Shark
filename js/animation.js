function openNav(){
    document.getElementById("sideBar").style.width = "100px";
    //document.getElementById("main").style.marginLeft = "100px";
    document.getElementById("btnOpen").style.visibility = "hidden";

}

function closeNav(){
    document.getElementById("sideBar").style.width = "0px";
    //document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("btnOpen").style.visibility = "visible";
}