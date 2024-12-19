const list = document.querySelectorAll(".list");
list.forEach((e) => {
  e.addEventListener("click", () => {
    list.forEach((e) => e.classList.remove("after"));

    e.classList.add("after");
  });
});

const icons = document.querySelectorAll(".icons");
icons.forEach((e) => {
  e.addEventListener("click", () => {
    icons.forEach((e) => e.classList.remove("i"));

    e.classList.add("i");
  });
});

const mobileMenu = document.querySelector(".mobileMenu");
function showMenu() {
  mobileMenu.style.display === ""
    ? (mobileMenu.style.display = "block")
    : (mobileMenu.style.display = "");
}

// showind cart desktop
const cartMenuDestop = document.querySelector(".cart-menu");
function showCart() {
  cartMenuDestop.style.display === ""
    ? (cartMenuDestop.style.display = "flex")
    : (cartMenuDestop.style.display = "");
  aboutDektop.style.display = "";
  contactDektop.style.display = "";
}
// showing cart mobile
const cartMenuMobile = document.querySelector(".cart-menu");
function showCartMobile() {
  if (cartMenuMobile.style.display === "") {
    cartMenuMobile.style.display = "flex";
    aboutMobile.style.display = "";
    contactMobile.style.display = "";
  }
}

// showing about mobile
const aboutMobile = document.querySelector(".about");
function showAbout() {
  if (aboutMobile.style.display === "") {
    aboutMobile.style.display = "flex";
    cartMenuMobile.style.display = "";
    contactMobile.style.display = "";
  }
}

// showing contact mobile
const contactMobile = document.querySelector(".contact");
function showContactMobile() {
  if (contactMobile.style.display === "") {
    contactMobile.style.display = "block";
    cartMenuMobile.style.display = "";
    aboutMobile.style.display = "";
  }
}

// showing contact desktop
const contactDektop = document.querySelector(".contact");
function showContactDesktop() {
  if (contactDektop.style.display === "") {
    contactDektop.style.display = "flex";
    cartMenuDestop.style.display = "";
    aboutDektop.style.display = "";
    cartMenuDestop.style.display = "";
  }
}

// showing about desktop
const aboutDektop = document.querySelector(".about");
function showAboutDesktop() {
  if (aboutDektop.style.display === "") {
    aboutDektop.style.display = "flex";
    cartMenuDestop.style.display = "";
    contactDektop.style.display = "";
  }
}

// dealing with home mobile
function homeMobile() {
  cartMenuMobile.style.display = "";
  aboutMobile.style.display = "";
  contactMobile.style.display = "";
}

// dealing with home desktop
function homeDesktop() {
  aboutDektop.style.display = "";
  cartMenuDestop.style.display = "";
  contactDektop.style.display = "";
}

// moveToShopMobile
function moveToShopMobile() {
  cartMenuMobile.style.display = "";
  aboutMobile.style.display = "";
  contactMobile.style.display = "";
  const targetElement = document.getElementById("products-section");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// moveToShopDesktop
function moveToShopDesktop() {
  aboutDektop.style.display = "";
  cartMenuDestop.style.display = "";
  contactDektop.style.display = "";
  const targetElement = document.querySelector("#products-section");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
// moveToReview
function moveToReview() {
  aboutDektop.style.display = "";
  cartMenuDestop.style.display = "";
  contactDektop.style.display = "";
  const targetElement = document.getElementById("reviewPage");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// home
function homeDesktop() {
  aboutDektop.style.display = "";
  cartMenuDestop.style.display = "";
  contactDektop.style.display = "";
  const targetElement = document.getElementById("navbar");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

const checkOut = document.querySelector(".checkOut")
function showCheckOut(){
  checkOut.style.display === "" ? checkOut.style.display = "flex" : checkOut.style.display = ""
}
function closeCheckOut(){
  checkOut.style.display === "flex" ? checkOut.style.display = "" : checkOut.style.display = "flex"
}

// home
function homeMobile() {
  aboutDektop.style.display = "";
  cartMenuDestop.style.display = "";
  contactDektop.style.display = "";
  const targetElement = document.getElementById("navbar");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}

// login toggle
const loginMenu = document.querySelector(".lg");
const signupMenu = document.querySelector(".sg");
function showLogin() {
  loginMenu.style.display = "flex";
}
function loginClose() {
  loginMenu.style.display = "";
}

function signupClose() {
  signupMenu.classList.remove("flex");
  signupMenu.classList.add("hidden");
  loginMenu.style.display = "";
}

function showSignup() {
  loginMenu.classList.remove("flex");
  loginMenu.classList.add("hidden");
  signupMenu.classList.remove("hidden");
  signupMenu.classList.add("flex");
}

function showLogin() {
  loginMenu.classList.remove("hidden");
  loginMenu.classList.add("flex");
  signupMenu.classList.remove("flex");
  signupMenu.classList.add("hidden");
}

history.pushState(null, null, location.href); // Add a history entry

window.addEventListener("popstate", (e) => {
  e.defaultPrevented();
  const box = document.querySelector(".mobileMenu");
  if (box.style.display !== "none") {
    box.style.display = "none"; // Hide the element
    history.pushState(null, null, location.href); // Prevent further navigation
  } else {
    history.back(); // Go back to the previous page if already hidden
  }
});

history.pushState(null, null, location.href); // Add a history entry

window.addEventListener("popstate", (e) => {
  e.defaultPrevented();
  const box = document.querySelector(".downMenu");
  if (box.style.display !== "none") {
    box.style.display = "none"; // Hide the element
    history.pushState(null, null, location.href); // Prevent further navigation
  } else {
    history.back(); // Go back to the previous page if already hidden
  }
});

// working on review
const reviewContainer = document.querySelector(".review-container");
const reviewBtn = document.getElementById("review-button");
reviewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const reviewItem = `
    <div class="bg-black cursor-pointer hover:scale-110 duration-300 p-6 rounded-lg shadow-lg">
        <div class="flex items-center mb-4">
            <div>
                <h4 class="text-lg font-semibold text-yellow-400">${
                  document.getElementById("name").value
                }</h4>
                <p class="text-sm text-yellow-400">${
                  document.getElementById("review-title").value
                }</p>
            </div>
        </div>
        <p class="text-yellow-400 mb-4">
            "${document.getElementById("review-text").value}"
        </p>
        <div class="flex space-x-1 text-yellow-400">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
    </div>
  `;

  reviewContainer.innerHTML += reviewItem;

  document.getElementById("name").value = "";
  document.getElementById("review-title").value = "";
  document.getElementById("review-text").value = "";
});

history.pushState(null, null, location.href); // Add a history entry

window.addEventListener("popstate", (e) => {
  e.defaultPrevented();
  const box = document.querySelector(".cart-menu");
  if (box.style.display !== "none") {
    box.style.display = "none"; // Hide the element
    history.pushState(null, null, location.href); // Prevent further navigation
  } else {
    history.back(); // Go back to the previous page if already hidden
  }
});

history.pushState(null, null, location.href); // Add a history entry

window.addEventListener("popstate", (e) => {
  e.defaultPrevented();
  const box = document.querySelector(".lg");
  if (box.style.display !== "none") {
    box.style.display = "none"; // Hide the element
    history.pushState(null, null, location.href); // Prevent further navigation
  } else {
    history.back(); // Go back to the previous page if already hidden
  }
});

history.pushState(null, null, location.href); // Add a history entry

window.addEventListener("popstate", (e) => {
  e.defaultPrevented();
  const box = document.querySelector(".sg");
  if (box.style.display !== "none") {
    box.style.display = "none"; // Hide the element
    history.pushState(null, null, location.href); // Prevent further navigation
  } else {
    history.back(); // Go back to the previous page if already hidden
  }
});

history.pushState(null, null, location.href); // Add a history entry

window.addEventListener("popstate", (e) => {
  e.defaultPrevented();
  const box = document.querySelector(".about");
  if (box.style.display !== "none") {
    box.style.display = "none"; // Hide the element
    history.pushState(null, null, location.href); // Prevent further navigation
  } else {
    history.back(); // Go back to the previous page if already hidden
  }
});

history.pushState(null, null, location.href); // Add a history entry

window.addEventListener("popstate", (e) => {
  e.defaultPrevented();
  const box = document.querySelector(".contact");
  if (box.style.display !== "none") {
    box.style.display = "none"; // Hide the element
    history.pushState(null, null, location.href); // Prevent further navigation
  } else {
    history.back(); // Go back to the previous page if already hidden
  }
});
