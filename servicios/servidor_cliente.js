const lista_articulos = ()=>
    fetch('http://localhost:3000/articulo').then((respuesta) => respuesta.json());


const lista_categoria = () =>
    fetch('http://localhost:3000/categorias').then((respuesta) => respuesta.json());



export const cliente_servidor = {
    lista_articulos,
    lista_categoria,
}