window.addEventListener("load", ()=>{
    var form = document.querySelector(".formcontato__form");
    var nombre = document.getElementById("nombre");
    var correo = document.getElementById("mail");
    var asunto = document.getElementById("asunto");
    var mensaje = document.querySelector(".formcontato__textarea");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        validarValores()
    })

    validarValores = ()=>{
        //verificare los ingresos del usuario
        var correoIngreso = correo.value.trim();
        var nombreIngreso = nombre.value.trim();
        var asuntoIngreso = asunto.value.trim();
        var mensajeIngreso = mensaje.value.trim();
        

        if((!nombreIngreso) || (!asuntoIngreso) || (!mensajeIngreso)){
            verificaError(nombre, "Campo vacío");
        }else{
            verificaOk(nombre);
        }

        if(!correo){
            verificaError(correo, "Campo vacío");
        }else if(!esCorreo(correoIngreso)){
            verificaError(correo, "Mail no válido")
        }else{
            verificaOk(correo)
        }

    }

    var verificaError = (input, mensaje) => {
        var manejoForm = input.parentElement;
        var aviso = manejoForm.querySelector("p");
        aviso.innerText = mensaje;
        manejoForm.className = "error";
    }

    var verificaOk = (input) => {
        var manejoForm = input.parentElement;
        manejoForm.className = "correcto";
    }

    var esCorreo = (correoIngreso) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(correoIngreso);
    }



})
