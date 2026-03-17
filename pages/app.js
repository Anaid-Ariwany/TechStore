const products = [

    {
        image: "../assets/images/laptop.webp",
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
        image: "../assets/images/iPad.webp",
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
        image: "../assets/images/blackHeadset.webp",
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
    },

    {
        image: "../assets/images/smartWatch.webp",
        productName: "Apple Watch Series 9",
        category: "Wearables",
        price: "$399",
        description: "Advanced smartwatch with fitness tracking and smart features.",
        spec1: "Display: Always-On Retina",
        spec2: "Chip: S9 SiP",
        spec3: "Battery: Up to 18 hours",
        spec4: "Sensors: Heart rate, blood oxygen",
        spec5: "Water Resistance: Yes",
        info1: "Fitness & health tracking",
        info2: "Syncs with iPhone",
        info3: "Notifications & apps on wrist"
    },

    {
        image: "../assets/images/keyboard.webp",
        productName: "Mechanical Keyboard",
        category: "Accessories",
        price: "$129",
        description: "Durable and responsive keyboard built for typing and gaming performance.",
        spec1: "Switch Type: Mechanical (Red / Blue / Brown)",
        spec2: "Backlight: RGB lighting",
        spec3: "Connection: Wired / Wireless",
        spec4: "Keycaps: Double-shot ABS",
        spec5: "Layout: Full-size / TKL",
        info1: "Customizable lighting effects",
        info2: "Fast response time",
        info3: "Great for coding & gaming"
    },

    {
        image: "../assets/images/samsungMonitor.webp",
        productName: "Samsung Galaxy",
        category: "Monitors",
        price: "$949",
        description: "Powerful Android tablet for entertainment, productivity, and multitasking.",
        spec1: "Display: 11\" / 12.4\" AMOLED",
        spec2: "Processor: Snapdragon chipset",
        spec3: "Storage: 128GB / 256GB",
        spec4: "Battery: 8000mAh+",
        spec5: "OS: Android",
        info1: "S Pen included",
        info2: "Multi-window support",
        info3: "Great for media consumption"
    },

    {
        image: "../assets/images/mouse.webp",
        productName: "Logitech MX Master",
        category: "Accessories",
        price: "$99",
        description: "High-performance wireless mouse designed for productivity and precision.",
        spec1: "DPI: Up to 8000 DPI",
        spec2: "Connectivity: Bluetooth / USB receiver",
        spec3: "Battery: Up to 70 days",
        spec4: "Buttons: Customizable",
        spec5: "Scroll: MagSpeed electromagnetic",
        info1: "Multi-device support",
        info2: "Ergonomic design",
        info3: "Perfect for designers & developers"
    },

    {
        image: "../assets/images/hdMonitor.webp",
        productName: "4K Ultra HD Monitor",
        category: "Monitors",
        price: "$799",
        description: "Ultra-high-definition display for sharp visuals and productivity.",
        spec1: "Resolution: 3840 × 2160 (4K)",
        spec2: "Size: 27\" / 32\"",
        spec3: "Refresh Rate: 60Hz / 144Hz",
        spec4: "Panel: IPS",
        spec5: "Ports: HDMI, DisplayPort",
        info1: "Ideal for design & editing",
        info2: "Wide color accuracy",
        info3: "Eye-care technology"
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
        <img fetchpriority="high" loading="eager" class="card-img-top" src="${product.image}" alt="${product.productName}">
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
            <h5 class="inter-heading">Additional Information:</h5>
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