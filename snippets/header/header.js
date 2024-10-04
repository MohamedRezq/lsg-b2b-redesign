// Dummy values representing the logged-in user; this would normally come from your server
const LOGGED_USER = {
  id: 1,
  name: "Mohamed",
  cartItemsCount: 12,
  saveItemsCount: 1,
};

// Function to check if the user is logged in
function checkUserStatus() {
  if (LOGGED_USER) {
    console.log("found");
    // Update username and cart/save counts for desktop
    document.getElementById(
      "desktop-username"
    ).textContent = `Hello, ${LOGGED_USER.name}`;
    document.getElementById("header-cartCount").textContent =
      LOGGED_USER.cartItemsCount;
    document.getElementById("header-saveCount").textContent =
      LOGGED_USER.saveItemsCount;
    document.getElementById("desktop-logout").style.display = "inline";
    document.getElementById("desktop-create-account").style.display = "none";
    document.getElementById("desktop-login").style.display = "none";

    // Show icon badges
    document.getElementById("header-cartCount").style.display = "inline";
    document.getElementById("header-saveCount").style.display = "inline";
  } else {
    // If no user is logged in, hide username and show login options
    document.getElementById("desktop-username").textContent = "";
    document.getElementById("header-cartCount").style.display = "none";
    document.getElementById("header-saveCount").style.display = "none";
    document.getElementById("desktop-logout").style.display = "none";
    document.getElementById("desktop-create-account").style.display = "inline";
    document.getElementById("desktop-login").style.display = "inline";
  }
}

// Function to show mobile search bar overlay
function openMobileSearch() {
  document.getElementById("mobile-search-overlay").style.display = "flex";
}

// Function to close mobile search bar overlay
function closeMobileSearch() {
  document.getElementById("mobile-search-overlay").style.display = "none";
}

// Event listeners for search icon and close button
document
  .getElementById("mobile-search-button")
  .addEventListener("click", openMobileSearch);
document
  .getElementById("mobile-search-close")
  .addEventListener("click", closeMobileSearch);

// Call the function to apply the logic on page load
checkUserStatus();
