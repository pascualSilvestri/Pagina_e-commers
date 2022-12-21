import { cliente_servidor } from "../servicios/servidor_cliente.js";
let sesion_activa = false;

const formulario_iniciar = document.querySelector('[data-form-login]')
const btn_articulo = document.querySelector('[data-ingreso-articulo]')


if(formulario_iniciar != null){
    formulario_iniciar.addEventListener('submit',(e)=>{
        e.preventDefault()
        const usu = document.querySelector('[usuario-login]').value
        const pass = document.querySelector('[password-login]').value
        cliente_servidor
        .lista_usuario()
            .then((data)=>{
                let ban = false
                data.forEach(({nombre,apellido,usuario,email,password,id})=>{
                    if(usuario == usu && password == pass){
                        ban = true
                        sesion_activa = true
                        cliente_servidor.validar_sesion(nombre,apellido,usuario,email,password,true,id)
                    }
                });
                if(ban == false){
                    console.log('usuario o contraseña incorrecta')
                }
            }).catch(err=>{console.log("Error en lista categoria")})
    })
    
}




export const validar_sesion = {
    'login': sesion_activa,
}