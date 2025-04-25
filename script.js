let intervalo;
function iniciarCronometro(){
    clearInterval(intervalo);
    const dataFutura =new Date("2025-10-03T23:59:59");
    intervalo = setInterval(()=>{
        const agora= new Date();
        const diferença = dataFutura - agora;
        document.getElementById ('timer').textContent = `${diferença} milisegundos.`  ;
}, 100)
}
iniciarCronometro();
