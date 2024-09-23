// Ejemplo con JSON contiene los productos seleccionados de la vista anterior
const selectedProducts = [
    {
        id: 1,
        name: "Producto 1 Generado por Json",
        description: "Una descripción del producto",
        price: 75000,
        quantity: 2,
        imageUrl: "img/img_11.jpg.jpg"
    },
    {
        id: 2,
        name: "Producto 2 Generado por Json",
        description: "Otra descripción del producto",
        price: 75000,
        quantity: 1,
        imageUrl: "img/12.jpg"
    }
];

// Función para renderizar los productos
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    let total = 0;
    selectedProducts.forEach(product => {
        total += product.price * product.quantity;

        const productHtml = `
            <div class="cart-item">
                <img src="${product.imageUrl}" alt="${product.name}">
                <div class="cart-item-details">
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                    <a href="#">Eliminar</a> | <a href="#">Guardar para más tarde</a>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button>-</button>
                        <span>${product.quantity}</span>
                        <button>+</button>
                    </div>
                    <div class="total-price">$${(product.price * product.quantity).toLocaleString()}</div>
                </div>
            </div>
        `;
        cartItemsContainer.insertAdjacentHTML('beforeend', productHtml);
    });

    // Actualizar el total
    document.getElementById('total-price').innerText = `$${total.toLocaleString()}`;
}

// Llamar a la función para renderizar los productos
renderCartItems();
