function titleCase(str) {
    let newStr = ''
    let capStr = str.toLowerCase()
    for(let i = 0; i < capStr.length; i++) {
        let upper =  capStr[i].toUpperCase()
        if(capStr[i] === ' ') {
            console.log(i)
        newStr += upper
        } else {
        newStr += capStr[i]
        }
    }
    console.log(newStr)
    return str;
  }
  
  titleCase("I'm a little tea pot");