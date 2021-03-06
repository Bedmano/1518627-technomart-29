{
  const feedbackLink = document.querySelector(".open-feedback");
  const mapLink = document.querySelector(".open-map");
  const buyLinks = document.querySelectorAll(".buy");
  const modal = document.querySelectorAll(".modal");
  const close = document.querySelectorAll(".modal-close");
  const feedback = document.querySelector(".modal-feedback");
  const cart = document.querySelector(".modal-cart");
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
  let isStorageSupport = true;
  const storage = "";
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  if (feedback) {
    const name = feedback.querySelector("[name=name]");
    const email = feedback.querySelector("[name=email]");
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
  }
  if (feedbackLink) {
    feedbackLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal[0].classList.add("modal-show");
      if (modal[0].classList.contains("modal-show")) {
        close[1].addEventListener("click", function (evt) {
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
  }
  if (mapLink) {
    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal[1].classList.add("modal-show");
      if (modal[1].classList.contains("modal-show")) {
        close[2].addEventListener("click", function (evt) {
          modal[1].classList.remove("modal-show");
        });
      }
    });
  }
}
