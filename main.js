let listArticle = [
    {
        id:1,
        nombre:'Vans Old',
        precio:14.000,
        detalles:'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca.',
        imagen:'./assets/zapatilla1.jpg',
        cantidad:1
    },
    {
        id:2,
        nombre:'Nike Dunk',
        precio:32.000,
        detalles:'Las zapatillas Nike Dunk Hi Retro forman parte de la línea "Nike Athletic Club" que conmemora a los clubes deportivos de las décadas de los 70 y 80.',
        imagen:'./assets/zapatilla2.jpg',
        cantidad:1
    },
    {
        id:3,
        nombre:'Adidas Forum',
        precio:23.000,
        detalles:'Más que un calzado, es una declaración de estilo. Las adidas Forum llegaron a la escena en el 84 y ganaron seguidores en la cancha y en el mundo de la música.',
        imagen:'./assets/zapatilla3.jpg',
        cantidad:1
    }
]
const containerShoes = document.querySelector('.container-shoes')
const carritoContenedor = document.querySelector('.productContainer')
const vaciarCarrito = document.querySelector('.btn-borrar')
const contadorCarrito = document.getElementById('contador-productos')
const precioTotal = document.getElementById('total-number')
let carrito = []

document.addEventListener('DOMContentLoaded', () =>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

vaciarCarrito.addEventListener('click',() =>{
    carrito.length = 0
    actualizarCarrito()
})


const renderCardArticle = (lista,contenedor) =>{
    lista.forEach((producto)=>{
    const div = document.createElement('div')
    div.classList.add('Card')
    div.innerHTML = `
    <div class="card-img"><img src="${producto.imagen}" alt="" class="card-img"></div>
    <div class="card-info">
        <p class="text-title">${producto.nombre} </p>
        <p class="text-body">${producto.detalles}</p>
    </div>

        <span class="text-title">$${producto.precio}</span>
        <button class="card-button" id="cart-button ${producto.id}">Comprar</button>
`
    contenedor.appendChild(div)
    const boton = document.getElementById(`cart-button ${producto.id}`)
    boton.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)
    })
})}
const agregarAlCarrito = (prodId)=>{
    const existe = carrito.some(prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {


    const item = stock.find(prod=> prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)

}
actualizarCarrito()}
const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod)=> prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()

}

const actualizarCarrito = () =>{
    carritoContenedor.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('card-Product')
        div.innerHTML = `
        <div class="card-Product">
        <div class="card__content">
        <img src="${prod.imagen}" alt="" class="img-cart">
        <div class= "cart-product-text-container">
        <span class="cart-product-text">${prod.nombre}</span>
        <span class="cart-product-text">${prod.precio}$</span>
        </div>
        <div class= "cart-product-text-container">
        <p>Cantidad:<span class="cart-product-text" id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn-eliminar">Eliminar</button>
        </div></div>
        `
        carritoContenedor.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio* prod.cantidad, 0)
}
buttonVans.addEventListener('click',()=>{
    containerMarcas2.classList.toggle('hidden')
    renderCardArticle(shoesList,containerMarcas)
})
renderCardArticle(stock,containerShoes)


