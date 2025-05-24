function search() {
    console.log("Searching...");
    setTimeout(() => {
        const photoContainer = document.querySelector("div.b2f4R.IbYNR");
        const videoContainer = document.querySelector("div.ChG6a.VpkIO.nw8Ns");
        if (videoContainer) {
            console.log("Video container found!");
            let foundVid = false;
            var vid = null;
            for (const child of videoContainer.children) {
                if (child.tagName.toLowerCase() === "video") {
                    foundVid = true;
                    vid = child;
                    break;
                }
            }
            if (foundVid) {
                const source = vid.getAttribute("src");
                console.log(source);
                window.open(source, '_blank')
            } else {
                console.log("Error : Video not found.")
            }
        } else if (photoContainer) {
            console.log("Photo container found!");
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