document.getElementById('searchButton').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: "callSearchFunction" }, (response) => {
        console.log("Response from background script:", response);
    });
});