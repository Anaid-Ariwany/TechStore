const products = [

    {
        image: "../assets/images/laptop.webp",
        productName: "MacBook Pro",
        category: "Laptops",
        price: "$1999"
    },

    {
        image: "../assets/images/iPad.webp",
        productName: "iPad Air",
        category: "Tablets",
        price: "$599"
    },

    {
        image: "../assets/images/blackHeadset.webp",
        productName: "Sony WH-1000XM5",
        category: "Headphones",
        price: "$399"
    },

    {
        image: "../assets/images/smartWatch.webp",
        productName: "Apple Watch Series 9",
        category: "Wearables",
        price: "$399"
    },

    {
        image: "../assets/images/keyboard.webp",
        productName: "Mechanical Keyboard",
        category: "Accessories",
        price: "$129"
    },

    {
        image: "../assets/images/samsungMonitor.webp",
        productName: "Samsung Galaxy",
        category: "Monitors",
        price: "$949"
    },

    {
        image: "../assets/images/mouse.webp",
        productName: "Logitech MX Master",
        category: "Accessories",
        price: "$99"
    },

    {
        image: "../assets/images/hdMonitor.webp",
        productName: "4K Ultra HD Monitor",
        category: "Monitors",
        price: "$799"
    }
]

/* select the container */
const productContainer = document.querySelector('.cardDiv');

/* create product cards */
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-imageDiv">
        <img class="card-img-top" src="${product.image}" alt="${product.productName}">
        </div>
        <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <figcaption class="blockquote-footer"><cite title="Source Title">${product.category}</cite></figcaption>
        </div>
        <div class="card-footer">
            <h5>${product.price}</h5>
            <button class="whiteButton">View Details</button>
        </div>
    `;
    return card;
}

/* add cards to the page */
products.forEach((product) => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
});