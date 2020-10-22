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

    let split = expr.match(/.{1,10}/g);
    let res1 = '';
    let res2 = '';

    for (let i = 0; i < split.length; i++) {
        let arrItem = split[i].split('');

        res1 = '';
        for( let j = 0; j < arrItem.length; j++) {

            if(arrItem[j] == '1') {
                if(arrItem[j + 1] == '0') {
                    res1 += '.';
                }
                else if(arrItem[j + 1]  == '1'){
                    res1 += '-';
                }
                j += 1;
            }

            else if(arrItem[j]  === '*') {
                res2 += ' ';

                break;
            }

        }
        res2 += res1 && MORSE_TABLE[res1];
    }

    return res2;
}

module.exports = {
    decode
}