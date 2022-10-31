function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (const tab of tabs) {
    browser.tabs
      .sendMessage(tab.id, { message: "ExtensionButtonClick" })
      .then((response) => {
        console.log("Message from the content script:");
        console.log(response.response);
      })
      .catch(onError);
  }
}

browser.browserAction.onClicked.addListener(function(){
    browser.tabs
        .query({
          currentWindow: true,
          active: true,
        })
        .then(sendMessageToTabs)
        .catch(onError);
});
