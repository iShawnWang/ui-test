// todo 可用 cluster


let successCount = 0
let failCount = 0

const countFail = (e) => {
  console.log(e)
  failCount = failCount + 1
  console.log(`success: ${successCount} failCount: ${failCount}`)
}

const countSucccess = () => {
  successCount = successCount + 1
  console.log(`success: ${successCount} failCount: ${failCount}`)
}

const visitPage = (fetch) => {
  return fetch(<url>).catch(countFail)
}

const makePageReq = (fetch) => {
  countSucccess()
  return Promise.all([fetchxxx]).catch(countFail)
}

import('node-fetch').then((a) => {
  setInterval(() => {
    visitPage(a.default).then(() => makePageReq(a.default))
  }, 20);
})
