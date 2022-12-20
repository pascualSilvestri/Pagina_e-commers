import { cliente_servidor } from "../servicios/servidor_cliente.js";
import { componentes } from "../componentes/componentes.js";

cliente_servidor
.lista_categoria()
        .then((data)=>{
            data.forEach(({nombre,id})=>{
                componentes.crearCategoria(nombre,id)
            });
        }).catch((error) => alert('ocurrio un error'));

cliente_servidor
.lista_articulos()
        .then((data)=>{
            data.forEach(({media,nombre,precio,id,categoria}) => {
                componentes.crear_articulo(categoria,media,nombre,precio,id)
            });
        }).catch((error) => alert('ocurrio un error'));

        
