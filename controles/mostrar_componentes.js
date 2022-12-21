import { cliente_servidor } from "../servicios/servidor_cliente.js";
import { componentes } from "../componentes/componentes.js";

cliente_servidor
.lista_categoria()
        .then((data)=>{
            let cont = 0;
            data.forEach(({nombre,id})=>{
                cont++
                    if(cont != 6){
                        componentes.mostrar_categoria(nombre,id)
                    }else{
                        return
                    }
            });
        })

cliente_servidor
.lista_articulos()
        .then((data)=>{
            let cont = 0
            data.forEach(({media,nombre,precio,id,categoria}) => {
                    cont++
                    if(cont != 6){
                        componentes.mostrar_articulo(categoria,media,nombre,precio,id)
                    }else{
                        return
                    }            
            });
        })

cliente_servidor
.lista_categoria()
    .then((data)=>{
    data.forEach(({nombre,id})=>{
        componentes.selec_categoria(nombre,id)
    })
})
        
