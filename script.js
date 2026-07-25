let searchbycourse_icon=document.querySelector("#searchbycourse i");
let coursediv=document.getElementById("courseopt");
searchbycourse_icon.addEventListener("click",function(){
    coursediv.style.visibility="visible";
});
coursediv.addEventListener("mouseleave",function(){
    coursediv.style.visibility="hidden";
});

let searchbyyear_icon=document.querySelector("#searchbyyear i");
let yeardiv=document.getElementById("yearopt");
searchbyyear_icon.addEventListener("click",function(){
    yeardiv.style.visibility="visible";
});
yeardiv.addEventListener("mouseleave",function(){
    yeardiv.style.visibility="hidden";
});