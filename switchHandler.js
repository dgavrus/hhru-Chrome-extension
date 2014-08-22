window.addEventListener("load", function(){
    document.getElementById("myonoffswitch").addEventListener("click", onClickSwitch, false);
}, false);



onClickSwitch = function(tab){
    var checked = !!!($("#myonoffswitch").attr("checked"));
    $("#myonoffswitch").attr("checked", checked);
    if(checked){
        chrome.tabs.executeScript(tab.id, {file:"alertText.js"});
    }
    else{
        chrome.tabs.executeScript(tab.id, {code:"alert('111')"});
    }
    console.log("after:" + checked);
}
