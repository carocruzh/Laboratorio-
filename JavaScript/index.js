const con1=document.querySelector('.con1');
const con2=document.querySelector('.con2');
const con3=document.querySelector('.con3');

const cambiar=document.querySelector('#cambiar');
const volver=document.querySelector('#volver');

cambiar.addEventListener('click', function(){
    con1.style.backgroundColor="green";
    con1.style.height="25vh";
    con1.style.width="100%";
});  
cambiar.addEventListener('click', function(){
    con2.style.backgroundColor="green";
    con2.style.height="25vh";
    con2.style.width="100%";
});  
cambiar.addEventListener('click', function(){
    con3.style.backgroundColor="green";
    con3.style.height="25vh";
    con3.style.width="100%";
}); 

volver.addEventListener('click', function(){
    con1.style.backgroundColor="rgb(24, 24, 75)";
    con1.style.height="25vh";
    con1.style.width="100%";
});  
volver.addEventListener('click', function(){
    con2.style.backgroundColor="rgb(24, 24, 75)";
    con2.style.height="55vh";
    con2.style.width="50%";
}); 
volver.addEventListener('click', function(){
    con3.style.backgroundColor="rgb(24, 24, 75)";
    con3.style.height="55vh";
    con3.style.width="50%";
}); 