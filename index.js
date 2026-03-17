const products = [

    {
        image: "assets/images/laptop.webp",
        productName: "MacBook Pro",
        category: "Laptops",
        price: "$1999",
        description: "Powerful laptop designed for professionals, with exceptional performance and battery life.",
        spec1: "Display: 14\" / 16\" Liquid Retina XDR",
        spec2: "Chip: Apple M3 Pro / M3 Max",
        spec3: "RAM: 16GB / 32GB",
        spec4: "Storage: 512GB – 2TB SSD",
        spec5: "Battery: Up to 18 hours",
        info1: "Ideal for developers, designers, video editors",
        info2: "macOS ecosystem integration",
        info3: "Thunderbolt / USB-C ports"
    },

    {
        image: "assets/images/iPad.webp",
        productName: "iPad Air",
        category: "Tablets",
        price: "$599",
        description: "Lightweight and versatile tablet perfect for work, creativity, and entertainment.",
        spec1: "Display: 10.9\" Liquid Retina",
        spec2: "Chip: Apple M1",
        spec3: "Storage: 64GB / 256GB",
        spec4: "Camera: 12MP front & back",
        spec5: "Battery: Up to 10 hours",
        info1: "Supports Apple Pencil (2nd gen)",
        info2: "Works with Magic Keyboard",
        info3: "Great for students and creatives"
    },

    {
        image: "assets/images/blackHeadset.webp",
        productName: "Sony WH-1000XM5",
        category: "Headphones",
        price: "$399",
        description: "Premium wireless headphones with industry-leading noise cancellation.",
        spec1: "Noise Cancellation: Active (ANC)",
        spec2: "Battery: Up to 30 hours",
        spec3: "Connectivity: Bluetooth 5.2",
        spec4: "Charging: USB-C fast charge",
        spec5: "Weight: Lightweight design",
        info1: "Crystal-clear call quality",
        info2: "Touch controls",
        info3: "Perfect for travel and focus"
    }
]

/* select the container */
const productContainer = document.querySelector('.cardsDiv');

/* create product cards */
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-imageDiv">
        <img loading="lazy" class="card-img-top" src="${product.image}" alt="${product.productName}">
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

/* loop through the first 3 products and add them to the page */
products.slice(0, 3).forEach((product) => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
});



/* select the button */
const viewDetailsButtons = document.querySelectorAll('.whiteButton');

/* display the modal when a button is clicked */
const myModal = document.querySelector('.modal');

/* display the modal when a button is clicked. The modal displays product image, name, and details */
viewDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const details = products[index];
        // Update modal content with product details
        document.querySelector('.modal-title').textContent = details.productName;
        document.querySelector('.modal-body').innerHTML = `
        <div class="card-imageDiv">
            <img loading="lazy" class="modal-img" src="${details.image}" alt="${details.productName}">
        </div>    
            <h5 class="inter-heading">Description</h5>
            <p>${details.description}</p>
            <h5 class="inter-heading">Specifications:</h5>
            <ul>
                <li>${details.spec1}</li>
                <li>${details.spec2}</li>
                <li>${details.spec3}</li>
                <li>${details.spec4}</li>
                <li>${details.spec5}</li>
            </ul>
            <h5 class="inter-heading">Additional Info:</h5>
            <ul>
                <li>${details.info1}</li>
                <li>${details.info2}</li>
                <li>${details.info3}</li>
            </ul>
        `;
        // Show the modal        
        new bootstrap.Modal(myModal).show();
    });
});


/* 
viewDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const details = products[index];
        // Update modal content with product details
        document.querySelector('.modal-title').textContent = details.description;
        document.querySelector('.modal-body').innerHTML = `
            <p>${details.spec1}</p>
            <p>${details.spec2}</p>
            <p>${details.spec3}</p>
            <p>${details.spec4}</p>
            <p>${details.spec5}</p>
            <p>${details.info1}</p>
            <p>${details.info2}</p>
            <p>${details.info3}</p>
        `;
        // Show the modal
        new bootstrap.Modal(myModal).show();
    });
});
*/