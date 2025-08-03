document.addEventListener("DOMContentLoaded",()=>{
    for(let i = 1; i<=4; i++){
        //Accedemos al boton
        let boton = document.getElementById(`bt${i}`)
        // Accedmos al texto culto
        let caja_oculto = document.getElementById(`cj${i}`)
        boton.addEventListener("click",()=>{
            // Me da accedo a todos los estilos de una elemento
            let caja = window.getComputedStyle(caja_oculto)
            // Extrae los valores especificos de una propiedad
            let diplayvalue = caja.getPropertyValue("display")
            // Cambiamos de imagen
            let boton_cerrar = document.getElementById(`bc${i}`)
            if(diplayvalue === "none"){
                caja_oculto.style.display = "block"
                boton_cerrar.src ="./assets/images/icon-minus.svg"
                
            }
            else{
                caja_oculto.style.display = "none"
                boton_cerrar.src ="./assets/images/icon-plus.svg"

            }
        })
    }
})