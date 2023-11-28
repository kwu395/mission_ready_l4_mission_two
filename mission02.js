console.log("Connected!🔌")

// ========== IMAGE SLIDESHOW ========== //

const slideShow = document.getElementById("slideshowImages"); // Image element
const slideshowImages = ["slideshow1", "slideshow2", "slideshow3", "slideshow5"]; // ARRAY OF IMAGES
let slideshowIndex = 0;

// Right arrow function
function nextImage() {
    slideshowIndex == slideshowImages.length - 1 // Check if index is largest
    ? slideshowIndex = 0 
    : slideshowIndex++; // Go next index of array

    slideShow.src=`images/${slideshowImages[slideshowIndex]}.png`; // Change image
}

// Left arrow function
function prevImage() {
    slideshowIndex == 0 // Check if index is smallest (0)
    ? slideshowIndex = slideshowImages.length - 1  
    : slideshowIndex--; //  Go prev index of array

    slideShow.src=`images/${slideshowImages[slideshowIndex]}.png`; // Change image
}

// ========== SHOPPING CART ========== //

const addToCartEl = document.getElementById("addToCart"); // Window
const addToCartImg = document.getElementById("ATCImg"); // Product Image
const addToCartItem = document.getElementById("ATCItemName"); // Product Name
const addToCartPrice = document.getElementById("ATCPrice"); // Product Price
const itemQuantity = document.getElementById('quantity'); // Item Quantity
const shoppingCartNav = document.getElementById('shoppingCart') // Shopping cart nav bar
const shoppingCartX = document.getElementById('shoppingCartX') // X Button
const shoppingCartNumEl = document.getElementById("shoppingCartNum"); // Shopping cart display number (in nav)
const blurOverlay = document.getElementById('blurOverlay'); // Blur overlay
let shoppingCartPrice = 0;
let shoppingCartQuantity = 0;
let selectedPrice = 0;

function addToCart(image, item, price) {
    addToCartEl.style.display = "block"; // Display window
    blurOverlay.style.display = "block";
    addToCartEl.style.filter = "none";
    addToCartImg.src = `images/item${image}.png`; // Add Image
    addToCartItem.textContent = item; // Display product name
    addToCartPrice.textContent = `$${price}`; // Display product price
    selectedPrice = price; 
}

function goBack() {
    addToCartEl.style.display = "none"; // Go back to normal layout
    blurOverlay.style.display = "none";
}

function addOneToCart(price) {
    if (itemQuantity.value > 0 ) {
        shoppingCartNav.style.width = "350px"; 
        shoppingCartX.style.display = "inline"; // Add X button to shopping cart nav
        shoppingCartPrice += (selectedPrice * Number(itemQuantity.value)); // Calculate total shopping cart price
        shoppingCartQuantity += Number(itemQuantity.value); // Calculate total shopping cart item quantity
        shoppingCartNumEl.textContent = `${shoppingCartQuantity} items ($${shoppingCartPrice.toFixed(2)})`; // Display shopping cart nav text
        goBack();
    }
}

function clearShoppingCart() {
  shoppingCartPrice = 0; // Reset shopping cart nav text
  shoppingCartQuantity = 0;
  shoppingCartNumEl.textContent = `(0)`;
  shoppingCartNav.style.width = "200px"; 
}

// ========== LIGHT AND DARK MODE TOGGLE ========== ///

// Elements to change
const darkIcon = document.getElementById("dark"); // dark icon
const lightIcon = document.getElementById("light"); // light icon
const mostPopular = document.getElementById("mostpopular"); // most-popular background
const computers = document.getElementById("computers"); // computers background
const stressRelief = document.getElementById("stress"); // stress-relief background
const bottom = document.getElementById("bottom"); // help form background
const item = document.querySelectorAll(".item"); // item images
const formLabel = document.querySelectorAll(".formLabel"); // label
const images = document.querySelectorAll(".images"); // image background
const itemName = document.querySelectorAll(".item>p"); // item name
const header = document.querySelector("header"); // header background
const headerEl = document.querySelectorAll("header>*"); // header text
const nav = document.querySelector("nav"); // nav bar
const shopIcon = document.querySelectorAll(".fa-cart-plus"); // shopping cart icons

let lightMode = 1; // 0 when dark mode

function toggleDisplayMode() {
    // TOGGLE DARK MODE
    if (lightMode) { 
      // Header background and text
      header.style.backgroundColor = "black"; 
      headerEl[0].style.color = "ghostwhite"; 
      headerEl[1].style.color = "ghostwhite";

      // Nav bar border
      nav.style.border = "2px solid white";

      // Dark and Light Icons
      darkIcon.style.color = "black"; 
      lightIcon.style.color = "rgba(0, 0, 0, 0.25)";

      // Main section backgrounds 
      mostPopular.style.backgroundColor = "black"; 
      computers.style.backgroundColor = "black";
      stressRelief.style.backgroundColor = "black";
      bottom.style.backgroundColor = "black";

      // querySelectorAll elements
      for (let i = 0; i < shopIcon.length; i++) { // Add to cart icons
          shopIcon[i].style.color = "white";
        }
      for (let i = 0; i < item.length; i++) { // Item borders and background
          item[i].style.backgroundColor = "black";
          item[i].style.border = "4px outset ghostwhite";
        }
      for (let i = 0; i < itemName.length; i++) { // Item text color
          itemName[i].style.color = "white";
        }
      for (let i = 0; i < formLabel.length; i++) { // Form label text colors
          formLabel[i].style.color = "white";
        }
      for (let i = 0; i < images.length; i++) { // Item image background color
          images[i].style.backgroundColor = "black";
        }
      
      // Add to cart window
      addToCartEl.style.border = "6px outset ghostwhite";
      addToCartEl.style.backgroundColor = "black";
      addToCartEl.style.color = "white";
      addToCartImg.style.backgroundColor = "black";
      itemQuantity.style.border = "3px outset ghostwhite";

      lightMode = !lightMode;

    // TOGGLE LIGHT MODE
    } else {
        // Header background and text
        header.style.backgroundColor = "ghostwhite";
        headerEl[0].style.color = "black";
        headerEl[1].style.color = "black";

        // Nav bar border
        nav.style.border = "3px solid black";

        // Dark and Light Icons
        darkIcon.style.color = "rgba(0, 0, 0, 0.25)"; 
        lightIcon.style.color = "black";

        // Main section backgrounds 
        mostPopular.style.backgroundColor = "ghostwhite";
        computers.style.backgroundColor = "ghostwhite";
        stressRelief.style.backgroundColor = "ghostwhite";
        bottom.style.backgroundColor = "ghostwhite";

        // querySelectorAll elements
        for (let i = 0; i < shopIcon.length; i++) { 
            shopIcon[i].style.color = "darkblue";
          }
        for (let i = 0; i < item.length; i++) {
            item[i].style.backgroundColor = "ghostwhite";
            item[i].style.border = "4px inset darkblue";
          }
        for (let i = 0; i < itemName.length; i++) {
            itemName[i].style.color = "black";
          }
        for (let i = 0; i < formLabel.length; i++) {
            formLabel[i].style.color = "black";
          }
        for (let i = 0; i < images.length; i++) {
            images[i].style.backgroundColor = "ghostwhite";
          }

        // Add to cart window
        addToCartEl.style.border = "6px inset darkblue";
        addToCartEl.style.backgroundColor = "ghostwhite";
        addToCartEl.style.color = "black";
        addToCartImg.style.backgroundColor = "ghostwhite";
        itemQuantity.style.border = "3px inset darkblue";

        lightMode = !lightMode;

    }
}