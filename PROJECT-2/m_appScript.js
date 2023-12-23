const myformEl = document.getElementById("myform");                  

const scoreEl = document.getElementById("score");                  
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

const n1 = Math.floor(Math.random()*10);
const n2 = Math.floor(Math.random()*10);

let rightans= n1*n2;
questionEl.innerText= `What is ${n1} Multiply By ${n2}?`;
let score= JSON.parse(localStorage.getItem('score'));

if(score==null){score=0;}
scoreEl.innerText= `Score: ${score}`;


myformEl.addEventListener("submit",()=>{
    const check=+answerEl.value;
    if(rightans==check){score++;}
    else if(check=="r" || check=="reset" || check=="restart"){score==0}
    else{
        if(score!=0){score--;}
        else{score==0;}
    }
    inLocalStorage();
})
function inLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}