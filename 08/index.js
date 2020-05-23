import galItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".lightbox"),
  lightboxImage: document.querySelector(".lightbox__image"),
  closeButton: document.querySelector(".lightbox__button"),
  lightboxOverlay: document.querySelector(".lightbox__overlay"),
};

function createGalleryList(arr) {
  return arr
    .map(e => {
      const li = `
    <li class="gallery__item">
    <a 
    class="gallery__link"
    href="${e.original}">
    <img class="gallery__image" src="${e.preview}" data-source="${e.original}" 
    alt="${e.description}" />
    </a>
    </li>`;
      return li;
    })
    .join("");
}

refs.gallery.insertAdjacentHTML("afterbegin", createGalleryList(galItems));

refs.gallery.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }

  const el = e.target;
  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.setAttribute("src", `${el.getAttribute("data-source")}`);
  refs.lightboxImage.setAttribute("alt", `${el.getAttribute("alt")}`);
}

refs.closeButton.addEventListener("click", closeLightbox);
document.addEventListener("keydown", closeLightboxEsc);
// refs.lightboxOverlay.addEventListener("click", closeLightboxOverlay);

function closeLightbox() {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.setAttribute("src", "");
  refs.lightboxImage.setAttribute("alt", "");
}

function closeLightboxEsc(e) {
  if (e.code == "Escape") {
    closeLightbox();
  }
}

// function closeLightboxOverlay(e) {
//   closeLightbox();
// } так и не понял, почему не срабатывает на div. Может его нужно было сделать через toggle?

// const nextEl = el.closest("li");
// console.log(nextEl.nextElementSibling);
// console.log(nextEl.previousElementSibling);
// e.code == ArrowLeft;
// e.code == ArrowRight;
