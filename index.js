function menu(){
    document.getElementById('overflow').style.width="300px";
}
function closed(){
    document.getElementById('overflow').style.width="0px";
}



document.onkeydown = (e) => {

    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
       e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
       e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
       e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'u') {
       e.preventDefault();
    }
    if( e.key == 'F12')
    { e.preventDefault();}
    if(e.ctrlKey && e.key=="F11"){
        e.preventDefault();
    }
    };

    
const q1=localStorage.getItem("adminsq1");
document.getElementById("qn1").innerHTML=q1; 

const o1=localStorage.getItem("adminsop1");
document.getElementById("o1").innerHTML=o1;  
const o2=localStorage.getItem("adminsop2");
document.getElementById("o2").innerHTML=o2;  
const o3=localStorage.getItem("adminsop3");
document.getElementById("o3").innerHTML=o3;  
const o4=localStorage.getItem("adminsop4");
document.getElementById("o4").innerHTML=o4;

const q2=localStorage.getItem("adminsq2");
document.getElementById("qn2").innerHTML=q2; 

const o5=localStorage.getItem("adminsop5");
document.getElementById("o5").innerHTML=o5;  
const o6=localStorage.getItem("adminsop6");
document.getElementById("o6").innerHTML=o6;  
const o7=localStorage.getItem("adminsop7");
document.getElementById("o7").innerHTML=o7;  
const o8=localStorage.getItem("adminsop8");
document.getElementById("o8").innerHTML=o8;


const aq1=document.getElementById("q1").value;
localStorage.setItem('aq1' , aq1);

   if(q1=="") {document.getElementById("q1").style.visibility="collapse";}
   if(q2=="") {document.getElementById("q2").style.visibility="collapse";}
    

function a(){
alert("worng");
}  
function b(){
alert("correct");
}
function c(){
alert("worng");
}
function d(){
alert("worng");
}