import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(`.gallery`);

const markup = galleryItems.reduce((acc, {preview,original,description}) => 
acc + `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`, ``);

gallery.insertAdjacentHTML(`beforeend`,markup);


gallery.addEventListener (`click`, activeOnClick);
function activeOnClick (event) {
  event.preventDefault();
  if (event.target.nodeName !== `IMG`){
    return
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
gallery.addEventListener(`keydown`,(event) => {
  if (event.code === "Escape") {
    instance.close()
  }
  
})
  
}


console.log(galleryItems);
