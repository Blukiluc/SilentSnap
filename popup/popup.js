document.getElementById('searchButton').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "callTestFunction" }, (response) => {
        console.log("Response from background script:", response);
    });
});