function test() {
    console.log("zzzzzzzzzz");
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "callTestFunction") {
        test();
        sendResponse({ status: "Function test called" });
    }
});