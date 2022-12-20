import { cliente_servidor } from "../servicios/servidor_cliente.js"

const crearCategoria = (categoria,id=null) =>{
    const main_home = document.querySelector('[data-main]')
    const section = document.createElement('section')
    section.classList.add('articulos_container', categoria)
    section.innerHTML = `
    <div class="categoria">
        <h2>${categoria}</h2>
        <a href="#">Ver todo</a>
    </div>
    <div class="card_container">
    </div>
`
    return main_home.appendChild(section)
}

const crear_articulo = (categoria,media,nombre,precio,id=null)=>{
    const section_categoria = document.querySelector('.'+categoria).querySelector('.card_container')
    const card = document.createElement('div')
    card.classList.add('articulo_card')
    card.innerHTML =  `
        <div class="img_articulo">
            <img src=${media} alt="imagen articulo" />
        </div>
        <div class="detalle_articulo">
            <p class="nombre_articulo">${nombre}</p>
            <p class="precio_articulo">$ ${precio}</p>
            <a href="" class="ver_articulo">Ver Producto</a>
        </div>
    `
    return section_categoria.appendChild(card)
}

// crearCategoria('Deporte')
// crear_articulo('Deporte','../media/unsplash_1VV1MRafd7A.png','Pelota','2000.00')



export const componentes={
    crearCategoria,
    crear_articulo,
};