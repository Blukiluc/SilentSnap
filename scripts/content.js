function search() {
    console.log("Searching...");
    setTimeout(() => {
        const photoContainer = document.querySelector("div.b2f4R.IbYNR");
        if (photoContainer) {
            console.log("Container found!");
            let foundImg = false;
            var img = null;
            for (const child of photoContainer.children) {
                if (child.tagName.toLowerCase() === "img") {
                    foundImg = true;
                    img = child;
                    break;
                }
            }
            if (foundImg) {
                const source = img.getAttribute("src");
                console.log(source);
                window.open(source, '_blank')
            } else {
                console.log("Error : Image not found.")
            }
        } else {
            console.log("Container not found");
        }
    }, 10000);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "callSearchFunction") {
        search();
        sendResponse({ status: "Function search called" });
    }
});