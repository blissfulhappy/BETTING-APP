const bea =document.querySelector(".check");
const number =document.querySelector(".number");
const result=document.querySelector(".mseti")
let jeupe = document.querySelector(".jeupe");
let points=0;
bea.addEventListener("click",()=>{
    result.textContent= number.value;
    let bettingvalue=Math.floor(Math.random()*100);
    if(number.value ==bettingvalue){
        
        jeupe.textContent="you win , you have 10 points as a bonus";
        jeupe.Style.color="green";
        number.value="";
    } 
    else{
            jeupe.textContent="you loose try again";
            jeupe.style.color="maroon";
    }
    
});
const cash= document.querySelector(".cash");
const code= document.querySelector(".code");
const get= document.querySelector(".get");
const verify=document.querySelector(".verify");
let j=document.querySelector(".j");
let v=document.querySelector(".v");
let shati;

code.addEventListener("click", () => {
    if(cash.value ==500){
shati= Math.floor(Math.random()*1000);
j.textContent=shati;}
else{
    j.textContent="Enter amount";
    }
});
verify.addEventListener("click", ()=>{
    
        if(get.value == shati){
        v.textContent ="verified";
    }else{
        v.textContent="unallowed";
    }

});