// Function to fetch product data from the JSON file
async function fetchProducts() {
  try {
    const response = await fetch("/assets/products.json");
    if (!response.ok) {
      throw new Error("Failed to load products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }
}

// Function to render the product table for desktop view
function renderProductTable(products) {
  const tableBody = document.getElementById("products-table-body");
  tableBody.innerHTML = ""; // Clear any existing content

  products.forEach((product) => {
    const row = `
      <tr>
        <td><img src="${product.image}" alt="${
      product.name
    }" class="h-16 w-16 rounded-lg"></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.scale}</td>
        <td>$${product.originalPrice}</td>
        <td>$${product.srp}</td>
        <td>${product.inStock ? "Yes" : "No"}</td>
        <td><button class="bg-yellow-500 text-white px-2 py-1 rounded">Buy</button></td>
      </tr>`;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

// Function to render the product cards for mobile view
function renderProductCards(products) {
  const cardContainer = document.getElementById("products-table-mobile-cards");
  cardContainer.innerHTML = ""; // Clear any existing content

  products.forEach((product) => {
    const card = `
      <div class="products-table-mobile-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Scale: ${product.scale}</p>
        <p>Original Price: $${product.originalPrice}</p>
        <p>SRP: $${product.srp}</p>
        <p>In Stock: ${product.inStock ? "Yes" : "No"}</p>
        <button class="bg-yellow-500 text-white px-2 py-1 rounded">Buy</button>
      </div>`;
    cardContainer.insertAdjacentHTML("beforeend", card);
  });
}

// Fetch products and render both table and mobile cards
async function initializeProductsTable() {
  const products = await fetchProducts(); // Fetch the products dynamically
  renderProductTable(products); // Render the table for desktop
  renderProductCards(products); // Render the cards for mobile
}

// Initialize page when DOM is loaded
initializeProductsTable();
