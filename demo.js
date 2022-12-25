function fincChar(string, word) {
    let res = []
    for (let i = 0; i < string.length; i++) {
        if (string.substring(i,i + word.length)== word) {
            res.push(i)
        }
    }
    console.log(res.join(' '));
}

fincChar( "AABAADAACAABAABA" , 'AABA')