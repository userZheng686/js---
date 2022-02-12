// let url = 'https://www.bilibili.com/video/BV1SD4y1F7ZQ?from=search&seid=%E4%BD%A0%E5%A5%BD&spm_id_from=333.337.0.0#a=b'
let url = 'http://www.xxxxxxx.cn/?lx=1&name=JS&from=baidu#video'

const parseUrl = (url) => {
    let {log} = console
    let obj = {}
    let urlSplit = url.split('?')[1]
    let splitArr = urlSplit.split('&')
    splitArr.forEach(item => {
        if(item.includes('#')){
            obj['hash'] = item.split('#')[1]
            item = item.replaceAll(/#\w+/g,'')
        }
        obj[item.split('=')[0]] = decodeURIComponent(item.split('=')[1]) 
    })
    log(obj)
}

console.log(parseUrl(url))