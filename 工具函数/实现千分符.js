let s = '12223334445556662'

let millimeter = (str) => {
    str = str.replace(/\d{1,3}(?=(\d{3})+$)/g,(value) => {
        return value + ','
    })
    console.log(str)
}

millimeter(s)