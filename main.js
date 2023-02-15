const listArticle = [
    {
        id:1,
        nombre:'Vans Old',
        precio:'14.000',
        detalles:'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca.',
        imagen:'./assets/zapatilla1.jpg'
    },
    {
        id:2,
        nombre:'Nike Dunk',
        precio:'32.000',
        detalles:'Las zapatillas Nike Dunk Hi Retro forman parte de la línea "Nike Athletic Club" que conmemora a los clubes deportivos de las décadas de los 70 y 80.',
        imagen:'./assets/zapatilla2.jpg'
    },
    {
        id:3,
        nombre:'Adidas Forum',
        precio:'23.000',
        detalles:'Más que un calzado, es una declaración de estilo. Las adidas Forum llegaron a la escena en el 84 y ganaron seguidores en la cancha y en el mundo de la música.',
        imagen:'./assets/zapatilla3.jpg'
    }
]
const containerShoes = document.querySelector('.container-shoes')
let list = JSON.parse(localStorage.getItem("listArticle")) || []; 

  console.log(list)
const saveLocalStorage = () => {
    localStorage.setItem('list', JSON.stringify(list))
}
const render = (data )=>{
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
        <div class="card-button">
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                    d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z">
                </path>
                <path
                    d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z">
                </path>
                <path
                    d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z">
                </path>
            </svg>
        </div>
    </div>
</div>
`
}
const renderCards = shoes => containerShoes.innerHTML = shoes.map(render).join('');
window.addEventListener('DOMContentLoaded', renderCards(listArticle));



