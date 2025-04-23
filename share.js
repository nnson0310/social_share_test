(() => {
    const sharedLinks = document.querySelectorAll(".share-buttons a");
    sharedLinks.forEach((shareEl) => {
        shareEl.addEventListener('click', (e) => {
            e.preventDefault();
            initSharing(shareEl);
        });
        
        shareEl.addEventListener('key', (e) => {
            if (e.key === 'Enter') {
                initSharing(shareEl);
            }
        })
    })
    
    const initSharing = (shareEl) => {
        if (!shareEl) {
            return;
        }

        const templateUrl = shareEl.getAttribute("data-shareUrl");
        if (!templateUrl) {
            return;
        }
        
        const currentUrl = new URL(window.location.href);
        let shareUrl = templateUrl.replace(/{encodeUrl}/g, encodeURIComponent(currentUrl.toString()));
        console.log(shareUrl);
        window.open(shareUrl, 'popup', 'popup=yes,width=600,height=600');
    }
})();