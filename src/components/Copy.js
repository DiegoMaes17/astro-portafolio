const Btn = document.querySelector('#BtnEmail')

Btn.addEventListener('click', ()=>{
    navigator.clipboard.writeText('diego.madrid.177@gmail.com')
    window.alert("Copiado")
});



console.log("Prueba test")