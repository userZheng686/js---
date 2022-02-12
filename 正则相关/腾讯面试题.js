//判断url中只包含qq.com
/**
http://www.qq.com // 通过
http://www.qq.com.cn // 不通过
http://www.qq.com/a/b // 通过
http://www.qq.com?a=1 // 通过
http://www.123qq.com?a=1 // 不通过
 */

let testurl = (url) => {
    let regExp = /\/\/w+\.qq\.com[^.]*$/
    return regExp.test(url)
}

console.log(testurl('http://wwww.qq.com'))