const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let n=expr.split('')
    let m=[]
    let nn=''
    for (i=0; i<expr.length; i=i+10){
    // console.log(expr.slice(i,i+10).replace(/^0+/, '').)}
    m=[...m,expr.slice(i,i+10).replace(/^0+/, '').replace(/10/g, '.').replace(/11/g, '-')]
    // console.log(expr.slice(i,i+10).replace(/^0+/, '').replace(/10/g, '.').replace(/11/g, '-'))
    }
    m.forEach(el => {
    nn= nn+(MORSE_TABLE[el] || ' ')
      // console.log(nn)
    });
    return nn

}

module.exports = {
    decode
}