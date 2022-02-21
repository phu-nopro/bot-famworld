document.querySelector(".run_fam").addEventListener('click',function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {command: "FW_run"});
    });
});