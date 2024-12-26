chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.action === "callSearchFunction") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "callSearchFunction" }, (response) => {
                    console.log("Response from content script:", response);
                });
            }
        });
        sendResponse({ status: "Message sent to content script" });
    }

});