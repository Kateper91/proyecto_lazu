const Clickbutton = document.querySelectorAll('.button')


Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e) {
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;

  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }
  addItemCarrito(newItem)
}

function addItemCarrito(newItem) {
  const alert = document.querySelector('.remove')
    
  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')
  let arrayCarrito = []
  let existeCarrito = localStorage.getItem('carrito')
  if (existeCarrito) {
    let carritoJson  = JSON.parse(existeCarrito)
    for (let i = 0; i < carritoJson.length; i++) {
      const element = carritoJson[i];
      arrayCarrito.push(element)
    }
    arrayCarrito.push(newItem)
    localStorage.removeItem('carrito')
    localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
      }else {
        arrayCarrito.push(newItem)
    localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
  }


}