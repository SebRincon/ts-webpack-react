    // ┌──────────────────┐
    // │  Content Script  │◀────────────────┐
    // └─┬────────────────┘                 │
    //   │ ┌───────────────────────┐ ┌──────┴──┐
    //   └▶│  Chrome Runtime API   │ │response │
    //     └──┬────────────────────┘ └──────┬──┘
    //        │  ┌──────────────────┐       │
    //        └─▶│Background Script │───────┘
            //   └──────────────────┘

console.log('Background Script')

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg)
    console.log(sender)
    sendResponse('From the background script')
})


