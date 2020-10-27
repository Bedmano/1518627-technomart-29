let feedbackLink = document.querySelector(".open-feedback");
let mapLink = document.querySelector(".open-map");
let buyLinks = document.querySelectorAll(".buy");
let modal = document.querySelectorAll(".modal");
let close = document.querySelectorAll(".modal-close");
let feedback = document.querySelector(".modal-feedback");
let cart = document.querySelector(".modal-cart");

for (let buyLink of buyLinks) {
  buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.add("modal-show");
    if (cart.classList.contains("modal-show")) {
      close[0].addEventListener("click", function (evt) {
        cart.classList.remove("modal-show");
      });
    }
  });
}

let name = feedback.querySelector("[name=name]");
let email = feedback.querySelector("[name=email]");

let isStorageSupport = true;
let storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal[0].classList.add("modal-show");
  if (modal[0].classList.contains("modal-show")) {
    close[0].addEventListener("click", function (evt) {
      modal[0].classList.remove("modal-show");
      modal[0].classList.remove("modal-error");
    });
  }
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("кнопка нажата");
  modal[1].classList.add("modal-show");
  if (modal[1].classList.contains("modal-show")) {
    close[1].addEventListener("click", function (evt) {
      modal[1].classList.remove("modal-show");
    });
  }
});
feedback.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    modal[0].classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});
