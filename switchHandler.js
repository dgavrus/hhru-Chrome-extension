window.addEventListener("load", function()
{
    document.getElementById("myonoffswitch").addEventListener("click", onClickSwitch, false);
}, false);

onClickSwitch = function(){
    alert("click!");
}