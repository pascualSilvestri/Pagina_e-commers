const lista_articulos = ()=>
    fetch('http://localhost:3000/articulo').then((respuesta) => respuesta.json());


const lista_categoria = () =>
    fetch('http://localhost:3000/categorias').then((respuesta) => respuesta.json());

const crear_articulo = (nombre,precio,categoria,media) =>{
    return fetch('http://localhost:3000/articulo',
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre,precio,categoria,media,id: uuid.v4()})
    }).then((respuesta) => respuesta.json());
}

export const cliente_servidor = {
    lista_articulos,
    lista_categoria,
    crear_articulo,
}