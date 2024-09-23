// Marcador de estrellas

const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('selected')); // Quita la selección previa
        star.classList.add('selected'); // Marca la estrella seleccionada
        const rating = star.getAttribute('data-value');
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= rating) {
                s.classList.add('selected'); // Marca todas las estrellas hasta la seleccionada
            }
        });
    });
});



// Tarjeta expandida primer tipo
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card'); // Selecciona todas las tarjetas de productos
    const expandedCard = document.getElementById('expandedCard-carousel1');
    const expandedImg = document.getElementById('expandedImg');
    const expandedTitle = document.getElementById('expandedTitle');
    const expandedDescription = document.getElementById('expandedDescription');
    const expandedPrice = document.getElementById('expandedPrice');
    const closeExpanded = document.querySelector('.close-expanded');

    productCards.forEach((card) => {
        card.addEventListener('click', function () {
            // Obtén la información directamente de los elementos dentro de la tarjeta
            const imgSrc = card.querySelector('img').src;
            const title = card.querySelector('.card-title').innerText;
            const description = card.querySelector('.card-text').innerText;
            const price = card.querySelector('.price').innerText;

            // Muestra la tarjeta expandida con la información seleccionada
            expandedCard.style.display = 'block';
            expandedImg.src = imgSrc;
            expandedTitle.innerText = title;
            expandedDescription.innerText = description;
            expandedPrice.innerText = price;

            // Oculta la tercera tarjeta mientras la expandida está visible
            const card3 = document.getElementById('card3-carousel1');
            card3.style.display = 'none';
        });
    });

    // Cerrar la tarjeta expandida
    closeExpanded.addEventListener('click', function () {
        expandedCard.style.display = 'none';
        const card3 = document.getElementById('card3-carousel1');
        card3.style.display = 'block';
    });
});


// Tarjeta expandida 2 tipo
// document.addEventListener('DOMContentLoaded', function() {
//     let productQuantity = 1;  // Cantidad inicial
//     let pricePerUnit = 0;     // Precio por unidad, se actualizará dinámicamente

//     // Elementos de la tarjeta expandida
//     const expandedCard = document.getElementById('expandedCard-carousel1');
//     const expandedImg = document.getElementById('expandedImg');
//     const expandedTitle = document.getElementById('expandedTitle');
//     const expandedDescription = document.getElementById('expandedDescription');
//     const expandedPriceUnit = document.getElementById('expandedPriceUnit');
//     const expandedTotalPrice = document.getElementById('expandedTotalPrice');
//     const productQuantityDisplay = document.getElementById('productQuantity');
//     const addToCart = document.getElementById('addToCart');

//     // Botones de incrementar y decrementar
//     const incrementButton = document.getElementById('increment');
//     const decrementButton = document.getElementById('decrement');

//     // Función para actualizar el precio total
//     function actualizarPrecioTotal() {
//         const totalPrice = (pricePerUnit * productQuantity).toFixed(2);
//         expandedTotalPrice.innerText = `$${totalPrice} Total`;
//     }

//     // Lógica para incrementar la cantidad
//     incrementButton.addEventListener('click', function() {
//         productQuantity++;
//         productQuantityDisplay.innerText = productQuantity;
//         actualizarPrecioTotal();
//     });

//     // Lógica para decrementar la cantidad
//     decrementButton.addEventListener('click', function() {
//         if (productQuantity > 1) {
//             productQuantity--;
//             productQuantityDisplay.innerText = productQuantity;
//             actualizarPrecioTotal();
//         }
//     });

//     // Mostrar la tarjeta expandida con la información del producto seleccionado
//     function mostrarProductoExpandido(producto) {
//         expandedCard.style.display = 'block';
//         expandedImg.src = producto.image;
//         expandedTitle.innerText = producto.title;
//         expandedDescription.innerText = producto.description;
//         pricePerUnit = parseFloat(producto.price);
//         expandedPriceUnit.innerText = `$${pricePerUnit.toFixed(2)} Unit`;
//         actualizarPrecioTotal();
//     }

//     // Ejemplo de un producto simulado
//     const productoEjemplo = {
//         image: 'img/img_8.jpg',
//         title: 'Crema hidratante',
//         description: 'Una crema hidratante para piel seca.',
//         price: '75.000'
//     };

//     // Simulación de hacer clic en una tarjeta para expandirla
//     mostrarProductoExpandido(productoEjemplo);

//     // Lógica del botón "Comprar"
//     addToCart.addEventListener('click', function() {
//         // Aquí podrías redirigir a una página de carrito o realizar alguna acción
//         window.location.href = 'checkout.html'; // Simula redirección a la página de compra
//     });
// });


// Creacion del modal para registro del usuario
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtén los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar tu lógica para verificar las credenciales (por ejemplo, usando fetch para comunicarte con un back-end)
    console.log(`Usuario: ${username}, Contraseña: ${password}`);
    
    // Simulación de inicio de sesión exitoso
    alert("Inicio de sesión exitoso");
    
    // Cerrar el modal después del inicio de sesión
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
    myModal.hide();
});