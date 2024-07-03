const button = document.querySelector("#my_btn");
const input = document.querySelector("#guess");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const message3 = document.querySelector("#message3");
const body = document.querySelector("body");
let gizlireqem = Math.trunc(Math.random() *10 *2 )+1;
let score = 100;

button.addEventListener("click", function (){
    console.log(input.value, typeof input.value);
    console.log(gizlireqem, typeof gizlireqem);
    const cevir = +input.value; //number-e cevir
    console.log(cevir, typeof cevir);
    if(cevir === gizlireqem){
        message2.textContent = "siz qalibsiz";
        body.style.backgroundColor = "green";
    }
    else if(cevir > gizlireqem && cevir>=1 && cevir<=100){
        if(score>1){
            message2.textContent = "reqem yuksekdir";
            score--;
            message1.textContent=score; 
            body.style.backgroundColor = "red";
        }
    }
    else if(cevir < gizlireqem && cevir>=1 && cevir<=100){

        if(score>1){
            message2.textContent = "reqem kicikdir";
            score--;
            message1.textContent=score;
            body.style.backgroundColor = "red";
        }
    }
    else{
        console.log("nese yanlish getdi")
        alert("Something went wrong 😒");
    }
});
