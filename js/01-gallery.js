import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const imagesMarkup = galleryHandler(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function galleryHandler(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a ></div>`;
        })
        .join("");
};

galleryEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    };
    const bigImage = e.target.getAttribute("data-source");
    const instance = basicLightbox.create(`<img src="${bigImage}" width="800"px height="600"px>`);
    instance.show();
});