browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == "ExtensionButtonClick") {
        //document.querySelector('video').requestPictureInPicture();
        
        // Work around the User Activation requirement for request
        document.querySelector('video').webkitSetPresentationMode('picture-in-picture');
    }
});
