var takeIt = document.getElementById('takeIt');
var submitIt = document.getElementById('submitIt');
var showBox = document.getElementById('showBox');
var values1 = document.getElementById('values1');
var values2 = document.getElementById('values2');
var values3 = document.getElementById('values3');
var values4 = document.getElementById('values4');
var values5 = document.getElementById('values5');


submitIt.addEventListener('click',()=>{
    var line = takeIt.value;
    countChar(line)
    
})

takeIt.addEventListener("keypress",()=>{
    if(event.key === 'Enter'){
        
        var line = takeIt.value;
        countChar(line)
    }
})


function countChar(line){
    var values = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0 };
    for (let chr of line) {
        var chrN = chr.charCodeAt(0)
    
        if(chrN>=65 && chrN<=90){
            values[chr]++;
        }
        else if(chrN>=97 && chrN<=122){
            chrN-=32;
            values[String.fromCharCode(chrN)]++;
        }
        
    }
    
    console.log(values);
    values1.innerText = `A: ${values['A']} B: ${values['B']}  C: ${values['C']} D: ${values['D']} E: ${values['E']} F: ${values['F']}`
    values2.innerText = `G: ${values['G']} H: ${values['H']}  I: ${values['I']} J: ${values['J']} K: ${values['K']}`
    values3.innerText = `L: ${values['L']} M: ${values['M']}  N: ${values['N']} O: ${values['O']} P: ${values['P']}`
    values4.innerText = `Q: ${values['Q']} R: ${values['R']}  S: ${values['S']} T: ${values['T']} U: ${values['U']}`
    values5.innerText = `V: ${values['V']} W: ${values['W']}  X: ${values['X']} Y: ${values['Y']} Z: ${values['Z']}`
    
}



/* var u='C';

console.log(values[String.fromCharCode(chrN)]);
console.log('z'.charCodeAt(0));
 */