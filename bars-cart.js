const barsMenu = document.querySelector('.open')
const nav = document.querySelector('nav')
const cartContainer = document.getElementById('cart-list')
const cartOpen = document.querySelector('.open-cart')
const shoesContainer = document.querySelector('.container-filter')
const vans = document.querySelector('p')
const buttonVans = document.getElementById('buttonVans')
const buttonNike = document.getElementById('buttonNike')
const buttonAdidas = document.getElementById('buttonAdidas')
const containerMarcas = document.querySelector('.container-filter-shoes')
const containerMarcas2 = document.querySelector('.card-marca')
const cartButton = document.querySelector('.card-button')
const productContainer = document.querySelector('.productContainer')

barsMenu.addEventListener('click',() =>{
    nav.classList.toggle('nav-menu')
})
cartOpen.addEventListener('click',() =>{
    cartContainer.classList.toggle('cart-container')
})

let shoesList =[
    {
        id:1,
        nombre:'VANS SKATE SK8 ',
        marca:'vans',
        precio:33.500,
        detalles:'Otro modelo del pack Vans de Elijah Berle, la zapatilla Sk8-Hi Decon se inspira en el amor de Elijah por el arte del tatuaje, la cultura de las motos y el surf retro',
        imagen:'./assets/zapatilla1.jpg',
        cantidad: 1
    },
    {
        id:2,
        nombre:'VANS OLD SKOOL BMX ',
        marca:'vans',
        precio:52.000,
        detalles:'Las Old Skool firmadas por Courage Adam presentan su obra de arte personalizada en toda la superficie, en los laterales y bajo la suela transparente modelo del pack Vans de Elijah Berle.',
        imagen:'./assets/vans2.jpg',
        cantidad: 1   
    },
    {
        id:3,
        nombre:'VANS SKATE SK8-HI',
        marca:'vans',
        precio:13.000,
        detalles:'La legendaria Sk8-Hi ha sido completamente rediseñada pensando en los patinadores modelo del pack Vans de Elijah Berle.',
        imagen:'./assets/vans3.jpg',
        cantidad: 1
    }
]
let shoesNike =[
    {
        id:1,
        nombre:'Zapatillas Nike Court Legacy',
        marca:'vans',
        precio:13.400,
        detalles:'Un clásico modelo inspirado en el tenis y en las canchas llega para vos que tenés un look urbano y casual',
        imagen:'./assets/nike1.jpg',
        cantidad: 1
    },
    {
        id:2,
        nombre:'Nike Tanju',
        marca:'vans',
        precio:62.000,
        detalles:'Para los runners más exigentes llegaron las Zapatillas Nike Tanjun. Su capellada presenta un diseño liviano; es de malla y sus agujetas de poliéster, con logos únicos y discretos en las mismas.',
        imagen:'./assets/zapatilla2.jpg',
        cantidad: 1   
    },
    {
        id:3,
        nombre:'Zapatillas Nike Zoom Winflo 8',
        marca:'vans',
        precio:43.000,
        detalles:'Para los amantes del running y la velocidad, las zapatillas Nike Zoom Winflo 8 son perfectas',
        imagen:'./assets/nike3.jpg',
        cantidad: 1
    }
]
let shoesAdidas =[
    {
        id:1,
        nombre:'ZAPATILLAS FORUM LOW CL',
        marca:'vans',
        precio:37.500,
        detalles:'Estas zapatillas adidas Forum rescatan el estilo más icónico de las canchas de baloncesto con un diseño inspirado en esos tesoros vintage.',
        imagen:'./assets/adidas1.jpg',
        cantidad: 1
    },
    {
        id:2,
        nombre:'ZAPATILLAS ZX 420',
        marca:'vans',
        precio:62.000,
        detalles:'Todo apunta hacia el futuro, pero el pasado sigue siendo el motor que nos ayuda a avanzar',
        imagen:'./assets/adidas2.jpg',
        cantidad: 1   
    },
    {
        id:3,
        nombre:'Adidas Forum',
        precio:23.000,
        detalles:'Más que un calzado, es una declaración de estilo. Las adidas Forum llegaron a la escena en el 84 y ganaron seguidores en la cancha y en el mundo de la música.',
        imagen:'./assets/zapatilla3.jpg',
        cantidad: 1
    }
]
const renderVans = (data )=>{
    const {id,nombre,detalles,precio,imagen} = data
    return `
    <div class="card" data-id="${id}">
    <div class="card-img"><img src="${imagen}" alt="" class="card-img"></div>
    <div class="card-info">
        <p class="text-title">${nombre} </p>
        <p class="text-body">${detalles}</p>
    </div>
    <div class="card-footer">
        <span class="text-title">$${precio}</span>
        <button class="card-button" id="${id}">Comprar</button>
    </div>
  </div>
`
}
let vansList = JSON.parse(localStorage.getItem("shoesList")) || []; 
const saveLocalStorageVans = () => {
    localStorage.setItem('vansList', JSON.stringify(vansList))}
const rendersVans = shoes => containerMarcas.innerHTML = shoes.map(renderVans).join('');
buttonVans.addEventListener('click',()=>{
    containerMarcas2.classList.toggle('hidden')
    rendersVans(shoesList)
})
buttonNike.addEventListener('click',()=>{
    containerMarcas2.classList.toggle('hidden')
    rendersVans(shoesNike)
})
buttonAdidas.addEventListener('click',()=>{
    containerMarcas2.classList.toggle('hidden')
    rendersVans(shoesAdidas)
})
let stock = [
    {
        id:1,
        nombre:'VANS SKATE SK8 ',
        marca:'vans',
        precio:33.500,
        detalles:'Otro modelo del pack Vans de Elijah Berle, la zapatilla Sk8-Hi Decon se inspira en el amor de Elijah por el arte del tatuaje, la cultura de las motos y el surf retro',
        imagen:'./assets/zapatilla1.jpg',
        cantidad: 1
    },
    {
        id:2,
        nombre:'VANS OLD SKOOL BMX ',
        marca:'vans',
        precio:52.000,
        detalles:'Las Old Skool firmadas por Courage Adam presentan su obra de arte personalizada en toda la superficie, en los laterales y bajo la suela transparente modelo del pack Vans de Elijah Berle.',
        imagen:'./assets/vans2.jpg',
        cantidad: 1   
    },
    {
        id:3,
        nombre:'VANS SKATE SK8-HI',
        marca:'vans',
        precio:13.000,
        detalles:'La legendaria Sk8-Hi ha sido completamente rediseñada pensando en los patinadores modelo del pack Vans de Elijah Berle.',
        imagen:'./assets/vans3.jpg',
        cantidad: 1
    },
    {
        id:4,
        nombre:'Zapatillas Nike Court Legacy',
        marca:'vans',
        precio:13.400,
        detalles:'Un clásico modelo inspirado en el tenis y en las canchas llega para vos que tenés un look urbano y casual',
        imagen:'./assets/nike1.jpg',
        cantidad: 1
    },
    {
        id:5,
        nombre:'Nike Tanju',
        marca:'vans',
        precio:62.000,
        detalles:'Para los runners más exigentes llegaron las Zapatillas Nike Tanjun. Su capellada presenta un diseño liviano; es de malla y sus agujetas de poliéster, con logos únicos y discretos en las mismas.',
        imagen:'./assets/zapatilla2.jpg',
        cantidad: 1   
    },
    {
        id:6,
        nombre:'Zapatillas Nike Zoom Winflo 8',
        marca:'vans',
        precio:43.000,
        detalles:'Para los amantes del running y la velocidad, las zapatillas Nike Zoom Winflo 8 son perfectas',
        imagen:'./assets/nike3.jpg',
        cantidad: 1
    },
    {
        id:7,
        nombre:'ZAPATILLAS FORUM LOW CL',
        marca:'vans',
        precio:37.500,
        detalles:'Estas zapatillas adidas Forum rescatan el estilo más icónico de las canchas de baloncesto con un diseño inspirado en esos tesoros vintage.',
        imagen:'./assets/adidas1.jpg',
        cantidad: 1
    },
    {
        id:8,
        nombre:'ZAPATILLAS ZX 420',
        marca:'vans',
        precio:62.000,
        detalles:'Todo apunta hacia el futuro, pero el pasado sigue siendo el motor que nos ayuda a avanzar',
        imagen:'./assets/adidas2.jpg',
        cantidad: 1   
    },
    {
        id:9,
        nombre:'Adidas Forum',
        precio:23.000,
        detalles:'Más que un calzado, es una declaración de estilo. Las adidas Forum llegaron a la escena en el 84 y ganaron seguidores en la cancha y en el mundo de la música.',
        imagen:'./assets/zapatilla3.jpg',
        cantidad: 1
    }
]
let cart = []
console.log(cart)
// Function to add a product to cart
function addToCart(productId) {
    const product = stock.find(function(product) {
        return product.id == productId;
    });
    if (product) {
        cart.push(product);
    }
}

// Function to remove a product from cart
function removeFromCart(productId) {
    const productIndex = cart.findIndex(function(product) {
        return product.id == productId;
    });
    if (productIndex > -1) {
        cart.splice(productIndex, 1);
    }
}

// Function to calculate the total cost of cart
function getCartTotal() {
    return cart.reduce(function(total, product) {
        return total + product.precio * product.cantidad;
    }, 0);
}

// Add products to cart
addToCart();
addToCart();

// Calculate the total cost of cart
console.log(getCartTotal()); // 14.98

// Remove a product from cart
removeFromCart(1);

// Calculate the total cost of cart again
console.log(getCartTotal()); // 4.99

cartButton.addEventListener('click',addToCart)
const renderCart = () => {
    if (!cart.length) {
      cartContainer.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
      return;
    }
    cartContainer.innerHTML = cart.map(renderCartProduct).join('');
  };
