    // ┌──────────────────┐
    // │  Content Script  │◀────────────────┐
    // └─┬────────────────┘                 │
    //   │ ┌───────────────────────┐ ┌──────┴──┐
    //   └▶│  Chrome Runtime API   │ │response │
    //     └──┬────────────────────┘ └──────┬──┘
    //        │  ┌──────────────────┐       │
    //        └─▶│Background Script │───────┘
    //           └──────────────────┘


console.log('first content script')

chrome.runtime.sendMessage('From Content Script', (response) => {
  console.log(response)
})